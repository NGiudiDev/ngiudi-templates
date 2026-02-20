import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },
    rules: {
      "eol-last": ["error", "never"],
      "quotes": ["error", "double"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "semi": ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];