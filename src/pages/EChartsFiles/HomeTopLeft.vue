<template>
  <div class="content">
    <div class="top" @mouseover="mouseHover('AD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div id="initECharts_top_data"></div>
      <div id="HomeTopLeft_top"></div>
    </div>
    <div class="center" @mouseover="mouseHover('BD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div id="HomeTopLeft_center_data"></div>
      <div id="HomeTopLeft_center"></div>
    </div>
    <div class="bottom" @mouseover="mouseHover('CD')">
      <operations class="operations" @showOne="showOne"></operations>
      <div id="initECharts_bottom_data"></div>
      <div id="HomeTopLeft_bottom"></div>
    </div>
    <show-e-charts ref="showECharts"></show-e-charts>
  </div>
</template>

<script>
import Operations from "../common/operations";
import ShowECharts from "../common/showECharts";

export default {
  name: "HomeTopLeft",
  components: { ShowECharts, Operations },
  data() {
    return {
      AD: {},
      BD: {},
      CD: {},
      option: {}
    };
  },
  methods: {
    mouseHover(v) {
      this.option = this.[v];
    },
    showOne() {
      // 修改柱状图的粗细
      this.option.barWidth = 30;
      // 修改title中文字的大小
      this.option.title.textStyle.rich.a.fontSize = 30;
      // 修改title的边距
      this.option.title.padding = [50, 50, 50, 50];
      (this.option.title.x = "center"),
        (this.option.title.y = "-3%"),
        (this.option.legend.top = "100");
      this.option.legend.right = "50";
      this.option.legend.textStyle.fontSize = "20";
      this.option.legend.itemHeight = 15;
      this.option.legend.itemWidth = 15;
      this.$refs["showECharts"].openDialog(this.option);
    },
    initECharts_top() {
      let HomeTopLeft_top = this.$echarts.init(
        document.getElementById("HomeTopLeft_top")
      );
      let option = (this.AD = {
        // 标题
        title: {
          x: "center",
          text: "{a|     现金流量}",
          textStyle: {
            fontFamily: "幼圆",
            rich: {
              align: "center",
              a: {
                color: "#FFF",
                fontSize: "16",
                height: 20,
                width: "100%"
              }
            }
          }
        },
        tooltip: {
          trigger: "axis",
          formatter: function(list) {
            return list[0].name + ":" + list[0].value;
          },
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(255, 191, 41,1)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)"
                  }
                ],
                global: false
              }
            }
          }
        },
        legend: {
          data: ["金额"],
          icon: "circle",
          textStyle: {
            color: "#6691ff"
          },
          itemWidth: 10,
          itemHeight: 10,
          top: "30",
          right: 20
        },
        barWidth: 10, //设置柱状图的粗细
        xAxis: [
          {
            type: "category",
            data: [
              {
                value: "一月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "二月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "三月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "四月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "五月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "六月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "七月",
                textStyle: {
                  fontSize: "12px"
                }
              }
            ],
            axisLine: {
              //坐标轴轴线
              // show: true,
              lineStyle: {
                color: "#6691ff"
              }
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            axisLabel: {
              //文字换行
              formatter: function(v) {
                return v.split("").join("\n");
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: true,
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                color: "#6691ff"
              }
            },
            name: "万元",
            nameTextStyle: {
              fontSize: "12px"
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            splitLine: {
              show: false
            }
          },
          {
            type: "value",
            min: 0,
            max: 25,
            interval: 5,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: false,
              formatter: "{value} °C"
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            splitLine: {
              show: false
            },
            splitArea: { show: false }
          }
        ],
        grid: {
          width: "auto",
          height: "55%",
          top: "30%"
        },
        series: [
          {
            name: "金额",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(255,191,41,0)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255,191,41,1)"
                    }
                  ])
                }
              }
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3],
            color: "#ffbf29"
          }
        ]
      });
      HomeTopLeft_top.on("legendselectchanged", function(param) {
        if (!param.selected.金额) {
          document.getElementById("initECharts_top_data").innerHTML =
            "暂无数据";
        } else {
          document.getElementById("initECharts_top_data").innerHTML = "";
        }
      });
      HomeTopLeft_top.setOption(option);
    },
    initECharts_center() {
      let HomeTopLeft_center = this.$echarts.init(
        document.getElementById("HomeTopLeft_center")
      );

      let option = (this.BD = {
        title: {
          text: "{a|     应收账款回款率}",
          x: "20%",
          textStyle: {
            fontFamily: "幼圆",
            rich: {
              a: {
                color: "#FFF",
                fontSize: "16",
                height: 20,
                width: 20
              }
            }
          }
        },
        tooltip: {
          trigger: "axis",
          formatter: function(list) {
            return list[0].name + ":" + list[0].value;
          },
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)"
                  },
                  {
                    offset: 0.5,
                    color: "rgba(255, 255, 255,1)"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)"
                  }
                ],
                global: false
              }
            }
          }
        },
        legend: {
          // selectedMode:false,
          data: ["金额"],
          icon: "circle",
          textStyle: {
            color: "#6691ff",
            fontSize: "12"
          },
          itemWidth: 10,
          itemHeight: 10,
          top: "30",
          right: 20
        },
        barWidth: 10, //设置柱状图的粗细
        xAxis: [
          {
            type: "category",

            data: [
              {
                value: "一月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "二月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "三月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "四月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "五月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "六月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "七月",
                textStyle: {
                  fontSize: "12px"
                }
              }
            ],
            axisLine: {
              //坐标轴轴线
              // show: false
              lineStyle: {
                color: "#6691ff"
              }
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            axisLabel: {
              //文字换行
              formatter: function(v) {
                return v.split("").join("\n");
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 100,
            axisLine: {
              lineStyle: {
                color: "#6691ff"
              }
            },
            name: "%",
            nameTextStyle: {
              fontSize: "12px"
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            splitLine: {
              show: false
            }
          },
          {
            type: "value",
            min: 0,
            max: 25,
            interval: 5,
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: false,
              formatter: "{value} °C"
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            splitLine: {
              show: false
            },
            splitArea: { show: false }
          }
        ],
        grid: {
          width: "auto",
          height: "55%",
          top: "30%"
        },
        series: [
          {
            name: "金额",
            type: "line",
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3],
            itemStyle: {
              normal: {
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(60,249,255,0)"
                    },
                    {
                      offset: 1,
                      color: "rgba(60,249,255,1)"
                    }
                  ])
                }
              }
            },
            color: "#3cf9ff"
          }
        ]
      });
      HomeTopLeft_center.on("legendselectchanged", function(param) {
        if (!param.selected.金额) {
          document.getElementById("HomeTopLeft_center_data").innerHTML =
            "暂无数据";
        } else {
          document.getElementById("HomeTopLeft_center_data").innerHTML = "";
        }
      });

      HomeTopLeft_center.setOption(option);
    },
    initECharts_bottom() {
      let HomeTopLeft_bottom = this.$echarts.init(
        document.getElementById("HomeTopLeft_bottom")
      );
      let data = [
        {
          name: "aa公司",
          value: 100
        },
        {
          name: "bb公司",
          value: 130
        },
        {
          name: "cc公司",
          value: 320
        },
        {
          name: "dd公司",
          value: 430
        },
        {
          name: "ee公司",
          value: 530
        }
      ];
      let max = 0;
      let option = (this.CD = {
        barWidth: "10", //设置柱状图的粗细
        tooltip: {
          trigger: "axis",
          formatter: function(val) {
            return val[0].name + "<br>" + val[0].value + "%";
          }
        },
        title: {
          x: "center",
          padding: "",
          text: "{a|     欠款前五}",
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
        legend: {
          data: ["c", "d"],
          icon: "circle",
          textStyle: {
            color: "#6691ff"
          },
          itemWidth: 10,
          itemHeight: 10,
          left: 0,
          top: 25
        },
        xAxis: [
          {
            type: "value",
            show: true,
            min: 0,
            max: 250,
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              //坐标轴刻度
              show: false
            }
          }
        ],
        yAxis: [
          {
            show: true,
            type: "category",
            data: ["1", "2", "3", "4", "5"],
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#fff"
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        grid: {
          width: "auto",
          height: "70%",
          top: "20%"
        },
        series: [
          {
            // data: [120, 200, 150, 80, 70],
            data: [
              {
                value: 120,
                itemStyle: {
                  normal: {
                    barBorderRadius: 30, //设置柱状图为圆角
                    color: "#00df4b"
                  }
                }
              },
              {
                value: 120,
                itemStyle: {
                  normal: {
                    barBorderRadius: 30, //设置柱状图为圆角
                    color: "#008bf7"
                  }
                }
              },
              {
                value: 120,
                itemStyle: {
                  normal: {
                    barBorderRadius: 30, //设置柱状图为圆角
                    color: "#008bf7"
                  }
                }
              },
              {
                value: 120,
                itemStyle: {
                  normal: {
                    barBorderRadius: 30, //设置柱状图为圆角
                    color: "#ffb541"
                  }
                }
              },
              {
                value: 120,
                itemStyle: {
                  normal: {
                    barBorderRadius: 30, //设置柱状图为圆角
                    color: "#ff6a6a"
                  }
                }
              }
            ],
            type: "bar",
            color: "rgba(208,137,208,0.5)",
            showBackground: true,
            // backgroundStyle: {
            //     color: "rgba(255,255,255,0.2)"
            // },

            barCategoryGap: "100%",
            markLine: {
              data: [
                {
                  type: "average",
                  name: "平均值",
                  xAxis: 100 //设置平均值所在位置
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
      HomeTopLeft_bottom.setOption(option);
    }
  },
  mounted() {
    this.initECharts_top();
    this.initECharts_center();
    this.initECharts_bottom();
  }
};
</script>

<style scoped lang="less">
#HomeTopLeft_center_data,
#initECharts_top_data,
#initECharts_bottom_data {
  position: absolute;
  top: 40%;
  left: 40%;
  font-size: 1.5em;
  color: #fff;
}
.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  .top {
    width: 100%;
    height: 30%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;
    position: relative;
    background: url("../../assets/frame1.png") no-repeat;
    background-size: 100% 100%;
    #HomeTopLeft_top {
      width: 100%;
      height: 100%;
    }
  }

  .center {
    width: 100%;
    height: 30%;
    margin-top: 5%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;
    position: relative;
    background: url("../../assets/frame1.png") no-repeat;
    background-size: 100% 100%;
    #HomeTopLeft_center {
      width: 100%;
      height: 100%;
    }
  }

  .bottom {
    width: 100%;
    height: 30%;
    margin-top: 5%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;
    position: relative;
    background: url("../../assets/frame1.png") no-repeat;
    background-size: 100% 100%;
    #HomeTopLeft_bottom {
      width: 100%;
      height: 100%;
    }
  }

  .top:hover .operations {
    display: block;
  }

  .center:hover .operations {
    display: block;
  }

  .bottom:hover .operations {
    display: block;
  }
}
</style>
