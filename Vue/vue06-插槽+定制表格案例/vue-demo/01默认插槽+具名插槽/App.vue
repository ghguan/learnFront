<template>
  <div>
    父传子方式:   
    <my-dialog msg="请输入手机号码"></my-dialog>
    <my-dialog msg="请输入姓名"></my-dialog>
------------------------------------------------------------------
    <br>
    slot插槽:
    <my-dialog>
      <!-- 有内容，显示内容替换slot -->
      <p>请输入手机号码</p>
    </my-dialog>
    slot插槽--默认值:
    <my-dialog>
      <!-- 无内容，显示slot的默认值 -->
    </my-dialog>
------------------------------------------------------------------
    <br>
    多个slot,传不同的值：
    <br>
    1. 组件标签中的内容会作为一个整体,插入每个slot
    <my-dialog1>
      <h3>友情提示</h3>
      <p>请输入电话</p>
      <button>关闭</button>      
    </my-dialog1>
    2. 组件标签中使用template标签将内容分块,但此时还是整体插入每个slot
    <my-dialog1>
      <template>
        <h3>友情提示</h3>
      </template>
      <template>
        <p>请输入电话</p>
      </template>
      <template>
        <button>关闭</button>
      </template>
    </my-dialog1>
    3. 有name属性的slot只接收有使用v-slot并与name值对应的template,
       template标签中使用v-slot,该内容就只传给对应name的slot       
    <my-dialog2>
      <template>
        <h3>友情提示</h3>
      </template>
      <template>
        <p>请输入电话</p>
      </template>
      <template v-slot:footer>
        <!-- template标签中使用v-slot,该内容就只传给对应name的slot-->
        <button>关闭</button>
      </template>
    </my-dialog2>



  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
import MyDialog1 from './components/MyDialog1.vue'
import MyDialog2 from './components/MyDialog2.vue'
export default {
  components:{
    MyDialog,
    MyDialog1,
    MyDialog2,
  },
  data(){
    return {
      
    }
  }
}
</script>

<style>

</style>