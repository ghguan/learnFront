// 不需要导入，可以直接使用的一些模块/语法
// 类似于浏览器中window对象

// 1. console.log()
console.log('哈哈哈')

// 2.setTimeout()/setInterval()
setTimeout(()=>{
    console.log('123')
},1000)
setInterval(()=>{
    console.log(456)
},1000)

// 3.__dirname
console.log(__dirname)  //D:\桌面\node\day01
// __dirname:当前.js文件所在的文件夹的绝对路径，（路径以此文件所在的文件夹结尾）

// 4.__filename
console.log(__filename) //D:\桌面\node\day01\02global模块.js
// __filename: 当前.js文件的绝对路径 （路径以此文件结尾）
