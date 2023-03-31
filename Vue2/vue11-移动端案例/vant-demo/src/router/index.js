import Vue from 'vue'
import VueRouter from 'vue-router'

// import Layout from '@/views/layout.vue'
// import Detail from '@/views/detail.vue'
// import Login from '@/views/login.vue'
// import Register from '@/views/register.vue'

// - 首页（一级） layout
//       - 面经（二级）article
//       - 收藏（二级）collect
//       - 喜欢（二级）like
//       - 我的（二级）my
// - 文章详情页（一级） detail
// - 登录页 （一级） login
// - 注册页（一级） register

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // {
    //   path: '/', redirect: '/layout'
    // },
    // {
    //   path: '/layout', component: Layout
    // },
    // {
    //   path: '/detail', component: Detail
    // },
    // {
    //   path: '/login', component: Login
    // },
    // {
    //   path: '/register', component: Register
    // }

  ]
})

export default router
