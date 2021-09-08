module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module'

  },
  rules: {
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'vue/array-bracket-spacing': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case']
  }
};
