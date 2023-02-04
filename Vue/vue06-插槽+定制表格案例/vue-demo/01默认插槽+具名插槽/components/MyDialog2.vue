<template>
  <div class="dialog">
    <header>
      1
      <slot name="header">
        <!-- 有name属性的slot只接收有使用v-slot并与name值对应的template-->
        <!-- 没有v-slot为header的template，所以显示默认值 -->
        <h3>默认header</h3>
      </slot>
    </header>
    <main>
      2
      <slot>
        <!-- template标签中使用v-slot,该内容就只传给对应name的slot -->
        <!-- 有v-slot值的template 不会传过来  -->
        <p>默认main</p>
      </slot>
    </main>
    <footer>
      3
      <br>
      <slot name="footer">
        <!-- 有name属性的slot只接收有使用v-slot并与name值对应的template -->
        <button>默认footer</button>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String
    }
  }
}
</script>

<style scoped>
.dialog {
  width: 400px;
  border: 3px solid #000;
  border-radius: 5px;
  margin: 10px;
  padding: 0 10px;
  padding-bottom: 20px;
}
</style>