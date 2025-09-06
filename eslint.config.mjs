// eslint.config.cjs
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // your rules here
    },
  },
  js.configs.recommended,
];
