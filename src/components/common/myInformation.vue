<template>
  <div class="inform">
    <span class="focus" @click="operations('focus')">
      <el-tooltip class="item" effect="dark" content="图表" placement="left">
        <i class="el-icon-s-marketing"></i>
      </el-tooltip>
    </span>
    <span class="datas" @click="operations('datas')">
      <el-tooltip class="item" effect="dark" content="列表" placement="left">
        <i class="el-icon-s-grid"></i>
      </el-tooltip>
      </span>
    <span class="excel" @click="operations('excel')">
      <el-tooltip class="item" effect="dark" content="导出Excel" placement="left">
        <i class="el-icon-upload2"></i>
      </el-tooltip>
      </span>
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
  position: absolute;
  z-index: 10000;
  width: 20px;
  top: 60px;
  right: 15px;
  display: flex;
  flex-direction: column;
  span {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    font-size: 20px;
    // font-size:30px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 100px;
    text-align: center;
    background: pink;
    margin: 5px 0;
  }
}
</style>
