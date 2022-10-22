module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react", "@typescript-eslint", "prettier"
  ],
  "settings": {
    "react": {
      "version": 'detect'
    }
  },
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "no-console": 'error',
    "no-debugger": 'error',
    "semi": 0,
    "quotes": 0,
    "space-before-function-paren": 'warn',
    "keyword-spacing": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "after-used" }],
    "no-trailing-spaces": 'warn',
    "no-irregular-whitespace": 'warn',
    "no-return-assign": 0,
    "comma-dangle": 'warn',
    "no-tabs": "off",
    'no-empty-function': 2,
    'no-const-assign': 'error', /* 禁止改变用const声明的变量 */
  }
}
