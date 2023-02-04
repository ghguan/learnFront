<template>
  <div>
    <select  @change="change">
        <option value="1">北</option>
        <option value="2">上</option>
        <option value="3">广</option>
        <option value="4">深</option>
    </select>
  </div>
</template>

<script>
export default {
  props:{
    value:Number
  },
  methods:{
    change(e){
      this.$emit('input',e.target.value)
    }
  }
}
</script>

<style>

</style>