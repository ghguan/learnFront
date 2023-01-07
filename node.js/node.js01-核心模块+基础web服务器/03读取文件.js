// 1.导入模块
const fs = require("fs")
const path = require("path")
// 2.使用方法-readFileSync()
// readFileSync()：读取文件
// 语法
// fs.readFileSync(path[, options])
// 参数（字符串）
// 必参path：文件路径
// 选参options：编码方式等等
// 返回值
// 读取的文件内容
const path1 = path.join(__dirname,'./test/读取这个文件.txt')
const res1 = fs.readFileSync(path1) 
console.log('res1',res1)
//res1 <Buffer e4 bd a0 e5 a5 bd e5 91 80 ef bc 8c e8 af bb e5 88 b0 e6 88 91 e5 95 a6>

const res2 = fs.readFileSync(path1,'utf-8') 
console.log('res2',res2)
// 你好呀，读到我啦

// 路径出错/文件名错误
const res3 = fs.readFileSync('./test/info.txt')
// 报错