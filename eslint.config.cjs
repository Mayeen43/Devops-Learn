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
    //  plugins: { js: require("@eslint/js") },
    // extends: ["js/recommended"],
    rules: {
  // // Enforce consistent indentation (2 spaces)
  // "indent": ["error", 2],

  // // Enforce semicolons at the end of statements
  // "semi": ["error", "always"],

  // // Enforce single quotes for strings
  // "quotes": ["error", "single"],

  // // Disallow unused variables
  // "no-unused-vars": ["warn"],

  // // Disallow console logs (optional, you can set to "off" in dev)
  // "no-console": ["warn"],

  // // Enforce consistent spacing inside braces
  // "object-curly-spacing": ["error", "always"],

  // // Enforce consistent linebreak style
  // "linebreak-style": ["error", "unix"],

  // // Require `===` and `!==` instead of `==` and `!=`
  // "eqeqeq": ["error", "always"],

  // // Disallow redeclaring variables
  // "no-redeclare": ["error"],

  // // Disallow unreachable code
  // "no-unreachable": ["error"],

  // // Enforce consistent trailing commas where valid in ES5 (optional)
  // "comma-dangle": ["error", "only-multiline"]
}

  },
  js.configs.recommended,
];
