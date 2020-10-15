<template>
    <div class="content">
        <div class="top" @mouseover="mouseHover('AD')">
            <operations class="operations" @showOne="showOne"></operations>
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
                    <el-radio class="checkboxItem" @change="changeRadio(1)" v-model="select" :label="1">加油站</el-radio>
                    <el-radio class="checkboxItem" @change="changeRadio(2)" v-model="select" :label="2">合作收入</el-radio>
                    <el-radio class="checkboxItem" @change="changeRadio(3)" v-model="select" :label="3">自营商店</el-radio>
                </div>
                <operations class="operations" @showOne="showOne"></operations>
                <div id="HomeTopRight_bottom_left"></div>
            </div>
            <div class="bottom_right" @mouseover="mouseHover('CD')">
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
        components: {ShowECharts, Operations},
        data() {
            return {
                select: 1,
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
                this.$refs['showECharts'].openDialog(this.option);
            },
            changeRadio(v) {
                console.log(v);
            },
            initECharts_top() {
                let HomeTopRight_top = this.$echarts.init(
                    document.getElementById("HomeTopRight_top")
                );
                let option = this.AD = {
                    series: {
                        type: "sankey",
                        layout: "none",
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
                                    color: "#fbb4ae"
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6
                                }
                            },
                            {
                                depth: 1,
                                itemStyle: {
                                    color: "#b3cde3"
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6
                                }
                            },
                            {
                                depth: 2,
                                itemStyle: {
                                    color: "#ccebc5"
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6
                                }
                            },
                            {
                                depth: 3,
                                itemStyle: {
                                    color: "#decbe4"
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
                };
                HomeTopRight_top.setOption(option);
            },
            /*initECharts_bottom() {
              let HomeTopRight_bottomIA = this.$echarts.init(
                document.getElementById("HomeTopRight_bottomIA")
              );
              let HomeTopRight_bottomIB = this.$echarts.init(
                document.getElementById("HomeTopRight_bottomIB")
              );
              let HomeTopRight_bottomIC = this.$echarts.init(
                document.getElementById("HomeTopRight_bottomIC")
              );
              let HomeTopRight_bottomID = this.$echarts.init(
                document.getElementById("HomeTopRight_bottomID")
              );
              let optionA = {
                barWidth: 10, //设置柱状图的粗细
                tooltip: {
                  trigger: "axis",
                  formatter: function(val) {
                    return val[0].name + "<br>" + val[0].value + "%";
                  }
                },
                title: {
                  text: "{a|     加油站营收前五}",
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
                    barCategoryGap: "100%"
                  }
                ]
              };
              let optionB = {
                barWidth: 10, //设置柱状图的粗细
                tooltip: {
                  trigger: "axis",
                  formatter: function(val) {
                    return val[0].name + "<br>" + val[0].value + "%";
                  }
                },
                title: {
                  text: "{a|     加油站营收后五}",
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
                    barCategoryGap: "100%"
                  }
                ]
              };
              let optionC = {
                barWidth: 10, //设置柱状图的粗细
                tooltip: {
                  trigger: "axis",
                  formatter: function(val) {
                    return val[0].name + "<br>" + val[0].value + "%";
                  }
                },
                title: {
                  text: "{a|     自营商店营收前五}",
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
                    barCategoryGap: "100%"
                  }
                ]
              };
              let optionD = {
                barWidth: 10, //设置柱状图的粗细
                tooltip: {
                  trigger: "axis",
                  formatter: function(val) {
                    return val[0].name + "<br>" + val[0].value + "%";
                  }
                },
                title: {
                  text: "{a|     自营商店营收后五}",
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
                    barCategoryGap: "100%"
                  }
                ]
              };
              HomeTopRight_bottomIA.setOption(optionA);
              HomeTopRight_bottomIB.setOption(optionB);
              HomeTopRight_bottomIC.setOption(optionC);
              HomeTopRight_bottomID.setOption(optionD);
            },*/
            initECharts_bottom_left() {
                let HomeTopRight_bottom_left = this.$echarts.init(
                    document.getElementById("HomeTopRight_bottom_left")
                );
                let option = this.BD = {
                    barWidth: 20,
                    title: {
                        text: "{a|     营收前五及后五}",
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
                        top: 80,
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
                        splitLine: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: "#FFF"
                            }
                        }
                    },
                    yAxis: {
                        type: "category",
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
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
                            label: {
                                show: true,
                                formatter: "{b}"
                            },
                            data: [
                                0.09,
                                0.1,
                                0.2,
                                0.3,
                                0.4,
                                0.6,
                                0.7,
                                0.8,
                                0.9,
                                1,
                            ],
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
                };
                HomeTopRight_bottom_left.setOption(option);
            },
            initECharts_bottom_right() {
                let HomeTopRight_bottom_right = this.$echarts.init(
                    document.getElementById("HomeTopRight_bottom_right")
                );
                let option = this.CD = {
                    barWidth: 20,
                    title: {
                        text: "{a|     千人营收前五及后五}",
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
                        top: 80,
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
                        splitLine: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: "#FFF"
                            }
                        }
                    },
                    yAxis: {
                        type: "category",
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
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
                            label: {
                                show: true,
                                formatter: "{b}"
                            },
                            data: [
                                0.09,
                                0.1,
                                0.2,
                                0.3,
                                0.4,
                                0.6,
                                0.7,
                                0.8,
                                0.9,
                                1,
                            ],
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
                };
                HomeTopRight_bottom_right.setOption(option);
            },
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
    .content {
        width: 100%;
        height: 100%;

        .top {
            width: 100%;
            height: 38%;
            border: 1px solid #38d;
            box-shadow: 0 0 20px #38d inset;
            position: relative;

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
            height: 60%;

            .bottom_left {
                width: 49%;
                height: 100%;
                float: left;
                border: 1px solid #38d;
                box-shadow: 0 0 20px #38d inset;
                position: relative;

                .select_type {
                    width: 30%;
                    height: 25%;
                    position: absolute;
                    bottom: 0;
                    right: 5%;
                    z-index: 999;

                    .checkboxItem {
                        color: white;
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
                width: 49%;
                height: 100%;
                border: 1px solid #38d;
                box-shadow: 0 0 20px #38d inset;
                float: right;
                position: relative;

                #HomeTopRight_bottom_right {
                    height: 100%;
                    width: 100%;
                }
            }

            .bottom_right:hover .operations {
                display: block;
            }

            /* .item {
                         width: 49%;
                         height: 48%;

                         #HomeTopRight_bottomIA {
                             width: 100%;
                             height: 100%;
                         }

                         #HomeTopRight_bottomIB {
                             width: 100%;
                             height: 100%;
                         }

                         #HomeTopRight_bottomIC {
                             width: 100%;
                             height: 100%;
                         }

                         #HomeTopRight_bottomID {
                             width: 100%;
                             height: 100%;
                         }
                     }*/
        }
    }
</style>
