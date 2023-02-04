<template>
  <div>
    <header>
        <slot :user="user" :age="age">
            <!-- 默认内容 -->
            <p>{{ user.lastname }}</p>
        </slot>
    </header>
  </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                lastname:'张',
                firstname:'三'
            },
            age:18
        }
    }
}
</script>

<style>

</style>