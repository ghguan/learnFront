// 导入自定义模块
const myModule = require("./data/自定义模块")

// myModule 的返回值
console.log(myModule)
// { msg: '我是msg变量', fn: [Function: fn] }

// 使用myModule中的变量
console.log(myModule.msg)
// 我是msg变量

// 使用myModule的方法
myModule.fn()
// 我是方法

// 使用myModule，没导出的内容
console.log(myModule.info)
// undefined
// 访问不到