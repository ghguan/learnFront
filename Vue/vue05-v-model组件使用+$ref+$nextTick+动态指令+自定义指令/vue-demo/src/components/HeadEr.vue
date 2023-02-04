<template>
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="请输入任务名称" autofocus v-model="name" @keyup.enter="add"/>
    </header>
</template>

<script>
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
      add(){
        this.$emit('add',this.name)
        this.name =''
      }
    }

}
</script>

<style>

</style>