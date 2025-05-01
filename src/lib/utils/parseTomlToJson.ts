import fs from "fs";
import * as toml from "toml";

// In-memory cache
let cachedConfig: any = null;

// Path to the config file
const configFilePath = "./src/config/config.toml";

// Watch the file for changes
fs.watch(configFilePath, (eventType, filename) => {
  if (filename === "config.toml" && eventType === "change") {
    cachedConfig = null;
  }
});

// Parse TOML function with cache
export default function parseTomlToJson(filePath: string): any {
  // Check if the cache exists and return it
  if (cachedConfig) {
    return cachedConfig;
  }

  try {
    // Read and parse the TOML file
    const content = fs.readFileSync(filePath, "utf8");

    if (!content) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Parse TOML to JSON
    const tomlContent = toml.parse(content);

    let parsedToml = JSON.stringify(tomlContent, null, 2);
    parsedToml = JSON.parse(parsedToml);

    // Remove empty keys recursively
    function removeEmptyKeys(obj: any) {
      Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (value === "") {
          delete obj[key];
        } else if (typeof value === "object" && value !== null) {
          removeEmptyKeys(value);
          if (Object.keys(value).length === 0) {
            delete obj[key];
          }
        }
      });
      return obj;
    }

    parsedToml = removeEmptyKeys(parsedToml);

    // Cache the result for future use
    cachedConfig = parsedToml;

    return cachedConfig;
  } catch (error) {
    console.error(`Error parsing TOML file: ${error}`);
    throw error;
  }
}
