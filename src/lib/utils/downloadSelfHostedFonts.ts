// @ts-nocheck
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  promises as fsPromises,
} from "node:fs";
import path, { join, basename } from "node:path";

type GlobalValues = "inherit" | "initial" | "revert" | "revert-layer" | "unset";

interface Source {
  path: string;
  preload?: boolean;
  css?: Record<string, string>;
  style: string | GlobalValues;
  weight?: string | number | GlobalValues;
}

interface Config {
  name: string;
  src: Source[];
  fetch?: boolean;
  verbose?: boolean;
  selector?: string;
  preload?: boolean;
  cacheDir?: string;
  basePath?: string;
  fallbackName?: string;
  googleFontsURL?: string;
  cssVariable?: string | boolean;
  fallback: "serif" | "sans-serif" | "monospace";
  display: string;
}

/**
 * Downloads font files for self-hosted fonts in development mode or verifies their existence in production.
 * The function processes each font configuration, downloading fonts that are specified as self-hosted.
 *
 * @param {Array<Object>} fontConfigs - Array of font configuration objects.
 * @param {string} fontConfigs[].name - Name of the font (e.g., "Roboto").
 * @param {boolean} fontConfigs[].selfHosted - Whether the font is self-hosted.
 * @param {Array<Object>} fontConfigs[].src - Array of font source objects.
 * @param {string} fontConfigs[].src[].path - Path to the font file (URL or local path).
 * @returns {Promise<Array<Object>>} - Resolves with the updated fontConfigs after processing.
 */
const fontCache = new Map<string, any>();

export async function downloadSelfHostedFonts(
  fontConfigs: Array<any>,
): Promise<any> {
  const isDev = import.meta.env.DEV;
  const loggedFonts = new Set<string>(); // To track fonts already logged
  const downloadedFonts = new Set<string>();

  // Convert fontConfigs to a string key
  const cacheKey = JSON.stringify(fontConfigs);

  // Check if the cache already has this key
  if (fontCache.has(cacheKey)) {
    // console.log("[font] ▶ Reusing cached font configurations.");
    return fontCache.get(cacheKey);
  }

  // Generate new font configurations
  const updatedFontConfigs = await generateFonts(fontConfigs);

  // Cache the updated font configurations
  fontCache.set(cacheKey, updatedFontConfigs);

  // Remove googleFontsURL from the src array to avoid `path not changing as local path`
  updatedFontConfigs.forEach((config) => {
    config.googleFontsURL = undefined;
  });

  await Promise.all(
    updatedFontConfigs.flatMap((fontConfig) =>
      fontConfig.src.map(async (font: any) => {
        const fontUrl = font.path;

        if (fontUrl.startsWith("http")) {
          const filename = basename(new URL(fontUrl).pathname);
          const fontPrefix = join(process.cwd(), "public", "fonts");
          const localPath = join(fontPrefix, filename);

          if (downloadedFonts.has(localPath) || (await fileExists(localPath))) {
            downloadedFonts.add(localPath);
            font.path = `./public/fonts/${filename}`;
            return;
          }

          if (isDev) {
            try {
              await downloadFont(fontUrl, localPath);
            } catch (error) {
              // Log the font only if it hasn't been logged already
              if (!loggedFonts.has(localPath)) {
                console.log(`[font] ▶ Downloaded: ${localPath}`);
                loggedFonts.add(localPath);
              }
            }

            font.path = `./public/fonts/${filename}`;
            downloadedFonts.add(localPath);
          } else {
            console.warn(
              `[font] ▶ Skipping "${fontConfig.name}". Add font files to 'public/fonts' or let dev mode auto-download.`,
            );
          }
        }
      }),
    ),
  );

  return updatedFontConfigs;
}

async function generateFonts(fontCollection: Config[]): Promise<Config[]> {
  const fontsDir = join(process.cwd(), "public", "fonts");
  const fontJSONPath = join(fontsDir, "fonts.json");
  const isOnline = await checkInternetConnection();

  let existingFontData: Config[] = [];
  if (await fileExists(fontJSONPath)) {
    existingFontData = JSON.parse(readFileSync(fontJSONPath, "utf-8"));
  }

  if (isOnline) {
    await Promise.all(
      fontCollection.map(async (config) => {
        if (config.googleFontsURL) {
          try {
            const res = await fetch(config.googleFontsURL, {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
              },
            });

            if (res.ok) {
              const cssText = await res.text();
              config.src = parseGoogleCSS(cssText); // Parse CSS to extract font sources
            } else {
              console.warn(
                `[font] ▶ Failed to fetch Google Fonts URL: ${config.googleFontsURL}`,
              );
            }
          } catch (error) {
            console.error(
              `[font] ▶ Error fetching Google Fonts URL: ${config.googleFontsURL}`,
              error,
            );
          }
        }
      }),
    );
  }

  // Compare existing font data and update if necessary
  const updatedFontData = fontCollection.map((config) => {
    const existingConfig = existingFontData.find((f) => f.name === config.name);
    if (existingConfig) {
      return { ...config, src: existingConfig.src };
    }
    return config;
  });

  // Prepare directory and save fonts.json
  mkdirSync(fontsDir, { recursive: true });

  if (updatedFontData[0].src[0]) {
    writeFileSync(
      fontJSONPath,
      JSON.stringify(updatedFontData, null, 2),
      "utf-8",
    );
  } else {
    console.log(
      "[font] ▶ No fonts.json file found. Make sure you are online to re-generate fonts and fonts.json file.",
    );
  }

  // Download font files
  const indicesMatrix: [number, number, string, string][] = [];
  updatedFontData.forEach((config, i) => {
    if (config.fetch) {
      config.src.forEach((src, j) => {
        indicesMatrix.push([i, j, src.path, config.basePath || fontsDir]);
      });
    }
  });

  await Promise.all(indicesMatrix.map(createFontFiles));

  return updatedFontData;
}

async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fsPromises.mkdir(dirPath, { recursive: true });
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code !== "EEXIST") throw err;
  }
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Downloads a font file from a URL and saves it locally.
 * @param {string} fontUrl - The URL of the font to download.
 * @param {string} localPath - The local file path to save the downloaded font.
 */
async function downloadFont(fontUrl: string, localPath: string): Promise<void> {
  try {
    const response = await fetch(fontUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${fontUrl}`);
    const buffer = Buffer.from(await response.arrayBuffer());

    await ensureDirectoryExists(path.dirname(localPath));
    await fsPromises.writeFile(localPath, buffer);
  } catch (err) {
    console.error(
      `[font] ▶ Error downloading ${fontUrl}:`,
      "You might be offline. Check your internet connection.",
    );
  }
}

function parseGoogleCSS(tmp: string) {
  let match;
  const fontFaceMatches = [];
  const fontFaceRegex = /@font-face\s*{([^}]+)}/g;

  while ((match = fontFaceRegex.exec(tmp)) !== null) {
    const fontFaceRule = match[1];
    const fontFaceObject: any = {};
    fontFaceRule.split(";").forEach((property) => {
      if (property.includes("src") && property.includes("url")) {
        try {
          fontFaceObject["path"] = property
            .trim()
            .split(/\(|\)|(url\()/)
            .find((each) => each.trim().includes("https:"))
            ?.trim();
        } catch (e) {}
      }
      if (property.includes("-style")) {
        fontFaceObject["style"] = property.split(":").map((i) => i.trim())[1];
      }
      if (property.includes("-weight")) {
        fontFaceObject["weight"] = property.split(":").map((i) => i.trim())[1];
      }
      if (property.includes("unicode-range")) {
        if (!fontFaceObject["css"]) fontFaceObject["css"] = {};
        fontFaceObject["css"]["unicode-range"] = property
          .split(":")
          .map((i) => i.trim())[1];
      }
    });
    fontFaceMatches.push(fontFaceObject);
  }
  return fontFaceMatches;
}

async function checkInternetConnection(): Promise<boolean> {
  try {
    const response = await fetch("https://www.google.com", { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

async function createFontFiles(fontPath: [number, number, string, string]) {
  const [i, j, fontUrl, basePath] = fontPath;

  const fontFileName = basename(fontUrl);
  const targetPath = join(basePath, "__astro_font_generated__", fontFileName);

  if (await fileExists(targetPath)) return [i, j, targetPath];

  const fontBuffer = await getFontBuffer(fontUrl);
  if (fontBuffer) {
    await ensureDirectoryExists(path.dirname(targetPath));
    writeFileSync(targetPath, fontBuffer);
    console.log(`[font] ▶ Generated: ${targetPath}`);
    return [i, j, targetPath];
  }

  return [i, j, fontUrl];
}

async function getFontBuffer(fontUrl: string): Promise<Buffer | undefined> {
  try {
    if (fontUrl.startsWith("http")) {
      const response = await fetch(fontUrl);
      return Buffer.from(await response.arrayBuffer());
    }

    if (existsSync(fontUrl)) {
      return readFileSync(fontUrl);
    }
  } catch {
    return undefined;
  }
}
