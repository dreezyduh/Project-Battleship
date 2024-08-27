import globals from "globals";
import pluginJs from "@eslint/js";
import html from "@html-eslint/eslint-plugin";

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];