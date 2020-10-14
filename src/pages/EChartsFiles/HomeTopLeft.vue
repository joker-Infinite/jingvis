<template>
  <div class="content">
    <div class="top">
      <div id="HomeTopLeft_top"></div>
    </div>
    <div class="center">
      <div id="HomeTopLeft_center"></div>
    </div>
    <div class="bottom">
      <div id="HomeTopLeft_bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTopLeft",
  data() {
    return {};
  },
  methods: {
    initECharts_top() {
      let HomeTopLeft_top = this.$echarts.init(
        document.getElementById("HomeTopLeft_top")
      );
      let option = {
        title: {
          text: "{a|     现金流量}",
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
        legend: {
          data: ["金额"],
          icon: "circle",
          textStyle: {
            color: "#FFF"
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
                color: "#fff"
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
                color: "#fff"
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
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
          }
        ]
      };
      HomeTopLeft_top.setOption(option);
    },
    initECharts_center() {
      let HomeTopLeft_center = this.$echarts.init(
        document.getElementById("HomeTopLeft_center")
      );
      let option = {
        title: {
          text: "{a|     应收账款回款率}",
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
        legend: {
          data: ["金额"],
          icon: "circle",
          textStyle: {
            color: "#FFF"
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
                color: "#fff"
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
                color: "#fff"
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
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
          }
        ]
      };
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
      let option = {
        barWidth: 10, //设置柱状图的粗细
        tooltip: {
          trigger: "axis",
          formatter: function(val) {
            return val[0].name + "<br>" + val[0].value + "%";
          }
        },
        title: {
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
            color: "#FFF"
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
                color: "#FFF"
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
                color: "#FFF"
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
            data: [120, 200, 150, 80, 70],
            type: "bar",
            color: "rgba(208,137,208,0.5)",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(255,255,255,0.2)"
            },
            itemStyle: {
              normal: {
                barBorderRadius: 30, //设置柱状图为圆角
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#e65962" },
                  { offset: 0.5, color: "#f6a573" },
                  { offset: 1, color: "#FFe295" }
                ])
              }
            },
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
      };
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
.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  .top {
    width: 100%;
    height: 32%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;

    #HomeTopLeft_top {
      width: 100%;
      height: 100%;
    }
  }

  .center {
    width: 100%;
    height: 32%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;

    #HomeTopLeft_center {
      width: 100%;
      height: 100%;
    }
  }

  .bottom {
    width: 100%;
    height: 32%;
    border: 1px solid #38d;
    box-shadow: 0 0 20px #38d inset;

    #HomeTopLeft_bottom {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
