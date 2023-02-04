<template>
  <div class="user-info form-box">
    <div class="form-box-item">
      <label for="words">人生格言: </label>
      <input id="words" type="text" placeholder="请填写人生格言">
    </div>

    <div class="form-box-item">
      <label for="info">个人简介: </label>
      <input id="info" type="text" placeholder="请填写个人简介">
    </div>

    <div class="form-box-item">
      <label for="hobby">兴趣爱好: </label>
      <input id="hobby" type="text" placeholder="请填写兴趣爱好">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo'
}
</script>

<style lang="less">

</style>
