// 1. 导入
const fs = require('fs')
const path = require('path')

// 封装获取绝对路径的方法
function getFullPath(fileName){
    const fullPath = path.join(__dirname, `./data/${fileName}`)
    return fullPath
}

function news(){
    // 处理逻辑
    // 1. 获取绝对路径 
    const fullPath = getFullPath('news.json')
    // 2. 读取
    const res = fs.readFileSync(fullPath, 'utf-8')
    // 3. 转换为数组对象
    const news = JSON.parse(res)
    // 4. 返回
    return news
}

function students(){
    // 1. 获取绝对路径 
    // const fullPath = path.join(__dirname, './data/info.json')
    const fullPath = getFullPath('info.json')
    // 2. 读取
    const res = fs.readFileSync(fullPath, 'utf-8')
    // 3. 转换为数组对象
    console.log(typeof res)
    const students = JSON.parse(res)
    // 4. 返回
    return students
}

function luckystar(){
    // 1. 获取绝对路径 
    // const fullPath = path.join(__dirname, './data/info.json')
    const fullPath = getFullPath('info.json')
    const path1 = path.join(__dirname,'./data/info1.json')
    const studentArr = students()
    // 2. 随机抽取
    const index =  parseInt(Math.random() * studentArr.length)
    const luckystar = studentArr[index]
    luckystar.count++

    // 3. 写入
    fs.writeFileSync(path1, JSON.stringify(studentArr))
    return luckystar
}

// 导出模块
module.exports = {
    news,
    students,
    luckystar
}