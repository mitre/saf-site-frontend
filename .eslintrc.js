module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
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
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'prettier' // Make sure this is the last
  ],
  plugins: ['vue'],
  globals: {
    // Add GraphQL functions as globals to fix no-undef eslint errors
    GqlGetBlogDataFromAuthor: 'readonly',
    GqlGetBlogDataFromID: 'readonly',
    GqlGetBlogAuthor: 'readonly',
    GqlBlogPosts: 'readonly',
    GqlGetAllDocumentation: 'readonly',
    GqlGetIndexDocumentation: 'readonly',
    GqlGetDocumentation: 'readonly',
    GqlGetFaqByQuestionNumber: 'readonly',
    GqlGetTrainingData: 'readonly',
    GqlGetScheduleData: 'readonly',
    GqlGetGuidanceDataFromID: 'readonly',
    GqlGetValidateData: 'readonly',
    GqlGetHardenData: 'readonly',
    GqlGetGettingStartedPage: 'readonly',
    GqlGetToolset: 'readonly',
    GqlGetCapabilities: 'readonly',
    GqlGetSponsors: 'readonly',
    GqlGetVendors: 'readonly',
    GqlGetUserStories: 'readonly',
    GqlGetTenets: 'readonly',
    GqlFAQs: 'readonly',
    GqlGetApplicationPage: 'readonly',
    GqlGetFrameworkPage: 'readonly',
    GqlGetLibraryPageByName: 'readonly',
    useNuxtApp: 'readonly',
    useRoute: 'readonly',
    useAsyncData: 'readonly',
    navigateTo: 'readonly',
    nextTick: 'readonly',
    onBeforeUnmount: 'readonly',
    onMounted: 'readonly',
    reactive: 'readonly',
    ref: 'readonly',
    toRefs: 'readonly'
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
      ]
    }
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off', // This should be supported in Vue 3 and seems to break command palette code
    'no-restricted-syntax': 'off'
  }
};
