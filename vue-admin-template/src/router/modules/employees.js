import Layout from '@/layout'
export default {
  path: '/employees',
  component: Layout,
  children: [{
    path: '',
    name: 'employees',
    component: () => import('@/views/employees/index.vue'),
    meta: { title: '员工', icon: 'table' }
  },
  // {
  //   path: '/import',
  //   component: () => import('@/views/import/index'),
  //   hidden: true
  // },
  {
    path: 'detail/:id',
    hidden: true,
    component: () => import('@/views/employees/detail.vue'),
    name: 'empl'
  },
  {
    path: 'print/:id',
    hidden: true,
    component: () => import('@/views/employees/print.vue')
  }
  ]
}
