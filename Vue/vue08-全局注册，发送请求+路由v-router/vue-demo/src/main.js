import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import FindCom from './components/FindCom.vue'
import MyCom from './components/MyCom.vue'
import PartCom from './components/PartCom.vue'

Vue.config.productionTip = false
    
Vue.prototype.$http = axios 

// 下载vue-router模块 @3.6.5
// 1. 在main.js中引入
// 2. 添加到Vue.use()身上
// 3. 创建VueRouter实例对象
// 4. 将路由对象注入 到new Vue 实例中 
Vue.use(VueRouter)
const router = new VueRouter({  
  routes:[
    {path:'/find', component: FindCom  },
    {path:'/my', component: MyCom  },
    {path:'/part', component: PartCom },
  ]
})



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
