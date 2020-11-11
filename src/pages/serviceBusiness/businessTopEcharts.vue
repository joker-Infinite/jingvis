<template>
  <div
    class="content"
    v-if="businessId.id"
    :style="{ height: isshow ? '800px' : '400px' }"
  >
    <div class="top">
      <div
        class="left"
        :style="{ width: businessId.show ? '' : '60%' }"
        @mouseover="mouseHover('A', businessId.id[0], businessId.data.left)"
      >
        <!-- {{businessId.id[0]}} -->
        <div class="con" :id="businessId.id[0]"></div>
        <div class="ListTable" :id="businessId.id[0] + 1"></div>
        <information
          class="information"
          @isData="isData"
          ref="inform"
        ></information>
      </div>
      <div
        class="center"
        :style="{ width: businessId.show ? '' : '40%' }"
        @mouseover="mouseHover('B', businessId.id[1], businessId.data.center)"
      >
        <!-- {{businessId.id[1]}} -->
        <div class="con" :id="businessId.id[1]"></div>
        <div class="ListTable" :id="businessId.id[1] + 1"></div>
        <information
          @isData="isData"
          class="information"
          ref="inform"
        ></information>
      </div>
      <div
        v-if="businessId.show"
        class="right right1"
        @mouseover="mouseHover('C', businessId.id[2], businessId.data.left)"
      >
        <div class="con" :id="businessId.id[2]"></div>
        <div class="ListTable" :id="businessId.id[2] + 1"></div>
        <information
          @isData="isData"
          class="information"
          ref="inform"
        ></information>
      </div>
    </div>
    <div class="bottom" v-if="isshow">
      <div
        class="bottomLeft"
        @mouseover="
          mouseHover('D', businessId.echartsBottoms, businessId.data.left)
        "
      >
        <div class="con" :id="businessId.echartsBottoms"></div>
        <div class="ListTable" :id="businessId.echartsBottoms + 1"></div>
        <information
          @isData="isData"
          class="information"
          ref="inform"
        ></information>
      </div>
      <div class="bottomRight">
        <div class="title">公司总成本</div>
        <div class="budgetCost">
          <p>预算成本</p>
          <p><span>218</span>万元</p>
        </div>
        <div class="DistributionCosts">
          <p>发放成本</p>
          <p><span>3258</span>元</p>
        </div>
        <div class="proportion" :id="businessId.echartsBottoms + 'w'"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import information from "./detail/information";
import { outExe } from "./detail/excel";
export default {
  computed: {
    ...mapState(["resizeData"])
  },
  components: { information },
  data() {
    return {
      // resizeData: [],
      isExcle: "", //判断hover的时候点击的是哪个
      required: {
        //保存所需要的数据
        id: "",
        data: []
      },
      isvalue: "",
      height: ""
      // businessId: {},
    };
  },
  props: {
    businessId: {
      type: Object,
      default: {}
    },
    isshow: {
      type: Boolean,
      default: false
    },
    echartsBottoms: {
      type: String,
      default: "10"
    }
  },
  methods: {
    ...mapMutations(["isresizeData"]),
    mouseHover(v, id, data) {
      console.log(id);
      this.isvalue = v;
      this.required.id = id;
      this.required.data = data;
    },
    // 传过来的数据
    isData(val) {
      this.isExcle = val;
      this.isEchartsIsTable();
      console.log(val);
      // this.$refs.inform.show = false;
    },
    // 用来图表跟数据切换的
    isEchartsIsTable() {
      if (this.isExcle == "datas") {
        let wen = this.$echarts.init(document.getElementById(this.required.id));
        wen.setOption({}, true);
        document.getElementById(this.required.id + 1).style.zIndex = 1;
        let table = `<table width=100%; border=1>`;
        table += `<tr><th>555</th><th>5555</th></tr>`;
        this.required.data[0].forEach((val, inx) => {
          table += `<tr>`;
          for (let i = 0; i < this.required.data.length; i++) {
            table += `<td>${this.required.data[i][inx]}</td>`;
          }
          table += `</tr>`;
        });
        table += `</table>`;
        document.getElementById(this.required.id + 1).innerHTML = table;
      }
      if (this.isExcle == "focus") {
        document.getElementById(this.required.id + 1).style.zIndex = -1;
        document.getElementById(this.required.id + 1).innerHTML = "";
        switch (this.isvalue) {
          case "A":
            this.HomeEchartsLeft();
            break;
          case "B":
            this.HomeEchartsCenter();
            break;
          case "C":
            this.HomeEchartsRight();
            break;
          default:
            this.EchartsBottom();
            break;
        }
      }
      if (this.isExcle == "excel") {
        outExe(this.required.data);
      }
    },
    HomeEchartsLeft() {
      let HomeEchartsLeft = this.$echarts.init(
        document.getElementById(this.businessId.id[0])
      );
      this.isresizeData(HomeEchartsLeft);
      let this_ = this;
      let option = {
        title: {
          text: "实际成本",
          left: 30,
          top: 20
        },
        grid: {
          top: "20%",
          right: "40",
          left: "60",
          bottom: "40" //图表尺寸大小
        },
        xAxis: [
          {
            type: "category",
            color: "#59588D",
            data: this_.businessId.data.xAis,
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
        series: [
          {
            type: "bar",
            data: this_.businessId.data.left[0],
            barWidth: "16px",
            itemStyle: {
              normal: {
                color: function(params) {
                  //展示正值的柱子，负数设为透明
                  let colorArr = ["#1bcb90", "#0185ec", "#b9459e"];
                  return new this_.$echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: colorArr[0] // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: colorArr[1] // 100% 处的颜色
                      },
                      {
                        offset: 1,
                        color: colorArr[2] // 100% 处的颜色
                      }
                    ],
                    false
                  );
                },
                barBorderRadius: [30, 30, 30, 30] //圆角大小
              }
            }
          },
          {
            data: this_.businessId.data.left[1],
            type: "line",
            name: "折线图",
            // symbol: 'none',
            lineStyle: {
              color: "#fea2a2",
              width: 2,
              shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
              shadowBlur: 10,
              shadowOffsetY: 10
            },
            areaStyle: {
              normal: {
                color: new this_.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(73, 86, 255, 0)"
                    },
                    {
                      offset: 1,
                      color: "rgba(255, 255, 255, 0)"
                    }
                  ],
                  false
                )
              }
            }
          }
        ]
      };

      // window.addEventListener("resize", () => {
      //     HomeEcharts1.resize();
      //     HomeEcharts2.resize();
      //     HomeEcharts3.resize();
      //     HomeEcharts4.resize();
      //     HomeEcharts5.resize();
      //     HomeEcharts6.resize();
      // });
      HomeEchartsLeft.clear();
      HomeEchartsLeft.setOption(option, true);
    },
    HomeEchartsCenter() {
      let HomeEchartsCenter = this.$echarts.init(
        document.getElementById(this.businessId.id[1])
      );
      this.isresizeData(HomeEchartsCenter);
      let this_ = this;
      let index = 0;
      var colorList = ["#1fcaa8", "#15b3e2", "#f69f41", "#f2535f", "#2e65fd"];
      let option = {
        title: {
          text: "xxxxxxx",
          top: 15,
          left: 20,
          textStyle: {
            fontSize: 20
          }
        },
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
            radius: ["25%", "40%"],
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
                length: 10,
                length2: 15,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: (function() {
              let data = [];
              let title = ["特产", "小吃", "餐饮", "便利店", "加油"];
              this_.businessId.data.center[0].forEach((element, index) => {
                data.push({ name: title[index], value: element });
              });
              return data;
            })()
          }
        ]
      };

      HomeEchartsCenter.setOption(option);
    },
    HomeEchartsRight() {
      let HomeEchartsRight = this.$echarts.init(
        document.getElementById(this.businessId.id[2])
      );
      this.isresizeData(HomeEchartsRight);
      let index = 0;
      var colorList = [
        "#76c15c",
        "#15b3e2",
        "#2e65fd",
        "#1fcaa8",
        "#ee6565",
        "#fec02a"
      ];

      let option = {
        title: {
          text: "xxxxxxx",
          top: 15,
          left: 20,
          textStyle: {
            fontSize: 20
          }
        },
        tooltip: {
          trigger: "item"
        },

        legend: {
          orient: "horizontal",
          bottom: 10
        },

        series: [
          {
            type: "pie",
            center: ["48%", "50%"],
            radius: ["30%", "38%"],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 20,
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
                length: 5,
                length2: 15,
                lineStyle: {
                  width: 1
                }
              }
            },
            data: [
              {
                name: "宜昌",
                value: 1.45
              },
              {
                name: "恩施",
                value: 2.93
              },
              {
                name: "孝感",
                value: 3.15
              },
              {
                name: "咸宁",
                value: 4.78
              },
              {
                name: "十堰",
                value: 5.93
              },
              {
                name: "黄冈",
                value: 5.73
              }
            ]
          }
        ]
      };
      HomeEchartsRight.setOption(option);
    },
    EchartsBottom() {
      let echartsBottom = this.$echarts.init(
        document.getElementById(this.businessId.echartsBottoms)
      );
      this.isresizeData(echartsBottom);
      let this_ = this;
      let option = {
        title: {
          text: "公司成本种类预算成本",
          top: 20,
          left: 20
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false }
        },
        yAxis: {
          type: "category",
          data: ["北京", "上海", "天津", "深圳", "456", "7889", "99789"],
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        series: [
          {
            name: "A门店",
            type: "bar",
            stack: "总量",
            barWidth: 20,
            itemStyle: {
              normal: {
                color: new this_.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#2f96ff"
                    },
                    {
                      offset: 1,
                      color: "#dd1386"
                    }
                  ],
                  false
                ),
                barBorderRadius: [5, 5, 5, 5]
              }
            },
            label: {
              normal: {
                show: true,
                color: "#fff",
                position: "insideRight"
              }
            },
            z: 10,
            data: [320, 302, 301, 543, 320, 302, 301]
          },
          {
            name: "B门店",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#dfe5f1",
                shadowBlur: [0, 0, 0, 10],
                barBorderRadius: [5, 5, 5, 5]
              }
            },
            label: {
              normal: {
                show: true,
                color: "#000",
                position: "insideRight"
              }
            },
            z: 5,
            data: [90, 230, 210, 432, 320, 302, 301]
          },
          {
            name: "B门店",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "rgba(237,125,49, 0)",
                shadowBlur: [0, 0, 0, 10],
                barBorderRadius: [5, 5, 5, 5]
              }
            },
            label: {
              normal: {
                color: "red",
                show: true,
                position: [10, 5],
                formatter: "{c}%"
              }
            },
            z: 5,
            data: [10, 10, 10, 10, 10, 10, 10]
          }
        ]
      };
      echartsBottom.setOption(option, true);
    },
    percentage() {
      let Echarts = this.$echarts.init(
        document.getElementById(this.businessId.echartsBottoms + "w")
      );
      const handred = 100;
      let point = 66;

      let option = {
        title: {
          text: point + "%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: "#29EEF3"
          }
        },
        tooltip: {
          formatter: function(params) {
            return params.name + "：" + params.percent + " %";
          }
        },
        legend: {
          show: true,
          itemGap: 12,
          data: ["占比", "剩余"]
        },

        series: [
          {
            name: "circle",
            type: "pie",
            clockWise: true,
            radius: ["60%", "70%"],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: point,
                name: "占比",
                itemStyle: {
                  normal: {
                    color: {
                      // 颜色渐变
                      colorStops: [
                        {
                          offset: 0,
                          color: "#fdb519" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#ff735e" // 100% 处的颜色1
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                name: "剩余",
                value: handred - point,
                itemStyle: {
                  normal: {
                    color: "#E1E8EE"
                  }
                }
              }
            ]
          }
        ]
      };
      Echarts.setOption(option);
    }
    // isechartsShow(data) {
    //     // this.businessId = data;
    //     let stims = setTimeout(() => {
    //         if (data.id) {
    //             this.businessId.id = data.id;
    //             this.businessId.data = data.data;
    //             this.businessId.echartsBottoms = data.echartsBottoms;

    //             this.HomeEchartsLeft();
    //             this.HomeEchartsCenter();
    //             if(data.show){
    //                 this.HomeEchartsRight();
    //             }

    //             if (typeof this.businessId.echartsBottoms != "undefined") {
    //                 this.EchartsBottom();
    //                 this.percentage();
    //             }
    //         }
    //         window.clearTimeout(stims)
    //     }, 10);

    // }
  },
  mounted() {
    if (this.businessId.id) {
      this.HomeEchartsLeft();
      this.HomeEchartsCenter();
      this.HomeEchartsRight();
      if (typeof this.businessId.echartsBottoms != "undefined") {
        this.EchartsBottom();
        this.percentage();
      }
    }
  },
  watch: {
    "$store.state.refresh": function() {
      this.businessId.id.forEach(element => {
        document.getElementById(element).setAttribute("_echarts_instance_", "");
      });
      // document.getElementById(this.echartsBottoms).setAttribute('_echarts_instance_', '');
      this.HomeEchartsLeft(this.arra[0]);
      this.HomeEchartsCenter();
      this.HomeEchartsRight();
      if (this.echartsBottoms != 1) {
        document
          .getElementById(this.echartsBottoms)
          .setAttribute("_echarts_instance_", "");
        this.EchartsBottom();
      }
    }
  }
};
</script>
<style scoped lang="less">
#HomeEchartsLeft,
#HomeEchartsCenter,
#HomeEchartsRight {
  width: 100%;
  height: 100%;
}

.ListTable {
  width: 100%;
  height: 85%;
  position: absolute;
  top: 15%;
  left: 0;
  z-index: -10;
  overflow: auto;
}
.con {
  width: 100%;
  height: 100%;
}
.content {
  // height: 400px;

  .top {
    width: 100%;
    height: 400px;
    // padding: 20px 0;

    box-sizing: border-box;
    display: flex;
    .left {
      width: 40%;
      height: 100%;
      position: relative;
      // background: red;
      .con {
        background: url("../../assets/business/frame 1.png") no-repeat;
        background-size: 100% 100%;
      }
    }

    .center {
      width: 32%;
      height: 100%;
      margin: 0 20px;
      box-sizing: border-box;
      position: relative;
      .con {
        background: url("../../assets/business/frame 2.png") no-repeat;
        background-size: 100% 100%;
      }
    }

    .right {
      width: 28%;
      height: 100%;
      position: relative;
      .con {
        background: url("../../assets/business/frame 2.png") no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 400px;
    display: flex;
    margin-top: 20px;
    .bottomLeft {
      width: 50%;
      height: 100%;
      padding-right: 20px;
      box-sizing: border-box;
      position: relative;
      .con {
        background: url("../../assets/business/frame 1.png") no-repeat;
        background-size: 100% 100%;
      }
    }
    .bottomRight {
      width: 50%;
      height: 100%;
      // padding-top: 10px;
      background: url("../../assets/business/frame 2.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      .title {
        font-weight: bolder;
        font-size: 1.5em;
        margin-left: 1em;
        margin-bottom: 0.4em;
      }
      .proportion {
        position: absolute;
        width: 44%;
        height: 60%;
        right: 0%;
        top: 35%;
      }
      .budgetCost,
      .DistributionCosts {
        position: absolute;
        width: 25%;
        height: 25%;
        border-radius: 20px;
        color: #fff;
        p {
          margin-left: 20%;
          line-height: 3em;
          span {
            font-size: 3em;
          }
        }
      }
      .budgetCost {
        top: 35%;
        left: 5%;
        background: #0670ff;
      }
      .DistributionCosts {
        top: 55%;
        left: 35%;
        background: #03c09e;
      }
    }
  }
}
.right1:hover .information {
  display: block;
}
.left:hover .information {
  display: block;
}
.center:hover .information {
  display: block;
}
.bottomLeft:hover .information {
  display: block;
}
</style>
