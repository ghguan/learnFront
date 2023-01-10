// 按需导入

// 1.按需导入需要加{ }
// import { arr,music} from './module/02按需导出模块.js'

// 2.默认导出可重复导出，但导入不能重复导入
// import {music ❌ } from './module/02按需导出模块.js'
// import music ❌ from './module/02按需导出模块.js'❌

// 3.导出是什么导出，导入要与之对应
// ! 导出是默认导出，导入要用默认导入，默认导入不能加{ }
// import {hobbys}❌from './module/02按需导出模块.js'
// import hobbys from './module/02按需导出模块.js'

// 4.导入的变量名必须与导出的变量名一致
// import { msg,arr,music,hobb ❌} from './module/02按需导出模块.js'

// 5.按需导入 可重命名
// import {原来的名 as 新名字} from './module/01默认导出模块.js'
// import {msg as hi} from './module/01默认导出模块.js'
// 6.重命名后，原来的名不能用
// console.log(msg)❌
// console.log(hi)

// 7. 按需导入和默认导入可写在一起
import  hobbys,{msg as hi ,arr} from './module/02按需导出模块.js'
console.log(arr)
console.log(hi )
console.log(hobbys)

