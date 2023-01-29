<template>
  <div>
    <li v-for="item in arrList" :key="item">{{item}}</li>
  </div>
</template>

<script>
export default {
    data(){
        return {
            arrList:['orange','pink','skyblue']
        }
    }
}
</script>

<style>

</style>