<template>
  <div style="width: 100%;height: 100%">
    <el-dialog :title="title" :visible.sync="visible" width="30%"></el-dialog>
  </div>
</template>

<script>
export default {
  name: "myDialog",
  props: {
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
