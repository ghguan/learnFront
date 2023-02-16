// 全局导入
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AaticleItem from '@/components/article-item.vue'
// 引入vant样式
import 'vant/lib/index.css'
// vant的全部导入
// import Vant from 'vant'
// 把vant中所有的组件都导入了
// Vue.use(Vant)

// vant的按需导入

import { Icon, Button, Tabbar, TabbarItem, Form, Field, NavBar, Cell, List, Grid, GridItem, CellGroup } from 'vant'
Vue.use(NavBar)
Vue.use(Form)
Vue.use(Field)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Icon)
Vue.use(Grid).use(GridItem).use(CellGroup)
//  可以链式调用
// Vue.use(Button).use(Icon)

Vue.config.productionTip = false

// 全局注册组件
Vue.component('article-item', AaticleItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
