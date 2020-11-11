<template>
  <div class="businessBottom">
    <!--数量结构开始  -->
    <el-collapse v-model="quantitativeStructure" @change="handleChange">
      <el-collapse-item id="box4" name="1">
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
            >服务区数量</span
          >
        </template>
        <div id="businessEchartsFWQ"></div>
      </el-collapse-item>
      <div id="box5"></div>
      <el-collapse-item
        :name="(2 + index).toString()"
        v-for="(item, index) of quantitativeStructurebusinessId"
        :key="index"
      >
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
            >{{ item.name }}</span
          >
        </template>
        <business-bottom-echarts
          v-for="(id, i) of item.id"
          :key="i"
          ref="businessButton"
          :businessId="id"
        ></business-bottom-echarts>
      </el-collapse-item>
    </el-collapse>
    <!--数量结构结束  -->
    <!-- 回款率开始 -->
    <el-collapse id="box6" v-model="rateofreturn" @change="handleChange">
      <el-collapse-item
        :name="(index + 1).toString()"
        v-for="(item, index) of rateofreturnbusinessId"
        :key="index"
      >
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
            >{{ item.name }}</span
          >
        </template>
        <business-bottom-echarts1
          ref="businessButton1"
          :businessId="item"
        ></business-bottom-echarts1>
      </el-collapse-item>
    </el-collapse>
    <!-- 回款率结束 -->
  </div>
</template>
<script>
import BusinessBottomEcharts from "./businessbottomEcharts";
import BusinessBottomEcharts1 from "./businessbottomEcharts1";
export default {
  components: { BusinessBottomEcharts, BusinessBottomEcharts1 },
  data() {
    return {
      quantitativeStructure: ["1", "2", "3"],
      rateofreturn: ["1", "2"],
      performance: ["品牌分类", "业态分类"],
      quantitativeStructurebusinessId: [],
      rateofreturnbusinessId: []
    };
  },
  methods: {
    businessEchartsFWQ() {
      let businessEchartsFWQ = this.$echarts.init(
        document.getElementById("businessEchartsFWQ")
      );
      let this_ = this;
      var option = {
        tooltip: {
          //提示框组件
          trigger: "axis",
          // formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
          axisPointer: {
            type: "none",
            label: {
              backgroundColor: "rgba(0,0,0,0)"
            }
          },
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12
          }
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "5%",
          top: "10%",
          //	padding:'0 0 10 0',
          containLabel: true
        },
        legend: {
          //图例组件，颜色和名字
          right: "10%",
          top: "5%",
          // top: '30%',
          itemGap: 16,
          itemWidth: 18,
          itemHeight: 10,
          data: [
            {
              name: "接手"
              //icon:'image://../wwwroot/js/url2.png', //路径
            },
            {
              name: "投营"
            },
            {
              name: "总数量"
            }
          ],
          textStyle: {
            color: "#a8aab0",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: 12
          }
        },
        xAxis: [
          {
            type: "category",
            //	boundaryGap: true,//坐标轴两边留白
            data: ["2015", "2016", "2017", "2018", "2019", "2020"],
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
              //	margin:15,
              textStyle: {
                color: "#c8c9c9",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12
              }
              // rotate: 50,
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: false
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#c8c9c9",
                opacity: 1
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            splitNumber: 5,
            axisLabel: {
              textStyle: {
                color: "#c8c9c9",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 12
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["#fff"],
                opacity: 0.06
              }
            }
          }
        ],
        series: [
          {
            name: "接手",
            type: "bar",
            data: [62, 160, 80, 62, 60, 55, 45, 30, 15, 10],
            barWidth: 20,
            // barGap: 10,//柱间距离
            barCategoryGap: "50%",
            itemStyle: {
              normal: {
                show: true,
                color: "#01a4f7",
                barBorderRadius: 50,
                borderWidth: 0
              }
            }
          },
          {
            name: "投营",
            type: "bar",
            data: [65, 55, 60, 45, 42, 15, 12, 5],
            barWidth: 20,
            // barGap: 0,//柱间距离
            barCategoryGap: "50%",

            itemStyle: {
              normal: {
                show: true,
                color: "#0fd927",
                barBorderRadius: 50,
                borderWidth: 0
              }
            }
          },
          {
            name: "总数量",
            type: "bar",
            data: [65, 55, 60, 45, 42, 15, 12, 5],
            barWidth: 20,
            // barGap: 0,//柱间距离
            barCategoryGap: "50%",

            itemStyle: {
              normal: {
                show: true,
                color: "#fcc32d",
                barBorderRadius: 50,
                borderWidth: 0
              }
            }
          },
          {
            xAxisIndex: 1,
            type: "line",
            itemStyle: {
              normal: {
                color: "#b37eeb"
              }
            },
            data: [65, 55, 60, 45, 42, 15]
          }
        ]
      };
      option.xAxis[1] = {
        type: "value",
        max: option.xAxis[0].data.length * 100,
        show: false
      };
      option.series[3].data = option.series[3].data.map((x, i) => [
        30 + i * 100,
        x
      ]);
      businessEchartsFWQ.setOption(option);
    },
    handleChange(val) {
      console.log(val);
    },
    isechartsShow(data) {
      // this.$refs.businessButton.isechartsShow(data)
    },
    isechartsShow1(data) {
      // this.$refs.businessButton1.isechartsShow(data)
    }
  },
  mounted() {
    this.businessEchartsFWQ();
  },
  watch: {
    "$store.state.refresh": function() {
      document
        .getElementById("businessEchartsFWQ")
        .setAttribute("_echarts_instance_", "");
      this.businessEchartsFWQ();
    }
  }
};
</script>
<style scoped>
.businessBottom /deep/ .el-collapse-item__wrap {
  background: transparent;
}
.businessBottom /deep/ .el-collapse-item__header {
  background: #737aef;
  border-radius: 10px;
  color: #fff;
  border: 0;
  margin: 1em 0;
}
.businessBottom /deep/ .el-icon-arrow-right:before {
  color: #fff;
  font-size: 20px;
  margin: 20px;
}
#businessEchartsFWQ {
  width: 100%;
  height: 400px;
  background: url("../../assets/business/frame 1.png") no-repeat;
  background-size: 100% 100%;
}
</style>
