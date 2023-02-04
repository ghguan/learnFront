<template>
      <table class="my-table">
      <thead>
        <tr>
          <slot></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in goods" :key="item.id">        
          <slot name="row" :item="item" :index="index"></slot>
        </tr>
        <!-- <tr> -->
          <!-- <td>101</td>
          <td><img src="https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg" /></td>
          <td>梨皮朱泥三绝清代小品壶经典款紫砂壶</td> -->
          <!-- <td>
            <div class="my-tag">
              <input
                class="input"
                type="text"
                placeholder="输入标签"
                v-focus
                v-if="isShow"
              />
              <div class="text" v-else @dblclick="click" res="bq">茶具</div> -->
              <!-- <div class="text">{{ value }}</div> -->
            <!-- </div> -->
          <!-- </td> -->
        <!-- </tr> -->
      </tbody>
    </table>
</template>

<script>
export default {
    props:{
        goods:{
            type:Array,
        }
    }
}
</script>

<style>

</style>