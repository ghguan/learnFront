<template>
  <div class="dialog">
    <header>
      1
      <slot >
        <h3>默认header</h3>
      </slot>
    </header>
    <main>
      2
      <slot>
        <p>默认main</p>
      </slot>
    </main>
    <footer>
      3
      <slot>
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