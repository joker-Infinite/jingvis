<template>
  <div class="box" style="width: 100%;height: 100%;">
    <my-collapse-base ref="collapse" :collapseData="collapseData">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="基础信息" name="1">
          <el-row class="body" :gutter="24">
            <el-col :span="6" v-for="item in baseData" :key="item">
              <el-row :gutter="24">
                <el-col :span="10" style="text-align:right"
                  >{{ item.label }}:</el-col
                >
                <el-col :span="12" style="text-align:center">{{
                  item.value
                }}</el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </my-collapse-base>
  </div>
</template>

<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";

export default {
  name: "JYZXiangQing",
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
          id: "profit",
          name: "加油站",
          icon: require("../../../assets/business/icon_2-1.png"),
          iconActive: require("../../../assets/business/icon_2-2.png"),
          collapseItem: [
            // {
            // 	id: "revenue_gd",
            // 	collapseTitle: "基本信息",
            // 	EChartsBox: []
            // },
            {
              id: "profit_2020",
              collapseTitle: "加油站",
              EChartsBox: [
                {
                  title: "转化率/成本费用利润率",
                  time: true,
                  year: true,
                  month: true,
                  day: true,
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
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
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },
                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return val[0].name + ":" + val[0].value + "元";
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "70" //图表尺寸大小
                        },
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
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
                            axisLabel: {
                              formatter: "{value}",
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
                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["a", "b"]
                        },
                        series: [
                          {
                            name: "a",
                            type: "line",
                            data: [
                              321,
                              432,
                              123,
                              543,
                              256,
                              123,
                              400,
                              265,
                              654,
                              352,
                              326,
                              765
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          },
                          {
                            name: "b",
                            type: "line",
                            data: [
                              586,
                              560,
                              500,
                              365,
                              256,
                              362,
                              400,
                              265,
                              333,
                              352,
                              254,
                              360
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#76c15c",
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
                  title: "非油品、油、柴油、汽油、92、95、98、E92、E95 ",
                  timeValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
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
                        height: "400px"
                      },
                      option: {
                        title: {
                          text: ""
                        },

                        tooltip: {
                          trigger: "axis",
                          formatter: function(val) {
                            return val[0].name + ":" + val[0].value + "万元";
                          }
                        },
                        grid: {
                          top: "20%",
                          right: "40",
                          left: "60",
                          bottom: "70"
                        },
                        legend: {
                          orient: "horizontal",
                          bottom: 10,
                          data: ["a", "b"]
                        },
                        xAxis: [
                          {
                            type: "category",
                            color: "#59588D",
                            data: [
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
                            },
                            axisLabel: {
                              formatter: "{value}",
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
                            name: "a",
                            type: "bar",
                            data: [
                              586,
                              560,
                              500,
                              365,
                              256,
                              362,
                              400,
                              265,
                              333,
                              352,
                              254,
                              360
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#38A0FF",
                                barBorderRadius: [30, 30, 30, 30]
                              }
                            }
                          },
                          {
                            name: "b",
                            type: "bar",
                            data: [
                              321,
                              432,
                              123,
                              543,
                              256,
                              123,
                              400,
                              265,
                              654,
                              352,
                              326,
                              765
                            ],
                            barWidth: "16px",
                            itemStyle: {
                              normal: {
                                color: "#76c15c",
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
                  title: "油站总营收结构",
                  time: false,
                  select: false,
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
                          data: ["非油品", "柴油", "92", "95", "98"]
                        },
                        tooltip: {
                          trigger: "item"
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
                              { value: 335, name: "非油品" },
                              { value: 310, name: "柴油" },
                              { value: 234, name: "92" },
                              { value: 135, name: "95" },
                              { value: 1548, name: "98" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "非油品油站总营收结构",
                  time: false,
                  select: false,
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
                          data: ["非油品", "柴油", "92", "95", "98"]
                        },
                        tooltip: {
                          trigger: "item"
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
                              { value: 335, name: "非油品" },
                              { value: 310, name: "柴油" },
                              { value: 234, name: "92" },
                              { value: 135, name: "95" },
                              { value: 1548, name: "98" }
                            ]
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  title: "订单列表",
                  time: false,
                  select: false,
                  timeValue: "",
                  selectValue: "",
                  style: {
                    width: "100%",
                    height: "450px",
                    background: "white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "10px"
                  },
                  EChartsItem: [
                    {
                      type: "table",
                      /*ECharts的属性*/
                      isPagination: true,
                      height: "500px",
                      style: {
                        width: "100%",
                        height: "400px"
                      },
                      border: true,
                      columns: [
                        { prop: "a", label: "加油站" },
                        { prop: "b", label: "零食（金额/订单）" },
                        { prop: "c", label: "小吃（金额/订单）" },
                        { prop: "d", label: "饮料（金额/订单）" },
                        { prop: "e", label: "烟酒（金额/订单）" },
                        { prop: "f", label: "汽车用品（金额/订单）" },
                        { prop: "g", label: "时间" },
                        { prop: "h", label: "汽油" },
                        { prop: "i", label: "柴油" }
                      ],
                      tableData: [
                        {
                          a: "xxx加油站",
                          b: "5%",
                          c: "5%",
                          d: "5%",
                          e: "5%",
                          f: "5%",
                          g: "5%",
                          h: "5%",
                          i: "5%"
                        },
                        {
                          a: "xxx加油站",
                          b: "5%",
                          c: "5%",
                          d: "5%",
                          e: "5%",
                          f: "5%",
                          g: "5%",
                          h: "5%",
                          i: "5%"
                        },
                        {
                          a: "xxx加油站",
                          b: "5%",
                          c: "5%",
                          d: "5%",
                          e: "5%",
                          f: "5%",
                          g: "5%",
                          h: "5%",
                          i: "5%"
                        }
                      ],
                      option: {}
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      activeNames: ["1"],
      formBasis: {},
      baseData: [
        { label: "服务区", value: "蔡甸服务区-A区" },
        { label: "类别", value: "一类服务区" },
        { label: "所属公司", value: "孝感分公司" },
        { label: "开通状况", value: "是" },
        { label: "开通时间", value: "2002.11" },
        { label: "所在高速", value: "京港澳高速" },
        { label: "高速编号", value: "G4" },
        { label: "高速桩号", value: "K1165" },
        { label: "占地面积", value: "131" },
        { label: "建筑面积", value: "87333.3" },
        { label: "经营面积", value: "15347.26" },
        { label: "绿化面积", value: "5689.64" },
        { label: "日均车流量", value: "33960.7" },
        { label: "日高峰期车流量", value: "3500" },
        { label: "厕所等级", value: "五星" },
        { label: "厕所改造时间", value: "2018.09" },
        { label: "男女蹲位数量", value: "114，126" },
        { label: "小便器阀数量", value: "114" },
        { label: "大车位个数", value: "112" },
        { label: "小车位个数", value: "150" },
        { label: "保安人数", value: "18" },
        { label: "保洁人数", value: "35" },
        { label: "加油站开通", value: "是" },
        { label: "加油机数量", value: "14" },
        { label: "充电桩数量", value: "8" },
        { label: "充电桩分布", value: "双侧" },
        { label: "所属地域", value: "孝感市孝南区" },
        { label: "路段管理单位", value: "京珠运营公司" },
        { label: "服务区负责人", value: "王永红" },
        { label: "联系方式", value: "18071019995" },
        { label: "停车场面积", value: "90757.3" },
        { label: "加油站管理单位", value: "中石化" }
      ]
    };
  },
  mounted() {
    this.$refs["collapse"].initECharts(this.collapseData);
  },
  watch: {
    viewChange() {
      this.$refs["collapse"].refresh(this.collapseData);
    }
  }
};
</script>

<style scoped lang="less">
.body {
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
}
.body > .el-col {
  height: 50px;
}
.box /deep/ .el-collapse {
  border-bottom: none;
}

.box /deep/ .el-collapse > .noMargin > div > .el-collapse-item__header {
  margin-top: 0 !important;
}

.box /deep/ .el-collapse > .el-collapse-item {
}

.box /deep/ .el-collapse > .el-collapse-item > div > .el-collapse-item__header {
  background: #1d7dca;
  border-radius: 10px;
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  margin: 8px 0;
  width: 100%;
  color: white;
  border: none;
  text-indent: 10px;
}

.box /deep/ .el-collapse > .el-collapse-item > .el-collapse-item__wrap {
  background-color: rgba(0, 0, 0, 0) !important;
}

.box
  /deep/
  .el-collapse
  > .el-collapse-item
  > .el-collapse-item__wrap
  > .el-collapse-item__content {
  padding-bottom: 0;
}
</style>
