<template>
  <div id="app">
    <h1>根组件{{ count }} -  {{ msg }}</h1>
    <input type="text" :value="count" @change="changeNum">
    <add-item></add-item>
    <hr>
    <sub-item></sub-item>
  </div>
</template>

<script>
import AddItem from './components/add-item.vue'
import SubItem from './components/sub-item.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  components: {
    AddItem,
    SubItem
  },
  computed: {
    ...mapState(['count', 'msg'])
  },
  methods: {
    changeNum (e) {
      console.log(e)
      this.$store.commit('changeNum', +e.target.value)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
