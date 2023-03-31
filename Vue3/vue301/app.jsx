import {defineComponent,h,ref} from 'vue'
export default defineComponent(()=>{
    const num = ref(0);
    return ()=>{
        <div>
            <div>{num.value}</div>
            <button onClick={()=>{num.value++}} ></button>
        </div>
    }

})