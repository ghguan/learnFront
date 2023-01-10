// 默认导入
// import 模块名 from '路径'

// 1. 路径文件扩展名不能省略
// import module from './module/01默认导出模块' 

import module from './module/01默认导出模块.js'

// 调用模块的属性和方法，不能直接使用，通过模块名调用
// console.log(msg) ❌
// sayHi()❌

console.log(module.msg)
module.sayHi()