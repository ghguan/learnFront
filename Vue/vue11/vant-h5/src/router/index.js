import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout.vue'
import Detail from '@/views/detail.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'

import Article from '@/views/sec/article.vue'
import Collect from '@/views/sec/collect.vue'
import Like from '@/views/sec/like.vue'
import My from '@/views/sec/user.vue'

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
    { path: '/', redirect: '/layout' },
    {
      path: '/',
      // redirect: '/layout',
      component: Layout,
      children: [
        { path: '/article', component: Article },
        { path: '/collect', component: Collect },
        { path: '/like', component: Like },
        { path: '/my', component: My }
      ]
    },
    { path: '/detail/:id', component: Detail },
    { path: '/login', component: Login },
    { path: '/register', component: Register }

  ]
})

export default router
