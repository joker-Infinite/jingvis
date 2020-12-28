<template>
  <div style="width: 100%;height: 100%;">
    <my-collapse-base
      ref="collapse"
      :collapseData="collapseData"
      nav-bar-show
      @selectionChange="selectionChange"
    ></my-collapse-base>
  </div>
</template>

<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";

export default {
  name: "xinNengYuan",
  components: { MyCollapseBase },
  props: {
    viewChange: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      collapseData: [
        {
          id: "ag",
          name: "油站分布",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "fbt_2020",
              collapseTitle: "油站分布",
              year: "2020",
              EChartsBox: [
                {
                  title: "油库分布",
                  style: {
                    width: "100%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      type: "map",
                      style: {
                        width: "100%",
                        height: "400px"
                      }
                    }
                  ]
                },
                {
                  title: "历史油站个数增长",
                  time: false,
                  style: {
                    width: "59.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      unit: "个",
                      option: {
                        xAxis: {
                          type: "category",
                          data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                        },
                        yAxis: {
                          type: "value",
                          name: "个",
                          nameTextStyle: {
                            color: "#000"
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}个"
                        },
                        series: [
                          {
                            data: [12, 12, 21, 34, 40, 50],
                            type: "bar",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司个数占比",
                  time: false,
                  select: false,
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "vertical",
                          right: "5%",
                          top: "center",
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}个 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "a",
          name: "营收",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "a_2020",
              collapseTitle: "2020年营收",
              year: "2020",
              EChartsBox: [
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40.5%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "380px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                          // {
                          //     type: 'value',
                          //     min: '',//最小坐标
                          //     max: '',//最大坐标
                          //     axisLabel: {
                          //         fontSize: 14,
                          //         color: "#999",
                          //         formatter: '{value} %'
                          //     },
                          //     axisLine: {
                          //         lineStyle: {
                          //             color:
                          //                 "rgba(107,107,107,0.37)",
                          //         },
                          //     },
                          //     splitLine: {
                          //         show: false//是否显示分隔线。
                          //     },
                          //     axisTick: {
                          //         show: false,
                          //     },
                          // }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              41227980.97,
                              66379186.39,
                              21512554.34,
                              23536277.13,
                              25344513.25,
                              21883601.06,
                              29285722.58,
                              33682947.29,
                              25867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  istime: true,
                  isselect: false,

                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "59%",
                    height: "450px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)",
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "新能源",
                            "石化",
                            "中化交投",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 15,
                                length2: 15,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "新能源",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "石化",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "中化交投",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "国储",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "高路油站",
                                itemStyle: { color: "#F2637B" }
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞",
                                itemStyle: { color: "#00f" }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售",
                            "其他"
                          ]
                        },

                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 10,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "过票",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "油品批发",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "分销",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "油品零售",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "非油品零售",
                                itemStyle: { color: "#F2637B" }
                              },
                              {
                                value: 1548,
                                name: "其他",
                                itemStyle: { color: "#975FE5" }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "a_2019",
              collapseTitle: "2019年营收",
              year: "2019",
              EChartsBox: [
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40.5%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "380px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                          // {
                          //     type: 'value',
                          //     min: '',//最小坐标
                          //     max: '',//最大坐标
                          //     axisLabel: {
                          //         fontSize: 14,
                          //         color: "#999",
                          //         formatter: '{value} %'
                          //     },
                          //     axisLine: {
                          //         lineStyle: {
                          //             color:
                          //                 "rgba(107,107,107,0.37)",
                          //         },
                          //     },
                          //     splitLine: {
                          //         show: false//是否显示分隔线。
                          //     },
                          //     axisTick: {
                          //         show: false,
                          //     },
                          // }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              26379186.39,
                              51512554.34,
                              53536277.13,
                              55344513.25,
                              71883601.06,
                              39285722.58,
                              33682947.29,
                              65867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  istime: true,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  /*包裹ECharts的父级元素的属性*/
                  style: {
                    width: "59%",
                    height: "450px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)",
                          axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                          }
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "新能源",
                            "石化",
                            "中化交投",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 15,
                                length2: 15,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "新能源",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "石化",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "中化交投",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "国储",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "高路油站",
                                itemStyle: { color: "#F2637B" }
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞",
                                itemStyle: { color: "#00f" }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        legend: {
                          left: "center",
                          bottom: "10px",
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售",
                            "其他"
                          ]
                        },

                        series: [
                          {
                            name: "",
                            type: "pie",
                            radius: ["30%", "50%"],
                            avoidLabelOverlap: false,
                            label: {
                              formatter: function(val) {
                                return val.name + "\n" + val.percent + "%";
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 10,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              {
                                value: 335,
                                name: "过票",
                                itemStyle: { color: "#3AA1FF" }
                              },
                              {
                                value: 310,
                                name: "油品批发",
                                itemStyle: { color: "#59D4D4" }
                              },
                              {
                                value: 234,
                                name: "分销",
                                itemStyle: { color: "#4ECB73" }
                              },
                              {
                                value: 135,
                                name: "油品零售",
                                itemStyle: { color: "#F8D33D" }
                              },
                              {
                                value: 1548,
                                name: "非油品零售",
                                itemStyle: { color: "#F2637B" }
                              },
                              {
                                value: 1548,
                                name: "其他",
                                itemStyle: { color: "#975FE5" }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "a_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "profit",
          name: "利润",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "profit_2020",
              year: 2020,
              collapseTitle: "2020年利润",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "纯利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                          // {
                          //     type: 'value',
                          //     min: '',//最小坐标
                          //     max: '',//最大坐标
                          //     axisLabel: {
                          //         fontSize: 14,
                          //         color: "#999",
                          //         formatter: '{value} %'
                          //     },
                          //     axisLine: {
                          //         lineStyle: {
                          //             color:
                          //                 "rgba(107,107,107,0.37)",
                          //         },
                          //     },
                          //     splitLine: {
                          //         show: false//是否显示分隔线。
                          //     },
                          //     axisTick: {
                          //         show: false,
                          //     },
                          // }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              41227980.97,
                              66379186.39,
                              21512554.34,
                              23536277.13,
                              25344513.25,
                              21883601.06,
                              29285722.58,
                              33682947.29,
                              25867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "过票" },
                              { value: 310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 135, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "profit_2019",
              year: 2019,
              collapseTitle: "2019年利润",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "纯利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                          // {
                          //     type: 'value',
                          //     min: '',//最小坐标
                          //     max: '',//最大坐标
                          //     axisLabel: {
                          //         fontSize: 14,
                          //         color: "#999",
                          //         formatter: '{value} %'
                          //     },
                          //     axisLine: {
                          //         lineStyle: {
                          //             color:
                          //                 "rgba(107,107,107,0.37)",
                          //         },
                          //     },
                          //     splitLine: {
                          //         show: false//是否显示分隔线。
                          //     },
                          //     axisTick: {
                          //         show: false,
                          //     },
                          // }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              41227980.97,
                              66379186.39,
                              91512554.34,
                              83536277.13,
                              65344513.25,
                              51883601.06,
                              79285722.58,
                              53682947.29,
                              45867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "过票" },
                              { value: 310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 135, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "revenue_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "budget",
          name: "费用",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "budget_2020",
              year: 2020,
              collapseTitle: "2020年预算控制",
              EChartsBox: [
                {
                  title: "月预算控制",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              41227980.97,
                              66379186.39,
                              21512554.34,
                              23536277.13,
                              25344513.25,
                              21883601.06,
                              29285722.58,
                              33682947.29,
                              25867750.94,
                              95867750.94,
                              55867750.94,
                              45867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司占比/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "过票" },
                              { value: 310, name: "油品批发" },
                              { value: 234, name: "分销" },
                              { value: 135, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "budget_2019",
              year: 2019,
              collapseTitle: "2019年预算控制",
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              41227980.97,
                              26379186.39,
                              51512554.34,
                              63536277.13,
                              85344513.25,
                              11883601.06,
                              59285722.58,
                              83682947.29,
                              65867750.94,
                              45867750.94,
                              25867750.94,
                              15867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司占比/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 655, name: "新能源" },
                              { value: 510, name: "石化" },
                              { value: 334, name: "国储" },
                              { value: 435, name: "高路油站" },
                              { value: 548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: [
                            "过票",
                            "油品批发",
                            "分销",
                            "油品零售",
                            "非油品零售"
                          ]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 635, name: "过票" },
                              { value: 910, name: "油品批发" },
                              { value: 434, name: "分销" },
                              { value: 635, name: "油品零售" },
                              { value: 1548, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "budget_",
              year: 2019,
              collapseTitle: "预算控制",
              EChartsBox: [
                {
                  title:
                    '<span style="float: left">预算项目列表</span><span style="float: right ;text-shadow:none;height: 100%;text-align: right;padding-right: 20px;font-weight:100;">2020年 执行金额:160亿元 预算金额:200亿元 总执行度:80%</span>',
                  input: true,
                  select: true,
                  selectOption: [[2015, 2016, 2017, 2018]],
                  style: {
                    width: "100%",
                    height: "600px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "600px"
                      },
                      isPagination: true,
                      height: "630px",
                      type: "table",
                      columns: [
                        { prop: "a", label: "预算项目" },
                        { prop: "b", label: "预算金额（元）" },
                        { prop: "c", label: "执行金额（元）" },
                        { prop: "d", label: "执行速度" },
                        { prop: "e", label: "时间偏离度（执行进度-时间进度）" },
                        { prop: "f", label: "年份" }
                      ],
                      tableData: [
                        { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                        { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                        { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                        { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                        { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" }
                      ]
                    }
                  ]
                },
                {
                  title: "成本费用利用率",
                  style: {
                    width: "49.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      unit: "%",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "380px"
                      },

                      option: {
                        xAxis: {
                          type: "category",
                          data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}: {c}% "
                        },
                        yAxis: {
                          type: "value",
                          name: "%"
                        },
                        series: [
                          {
                            data: [12, 20, 15, 80, 70, 11],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "分项成本变化趋势",
                  showSearch: "notShow",
                  selectOption: [["A成本", "B成本", "C成本", "D成本"]],
                  select: true,
                  style: {
                    width: "49.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "380px"
                      },
                      unit: "万元",
                      option: {
                        xAxis: {
                          type: "category",
                          data: ["2015", "2016", "2017", "2018", "2019", "2020"]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}: {c}万元"
                        },
                        yAxis: {
                          type: "value",
                          name: "万元"
                        },
                        series: [
                          {
                            data: [120, 200, 1500, 800, 700, 110],
                            type: "bar",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "revenue_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },

        {
          id: "gasRetails",
          name: "零售",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "gasRetail_table",
              year: 2020,
              collapseTitle: "订单列表",
              EChartsBox: [
                {
                  title: "订单列表",
                  select: true,
                  input: true,
                  time: true,
                  selectOption: [["新能源", "石化", "国储", "荆港嘉瑞"]],
                  style: {
                    width: "100%",
                    height: "500px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      isPagination: true,
                      style: {
                        width: "100%",
                        height: "600px"
                      },
                      height: "600px",
                      columns: [
                        { prop: "a", label: "加油站名称" },
                        { prop: "b", label: "商品名称" },
                        { prop: "c", label: "商品类型" },
                        { prop: "d", label: "金额(元)" },
                        { prop: "e", label: "时间" }
                      ],
                      tableData: [
                        {
                          a: "汉十高速双沟停车区加油北站",
                          b: "92#",
                          c: "汽油",
                          d: "200",
                          e: "2020-10-1"
                        },
                        {
                          a: "汉十高速枣阳服务区加油南站（新）",
                          b: "95#",
                          c: "汽油",
                          d: "251",
                          e: "2020-10-1"
                        },
                        {
                          a: "汉十高速双沟停车区加油南站",
                          b: "98#",
                          c: "汽油",
                          d: "300",
                          e: "2020-10-1"
                        },
                        {
                          a: "汉十高速枣阳服务区加油北站 (新）",
                          b: "0#",
                          c: "柴油",
                          d: "200",
                          e: "2020-10-1"
                        },
                        {
                          a: "汉十高速双沟停车区加油南站（新）",
                          b: "旺旺牛奶",
                          c: "零食",
                          d: "5",
                          e: "2020-10-1"
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              1227980.97,
                              6379186.39,
                              1512554.34,
                              3536277.13,
                              5344513.25,
                              1883601.06,
                              9285722.58,
                              3682947.29,
                              5867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/非油与油占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "59.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}元"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["油品零售", "非油品零售"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 350, name: "油品零售" },
                              { value: 35, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "汽油柴油销售量占比",
                  time: false,
                  select: false,
                  style: {
                    width: "32.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}吨"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "汽油" },
                              { value: 310, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "汽油柴油订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "32.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "汽油" },
                              { value: 310, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "92#|95#|98#订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "32.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["92#", "95#", "98#"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "92#" },
                              { value: 310, name: "95#" },
                              { value: 310, name: "98#" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              41227980.97,
                              66379186.39,
                              21512554.34,
                              23536277.13,
                              25344513.25,
                              21883601.06,
                              29285722.58,
                              33682947.29,
                              25867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/非油与油占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "59.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}元"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["油品零售", "非油品零售"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "油品零售" },
                              { value: 30, name: "非油品零售" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "汽油柴油销售量占比",
                  time: false,
                  select: false,
                  style: {
                    width: "32.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}吨"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "汽油" },
                              { value: 310, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "汽油柴油订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "32.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["汽油", "柴油"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "汽油" },
                              { value: 310, name: "柴油" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "92#|95#|98#订单占比",
                  time: false,
                  select: false,
                  style: {
                    width: "32.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}个"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["92#", "95#", "98#"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "92#" },
                              { value: 310, name: "95#" },
                              { value: 310, name: "98#" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              1227980.97,
                              6379186.39,
                              1512554.34,
                              3536277.13,
                              5344513.25,
                              1883601.06,
                              9285722.58,
                              3682947.29,
                              5867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  time: false,
                  select: false,
                  istime: true,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },

                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },

                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["小吃", "酒水饮料", "香烟", "车用品", "其他"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "小吃" },
                              { value: 310, name: "酒水饮料" },
                              { value: 310, name: "香烟" },
                              { value: 310, name: "车用品" },
                              { value: 310, name: "其他" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "40%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              1227980.97,
                              6379186.39,
                              1512554.34,
                              3536277.13,
                              5344513.25,
                              1883601.06,
                              9285722.58,
                              3682947.29,
                              5867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司/业态占比",
                  time: false,
                  select: false,
                  istime: true,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["小吃", "酒水饮料", "香烟", "车用品", "其他"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["48%", "50%"],
                            radius: ["38%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "小吃" },
                              { value: 310, name: "酒水饮料" },
                              { value: 310, name: "香烟" },
                              { value: 310, name: "车用品" },
                              { value: 310, name: "其他" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月油站转换率",
                  time: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      unit: "%",
                      option: {
                        xAxis: {
                          type: "category",
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
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}%"
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            data: [
                              12,
                              32,
                              21,
                              34,
                              40,
                              50,
                              20,
                              21,
                              53,
                              46,
                              21,
                              42
                            ],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月均油站排名",
                  istime: true,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      isShow: true,
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}:<br>{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "7%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "value",
                          name: "万元",
                          nameTextStyle: {
                            color: "#000"
                          },
                          boundaryGap: [0, 0.01]
                        },

                        yAxis: {
                          type: "category",
                          axisLine: { show: false },
                          axisLabel: { show: false },
                          axisTick: { show: false },
                          splitLine: { show: false },
                          data: [
                            "汉十高速双沟停车区加油北站",
                            "汉十高速枣阳服务区加油南站（新）",
                            "汉十高速双沟停车区加油南站",
                            "汉十高速枣阳服务区加油北站 (新）",
                            "汉十高速双沟停车区加油南站（新）"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}" + "：{c}"
                            },
                            data: [15851, 25851, 55851, 65551, 95851],
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月油站转换率",
                  time: false,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      unit: "%",
                      option: {
                        xAxis: {
                          type: "category",
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
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}%"
                        },
                        yAxis: {
                          type: "value"
                        },
                        series: [
                          {
                            data: [
                              52,
                              62,
                              51,
                              34,
                              80,
                              60,
                              20,
                              61,
                              33,
                              16,
                              91,
                              62
                            ],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月均油站排名",
                  istime: true,
                  style: {
                    width: "49.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px",
                    marginBottom: "10px",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      isShow: true,
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}:<br>{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "7%",
                          bottom: "3%",
                          containLabel: true
                        },
                        xAxis: {
                          type: "value",
                          name: "万元",
                          nameTextStyle: {
                            color: "#000"
                          },
                          boundaryGap: [0, 0.01]
                        },

                        yAxis: {
                          type: "category",
                          axisLine: { show: false },
                          axisLabel: { show: false },
                          axisTick: { show: false },
                          splitLine: { show: false },
                          data: [
                            "汉十高速枣阳服务区加油南站（新）",
                            "汉十高速枣阳服务区加油北站 (新）",
                            "汉十高速双沟停车区加油南站（新）",
                            "汉十高速双沟停车区加油北站",
                            "汉十高速双沟停车区加油南站"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}" + "：{c}"
                            },
                            data: [8851, 25851, 35851, 95551, 105851],
                            itemStyle: {
                              color: "#38d"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "gasWholesale",
          name: "批发",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "budget_20200",
              year: 2020,
              collapseTitle: "2020年批发营收",
              EChartsBox: [
                {
                  title: "月批发营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "34.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              91227980.97,
                              56379186.39,
                              81512554.34,
                              63536277.13,
                              25344513.25,
                              41883601.06,
                              79285722.58,
                              63682947.29,
                              85867750.94,
                              25867750.94,
                              15867750.94,
                              35867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "分公司占比/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "65%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "0",
                          right: "5%",
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "新能源",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "石化",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 234,
                                name: "国储",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 135,
                                name: "高路油站",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞",
                                itemStyle: {
                                  color: "rgba(15,197,243,0.7)",
                                  borderColor: "rgba(15,197,243,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "0",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["60%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 3350,
                                name: "92#",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "95#",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 234,
                                name: "98#",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1350,
                                name: "0#",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c} ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "贸易",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "直分销",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 234,
                                name: "票面",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 135,
                                name: "其他",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月批发营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "34.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              26379186.39,
                              31512554.34,
                              43536277.13,
                              55344513.25,
                              81883601.06,
                              19285722.58,
                              43682947.29,
                              75867750.94,
                              85867750.94,
                              95867750.94,
                              15867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "分公司占比/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "65%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "0",
                          right: "5%",
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "新能源",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1310,
                                name: "石化",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 234,
                                name: "国储",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 135,
                                name: "高路油站",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞",
                                itemStyle: {
                                  color: "rgba(15,197,243,0.7)",
                                  borderColor: "rgba(15,197,243,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "0",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["60%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 3350,
                                name: "92#",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "95#",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1234,
                                name: "98#",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1350,
                                name: "0#",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c} ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "贸易",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "直分销",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1234,
                                name: "票面",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 135,
                                name: "其他",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月批发利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              11227980.97,
                              56379186.39,
                              61512554.34,
                              43536277.13,
                              75344513.25,
                              31883601.06,
                              59285722.58,
                              33682947.29,
                              25867750.94,
                              15867750.94,
                              65867750.94,
                              65867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "分公司占比/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "0",
                          right: "5%",
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "新能源",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1310,
                                name: "石化",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 234,
                                name: "国储",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1135,
                                name: "高路油站",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞",
                                itemStyle: {
                                  color: "rgba(15,197,243,0.7)",
                                  borderColor: "rgba(15,197,243,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "0",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["60%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 3350,
                                name: "92#",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1310,
                                name: "95#",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1234,
                                name: "98#",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1350,
                                name: "0#",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c} ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "贸易",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "直分销",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1234,
                                name: "票面",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1135,
                                name: "其他",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月批发利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              66379186.39,
                              11512554.34,
                              63536277.13,
                              85344513.25,
                              41883601.06,
                              69285722.58,
                              43682947.29,
                              75867750.94,
                              95867750.94,
                              15867750.94,
                              35867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                          // {
                          //     data: [],
                          //     type: "line",
                          //     name: "折线图",
                          //     yAxisIndex: 1,
                          //     // symbol: 'none',
                          //     lineStyle: {
                          //         color: "#fea2a2",
                          //         width: 2,
                          //         shadowColor:
                          //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                          //         shadowBlur: 10,
                          //         shadowOffsetY: 10,
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          //                 offset: 0,
                          //                 color: 'rgb(255, 204, 102)'
                          //             }, {
                          //                 offset: 1,
                          //                 color: 'rgb(255, 153, 51)'
                          //             }]),
                          //             label: {
                          //                 show: true,
                          //                 position: 'top',
                          //                 textStyle: {
                          //                     fontSize: '16',
                          //                     color: 'rgb(255, 156, 54)',
                          //                 }
                          //             }
                          //         },
                          //     },
                          //     areaStyle: {
                          //         normal: {
                          //             color:
                          //                 "rgba(0,0,0,0)",
                          //         },
                          //     },
                          // },
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "分公司占比/业态占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "0",
                          right: "5%",
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "新能源",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1310,
                                name: "石化",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 234,
                                name: "国储",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 135,
                                name: "高路油站",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1548,
                                name: "荆港嘉瑞",
                                itemStyle: {
                                  color: "rgba(15,197,243,0.7)",
                                  borderColor: "rgba(15,197,243,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "0",
                          data: ["92#", "95#", "98#", "0#"],
                          textStyle: {
                            color: "#000",
                            fontSize: 12
                          }
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["60%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 3350,
                                name: "92#",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "95#",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1234,
                                name: "98#",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1350,
                                name: "0#",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "33%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "horizontal",
                          bottom: "20",
                          right: "5%",
                          data: ["贸易", "直分销", "票面", "其他"]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b} : {c} ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            radius: "60%",
                            center: ["50%", "50%"],
                            label: {
                              position: "inner"
                            },
                            data: [
                              {
                                value: 335,
                                name: "贸易",
                                itemStyle: {
                                  color: "rgba(50,123,250,0.7)",
                                  borderColor: "rgba(50,123,250,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 310,
                                name: "直分销",
                                itemStyle: {
                                  color: "rgba(244,201,7,0.7)",
                                  borderColor: "rgba(244,201,7,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 1234,
                                name: "票面",
                                itemStyle: {
                                  color: "rgba(23,216,161,0.7)",
                                  borderColor: "rgba(23,216,161,1)",
                                  borderWidth: 3
                                }
                              },
                              {
                                value: 135,
                                name: "其他",
                                itemStyle: {
                                  color: "rgba(122,60,235,0.7)",
                                  borderColor: "rgba(122,60,235,1)",
                                  borderWidth: 3
                                }
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  select: true,
                  selectNum: 3,
                  selectOption: [
                    ["新能源", "石化", "国储", "荆港嘉瑞"],
                    ["贸易", "直分销", "票面", "其他"],
                    ["批发毛利", "利润率", "成本费用利润率"]
                  ],
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "400px"
                      },
                      option: {
                        xAxis: {
                          type: "category",
                          data: [
                            "01",
                            "02",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12"
                          ]
                        },
                        yAxis: {
                          type: "value",
                          name: "万元",
                          nameTextStyle: {
                            color: "#000"
                          }
                        },
                        grid: {
                          bottom: 50,
                          right: 30,
                          left: 70,
                          top: 80
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter:
                            "{b}月:<br>{a0}:{c0}万元<br>{a1}:{c1}万元<br>{a2}:{c2}万元 "
                        },
                        legend: {
                          orient: "horizontal",
                          top: 55,
                          icon: "circle",
                          data: ["批发毛利", "利润", "成本费用利润率"]
                        },
                        series: [
                          {
                            name: "批发毛利",
                            data: [
                              32012,
                              43232,
                              30121,
                              53334,
                              12940,
                              13350,
                              13120,
                              32321,
                              54653,
                              57646,
                              49821,
                              31542
                            ],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          },
                          {
                            name: "利润",
                            data: [
                              13212,
                              24332,
                              30541,
                              33234,
                              42120,
                              36550,
                              53760,
                              25421,
                              54543,
                              57546,
                              49451,
                              35442
                            ],
                            type: "line",
                            itemStyle: {
                              color: "green"
                            }
                          },
                          {
                            name: "成本费用利润率",
                            data: [
                              32322,
                              43222,
                              31221,
                              53234,
                              14340,
                              15450,
                              16520,
                              37621,
                              58753,
                              55446,
                              43221,
                              37642
                            ],
                            type: "line",
                            itemStyle: {
                              color: "yellow"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "",
                  select: true,
                  selectNum: 3,
                  selectOption: [
                    ["新能源", "石化", "国储", "荆港嘉瑞"],
                    ["贸易", "直分销", "票面", "其他"],
                    ["批发毛利", "利润率", "成本费用利润率"]
                  ],
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "400px"
                      },
                      option: {
                        xAxis: {
                          type: "category",
                          data: [
                            "01",
                            "02",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12"
                          ]
                        },
                        yAxis: {
                          type: "value",
                          name: "万元",
                          nameTextStyle: {
                            color: "#000"
                          }
                        },
                        grid: {
                          bottom: 50,
                          right: 30,
                          left: 70,
                          top: 80
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter:
                            "{b}月:<br>{a0}:{c0}万元<br>{a1}:{c1}万元<br>{a2}:{c2}万元 "
                        },
                        legend: {
                          orient: "horizontal",
                          top: 55,
                          icon: "circle",
                          data: ["批发毛利", "利润", "成本费用利润率"]
                        },
                        series: [
                          {
                            name: "批发毛利",
                            data: [
                              12012,
                              93232,
                              40121,
                              53334,
                              82940,
                              73350,
                              43120,
                              92321,
                              44653,
                              67646,
                              19821,
                              61542
                            ],
                            type: "line",
                            itemStyle: {
                              color: "#38d"
                            }
                          },
                          {
                            name: "利润",
                            data: [
                              63212,
                              54332,
                              40541,
                              43234,
                              72120,
                              86550,
                              93760,
                              15421,
                              54543,
                              67546,
                              79451,
                              45442
                            ],
                            type: "line",
                            itemStyle: {
                              color: "green"
                            }
                          },
                          {
                            name: "成本费用利润率",
                            data: [
                              62322,
                              43222,
                              81221,
                              43234,
                              14340,
                              65450,
                              16520,
                              77621,
                              88753,
                              95446,
                              13221,
                              67642
                            ],
                            type: "line",
                            itemStyle: {
                              color: "yellow"
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月批发利润",
                  istime: false,
                  timeValue: "",
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              11227980.97,
                              56379186.39,
                              61512554.34,
                              43536277.13,
                              75344513.25,
                              31883601.06,
                              59285722.58,
                              33682947.29,
                              25867750.94,
                              15867750.94,
                              65867750.94,
                              65867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业务类型占分公司占比",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月批发利润",
                  istime: false,
                  timeValue: "",
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return (
                              val[0].name +
                              "月" +
                              ":" +
                              "<br />营收:" +
                              (val[0].value / 10000).toFixed(2) +
                              "万元"
                            );
                          }
                        },
                        grid: {
                          top: "50",
                          right: "60",
                          left: "60",
                          bottom: "60" //图表尺寸大小
                        },
                        dataZoom: [
                          {
                            type: "inside"
                          },
                          {
                            type: "slider"
                          }
                        ],
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
                              "01",
                              "02",
                              "03",
                              "04",
                              "05",
                              "06",
                              "07",
                              "08",
                              "09",
                              "10",
                              "11",
                              "12"
                            ],
                            axisLabel: {
                              margin: 10,
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            }
                          }
                        ],
                        yAxis: [
                          {
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                              // fontSize: 16,
                              // padding: 10,
                            },
                            axisLabel: {
                              formatter: function(val) {
                                return val / 10000;
                              },
                              color: "#999",
                              textStyle: {
                                fontSize: 12
                              }
                            },
                            axisLine: {
                              lineStyle: {
                                color: "rgba(107,107,107,0.37)"
                              }
                            },
                            axisTick: {
                              show: false
                            },
                            splitLine: {
                              lineStyle: {
                                color: "rgba(131,101,101,0.2)",
                                type: "dashed"
                              }
                            }
                          }
                        ],
                        series: [
                          {
                            type: "bar",
                            data: [
                              51227980.97,
                              56379186.39,
                              51512554.34,
                              93536277.13,
                              75344513.25,
                              31883601.06,
                              59285722.58,
                              63682947.29,
                              85867750.94,
                              95867750.94,
                              25867750.94,
                              15867750.94
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业务类型占分公司占比",
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginTop: "10px"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 1335, name: "新能源" },
                              { value: 310, name: "石化" },
                              { value: 234, name: "国储" },
                              { value: 135, name: "高路油站" },
                              { value: 1548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "accountsReceivabless",
          name: "回款率",
          icon: require("../../../assets/business/icon_1-1.png"),
          iconActive: require("../../../assets/business/icon_1-2.png"),
          collapseItem: [
            {
              id: "budget_2020s",
              year: 2020,
              collapseTitle: "2020年回款率",
              EChartsBox: [
                {
                  title: "月回款率",
                  time: false,
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      unit: "万元",
                      option: {
                        xAxis: {
                          type: "category",
                          data: [
                            "01",
                            "02",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12"
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}月: {c}万元 "
                        },
                        yAxis: {
                          type: "value",
                          name: "万元"
                        },
                        series: [
                          {
                            data: [
                              522,
                              932,
                              521,
                              734,
                              540,
                              530,
                              630,
                              721,
                              943,
                              176,
                              621,
                              212
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司占比/回款公司占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 135, name: "新能源" },
                              { value: 1010, name: "石化" },
                              { value: 934, name: "国储" },
                              { value: 835, name: "高路油站" },
                              { value: 748, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["A公司", "B公司", "C公司", "D公司", "其余"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["50%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 1035, name: "A公司" },
                              { value: 1510, name: "B公司" },
                              { value: 434, name: "C公司" },
                              { value: 1935, name: "D公司" },
                              { value: 548, name: "其余" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "budget_2019s",
              year: 2019,
              collapseTitle: "2019年回款率",
              EChartsBox: [
                {
                  title: "月回款率",
                  time: false,
                  style: {
                    width: "39.5%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      unit: "万元",
                      option: {
                        xAxis: {
                          type: "category",
                          data: [
                            "01",
                            "02",
                            "03",
                            "04",
                            "05",
                            "06",
                            "07",
                            "08",
                            "09",
                            "10",
                            "11",
                            "12"
                          ]
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b}月: {c}万元 "
                        },
                        yAxis: {
                          type: "value",
                          name: "万元"
                        },
                        series: [
                          {
                            data: [
                              522,
                              932,
                              521,
                              734,
                              540,
                              530,
                              630,
                              721,
                              943,
                              176,
                              621,
                              212
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "子公司占比/回款公司占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "60%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 5,
                          data: [
                            "新能源",
                            "石化",
                            "国储",
                            "高路油站",
                            "荆港嘉瑞"
                          ]
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["50%", "50%"],
                            radius: ["30%", "45%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 935, name: "新能源" },
                              { value: 1010, name: "石化" },
                              { value: 634, name: "国储" },
                              { value: 835, name: "高路油站" },
                              { value: 548, name: "荆港嘉瑞" }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      style: {
                        width: "50%",
                        height: "300px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },

                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["A公司", "B公司", "C公司", "D公司", "其余"]
                        },
                        series: [
                          {
                            type: "pie",
                            avoidLabelOverlap: true,
                            center: ["50%", "50%"],
                            radius: ["30%", "50%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#76c15c",
                                    "#15b3e2",
                                    "#2e65fd",
                                    "#1fcaa8",
                                    "#ee6565",
                                    "#fec02a",
                                    "#fe3922",
                                    "#52fe36",
                                    "#fe3afc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [2, -2, 2, -2],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  let text = v.name + "\n" + v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 16
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 1035, name: "A公司" },
                              { value: 510, name: "B公司" },
                              { value: 434, name: "C公司" },
                              { value: 935, name: "D公司" },
                              { value: 548, name: "其余" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "revenue_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            },
            {
              id: "budget_2020",
              year: 2020,
              collapseTitle: " 当月收款计划列表",
              EChartsBox: [
                {
                  title: "",
                  time: false,
                  style: {
                    width: "100%",
                    height: "500px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      isPagination: true,
                      style: {
                        width: "100%",
                        height: "500px"
                      },
                      height: "600px",
                      columns: [
                        { prop: "a", label: "供应商名称" },
                        { prop: "b", label: "应收款项名称" },
                        { prop: "c", label: "应收时间" },
                        { prop: "d", label: "超期时间" }
                      ],
                      tableData: [
                        { a: "A批发商", b: "/", c: "/", d: "/" },
                        { a: "B批发商", b: "/", c: "/", d: "/" },
                        { a: "C批发商", b: "/", c: "/", d: "/" },
                        { a: "D批发商", b: "/", c: "/", d: "/" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
  async mounted() {
    await new Promise(resolve => {
      setInterval(_ => {
        resolve();
      }, 500);
    });
    this.$refs["collapse"].initECharts(this.collapseData);
  },
  async created() {
    await this.obtainAxios("营收", "2020", "ys");
    await this.obtainAxios("营收", "2019", "ys");
  },
  methods: {
    selectionChange(v) {
      this.$router.push("/energy/JYZXiangQing");
    },
    obtainAxios(name, year, years) {
      let data = [];
      let id = "";
      this.$axios
        .get("/api/sundry/fuwuqucaiwu", {
          params: { nianfen: year, type: years, plateName: "能源板块" }
        })
        .then(v => {
          data = v.data.data;
          let mm = [];
          this.collapseData.forEach((item, index) => {
            if (item.name == name) {
              item.collapseItem.forEach((cItem, cIndex) => {
                if (cItem.year == year) {
                  cItem.EChartsBox.forEach((sItem, sIndex) => {
                    if (sIndex == 0) {
                      sItem.EChartsItem[0].option.series[0].data = [];
                      sItem.EChartsItem[0].option.xAxis.data = [];

                      let yAxis = [];
                      let xBxis = [];
                      data.forEach(element => {
                        xBxis.push(element.xBxis.split("-")[1]);
                        yAxis.push(element.yAxis * 10000);
                      });
                      sItem.EChartsItem[0].option.series[0].data = yAxis;
                      sItem.EChartsItem[0].option.xAxis.data = xBxis;
                    }
                    // if (sIndex == 1) {
                    //     sItem.EChartsItem[0].option.series[0].data = [];
                    //     data.xYListFrom2.forEach((i, ix) => {
                    //         sItem.EChartsItem[0].option.series[0].data.push({
                    //             name: i.xBxis,
                    //             value: i.yAxis
                    //         });
                    //     })
                    //     sItem.EChartsItem[1].option.series[0].data = []
                    //     data.xYListFrom3.forEach((i, ix) => {
                    //         sItem.EChartsItem[1].option.series[0].data.push({
                    //             name: i.xBxis,
                    //             value: i.yAxis
                    //         });
                    //     })
                    // }
                  });
                }
              });
            }
          });
        });
      // this.$axios.get('/api/sundry/fuwuqucaiwu',{params:{nianfen:year,type:name}}).then(res=>{
      //     let xBxis = [];
      //     let yAxis = [];
      //     res.data.data.forEach(element => {

      //     });
      // })
    }
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>

<style scoped></style>
