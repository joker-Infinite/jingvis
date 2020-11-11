<template>
  <div class="body">
    <!-- <div v-if="show" style="position: fixed;z-index:100" @click="isshow(false)" class="reveal">显示</div> -->
    <div class="left">
      <!-- <div style="height:40px" @click="isshow(true)">隐藏</div>
            <div class="content" :style="{width: '96%'}">
                <el-input placeholder="请输入关键字" v-model="filterText"></el-input>
                <div style="width: 100%;height: 1px;background: #d4d4d4;margin: 10px 0 0"></div>
                <el-tree
                        class="filter-tree"
                        :data="data"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        @node-click="nodeClick"
                        ref="tree"></el-tree>
            </div>  -->
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button  :label="isCollapse">展开</el-radio-button>
            </el-radio-group> -->
      <div style="text-align:right;padding-right:20px">
        <i
          @click="(isCollapse = !isCollapse), isshow(!isCollapse)"
          style="font-size:25px"
          :class="{
            'el-icon-s-fold': !isCollapse,
            'el-icon-s-unfold': isCollapse
          }"
        ></i>
      </div>

      <el-menu
        :style="{ width: !isCollapse && '200px' }"
        default-active="2"
        @select="selectMenu"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">服务区指标</span>
          </template>
          <el-menu-item
            index="1-1"
            v-loading.fullscreen.lock="fullscreenLoading"
            >黄冈分公司</el-menu-item
          >
          <el-menu-item index="1-2">宜昌分公司</el-menu-item>
          <el-menu-item index="1-3">孝感分公司</el-menu-item>
          <el-menu-item index="1-4">十堰分公司</el-menu-item>
          <el-menu-item index="1-5">恩施分公司</el-menu-item>
          <el-menu-item index="1-6">咸宁分公司</el-menu-item>
          <el-menu-item index="1-7">服务区对比</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-help"></i>
            <span slot="title">能源指标</span>
          </template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-video-camera-solid"></i>
            <span slot="title">传媒指标</span>
          </template>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-office-building"></i>
            <span slot="title">商业指标</span>
</template>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <component ref="common" :is="isComponent"></component>
    </div>
  </div>
</template>

<script>
import item from "./common/index";
import { mapState, mapMutations } from "vuex";
export default {
  name: "test",
  components: { ...item },
  computed: {
    ...mapState(["refresh"])
  },
  data() {
    return {
      // 展开或者隐藏
      navData: [],
      show: false,
      isCollapse: false,
      filterText: "",
      fullscreenLoading: false,
      data: [
        {
          id: "A",
          label: "服务区业务指标",
          children: [
            {
              id: 4,
              label: "黄冈分公司"
            },
            {
              id: 9,
              label: "宜昌分公司"
            },
            {
              id: 10,
              label: "孝感分公司"
            },
            {
              id: 11,
              label: "十堰分公司"
            },
            {
              id: 12,
              label: "恩施分公司"
            }
          ]
        },
        {
          id: "B",
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: "C",
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      isComponent: "tabsCommon"
    };
  },
  methods: {
    selectMenu(is) {
      let tabs = document.getElementById("tabs");
      tabs.scrollTop = 0;
      switch (is) {
        case "1":
          let routeData = this.$router.resolve({
            path: "/Home".replace("#", "")
          });
          window.open(routeData.href, "_blank");
          break;
        case "2":
          this.$refs.common.isComponent = "business";
          this.fullscreenLoading = false;
          break;
        case "1-1":
          this.$refs.common.isComponent = "huanggang";
          this.fullscreenLoading = false;
          break;
        case "1-7":
          this.$refs.common.isComponent = "testC";
          this.fullscreenLoading = false;
          break;
        default:
          break;
      }
    },
    handleOpen(key, keyPath) {
      this.selectMenu(key);
    },
    handleClose(key, keyPath) {
      this.selectMenu(key);
    },
    ...mapMutations(["isLoadUpdata"]),

    isshow(is) {
      // this.show = is;
      // this.isLoadUpdata(is)
    },
    nodeClick(data, node) {
      if (!data.children && data.id > 6) {
        this.isComponent = "navCommon";
      } else {
        this.isComponent = "tabsCommon";
      }
      this.$nextTick(_ => {
        this.$refs["common"].refresh(data);
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }
};
</script>

<style scoped lang="less">
.reveal {
  width: 50px;
  height: 50px;
  margin-top: 50px;
  background: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.body /deep/ .el-menu {
  border: 0;
}
.body {
  width: 100%;
  height: 100%;
  background: rgb(93, 93, 93);
  position: fixed;
  display: flex;

  .left {
    height: 100%;
    background: white;
    position: relative;

    .content {
      width: 96%;
      height: 94%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      .filter-tree {
        height: 90%;
      }
    }

    /*.content /deep/ .el-input {
                width: 150px;

            }

            .content /deep/ .el-input > .el-input__inner {
                height: 20px;
                line-height: 20px;
            }*/
  }

  .right {
    height: 100%;
    width: 100%;
    background: #fff;
    position: relative;
  }
}
</style>
