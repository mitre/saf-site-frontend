module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:nuxt/recommended',
    'prettier' // Make sure this is the last
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    //'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    // not needed for vue 3
    'vue/no-multiple-template-root': 'off'
  }
};
