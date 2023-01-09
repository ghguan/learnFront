// 导入
const fs = require("fs")
const path = require("path")

// 使用
// 绝对路径拼接
const path1 =path.join(__dirname,'./data/info.json')

// 读文件
const read1 = fs.readFileSync(path1,'utf-8')
// console.log(read1)
// console.log(JSON.parse(read1))

// 字符串转数组
const arr = JSON.parse(read1)

//随机数 
const num = parseInt(Math.random()*arr.length )
// console.log(num)

// 幸运儿的count属性+1
// console.log(arr[num].count++)
arr[num].count++
console.log(arr[num])

// 写文件，会覆盖原文件的内容
fs.writeFileSync('./data/info1.json',JSON.stringify(arr))
// 注意写文件时，想创建新文件，注意其地址