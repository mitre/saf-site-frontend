module.exports = {
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // Override or add rules settings here
    // Example: 'vue/no-unused-vars': 'error'
    // "no-console": ["error", { allow: ["warn", "error"] }]

    // To use Nuxt's automatic routing we must use the file names. Therefore OVERRIDE
    'vue/multi-word-component-names': 'off',
    'no-undef': 'warn'
  }
};
