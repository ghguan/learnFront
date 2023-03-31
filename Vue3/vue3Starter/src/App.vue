<template>
  <div id="app">
   <Table/>
   <Drag />
    <Text />
  </div>
</template>
<script>
// 导入Table组件
import Table from './components/Table.vue'
import Drag from './components/Drag.vue'
import Text from '../note/App(1).vue'
export default {
  // 注册组件
  components: {
    Table,
    Drag,
    Text
  },
  data() {
    return {

    }
  }

}
</script>