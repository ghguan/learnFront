// 全局注册-简单方式
// import Vue from 'vue'
// import PageTool from '@/components/PageTool/index.vue'

// Vue.component('page-tool', PageTool)

// 全局注册-插件方式
import PageTool from '@/components/PageTool/index.vue'
import UploadExcel from '@/components/UploadExcel/index.vue'
import ImageUpload from '@/components/ImageUpload/index.vue'
export default {
  install(Vue, options) {
    Vue.component('page-tool', PageTool)
    Vue.component('upload-excel', UploadExcel)
    Vue.component('image-upload', ImageUpload)
  }
}
