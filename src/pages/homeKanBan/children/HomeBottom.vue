<template>
    <div class="content">
        <div class="tab">
            <div :class="{ btn: true, select: select === 'A' }" @click="selectOption('A')">
                营<i style="display: inline-block; height: 17px; width: 100%"></i>收
            </div>
            <div :class="{ btn: true, select: select === 'B' }" @click="selectOption('B')">
                利<i style="display: inline-block; height: 17px; width: 100%"></i>润
            </div>
        </div>
        <div class="item HomeBottomA" @mouseover="mouseHover('AD')">
            <div class="MMA" v-if="!AD && AD.series[0].data.length===0">
                <!-- v-if="AD.series[0].data.length===0" -->
                <!-- {{AD.series[0].data}} -->
                <!-- 平均：{{showTarget(this.AD,'average')}}<br> -->
                最高：{{showTarget(this.AD,'max')}}
                最低：{{showTarget(this.AD,'min')}}
            </div>
            <operations class="operations" @showOne="showOne"></operations>
            <div class="DataEi" id="HomeBottomAData"></div>
            <div class="ei" id="HomeBottomA"></div>
        </div>
        <div class="item HomeBottomB" @mouseover="mouseHover('BD')">
            <div class="MMA">
                <!-- 平均：{{showTarget(this.BD,'average')}}<br> -->
                最高：{{showTarget(this.BD,'max')}}
                最低：{{showTarget(this.BD,'min')}}
            </div>
            <operations class="operations" @showOne="showOne"></operations>
            <div class="DataEi" id="HomeBottomBData"></div>
            <div class="ei" id="HomeBottomB"></div>
        </div>
        <div class="item HomeBottomC" @mouseover="mouseHover('CD')">
            <div class="MMA">
                <!-- 平均：{{showTarget(this.CD,'average')}}<br> -->
                最高：{{showTarget(this.CD,'max')}}
                最低：{{showTarget(this.CD,'min')}}
            </div>
            <operations class="operations" @showOne="showOne"></operations>
            <div class="DataEi" id="HomeBottomCData"></div>
            <div class="ei" id="HomeBottomC"></div>
        </div>
        <div class="item HomeBottomD" @mouseover="mouseHover('DD')">
            <div class="MMA">
                <!-- 平均：{{showTarget(this.DD,'average')}}<br> -->
                最高：{{showTarget(this.DD,'max')}}
                最低：{{showTarget(this.DD,'min')}}
            </div>
            <operations class="operations" @showOne="showOne"></operations>
            <div class="DataEi" id="HomeBottomDData"></div>
            <div class="ei" id="HomeBottomD"></div>
        </div>
        <div class="item HomeBottomE" @mouseover="mouseHover('ED')">
            <div class="MMA">
                <!-- 平均：{{showTarget(this.ED,'average')}}<br> -->
                最高：{{showTarget(this.ED,'max')}}
                最低：{{showTarget(this.ED,'min')}}
            </div>
            <operations class="operations" @showOne="showOne"></operations>
            <div class="DataEi" id="HomeBottomEData"></div>
            <div class="ei" id="HomeBottomE"></div>
        </div>
        <!--<div class="item HomeBottomF" @mouseover="mouseHover('FD')">
            <div class="MMA">
                平均：{{showTarget(this.FD,'average')}}<br>
                最高：{{showTarget(this.FD,'max')}}
                最低：{{showTarget(this.FD,'min')}}
            </div>
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomF"></div>
        </div>-->
        <div class="item HomeBottomG" @mouseover="mouseHover('GD')">
            <operations class="operations" @showOne="showOne(1)"></operations>
            <div class="DataEi" id="HomeBottomGData"></div>
            <div class="ei" id="HomeBottomG"></div>
        </div>
    </div>
</template>

<script>
    import Operations from "../../../components/common/operations";
    import clone from "../../../../public/api/clone";

    export default {
        name: "HomeBottom",
        components: {Operations},
        data() {
            return {
                AD: {},
                BD: {},
                CD: {},
                DD: {},
                ED: {},
                FD: {},
                GD: {},
                option: {},
                select: "A",
                option_A: {},
                option_B: {},
                options: {},
                resizeData: [],
                financeTypeId: "",
                finance: []
            };
        },
        methods: {
            // 暂无数据啥的
            isNoData(is,id,option){
                if (is.length===0) {
                    option.grid.show = false;
                    option.yAxis[0].show = false;
                    option.xAxis[0].show = false;
                    document.getElementById(id._zr.dom.id+'Data').innerHTML = "暂无数据";
                } else {
                    document.getElementById(id._zr.dom.id+'Data').innerHTML = "";
                }
                this.$echarts.init(document.getElementById(id._zr.dom.id)).setOption(option);
            },
            showTarget(v, type) {
                let obj = {
                    min: '',
                    max: '',
                    average: ''
                };
                let mun = [];
                let num = 0;
                if (v && v.series) {
                    let d = v.series[0].data;
                    d.forEach(i => {
                        mun.push(i.value);
                        num += Number(i.value);
                    });
                    obj.max = Math.max(...mun);
                    obj.min = Math.min(...mun);
                    obj.average = num / d.length;
                    if (this.select === 'A') {
                        obj.max = (obj.max / 100000000).toFixed(2);
                        obj.min = (obj.min / 100000000).toFixed(2);
                        obj.average = (obj.average / 100000000).toFixed(2);
                    }
                    if (this.select === 'B') {
                        obj.max = (obj.max / 1000000).toFixed(2);
                        obj.min = (obj.min / 1000000).toFixed(2);
                        obj.average = (obj.average / 1000000).toFixed(2);
                    }
                    if (type === 'max') {
                        return obj.max;
                    }
                    if (type === 'min') {
                        return obj.min;
                    }
                    if (type === 'average') {
                        return obj.average;
                    }
                }
            },
            // 请求axios
            isAxios(url, financeTypeId, plateId, title, option, v, HomeBottom) {
                let optionss = clone(option);
                // HomeBottom.setOption(option);
                if(title === '实业公司'){
                    optionss.title.text = `{a|     ${title}}`;
                    this[v] = optionss;
                    
                    this.isNoData([],HomeBottom,optionss)
                    HomeBottom.setOption(optionss);
                }else{  
                    this.$axios.get(url, {params: {financeTypeId: this.financeTypeId, plateId: plateId},}).then((res) => {
                        optionss.title.text = `{a|     ${title}}`;
                        let xBxis = [];
                        let yAxis = [];
                        res.data.data.forEach((element) => {
                            xBxis.push(element.xBxis);
                            let Yaxis = {
                                value: element.yAxis,
                                itemStyle: {
                                    normal: {
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                            {offset: 0, color: "rgb(166,72,255,1)"},
                                            {offset: 0.5, color: "rgb(44,30,255,1)"},
                                            {offset: 1, color: "rgb(70,70,255,0)"},
                                        ]),
                                    },
                                },
                            };
                            yAxis.push(Yaxis);
                        });
    
                        optionss.xAxis[0].data = xBxis;
                        optionss.series[0].data = yAxis;
                        this[v] = optionss;
                        HomeBottom.setOption(optionss);
                        this.isNoData(res.data.data,HomeBottom,optionss)
                    });
                }
            },
            AxiosList(){
                
            },
            selectOption(v) {
                this.select = v;
                if (v === "A") {
                    this.initECharts_bottom(this.option_A);
                    this.initBottomEnd('A');
                    return;
                }
                this.initECharts_bottom(this.option_B);
                this.initBottomEnd('B');
            },
            mouseHover(v) {
                switch (v) {
                    case "AD":
                        this.option = this.AD;
                        break;
                    case "BD":
                        this.option = this.BD;
                        break;
                    case "CD":
                        this.option = this.CD;
                        break;
                    case "DD":
                        this.option = this.DD;
                        break;
                    case "ED":
                        this.option = this.ED;
                        break;
                    case "FD":
                        this.option = this.FD;
                        break;
                    default:
                        break;
                }
            },
            showOne(is) {
                let option = clone(this.option);
                let options = clone(this.options);
                // if(!!option.grid.borderWidth){
                
                // }
                if (is === 1) {
                    options.title.x = "center";
                    options.title.y = "-3%";
                    options.title.textStyle.rich.a.fontSize = 25;
                    options.barWidth = 30;
                    (options.title.padding = [50, 50, 50, 50]);
                    this.$emit("showOne", options);
                } else {
                    option.title.textStyle.rich.a.fontSize = 25;
                    option.barWidth = 30;
                    option.xAxis[0].axisLabel.rotate = 40;
                    option.title.x = "center";
                    option.title.y = "-3%";
                    option.title.padding = [50, 50, 50, 50];
                    this.$emit("showOne", option, 'MMA');
                }
            },
            initECharts_bottom(option) {
                let HomeBottomA = this.$echarts.init(
                    document.getElementById("HomeBottomA")
                );
                let HomeBottomB = this.$echarts.init(
                    document.getElementById("HomeBottomB")
                );
                let HomeBottomC = this.$echarts.init(
                    document.getElementById("HomeBottomC")
                );
                let HomeBottomD = this.$echarts.init(
                    document.getElementById("HomeBottomD")
                );
                let HomeBottomE = this.$echarts.init(
                    document.getElementById("HomeBottomE")
                );
                /* let HomeBottomF = this.$echarts.init(
                     document.getElementById("HomeBottomF")
                 );*/
                let datas = "";
                this.$axios.get("/api/jt_finance/plate_list").then((res) => {
                    datas = res.data.data;
                    this.isAxios(
                        "/api/index/liudabankuai",
                        this.financeTypeId,
                        '123',
                        '实业公司',
                        option,
                        "AD",
                        HomeBottomA
                    );
                    this.isAxios(
                        "/api/index/liudabankuai",
                        this.financeTypeId,
                        datas[8].plateId,
                        datas[8].plateName,
                        option,
                        "BD",
                        HomeBottomB
                    );
                    this.isAxios(
                        "/api/index/liudabankuai",
                        this.financeTypeId,
                        datas[3].plateId,
                        datas[3].plateName,
                        option,
                        "CD",
                        HomeBottomC
                    );
                    this.isAxios(
                        "/api/index/liudabankuai",
                        this.financeTypeId,
                        datas[4].plateId,
                        datas[4].plateName,
                        option,
                        "DD",
                        HomeBottomD
                    );
                    this.isAxios(
                        "/api/index/liudabankuai",
                        this.financeTypeId,
                        datas[0].plateId,
                        datas[0].plateName,
                        option,
                        "ED",
                        HomeBottomE
                    );
                    /*this.isAxios("/api/index/liudabankuai", this.financeTypeId, datas[5].plateId,
                        datas[5].plateName,
                        option,
                        "FD",
                        HomeBottomF
                    );*/
                });
            },
            initBottomEnd(v) {
                let HomeBottomG = this.$echarts.init(
                    document.getElementById("HomeBottomG")
                );
                let option = {
                    barWidth: 10,
                    title: {
                        x: "center",
                        y: '',
                        text: "{a|     收益率}",
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
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
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
                        data: ["a公司", "b公司", "c公司", "d公司", "e公司"],
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
                                formatter: "{b}",
                            },
                            data: [0.6, 0.7, 8, 0.9, 1],
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
                                            formatter: "数据平均 : 100",
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
                };
                let financeTypeId = '';
                if (v === 'A') {
                    financeTypeId = this.finance[1].financeTypeId;
                }
                if (v === 'B') {
                    financeTypeId = this.finance[0].financeTypeId;
                }
                this.$axios('/api/index/wan_cheng_lv', {params: {financeTypeId: financeTypeId}}).then((res) => {
                    let datas = res.data.data
                    datas.sort(function (a, b) {
                        return a.xBxis - b.xBxisb
                    });
                    let xBxis = [];
                    let yAxis = [];
                    datas.forEach((element) => {
                        xBxis.push(element.xBxis)
                        yAxis.push(element.yAxis)
                    });
                    option.yAxis.data = yAxis;
                    option.series[0].data = xBxis;
                    this.options = clone(option);
                    let average = 0;
                    this.options.series[0].data.forEach(i => {
                        average += Number(i);
                    })
                    average = parseInt(average / this.options.series[0].data.length);
                    // this.options.series[0].markLine.data = [{
                    //     type: "average",
                    //     name: "平均值",
                    //     xAxis: average, //设置平均值所在位置
                    // }]
                    // this.options.series[0].markLine.itemStyle.normal.label = {
                    //     show: true,
                    //     position: "middle",
                    //     formatter: "数据平均 : " + average
                    // }
                    HomeBottomG.setOption(option);
                })


            },
            isResize() {
                this.resizeData.forEach((element) => {
                    element.resize();
                });
            },
        },
        mounted() {
            this.option_A = {
                barWidth: 10,
                grid: {
                    show: true,
                    top: "33%",
                    left: "18%",
                    right: "8%",
                    bottom: "20%",
                },
                title: {
                    text: "{a|     }",
                    show: true,
                    x: "center",
                    y: '-1%',
                    textStyle: {
                        fontFamily: "幼圆",
                        lineHeight: 20,
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
                        type: "line",
                        lineStyle: {
                            color: "red",
                            width: 1,
                        },
                    },
                    formatter: function (list) {
                        return ("营收" + ":" + "<br/>" + list[0].axisValue + "<br/>" + (list[0].value / 100000000).toFixed(2) + "亿元");
                    },
                },
                color: ["red", "#a549ff"],
                xAxis: [
                    {
                        show:true,
                        type: "category",
                        data: [],
                        axisPointer: {
                            type: "shadow",
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        show:true,
                        name: "亿",
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#fff",
                            },
                        },
                        type: "value",
                        axisLabel: {
                            formatter: function (val) {
                                return val / 100000000;
                            },
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false,
                        },
                        splitLine: {
                            lineStyle: {
                                type: "dashed",
                                color: "#001e6c",
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: "营收",
                        type: "line",
                        data: [],
                    },
                ],
            };
            this.option_B = {
                barWidth: 10,
                grid: {
                    show: true,
                    top: "33%",
                    left: "18%",
                    right: "8%",
                    bottom: "20%",
                },
                title: {
                    text: "{a|     }",
                    show: true,
                    x: "center",
                    y: '-2.2%',
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
                    axisPointer: {
                        type: "line",
                        lineStyle: {
                            color: "red",
                            width: 1,
                            // shadowBlur:5,
                            // opacity:1
                        },
                    },
                    formatter: function (list) {
                        return ("利润" + ":" + "<br/>" + list[0].axisValue + "<br/>" + (list[0].value / 1000000).toFixed(2) + "百万");
                    },
                },
                color: ["red", "#a549ff"],
                xAxis: [
                    {
                        type: "category",
                        data: [],
                        axisPointer: {
                            type: "shadow",
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false,
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        name: "百万",
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#fff",
                            },
                        },
                        type: "value",
                        axisLabel: {
                            formatter: function (val) {
                                return val / 1000000;
                            },
                            textStyle: {
                                color: "#FFF",
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            lineStyle: {
                                type: "dashed",
                                color: "#001e6c",
                            },
                        },
                    },
                ],
                series: [{
                    name: "营收",
                    type: "line",
                    data: [],
                }],
            };
            this.$axios.get("/api/index/finance_type_list").then((res) => {
                this.finance = res.data.data;
                this.financeTypeId = res.data.data[1].financeTypeId;
                this.initBottomEnd('A');
            });
            this.initECharts_bottom(this.option_A);

        },
    };
</script>

<style scoped lang="less">
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        flex-direction: row;

        .tab {
            width: 30px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .btn {
                width: 100%;
                height: 40%;
                text-align: center;
                // border: 1px solid #38d;
                // background: rgba(42, 57, 115, 0.7);
                border-radius: 2px;
                color: white;
                cursor: pointer;
                background: url("../../../assets/frame3.png") no-repeat;
                background-size: 100% 100%;
                padding-top: 0.5em;
            }

            .btn:hover {
                // background: rgba(51, 136, 221, .7);
                color: #ffc363;
            }

            .select {
                color: #ffc363;
                // background: rgba(51, 136, 221, .7);
            }
        }

        .item {
            width: 16%;
            height: 100%;
            border: 1px solid #38d;
            box-shadow: 0 0 20px #38d inset;
            position: relative;
            background: url("../../../assets/frame2.png") no-repeat;
            background-size: 100% 120%;

            .ei {
                width: 100%;
                height: 100%;
                

            }

            .MMA {
                width: 55%;
                position: absolute;
                top: 14%;
                right: 0;
                text-align: left;
                font-size: 12px;
                color: white;
            }
        }

        .HomeBottomA:hover .operations {
            display: block;
        }

        .HomeBottomB:hover .operations {
            display: block;
        }

        .HomeBottomC:hover .operations {
            display: block;
        }

        .HomeBottomD:hover .operations {
            display: block;
        }

        .HomeBottomE:hover .operations {
            display: block;
        }

        .HomeBottomF:hover .operations {
            display: block;
        }

        .HomeBottomG:hover .operations {
            display: block;
        }
        .DataEi{
            color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 80px;
            height: 20px;
            font-weight: 700;
            font-size: 20px;
        }
    }
</style>
