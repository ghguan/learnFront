import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局导入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 按需导入
import { Cell, Calendar, Slider } from 'vant'
// 可以链式调用
Vue.use(Cell).use(Calendar).use(Slider)
// Vue.use(Calendar)
// Vue.use(Slider)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
