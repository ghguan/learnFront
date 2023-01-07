console.log(666)

const food = '123+456'

const arr = new Array(10).fill(0)
console.log(arr)

const arr2 = arr.forEach((_,i)=>{
    console.log(`${i}:${food}`)
    console.log()
})
// forEach()传参为函数，回调函数有两个参数：元素，索引
// 参数不用时，可用下划线 _ 占位
// 若打印的字符串 要引用变量的值进行拼接  要使用模板字符串  
// node运行的.js文件
//     1. 代码要正确
//     2. .js文件
//     3. 不可写DOM和BOM