// 导入
const fs = require("fs")
const path = require("path")

// 使用

// 封装数据/方法
// const newsPath = path.join(__dirname,'./data/news.json')
// const stusPath= path.join(__dirname,'./data/info.json')
// const news = fs.readFileSync(newsPath,'utf-8')
// const stus = fs.readFileSync(stusPath, 'utf-8')
// const arr = JSON.stringify(stus)
// let index = parseInt(Math.random() * arr.length)
// arr[index]

// 封装 读取新闻 方法
function rtNews() {
    const newsPath = path.join(__dirname, './news.json')
    const news = fs.readFileSync(newsPath, 'utf-8')
    const arrNews = JSON.parse(news)
    return arrNews
}

// 封装 读取学生 方法
function rtStus() {
    const stusPath = path.join(__dirname, './info.json')
    const stus = fs.readFileSync(stusPath, 'utf-8')
    const arrStus =JSON.parse(stus)
    return arrStus
}

// 封装 选取幸运儿，count++，并返回写入 方法
function luckDog(){
    // 想用封装在函数的变量，可以通过调用函数实现
    let arrStus = rtStus()
    const num = parseInt(Math.random()*arrStus.length)
    let luckdog = arrStus[num]
    luckdog.count++
    fs.writeFileSync('./data/info1.json',JSON.stringify(arrStus))
    // 写回去要 string 格式
    return luckdog
}

// 导出
module.exports = {
    rtNews,
    rtStus,
    luckDog
}