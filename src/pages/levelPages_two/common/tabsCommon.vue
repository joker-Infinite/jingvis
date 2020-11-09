<template>
  <div style="width: 100%;height: 100%">
    <div id="tabs" class="tabs" @scroll.passive="handleScroll($event)">
      <el-tabs type="border-card" v-model="activeName">
        <!-- <el-tab-pane v-for="(it,ix) in tabData" :key="ix" :name="it.name" :label="it.name">
                    <business :scroll='scroll'></business>
                </el-tab-pane> -->
        <component :scroll="scroll" :is="isComponent"></component>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import business from "../../serviceBusiness/business";
import huanggang from "../../serviceBusiness/filiales/HuangGang";

export default {
  name: "tabsCommon",
  components: { business, huanggang },
  data() {
    return {
      isComponent: "business",
      scroll: "",
      activeName: "二级 1-1-tab1",
      tabData: [
        {
          name: "二级 1-1-tab1",
          content: "二级 1-11"
        },
        {
          name: "二级 1-1-tab2",
          content: "二级 1-12"
        },
        {
          name: "二级 1-1-tab3",
          content: "二级 1-13"
        }
      ]
    };
  },
  methods: {
    refresh(data) {
      this.isComponent = data;
      // this.tabData = [];
      // this.activeName = data.label + '-tab1';
      // for (let i = 0; i < 3; i++) {
      //     this.tabData.push({
      //         name: data.label + '-tab' + (i + 1),
      //         content: data.label + (i + 1)
      //     })
      // }
    },
    handleScroll(e) {
      this.scroll = e.target.scrollTop;
      // this.$emit('iscommon',e.target.scrollTop)
      // console.log(e.target.scrollTop)
    }
  }
};
</script>

<style scoped lang="less">
.tabs {
  width: 100%;
  // height: 96%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

.tabs /deep/ .el-tabs {
  // height: 100%;
  width: 100%;
}

.tabs
  /deep/
  .el-tabs
  > .el-tabs__header
  > .el-tabs__nav-wrap
  > .el-tabs__nav-scroll
  > .el-tabs__nav
  > .el-tabs__item {
  padding: 0 40px;
}

.tabs /deep/ .el-tabs > .el-tabs__content {
  padding: 0 !important;
}
</style>
