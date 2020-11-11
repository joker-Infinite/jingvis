<template>
  <div class="container">
    <nav-common ref="navCommon"></nav-common>
  </div>
</template>

<script>
import NavCommon from "./common/navCommon";

export default {
  name: "three",
  data() {
    return {
      tabData: [
        { content: "服务区状态", imgData: [1] },
        { content: "基础信息", imgData: [1] },
        { content: "经营信息", imgData: [1, 2] },
        { content: "合同信息", imgData: [1, 3] },
        { content: "特产信息", imgData: [1, 4] },
        { content: "特色信息", imgData: [1] }
      ]
    };
  },
  components: { NavCommon },
  methods: {},
  mounted() {
    this.$refs["navCommon"].refresh(this.tabData);
  }
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 950px;
  margin: auto;
  background: #fff;
  position: relative;
}
</style>
