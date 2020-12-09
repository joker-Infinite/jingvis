<template>
    <div class="content">
        <div class="top tcb" @mouseover="mouseHover('AD')">
            <border v-if="backdrop==0"></border>
            <border-plan-b v-if="backdrop==1"></border-plan-b>
            <operations class="operations" @showOne="showOne"></operations>
            <div id="initECharts_top_data"></div>
            <div id="HomeTopLeft_top"></div>
        </div>
        <div class="center tcb" @mouseover="mouseHover('BD')">
            <border v-if="backdrop==0"></border>
            <border-plan-b v-if="backdrop==1"></border-plan-b>
            <operations class="operations" @showOne="showOne"></operations>
            <div id="HomeTopLeft_center_data"></div>
            <div id="HomeTopLeft_center"></div>
        </div>
        <div class="bottom tcb" @mouseover="mouseHover('CD')">
            <border v-if="backdrop==0"></border>
            <border-plan-b v-if="backdrop==1"></border-plan-b>
            <operations class="operations" @showOne="showOne"></operations>
            <div id="initECharts_bottom_data"></div>
            <div id="HomeTopLeft_bottom"></div>
        </div>
        <show-e-charts ref="showECharts" :backdrop="backdrop"></show-e-charts>
    </div>
</template>

<script>
    import Operations from "../../../components/common/operations";
    import ShowECharts from "../../../components/common/showECharts";
    import clone from "../../../../public/api/clone"
    import Border from "./border";
    import BorderPlanB from "./borderPlanB";
    export default {
        name: "HomeTopLeft",
        props: {
            backdrop: {
                type: Number,
                default: 0
            }
        },
        components: {BorderPlanB, Border, ShowECharts, Operations},
        data() {
            return {
                AD: {},
                BD: {},
                CD: {},
                option: {},
                company: []
            };
        },
        methods: {
            mouseHover(v) {
                this.option = this[v];
            },
            isNoData(is, id, ids, option) {
                if (is.length === 0) {
                    document.getElementById(id).innerHTML = "暂无数据";
                    option.xAxis[0].show = false;
                    option.yAxis[0].show = false;
                    this.$echarts.init(document.getElementById(ids)).setOption(option);
                } else {
                    document.getElementById(id).innerHTML = "";
                    this.$echarts.init(document.getElementById(ids)).setOption(option);
                }
            },
            showOne(is) {
              /*  console.log(this.option.yAxis.data)
                if (this.option.yAxis[0].data) {
                    this.option.yAxis[0].data.forEach((element, index) => {
                        this.option.yAxis[0].data[index] = this.company[index]
                    });
                }*/
                // 修改柱状图的粗细
                this.option.barWidth = 30;
                // 修改title中文字的大小
                this.option.title.textStyle.rich.a.fontSize = 30;
                // 修改title的边距
                this.option.title.padding = [50, 50, 50, 50];
                this.option.title.x = "center";
                this.option.title.y = "-2.5%";
                // this.option.legend.right = "50";
                // this.option.legend.textStyle.fontSize = "20";
                // this.option.legend.itemHeight = 15;
                // this.option.legend.itemWidth = 15;
                this.$refs["showECharts"].openDialog(this.option);
            },
            initECharts_top() {
                let HomeTopLeft_top = this.$echarts.init(
                    document.getElementById("HomeTopLeft_top")
                );
                 let option = (this.AD = {
                    barWidth: 10,
                    title: {
                        x: "center",
                        y: '',
                        text: "{a|     执行率}",
                        show: true,
                        textStyle: {
                            fontFamily: "幼圆",
                            lineHeight: 25,
                            rich: {
                                a: {
                                    color: "#FFF",
                                    fontSize: "15",
                                    height: 15,
                                    width: 15,
                                },
                            },
                        },
                    },
                    tooltip: {
                        trigger: "axis",
                        formatter: "{b}" + "{c}" + '%',
                        axisPointer: {
                            type: "shadow",
                        },
                    },
                    grid: {
                        top: "15%",
                        bottom: 30,
                    },
                    xAxis: {
                        type: "value",
                        position: "bottom",
                        axisTick: {
                            //坐标轴刻度
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                        splitLine: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: "#FFF",
                            },
                        },
                    },
                    yAxis: {
                        type: "category",
                        axisLine: {show: false},
                        axisLabel: {show: false},
                        axisTick: {show: false},
                        splitLine: {show: false},
                        data: [],
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
                                            color: "rgba(192,42,84,1)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(127,69,224,1)",
                                        },
                                    ]),
                                },
                            },
                            label: {
                                show: true,
                                position: 'insideLeft',
                                color: '#fff',
                                formatter: '{b}'
                            },
                            data: [],
                            markLine: {
                                data: [],
                                symbol: ["none", "none"],
                                position: "insideTopCenter",
                                itemStyle: {
                                    normal: {
                                        lineStyle: {
                                            type: "dotted",
                                            color: "white",
                                        },
                                        label: {
                                            show: false,
                                            position: "middle",
                                            formatter: "数据平均 :",
                                        },
                                    },
                                },
                                large: true,
                                effect: {
                                    show: false,
                                    loop: true,
                                    period: 0,
                                    scaleSize: 2,
                                    color: null,
                                    shadowColor: null,
                                    shadowBlur: null,
                                },
                            },
                        },
                    ],
                });
                var sum = 0;
                this.$axios.get('/api/index/rate_list',{params:{type:'ys'}}).then(res=>{
                    let rateCount = [];
                    let xBxis = [];
                    res.data.data.forEach(element => {
                        rateCount.unshift(element.rateCount)
                        xBxis.unshift(element.plateName)
                    });
                    option.series[0].data = rateCount;
                    option.yAxis.data = xBxis
                    HomeTopLeft_top.setOption(option);
                    this.isNoData(res.data.data, 'initECharts_top_data', 'HomeTopLeft_top', option)
                })
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
                        formatter: function (list) {
                            return list[0].name + '月' + ":" + '<br>' + '金额:' + money[list[0].dataIndex] + '元' + '<br>' + "占比:" + list[0].value + '%';
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
                    barWidth: 10, //设置柱状图的粗细
                    xAxis: [
                        {
                            type: "category",
                            data: [],
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
                                formatter: function (val) {
                                    let data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
                                    return data[parseInt(val) - 1] + '月'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            axisLine: {
                                lineStyle: {
                                    color: "#6691ff"
                                }
                            },
                            axisLabel: {
                                formatter: function (val) {
                                    return val + '%'
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
                    ],
                    grid: {
                        width: "auto",
                        height: "55%",
                        top: "30%",
                        left: '20%',
                    },
                    series: [
                        {
                            name: "金额",
                            type: "line",
                            data: [],
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
                var sum = 0;
                var money = []
                this.$axios.get('/api/index/list_jtsupplier_groupnian').then((res) => {
                    res.data.data.forEach(element => {
                        sum += parseFloat(element.yAxis)
                    });
                    res.data.data.forEach(element => {
                        option.xAxis[0].data.push({
                            value: element.xBxis,
                            textStyle: {
                                fontSize: "12px"
                            }
                        });
                        option.series[0].data.push(((element.yAxis) / sum * 100).toFixed(2))
                        money.push(element.yAxis)
                    });
                    HomeTopLeft_center.setOption(option);
                    this.isNoData(res.data.data, 'HomeTopLeft_center_data', 'HomeTopLeft_center', option)
                })
            },
            initECharts_bottom() {
                let HomeTopLeft_bottom = this.$echarts.init(
                    document.getElementById("HomeTopLeft_bottom")
                );
                let max = 0;
                let option = ({
                    barWidth: "10", //设置柱状图的粗细
                    tooltip: {
                        trigger: "axis",
                        formatter: function (val) {
                            return company[val[0].dataIndex] + '欠款:' + val[0].value + "元";
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
                            // min: 0,
                            // max: 250,
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
                            data: [],
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
                            },
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
                            data: [],
                            type: "bar",
                            color: "rgba(208,137,208,0.5)",
                            showBackground: true,
                            // backgroundStyle: {
                            //     color: "rgba(255,255,255,0.2)"
                            // },
                            barCategoryGap: "100%",
                            markLine: {
                                data: [],
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
                                            formatter: "数据平均 : "
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
                var sum = 0;
                let company = []
                this.$axios.get('/api/index/jtsupplier_arrears_topfive').then((res) => {
                    res.data.data.sort(function (a, b) {
                        return a.xBxis - b.xBxis;
                    })
                    let color = ["#00df4b", "#008bf7", "#ffb541", "#ff6a6a", "#ff6a8a"]
                    res.data.data.forEach((element, index) => {
                        sum += parseFloat(element.xBxis)
                        option.yAxis[0].data.unshift(index + 1)
                        option.series[0].data.push({
                            value: element.xBxis,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30, //设置柱状图为圆角
                                    color: color[index]
                                }
                            }
                        })
                        this.company.push(element.yAxis)
                        company.push(element.yAxis)
                    });
                    this.CD = clone(option);
                    let average = 0;
                    this.CD.series[0].data.forEach(i => {
                        average += Number(i.value);
                    });
                    average = average / this.CD.series[0].data.length;
                    this.CD.series[0].markLine.data = [{
                        type: "average",
                        name: "平均值",
                        xAxis: average //设置平均值所在位置
                    }];
                    this.CD.series[0].markLine.itemStyle.normal.label = {
                        show: true,
                        position: "middle",
                        formatter: "数据平均 : " + average
                    };
                    this.CD.series[0].markLine.itemStyle.normal.label.formatter = "数据平均 : " + sum / res.data.data.length
                    HomeTopLeft_bottom.setOption(option);
                    this.isNoData(res.data.data, 'initECharts_bottom_data', 'HomeTopLeft_bottom', option)
                })
            }
        },
        mounted() {
            this.initECharts_top();
            this.initECharts_center();
            this.initECharts_bottom();
            // setInterval(_ => {
            //     this.$echarts.init(document.getElementById('HomeTopLeft_top')).dispose();
            //     this.$echarts.init(document.getElementById('HomeTopLeft_bottom')).dispose();
            //     this.$echarts.init(document.getElementById('HomeTopLeft_center')).dispose();
            //     this.$nextTick(_ => {
            //         this.initECharts_bottom();
            //         this.initECharts_center();
            //         this.initECharts_top();
            //     })
            // }, 10000)
        },
        watch: {
            backdrop: {
                handler: function (nv, ov) {
                    let data = document.getElementsByClassName('tcb');
                    let style = [
                        {
                            border: '1px solid #4cbcf4',
                            boxShadow: ' 0 0 50px #4cbcf4 inset'
                        },
                        {
                            border: '1px solid #051021',
                            boxShadow: ' 0 0 20px #0354bb inset',
                            background: 'rgba(6,17,36,.6)'
                        },
                        {
                            border: 'none',
                            boxShadow: 'none',
                            background: '#FFF',
                            borderRadius:'10px'
                        },
                    ];
                    for (let i = 0; i < data.length; i++) {
                        Object.assign(data[i].style, style[nv])
                    }
                },
                deep:true
            }
        }
    };
</script>

<style scoped lang="less">
    #HomeTopLeft_center_data,
    #initECharts_top_data,
    #initECharts_bottom_data {
        position: absolute;
        width: 80px;
        height: 20px;
        color: #fff;
        font-size: 20px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
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
            border: 1px solid #4cbcf4;
            box-shadow: 0 0 20px #4cbcf4 inset;
            position: relative;
            /*background: url("../../../assets/small.png") no-repeat;*/
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
            border: 1px solid #4cbcf4;
            box-shadow: 0 0 50px #4cbcf4 inset;
            position: relative;
            /*background: url("../../../assets/small.png") no-repeat;*/
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
            border: 1px solid #4cbcf4;
            box-shadow: 0 0 50px #4cbcf4 inset;
            position: relative;
            /*background: url("../../../assets/small.png") no-repeat;*/
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
