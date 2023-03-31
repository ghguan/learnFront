<script setup>
import Child from "./Child.vue";
import { ref ,provide} from "vue";
const count = ref(0);
provide("count", count);
</script>
<template>
  <Child />
  <div>{{ count }}</div>
  <button @click="count++">+</button>
</template>
