import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["output/*.js"],
}, js.configs.recommended, {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.greasemonkey,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        ecmaVersion: 2024,
        sourceType: "module"
    },

    rules: {
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": ["error", { before: true, after: true }],
        "comma-dangle": ["error", "never"],
        "comma-spacing": ["error", { before: false, after: true }],
        "dot-location": ["error", "property"],
        indent: ["error", 4],
        "key-spacing": ["error", { beforeColon: false, afterColon: true }],
        "keyword-spacing": ["error", { before: true, after: true }],
        "no-multi-spaces": "error",
        "no-trailing-spaces": "error",
        "operator-linebreak": ["error", "before"],
        "object-curly-spacing": ["error", "always"],
        "space-before-blocks": ["error", "always"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": ["error", { words: true, nonwords: false }],
        semi: [2, "always"]
    },
}];