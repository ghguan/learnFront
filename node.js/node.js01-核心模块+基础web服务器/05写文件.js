// 1.导入模块
const fs = require("fs")
const path = require("path")
// 2.使用方法 - writeFileSync()
// writeFileSync()-写文件
// 语法
// fs.writeFileSync(file, data[, options])
// 参数
// file：文件路径
// data：要写入文件的内容 (支持中文)
// options：选参
// 返回值：
// undefined

// (1)文件不存在
const res = fs.writeFileSync('./test/写个文件.txt', '你好，文件不存在，创建了一个，并且你写成功啦')
console.log('res',res) // res undefined
// 读文件
const res1 = fs.readFileSync('./test/写个文件.txt','utf-8')
console.log('res1',res1) // res1 你好，文件不存在，创建了一个，并且你写成功啦

// (2)文件存在
fs.writeFileSync('./test/info.md','你好，文件存在，又写了一点吗')
// 读文件
const res2 = fs.readFileSync('./test/info.md','utf-8')
console.log('res2',res2) // res2 你好，文件存在，又写了一点吗

// (3)文件夹不存在
fs.writeFileSync('./不存在的文件夹/写个文件.md','你好，不存在的文件夹也写成功啦')
// 读文件
const res3 = fs.readFileSync('./不存在的文件夹/写个文件.md','utf-8')
// 报错
console.log('res3',res3)

// 综上
// 文件不存在，writeFileSync()会创建文件，并写入内容
// 文件已存在，writeFileSync()会将写入的内容覆盖原来的内容
// 文件路径中有不存在的文件夹，报错 
// ==> writeFileSync() 能创建文件，不能创建文件夹





