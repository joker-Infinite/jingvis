<template>
  <div class="content">
    <div class="tab">
      <div
        :class="{ btn: true, select: select === 'A' }"
        @click="selectOption('A')"
      >
        成交率
      </div>
      <div
        :class="{ btn: true, select: select === 'B' }"
        @click="selectOption('B')"
      >
        利<i style="display: inline-block;height: 17px;width: 100%"></i>润
      </div>
    </div>
    <div class="item HomeBottomA" @mouseover="mouseHover('AD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div id="HomeBottomAData"></div>
      <div class="ei" id="HomeBottomA"></div>
    </div>
    <div class="item HomeBottomB" @mouseover="mouseHover('BD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div class="ei" id="HomeBottomB"></div>
    </div>
    <div class="item HomeBottomC" @mouseover="mouseHover('CD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div class="ei" id="HomeBottomC"></div>
    </div>
    <div class="item HomeBottomD" @mouseover="mouseHover('DD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div class="ei" id="HomeBottomD"></div>
    </div>
    <div class="item HomeBottomE" @mouseover="mouseHover('ED')">
      <operations class="operations" @showOne="showOne"></operations>
      <div class="ei" id="HomeBottomE"></div>
    </div>
    <div class="item HomeBottomF" @mouseover="mouseHover('FD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div class="ei" id="HomeBottomF"></div>
    </div>
    <div class="item HomeBottomG" @mouseover="mouseHover('GD')">
      <operations class="operations" @showOne="showOne(1)"></operations>
      <div class="ei" id="HomeBottomG"></div>
    </div>
  </div>
</template>

<script>
import Operations from "../common/operations";

export default {
  name: "HomeBottom",
  components: { Operations },
  data() {
    return {
      AD: {},
      BD: {},
      CD: {},
      DD: {},
      ED: {},
      FD: {},
      GD: {},
      option: {},
      select: "A",
      option_A: {},
      option_B: {},
      options: {}
    };
  },
  methods: {
    selectOption(v) {
      this.select = v;
      if (v === "A") {
        this.initECharts_bottom(this.option_A);
        return;
      }
      this.initECharts_bottom(this.option_B);
    },
    mouseHover(v) {
      this.option = this.AD;
    },
    showOne(is) {
      let option = JSON.parse(JSON.stringify(this.option));
      let options = JSON.parse(JSON.stringify(this.options));
      options.title.x = "center";
      options.title.y = "-3%";
      option.title.x = "center";
      option.title.y = "-3%";
      if (is === 1) {
        options.title.textStyle.rich.a.fontSize = 25;
        options.barWidth = 30;
        options.title.padding = [50, 50, 50, 50];
        this.$emit("showOne", options);
      } else {
        option.legend.textStyle.fontSize = 20;
        option.title.textStyle.rich.a.fontSize = 25;
        option.barWidth = 30;
        option.title.padding = [50, 50, 50, 50];
        option.legend.top = "100";
        option.legend.right = "50";
        this.$emit("showOne", option);
      }
    },
    initECharts_bottom(option) {
      let HomeBottomA = this.$echarts.init(
        document.getElementById("HomeBottomA")
      );
      let HomeBottomB = this.$echarts.init(
        document.getElementById("HomeBottomB")
      );
      let HomeBottomC = this.$echarts.init(
        document.getElementById("HomeBottomC")
      );
      let HomeBottomD = this.$echarts.init(
        document.getElementById("HomeBottomD")
      );
      let HomeBottomE = this.$echarts.init(
        document.getElementById("HomeBottomE")
      );
      let HomeBottomF = this.$echarts.init(
        document.getElementById("HomeBottomF")
      );

      this.AD = option;
      HomeBottomA.setOption(option);
      HomeBottomB.setOption(option);
      HomeBottomC.setOption(option);
      HomeBottomD.setOption(option);
      HomeBottomE.setOption(option);
      HomeBottomF.setOption(option);
    },
    initBottomEnd() {
      let HomeBottomG = this.$echarts.init(
        document.getElementById("HomeBottomG")
      );
      let option = {
        barWidth: 10,
        title: {
          x: "center",
          y: "-5",
          text: "{a|     收益率}",
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
          top: "15%",
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
          data: ["a公司", "b公司", "c公司", "d公司", "e公司"]
        },
        series: [
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                barBorderRadius: 30, //设置柱状图为圆角
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(192,42,84,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(127,69,224,1)"
                  }
                ])
              }
            },
            label: {
              show: true,
              formatter: "{b}"
            },
            data: [0.6, 0.7, 0.8, 0.9, 1],
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                  xAxis: 0.8 //设置平均值所在位置
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
      };
      this.options = option;
      HomeBottomG.setOption(option);
    }
  },
  mounted() {
    this.option_A = {
      barWidth: 10,
      grid: {
        show: true,
        width: "65%",
        // height: "auto",
        top: "27%",
        left: "18%",
        bottom: "30px"
      },
      title: {
        text: "{a|     完成百分比}",
        show: true,
        x: "20%",
        y: -5,
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
          type: "line",
          lineStyle: {
            color: "red",
            width: 1
            // shadowBlur:5,
            // opacity:1
          }
        },
        formatter: function(list) {
          return list[0].name + ":" + list[0].value;
        }
      },
      color: ["red", "#a549ff"],
      legend: {
        data: [
          {
            name: "a",
            textStyle: {
              // fontSize:12,
              fontWeight: "bolder",
              color: "#fff"
            }
          },
          "b"
        ],
        icon: "circle",
        orient: "horizontal",
        textStyle: {
          fontSize: "",
          color: "#FFF"
        },
        itemWidth: 10,
        itemHeight: 10,
        right: 20,
        top: 25,
        borderColor: "yellow"
      },
      xAxis: [
        {
          type: "category",
          data: ["a", "b", "c", "d"],
          axisPointer: {
            type: "shadow"
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#FFF"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 100,
          interval: 50,
          axisLabel: {
            formatter: "{value}%",
            textStyle: {
              color: "#FFF"
            }
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#001e6c"
            }
          }
        },
        {
          type: "value",
          min: 0,
          max: 10,
          interval: 3,
          axisLabel: {
            formatter: value => {
              let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
              return arr[value];
            },
            textStyle: {
              color: "#FFF"
            }
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "#001e6c"
            }
          }
        }
      ],
      series: [
        {
          name: "a",
          type: "line",
          yAxisIndex: 1,
          data: [2, 2, 9, 7]
        },
        {
          name: "b",
          type: "bar",
          data: [
            {
              value: 10,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            },
            {
              value: 20,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            },
            {
              value: 80,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            },
            {
              value: 90,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            }
          ]
        }
      ]
    };
    this.option_B = {
      barWidth: 10,
      grid: {
        show: true,
        width: "65%",
        // height: "auto",
        top: "27%",
        left: "18%",
        bottom: "30px"
      },
      title: {
        text: "{a|     完成百分比}",
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
      color: ["red", "#a549ff"],
      legend: {
        data: ["a", "b"],
        icon: "circle",
        orient: "horizontal",
        textStyle: {
          color: "#FFF"
        },
        itemWidth: 10,
        itemHeight: 10,
        right: 20,
        top: 25
      },
      xAxis: [
        {
          type: "category",
          data: ["a", "b", "c", "d"],
          axisPointer: {
            type: "shadow"
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#FFF"
            }
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          min: 0,
          max: 100,
          interval: 50,
          axisLabel: {
            formatter: "{value}%",
            textStyle: {
              color: "#FFF"
            }
          },
          axisTick: {
            //坐标轴刻度
            show: false
          }
        },
        {
          type: "value",
          min: 1,
          max: 12,
          interval: 2,
          axisLabel: {
            formatter: value => {
              let arr = [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12"
              ];
              return arr[value];
            },
            textStyle: {
              color: "#FFF"
            }
          },
          axisTick: {
            //坐标轴刻度
            show: false
          }
        }
      ],
      series: [
        {
          name: "a",
          type: "line",
          yAxisIndex: 1,
          data: [4, 9, 6, 3]
        },
        {
          name: "b",
          type: "bar",
          data: [
            {
              value: 32,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            },
            {
              value: 44,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            },
            {
              value: 55,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            },
            {
              value: 76,
              itemStyle: {
                normal: {
                  // barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                  position: "inside",
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgb(166,72,255,1)" },
                    { offset: 0.5, color: "rgb(44,30,255,1)" },
                    { offset: 1, color: "rgb(70,70,255,0)" }
                  ])
                }
              }
            }
          ]
        }
      ]
    };
    this.initECharts_bottom(this.option_A);
    this.initBottomEnd();
  }
};
</script>

<style scoped lang="less">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;

  .tab {
    width: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .btn {
      width: 100%;
      height: 40%;
      text-align: center;
      // border: 1px solid #38d;
      // background: rgba(42, 57, 115, 0.7);
      border-radius: 2px;
      color: white;
      cursor: pointer;
      background: url("../../assets/frame3.png") no-repeat;
      background-size: 100% 100%;
      padding-top: 0.5em;
    }

    .btn:hover {
      // background: rgba(51, 136, 221, .7);
      color: #ffc363;
    }

    .select {
      color: #ffc363;
      // background: rgba(51, 136, 221, .7);
    }
  }

  .item {
    width: 13%;
    height: 100%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;
    position: relative;
    background: url("../../assets/frame2.png") no-repeat;
    background-size: 100% 120%;

    .ei {
      width: 100%;
      height: 100%;
    }
  }

  .HomeBottomA:hover .operations {
    display: block;
  }

  .HomeBottomB:hover .operations {
    display: block;
  }

  .HomeBottomC:hover .operations {
    display: block;
  }

  .HomeBottomD:hover .operations {
    display: block;
  }

  .HomeBottomE:hover .operations {
    display: block;
  }

  .HomeBottomF:hover .operations {
    display: block;
  }

  .HomeBottomG:hover .operations {
    display: block;
  }
}
</style>
