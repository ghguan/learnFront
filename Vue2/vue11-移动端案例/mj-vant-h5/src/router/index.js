import Vue from 'vue'
import VueRouter from 'vue-router'

// 默认导入自定义组件
import Layout from '@/views/layout.vue'

// 按需导入自定义组件
import { getToken } from '@/utils/storage.js'

// 导入vant组件
import { Toast } from 'vant'
const Detail = () => import('@/views/detail')
const Register = () => import('@/views/register')
const Login = () => import('@/views/login')
const Article = () => import('@/views/second/article')
const Collect = () => import('@/views/second/collect')
const Like = () => import('@/views/second/like')
const My = () => import('@/views/second/user')

Vue.use(VueRouter)
// - 首页（一级） layout
//       - 面经（二级）article
//       - 收藏（二级）collect
//       - 喜欢（二级）like
//       - 我的（二级）my
// - 文章详情页（一级） detail
// - 登录页 （一级） login
// - 注册页（一级） register
const router = new VueRouter({
  routes: [
    // 一级路由
    // 配置首页重定向
    { path: '/', redirect: '/article' },
    {
      path: '/layout',
      component: Layout,
      // 二级路由
      children: [
        { path: '/article', component: Article },
        { path: '/collect', component: Collect },
        { path: '/like', component: Like },
        { path: '/my', component: My }
      ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    // 动态路由-传参
    { path: '/detail/:id', component: Detail }
  ]
})

// 全局前置守卫
// 创建路径白名单
const whiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  // 每次跳转路由的时候，实时判断是否有token
  const token = getToken()
  console.log(token)
  if (token) {
    next() // 放行
  } else {
    // 判断一个字符串，在数组中是否存在 includes / indexOf
    if (whiteList.includes(to.path)) {
      next() // 放行
    } else {
      Toast('未登录哦')
      next('/login') // 拦截跳转到指定页面去
    }
  }
})

export default router
