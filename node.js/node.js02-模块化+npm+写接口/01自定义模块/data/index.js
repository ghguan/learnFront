// 1. 导入模块
const fs = require('fs')
const path = require('path')

// 2. 读文件
// ===> 以后读文件写文件，都用绝对路径
const fullPath = path.join(__dirname, './info.json')
const res = fs.readFileSync(fullPath, 'utf-8')

const arr = JSON.parse(res)
// console.log(arr)

// 3. 从数组中随机取一个对象
// 随机下标
const index = parseInt(Math.random() * arr.length)
const luckDog = arr[index]
luckDog.count++
console.log(luckDog)

// 4. 写回去 
fs.writeFileSync(fullPath, JSON.stringify(arr))