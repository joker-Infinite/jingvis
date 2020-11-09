<template>
  <div class="business" :style="{ width: widths }">
    <div class="businessMargin">
      <my-table></my-table>
      <busines-top ref="scrollDiv"></busines-top>
      <busines-bottom></busines-bottom>
      <div class="anchor ">
        <div
          :class="{ anchorHover: isHover == index }"
          @click="goto(index)"
          v-for="(item, index) of anchorData"
          :key="index"
        >
          <img :src="isHover == index ? item.iconHover : item.icon" />
          <!-- <img src="../../assets/business/icon_03.png" alt=""> -->
          {{ item.name }}
        </div>
      </div>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>
<script>
import BusinesTop from "../businesstop";
import BusinesBottom from "../businessbottom";
import MyTable from "./HuangGangcommon/table";
export default {
  components: { BusinesTop, BusinesBottom, MyTable },
  props: ["scroll"],
  data() {
    return {
      isHover: 0,
      scrollTop: "",
      isActive: 0,
      tabData: [],
      navData: [],
      height: 0,
      anchorData: [
        {
          name: "营收",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconHover: require("../../../assets/business/icon_1-2.png")
        },
        {
          name: "利润",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconHover: require("../../../assets/business/icon_2-2.png")
        },
        {
          name: "成本",
          icon: require("../../../assets/business/icon_3-1.png"),
          iconHover: require("../../../assets/business/icon_3-2.png")
        },
        {
          name: "数量",
          icon: require("../../../assets/business/icon_4-1.png"),
          iconHover: require("../../../assets/business/icon_4-2.png")
        },
        {
          name: "结构",
          icon: require("../../../assets/business/icon_5-1.png"),
          iconHover: require("../../../assets/business/icon_5-2.png")
        },
        {
          name: "回款率",
          icon: require("../../../assets/business/icon_6-1.png"),
          iconHover: require("../../../assets/business/icon_6-2.png")
        }
      ],
      widths: ""
    };
  },

  methods: {
    goto(v) {
      this.isHover = v;
      let id = "#box" + (v + 1);
      document.querySelector(id).scrollIntoView(true);
    }
  },
  mounted() {
    this.widths = document.body.clientWidth;
    for (let i = 1; i <= 6; i++) {
      this.navData.push(document.getElementById("box" + i).offsetTop);
    }
  },
  watch: {
    scroll() {
      this.navData.forEach((element, index) => {
        if (this.scroll >= element) {
          this.isHover = index;
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.business {
  // width: 100%;
  height: 100%;
  // height: 2000px;
  background: #f3f7ff;
  .businessMargin {
    margin: 0 5%;
    margin-right: 10%;
    background: transparent;
    .anchor {
      padding-top: 5%;
      box-sizing: border-box;
      position: fixed;
      box-shadow: 1, 1, 1, 10 rgba(0, 0, 0, 1);
      width: 8%;
      height: 80%;
      background: #fff;
      z-index: 100;
      top: 10%;
      right: 0;
      border-radius: 10px;
      // text-align: center;
      div {
        cursor: pointer;
        padding: 10px 0;
        margin: 30px 0;
        margin-left: 40px;
      }
      .anchorHover,
      .anchorHover:hover {
        background: #737aef;
        margin-left: -8%;
        margin-right: 8%;
        border-radius: 10px;
        padding-left: 40px;
      }
    }
  }
}
</style>
