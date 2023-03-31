<template>
  <footer class="footer" v-if="this.list.length">
      <!-- 统计的是list中isDone为false的情况 ==> 计算属性 -->
      <span class="todo-count">剩余<strong>{{ num }}</strong></span>
      <ul class="filters">
        <li>
          <a :class="{selected:this.type === 'all'}" href="#/" @click="filter('all')">全部</a>
        </li>
        <li>
          <a :class="{selected:this.type === 'active'}" href="#/active" @click="filter('active')">进行中</a>
        </li>
        <li>
          <a :class="{selected:this.type === 'completed'}" href="#/completed" @click="filter('completed')">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" @click="del" v-if="unum">清除已完成</button>
    </footer>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      required:true
    },
    type:{
      type:String
    }
  },
  computed:{
    num(){
      // 数组中符合条件的元素有几个
      // 数组方法，返回数组，数组长度，或返回数组长度
      return this.list.filter(el => el.isDone === false).length
    },
    unum(){
      // return this.list.filter(el => el.isDone === true).length
      return this.list.some(el=> el.isDone ) //简写el.isDone === true
      
    }
  },
  methods:{
    del(){
      this.$emit('del')
    },
    filter(val){
      this.$emit('filter',val)
    }
  }
}
</script>

<style>

</style>