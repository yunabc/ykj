module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue-scoped-css/recommended',
    'standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module'

  },
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'space-before-function-paren': ['error', 'never'],
    'vue/array-bracket-spacing': ['error', 'always'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue-scoped-css/no-unused-keyframes': 'error',
    'vue-scoped-css/no-unused-selector': 'error',
    'vue-scoped-css/no-parsing-error': 'error',
    'vue-scoped-css/enforce-style-type': ['error', { allows: ['scoped'] }]
  }
};
