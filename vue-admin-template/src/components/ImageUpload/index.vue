<template>
  <div>
    上传头像
    <el-upload
      action
      :class="{flag: fileList.length>0}"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog title="图片预览" :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',
  components: {},
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
      // todo 为什么不写逻辑也能删除,视图删除，数据未删除
      const index = this.fileList.findIndex(el => {
        return el.uid === file.uid
      })
      this.fileList.splice(index, 1)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .flag .el-upload--picture-card {
  display: none;
}
</style>
