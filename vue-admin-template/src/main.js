import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import '@/directive/index'
// import '@/components'
import Ui from '@/components'
Vue.use(Ui)
// 导入i18n
import i18n from '@/lang'

// import '@/filter'
// 批量注册过滤器
import * as filter from '@/filter'
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]))
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // 6.将i18n实例挂载到Vue实例上
  i18n,
  router,
  store,
  render: h => h(App)
})

// q:i18n 的挂载和注册的区别是什么？
// a:挂载是将i18n实例挂载到Vue实例上，注册是将i18n实例注册到Vue实例上
// a:挂载是this.$xx，注册是给Vue.prototype
// a:挂载是给this添加属性，注册是给Vue原型链添加属性
// q:路由模式有哪些？
// a:hash模式和history模式
// q:hash模式和history模式的区别是什么？
// a:hash模式是在url后面加#，history模式是在url后面不加#
// 具体点
// hash模式是在url后面加#，history模式是在url后面不加#
// hash模式是通过监听hashchange事件，history模式是通过监听popstate
// q:hash模式和history模式的优缺点是什么？
// a:hash模式的优点是兼容性好，缺点是不美观，history模式的优点是美观，缺点是兼容性差
// q:hash模式和history模式的原理是什么？
// a:hash模式是通过监听hashchange事件，history模式是通过监听popstate事件
