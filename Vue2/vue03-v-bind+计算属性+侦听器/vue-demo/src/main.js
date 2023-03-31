import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注册全局组件
// import 组件对象 from '路径'
// Vue.component('组件名',组件对象)

new Vue({
  render: h => h(App),
}).$mount('#app')
