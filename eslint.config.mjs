import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], // Node files
    languageOptions: {
      sourceType: "commonjs",      // Node default
      globals: globals.node,       // Node globals like process, __dirname
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
  // Optional: browser files
  {
    files: ["**/*.browser.js"],    // if you have browser-specific scripts
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
]);
