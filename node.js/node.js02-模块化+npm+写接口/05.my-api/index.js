// 接口

// 1.导入
const http = require("http")
const db = require("./db/index")
const dayjs = require("dayjs")
// 下载依赖包 npm i

// 2.创建
const server = http.createServer()

// 3.开启
server.listen(3000,()=>{
    console.log("server is running at port 3000")
})

// 4.监听
server.on('request',(req,res)=>{
    // req.url
    // res.statusCode = 200
    // 设置响应头，响应给浏览器的数据格式是json格式
    res.setHeader('content-type','application/json;charset=utf-8')
    // 解决跨域：设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')

    // 返回学员的数据
    if(req.method === "GET" && req.url ==='/api/students'){
        // 把学员数据返回
        const students = db.students()
        res.end(JSON.stringify(students))
    }else if(req.method === 'GET' && req.url ==='/api/luckystar'){
        const luckDog =db.luckystar()
        res.end(JSON.stringify(luckDog))
    }else if(req.method === 'GET' && req.url ==='/api/news'){
        const news =db.news()   
        // 时间戳转换
        console.log(news)
        news.forEach((el)=>{
            el.publish_time = dayjs(el.publish_time).format('YYYY-MM-DD HH:mm:ss')
        })
        console.log(news)
        res.end(JSON.stringify(news))
    }else{
        res.end('404 not found')
    }
    // 响应给浏览器的数据是字符串类型
})
