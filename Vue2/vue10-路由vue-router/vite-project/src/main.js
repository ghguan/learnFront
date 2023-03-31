import Vue from 'vue'
import App from './App.vue'
// 引入router
import router from './router/index.js'
// 引入组件
// import { Button, Icon, Tabbar, TabbarItem } from 'vant'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.use(Tabbar)
// Vue.use(TabbarItem)

new Vue({
  render: h => h(App),
  //将路由对象注入到new Vue实例中 
  router,
}).$mount('#app')