<template>
  <div style="width: 100%;height: 100%;">
    <my-collapse-base
      ref="collapse"
      nav-bar-show
      @selectionChange="selectionChange"
      @searchQuery="searchQuery"
      @ClickTotal="ClickTotal"
      :totalCount="totalCount"
      :collapseData="collapseData"
    ></my-collapse-base>
  </div>
</template>

<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";
import common from "../../../components/js/common";
export default {
  name: "xianNing",
  components: { MyCollapseBase },
  mixins: [common],
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
          id: "revenueTable",
          name: "基础信息",
          allShow: true,
          icon: require("../../../assets/serviceArea/jcxq/jichuxinxi.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/jichuxinxi1.png"),
          collapseItem: [
            {
              id: "ab_2019",
              collapseTitle: "黄冈基础信息",
              EChartsBox: [
                {
                  title: "黄冈服务区列表",
                  time: true,
                  input: true,
                  style: {
                    cursor: "pointer",
                    width: "100%",
                    height: "550px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "550px",
                      style: {
                        width: "100%",
                        background: "#FFF"
                      },
                      isPagination: true,
                      columns: [
                        { prop: "serviceName", label: "服务区名称" },
                        { prop: "B", label: "高速名称" },
                        {
                          prop: "C",
                          label: "车流量(辆)",
                          children: [
                            { prop: "maxcart", label: "大车" },
                            { prop: "mincart", label: "小车" }
                          ]
                        },
                        { prop: "shouyi", label: "收益(元)" },
                        { prop: "G", label: "利润(元)" },
                        { prop: "H", label: "坪效(元)" },
                        { prop: "I", label: "面积(m)" },

                        {
                          prop: "J",
                          label: "业态订单数",
                          children: [
                            { prop: "refuel", label: "加油" },
                            { prop: "snack", label: "小吃" },
                            { prop: "convenience", label: "便利店" },
                            { prop: "catering", label: "餐饮" }
                          ]
                        }
                      ],
                      tableData: []
                    }
                  ]
                },
                {
                  title: "接管运营",
                  style: {
                    cursor: "pointer",
                    width: "59.5%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      serviceName: "",
                      unit: "个",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
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
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        grid: {
                          top: "70",
                          right: "60",
                          left: "60",
                          bottom: "30"
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}个"
                        },
                        yAxis: {
                          name: "个",
                          nameTextStyle: {
                            color: "#000"
                          },
                          type: "value",
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        series: [
                          {
                            data: [5, 6, 7, 7, 7, 9, 8, 9, 9, 9, 10, 15],
                            type: "line",
                            lineStyle: {
                              color: "#fea528",
                              width: 2,
                              shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "等级分类占比",
                  style: {
                    cursor: "pointer",
                    width: "39.5%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
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
                      option: {
                        title: {
                          text: "",
                          left: "43%",
                          top: "48%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },
                        legend: {
                          orient: "vertical",
                          right: 10,
                          top: "center",
                          data: ["Ⅰ类", "Ⅱ类", "Ⅲ类", "Ⅳ类", "Ⅴ类"]
                        },
                        series: [
                          {
                            name: "访问来源",
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            // label: {
                            //     show: false,
                            //     position: "center",
                            // },
                            // emphasis: {
                            //     label: {
                            //         show: true,
                            //         fontSize: "30",
                            //         fontWeight: "bold",
                            //     },
                            // },

                            itemStyle: {
                              normal: {
                                color: function(v) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8",
                                    "#36c78b",
                                    "#51a3fc"
                                  ];
                                  return colorList[v.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 25,
                                fontSize: 16,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { value: 335, name: "Ⅰ类" },
                              { value: 310, name: "Ⅱ类" },
                              { value: 234, name: "Ⅲ类" },
                              { value: 135, name: "Ⅳ类" },
                              { value: 1548, name: "Ⅴ类" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },

                {
                  title: "占地面积",
                  style: {
                    cursor: "pointer",
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      serviceName: "刘畈停车区",
                      serviceNamemin: "郧阳服务区",
                      unit: "亩",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
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
                          ],

                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        grid: {
                          top: "70",
                          right: "60",
                          left: "60",
                          bottom: "30"
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}亩"
                          // axisPointer: {
                          //     type: "shadow"
                          // },
                        },
                        yAxis: {
                          type: "value",
                          name: "㎡",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        series: [
                          {
                            data: [
                              10,
                              60.56,
                              150.58,
                              160.56,
                              180.54,
                              180.24,
                              200.56,
                              220.64,
                              220.8,
                              250.32,
                              280.56,
                              283
                            ],
                            type: "line",

                            lineStyle: {
                              color: "#fea528",
                              width: 2,
                              shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "经营面积",
                  style: {
                    cursor: "pointer",
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      serviceName: "英山服务区",
                      serviceNamemin: "咸宁服务区",
                      unit: "㎡",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
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
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        grid: {
                          top: "70",
                          right: "60",
                          left: "60",
                          bottom: "30"
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}万㎡"
                          // axisPointer: {
                          //     type: "shadow"
                          // },
                        },
                        yAxis: {
                          name: "㎡",
                          nameTextStyle: {
                            color: "#000"
                          },
                          type: "value",
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        series: [
                          {
                            data: [
                              40,
                              1100,
                              1100,
                              1700,
                              1700,
                              1900,
                              1900,
                              2050,
                              2050,
                              2150,
                              2600,
                              9953.64
                            ],
                            type: "line",
                            lineStyle: {
                              color: "#fea528",
                              width: 2,
                              shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月均车流量",
                  style: {
                    cursor: "pointer",
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      serviceName: "大悟服务区",
                      serviceNamemin: "恩施服务区",
                      unit: "辆",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
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
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        grid: {
                          top: "70",
                          right: "60",
                          left: "60",
                          bottom: "30"
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}辆"
                          // axisPointer: {
                          //     type: "shadow"
                          // },
                        },
                        yAxis: {
                          type: "value",
                          name: "辆",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        series: [
                          {
                            data: [
                              400,
                              350,
                              460,
                              1045,
                              1580,
                              1406,
                              2100,
                              2600,
                              621,
                              2400,
                              1069,
                              599
                            ],
                            type: "line",
                            lineStyle: {
                              color: "#fea528",
                              width: 2,
                              shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "订单数量",
                  style: {
                    cursor: "pointer",
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      serviceName: "大悟服务区",
                      serviceNamemin: "恩施服务区",
                      unit: "单",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
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
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        grid: {
                          top: "70",
                          right: "60",
                          left: "60",
                          bottom: "30"
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}单"
                          // axisPointer: {
                          //     type: "shadow"
                          // },
                        },
                        yAxis: {
                          type: "value",
                          name: "单",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        series: [
                          {
                            data: [
                              8700,
                              7600,
                              5600,
                              7600,
                              5400,
                              1200,
                              4300,
                              3200,
                              3200,
                              9300,
                              6600,
                              8900
                            ],
                            type: "line",
                            lineStyle: {
                              color: "#fea528",
                              width: 2,
                              shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "订单金额÷订单数量=客单价",
                  style: {
                    cursor: "pointer",
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      serviceName: "浠水服务区",
                      serviceNamemin: "河浦服务区",
                      unit: "元",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
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
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        grid: {
                          top: "70",
                          right: "60",
                          left: "60",
                          bottom: "30"
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}元"
                          // axisPointer: {
                          //     type: "shadow"
                          // },
                        },
                        yAxis: {
                          type: "value",
                          name: "元",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        series: [
                          {
                            data: [
                              876,
                              765,
                              564,
                              765,
                              543,
                              1230,
                              432,
                              321,
                              340,
                              934,
                              669,
                              899
                            ],
                            type: "line",
                            lineStyle: {
                              color: "#fea528",
                              width: 2,
                              shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
                            }
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "月订单数量÷月车流量=转换率",
                  style: {
                    cursor: "pointer",
                    width: "100%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      serviceName: "木子店服务区",
                      serviceNamemin: "总路咀服务区",

                      unit: "%",
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
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
                          ],
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        grid: {
                          top: "70",
                          right: "60",
                          left: "60",
                          bottom: "30"
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: "{b} : {c}%"
                          // axisPointer: {
                          //     type: "shadow"
                          // },
                        },
                        yAxis: {
                          type: "value",
                          name: "%",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          axisTick: {
                            show: false
                          }
                        },
                        series: [
                          {
                            data: [
                              5.2,
                              4.8,
                              12.5,
                              10.3,
                              10.4,
                              6.5,
                              8.5,
                              9.5,
                              14.5,
                              13.5,
                              15,
                              13.7
                            ],
                            type: "line",
                            lineStyle: {
                              color: "#fea528",
                              width: 2,
                              shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
                              shadowBlur: 10,
                              shadowOffsetY: 10
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
          id: "revenue",
          name: "营收",
          icon: require("../../../assets/serviceArea/jcxq/yingshou.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/yingshou1.png"),
          collapseItem: [
            {
              id: "revenue_2020",
              year: 2020,
              collapseTitle: "2020年营收",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "35%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "330px"
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
                              val[0].value / 10000 +
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
                            color: "#59588D",
                            data: [],
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
                            data: [],
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
                  title: "营收占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "64.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
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
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>营收:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "其他", value: 11154551 },
                              { name: "餐饮", value: 54125877 },
                              { name: "超市", value: 65478254 },
                              { name: "品牌餐饮", value: 69874512 },
                              { name: "小龙虾", value: 36578941 },
                              { name: "小吃", value: 12054890 }
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
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>营收:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "45%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "咸宁中心", value: 5114551 },
                              { name: "宜昌中心", value: 2412577 },
                              { name: "黄冈中心", value: 3547824 },
                              { name: "十堰中心", value: 9987512 },
                              { name: "孝感中心", value: 8657941 },
                              { name: "恩施中心", value: 1205890 }
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
              id: "revenue_2019",
              year: 2019,
              collapseTitle: "2019年营收",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "营收",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "35%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "330px"
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
                            color: "#59588D",
                            data: [],
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
                            data: [],
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
                  title: "营收占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "64.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "350px"
                      },
                      option: {
                        title: { text: "" },

                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>营收:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "350px"
                      },
                      option: {
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>营收:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: []
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
          id: "profit",
          name: "利润",
          icon: require("../../../assets/serviceArea/jcxq/lirun.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/lirun1.png"),
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
                  title: "利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "35%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "330px"
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
                              "<br />利润:" +
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
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
                              35867750.94,
                              65867750.94,
                              55867750.94,
                              0
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
                  title: "利润占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "64.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "其他", value: 11154551 },
                              { name: "餐饮", value: 54125877 },
                              { name: "超市", value: 65478254 },
                              { name: "品牌餐饮", value: 69874512 },
                              { name: "小龙虾", value: 36578941 },
                              { name: "小吃", value: 12054890 }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "咸宁中心", value: 5114551 },
                              { name: "宜昌中心", value: 2412577 },
                              { name: "黄冈中心", value: 3547824 },
                              { name: "十堰中心", value: 9987512 },
                              { name: "孝感中心", value: 8657941 },
                              { name: "恩施中心", value: 1205890 }
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
                  title: "利润",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "35%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "330px"
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
                              "<br />利润:" +
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
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
                              35867750.94,
                              65867750.94,
                              55867750.94,
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
                  title: "利润占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "64.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "其他", value: 5154551 },
                              { name: "餐饮", value: 2125877 },
                              { name: "超市", value: 8478254 },
                              { name: "品牌餐饮", value: 1874512 },
                              { name: "小龙虾", value: 9578941 },
                              { name: "小吃", value: 4054890 }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "咸宁中心", value: 6114551 },
                              { name: "宜昌中心", value: 7412577 },
                              { name: "黄冈中心", value: 7547824 },
                              { name: "十堰中心", value: 287512 },
                              { name: "孝感中心", value: 1657941 },
                              { name: "恩施中心", value: 1205890 }
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
          id: "cost",
          name: "成本",
          icon: require("../../../assets/serviceArea/jcxq/chengben.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/chengben1.png"),
          collapseItem: [
            {
              id: "profit_2020sss",
              year: 2020,
              collapseTitle: "2020年成本",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "成本",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "35%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "330px"
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
                              "<br />成本:" +
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
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
                              35867750.94,
                              65867750.94,
                              55867750.94,
                              0
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
                  title: "利润占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "64.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "其他", value: 11154551 },
                              { name: "餐饮", value: 54125877 },
                              { name: "超市", value: 65478254 },
                              { name: "品牌餐饮", value: 69874512 },
                              { name: "小龙虾", value: 36578941 },
                              { name: "小吃", value: 12054890 }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "咸宁中心", value: 5114551 },
                              { name: "宜昌中心", value: 2412577 },
                              { name: "黄冈中心", value: 3547824 },
                              { name: "十堰中心", value: 9987512 },
                              { name: "孝感中心", value: 8657941 },
                              { name: "恩施中心", value: 1205890 }
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
              id: "profit_2019fds",
              year: 2019,
              collapseTitle: "2019年成本",
              allQuery: false,
              allQueryData: {
                input: false,
                select: false,
                time: false
              },
              EChartsBox: [
                {
                  title: "成本",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "35%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "330px"
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
                              "<br />成本:" +
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
                            name: "月",
                            nameTextStyle: {
                              color: "#000"
                            },
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
                              35867750.94,
                              65867750.94,
                              55867750.94,
                              0
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
                  title: "利润占比",
                  istime: true,
                  select: false,
                  style: {
                    width: "64.5%",
                    height: "400px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "0",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#06d3c4",
                                    "#9e87ff",
                                    "#7ebdff",
                                    "#fdd36a",
                                    "#fdb36a",
                                    "#fd866a"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 25,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "其他", value: 5154551 },
                              { name: "餐饮", value: 2125877 },
                              { name: "超市", value: 8478254 },
                              { name: "品牌餐饮", value: 1874512 },
                              { name: "小龙虾", value: 9578941 },
                              { name: "小吃", value: 4054890 }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "50%",
                        height: "370px"
                      },
                      option: {
                        title: { text: "" },
                        tooltip: {
                          trigger: "item",
                          formatter: function(val) {
                            return (
                              val.name +
                              ":<br>利润:" +
                              (val.value / 10000).toFixed(2) +
                              "万元<br>占比:" +
                              val.percent +
                              "%"
                            );
                          }
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          right: 10
                        },
                        series: [
                          {
                            type: "pie",
                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                            center: ["45%", "50%"],
                            radius: ["30%", "40%"],
                            clockwise: true,
                            hoverOffset: 20,
                            itemStyle: {
                              normal: {
                                // 设置扇形的阴影
                                // shadowBlur: 30,
                                // shadowColor: "rgba(0,0,0,0.3)",
                                // shadowOffsetX: -5,
                                // shadowOffsetY: 5,
                                color: function(v) {
                                  let colorList = [
                                    "#3cb8fe",
                                    "#73abf8",
                                    "#cb9bff",
                                    "#fdb36a",
                                    "#ff9393",
                                    "#95a2ff"
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
                                  // let text = v.percent + "%";
                                  return text;
                                },
                                textStyle: {
                                  fontSize: 14
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 10,
                                lineStyle: {
                                  width: 1
                                }
                              }
                            },
                            data: [
                              { name: "咸宁中心", value: 6114551 },
                              { name: "宜昌中心", value: 7412577 },
                              { name: "黄冈中心", value: 7547824 },
                              { name: "十堰中心", value: 287512 },
                              { name: "孝感中心", value: 1657941 },
                              { name: "恩施中心", value: 1205890 }
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
          id: "construction",
          name: "结构",
          icon: require("../../../assets/serviceArea/jcxq/jiegouhua.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/jiegouhua1.png"),
          collapseItem: [
            {
              id: "construction_2020",
              year: 2020,
              collapseTitle: "2020年业态结构",
              EChartsBox: [
                {
                  title: "品牌收入占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#F98B2F",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
                            radius: ["35%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                borderWidth: 0,
                                borderColor: "rgba(255,255,255,0)",
                                shadowBlur: 20,
                                shadowColor: "rgba(57,39,132,0.3)",
                                shadowOffsetX: -5,
                                shadowOffsetY: -5,
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              },
                              emphasis: {
                                borderWidth: 10
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [0, -100, 25, -100],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  return (
                                    "{name|" +
                                    v.name +
                                    "}\n{value|" +
                                    v.percent +
                                    "}"
                                  );
                                },
                                textStyle: {
                                  fontSize: 16
                                },
                                rich: {
                                  name: {
                                    fontSize: 14,
                                    padding: [0, 10, 0, 4]
                                  },
                                  value: {
                                    fontSize: 16
                                  }
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 35,
                                length2: 35,
                                lineStyle: {
                                  width: 1.5
                                }
                              }
                            },
                            data: [
                              {
                                name: "一线品牌",
                                value: 1.45
                              },
                              {
                                name: "二线品牌",
                                value: 2.93
                              },
                              {
                                name: "无品牌",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            center: ["50%", "55%"],
                            label: {
                              position: "inner",
                              textStyle: {
                                fontSize: 16
                              }
                            },
                            itemStyle: {
                              normal: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            selectedMode: "single",
                            data: [
                              {
                                value: 875,
                                name: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌"
                              }
                            ]
                          },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
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

                            data: [
                              {
                                value: 875,
                                name: "特色",
                                type: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统",
                                type: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌",
                                type: "品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "品牌经营面积占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                          text: "",
                          top: "50%",
                          left: "45%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "一线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "二线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "无品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
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

                            data: [
                              {
                                value: 875,
                                name: "一线品牌",
                                type: "一线品牌"
                              },
                              {
                                value: 1239,
                                name: "二线品牌",
                                type: "二线品牌"
                              },
                              {
                                value: 1239,
                                name: "无品牌",
                                type: "无品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "品牌列表",
                  style: {
                    width: "100%",
                    height: "310px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "430px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "300px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "一线品牌",
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20(元)",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "二线品牌",
                          B: "10",
                          C: "12",
                          D: "452",
                          E: "2452",
                          F: "185451",
                          G: "18(元)",
                          H: "254",
                          I: "85214"
                        },
                        {
                          A: "无品牌",
                          B: "8",
                          C: "10",
                          D: "350",
                          E: "1548",
                          F: "152014",
                          G: "15(元)",
                          H: "210",
                          I: "75465"
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "业态分类占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#F98B2F",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
                            radius: ["35%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                borderWidth: 0,
                                borderColor: "rgba(255,255,255,0)",
                                shadowBlur: 20,
                                shadowColor: "rgba(57,39,132,0.3)",
                                shadowOffsetX: -5,
                                shadowOffsetY: -5,
                                color: function(params) {
                                  let colorList = [
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              },
                              emphasis: {
                                borderWidth: 10
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [0, -100, 25, -100],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  return (
                                    "{name|" +
                                    v.name +
                                    "}\n{value|" +
                                    v.percent +
                                    "}"
                                  );
                                },
                                textStyle: {
                                  fontSize: 16
                                },
                                rich: {
                                  name: {
                                    fontSize: 14,
                                    padding: [0, 10, 0, 4]
                                  },
                                  value: {
                                    fontSize: 16
                                  }
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 35,
                                length2: 35,
                                lineStyle: {
                                  width: 1.5
                                }
                              }
                            },
                            data: [
                              {
                                name: "便利店",
                                value: 1.45
                              },
                              {
                                name: "特产",
                                value: 2.93
                              },
                              {
                                name: "小吃",
                                value: 3.15
                              },
                              {
                                name: "餐饮",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态经营面积占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                          text: "",
                          left: "45%",
                          top: "50%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "特色",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "传统",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
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

                            data: [
                              {
                                value: 875,
                                name: "便利店",
                                type: "便利店"
                              },
                              {
                                value: 1239,
                                name: "餐饮",
                                type: "餐饮"
                              },
                              {
                                value: 1239,
                                name: "特产",
                                type: "特产"
                              },
                              {
                                value: 1239,
                                name: "小吃",
                                type: "小吃"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态列表",
                  style: {
                    width: "100%",
                    height: "330px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "550px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "250px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "餐饮",
                          B: "15",
                          C: "12",
                          D: "585",
                          E: "3456",
                          F: "152052",
                          G: "20(元)",
                          H: "258",
                          I: "95465"
                        },
                        {
                          A: "小吃",
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20(元)",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "便利店",
                          B: "10",
                          C: "13",
                          D: "456",
                          E: "4531",
                          F: "185421",
                          G: "19(元)",
                          H: "265",
                          I: "106541"
                        },
                        {
                          A: "特产",
                          B: "11",
                          C: "13",
                          D: "365",
                          E: "4871",
                          F: "163526",
                          G: "18(元)",
                          H: "260",
                          I: "152401"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: "construction_2019",
              year: 2019,
              collapseTitle: "2019年业态结构",
              EChartsBox: [
                {
                  title: "品牌收入占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#F98B2F",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
                            radius: ["35%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                borderWidth: 0,
                                borderColor: "rgba(255,255,255,0)",
                                shadowBlur: 20,
                                shadowColor: "rgba(57,39,132,0.3)",
                                shadowOffsetX: -5,
                                shadowOffsetY: -5,
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              },
                              emphasis: {
                                borderWidth: 10
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [0, -100, 25, -100],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  return (
                                    "{name|" +
                                    v.name +
                                    "}\n{value|" +
                                    v.percent +
                                    "}"
                                  );
                                },
                                textStyle: {
                                  fontSize: 16
                                },
                                rich: {
                                  name: {
                                    fontSize: 14,
                                    padding: [0, 10, 0, 4]
                                  },
                                  value: {
                                    fontSize: 16
                                  }
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 35,
                                length2: 35,
                                lineStyle: {
                                  width: 1.5
                                }
                              }
                            },
                            data: [
                              {
                                name: "一线品牌",
                                value: 1.45
                              },
                              {
                                name: "二线品牌",
                                value: 2.93
                              },
                              {
                                name: "无品牌",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    },
                    {
                      /*ECharts的属性*/
                      style: {
                        width: "49.5%",
                        height: "300px"
                      },
                      option: {
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          {
                            name: "整体分类",
                            type: "pie",
                            radius: [0, "30%"],
                            center: ["50%", "55%"],
                            label: {
                              position: "inner",
                              textStyle: {
                                fontSize: 16
                              }
                            },
                            itemStyle: {
                              normal: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            selectedMode: "single",
                            data: [
                              {
                                value: 875,
                                name: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌"
                              }
                            ]
                          },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
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

                            data: [
                              {
                                value: 875,
                                name: "特色",
                                type: "特色"
                              },
                              {
                                value: 1239,
                                name: "传统",
                                type: "传统"
                              },
                              {
                                value: 1239,
                                name: "品牌",
                                type: "品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "品牌经营面积占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                          text: "",
                          top: "50%",
                          left: "45%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "一线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "二线品牌",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "无品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#fec279",
                                    "#968af5",
                                    "#e790e8"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
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

                            data: [
                              {
                                value: 875,
                                name: "一线品牌",
                                type: "一线品牌"
                              },
                              {
                                value: 1239,
                                name: "二线品牌",
                                type: "二线品牌"
                              },
                              {
                                value: 1239,
                                name: "无品牌",
                                type: "无品牌"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "品牌列表",
                  style: {
                    width: "100%",
                    height: "310px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "430px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "300px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "一线品牌",
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20(元)",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "二线品牌",
                          B: "10",
                          C: "12",
                          D: "452",
                          E: "2452",
                          F: "185451",
                          G: "18(元)",
                          H: "254",
                          I: "85214"
                        },
                        {
                          A: "无品牌",
                          B: "8",
                          C: "10",
                          D: "350",
                          E: "1548",
                          F: "152014",
                          G: "15(元)",
                          H: "210",
                          I: "75465"
                        }
                      ]
                    }
                  ]
                },
                {
                  title: "业态分类占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "50%",
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
                          text: "",
                          top: "43%",
                          left: "55%",
                          textStyle: {
                            fontSize: 16
                          },
                          subtext: "",
                          subtextStyle: {
                            fontSize: 20,
                            color: "#F98B2F",
                            fontWeight: "bolder"
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "40" //图表尺寸大小
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 100,
                          // padding:['1000px','100px','10px','10px']
                          itemGap: 25
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}:{c}: ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["60%", "50%"],
                            radius: ["35%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                borderWidth: 0,
                                borderColor: "rgba(255,255,255,0)",
                                shadowBlur: 20,
                                shadowColor: "rgba(57,39,132,0.3)",
                                shadowOffsetX: -5,
                                shadowOffsetY: -5,
                                color: function(params) {
                                  let colorList = [
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              },
                              emphasis: {
                                borderWidth: 10
                              }
                            },
                            label: {
                              show: true,
                              position: "outer",
                              width: 0,
                              height: 0,
                              lineHeight: 0,
                              backgroundColor: "auto",
                              padding: [0, -100, 25, -100],
                              borderRadius: 2,
                              distanceToLabelLine: 0,
                              normal: {
                                formatter(v) {
                                  return (
                                    "{name|" +
                                    v.name +
                                    "}\n{value|" +
                                    v.percent +
                                    "}"
                                  );
                                },
                                textStyle: {
                                  fontSize: 16
                                },
                                rich: {
                                  name: {
                                    fontSize: 14,
                                    padding: [0, 10, 0, 4]
                                  },
                                  value: {
                                    fontSize: 16
                                  }
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 35,
                                length2: 35,
                                lineStyle: {
                                  width: 1.5
                                }
                              }
                            },
                            data: [
                              {
                                name: "便利店",
                                value: 1.45
                              },
                              {
                                name: "特产",
                                value: 2.93
                              },
                              {
                                name: "小吃",
                                value: 3.15
                              },
                              {
                                name: "餐饮",
                                value: 3.15
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态经营面积占比",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                          text: "",
                          left: "45%",
                          top: "50%"
                        },
                        legend: {
                          orient: "vertical",
                          top: "center",
                          left: 10,
                          itemGap: 25
                        },
                        tooltip: {
                          formatter: "{b}:{c}: ({d}%)"
                        },

                        series: [
                          // {
                          //     name: "整体分类",
                          //     type: "pie",
                          //     radius: [0, "30%"],
                          //     center: ["50%", "55%"],
                          //     label: {
                          //         position: "inner",
                          //         textStyle: {
                          //             fontSize: 16
                          //         }
                          //     },
                          //     itemStyle: {
                          //         normal: {
                          //             borderColor:
                          //                 "#fff",
                          //             borderWidth: 2,
                          //             color: function (
                          //                 params
                          //             ) {
                          //                 let colorList = [
                          //                     "#76c15c",
                          //                     "#15b3e2",
                          //                     "#2e65fd",
                          //                     "#1fcaa8",
                          //                     "#ee6565",
                          //                     "#fec02a",
                          //                     "#fe3922",
                          //                     "#52fe36",
                          //                     "#fe3afc",
                          //                 ];
                          //                 return colorList[
                          //                     params
                          //                         .dataIndex
                          //                 ];
                          //             },
                          //         },
                          //     },
                          //     selectedMode: "single",
                          //     data: [
                          //         {
                          //             value: 875,
                          //             name: "特色",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "传统",
                          //         },
                          //         {
                          //             value: 1239,
                          //             name: "品牌",
                          //         },
                          //     ],
                          // },
                          {
                            name: "招标方式",
                            type: "pie",
                            center: ["50%", "55%"],
                            radius: ["40%", "55%"],
                            itemStyle: {
                              normal: {
                                color: function(params) {
                                  let colorList = [
                                    "#4ecb73",
                                    "#73acff",
                                    "#fd8a2d",
                                    "#9e87ff"
                                  ];
                                  return colorList[params.dataIndex];
                                }
                              }
                            },
                            labelLine: {
                              normal: {
                                length: 30,
                                length2: 30,
                                lineStyle: {
                                  width: 1
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

                            data: [
                              {
                                value: 875,
                                name: "便利店",
                                type: "便利店"
                              },
                              {
                                value: 1239,
                                name: "餐饮",
                                type: "餐饮"
                              },
                              {
                                value: 1239,
                                name: "特产",
                                type: "特产"
                              },
                              {
                                value: 1239,
                                name: "小吃",
                                type: "小吃"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "业态列表",
                  style: {
                    width: "100%",
                    height: "330px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    marginTop: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "550px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "250px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "业态结构"
                        },
                        {
                          prop: "B",
                          label: "所在服务区个数"
                        },
                        {
                          prop: "C",
                          label: "经营场所个数"
                        },
                        {
                          prop: "D",
                          label: "占地面积(平方米)"
                        },
                        {
                          prop: "E",
                          label: "订单数"
                        },
                        {
                          prop: "F",
                          label: "收入(元)"
                        },
                        {
                          prop: "G",
                          label: "客单价(元)"
                        },
                        {
                          prop: "H",
                          label: "坪效(元)"
                        },
                        {
                          prop: "I",
                          label: "利润(元)"
                        }
                      ],
                      tableData: [
                        {
                          A: "餐饮",
                          B: "15",
                          C: "12",
                          D: "585",
                          E: "3456",
                          F: "152052",
                          G: "20(元)",
                          H: "258",
                          I: "95465"
                        },
                        {
                          A: "小吃",
                          B: "12",
                          C: "15",
                          D: "556",
                          E: "3436",
                          F: "203006",
                          G: "20(元)",
                          H: "300",
                          I: "105465"
                        },
                        {
                          A: "便利店",
                          B: "10",
                          C: "13",
                          D: "456",
                          E: "4531",
                          F: "185421",
                          G: "19(元)",
                          H: "265",
                          I: "106541"
                        },
                        {
                          A: "特产",
                          B: "11",
                          C: "13",
                          D: "365",
                          E: "4871",
                          F: "163526",
                          G: "18(元)",
                          H: "260",
                          I: "152401"
                        }
                      ]
                    }
                  ]
                }
              ]
            },

            {
              id: "construction_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        },
        {
          id: "rateofreturn",
          name: "回款率",
          icon: require("../../../assets/serviceArea/jcxq/huikuanlv1.png"),
          iconActive: require("../../../assets/serviceArea/jcxq/huikuanlv.png"),
          collapseItem: [
            {
              id: "rateofreturn_2020",
              year: 2020,
              collapseTitle: "2020回款率",
              EChartsBox: [
                {
                  title: "回款率",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      isTitle: true,
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
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
                                    color: "rgba(0, 0, 0,1)"
                                  },
                                  {
                                    offset: 1,
                                    color: "rgba(0, 255, 233,0)"
                                  }
                                ],
                                global: false
                              }
                            }
                          },
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":<br>" +
                              val[0].seriesName +
                              ":" +
                              val[0].value +
                              "%<br>" +
                              val[1].seriesName +
                              ":" +
                              val[1].value +
                              "%"
                            );
                          }
                        },
                        xAxis: {
                          splitLine: {
                            show: false
                          },
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
                        legend: {
                          data: ["机关回款率", "服务区回款率"]
                        },
                        yAxis: {
                          name: "%",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          type: "value"
                        },
                        series: [
                          {
                            name: "服务区回款率",
                            data: [
                              22,
                              18,
                              19,
                              23,
                              29,
                              33,
                              31,
                              20,
                              15,
                              19,
                              33,
                              41
                            ],
                            type: "line"
                          },
                          {
                            name: "机关回款率",
                            data: [
                              52,
                              38,
                              29,
                              53,
                              49,
                              43,
                              81,
                              40,
                              65,
                              49,
                              53,
                              71
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款金额排行",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      isbar: true,
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}<br>金额:{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "10%",
                          bottom: "10%",
                          top: "10%",
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
                            "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                            "应收稻谷款(加工厂)",
                            "应收大米款（加工厂）",
                            "茂名市金瑞粮油贸易有限公司",
                            "湖北省羊肚菌农业科技有限公司"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}"
                            },
                            data: (function() {
                              let data = [
                                29348333.33,
                                33032530.21,
                                35496337.3,
                                49985731.14,
                                87860562.51
                              ];
                              let datas = [];
                              data.forEach(element => {
                                datas.push((element / 10000).toFixed(2));
                              });
                              console.log(datas);
                              return datas;
                            })(),
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
                  title: "回款超期",
                  style: {
                    width: "33%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "470px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "330px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "供应商",
                          width: "220"
                        },
                        {
                          prop: "B",
                          label: "还款时间"
                        },
                        {
                          prop: "C",
                          label: "超期时间"
                        },
                        {
                          prop: "D",
                          label: "金额(元)",
                          width: "120"
                        }
                      ],
                      tableData: [
                        {
                          A: "应收大米款（加工厂）",
                          B: "2020-9-4",
                          C: "21天",
                          D: "35496337.3"
                        },
                        {
                          A: "茂名市金瑞粮油贸易有限公司",
                          B: "2020-9-3",
                          C: "20天",
                          D: "49985731.14"
                        },
                        {
                          A: "湖北省羊肚菌农业科技有限公司",
                          B: "2020-9-5",
                          C: "15天",
                          D: "87860562.51"
                        },
                        // {
                        //   A: "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                        //   B: "2020-9-3",
                        //   C: "12天",
                        //   D: "29348333.33"
                        // },
                        {
                          A: "应收稻谷款(加工厂)",
                          B: "2020-9-2",
                          C: "10天",
                          D: "33032530.21"
                        }
                      ]
                    }
                  ]
                },

                {
                  title: "预计收款",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                      unit: "万元",
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          //提示框组件
                          trigger: "axis",
                          formatter: function(val) {
                            console.log(val);
                            let val0 = val[0];
                            let val1 = val[1];
                            return (
                              val0.name +
                              ":<br>" +
                              val0.seriesName +
                              ":" +
                              val0.value.toFixed(2) +
                              "万元<br>" +
                              val1.seriesName +
                              ":" +
                              val1.value.toFixed(2) +
                              "万元"
                            );
                          },
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
                          top: "1%",
                          textStyle: {
                            color: "#a4a8b4"
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
                              // textStyle: {
                              //     color: "#c8c9c9",
                              //     fontStyle: "normal",
                              //     fontFamily: "微软雅黑",
                              //     fontSize: 12,
                              // },
                              // rotate: 50,
                            },
                            axisTick: {
                              //坐标轴刻度相关设置。
                              show: true
                            },
                            axisLine: {
                              //坐标轴轴线相关设置
                              lineStyle: {
                                // color: "#c8c9c9",
                                opacity: 1
                              }
                            },
                            splitLine: {
                              //坐标轴在 grid 区域中的分隔线。
                              show: false
                            }
                          },
                          {
                            type: "value",
                            max:
                              [
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
                              ].length * 100,
                            show: false
                          }
                        ],
                        yAxis: [
                          {
                            type: "value",
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                            },
                            splitNumber: 5,
                            // axisLabel: {
                            //     textStyle: {
                            //         // color: "#c8c9c9",
                            //         fontStyle: "normal",
                            //         fontFamily: "微软雅黑",
                            //         fontSize: 12,
                            //     },
                            // },
                            axisLine: {
                              show: true
                            },
                            axisTick: {
                              show: true
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
                            data: [
                              6200,
                              8000,
                              8000,
                              6200,
                              6000,
                              5500,
                              4500,
                              3000,
                              1500,
                              1060,
                              5500,
                              4500,
                              3000,
                              1500,
                              1000
                            ],
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
                            data: [
                              2200,
                              3000,
                              5000,
                              3200,
                              4000,
                              3500,
                              3500,
                              1000,
                              500,
                              900,
                              2500,
                              3500,
                              2200,
                              1500,
                              500
                            ],
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
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款占比",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
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
                        title: [
                          {
                            text: "",
                            // top: 15,
                            // left: 20,
                            x: "36%",
                            y: "47%",
                            textStyle: {
                              fontSize: 16
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
                          orient: "vertical",
                          right: "10%",
                          top: "20%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["35%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(params) {
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
                                  return colorList[params.dataIndex];
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
                                length: 30,
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
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "rateofreturn_2019",
              year: 2019,
              collapseTitle: "2019回款率",
              EChartsBox: [
                {
                  title: "回款率",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      isTitle: true,
                      /*ECharts的属性*/
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
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
                                    color: "rgba(0, 0, 0,1)"
                                  },
                                  {
                                    offset: 1,
                                    color: "rgba(0, 255, 233,0)"
                                  }
                                ],
                                global: false
                              }
                            }
                          },
                          formatter: function(val) {
                            return (
                              val[0].name +
                              ":<br>" +
                              val[0].seriesName +
                              ":" +
                              val[0].value +
                              "%<br>" +
                              val[1].seriesName +
                              ":" +
                              val[1].value +
                              "%"
                            );
                          }
                        },
                        xAxis: {
                          splitLine: {
                            show: false
                          },
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
                        legend: {
                          data: ["机关回款率", "服务区回款率"]
                        },
                        yAxis: {
                          name: "%",
                          nameTextStyle: {
                            color: "#000"
                          },
                          splitLine: {
                            show: false
                          },
                          type: "value"
                        },
                        series: [
                          {
                            name: "服务区回款率",
                            data: [
                              80,
                              14,
                              39,
                              73,
                              19,
                              53,
                              91,
                              50,
                              45,
                              69,
                              13,
                              71
                            ],
                            type: "line"
                          },
                          {
                            name: "机关回款率",
                            data: [
                              90,
                              34,
                              59,
                              83,
                              49,
                              73,
                              93,
                              65,
                              55,
                              79,
                              33,
                              81
                            ],
                            type: "line"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款金额排行",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "33%",
                    height: "350px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      /*ECharts的属性*/
                      isbar: true,
                      style: {
                        width: "100%",
                        height: "300px"
                      },
                      option: {
                        tooltip: {
                          trigger: "axis",
                          axisPointer: {
                            type: "shadow"
                          },
                          formatter: "{b}<br>金额:{c}万元"
                        },
                        grid: {
                          left: "3%",
                          right: "10%",
                          bottom: "10%",
                          top: "10%",
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
                            "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                            "应收稻谷款(加工厂)",
                            "应收大米款（加工厂）",
                            "茂名市金瑞粮油贸易有限公司",
                            "湖北省羊肚菌农业科技有限公司"
                          ]
                        },
                        series: [
                          {
                            type: "bar",
                            label: {
                              show: true,
                              position: "insideLeft",
                              color: "#000",
                              formatter: "{b}"
                            },
                            data: (function() {
                              let data = [
                                29348333.33,
                                33032530.21,
                                35496337.3,
                                49985731.14,
                                87860562.51
                              ];
                              let datas = [];
                              data.forEach(element => {
                                datas.push((element / 10000).toFixed(2));
                              });
                              console.log(datas);
                              return datas;
                            })(),
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
                  title: "回款超期",
                  style: {
                    width: "33%",
                    height: "350px",
                    borderRadius: "10px",
                    background: "white",
                    marginBottom: "5px",
                    overflow: "hidden"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      height: "470px",
                      isPagination: false,
                      border: true,
                      style: {
                        width: "100%",
                        height: "330px",
                        background: "#fff"
                      },
                      columns: [
                        {
                          prop: "A",
                          label: "供应商",
                          width: "220"
                        },
                        {
                          prop: "B",
                          label: "还款时间"
                        },
                        {
                          prop: "C",
                          label: "超期时间"
                        },
                        {
                          prop: "D",
                          label: "金额(元)",
                          width: "120"
                        }
                      ],
                      tableData: [
                        {
                          A: "应收大米款（加工厂）",
                          B: "2020-9-4",
                          C: "21天",
                          D: "35496337.3"
                        },
                        {
                          A: "茂名市金瑞粮油贸易有限公司",
                          B: "2020-9-3",
                          C: "20天",
                          D: "49985731.14"
                        },
                        {
                          A: "湖北省羊肚菌农业科技有限公司",
                          B: "2020-9-5",
                          C: "15天",
                          D: "87860562.51"
                        },
                        // {
                        //   A: "湖北长江路桥股份有限公司枣潜高速公路第七标段项目经理部",
                        //   B: "2020-9-3",
                        //   C: "12天",
                        //   D: "29348333.33"
                        // },
                        {
                          A: "应收稻谷款(加工厂)",
                          B: "2020-9-2",
                          C: "10天",
                          D: "33032530.21"
                        }
                      ]
                    }
                  ]
                },

                {
                  title: "预计收款",
                  time: false,
                  timeValue: "",
                  style: {
                    width: "49.5%",
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
                      unit: "万元",
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          //提示框组件
                          trigger: "axis",
                          formatter: function(val) {
                            console.log(val);
                            let val0 = val[0];
                            let val1 = val[1];
                            return (
                              val0.name +
                              ":<br>" +
                              val0.seriesName +
                              ":" +
                              val0.value.toFixed(2) +
                              "万元<br>" +
                              val1.seriesName +
                              ":" +
                              val1.value.toFixed(2) +
                              "万元"
                            );
                          },
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
                          top: "1%",
                          textStyle: {
                            color: "#a4a8b4"
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
                              // textStyle: {
                              //     color: "#c8c9c9",
                              //     fontStyle: "normal",
                              //     fontFamily: "微软雅黑",
                              //     fontSize: 12,
                              // },
                              // rotate: 50,
                            },
                            axisTick: {
                              //坐标轴刻度相关设置。
                              show: true
                            },
                            axisLine: {
                              //坐标轴轴线相关设置
                              lineStyle: {
                                // color: "#c8c9c9",
                                opacity: 1
                              }
                            },
                            splitLine: {
                              //坐标轴在 grid 区域中的分隔线。
                              show: false
                            }
                          },
                          {
                            type: "value",
                            max:
                              [
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
                              ].length * 100,
                            show: false
                          }
                        ],
                        yAxis: [
                          {
                            type: "value",
                            name: "万元",
                            nameTextStyle: {
                              color: "#000"
                            },
                            splitNumber: 5,
                            // axisLabel: {
                            //     textStyle: {
                            //         // color: "#c8c9c9",
                            //         fontStyle: "normal",
                            //         fontFamily: "微软雅黑",
                            //         fontSize: 12,
                            //     },
                            // },
                            axisLine: {
                              show: true
                            },
                            axisTick: {
                              show: true
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
                            data: [
                              8200,
                              5000,
                              5000,
                              3200,
                              4000,
                              9500,
                              5500,
                              5000,
                              6500,
                              7060,
                              2500,
                              3500,
                              2000,
                              5500,
                              3000
                            ],
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
                            data: [
                              7200,
                              4000,
                              3000,
                              2200,
                              3000,
                              7500,
                              4500,
                              4000,
                              3500,
                              2060,
                              1500,
                              2500,
                              500,
                              2500,
                              1000
                            ],
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
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "回款占比",
                  time: false,
                  select: false,
                  style: {
                    width: "49.5%",
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
                        title: [
                          {
                            text: "",
                            // top: 15,
                            // left: 20,
                            x: "36%",
                            y: "47%",
                            textStyle: {
                              fontSize: 16
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
                          orient: "vertical",
                          right: "10%",
                          top: "20%"
                        },
                        tooltip: {
                          trigger: "item",
                          formatter: "{b}: {c}万元 ({d}%)"
                        },
                        series: [
                          {
                            type: "pie",
                            center: ["40%", "50%"],
                            radius: ["35%", "55%"],
                            clockwise: true,
                            avoidLabelOverlap: true,
                            hoverOffset: 15,
                            itemStyle: {
                              normal: {
                                color: function(params) {
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
                                  return colorList[params.dataIndex];
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
                                length: 30,
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
                      }
                    }
                  ]
                }
              ]
            },
            {
              id: "rateofreturn_gd",
              collapseTitle: "查看更多",
              EChartsBox: []
            }
          ]
        }
      ],
      ValueData: {
        inputValue: "",
        selectValue: "",
        timeValue: ["", ""]
      },
      totalCount: 0,
      arrData: [],
      serverName: ""
    };
  },
  methods: {
    // 传入过来的页数跟每页的数量
    ClickTotal(value) {
      this.TableDatas(value.pageNum, value.pageSize);
    },
    selectionChange(val) {
      this.$emit("clickTable", true);
      this.$router.push("/details/serviceDetails");
    },
    async searchQuery(id, collapse, year, name, inputValue) {
      this.ValueData = collapse;
      id.EChartsBox.forEach((element, index) => {
        element.EChartsItem.forEach((element, sindex) => {
          this.arrData.push({
            id: id.id + "-" + index + "-" + sindex,
            option: element.option
          });
        });
      });
      this.serverName = inputValue;
      await this.TableDatas(1, 5);
      // await this.obtainData(name, year);
    },
    async obtainData(name, year) {
      let data = [];
      let id = "";
      this.ValueData.timeValue === null &&
        (this.ValueData.timeValue = ["", ""]);
      const res = await this.$axios.get("/api/sundry/finance_type_list");
      for (let i = 0; i < res.data.data.length; i++) {
        if (res.data.data[i].financeName == name) {
          id = res.data.data[i].financeTypeId;
          break;
        }
      }
      await this.$axios
        .get("/api/jtService/list_service_finance", {
          params: {
            financeTypeId: id,
            nianfen: year,
            endTime: this.ValueData.timeValue[1],
            stateTime: this.ValueData.timeValue[0]
          }
        })
        .then(v => {
          console.log(v);
          data = v.data.data;
          let mm = [];
          this.collapseData.forEach((item, index) => {
            if (item.name == name) {
              item.collapseItem.forEach((cItem, cIndex) => {
                if (cItem.year == year) {
                  cItem.EChartsBox.forEach((sItem, sIndex) => {
                    if (sIndex == 0) {
                      sItem.EChartsItem[0].option.series[0].data = [];
                      sItem.EChartsItem[0].option.xAxis[0].data = [];
                      data.xYListFrom1.forEach((i, ix) => {
                        sItem.EChartsItem[0].option.series[0].data.push(
                          i.yAxis
                        );
                        mm.push(i.yAxis);
                        sItem.EChartsItem[0].option.xAxis[0].data.push(
                          i.xBxis.split("-")[1]
                        );
                      });
                      // if (mm.length !== 0) {
                      //     let arr = this.YoYIncrease(mm);
                      //     // sItem.EChartsItem[0].option.yAxis[1].min = parseInt(Math.min(...arr) - 5);
                      //     // sItem.EChartsItem[0].option.yAxis[1].max = parseInt(Math.max(...arr) + 5);
                      //     sItem.EChartsItem[0].option.series[1].data.push(...arr);
                      // }
                    }
                    if (sIndex == 1) {
                      sItem.EChartsItem[0].option.series[0].data = [];
                      data.xYListFrom2.forEach((i, ix) => {
                        sItem.EChartsItem[0].option.series[0].data.push({
                          name: i.xBxis,
                          value: i.yAxis
                        });
                      });
                      sItem.EChartsItem[1].option.series[0].data = [];
                      data.xYListFrom3.forEach((i, ix) => {
                        sItem.EChartsItem[1].option.series[0].data.push({
                          name: i.xBxis,
                          value: i.yAxis
                        });
                      });
                    }
                  });
                }
              });
            }
          });
          this.$nextTick(_ => {
            this.$refs["collapse"].searchClick(this.arrData);
          });
        });
    },
    async TableDatas(pageNum, pageSize) {
      this.$axios
        .get("/api/jtService/serve_list", {
          params: {
            companyId: "c9050eb22c7f14b33acdab4077879dcc3",
            pageNum: pageNum,
            pageSize: pageSize,
            serverName: this.serverName
          }
        })
        .then(res => {
          this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData = [];
          res.data.list.forEach(element => {
            let elementData = {
              serviceName: !element.serviceName ? "/" : element.serviceName,
              B: !element.gaosuName ? "/" : element.gaosuName,
              G: !element.lirun ? "/" : element.lirun,
              I: !element.mianji ? "/" : element.mianji,
              H: !element.pingxiao ? "/" : element.pingxiao,
              maxcart: !element.carVo[0] ? "/" : element.carVo[0].count,
              mincart: !element.carVo[1] ? "/" : element.carVo[1].count,
              refuel: !element.jiayou ? "/" : element.jiayou,
              snack: !element.xiaochi ? "/" : element.xiaochi,
              convenience: "/",
              catering: !element.canyin ? "/" : element.canyin,
              shouyi: element.shouyi
            };
            this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData.push(
              elementData
            );
          });
          this.totalCount = res.data.total;
        });
    },
    async obtainAxios(name, year, years) {
      let data = [];
      let id = "";
      await this.$axios
        .get("/api/sundry/fuwuqucaiwu", {
          params: { nianfen: year, type: years, plateName: "服务区板块" }
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
                      sItem.EChartsItem[0].option.xAxis[0].data = [];
                      let yAxis = [];
                      let xBxis = [];
                      data.forEach(element => {
                        xBxis.push(element.xBxis.split("-")[1]);
                        yAxis.push(element.yAxis * 10000);
                      });
                      for (let index = data.length + 1; index <= 12; index++) {
                        xBxis.push(index);
                        if (index == 12) {
                          yAxis.push(0);
                        } else {
                          yAxis.push(Math.ceil(Math.random() * 10000000));
                        }
                      }
                      sItem.EChartsItem[0].option.series[0].data = yAxis;
                      sItem.EChartsItem[0].option.xAxis[0].data = xBxis;
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
    },
    async TableDatas(pageNum, pageSize) {
      console.log(4564654);
      this.$axios
        .get("/api/jtService/serve_list", {
          params: {
            companyId: "cc809ba275f17437088741db4ef76d499",
            pageNum: pageNum,
            pageSize: pageSize,
            serverName: this.serverName
          }
        })
        .then(res => {
          this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData = [];
          res.data.list.forEach(element => {
            let elementData = {
              serviceName: !element.serviceName ? "/" : element.serviceName,
              B: !element.gaosuName ? "/" : element.gaosuName,
              G: !element.lirun ? "/" : element.lirun,
              I: !element.mianji ? "/" : element.mianji,
              H: !element.pingxiao ? "/" : element.pingxiao,
              maxcart: !element.carVo[0] ? "/" : element.carVo[0].count,
              mincart: !element.carVo[1] ? "/" : element.carVo[1].count,
              refuel: !element.jiayou ? "/" : element.jiayou,
              snack: !element.xiaochi ? "/" : element.xiaochi,
              convenience: "/",
              catering: !element.canyin ? "/" : element.canyin,
              shouyi: element.shouyi
            };
            this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData.push(
              elementData
            );
          });
          this.totalCount = res.data.total;
        });
    }
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
    this.TableDatas(1, 5);
    this.obtainData("营收", "2019");
    await this.obtainAxios("营收", "2020", "ys");
    // await this.obtainData("利润", "2019");
    // await this.obtainData("利润", "2020");
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
