import Vue from 'vue'
// 1. 下载
// 2. 引入VueRouter函数
import VueRouter from 'vue-router'

// 导入一级路由组件
import Layout from '../views/layout.vue'
import Detail from '../views/article-detail.vue'
// 导入二级路由组件
import Article from '../views/article.vue'
import Collect from '../views/collect.vue'
import Like from '../views/like.vue'
import User from '@/views/user.vue'


// 3. 添加到Vue.use()上，注册全局RouterLink和RouterView组件
Vue.use(VueRouter)

// 4. 创建路由对象
const router = new VueRouter({
    routes:[
        // 1. 一级路由规则
        // {path:'路径',component:组件}
        // 重定向
        { 
            path:'/',redirect:'/article',
        },
        {            
            path:'/',
            component:Layout,
            // 二级路由规则
            children:[
                { path:'article',component:Article },
                { path:'collect',component:Collect },
                { path:'like',component:Like },
                { path:'user',component:User },
            ]
        },
            // 1. 配置动态路由
            // 2. 给article每一个item绑定点击事件
            // 3. 进入了详情页,左上角还有一个返回按钮
            
        // 配置动态路由
        {path:'/detail/:id',component:Detail},

        
    ]
})

// 5. 将路由对象注入到new Vue实例中
// 导出
export default router