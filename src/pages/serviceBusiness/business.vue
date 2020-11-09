<template>
  <div class="business" :style="{ width: widths }">
    <div class="businessMargin">
      <busines-top ref="scrollDiv"></busines-top>
      <busines-bottom ref="scrollBottom"></busines-bottom>
      <div class="anchor ">
        <div @click="packup()">{{ !ispackUp ? "全部收起" : "全部展开" }}</div>
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
import BusinesTop from "./businesstop";
import BusinesBottom from "./businessbottom";
export default {
  components: { BusinesTop, BusinesBottom },
  props: ["scroll"],
  data() {
    return {
      ispackUp: false,
      isHover: 0,
      scrollTop: "",
      isActive: 0,
      tabData: [],
      navData: [],
      height: 0,
      anchorData: [
        {
          name: "营收",
          icon: require("../../assets/business/icon_1-1.png"),
          iconHover: require("../../assets/business/icon_1-2.png")
        },
        {
          name: "利润",
          icon: require("../../assets/business/icon_2-1.png"),
          iconHover: require("../../assets/business/icon_2-2.png")
        },
        {
          name: "成本",
          icon: require("../../assets/business/icon_3-1.png"),
          iconHover: require("../../assets/business/icon_3-2.png")
        },
        {
          name: "数量",
          icon: require("../../assets/business/icon_4-1.png"),
          iconHover: require("../../assets/business/icon_4-2.png")
        },
        {
          name: "结构",
          icon: require("../../assets/business/icon_5-1.png"),
          iconHover: require("../../assets/business/icon_5-2.png")
        },
        {
          name: "回款率",
          icon: require("../../assets/business/icon_6-1.png"),
          iconHover: require("../../assets/business/icon_6-2.png")
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
    },
    packup() {
      if (this.ispackUp) {
        this.ispackUp = false;
        this.$refs.scrollDiv.revenue = ["1", "2"];
        this.$refs.scrollDiv.profit = ["1", "2"];
        this.$refs.scrollDiv.cost = ["1", "2"];
        this.$refs.scrollBottom.quantitativeStructure = ["1", "2", "3"];
        this.$refs.scrollBottom.rateofreturn = ["1", "2"];
      } else {
        this.ispackUp = true;
        this.$refs.scrollDiv.revenue = [];
        this.$refs.scrollDiv.profit = [];
        this.$refs.scrollDiv.cost = [];
        this.$refs.scrollBottom.quantitativeStructure = [];
        this.$refs.scrollBottom.rateofreturn = [];
      }
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
