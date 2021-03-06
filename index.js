module.export = {
  "parser": "@typescript-eslint/parser",
  "extends": ["plugin:@typescript-eslint/recommended", "prettier"],
  "plugins": ["@typescript-eslint", "react", "prettier"],
  "rules": {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "prettier/prettier": ["error", {
      "printWidth": 80,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "singleQuote": true,
      "trailingComma": "all",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "arrowParens": "avoid"
    }]
  }
}