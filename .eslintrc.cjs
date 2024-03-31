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
  rules: {
    //在rules中添加自定义规则
    // 添加组件命名忽略规则
    "vue/multi-word-component-names": ["error",{
      "ignores": ["index", "Layout"] //需要忽略的组件名
    }]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
