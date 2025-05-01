import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import languagesJSON from "./src/config/language.json";
import rehypeExternalLinks from "rehype-external-links";
import remarkParseContent from "./src/lib/utils/remarkParseContent.ts";
import tailwind from '@astrojs/tailwind';
import parseTomlToJson from "./src/lib/utils/parseTomlToJson.ts";

const config = parseTomlToJson("./src/config/config.toml");
let supportedLanguages = [...languagesJSON.map((lang) => lang.languageCode)];

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: {
      enable: multilingualEnable,
      show_default_lang_in_url,
      default_language,
      disable_language,
    },
  },
} = config;

// Remove default language from supportedLanguages
disable_language = multilingualEnable
  ? disable_language
  : supportedLanguages.map((lang) => lang !== "en" && lang).filter(Boolean);

// Filter out disabled languages from supportedLanguages
const locales = disable_language
  ? supportedLanguages.filter((lang) => !disable_language.includes(lang))
  : supportedLanguages;

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "https://dev-web.remedium.ai",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  i18n: {
    locales: locales,
    defaultLocale: default_language,
    routing: {
      redirectToDefaultLocale: show_default_lang_in_url ? false : true,
      prefixDefaultLocale: show_default_lang_in_url,
    },
  },
  integrations: [
    tailwind(),
    react(),
    sitemapConfig.enable ? sitemap() : null,
    AutoImport({
      imports: [
        "@/shortcodes/Button.astro",
        "@/shortcodes/Accordion.astro",
        "@/shortcodes/Notice.astro",
        "@/shortcodes/Tabs.astro",
        "@/shortcodes/Tab.astro",
        "@/shortcodes/Testimonial.astro",
        "@/shortcodes/ListCheck.astro",
        "@/shortcodes/StatsWrapper.astro",
        "@/shortcodes/ImageList.astro",
        "@/shortcodes/ImageItem.astro",
        "@/shortcodes/StatsItem.astro",
        "@/shortcodes/VideoInline.astro",
      ],
    }),
    mdx(),
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: "noopener noreferrer nofollow",
          target: "_blank",
        },
      ],
    ],
    remarkPlugins: [
      remarkParseContent, // Parse markdown content and add classes in heading and loading="lazy" to images
      remarkToc,
    ],

    // Code Highlighter https://github.com/shikijs/shiki
    shikiConfig: {
      theme: "min-light", // https://shiki.style/themes
      wrap: false,
    },
    extendDefaultPlugins: true,
  },
  build: {
    minify: true, // Enables Terser for JS minification
    sourcemap: false, // Avoid generating source maps unless debugging
  },
  vite: {
    plugins: [reloadOnTomlChange()],
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
});

// Trigger reload for when changing .toml files
function reloadOnTomlChange() {
  return {
    name: "reload-on-toml-change",
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".toml")) {
        console.log("TOML file changed, triggering reload...");
        server.ws.send({ type: "full-reload" });
      }
    },
  };
}
