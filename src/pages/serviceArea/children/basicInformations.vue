<template>
  <div class="titleBox">
    <div v-if="true" style="padding:10px">
      <el-button>搜索</el-button>
    </div>
    <div class="nav">
      <!-- <div>
                <el-select v-model="company" placeholder="请选择分公司">
                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <el-select v-model="district" placeholder="请选择片区">
                    <el-option v-for="item in optionss" :key="item.value" :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>
            </div> -->

      <div>
        <el-button
          @click="indexHover = item"
          :class="{ hover: indexHover === item }"
          v-for="item of 6"
          :key="item"
        >
          {{ 2014 + item }}
        </el-button>
      </div>
    </div>
    <my-collapse-base
      ref="collapse"
      @ClickTotal="ClickTotal"
      :collapseData="collapseData"
      @searchQuery="searchQuery"
      @selectionChange="selectionChange"
      :navBarShow="true"
      :totalCount="totalCount"
    ></my-collapse-base>
  </div>
</template>
<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";
import common from "../../../components/js/common";

export default {
  name: "revenue",
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
      indexHover: 5,
      collapseData: [
        {
          id: "revenueTable",
          name: "基础信息",
          allShow: true,
          icon: require("../../../assets/serviceArea/jcxx/jichuxinxi.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/jichuxinxi1.png"),
          collapseItem: [
            {
              id: "ab_2019",
              collapseTitle: "基础信息",
              EChartsBox: [
                {
                  title: "服务区列表",
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
                }
              ]
            }
          ]
        },
        {
          id: "revenue",
          name: "运营趋势",
          icon: require("../../../assets/serviceArea/jcxx/yunyingqushi.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/yunyingqushi1.png"),
          collapseItem: [
            {
              id: "ab_20195",
              collapseTitle: "运营趋势",
              EChartsBox: [
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
                }
              ]
            }
          ]
        },
        {
          id: "revenuep",
          name: "占地面积",
          icon: require("../../../assets/serviceArea/jcxx/zhandimianji.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/zhandimianji1.png"),
          collapseItem: [
            {
              id: "ab_2019esp",
              collapseTitle: "占地面积",
              EChartsBox: [
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
                }
              ]
            }
          ]
        },
        {
          id: "revenuesess",
          name: "经营面积",
          icon: require("../../../assets/serviceArea/jcxx/jingyingmianiji.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/jingyingmianiji1.png"),
          collapseItem: [
            {
              id: "ab_201ss",
              collapseTitle: "经营面积",
              EChartsBox: [
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
                }
              ]
            }
          ]
        },
        {
          id: "revenueess",
          name: "车流量",
          icon: require("../../../assets/serviceArea/jcxx/cheliuliang.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/cheliuliang1.png"),
          collapseItem: [
            {
              id: "ab_20s",
              collapseTitle: "车流量",
              EChartsBox: [
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
                }
              ]
            }
          ]
        },

        {
          id: "revenueTablesses",
          name: "订单",
          icon: require("../../../assets/serviceArea/jcxx/dingdan.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/dingdan1.png"),
          collapseItem: [
            {
              id: "ab_2019ss",
              collapseTitle: "订单数量",
              EChartsBox: [
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
                }
              ]
            }
          ]
        },

        {
          id: "revenueTablesesa",
          name: "客单价",
          icon: require("../../../assets/serviceArea/jcxx/kedanjia.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/kedanjia1.png"),
          collapseItem: [
            {
              id: "ab_2019sa",
              collapseTitle: "客单价",
              EChartsBox: [
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
                }
              ]
            }
          ]
        },

        {
          id: "revenueTablesesq",
          name: "转换率",
          icon: require("../../../assets/serviceArea/jcxx/zhuanhuanlv.png"),
          iconActive: require("../../../assets/serviceArea/jcxx/zhuanhuanlv1.png"),
          collapseItem: [
            {
              id: "ab_2019sq",
              collapseTitle: "转换率",
              EChartsBox: [
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
        }
        // {
        //     id: "revenue",
        //     name: "2019年",
        //     icon: require("../../../assets/business/icon_1-1.png"),
        //     iconActive: require("../../../assets/business/icon_1-2.png"),
        //     collapseItem: [
        //         {
        //             id: "revenue_2020",
        //             year: 2019,
        //             collapseTitle: "2019年基础信息",
        //             EChartsBox: [
        //                 {
        //                     title: "服务区列表",
        //                     time: true,
        //                     input: true,
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "100%",
        //                         height: "550px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",
        //                         marginBottom: '10px'
        //                     },
        //                     EChartsItem: [
        //                         {
        //                             type: "table",
        //                             height: "550px",
        //                             style: {
        //                                 width: "100%",
        //                                 background: "#FFF",
        //                             },
        //                             isPagination: true,
        //                             columns: [
        //                                 {prop: "serviceName", label: "服务区名称"},
        //                                 {prop: "B", label: "高速名称"},
        //                                 {
        //                                     prop: "C",
        //                                     label: "车流量(辆)",
        //                                     children: [
        //                                         {prop: "maxcart", label: "大车"},
        //                                         {prop: "mincart", label: "小车"},
        //                                     ],
        //                                 },
        //                                 {prop: "shouyi", label: "收益(元)"},
        //                                 {prop: "G", label: "利润(元)"},
        //                                 {prop: "H", label: "坪效(元)"},
        //                                 {prop: "I", label: "面积(m)"},

        //                                 {
        //                                     prop: "J",
        //                                     label: "业态订单数",
        //                                     children: [
        //                                         {prop: "refuel", label: "加油"},
        //                                         {prop: "snack", label: "小吃"},
        //                                         {prop: "convenience", label: "便利店"},
        //                                         {prop: "catering", label: "餐饮"},
        //                                     ],
        //                                 },
        //                             ],
        //                             tableData: [],
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "接管运营总量",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "59.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",
        //                         marginBottom: '10px'

        //                     },
        //                     EChartsItem: [
        //                         {
        //                             serviceName: '',
        //                             unit: '个',
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 xAxis: {
        //                                     type: 'category',
        //                                     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 grid: {
        //                                     top: "70",
        //                                     right: "60",
        //                                     left: "60",
        //                                     bottom: "30",
        //                                 },
        //                                 tooltip: {
        //                                     trigger: "axis",
        //                                     formatter: "{b} : {c}",
        //                                     axisPointer: {
        //                                         type: "shadow"
        //                                     },
        //                                 },
        //                                 yAxis: {
        //                                     type: 'value',
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 series: [{
        //                                     data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
        //                                     type: 'line',
        //                                     lineStyle: {
        //                                         color: "#fea528",
        //                                         width: 2,
        //                                         shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
        //                                         shadowBlur: 10,
        //                                         shadowOffsetY: 10,
        //                                     },
        //                                 }]
        //                             }
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "服务区等级分类占比",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "39.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",
        //                         marginBottom: '10px'
        //                     },
        //                     EChartsItem: [
        //                         {
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 title:{
        //                                     text:'',
        //                                     left:'43%',
        //                                     top:'48%'
        //                                 },
        //                                 tooltip: {
        //                                     trigger: 'item',
        //                                     formatter: '{a} <br/>{b}: {c} ({d}%)'
        //                                 },
        //                                 legend: {
        //                                     orient: 'vertical',
        //                                     right: 10,
        //                                     top: 'center',
        //                                     data: ['Ⅰ类', 'Ⅱ类', 'Ⅲ类', 'Ⅳ类', 'Ⅴ类']
        //                                 },
        //                                 series: [
        //                                     {
        //                                         name: '访问来源',
        //                                         type: 'pie',
        //                                         radius: ['50%', '70%'],
        //                                         avoidLabelOverlap: false,
        //                                         label: {
        //                                             show: false,
        //                                             position: 'center'
        //                                         },
        //                                         emphasis: {
        //                                             label: {
        //                                                 show: true,
        //                                                 fontSize: '30',
        //                                                 fontWeight: 'bold'
        //                                             }
        //                                         },
        //                                         labelLine: {
        //                                             show: false
        //                                         },
        //                                         itemStyle: {
        //                                             normal: {
        //                                                 color: function (v) {
        //                                                     let colorList = [
        //                                                         "#76c15c",
        //                                                         "#15b3e2",
        //                                                         "#2e65fd",
        //                                                         "#1fcaa8",
        //                                                         "#ee6565",
        //                                                         "#fec02a",
        //                                                         "#fe3922",
        //                                                         "#52fe36",
        //                                                         "#fe3afc",
        //                                                     ];
        //                                                     return colorList[v.dataIndex];
        //                                                 },
        //                                             },
        //                                         },
        //                                         data:[
        //                                             {value: 335, name: 'Ⅰ类'},
        //                                             {value: 310, name: 'Ⅱ类'},
        //                                             {value: 234, name: 'Ⅲ类'},
        //                                             {value: 135, name: 'Ⅳ类'},
        //                                             {value: 1548, name: 'Ⅴ类'}
        //                                         ]
        //                                     }
        //                                 ]
        //                             }
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "占地面积增长率",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "49.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",
        //                         marginBottom: '10px'
        //                     },
        //                     EChartsItem: [
        //                         {
        //                             serviceName: '大悟服务区',
        //                             unit: '㎡',
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 xAxis: {
        //                                     type: 'category',
        //                                     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 grid: {
        //                                     top: "70",
        //                                     right: "60",
        //                                     left: "60",
        //                                     bottom: "30",
        //                                 },
        //                                 tooltip: {
        //                                     trigger: "axis",
        //                                     formatter: "{b} : {c}",
        //                                     axisPointer: {
        //                                         type: "shadow"
        //                                     },
        //                                 },
        //                                 yAxis: {
        //                                     type: 'value',
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 series: [{
        //                                     data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
        //                                     type: 'line',
        //                                     lineStyle: {
        //                                         color: "#fea528",
        //                                         width: 2,
        //                                         shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
        //                                         shadowBlur: 10,
        //                                         shadowOffsetY: 10,
        //                                     },
        //                                 }]
        //                             }
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "经营面积增长率",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "49.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",
        //                         marginBottom: '10px'
        //                     },
        //                     EChartsItem: [
        //                         {
        //                             serviceName: '大悟服务区',
        //                             unit: '㎡',
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 xAxis: {
        //                                     type: 'category',
        //                                     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 grid: {
        //                                     top: "70",
        //                                     right: "60",
        //                                     left: "60",
        //                                     bottom: "30",
        //                                 },
        //                                 tooltip: {
        //                                     trigger: "axis",
        //                                     formatter: "{b} : {c}",
        //                                     axisPointer: {
        //                                         type: "shadow"
        //                                     },
        //                                 },
        //                                 yAxis: {
        //                                     type: 'value',
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 series: [{
        //                                     data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
        //                                     type: 'line',
        //                                     lineStyle: {
        //                                         color: "#fea528",
        //                                         width: 2,
        //                                         shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
        //                                         shadowBlur: 10,
        //                                         shadowOffsetY: 10,
        //                                     },
        //                                 }]
        //                             }
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "车流量",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "49.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",
        //                         marginBottom: '10px'
        //                     },
        //                     EChartsItem: [
        //                         {
        //                             serviceName: '大悟服务区',
        //                             unit: '辆',
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 xAxis: {
        //                                     type: 'category',
        //                                     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 grid: {
        //                                     top: "70",
        //                                     right: "60",
        //                                     left: "60",
        //                                     bottom: "30",
        //                                 },
        //                                 tooltip: {
        //                                     trigger: "axis",
        //                                     formatter: "{b} : {c}",
        //                                     axisPointer: {
        //                                         type: "shadow"
        //                                     },
        //                                 },
        //                                 yAxis: {
        //                                     type: 'value',
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 series: [{
        //                                     data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
        //                                     type: 'line',
        //                                     lineStyle: {
        //                                         color: "#fea528",
        //                                         width: 2,
        //                                         shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
        //                                         shadowBlur: 10,
        //                                         shadowOffsetY: 10,
        //                                     },
        //                                 }]
        //                             }
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "订单增长率",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "49.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",
        //                         marginBottom: '10px'
        //                     },
        //                     EChartsItem: [
        //                         {
        //                             serviceName: '大悟服务区',
        //                             unit: '单',
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 xAxis: {
        //                                     type: 'category',
        //                                     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 grid: {
        //                                     top: "70",
        //                                     right: "60",
        //                                     left: "60",
        //                                     bottom: "30",
        //                                 },
        //                                 tooltip: {
        //                                     trigger: "axis",
        //                                     formatter: "{b} : {c}",
        //                                     axisPointer: {
        //                                         type: "shadow"
        //                                     },
        //                                 },
        //                                 yAxis: {
        //                                     type: 'value',
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 series: [{
        //                                     data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
        //                                     type: 'line',
        //                                     lineStyle: {
        //                                         color: "#fea528",
        //                                         width: 2,
        //                                         shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
        //                                         shadowBlur: 10,
        //                                         shadowOffsetY: 10,
        //                                     },
        //                                 }]
        //                             }
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "客单价",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "49.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",

        //                     },
        //                     EChartsItem: [
        //                         {
        //                             serviceName: '大悟服务区',
        //                             unit: '元',
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 xAxis: {
        //                                     type: 'category',
        //                                     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 grid: {
        //                                     top: "70",
        //                                     right: "60",
        //                                     left: "60",
        //                                     bottom: "30",
        //                                 },
        //                                 tooltip: {
        //                                     trigger: "axis",
        //                                     formatter: "{b} : {c}",
        //                                     axisPointer: {
        //                                         type: "shadow"
        //                                     },
        //                                 },
        //                                 yAxis: {
        //                                     type: 'value',
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 series: [{
        //                                     data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
        //                                     type: 'line',
        //                                     lineStyle: {
        //                                         color: "#fea528",
        //                                         width: 2,
        //                                         shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
        //                                         shadowBlur: 10,
        //                                         shadowOffsetY: 10,
        //                                     },
        //                                 }]
        //                             }
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     title: "转换率",
        //                     style: {
        //                         cursor: 'pointer',
        //                         width: "49.5%",
        //                         height: "350px",
        //                         borderRadius: "10px",
        //                         background: "white",
        //                         overflow: "hidden",

        //                     },
        //                     EChartsItem: [
        //                         {
        //                             serviceName: '大悟服务区',
        //                             unit: '%',
        //                             /*ECharts的属性*/
        //                             style: {
        //                                 width: "100%",
        //                                 height: "300px",
        //                             },
        //                             option: {
        //                                 xAxis: {
        //                                     type: 'category',
        //                                     data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 grid: {
        //                                     top: "70",
        //                                     right: "60",
        //                                     left: "60",
        //                                     bottom: "30",
        //                                 },
        //                                 tooltip: {
        //                                     trigger: "axis",
        //                                     formatter: "{b} : {c}",
        //                                     axisPointer: {
        //                                         type: "shadow"
        //                                     },
        //                                 },
        //                                 yAxis: {
        //                                     type: 'value',
        //                                     splitLine: {
        //                                         show: false
        //                                     },
        //                                     axisTick: {
        //                                         show: false,
        //                                     },
        //                                 },
        //                                 series: [{
        //                                     data: [876, 765, 564, 765, 543, 123, 432, 321, 321, 934, 669, 899],
        //                                     type: 'line',
        //                                     lineStyle: {
        //                                         color: "#fea528",
        //                                         width: 2,
        //                                         shadowColor: "rgba(255,155,53,0.68)", //设置折线阴影
        //                                         shadowBlur: 10,
        //                                         shadowOffsetY: 10,
        //                                     },
        //                                 }]
        //                             }
        //                         },
        //                     ],
        //                 },
        //             ],
        //         },
        //         {
        //             id: "revenue_gd",
        //             collapseTitle: "查看更多",
        //             EChartsBox: []
        //         },
        //     ],
        // },
        /* {
                         id: "profit",
                         name: "利润",
                         icon: require("../../../assets/business/icon_1-1.png"),
                         iconActive: require("../../../assets/business/icon_1-2.png"),
                         collapseItem: [
                             {
                                 id: "profit_2020",
                                 year: 2020,
                                 collapseTitle: "2020年利润",
                                 allQuery: true,
                                 allQueryData: {
                                     input: false,
                                     select: false,
                                     time: true
                                 },
                                 EChartsBox: [
                                     {
                                         title: "2020年利润",
                                         time: false,
                                         timeValue: "",
                                         style: {
                                             width: "35%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     tooltip: {
                                                         trigger: "axis",
                                                         formatter: function (val) {
                                                             return (
                                                                 val[0].name + '月' +
                                                                 ":" + "<br />" +
                                                                 val[0].value / 10000 +
                                                                 "万元"
                                                             );
                                                         },
                                                     },
                                                     grid: {
                                                         top: "50",
                                                         right: "60",
                                                         left: "60",
                                                         bottom: "60", //图表尺寸大小
                                                     },
                                                     dataZoom: [{
                                                         type: 'inside'
                                                     }, {
                                                         type: 'slider'
                                                     }],
                                                     xAxis: [
                                                         {
                                                             type: "category",
                                                             color: "#59588D",
                                                             data: [],
                                                             axisLabel: {
                                                                 margin: 10,
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                         },
                                                     ],
                                                     yAxis: [
                                                         {
                                                             axisLabel: {
                                                                 formatter: function (val) {
                                                                     return val / 10000
                                                                 },
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                             splitLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(131,101,101,0.2)",
                                                                     type: "dashed",
                                                                 },
                                                             },
                                                         },
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
                                                                     color:
                                                                         "#38A0FF",
                                                                     barBorderRadius: [
                                                                         30,
                                                                         30,
                                                                         30,
                                                                         30,
                                                                     ],
                                                                 },
                                                             },
                                                         },
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
                                                     ],
                                                 },
                                             }
                                         ],
                                     },
                                     {
                                         title: "2020年利润业态占比/片区占比",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "64.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "50%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: { text: "", },
                                                     grid: {
                                                         top: "20%",
                                                         right: "40",
                                                         left: "0",
                                                         bottom: "40", //图表尺寸大小
                                                     },
                                                     legend: {
                                                         orient: "vertical",
                                                         top: 'center',
                                                         right: 10,
                                                     },
                                                     tooltip: { trigger: "item", },
                                                     series: [{
                                                         type: "pie",
                                                         center: ["40%", "50%"],
                                                         radius: ["25%", "40%"],
                                                         clockwise: true,
                                                         avoidLabelOverlap: true,
                                                         hoverOffset: 15,
                                                         itemStyle: {
                                                             normal: {
                                                                 color: function (v) {
                                                                     let colorList = [
                                                                         "#76c15c",
                                                                         "#15b3e2",
                                                                         "#2e65fd",
                                                                         "#1fcaa8",
                                                                         "#ee6565",
                                                                         "#fec02a",
                                                                         "#fe3922",
                                                                         "#52fe36",
                                                                         "#fe3afc",
                                                                     ];
                                                                     return colorList[v.dataIndex];
                                                                 },
                                                             },
                                                         },
                                                         label: {
                                                             show: true,
                                                             position: "outer",
                                                             width: 0,
                                                             height: 0,
                                                             lineHeight: 0,
                                                             backgroundColor: "auto",
                                                             padding: [2, -2, 2, -2,],
                                                             borderRadius: 2,
                                                             distanceToLabelLine: 0,
                                                             normal: {
                                                                 formatter(v) {
                                                                     let text = v.name + "\n" + v.percent + "%";
                                                                     return text;
                                                                 },
                                                                 textStyle: {
                                                                     fontSize: 14,
                                                                 },
                                                             },
                                                         },
                                                         labelLine: {
                                                             normal: {

                                                                 length: 30,
                                                                 length2: 25,
                                                                 lineStyle: {
                                                                     width: 1,
                                                                 },
                                                             },
                                                         },
                                                         data: [],
                                                     }],
                                                 },
                                             },
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "50%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: { text: "" },
                                                     tooltip: { trigger: "item" },
                                                     legend: {
                                                         orient: "vertical",
                                                         top: 'center',
                                                         right: 10,
                                                     },
                                                     series: [{
                                                         type: "pie",
                                                         minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                                                         avoidLabelOverlap: true, //是否启用防止标签重叠策略
                                                         center: ["45%", "50%"],
                                                         radius: ["30%", "45%"],
                                                         clockwise: true,
                                                         hoverOffset: 20,
                                                         itemStyle: {
                                                             normal: {
                                                                 color: function (v) {
                                                                     let colorList = [
                                                                         "#76c15c",
                                                                         "#15b3e2",
                                                                         "#2e65fd",
                                                                         "#1fcaa8",
                                                                         "#ee6565",
                                                                         "#fec02a",
                                                                         "#fe3922",
                                                                         "#52fe36",
                                                                         "#fe3afc",
                                                                     ];
                                                                     return colorList[v.dataIndex];
                                                                 },
                                                             },
                                                         },
                                                         label: {
                                                             show: true,
                                                             position: "outer",
                                                             width: 0,
                                                             height: 0,
                                                             lineHeight: 0,
                                                             backgroundColor: "auto",
                                                             padding: [2, -2, 2, -2,],
                                                             borderRadius: 2,
                                                             distanceToLabelLine: 0,
                                                             normal: {
                                                                 formatter(v) {
                                                                     let text = v.name + "\n" + v.percent + "%";
                                                                     return text;
                                                                 },
                                                                 textStyle: {
                                                                     fontSize: 14,
                                                                 },
                                                             },
                                                         },
                                                         labelLine: {
                                                             normal: {
                                                                 length: 30,
                                                                 length2: 10,
                                                                 lineStyle: {
                                                                     width: 1,
                                                                 },
                                                             },
                                                         },
                                                         data: [],
                                                     }],
                                                 },
                                             }],
                                     },


                                 ]
                             },
                             {
                                 id: "profit_2019",
                                 year: 2019,
                                 collapseTitle: "2019年利润",
                                 allQuery: true,
                                 allQueryData: {
                                     input: false,
                                     select: false,
                                     time: true
                                 },
                                 EChartsBox: [
                                     {
                                         title: "2019年利润",
                                         time: false,
                                         timeValue: "",
                                         style: {
                                             width: "35%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     tooltip: {
                                                         trigger: "axis",
                                                         formatter: function (val) {
                                                             return (
                                                                 val[0].name + '月' +
                                                                 ":" + "<br />" +
                                                                 val[0].value / 10000 +
                                                                 "万元"
                                                             );
                                                         },
                                                     },
                                                     grid: {
                                                         top: "50",
                                                         right: "60",
                                                         left: "60",
                                                         bottom: "60", //图表尺寸大小
                                                     },
                                                     dataZoom: [{
                                                         type: 'inside'
                                                     }, {
                                                         type: 'slider'
                                                     }],
                                                     xAxis: [
                                                         {
                                                             type: "category",
                                                             color: "#59588D",
                                                             data: [],
                                                             axisLabel: {
                                                                 margin: 10,
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                         },
                                                     ],
                                                     yAxis: [
                                                         {
                                                             axisLabel: {
                                                                 formatter: function (val) {
                                                                     return val / 10000
                                                                 },
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                             splitLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(131,101,101,0.2)",
                                                                     type: "dashed",
                                                                 },
                                                             },
                                                         },
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
                                                                     color:
                                                                         "#38A0FF",
                                                                     barBorderRadius: [
                                                                         30,
                                                                         30,
                                                                         30,
                                                                         30,
                                                                     ],
                                                                 },
                                                             },
                                                         },
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
                                                     ],
                                                 },
                                             }
                                         ],
                                     },
                                     {
                                         title: "2019年利润业态占比/片区占比",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "64.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "50%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: { text: "", },
                                                     grid: {
                                                         top: "20%",
                                                         right: "40",
                                                         left: "0",
                                                         bottom: "40", //图表尺寸大小
                                                     },
                                                     legend: {
                                                         orient: "vertical",
                                                         top: 'center',
                                                         right: 10,
                                                     },
                                                     tooltip: { trigger: "item", },
                                                     series: [{
                                                         type: "pie",
                                                         center: ["40%", "50%"],
                                                         radius: ["25%", "40%"],
                                                         clockwise: true,
                                                         avoidLabelOverlap: true,
                                                         hoverOffset: 15,
                                                         itemStyle: {
                                                             normal: {
                                                                 color: function (v) {
                                                                     let colorList = [
                                                                         "#76c15c",
                                                                         "#15b3e2",
                                                                         "#2e65fd",
                                                                         "#1fcaa8",
                                                                         "#ee6565",
                                                                         "#fec02a",
                                                                         "#fe3922",
                                                                         "#52fe36",
                                                                         "#fe3afc",
                                                                     ];
                                                                     return colorList[v.dataIndex];
                                                                 },
                                                             },
                                                         },
                                                         label: {
                                                             show: true,
                                                             position: "outer",
                                                             width: 0,
                                                             height: 0,
                                                             lineHeight: 0,
                                                             backgroundColor: "auto",
                                                             padding: [2, -2, 2, -2,],
                                                             borderRadius: 2,
                                                             distanceToLabelLine: 0,
                                                             normal: {
                                                                 formatter(v) {
                                                                     let text = v.name + "\n" + v.percent + "%";
                                                                     return text;
                                                                 },
                                                                 textStyle: {
                                                                     fontSize: 14,
                                                                 },
                                                             },
                                                         },
                                                         labelLine: {
                                                             normal: {

                                                                 length: 30,
                                                                 length2: 25,
                                                                 lineStyle: {
                                                                     width: 1,
                                                                 },
                                                             },
                                                         },
                                                         data: [],
                                                     }],
                                                 },
                                             },
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "50%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: { text: "" },
                                                     tooltip: { trigger: "item" },
                                                     legend: {
                                                         orient: "vertical",
                                                         top: 'center',
                                                         right: 10,
                                                     },
                                                     series: [{
                                                         type: "pie",
                                                         minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                                                         avoidLabelOverlap: true, //是否启用防止标签重叠策略
                                                         center: ["45%", "50%"],
                                                         radius: ["30%", "45%"],
                                                         clockwise: true,
                                                         hoverOffset: 20,
                                                         itemStyle: {
                                                             normal: {
                                                                 color: function (v) {
                                                                     let colorList = [
                                                                         "#76c15c",
                                                                         "#15b3e2",
                                                                         "#2e65fd",
                                                                         "#1fcaa8",
                                                                         "#ee6565",
                                                                         "#fec02a",
                                                                         "#fe3922",
                                                                         "#52fe36",
                                                                         "#fe3afc",
                                                                     ];
                                                                     return colorList[v.dataIndex];
                                                                 },
                                                             },
                                                         },
                                                         label: {
                                                             show: true,
                                                             position: "outer",
                                                             width: 0,
                                                             height: 0,
                                                             lineHeight: 0,
                                                             backgroundColor: "auto",
                                                             padding: [2, -2, 2, -2,],
                                                             borderRadius: 2,
                                                             distanceToLabelLine: 0,
                                                             normal: {
                                                                 formatter(v) {
                                                                     let text = v.name + "\n" + v.percent + "%";
                                                                     return text;
                                                                 },
                                                                 textStyle: {
                                                                     fontSize: 14,
                                                                 },
                                                             },
                                                         },
                                                         labelLine: {
                                                             normal: {
                                                                 length: 30,
                                                                 length2: 10,
                                                                 lineStyle: {
                                                                     width: 1,
                                                                 },
                                                             },
                                                         },
                                                         data: [],
                                                     }],
                                                 },
                                             }],
                                     },


                                 ]
                             },
                             {
                                 id: "revenue_gd",
                                 collapseTitle: "查看更多",
                                 EChartsBox: []
                             },
                         ],
                     },
                     {
                         id: "cost",
                         name: "成本",
                         icon: require("../../../assets/business/icon_3-1.png"),
                         iconActive: require("../../../assets/business/icon_3-2.png"),
                         collapseItem: [
                             {
                                 id: "cost_2020",
                                 year: 2020,
                                 collapseTitle: "2020年成本",
                                 allQuery: true,
                                 allQueryData: {
                                     input: false,
                                     select: false,
                                     time: true
                                 },
                                 EChartsBox: [
                                     {
                                         title: "2020年实际成本",
                                         time: false,
                                         timeValue: "",
                                         style: {
                                             width: "40%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     tooltip: {
                                                         trigger: "axis",
                                                         formatter: function (val) {
                                                             return (
                                                                 val[0].name + '月' +
                                                                 ":" + '<br>' +
                                                                 val[0].value / 10000 +
                                                                 "元"
                                                             );
                                                         },
                                                     },
                                                     grid: {
                                                         top: "50",
                                                         right: "40",
                                                         left: "60",
                                                         bottom: "60", //图表尺寸大小
                                                     },
                                                     xAxis: [
                                                         {
                                                             type: "category",
                                                             color: "#59588D",
                                                             data: [],
                                                             axisLabel: {
                                                                 margin: 10,
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                         },
                                                     ],
                                                     yAxis: [
                                                         {
                                                             axisLabel: {
                                                                 formatter: function (value) {
                                                                     return value / 10000
                                                                 },
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                             splitLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(131,101,101,0.2)",
                                                                     type: "dashed",
                                                                 },
                                                             },
                                                         },
                                                     ],
                                                     series: [
                                                         {
                                                             type: "bar",
                                                             data: [],
                                                             barWidth: "16px",
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "#38A0FF",
                                                                     barBorderRadius: [
                                                                         30,
                                                                         30,
                                                                         30,
                                                                         30,
                                                                     ],
                                                                 },
                                                             },
                                                         },
                                                         {
                                                             data: [],
                                                             type: "line",
                                                             name: "折线图",
                                                             // symbol: 'none',
                                                             lineStyle: {
                                                                 color: "#fea2a2",
                                                                 width: 2,
                                                                 shadowColor:
                                                                     "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                                                 shadowBlur: 10,
                                                                 shadowOffsetY: 10,
                                                             },
                                                             areaStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "rgba(0,0,0,0)",
                                                                 },
                                                             },
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2020年业态占比",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "29.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     grid: {
                                                         top: "20%",
                                                         right: "40",
                                                         left: "60",
                                                         bottom: "40",
                                                     },
                                                     legend: {
                                                         orient: "horizontal",
                                                         bottom: 10,
                                                     },
                                                     tooltip: {
                                                         trigger: "item",
                                                     },
                                                     series: [
                                                         {
                                                             type: "pie",
                                                             center: ["50%", "50%"],
                                                             radius: ["25%", "40%"],
                                                             clockwise: true,
                                                             avoidLabelOverlap: true,
                                                             hoverOffset: 15,
                                                             itemStyle: {
                                                                 normal: {
                                                                     color: function (v) {
                                                                         let colorList = [
                                                                             "#76c15c",
                                                                             "#15b3e2",
                                                                             "#2e65fd",
                                                                             "#1fcaa8",
                                                                             "#ee6565",
                                                                             "#fec02a",
                                                                             "#fe3922",
                                                                             "#52fe36",
                                                                             "#fe3afc",
                                                                         ];
                                                                         return colorList[v.dataIndex];
                                                                     },
                                                                 },
                                                             },
                                                             label: {
                                                                 show: true,
                                                                 position: "outer",
                                                                 width: 0,
                                                                 height: 0,
                                                                 lineHeight: 0,
                                                                 backgroundColor: "auto",
                                                                 padding: [2, -2, 2, -2,],
                                                                 borderRadius: 2,
                                                                 distanceToLabelLine: 0,
                                                                 normal: {
                                                                     formatter(v) {
                                                                         let text = v.name + "\n" + v.percent + "%";
                                                                         // let text = v.percent + "%";
                                                                         return text;
                                                                     },
                                                                     textStyle: {
                                                                         fontSize: 16,
                                                                     },
                                                                 },
                                                             },
                                                             labelLine: {
                                                                 normal: {
                                                                     length: 30,
                                                                     length2: 25,
                                                                     lineStyle: {
                                                                         width: 1,
                                                                     },
                                                                 },
                                                             },
                                                             data: (function () {
                                                                 let data = [];
                                                                 let title = [
                                                                     "特产",
                                                                     "小吃",
                                                                     "餐饮",
                                                                     "便利店",
                                                                     "加油",
                                                                 ];
                                                                 let datas = [

                                                                 ];
                                                                 datas.forEach((element, index) => {
                                                                     data.push({
                                                                         name: title[index],
                                                                         value: element,
                                                                     });
                                                                 });
                                                                 return data;
                                                             })(),
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2020年片区占比",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "29.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     tooltip: {
                                                         trigger: "item",
                                                     },

                                                     legend: {
                                                         orient: "horizontal",
                                                         bottom: 10,
                                                     },

                                                     series: [
                                                         {
                                                             type: "pie",
                                                             minAngle: 5,
                                                             avoidLabelOverlap: true,
                                                             center: ["48%", "50%"],
                                                             radius: ["30%", "38%"],
                                                             clockwise: true,
                                                             hoverOffset: 20,
                                                             itemStyle: {
                                                                 normal: {
                                                                     color: function (v) {
                                                                         let colorList = [
                                                                             "#76c15c",
                                                                             "#15b3e2",
                                                                             "#2e65fd",
                                                                             "#1fcaa8",
                                                                             "#ee6565",
                                                                             "#fec02a",
                                                                             "#fe3922",
                                                                             "#52fe36",
                                                                             "#fe3afc",
                                                                         ];
                                                                         return colorList[v.dataIndex];
                                                                     },
                                                                 },
                                                             },
                                                             label: {
                                                                 show: true,
                                                                 position: "outer",
                                                                 width: 0,
                                                                 height: 0,
                                                                 lineHeight: 0,
                                                                 backgroundColor: "auto",
                                                                 padding: [2, -2, 2, -2,],
                                                                 borderRadius: 2,
                                                                 distanceToLabelLine: 0,
                                                                 normal: {
                                                                     formatter(v) {
                                                                         // let text = v.percent + "%";
                                                                         let text = v.name + "\n" + v.percent + "%";
                                                                         return text;
                                                                     },
                                                                     textStyle: {
                                                                         fontSize: 16,
                                                                     },
                                                                 },
                                                             },

                                                             labelLine: {
                                                                 normal: {
                                                                     length: 30,
                                                                     length2: 10,
                                                                     lineStyle: {
                                                                         width: 1,
                                                                     },
                                                                 },
                                                             },
                                                             data: [

                                                             ],
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2020年公司成本种类预算成本",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "50%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                             marginTop: "5px",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                         top: 20,
                                                         left: 20,
                                                     },
                                                     tooltip: {
                                                         trigger: "axis",
                                                         formatter: function (val) {
                                                             return (
                                                                 val[0].name +
                                                                 ":" +
                                                                 val[0].value +
                                                                 "万元" +
                                                                 "<br>" +
                                                                 val[1].value +
                                                                 "万元" +
                                                                 "<br>" +
                                                                 "执行率:" +
                                                                 val[2].value +
                                                                 "%"
                                                             );
                                                         },
                                                     },
                                                     grid: {
                                                         left: "3%",
                                                         right: "4%",
                                                         bottom: "3%",
                                                         containLabel: true,
                                                     },
                                                     xAxis: {
                                                         type: "value",
                                                         splitLine: {
                                                             show: false,
                                                         },
                                                         axisTick: {
                                                             show: false,
                                                         },
                                                         axisLine: {
                                                             show: false,
                                                         },
                                                         axisLabel: {
                                                             show: false,
                                                         },
                                                     },
                                                     yAxis: {
                                                         type: "category",
                                                         data: [
                                                             "办公费",
                                                             "交通",
                                                             "误餐费",
                                                             "业务招待费",
                                                             "差旅费",
                                                         ],
                                                         splitLine: {
                                                             show: false,
                                                         },
                                                         axisTick: {
                                                             show: false,
                                                         },
                                                         axisLine: {
                                                             show: false,
                                                         },
                                                     },
                                                     series: [
                                                         {
                                                             name: "A门店",
                                                             type: "bar",
                                                             stack: "总量",
                                                             barWidth: 20,
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "#379DFB",
                                                                     barBorderRadius: [
                                                                         5,
                                                                         5,
                                                                         5,
                                                                         5,
                                                                     ],
                                                                 },
                                                             },
                                                             label: {
                                                                 normal: {
                                                                     show: false,
                                                                     color: "#fff",
                                                                     position:
                                                                         "insideRight",
                                                                 },
                                                             },
                                                             z: 10,
                                                             data: [

                                                                 0.00,
                                                                 3.41,
                                                                 8.16,
                                                                 52.36,
                                                                 86.64,
                                                             ],
                                                         },
                                                         {
                                                             name: "B门店",
                                                             type: "bar",
                                                             stack: "总量",
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "#dfe5f1",
                                                                     shadowBlur: [
                                                                         0,
                                                                         0,
                                                                         0,
                                                                         10,
                                                                     ],
                                                                     barBorderRadius: [
                                                                         5,
                                                                         5,
                                                                         5,
                                                                         5,
                                                                     ],
                                                                 },
                                                             },
                                                             label: {
                                                                 normal: {
                                                                     show: false,
                                                                     color: "#000",
                                                                     position:
                                                                         "insideRight",
                                                                 },
                                                             },
                                                             z: 5,
                                                             data: [

                                                                 0.00,
                                                                 2.17,
                                                                 1.05,
                                                                 28.26,
                                                                 60.99,
                                                             ],
                                                         },
                                                         {
                                                             name: "B门店",
                                                             type: "bar",
                                                             stack: "总量",
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "rgba(237,125,49, 0)",
                                                                     shadowBlur: [
                                                                         0,
                                                                         0,
                                                                         0,
                                                                         10,
                                                                     ],
                                                                     barBorderRadius: [
                                                                         5,
                                                                         5,
                                                                         5,
                                                                         5,
                                                                     ],
                                                                 },
                                                             },
                                                             label: {
                                                                 normal: {
                                                                     color: "red",
                                                                     show: true,
                                                                     position: [
                                                                         10,
                                                                         5,
                                                                     ],
                                                                     formatter:
                                                                         "{c}%",
                                                                 },
                                                             },
                                                             z: 5,
                                                             data: [

                                                                 '0',
                                                                 '63.78',
                                                                 '12.90',
                                                                 '53.97',
                                                                 '70.40',
                                                             ],
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2020年实际预算成本",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "49.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                             marginTop: "5px",
                                         },
                                         EChartsItem: [
                                             {
                                                 type: "box",
                                                 style: {
                                                     width: "30%",
                                                     height: "300px",
                                                     position: "relative",
                                                     style: {
                                                         content: "实际:",
                                                         width: "75%",
                                                         color: "#fff",
                                                         height: "100px",
                                                         background: "#38d",
                                                         position: "absolute",
                                                         top: "100px",
                                                         left: "10%",
                                                         borderRadius: "10px",
                                                         lineHeight: "100px",
                                                         fontWeight: 700,
                                                         textAlign: "center",
                                                         fontSize: "20px",
                                                     },
                                                 },
                                                 option: {},
                                             },
                                             {
                                                 type: "box",
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "30%",
                                                     height: "300px",
                                                     position: "relative",
                                                     style: {
                                                         content: "预算:",
                                                         width: "75%",
                                                         color: "#fff",
                                                         height: "100px",
                                                         background: "#81dd9d",
                                                         position: "absolute",
                                                         top: "150px",
                                                         left: "10%",
                                                         borderRadius: "10px",
                                                         lineHeight: "100px",
                                                         fontWeight: 700,
                                                         textAlign: "center",
                                                         fontSize: "20px",
                                                     },
                                                 },
                                                 option: {},
                                             },
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "40%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: 66 + "%",
                                                         x: "center",
                                                         y: "center",
                                                         textStyle: {
                                                             fontWeight: "normal",
                                                             color: "#29EEF3",
                                                             fontSize: "25",
                                                         },
                                                     },
                                                     tooltip: {
                                                         formatter: function (
                                                             params
                                                         ) {
                                                             return (
                                                                 params.name +
                                                                 "：" +
                                                                 params.percent +
                                                                 " %"
                                                             );
                                                         },
                                                     },
                                                     series: [
                                                         {
                                                             name: "circle",
                                                             type: "pie",
                                                             clockWise: true,
                                                             radius: ["50%", "66%"],
                                                             itemStyle: {
                                                                 normal: {
                                                                     label: {
                                                                         show: false,
                                                                     },
                                                                     labelLine: {
                                                                         show: false,
                                                                     },
                                                                 },
                                                             },
                                                             hoverAnimation: false,
                                                             data: [
                                                                 {
                                                                     value: 66,
                                                                     name: "占比",
                                                                     itemStyle: {
                                                                         normal: {
                                                                             color: {
                                                                                 // 颜色渐变
                                                                                 colorStops: [
                                                                                     {
                                                                                         offset: 0,
                                                                                         color:
                                                                                             "#4FADFD", // 0% 处的颜色
                                                                                     },
                                                                                     {
                                                                                         offset: 1,
                                                                                         color:
                                                                                             "#28E8FA", // 100% 处的颜色1
                                                                                     },
                                                                                 ],
                                                                             },
                                                                             label: {
                                                                                 show: false,
                                                                             },
                                                                             labelLine: {
                                                                                 show: false,
                                                                             },
                                                                         },
                                                                     },
                                                                 },
                                                                 {
                                                                     name: "剩余",
                                                                     value: 100 - 66,
                                                                     itemStyle: {
                                                                         normal: {
                                                                             color:
                                                                                 "#E1E8EE",
                                                                         },
                                                                     },
                                                                 },
                                                             ],
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                 ],
                             },
                             {
                                 id: "cost_2019",
                                 year: 2019,
                                 collapseTitle: "2019年成本",
                                 allQuery: true,
                                 allQueryData: {
                                     input: false,
                                     select: false,
                                     time: true
                                 },
                                 EChartsBox: [
                                     {
                                         title: "2019年实际成本",
                                         time: false,
                                         timeValue: "",
                                         style: {
                                             width: "40%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     tooltip: {
                                                         trigger: "axis",
                                                         formatter: function (val) {
                                                             return (
                                                                 val[0].name + '月' +
                                                                 ":" + '<br>' +
                                                                 val[0].value / 10000 +
                                                                 "元"
                                                             );
                                                         },
                                                     },
                                                     grid: {
                                                         top: "50",
                                                         right: "40",
                                                         left: "60",
                                                         bottom: "60", //图表尺寸大小
                                                     },
                                                     xAxis: [
                                                         {
                                                             type: "category",
                                                             color: "#59588D",
                                                             data: [],
                                                             axisLabel: {
                                                                 margin: 10,
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                         },
                                                     ],
                                                     yAxis: [
                                                         {
                                                             axisLabel: {
                                                                 formatter: function (params) {
                                                                     return params / 10000
                                                                 },
                                                                 color: "#999",
                                                                 textStyle: {
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(107,107,107,0.37)",
                                                                 },
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                             splitLine: {
                                                                 lineStyle: {
                                                                     color:
                                                                         "rgba(131,101,101,0.2)",
                                                                     type: "dashed",
                                                                 },
                                                             },
                                                         },
                                                     ],
                                                     series: [
                                                         {
                                                             type: "bar",
                                                             data: [],
                                                             barWidth: "16px",
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "#38A0FF",
                                                                     barBorderRadius: [
                                                                         30,
                                                                         30,
                                                                         30,
                                                                         30,
                                                                     ],
                                                                 },
                                                             },
                                                         },
                                                         {
                                                             data: [],
                                                             type: "line",
                                                             name: "折线图",
                                                             // symbol: 'none',
                                                             lineStyle: {
                                                                 color: "#fea2a2",
                                                                 width: 2,
                                                                 shadowColor:
                                                                     "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                                                 shadowBlur: 10,
                                                                 shadowOffsetY: 10,
                                                             },
                                                             areaStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "rgba(0,0,0,0)",
                                                                 },
                                                             },
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2019年业态占比",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "29.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     grid: {
                                                         top: "20%",
                                                         right: "40",
                                                         left: "60",
                                                         bottom: "40",
                                                     },
                                                     legend: {
                                                         orient: "horizontal",
                                                         bottom: 10,
                                                     },
                                                     tooltip: {
                                                         trigger: "item",
                                                     },
                                                     series: [
                                                         {
                                                             type: "pie",
                                                             center: ["50%", "50%"],
                                                             radius: ["25%", "40%"],
                                                             clockwise: true,
                                                             avoidLabelOverlap: true,
                                                             hoverOffset: 15,
                                                             itemStyle: {
                                                                 normal: {
                                                                     color: function (v) {
                                                                         let colorList = [
                                                                             "#76c15c",
                                                                             "#15b3e2",
                                                                             "#2e65fd",
                                                                             "#1fcaa8",
                                                                             "#ee6565",
                                                                             "#fec02a",
                                                                             "#fe3922",
                                                                             "#52fe36",
                                                                             "#fe3afc",
                                                                         ];
                                                                         return colorList[v.dataIndex];
                                                                     },
                                                                 },
                                                             },
                                                             label: {
                                                                 show: true,
                                                                 position: "outer",
                                                                 width: 0,
                                                                 height: 0,
                                                                 lineHeight: 0,
                                                                 backgroundColor: "auto",
                                                                 padding: [2, -2, 2, -2,],
                                                                 borderRadius: 2,
                                                                 distanceToLabelLine: 0,
                                                                 normal: {
                                                                     formatter(v) {
                                                                         let text = v.name + "\n" + v.percent + "%";
                                                                         // let text = v.percent + "%";
                                                                         return text;
                                                                     },
                                                                     textStyle: {
                                                                         fontSize: 16,
                                                                     },
                                                                 },
                                                             },
                                                             labelLine: {
                                                                 normal: {
                                                                     length: 30,
                                                                     length2: 25,
                                                                     lineStyle: {
                                                                         width: 1,
                                                                     },
                                                                 },
                                                             },
                                                             data: (function () {
                                                                 let data = [];
                                                                 let title = [
                                                                     "特产",
                                                                     "小吃",
                                                                     "餐饮",
                                                                     "便利店",
                                                                     "加油",
                                                                 ];
                                                                 let datas = [

                                                                 ];
                                                                 datas.forEach((element, index) => {
                                                                     data.push({
                                                                         name: title[index],
                                                                         value: element,
                                                                     });
                                                                 });
                                                                 return data;
                                                             })(),
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2019年片区占比",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "29.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                     },
                                                     tooltip: {
                                                         trigger: "item",
                                                     },

                                                     legend: {
                                                         orient: "horizontal",
                                                         bottom: 10,
                                                     },

                                                     series: [
                                                         {
                                                             type: "pie",
                                                             minAngle: 5,
                                                             avoidLabelOverlap: true,
                                                             center: ["48%", "50%"],
                                                             radius: ["30%", "38%"],
                                                             clockwise: true,
                                                             hoverOffset: 20,
                                                             itemStyle: {
                                                                 normal: {
                                                                     color: function (v) {
                                                                         let colorList = [
                                                                             "#76c15c",
                                                                             "#15b3e2",
                                                                             "#2e65fd",
                                                                             "#1fcaa8",
                                                                             "#ee6565",
                                                                             "#fec02a",
                                                                             "#fe3922",
                                                                             "#52fe36",
                                                                             "#fe3afc",
                                                                         ];
                                                                         return colorList[v.dataIndex];
                                                                     },
                                                                 },
                                                             },
                                                             label: {
                                                                 show: true,
                                                                 position: "outer",
                                                                 width: 0,
                                                                 height: 0,
                                                                 lineHeight: 0,
                                                                 backgroundColor: "auto",
                                                                 padding: [2, -2, 2, -2,],
                                                                 borderRadius: 2,
                                                                 distanceToLabelLine: 0,
                                                                 normal: {
                                                                     formatter(v) {
                                                                         // let text = v.percent + "%";
                                                                         let text = v.name + "\n" + v.percent + "%";
                                                                         return text;
                                                                     },
                                                                     textStyle: {
                                                                         fontSize: 16,
                                                                     },
                                                                 },
                                                             },

                                                             labelLine: {
                                                                 normal: {
                                                                     length: 30,
                                                                     length2: 10,
                                                                     lineStyle: {
                                                                         width: 1,
                                                                     },
                                                                 },
                                                             },
                                                             data: [

                                                             ],
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2019年公司成本种类预算成本",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "50%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                             marginTop: "5px",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: "",
                                                         top: 20,
                                                         left: 20,
                                                     },
                                                     tooltip: {
                                                         trigger: "axis",
                                                         formatter: function (val) {
                                                             return (
                                                                 val[0].name +
                                                                 ":" +
                                                                 val[0].value +
                                                                 "元" +
                                                                 "<br>" +
                                                                 val[1].value +
                                                                 "元" +
                                                                 "<br>" +
                                                                 "实际占比:" +
                                                                 val[2].value +
                                                                 "%"
                                                             );
                                                         },
                                                     },
                                                     grid: {
                                                         left: "3%",
                                                         right: "4%",
                                                         bottom: "3%",
                                                         containLabel: true,
                                                     },
                                                     xAxis: {
                                                         type: "value",
                                                         splitLine: {
                                                             show: false,
                                                         },
                                                         axisTick: {
                                                             show: false,
                                                         },
                                                         axisLine: {
                                                             show: false,
                                                         },
                                                         axisLabel: {
                                                             show: false,
                                                         },
                                                     },
                                                     yAxis: {
                                                         type: "category",
                                                         data: [
                                                             "北京",
                                                             "上海",
                                                             "天津",
                                                             "深圳",
                                                             "456",
                                                             "7889",
                                                             "99789",
                                                         ],
                                                         splitLine: {
                                                             show: false,
                                                         },
                                                         axisTick: {
                                                             show: false,
                                                         },
                                                         axisLine: {
                                                             show: false,
                                                         },
                                                     },
                                                     series: [
                                                         {
                                                             name: "A门店",
                                                             type: "bar",
                                                             stack: "总量",
                                                             barWidth: 20,
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "#379DFB",
                                                                     barBorderRadius: [
                                                                         5,
                                                                         5,
                                                                         5,
                                                                         5,
                                                                     ],
                                                                 },
                                                             },
                                                             label: {
                                                                 normal: {
                                                                     show: true,
                                                                     color: "#fff",
                                                                     position:
                                                                         "insideRight",
                                                                 },
                                                             },
                                                             z: 10,
                                                             data: [

                                                             ],
                                                         },
                                                         {
                                                             name: "B门店",
                                                             type: "bar",
                                                             stack: "总量",
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "#dfe5f1",
                                                                     shadowBlur: [
                                                                         0,
                                                                         0,
                                                                         0,
                                                                         10,
                                                                     ],
                                                                     barBorderRadius: [
                                                                         5,
                                                                         5,
                                                                         5,
                                                                         5,
                                                                     ],
                                                                 },
                                                             },
                                                             label: {
                                                                 normal: {
                                                                     show: true,
                                                                     color: "#000",
                                                                     position:
                                                                         "insideRight",
                                                                 },
                                                             },
                                                             z: 5,
                                                             data: [

                                                             ],
                                                         },
                                                         {
                                                             name: "B门店",
                                                             type: "bar",
                                                             stack: "总量",
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "rgba(237,125,49, 0)",
                                                                     shadowBlur: [
                                                                         0,
                                                                         0,
                                                                         0,
                                                                         10,
                                                                     ],
                                                                     barBorderRadius: [
                                                                         5,
                                                                         5,
                                                                         5,
                                                                         5,
                                                                     ],
                                                                 },
                                                             },
                                                             label: {
                                                                 normal: {
                                                                     color: "red",
                                                                     show: true,
                                                                     position: [
                                                                         10,
                                                                         5,
                                                                     ],
                                                                     formatter:
                                                                         "{c}%",
                                                                 },
                                                             },
                                                             z: 5,
                                                             data: [

                                                             ],
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                     {
                                         title: "2019年实际预算成本",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "49.5%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                             marginTop: "5px",
                                         },
                                         EChartsItem: [
                                             {
                                                 type: "box",
                                                 style: {
                                                     width: "30%",
                                                     height: "300px",
                                                     position: "relative",
                                                     style: {
                                                         content: "实际:",
                                                         width: "75%",
                                                         color: "#fff",
                                                         height: "100px",
                                                         background: "#38d",
                                                         position: "absolute",
                                                         top: "100px",
                                                         left: "10%",
                                                         borderRadius: "10px",
                                                         lineHeight: "100px",
                                                         fontWeight: 700,
                                                         textAlign: "center",
                                                         fontSize: "20px",
                                                     },
                                                 },
                                                 option: {},
                                             },
                                             {
                                                 type: "box",
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "30%",
                                                     height: "300px",
                                                     position: "relative",
                                                     style: {
                                                         content: "预算:",
                                                         width: "75%",
                                                         color: "#fff",
                                                         height: "100px",
                                                         background: "#81dd9d",
                                                         position: "absolute",
                                                         top: "150px",
                                                         left: "10%",
                                                         borderRadius: "10px",
                                                         lineHeight: "100px",
                                                         fontWeight: 700,
                                                         textAlign: "center",
                                                         fontSize: "20px",
                                                     },
                                                 },
                                                 option: {},
                                             },
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "40%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     title: {
                                                         text: 66 + "%",
                                                         x: "center",
                                                         y: "center",
                                                         textStyle: {
                                                             fontWeight: "normal",
                                                             color: "#29EEF3",
                                                             fontSize: "25",
                                                         },
                                                     },
                                                     tooltip: {
                                                         formatter: function (
                                                             params
                                                         ) {
                                                             return (
                                                                 params.name +
                                                                 "：" +
                                                                 params.percent +
                                                                 " %"
                                                             );
                                                         },
                                                     },
                                                     series: [
                                                         {
                                                             name: "circle",
                                                             type: "pie",
                                                             clockWise: true,
                                                             radius: ["50%", "66%"],
                                                             itemStyle: {
                                                                 normal: {
                                                                     label: {
                                                                         show: false,
                                                                     },
                                                                     labelLine: {
                                                                         show: false,
                                                                     },
                                                                 },
                                                             },
                                                             hoverAnimation: false,
                                                             data: [
                                                                 {
                                                                     value: 66,
                                                                     name: "占比",
                                                                     itemStyle: {
                                                                         normal: {
                                                                             color: {
                                                                                 // 颜色渐变
                                                                                 colorStops: [
                                                                                     {
                                                                                         offset: 0,
                                                                                         color:
                                                                                             "#4FADFD", // 0% 处的颜色
                                                                                     },
                                                                                     {
                                                                                         offset: 1,
                                                                                         color:
                                                                                             "#28E8FA", // 100% 处的颜色1
                                                                                     },
                                                                                 ],
                                                                             },
                                                                             label: {
                                                                                 show: false,
                                                                             },
                                                                             labelLine: {
                                                                                 show: false,
                                                                             },
                                                                         },
                                                                     },
                                                                 },
                                                                 {
                                                                     name: "剩余",
                                                                     value: 100 - 66,
                                                                     itemStyle: {
                                                                         normal: {
                                                                             color:
                                                                                 "#E1E8EE",
                                                                         },
                                                                     },
                                                                 },
                                                             ],
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                 ],
                             },
                             {
                                 id: "cost_gd",
                                 collapseTitle: "查看更多",
                                 EChartsBox: []
                             },
                         ],
                     },
                     {
                         id: "quantity",
                         name: "数量",
                         icon: require("../../../assets/business/icon_4-1.png"),
                         iconActive: require("../../../assets/business/icon_4-2.png"),
                         collapseItem: [
                             {
                                 id: "quantity_20",
                                 collapseTitle: "服务区数量",
                                 EChartsBox: [
                                     {
                                         title: "",
                                         time: false,
                                         timeValue: "",
                                         style: {
                                             width: "100%",
                                             height: "350px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "300px",
                                                 },
                                                 option: {
                                                     tooltip: {
                                                         //提示框组件
                                                         trigger: "axis",
                                                         // formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
                                                         axisPointer: {
                                                             type: "none",
                                                             label: {
                                                                 backgroundColor:
                                                                     "rgba(0,0,0,0)",
                                                             },
                                                         },
                                                         formatter: function (val) {
                                                             return (
                                                                 val[0].name +
                                                                 ":" +
                                                                 "<br>" +
                                                                 val[0].marker +
                                                                 val[0].seriesName +
                                                                 ":" +
                                                                 val[0].value +
                                                                 "元" +
                                                                 "<br>" +
                                                                 val[1].marker +
                                                                 val[1].seriesName +
                                                                 ":" +
                                                                 val[1].value +
                                                                 "元" +
                                                                 "<br>" +
                                                                 val[2].marker +
                                                                 val[2].seriesName +
                                                                 ":" +
                                                                 val[1].value +
                                                                 "元" +
                                                                 "<br>"
                                                             );
                                                         },
                                                         textStyle: {
                                                             color: "#fff",
                                                             fontStyle: "normal",
                                                             fontFamily: "微软雅黑",
                                                             fontSize: 12,
                                                         },
                                                     },
                                                     grid: {
                                                         left: "10%",
                                                         right: "10%",
                                                         bottom: "5%",
                                                         top: "10%",
                                                         //	padding:'0 0 10 0',
                                                         containLabel: true,
                                                     },
                                                     legend: {
                                                         //图例组件，颜色和名字
                                                         right: "20%",
                                                         top: "5%",
                                                         // top: '30%',
                                                         itemGap: 16,
                                                         itemWidth: 18,
                                                         itemHeight: 10,
                                                         data: [
                                                             {
                                                                 name: "接手",
                                                                 //icon:'image://../wwwroot/js/url2.png', //路径
                                                             },
                                                             {
                                                                 name: "投营",
                                                             },
                                                             {
                                                                 name: "总数量",
                                                             },
                                                         ],
                                                         textStyle: {
                                                             color: "#a8aab0",
                                                             fontStyle: "normal",
                                                             fontFamily: "微软雅黑",
                                                             fontSize: 12,
                                                         },
                                                     },
                                                     xAxis: [
                                                         {
                                                             type: "category",
                                                             //	boundaryGap: true,//坐标轴两边留白
                                                             data: [
                                                                 "2015",
                                                                 "2016",
                                                                 "2017",
                                                                 "2018",
                                                                 "2019",
                                                                 "2020",
                                                             ],
                                                             axisLabel: {
                                                                 //坐标轴刻度标签的相关设置。
                                                                 //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                                                                 //	margin:15,
                                                                 textStyle: {
                                                                     color:
                                                                         "#c8c9c9",
                                                                     fontStyle:
                                                                         "normal",
                                                                     fontFamily:
                                                                         "微软雅黑",
                                                                     fontSize: 12,
                                                                 },
                                                                 // rotate: 50,
                                                             },
                                                             axisTick: {
                                                                 //坐标轴刻度相关设置。
                                                                 show: false,
                                                             },
                                                             axisLine: {
                                                                 //坐标轴轴线相关设置
                                                                 lineStyle: {
                                                                     color:
                                                                         "#c8c9c9",
                                                                     opacity: 1,
                                                                 },
                                                             },
                                                             splitLine: {
                                                                 //坐标轴在 grid 区域中的分隔线。
                                                                 show: false,
                                                             },
                                                         },
                                                         {
                                                             type: "value",
                                                             show: false,
                                                         },
                                                     ],
                                                     yAxis: [
                                                         {
                                                             type: "value",
                                                             splitNumber: 5,
                                                             axisLabel: {
                                                                 textStyle: {
                                                                     color:
                                                                         "#c8c9c9",
                                                                     fontStyle:
                                                                         "normal",
                                                                     fontFamily:
                                                                         "微软雅黑",
                                                                     fontSize: 12,
                                                                 },
                                                             },
                                                             axisLine: {
                                                                 show: false,
                                                             },
                                                             axisTick: {
                                                                 show: false,
                                                             },
                                                             splitLine: {
                                                                 show: true,
                                                                 lineStyle: {
                                                                     color: ["#fff"],
                                                                     opacity: 0.06,
                                                                 },
                                                             },
                                                         },
                                                     ],
                                                     series: [
                                                         {
                                                             name: "接手",
                                                             type: "bar",
                                                             data: [

                                                             ],
                                                             barWidth: 20,
                                                             // barGap: 10,//柱间距离
                                                             barCategoryGap: "50%",
                                                             itemStyle: {
                                                                 normal: {
                                                                     show: true,
                                                                     color:
                                                                         "#01a4f7",
                                                                     barBorderRadius: 50,
                                                                     borderWidth: 0,
                                                                 },
                                                             },
                                                         },
                                                         {
                                                             name: "投营",
                                                             type: "bar",
                                                             data: [

                                                             ],
                                                             barWidth: 20,
                                                             // barGap: 0,//柱间距离
                                                             barCategoryGap: "50%",

                                                             itemStyle: {
                                                                 normal: {
                                                                     show: true,
                                                                     color:
                                                                         "#0fd927",
                                                                     barBorderRadius: 50,
                                                                     borderWidth: 0,
                                                                 },
                                                             },
                                                         },
                                                         {
                                                             name: "总数量",
                                                             type: "bar",
                                                             data: [

                                                             ],
                                                             barWidth: 20,
                                                             // barGap: 0,//柱间距离
                                                             barCategoryGap: "50%",

                                                             itemStyle: {
                                                                 normal: {
                                                                     show: true,
                                                                     color:
                                                                         "#fcc32d",
                                                                     barBorderRadius: 50,
                                                                     borderWidth: 0,
                                                                 },
                                                             },
                                                         },
                                                         {
                                                             xAxisIndex: 1,
                                                             type: "line",
                                                             itemStyle: {
                                                                 normal: {
                                                                     color:
                                                                         "#b37eeb",
                                                                 },
                                                             },
                                                             data: (function () {
                                                                 let data = [
                                                                     65,
                                                                     55,
                                                                     60,
                                                                     45,
                                                                     42,
                                                                     15,
                                                                 ];
                                                                 let datas = [];
                                                                 data.forEach(
                                                                     (
                                                                         element,
                                                                         index
                                                                     ) => {
                                                                         datas.push([
                                                                             35 +
                                                                             index *
                                                                             100,
                                                                             element,
                                                                         ]);
                                                                     }
                                                                 );
                                                                 return datas;
                                                             })(),
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                 ],
                             },
                         ],
                     },
                     {
                         id: "flow",
                         name: "车流量",
                         icon: require("../../../assets/business/icon_2-1.png"),
                         iconActive: require("../../../assets/business/icon_2-2.png"),
                         collapseItem: [
                             {
                                 id: "flow_2020",
                                 collapseTitle: "2019年高速车流量",
                                 EChartsBox: [
                                     {
                                         title: "2019年高速车流量",
                                         time: false,
                                         select: false,
                                         style: {
                                             width: "100%",
                                             height: "550px",
                                             background: "white",
                                             borderRadius: "10px",
                                             overflow: "hidden",
                                         },
                                         EChartsItem: [
                                             {
                                                 /!*ECharts的属性*!/
                                                 style: {
                                                     width: "100%",
                                                     height: "500px",
                                                 },
                                                 option: {

                                                     xAxis: {
                                                         type: "category",
                                                         data: [],
                                                     },
                                                     // legend: {
                                                     //     x: '46%',
                                                     //     top: '11%',
                                                     //     textStyle: {
                                                     //         color: '#90979c',
                                                     //     },
                                                     //     data: ['访问量', '订单量']
                                                     // },
                                                     yAxis: {
                                                         type: "value",
                                                     },
                                                     series: [
                                                         {
                                                             data: [],
                                                             type: "line",
                                                         },
                                                         {
                                                             data: [],
                                                             type: "line",
                                                         },
                                                     ],
                                                 },
                                             },
                                         ],
                                     },
                                 ],
                             },
                             {
                                 id: "flow_gd",
                                 collapseTitle: "查看更多",
                                 EChartsBox: []
                             },
                             {
                                 id: "flow_gd",
                                 collapseTitle: "查看更多",
                                 EChartsBox: []
                             },
                         ],
                     },*/
      ],
      arrData: [],
      ValueData: {
        inputValue: "",
        selectValue: "",
        timeValue: ["", ""]
      },
      optionss: [],
      options: [
        {
          value: "选项1",
          label: "咸宁中心"
        },
        {
          value: "选项2",
          label: "宜昌中心"
        },
        {
          value: "选项3",
          label: "黄冈中心"
        },
        {
          value: "选项4",
          label: "十堰中心"
        },
        {
          value: "选项5",
          label: "恩施中心"
        }
      ],
      company: "",
      district: "",
      totalCount: 0,
      inputVlaue: ""
    };
  },
  methods: {
    selectionChange(val) {
      this.$emit("clickTable", true);
      this.$router.push("/details/serviceDetails");
    },
    ClickTotal(value) {
      this.TableDatas(value.pageNum, value.pageSize);
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
      this.inputVlaue = inputValue;
      await this.TableDatas(1, 5);
    },
    async TableDatas(pageNum, pageSize) {
      this.$axios
        .get("/api/jtService/serve_list", {
          params: {
            companyId: "",
            endTime: "",
            pageNum: pageNum,
            serverName: this.inputVlaue,
            startTime: "",
            pageSize: pageSize
          }
        })
        .then(res => {
          this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData = [];
          res.data.list.forEach(element => {
            let elementData = {
              serviceName: element.serviceName ? element.serviceName : "/",
              // 高速名称
              B: "/",
              // 利润
              G: element.lirun ? element.lirun : "/",
              // 业态订单数
              J: "/",
              I: element.mianji ? element.mianji : "",
              // 坪效
              H: element.pingxiao ? element.pingxiao : "/",
              maxcart: element.carVo[0] ? element.carVo[0].count : "",
              mincart: element.carVo[1] ? element.carVo[1].count : "",
              refuel: element.jiayou ? element.jiayou : "/",
              snack: element.xiaochi ? element.xiaochi : "/",
              convenience: element.chaoshi ? element.chaoshi : "/",
              catering: element.canyin ? element.canyin : "/",
              shouyi: element.shouyi ? element.shouyi : "/"
            };
            this.collapseData[0].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData.push(
              elementData
            );
          });
          this.totalCount = res.data.total;
        });
    }
    /* async obtainData(name, year) {
                 let data = [];
                 let id = '';
                 this.ValueData.timeValue === null && (this.ValueData.timeValue = ['', '']);
                 const res = await this.$axios.get("/api/sundry/finance_type_list");
                 for (let i = 0; i < res.data.data.length; i++) {
                     if (res.data.data[i].financeName == name) {
                         id = res.data.data[i].financeTypeId;
                         break;
                     }
                 }
                 await this.$axios.get('/api/jtService/list_service_finance', {
                     params: {
                         financeTypeId: id,
                         nianfen: year,
                         endTime: this.ValueData.timeValue[1],
                         stateTime: this.ValueData.timeValue[0]
                     }
                 }).then(v => {
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
                                                 sItem.EChartsItem[0].option.series[0].data.push(i.yAxis);
                                                 mm.push(i.yAxis);
                                                 sItem.EChartsItem[0].option.xAxis[0].data.push(i.xBxis);
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
                                             })
                                             sItem.EChartsItem[1].option.series[0].data = []
                                             data.xYListFrom3.forEach((i, ix) => {
                                                 sItem.EChartsItem[1].option.series[0].data.push({
                                                     name: i.xBxis,
                                                     value: i.yAxis
                                                 });
                                             })
                                         }
                                     });
                                 }
                             })
                         }
                     })
                     // this.$nextTick(_ => {
                     //     this.$refs['collapse'].searchClick(this.arrData)
                     // })
                 })
             },
             async obtainAxios(name, year, years) {
                 let data = [];
                 let id = '';
                 await this.$axios.get('/api/sundry/fuwuqucaiwu',
                     { params: { nianfen: year, type: years } }
                 ).then(v => {
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
                                                 xBxis.push(element.xBxis.split('-')[1]);
                                                 yAxis.push(element.yAxis * 10000)
                                             });
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
                             })
                         }
                     })

                 })
                 // this.$axios.get('/api/sundry/fuwuqucaiwu',{params:{nianfen:year,type:name}}).then(res=>{
                 //     let xBxis = [];
                 //     let yAxis = [];
                 //     res.data.data.forEach(element => {

                 //     });
                 // })
             }*/
  },
  async mounted() {
    await this.TableDatas(1, 5);
    await new Promise(resolve => {
      setInterval(_ => {
        resolve();
      }, 500);
    });
    this.$refs["collapse"].initECharts(this.collapseData);
  },
  async created() {
    /* await this.obtainData('营收', '2019');
             await this.obtainData('营收', '2020');
             await this.obtainData('利润', '2019');
             await this.obtainData('利润', '2020');*/
    /* await this.obtainAxios('营收', '2020', 'ys');
             await this.obtainAxios('成本', '2020', 'cb');
             await this.obtainAxios('成本', '2019', 'cb');
             await this.obtainAxios('利润', '2020', 'lr');
             await this.obtainAxios('利润', '2019', 'lr');*/
    /*this.$axios.get('/api/jtService/car_flow').then(res => {
                res.data.forEach((element, index) => {
                    let xAxis = [];
                    let yBxis = [];
                    element.flowList.forEach(item => {
                        xAxis.push(item.time)
                        yBxis.push(item.count)
                    });
                    this.collapseData[5].collapseItem[0].EChartsBox[0].EChartsItem[0].option.xAxis.data = xAxis;
                    this.collapseData[5].collapseItem[0].EChartsBox[0].EChartsItem[0].option.series[index].data = yBxis;

                });
            })*/
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>
<style scoped lang="less">
.titleBox {
  width: 100%;
  height: calc(100% - 60px);
}

.nav {
  background: #f3f7ff;
  width: 75%;
  padding: 10px;
  display: flex;
  // padding-left: 30%;
  display: flex;
  justify-content: center;
  // box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 100;
  top: 0;
}
.hover {
  background: #409eff;
  color: #ffffff;
}
.nav > div + div {
  margin-left: 10px;
}
</style>
