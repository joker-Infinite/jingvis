<template>
  <div class="inform">
    <span class="focus" @click="operations('focus')">图表</span>
    <span class="datas" @click="operations('datas')">列表</span>
    <span class="excel" @click="operations('excel')">导出excel</span>
  </div>
</template>
<script>
export default {
  data() {
    return { show: false };
  },
  methods: {
    operations(v) {
      this.$emit("isData", v);
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.inform {
  //   width: 30%;
  height: 20px;
  position: absolute;
  display: none;
  //   text-align: right;
  z-index: 900;
  top: 20px;
  right: 20px;
  span {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    // width: 20px;
    // height: 20px;
    // background: red;
  }
}
</style>
