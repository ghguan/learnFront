const getIpv4 = () => {
    // CommonJS的require可以放在函数中执行 import不行！
    const os = require('os')
    const ifaces = os.networkInterfaces()
    let ip = ''
    for (let key in ifaces) {
        ifaces[key].forEach((el) => {
            if (el.family === 'IPv4' && !el.internal && el.address.startsWith("192")) {
                ip = el.address;
            }
        });
    }
    return ip || "127.0.0.1";
}

module.exports ={
    getIpv4
}
