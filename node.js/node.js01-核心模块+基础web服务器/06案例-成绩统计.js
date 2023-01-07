// 1.导入模块
const fs = require("fs")
const path = require("path")
// 拼接路径
const path1 = path.join(__dirname,'./test/成绩.txt')
// 2.读取成绩
// const res = fs.readFileSync('./test/成绩.txt','utf-8')
const res = fs.readFileSync(path1,'utf-8')
console.log(res)
// 小明=100,小红=666,小黑=88,小绿=77,小王=599,老白=66
// console.log(typeof res)  //string

// 如何获取字符串中目标的数据？
// 分隔符方法，返回值为数组
const arr = res.split(',')
// console.log(arr)
// [ '小明=100', '小红=66', '小黑=88', '小绿=77', '小王=99', '老白=66' ]
// const arr2 = arr.map((item)=>{
//     return item.split('=')
// })
// console.log(arr2)
// [ [ '小明', '100' ],[ '小红', '66' ],[ '小黑', '88' ],[ '小绿', '77' ],[ '小王', '99' ],[ '老白', '66' ] ]
// 如何获取二维数组中的目标数据呢？
// 解构赋值/？

// 这里不直接返回，获取目标数据后再返回
// 怎么获取？
// map每一项时，只将成绩返回，并转换为数字
// 怎么字符串转数字？
const arr3 = arr.map((item)=>{
    return +item.split('=')[1]
})
console.log(arr3)
// [ 100, 666, 88, 77, 599, 66 ]

// 累加
// 方法1：
let sum1 = 0 
arr3.forEach((el)=>{
    sum1=el+sum1
})
console.log(sum1)
// 方法2：
const sum2 = arr3.reduce((pre,cur)=>{
    return pre+cur
})
console.log(sum2)

fs.writeFileSync('./test/总成绩.txt',`总成绩为${sum2}`)





// fs.writeFileSync('./test/总成绩.txt',`${sum}`)


