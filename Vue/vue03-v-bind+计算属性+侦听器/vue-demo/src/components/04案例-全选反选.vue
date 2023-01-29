<template>
    <div>
      <span>全选:</span>
      <input type="checkbox" v-model="isAll"  />
      <button>反选</button>
      <ul>
        <li v-for="(item,index) in arr" :key="index">
          <input type="checkbox" v-model="item.c" />
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        arr: [
          {
            name: "猪八戒",
            c: false,
          },
          {
            name: "孙悟空",
            c: false,
          },
          {
            name: "唐僧",
            c: false,
          },
          {
            name: "白龙马",
            c: false,
          },
        ],
      };
    },
    computed:{
      isAll:{
        get(){
          return this.arr.every(function(el){
            return el.c === true
          })
        },
        set(val){
          console.log(val)
          // 当我们勾选了全选框的时候，触发了setter
          // val就是全选框的状态，同步设置给每一个小复选框
          return this.arr.forEach(function(el){
            return el.c = val
          })
        }
        // set接收的是全选框的选中状态，
        // 给数组每个项赋值，要遍历数组，
      }
    }
  };
  </script>
  
  <style>
  </style>