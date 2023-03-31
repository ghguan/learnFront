<script setup>
import { ref,inject } from "vue";
const count = inject("count",0);
// inject参数有几个
// 第一个参数是key，第二个参数是默认值，第三个参数是是否必须
</script>
<template>
    子组件
    <div>{{ count }}</div>
</template>