// 导入
const fs = require("fs")
const path = require("path")
const http = require("http")

// 使用模块
// 创建web服务器
const server = http.createServer()

// 启动
server.listen(3000, () => {
    console.log('sever is running at port 3000')
})

// 监听
server.on('request', (req, res) => {
    // 文件路径拼接结尾和req.url一样，除了为'/'时
    // 重复利用res.url当参数来用
    // let url = req.url
    // 处理特殊情况
    // if (url === '/'){
    //     url = '/index.html'
    // }
    // 拼接完整路径
    // const fullPath = path.join(__dirname, './Clock案例/www', url)
    // 读文件
    // const read = fs.readFileSync(fullPath)
    // 响应文件
    // res.end(read)
    // 怎么处理不存在的路径访问呢？
    // 我自己想的：但是当项目文件超级多时，这样写太麻烦了
    // let url = req.url
    // if (url === '/') {
    //     url = '/index.html'
    // }
    // if (url !== '/' && url !== '/index.html' && url !== '/clock.css' && url !== '/clock.js') {
    //     res.end('<h1>404 not found </h1>')
    // } else {
    //     const fullPath = path.join(__dirname, './Clock案例/www', url)
    //     const read = fs.readFileSync(fullPath)
    //     res.end(read)
    // }
    // 处理不存在的路径访问
    // 路径不存在时，读文件会报错
    // 利用try{}catch(){}成功时运行，出错时运行catch中的，并且不会阻塞后续代码
    // 报错走进catch()，就是不存在的路径访问，响应404页面
    let url = req.url
    if (url === '/') {
        url = '/index.html'
    }
    const fullPath = path.join(__dirname, './Clock案例/www', url)
    try {
        const read = fs.readFileSync(fullPath)
        res.end(read)
    }catch(err){
        console.log(err)
        res.end('<h1>404 not found </h1>')
    }
})