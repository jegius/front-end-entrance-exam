import pluginJs from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["dist"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
