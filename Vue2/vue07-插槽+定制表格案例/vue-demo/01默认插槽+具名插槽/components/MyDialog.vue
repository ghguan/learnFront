<template>
    <div class="dialog">
      <header>
        <h3>友情提示</h3>
      </header>
      <main>
        <slot>
          <p>默认main</p>
        </slot>        
      </main>
      <footer>
        <button>关闭</button>
      </footer>
    </div>
</template>

<script>
export default {
  props:{
    msg:{
      type:String
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