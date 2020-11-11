<template>
  <div class="content">
    <div class="top" @mouseover="mouseHover('AD')">
      <operations
        class="operations"
        time="time"
        @showOne="showOne(1)"
      ></operations>
      <div id="HomeTopRight_top"></div>
    </div>
    <div style="width: 100%;height: 2%"></div>
    <div class="bottom">
      <!--<div class="item">
                            <div id="HomeTopRight_bottomIA"></div>
                        </div>
                        <div class="item">
                            <div id="HomeTopRight_bottomIB"></div>
                        </div>
                        <div style="width: 100%;height: 3%"></div>
                        <div class="item">
                            <div id="HomeTopRight_bottomIC"></div>
                        </div>
                        <div class="item">
                            <div id="HomeTopRight_bottomID"></div>
                        </div>-->
      <div class="bottom_left" @mouseover="mouseHover('BD')">
        <div class="select_type">
          <el-radio
            class="checkboxItem"
            @change="changeRadioBD(1)"
            v-model="selectBD"
            :label="1"
            >加油站
          </el-radio>
          <el-radio
            class="checkboxItem"
            @change="changeRadioBD(2)"
            v-model="selectBD"
            :label="2"
            >合作收入
          </el-radio>
          <el-radio
            class="checkboxItem"
            @change="changeRadioBD(3)"
            v-model="selectBD"
            :label="3"
            >自营商店
          </el-radio>
        </div>
        <operations class="operations" @showOne="showOne"></operations>
        <div id="HomeTopRight_bottom_left"></div>
      </div>
      <div class="bottom_right" @mouseover="mouseHover('CD')">
        <div class="select_type">
          <el-radio
            class="checkboxItem"
            @change="changeRadioCD(1)"
            v-model="selectCD"
            :label="1"
            >加油站
          </el-radio>
          <el-radio
            class="checkboxItem"
            @change="changeRadioCD(2)"
            v-model="selectCD"
            :label="2"
            >合作收入
          </el-radio>
          <el-radio
            class="checkboxItem"
            @change="changeRadioCD(3)"
            v-model="selectCD"
            :label="3"
            >自营商店
          </el-radio>
        </div>
        <operations class="operations" @showOne="showOne"></operations>
        <div id="HomeTopRight_bottom_right"></div>
      </div>
    </div>
    <show-e-charts ref="showECharts"></show-e-charts>
  </div>
</template>

<script>
import Operations from "../common/operations";
import ShowECharts from "../common/showECharts";

export default {
  name: "HomeTopRight",
  components: { ShowECharts, Operations },
  data() {
    return {
      selectBD: 1,
      selectCD: 1,
      AD: {},
      BD: {},
      CD: {},
      option: {}
    };
  },
  methods: {
    mouseHover(v) {
      this.option = this[v];
    },
    showOne(is) {
      if (is === 1) {
        this.AD.title.textStyle.rich.a.fontSize = 25;
        this.AD.title.y = "4%";
        this.$refs["showECharts"].openDialog(this.AD, "time");
        this.$refs["showECharts"].isShow = false;
        this.$refs["showECharts"].timeSelect = true;
      } else {
        this.option.title.padding = 50;
        this.option.title.textStyle.rich.a.fontSize = 25;
        (this.option.title.x = "center"), (this.option.title.y = "-3%");
        this.option.barWidth = 30;
        this.option.grid.top = "20%";
        this.$refs["showECharts"].timeSelect = false;
        this.$refs["showECharts"].isShow = true;
        this.$refs["showECharts"].openDialog(this.option);
      }
    },
    changeRadioBD(v) {
      console.log(v);
    },
    changeRadioCD(v) {
      console.log(v);
    },
    initECharts_top() {
      let HomeTopRight_top = this.$echarts.init(
        document.getElementById("HomeTopRight_top")
      );
      let option = (this.AD = {
        title: {
          text: "{a|     省份访问TOP10}",
          show: true,
          x: "center",
          textStyle: {
            fontFamily: "幼圆",
            lineHeight: 30,
            rich: {
              a: {
                color: "#FFF",
                fontSize: "15",
                height: 15,
                width: 15
              }
            }
          }
        },

        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: {
          type: "sankey",
          layout: "none",
          right: "10%",
          top: "20%",
          focusNodeAdjacency: "inEdges",
          label: {
            color: "#FFF"
          },
          data: [
            {
              name: "a"
            },
            {
              name: "b"
            },
            {
              name: "a1"
            },
            {
              name: "a2"
            },
            {
              name: "b1"
            },
            {
              name: "c"
            }
          ],
          links: [
            {
              source: "a",
              target: "a1",
              value: 5
            },
            {
              source: "a",
              target: "a2",
              value: 3
            },
            {
              source: "b",
              target: "b1",
              value: 8
            },
            {
              source: "a",
              target: "b1",
              value: 3
            },
            {
              source: "b1",
              target: "a1",
              value: 1
            },
            {
              source: "b1",
              target: "c",
              value: 2
            }
          ],
          focusNodeAdjacency: true,
          levels: [
            {
              depth: 0,
              itemStyle: {
                color: "#ff82ce"
              },
              lineStyle: {
                color: "source",
                opacity: 0.5
              }
            },
            {
              depth: 1,
              itemStyle: {
                color: "#00aeff"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            },
            {
              depth: 2,
              itemStyle: {
                color: "#eae375"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            },
            {
              depth: 3,
              itemStyle: {
                color: "#f5eb4c"
              },
              lineStyle: {
                color: "source",
                opacity: 0.6
              }
            }
          ],
          lineStyle: {
            curveness: 0.5
          }
        }
      });
      HomeTopRight_top.setOption(option);
    },
    initECharts_bottom_left() {
      let HomeTopRight_bottom_left = this.$echarts.init(
        document.getElementById("HomeTopRight_bottom_left")
      );
      let option = (this.BD = {
        barWidth: 20,
        title: {
          text: "{a|     营收前五及后五}",
          y: "6",
          show: true,
          textStyle: {
            fontFamily: "幼圆",
            lineHeight: 30,
            rich: {
              a: {
                color: "#FFF",
                fontSize: "15",
                height: 15,
                width: 15
              }
            }
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: "20%",
          bottom: 30
        },
        xAxis: {
          type: "value",
          position: "bottom",
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#FFF"
            }
          },
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
            "a公司",
            "b公司",
            "c公司",
            "d公司",
            "e公司",
            "f公司",
            "g公司",
            "h公司",
            "i公司",
            "j公司"
          ]
        },
        series: [
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                // barBorderRadius: 30, //设置柱状图为圆角
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(45,111,243,1)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(134,85,161,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(247,52,57,1)"
                  }
                ])
              }
            },
            label: {
              show: true,
              formatter: "{b}"
            },
            data: [0.09, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                  xAxis: 0.5 //设置平均值所在位置
                }
              ],
              symbol: ["none", "none"],
              position: "insideTopCenter",
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: "dotted",
                    color: "white"
                  },
                  label: {
                    show: true,
                    position: "middle",
                    formatter: "数据平均 : 100"
                  }
                }
              },
              large: true,
              effect: {
                show: false,
                loop: true,
                period: 0,
                scaleSize: 2,
                color: null,
                shadowColor: null,
                shadowBlur: null
              }
            }
          }
        ]
      });
      HomeTopRight_bottom_left.setOption(option);
    },
    initECharts_bottom_right() {
      let HomeTopRight_bottom_right = this.$echarts.init(
        document.getElementById("HomeTopRight_bottom_right")
      );
      let option = (this.CD = {
        barWidth: 20,
        title: {
          text: "{a|     千人营收前五及后五}",
          // x:"center",
          y: "6",
          show: true,
          textStyle: {
            fontFamily: "幼圆",
            lineHeight: 30,
            rich: {
              a: {
                color: "#FFF",
                fontSize: "15",
                height: 15,
                width: 15
              }
            }
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: "20%",
          bottom: 30
        },
        xAxis: {
          type: "value",
          position: "bottom",
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#FFF"
            }
          },
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#FFF"
            }
          }
        },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: [
            "a公司",
            "b公司",
            "c公司",
            "d公司",
            "e公司",
            "f公司",
            "g公司",
            "h公司",
            "i公司",
            "j公司"
          ]
        },
        series: [
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                // barBorderRadius: 30, //设置柱状图为圆角
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(45,111,243,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(245,184,14,1)"
                  }
                ])
              }
            },
            label: {
              show: true,
              formatter: "{b}"
            },
            data: [0.09, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1],
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                  xAxis: 0.5 //设置平均值所在位置
                }
              ],
              symbol: ["none", "none"],
              position: "insideTopCenter",
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: "dotted",
                    color: "white"
                  },
                  label: {
                    show: true,
                    position: "middle",
                    formatter: "数据平均 : 100"
                  }
                }
              },
              large: true,
              effect: {
                show: false,
                loop: true,
                period: 0,
                scaleSize: 2,
                color: null,
                shadowColor: null,
                shadowBlur: null
              }
            }
          }
        ]
      });
      HomeTopRight_bottom_right.setOption(option);
    }
  },
  mounted() {
    this.initECharts_top();
    // this.initECharts_bottom();
    this.initECharts_bottom_left();
    this.initECharts_bottom_right();
  }
};
</script>

<style scoped lang="less">
.content /deep/ .el-radio {
  padding: 0;
  margin: 0;
  // margin-left: .3em;
}

.content /deep/ .el-radio__label {
  padding: 0;
  margin-left: 0.2em;
}

.content /deep/ .el-radio {
  margin-right: 1em;
}

.content {
  width: 100%;
  height: 100%;

  .top {
    width: 100%;
    height: 38%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;
    position: relative;
    background: url("../../assets/frame2.png") no-repeat;
    background-size: 100% 100%;

    #HomeTopRight_top {
      width: 100%;
      height: 100%;
    }
  }

  .top:hover .operations {
    display: block;
  }

  .bottom {
    width: 100%;
    height: 56%;
    margin-top: 2.5%;

    .bottom_left {
      width: 48%;
      height: 100%;
      float: left;
      border: 1px solid #38d;
      box-shadow: 0 0 20px #38d inset;
      position: relative;
      background: url("../../assets/frame2.png") no-repeat;
      background-size: 100% 100%;

      .select_type {
        width: 100%;
        position: absolute;
        top: 15%;
        left: 2%;
        z-index: 999;
        font-size: 12px !important;

        .checkboxItem {
          color: white;
        }

        .el-radio__label {
          // margin-right: em;
        }
      }

      #HomeTopRight_bottom_left {
        width: 100%;
        height: 100%;
      }
    }

    .bottom_left:hover .operations {
      display: block;
    }

    .bottom_right {
      width: 48%;
      height: 100%;
      border: 1px solid #38d;
      box-shadow: 0 0 20px #38d inset;
      float: right;
      position: relative;
      background: url("../../assets/frame2.png") no-repeat;
      background-size: 100% 100%;

      .select_type {
        width: 100%;
        position: absolute;
        top: 15%;
        left: 2%;
        z-index: 999;
        display: flex;

        .checkboxItem {
          color: white;
        }
      }

      #HomeTopRight_bottom_right {
        height: 100%;
        width: 100%;
      }
    }

    .bottom_right:hover .operations {
      display: block;
    }
  }
}
</style>
