// 导入
const os = require("os")

//  os.networkInterfaces() 返回值是一个对象
// const ifaces = os.networkInterfaces()
// console.log(ifaces)

// 封装函数
const getIPV4 = function(){
    // 使用模块方法，获取一个关于ip的对象
    const ifaces = os.networkInterfaces()
    // console.log(ifaces)
    // 声明一个空变量，数据类型为字符串，存储获得的IP
    let ip = ''
    // 遍历对象
    for(let key in ifaces){
        // 属性名不通，不获取，只获取属性值
        // const ip = ifaces[key] 错误❌
        // console.log(ifaces[key])
        // ifaces[key]是属性值，是一个数组，元素是对象

        // 遍历ifaces[key]数组
        ifaces[key].forEach((el)=>{
            // 该元素的这些属性值满足，则就是目标IP
            if(el.family ==='IPv4' && !el.internal && el.address.startsWith('192')){
                ip = el.address
                // console.log(ip)                
            }
        })        
    }
    // 函数返回值
    return ip || '127.0.0.1' //本机IP
}

module.exports ={
    getIPV4
}