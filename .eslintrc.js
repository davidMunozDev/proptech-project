module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    version: 'detect',
  },
  extends: [
    'react-app',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
