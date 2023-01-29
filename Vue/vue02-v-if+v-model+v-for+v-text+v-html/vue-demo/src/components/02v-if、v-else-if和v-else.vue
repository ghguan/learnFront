<template>
  <div>
    <div v-if="age>18&&age<30">find</div>
    <div v-else-if="age>30&&age<60">work</div>
    <div v-else>play</div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            age:10,
        }
    }
}
</script>

<style>

</style>