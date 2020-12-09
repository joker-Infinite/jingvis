<template>
    <div class="content">
        <div class="top hhttf" @mouseover="mouseHover('AD')"
             v-loading="loading_"
             element-loading-text="拼命加载中……"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.5)">
            <border v-if="backdrop==0"></border>
            <border-plan-b v-if="backdrop==1"></border-plan-b>
            <operations class="operations" time="time" @showOne="showOne(1)"></operations>
            <div id="HomeTopRight_top"></div>
            <div class="DataEi" id="HomeTopRight_topData"></div>
        </div>
        <div style="width: 100%;height: 2%"></div>
        <div class="bottom">
            <div class="bottom_left hhttf" @mouseover="mouseHover('BD')"
                 v-loading="loading"
                 element-loading-text="拼命加载中……"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.5)">
                <border v-if="backdrop==0"></border>
                <border-plan-b v-if="backdrop==1"></border-plan-b>
                <div class="select_type">
                    <el-radio class="checkboxItem" @change="changeRadioBD(1)" v-model="selectBD" :label="1">服务区
                    </el-radio>
                    <el-radio class="checkboxItem" @change="changeRadioBD(2)" v-model="selectBD" :label="2">自营油站
                    </el-radio>
                    <el-radio class="checkboxItem" @change="changeRadioBD(3)" v-model="selectBD" :label="3">自营超市
                    </el-radio>
                    <el-radio class="checkboxItem" @change="changeRadioBD(4)" v-model="selectBD" :label="4">服务区招商
                    </el-radio>
                </div>
                <operations class="operations" @showOne="showOne('query')"></operations>
                <div class="operation">
                    <el-radio class="checkboxItem" @change="changeRadioCD(1,'营收')" v-model="selectCD" :label="1">营收
                    </el-radio>
                    <el-radio class="checkboxItem" @change="changeRadioCD(2,'利润')" v-model="selectCD" :label="2">利润
                    </el-radio>
                    <el-radio class="checkboxItem" @change="changeRadioCD(3,'客单价')" v-model="selectCD" :label="3">客单价
                    </el-radio>
                    <el-radio class="checkboxItem" @change="changeRadioCD(4,'订单数')" v-model="selectCD" :label="4">订单数
                    </el-radio>
                    <el-radio class="checkboxItem" @change="changeRadioCD(5,'转化率')" v-model="selectCD" :label="5">转化率
                    </el-radio>
                </div>
                <div id="HomeTopRight_bottom_left"></div>
                <div class="DataEi" id="HomeTopRight_bottom_leftData"></div>
            </div>
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
        name: "HomeTopRight",
        props: {
            backdrop: {
                type: Number,
                default: 0
            }
        },
        components: {BorderPlanB, Border, ShowECharts, Operations},
        data() {
            return {
                selectBD: 2,
                selectCD: 1,
                AD: {},
                BD: {},
                CD: {},
                option: {},
                resizeData: [],
                loading: false,
                loading_: false,
            };
        },
        methods: {
            mouseHover(v) {
                this.option = this[v];
            },
            isNoData(is, id, option) {
                if (is.length === 0) {
                    document.getElementById(id + 'Data').innerHTML = "暂无数据";
                    option.xAxis[0].show = false;
                    option.yAxis[0].show = false;
                    this.$echarts.init(document.getElementById(id)).setOption(option);
                } else {
                    document.getElementById(id + 'Data').innerHTML = "";
                    this.$echarts.init(document.getElementById(id)).setOption(option);
                }
            },
            showOne(is) {
                if (is === 1) {
                    this.AD.title.textStyle.rich.a.fontSize = 25;
                    this.AD.title.y = "4%";
                    this.$refs["showECharts"].openDialog(this.AD, "time");
                    this.$refs["showECharts"].isShow = false;
                    this.$refs["showECharts"].timeSelect = true;
                } else {
                    this.option.title.padding = 50;
                    this.option.title.textStyle.rich.a.fontSize = 25;
                    (this.option.title.x = "center"), (this.option.title.y = "-3%");
                    this.option.barWidth = 30;
                    this.option.grid.top = "20%";
                    this.$refs["showECharts"].timeSelect = false;
                    this.$refs["showECharts"].isShow = true;
                    this.$refs["showECharts"].openDialog(this.option, is, {
                        selectBD: this.selectBD,
                        selectCD: this.selectCD
                    });
                }
            },
            changeRadioBD(v) {
                this.selectCD = 1;
                this.initECharts_bottom_left()
            },
            changeRadioCD(v, m) {
                this.initECharts_bottom_left(m)
            },
            initECharts_top() {
                this.loading_ = true;
                let HomeTopRight_top = this.$echarts.init(
                    document.getElementById("HomeTopRight_top")
                );
                this.resizeData.push(HomeTopRight_top);
                let option = this.AD = {
                    title: {
                        text: "{a|     消费转化}",
                        show: true,
                        x: "center",
                        textStyle: {
                            fontFamily: "幼圆",
                            lineHeight: 15,
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
                        trigger: "item",
                        triggerOn: "mousemove",
                    },
                    series: {
                        type: "sankey",
                        right: "20%",
                        top: "20%",
                        nodeGap: 50,
                        focusNodeAdjacency: "allEdges",
                        label: {
                            color: "#FFF",
                            formatter: '{b}'
                        },
                        data: [
                            {
                                name: "车型",
                            },
                            {
                                name: "大形车",
                            },
                            {
                                name: "小形车",
                            },
                        ],
                        links: [
                            {
                                source: "车型",
                                target: "大形车",
                                value: 5,
                            },
                            {
                                source: "车型",
                                target: "小形车",
                                value: 5,
                            },
                        ],
                        levels: [
                            {
                                depth: 0,
                                itemStyle: {
                                    color: "#ff82ce",
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.5,
                                },
                            },
                            {
                                depth: 1,
                                itemStyle: {
                                    color: "#00aeff",
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6,
                                },
                            },
                            {
                                depth: 2,
                                itemStyle: {
                                    color: "#ff9214",
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6,
                                },
                            },
                            {
                                depth: 3,
                                itemStyle: {
                                    color: "#f5eb4c",
                                },
                                lineStyle: {
                                    color: "source",
                                    opacity: 0.6,
                                },
                            },
                        ]
                    },
                };
                this.$axios.get('/api/jtService/station_order_money').then((res) => {
                    let name = [];
                    let links = [];
                    name.push({name: '车型'});
                    res.data.forEach(item => {
                        item.moneyVoList.forEach(it => {
                            name.push({name: it.goodsType});
                            links.push({
                                source: it.goodsType,
                                target: item.sizeCar,
                                value: it.count,
                            })
                        });
                        links.push({
                            source: item.sizeCar,
                            target: '车型',
                            value: parseInt(item.sumJvCount),
                        })
                        name.push({name: item.sizeCar});
                    });
                    option.series.data = name;
                    option.series.links = links;
                    HomeTopRight_top.setOption(option);
                    this.loading_ = false;
                })

            },
            isAxiosw(echarts, option) {
                let params = {companyType: 'service', orderType: '营收', size: 6}
                this.loading = true;
                switch (this.selectBD) {
                    case 1:
                        params.companyType = 'service'
                        break;
                    case 2:
                        params.companyType = 'station'
                        break;
                    default:
                        break;
                }
                switch (this.selectCD) {
                    case 1:
                        params.orderType = '营收'
                        break;
                    case 2:
                        params.orderType = '利润'
                        break;
                    case 4:
                        params.orderType = 'orderCount'
                        break;
                    default:
                        break;
                }
                this.$axios.get('/api/jtService/order', {params: params}).then(res => {
                    let yAxis = [];
                    let xAxis = [];
                    res.data.forEach(element => {
                        yAxis.unshift(element.serviceName);
                        xAxis.unshift((element.sumMoney / 10000).toFixed(2))
                    });
                    option.yAxis.data = yAxis;
                    option.series[0].data = xAxis;
                    console.log(xAxis)
                    this.BD = option;
                    echarts.setOption(option);
                    this.loading = false;
                })
            },
            initECharts_bottom_left(m) {
                let HomeTopRight_bottom_left = this.$echarts.init(
                    document.getElementById("HomeTopRight_bottom_left")
                );
                this.resizeData.push(HomeTopRight_bottom_left);
                let average = 0;
                let option = ({
                    barWidth: 20,
                    title: {
                        text: "{a|     经营排行}",
                        y: "6",
                        show: true,
                        textStyle: {
                            fontFamily: "幼圆",
                            lineHeight: 30,
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
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                        },
                    },
                    grid: {
                        top: "25%",
                        bottom: 50,
                    },
                    xAxis: {
                        name: '万',
                        type: "value",
                        position: "bottom",
                        axisTick: {
                            //坐标轴刻度
                            show: false,
                        },
                        axisLabel: {
                            interval: 20,
                            rotate: 45, //代表逆时针旋转45度
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                        splitLine: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: "#FFF",
                            },
                        }
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
                            name: !m ? '收入' : m == '营收' ? '收入' : m,
                            type: "bar",
                            stack: "总量",
                            itemStyle: {
                                normal: {
                                    // barBorderRadius: 30, //设置柱状图为圆角
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {
                                            offset: 0.3,
                                            color: "#4760ff",
                                        },
                                        {
                                            offset: 0.6,
                                            color: "#0dccff",
                                        },
                                        {
                                            offset: 1,
                                            color: "#36a6f9",
                                        },
                                    ]),
                                },
                            },
                            label: {
                                show: true,
                                formatter: "{b}",
                                position: 'insideLeft',
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
                this.BD = clone(option)
                this.isAxiosw(HomeTopRight_bottom_left, option)
            },
            isResize() {
                this.resizeData.forEach((element) => {
                    element.resize();
                });
            },
        },
        mounted() {
            this.initECharts_top();
            // this.initECharts_bottom();
            this.initECharts_bottom_left();
            // this.initECharts_bottom_right();
        },
        watch: {
            backdrop: {
                handler: function (nv, ov) {
                    let data = document.getElementsByClassName('hhttf');
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
                            borderRadius: '10px'
                        },
                    ];
                    for (let i = 0; i < data.length; i++) {
                        Object.assign(data[i].style, style[nv])
                    }
                },
                deep: true
            }
        }
    };
</script>

<style scoped lang="less">
    .DataEi {
        position: absolute;
        top: 0;
        margin: 0;
    }

    .content /deep/ .el-radio {
        padding: 0;
        margin: 0;
        // margin-left: .3em;
    }

    .content /deep/ .el-radio__label {
        padding: 0;
        margin-left: 0.2em;
    }

    .content /deep/ .el-radio {
        margin-right: 1em;
    }

    .content {
        width: 100%;
        height: 100%;

        .top {
            width: 100%;
            height: 38%;
            position: relative;
            border: 1px solid #4cbcf4;
            box-shadow: 0 0 50px #4cbcf4 inset;
            /*background: url("../../../assets/kuang_07.png") no-repeat;*/
            background-size: 100% 100%;

            #HomeTopRight_top {
                width: 70%;
                height: 100%;
            }
        }

        .top:hover .operations {
            display: block;
        }

        .bottom {
            width: 100%;
            height: 56%;
            margin-top: 2.5%;

            .bottom_left {
                width: 100%;
                height: 100%;
                float: left;
                position: relative;
                border: 1px solid #4cbcf4;
                box-shadow: 0 0 50px #4cbcf4 inset;
                /*background: url("../../../assets/kuang_10.png") no-repeat;*/
                background-size: 100% 100%;

                .select_type {
                    width: 90%;
                    position: absolute;
                    top: 15%;
                    left: 5%;
                    z-index: 999;
                    font-size: 12px !important;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .checkboxItem {
                        width: 25%;
                        color: white;
                    }

                    .el-radio__label {
                        margin-right: 0;
                    }
                }

                .select_type /deep/ .el-radio {
                    margin-right: 0;
                }

                #HomeTopRight_bottom_left {
                    width: 85%;
                    height: 100%;
                }

                .operation {
                    width: 17%;
                    float: right;
                    text-align: center;
                    padding: 35% 0 0;
                }

                .operation /deep/ .el-radio {
                    color: white;
                    padding: 5px 10px;
                    width: 100%;
                }

                .operation /deep/ .el-radio > .el-radio__input {
                    display: none;
                }
            }

            .bottom_left:hover .operations {
                display: block;
            }

            .bottom_right {
                width: 48%;
                height: 100%;
                border: 1px solid #38d;
                box-shadow: 0 0 20px #38d inset;
                float: right;
                position: relative;
                /*background: url("../../../assets/frame2.png") no-repeat;*/
                background-size: 100% 100%;

                .select_type {
                    width: 90%;
                    position: absolute;
                    top: 15%;
                    left: 5%;
                    z-index: 999;
                    font-size: 12px !important;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .checkboxItem {
                        width: 50%;
                        color: white;
                    }

                    .el-radio__label {
                        margin-right: 0;
                    }
                }

                .select_type /deep/ .el-radio {
                    margin-right: 0;
                }

                #HomeTopRight_bottom_right {
                    height: 100%;
                    width: 100%;
                }
            }

            .bottom_right:hover .operations {
                display: block;
            }
        }
    }
</style>
