// 按需导出

// 1.按需导出 export 直接写在需要导出的变量的声明 的左边
export const msg = 'nihao'

export const arr = [1,2,3]

const music = 'hello'
const hobbys = ['draw','run']

// 2.导出多个变量，使用{ }对象接收（按需导出不要default）
// export {music}
// 按需导出不能重复导出
// export{music,music❌}

// 3.默认导出可以和按需导出组合使用,可以以重复导出
export {music}
// export default { hobbys,music,music}
export default { hobbys,msg}

