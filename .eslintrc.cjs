module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react", "react-refresh", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "prettier/prettier": "error",
    "react-refresh/only-export-components": "warn",
  },
};
