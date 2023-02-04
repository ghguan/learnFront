<template>
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll"/>
        <label for="toggle-all" >Mark all as complete</label>
        <ul class="todo-list" >
            <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
            <li  v-for="item in list" :key="item.id" :class="{completed:item.isDone}" >
                <div class="view">
                    <!-- <input class="toggle" type="checkbox"  v-model="item.isDone"/> -->
                    <input class="toggle" type="checkbox"  :checked="item.isDone" @change="btn(item.id)"/>
                    <label>{{item.name}}</label>
                    <button class="destroy" @click="delBtn(item.id)"></button>
                </div>
            </li>
            
        </ul>
    </section>
</template>

<script>

export default {
    props:{
        list:{
            type:Array,
            required:true,
        }
    },
    computed:{
        isAll:{
            get(){
                return this.list.every(el => el.isDone === true)
            },
            set(val){
                // console.log(val) // true/false
                // this.list.forEach(el => el.isDone = val) 不满足单向数据流原则
                this.$emit('changeCh',val)
            }
        }
    },
    methods:{
        delBtn(id){
            this.$emit('del',id)
        },
        btn(id){
            this.$emit('check',id)
        }
    }
}
</script>

<style>

</style>