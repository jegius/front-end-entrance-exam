import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    // rules: {
    //   "semi": ["error", "always"],
    //   "quotes": ["error", "double"]
    //}
  },
  prettierConfig,
];
