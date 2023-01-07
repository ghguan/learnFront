// 1.导入模块
const path = require("path")
const fs = require("fs")

console.log(path.join('a','b')) // a\b
console.log(path.join('./a','./b')) // a\b
console.log(path.join('a','../b','/c')) // b\c
console.log(path.join('a','b/c','./d','..','e')) // a\b\c\e

// 拼接规则：
// 按传参顺序拼接 a\b
// ..表示回退一层

// 得到一个拼接的绝对路径
const path1 = path.join(__dirname,'./test/info.md')
console.log(path1)
// D:\桌面\node\day01\test\info.md
const res = fs.readFileSync(path1,'utf-8')
console.log(res)
// 你好，文件存在，又写了一点吗

// 总结
// 通常 path.join()+传入 __dirname + 目标文件的相对路径 组合使用
// 好处：__dirname 获取的是此刻次文件的绝对路径，会随着文件路径的更改而更改




