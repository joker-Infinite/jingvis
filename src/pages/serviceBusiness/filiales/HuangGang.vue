<template>
  <div class="business" :style="{ width: widths }">
    <div class="businessMargin">
      <my-table @isShoww="isShoww" @isCom="isCom"></my-table>
      <business :quantityShow="quantityShow" ref="busine"></business>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>
<script>
import business from "../business";
import MyTable from "./HuangGangcommon/table";
export default {
  components: { MyTable, business },
  props: ["scroll"],
  data() {
    return {
      quantityShow:true,
      bool: [true, true, true, true],
      isHover: 0,
      scrollTop: "",
      isActive: 0,
      tabData: [],
      navData: [],
      height: 0,

      widths: ""
    };
  },

  methods: {
    isCom(val) {
      this.$emit("isCom", val);
    },
    isShoww(val) {
      this.quantityShow=false
      this.$refs.busine.index=5;
      this.$refs.busine.anchorData.splice(3,1)
      this.$refs.busine.businessIdData.businessId.forEach((element,index) => {
        this.$refs.busine.businessIdData.businessId[index].show = false;
        this.$refs.busine.isechartsShow()
      });
      this.$refs.busine.businessIdData.profitbusinessId.forEach((element,index) => {
        this.$refs.busine.businessIdData.profitbusinessId[index].show = false;
        this.$refs.busine.isechartsShow()
      });
      this.$refs.busine.businessIdData.costbusinessId.forEach((element,index) => {
        this.$refs.busine.businessIdData.costbusinessId[index].show = false;
        this.$refs.busine.isechartsShow()
      });
      
    },
    // // 滚动条的监听
    isscrollTop(val) {
      this.$refs.busine.isscrollTop(val);
    },
    // axios的
    isaxios(url, nianfen, i, is) {
      this.$axios
        .get("/api" + url, {
          params: { nianfen: nianfen, serviceCompanyId: "", serviceId: "" }
        })
        .then(res => {
          res.data.data.forEach(element => {
            if (is === "bar") {
              this.businessId[i].data.left[0].push(element.yAxis / 100);
              this.businessId[i].data.left[1].push(element.yAxis / 100);
              this.businessId[i].data.xAis.push(element.xBxis + "月");
            }
            if (is === "pie") {
              this.businessId[i].data.center[0].push(element.yAxis / 100);
            }
          });
        });
    }
  },
  mounted() {
    this.widths = document.body.clientWidth;
    // // 营收2020
    // this.isaxios('/jtService/list_jtservice_revenue_month', '2020-01-01', 0, 'bar')
    // this.isaxios('/jtService/list_jtservice_revenue_format', '2020-01-01', 0, 'pie')
    // // 营收2019
    // this.isaxios('/jtService/list_jtservice_revenue_month', '2019-01-01', 1, 'bar')
    // this.isaxios('/jtService/list_jtservice_revenue_format', '2019-01-01', 1, 'pie')
    // // 利润2020
    // this.isaxios('/jtService/list_jtservice_profit_month', '2020-01-01', 2, 'bar')
    // this.isaxios('/jtService/list_jtservice_profit_format', '2020-01-01', 2, 'pie')
    // // 利润2019
    // this.isaxios('/jtService/list_jtservice_profit_month', '2019-01-01', 3, 'bar')
    // this.isaxios('/jtService/list_jtservice_profit_format', '2019-01-01', 3, 'pie')
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
