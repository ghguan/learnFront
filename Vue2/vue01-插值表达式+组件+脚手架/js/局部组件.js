
const componentA ={
    data(){
        return{
            count:0
        }
    },
    template:'<button @click="count++">{{count}} </button>'
}
// 导出组件
export default componentA