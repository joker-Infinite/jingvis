<template>
  <div class="businsstopDatil">
    <div class="left" :id="businessId.id[0]"></div>
    <div class="right" :id="businessId.id[1]"></div>
  </div>
</template>
<script>
export default {
  props: {
    businessId: {
      type: Object,
      default: {}
    }
  },
  dat() {
    return {};
  },
  methods: {
    EchartsLeft() {
      let EchartsLeft = this.$echarts.init(
        document.getElementById(this.businessId.id[0])
      );
      let this_ = this;
      var option = {
        title: {
          text: "店面收入完成百分比",
          top: 10,
          left: 20
        },
        tooltip: {
          //提示框组件
          trigger: "axis",
          formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#6a7985"
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
          bottom: "10%",
          top: "20%",
          //	padding:'0 0 10 0',
          containLabel: true
        },
        legend: {
          //图例组件，颜色和名字
          right: "10%",
          top: "30%",
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
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
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
            name: "应收",
            type: "bar",
            data: [62, 80, 80, 62, 60, 55, 45, 30, 15, 106, 55, 45, 30, 15, 1],
            barWidth: 12,
            barCategoryGap: 50,

            itemStyle: {
              normal: {
                show: true,
                color: "#3aa1ff",
                barBorderRadius: 50,
                borderWidth: 0
              }
            }
          },
          {
            name: "未收",
            type: "bar",
            data: [65, 55, 60, 45, 42, 15, 12, 5, 106, 55, 45, 30, 15, 1],
            barWidth: 12,
            barCategoryGap: 50,

            itemStyle: {
              normal: {
                show: true,
                color: "#fc5ea9",
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
            data: [62, 80, 80, 62, 60, 55, 45, 30, 15, 106, 55, 45]
          }
        ]
      };
      option.xAxis[1] = {
        type: "value",
        max: option.xAxis[0].data.length * 100,
        show: false
      };
      console.log(option.series[2]);
      option.series[2].data = option.series[2].data.map((x, i) => [
        35 + i * 100,
        x
      ]);
      // option.series[3].data = option.series[3].data.map((x, i) => [73 + i * 100, x])
      EchartsLeft.setOption(option);
    },
    EchartsRight() {
      let EchartsRight = this.$echarts.init(
        document.getElementById(this.businessId.id[1])
      );
      let this_ = this;
      let index = 0;
      var colorList = [
        "#73ddff",
        "#73acff",
        "#9e87ff",
        "#ff3976",
        "#2ccc44",
        "#ffbc32",
        "#fd866a",
        "#1ca7ff"
      ];
      let option = {
        title: [
          {
            text: "分类统计",
            // top: 15,
            // left: 20,
            x: "center",
            y: "center",
            textStyle: {
              fontSize: 20
            }
          },
          {
            text: "店面收入完成百分比",
            top: 10,
            left: 20,
            textStyle: {
              fontSize: 20
            }
          }
        ],
        grid: {
          top: "20%",
          right: "40",
          left: "60",
          bottom: "40" //图表尺寸大小
        },
        legend: {
          orient: "horizontal",
          bottom: 10
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            type: "pie",
            center: ["50%", "50%"],
            radius: ["24%", "45%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex];
                }
              }
            },
            label: {
              show: true,
              position: "outside",
              formatter: "{a|{b}：{d}%}\n{hr|}",
              rich: {
                hr: {
                  backgroundColor: "t",
                  borderRadius: 3,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12]
                },
                a: {
                  padding: [-30, 15, -20, 15]
                }
              }
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: [
              {
                name: "A供应商",
                value: 1.45
              },
              {
                name: "B供应商",
                value: 2.93
              },
              {
                name: "C供应商",
                value: 3.15
              },
              {
                name: "D供应商",
                value: 3.15
              },
              {
                name: "E供应商",
                value: 3.15
              },
              {
                name: "F供应商",
                value: 3.15
              },
              {
                name: "H供应商",
                value: 3.15
              },
              {
                name: "其他",
                value: 3.15
              }
            ]
          }
        ]
      };
      EchartsRight.setOption(option);
    }
  },
  mounted() {
    this.EchartsLeft();
    this.EchartsRight();
  },
  watch: {
    "$store.state.refresh": function() {
      this.businessId.id.forEach(element => {
        document.getElementById(element).setAttribute("_echarts_instance_", "");
      });
      this.EchartsLeft();
      this.EchartsRight();
    }
  }
};
</script>
<style lang="less" scoped>
.businsstopDatil {
  width: 100%;
  height: 400px;
  display: flex;
  .left {
    width: 53.5%;
    margin-right: 1.5%;
    height: 100%;
    background: url("../../assets/business/frame 1.png") no-repeat;
    background-size: 100% 100%;
  }
  .right {
    width: 45%;
    height: 100%;
    background: url("../../assets/business/frame 1.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
