// 导入
const data = require("./data/01数据模块封装") 

// 使用
const newsRes = data.rtNews()
// 要（）调用，才能执行函数内的代码
console.log(newsRes)
// news.json中的数据

const res2 = data.rtNews
console.log(res2)
// [Function: rtNews]

const stuRes = data.rtStus()
console.log(stuRes)

const luckDog = data.luckDog()
console.log(luckDog)
