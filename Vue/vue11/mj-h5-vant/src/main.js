import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Cell, Calendar } from 'vant'
// import Vant from 'vant'
import 'vant/lib/index.css'

// Vue.use(Vant)
Vue.config.productionTip = false

Vue.use(Cell).use(Calendar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
