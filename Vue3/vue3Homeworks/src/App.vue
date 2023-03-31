<script setup>
// 导入组件
import Table from './components/Table.vue'
import Drag from './components/Drag.vue'
// 注册组件
  components: {
    Table,
    Drag
  }

</script>
<template>
  <div id="app">
    <Table />
    <Drag />
  </div>
</template>