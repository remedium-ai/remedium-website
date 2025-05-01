import theme from "./src/config/theme.json";
import generateTypeScale from "./src/lib/utils/generateTypeScale";

let font_base = Number(theme.fonts.font_size.base.replace("px", ""));
let font_scale = Number(theme.fonts.font_size.type_scale);

const [h1, h2, h3, h4, h5, h6] = generateTypeScale(font_scale);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  safelist: [],
  theme: {
    screens: {
      xs: "440px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "text-default": theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
        secondary: theme.colors.default.theme_color.secondary,
        accent: theme.colors.default.theme_color.accent,
        body: theme.colors.default.theme_color.body,
        "border-default": theme.colors.default.theme_color.border,
        "theme-dark": theme.colors.default.theme_color.theme_dark,
        "theme-light": theme.colors.default.theme_color.theme_light,
      },
      fontSize: {
        base: font_base + "px",
        "base-sm": font_base * 0.95 + "px",
        "base-xs": font_base * 0.8 + "px",
        h1: h1 + "rem",
        "h1-md": h1 * 0.8 + "rem",
        "h1-sm": h1 * 0.7 + "rem",
        h2: h2 + "rem",
        "h2-md": h2 * 0.8 + "rem",
        "h2-sm": h2 * 0.7 + "rem",
        h3: h3 + "rem",
        "h3-md": h3 * 0.8 + "rem",
        "h3-sm": h3 * 0.7 + "rem",
        h4: h4 + "rem",
        "h4-sm": h4 * 0.85 + "rem",
        h5: h5 + "rem",
        "h5-sm": h5 * 0.95 + "rem",
        h6: h6 + "rem",
      },
      lineHeight: {
        normal: theme.fonts.font_size.line_height,
        inherit: "inherit",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
      borderColor: {
        DEFAULT: theme.colors.default.theme_color.border,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("preline/plugin"),
  ],
};
