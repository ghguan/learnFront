// main.js 入口文件

// 1. 引入Vue
import Vue from 'vue'
// 2. 引入App根组件
import App from './App.vue'

// 关闭提示
Vue.config.productionTip = false

// 3. 实例化Vue对象
new Vue({
  // el:'#app',
  // render是一个渲染函数，告诉Vue把App这个根组件，渲染到/挂载到
  render: h => h(App),
  // id为app的节点下
}).$mount('#app')