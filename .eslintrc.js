module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignores: ['NuxtLink']
      }
    ],
    'vue/no-multiple-template-root': 'off'
  }
}
