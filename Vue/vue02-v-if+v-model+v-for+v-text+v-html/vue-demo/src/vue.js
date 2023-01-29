// 1.创建工程化项目 vue create vue-dome

// 2. vue.config.js 中 关闭ESlint的校验
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭ESLint的校验
  lintOnSave:false,
})

// 3. App.vue组件，main.js渲染组件到页面