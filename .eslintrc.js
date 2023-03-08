module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'plugin:vue/essential',
    './node_modules/eslint-config-airbnb-base/rules/best-practices.js',
    './node_modules/eslint-config-airbnb-base/rules/errors.js',
    './node_modules/eslint-config-airbnb-base/rules/es6.js',
    './node_modules/eslint-config-airbnb-base/rules/imports.js',
    './node_modules/eslint-config-airbnb-base/rules/node.js',
    './node_modules/eslint-config-airbnb-base/rules/strict.js',
    './node_modules/eslint-config-airbnb-base/rules/style.js',
    './node_modules/eslint-config-airbnb-base/rules/variables.js',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'plugin:vue/vue3-recommended',
  ],
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {},
};
