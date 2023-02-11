<template>
  <div>
    <!-- <cur-com></cur-com>  -->
    <cur-com>
      <!-- <template v-slot:default="slotProps"> -->
        <!-- <p>{{ slotProps }}</p>  -->
        <!-- { "user": { "lastname": "张", "firstname": "三" }, "age": 18 } -->
        <!-- <p>{{ slotProps.user.firstname }}</p> -->
        <!-- <p>{{ slotProps.age }}</p> -->
      <!-- </template> -->

      <!-- 解构赋值写法 -->
      <template v-slot:default="{user,age}">
        <p>{{ user }}</p> 
        <!-- { "lastname": "张", "firstname": "三" } -->
        <p>{{ user.firstname }}</p>
        <p>{{ age }}</p>
      </template>
    </cur-com> 
  </div>
</template>

<script>
import CurCom from './components/CurCom.vue'
export default {
  components:{
    CurCom
  }
}
</script>

<style>

</style>