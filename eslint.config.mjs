const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
  // Optional: browser-specific files
  {
    files: ["**/*.browser.js"],
    languageOptions: {
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: { js },
    extends: ["js/recommended"],
  },
];
