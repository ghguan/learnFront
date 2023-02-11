import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routers:[
    // {path:'/',component:}
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
