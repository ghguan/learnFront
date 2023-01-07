// 1.导入
const fs = require("fs")
const path = require("path")

// 2.读取文件
// const res1 = fs.readFileSync('./test/info.text','utf-8')
// // 报错，无法执行后续代码（同步任务会阻塞代码的顺序执行）
// console.log('res1',res1)
// // 不会打印

// try{}catch(){} 捕获错误代码，输出报错信息，继续执行后续代码

// 解决：将可能出错的代码，放入try{ }中，catch(){}中接收错误信息
const path1 = path.join(__dirname,'./test/info.txt')
try{
    const res2 = fs.readFileSync(path1,'utf-8')
    console.log('res2',res2)
}catch(err){
    console.log('err',err)
}
console.log('畅通无阻~')
// 畅通无阻~    