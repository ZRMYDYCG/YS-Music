/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    // 解决 eslint、prettier 冲突问题
    'plugin:prettier/recommended',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
