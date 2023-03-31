import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// 批量导入文件
// 是webpack提供的功能，提供的一个API，高级用法
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// require单独引入的方式是这样的
// require('./svg/eye.svg')
