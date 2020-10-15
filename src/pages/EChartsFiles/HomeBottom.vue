<template>
    <div class="content">
        <div class="tab">
            <div :class="{'btn':true,'select':select === 'A'}" @click="selectOption('A')">
                成交率
            </div>
            <div :class="{'btn':true,'select':select ==='B'}" @click="selectOption('B')">
                利<i style="display: inline-block;height: 17px;width: 100%"></i>润
            </div>
        </div>
        <div class="item HomeBottomA" @mouseover="mouseHover('AD')">
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomA"></div>
        </div>
        <div class="item HomeBottomB" @mouseover="mouseHover('BD')">
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomB"></div>
        </div>
        <div class="item HomeBottomC" @mouseover="mouseHover('CD')">
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomC"></div>
        </div>
        <div class="item HomeBottomD" @mouseover="mouseHover('DD')">
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomD"></div>
        </div>
        <div class="item HomeBottomE" @mouseover="mouseHover('ED')">
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomE"></div>
        </div>
        <div class="item HomeBottomF" @mouseover="mouseHover('FD')">
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomF"></div>
        </div>
        <div class="item HomeBottomG" @mouseover="mouseHover('GD')">
            <operations class="operations" @showOne="showOne"></operations>
            <div class="ei" id="HomeBottomG"></div>
        </div>
    </div>
</template>

<script>
    import Operations from "../common/operations";

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
                select: 'A',
                option_A: {},
                option_B: {},
            };
        },
        methods: {
            selectOption(v) {
                this.select = v;
                if (v === 'A') {
                    this.initECharts_bottom(this.option_A);
                    return
                }
                this.initECharts_bottom(this.option_B);
            },
            mouseHover(v) {
                this.option = this.AD;
            },
            showOne() {
                this.$emit('showOne', this.option);
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
                let HomeBottomF = this.$echarts.init(
                    document.getElementById("HomeBottomF")
                );
                let HomeBottomG = this.$echarts.init(
                    document.getElementById("HomeBottomG")
                );
                this.AD = option;
                HomeBottomA.setOption(option);
                HomeBottomB.setOption(option);
                HomeBottomC.setOption(option);
                HomeBottomD.setOption(option);
                HomeBottomE.setOption(option);
                HomeBottomF.setOption(option);
                HomeBottomG.setOption(option);
            }
        },
        mounted() {
            this.option_A = {
                barWidth: 10,
                grid: {
                    show: true,
                    width: "65%",
                    height: "auto",
                    left: "18%",
                    bottom: "30px"
                },
                title: {
                    text: "{a|     完成百分比}",
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
                    data: ["a", "b"],
                    icon: "circle",
                    orient: "horizontal",
                    textStyle: {
                        color: "#FFF"
                    },
                    itemWidth: 10,
                    itemHeight: 10,
                    right: 20,
                    top: 25
                },
                xAxis: [
                    {
                        type: "category",
                        data: ["a", "b", "c", "d"],
                        axisPointer: {
                            type: "shadow"
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#FFF"
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        min: 0,
                        max: 100,
                        interval: 50,
                        axisLabel: {
                            formatter: "{value}%",
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        }
                    },
                    {
                        type: "value",
                        min: 0,
                        max: 10,
                        interval: 3,
                        axisLabel: {
                            formatter: value => {
                                let arr = [
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
                                ];
                                return arr[value];
                            },
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: "a",
                        type: "line",
                        yAxisIndex: 1,
                        data: [2, 2, 9, 7]
                    },
                    {
                        name: "b",
                        type: "bar",
                        data: [
                            {
                                value: 10,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#f94356"},
                                                {offset: 0.5, color: "#ff7e6e"},
                                                {offset: 1, color: "#ffb991"}
                                            ]
                                        )
                                    }
                                }
                            },
                            {
                                value: 20,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#a62ff6"},
                                                {offset: 0.5, color: "#bd56ff"},
                                                {offset: 1, color: "#af62ff"}
                                            ]
                                        )
                                    }
                                }
                            },
                            {
                                value: 80,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#eeb008"},
                                                {offset: 0.5, color: "#f9c931"},
                                                {offset: 1, color: "#eeb008"}
                                            ]
                                        )
                                    }
                                }
                            },
                            {
                                value: 90,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#f94356"},
                                                {offset: 0.5, color: "#ff7e6e"},
                                                {offset: 1, color: "#ffb991"}
                                            ]
                                        )
                                    }
                                }
                            }
                        ]
                    }
                ]
            };
            this.option_B = {
                barWidth: 10,
                grid: {
                    show: true,
                    width: "65%",
                    height: "auto",
                    left: "18%",
                    bottom: "30px"
                },
                title: {
                    text: "{a|     完成百分比}",
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
                    data: ["a", "b"],
                    icon: "circle",
                    orient: "horizontal",
                    textStyle: {
                        color: "#FFF"
                    },
                    itemWidth: 10,
                    itemHeight: 10,
                    right: 20,
                    top: 25
                },
                xAxis: [
                    {
                        type: "category",
                        data: ["a", "b", "c", "d"],
                        axisPointer: {
                            type: "shadow"
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#FFF"
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        min: 0,
                        max: 100,
                        interval: 50,
                        axisLabel: {
                            formatter: "{value}%",
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        }
                    },
                    {
                        type: "value",
                        min: 1,
                        max: 12,
                        interval: 2,
                        axisLabel: {
                            formatter: value => {
                                let arr = [
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
                                ];
                                return arr[value];
                            },
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        }
                    }
                ],
                series: [
                    {
                        name: "a",
                        type: "line",
                        yAxisIndex: 1,
                        data: [4, 9, 6, 3]
                    },
                    {
                        name: "b",
                        type: "bar",
                        data: [
                            {
                                value: 32,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#f94356"},
                                                {offset: 0.5, color: "#ff7e6e"},
                                                {offset: 1, color: "#ffb991"}
                                            ]
                                        )
                                    }
                                }
                            },
                            {
                                value: 44,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#a62ff6"},
                                                {offset: 0.5, color: "#bd56ff"},
                                                {offset: 1, color: "#af62ff"}
                                            ]
                                        )
                                    }
                                }
                            },
                            {
                                value: 55,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#eeb008"},
                                                {offset: 0.5, color: "#f9c931"},
                                                {offset: 1, color: "#eeb008"}
                                            ]
                                        )
                                    }
                                }
                            },
                            {
                                value: 76,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                        position: "inside",
                                        color: new this.$echarts.graphic.LinearGradient(
                                            0,
                                            0,
                                            0,
                                            1,
                                            [
                                                {offset: 0, color: "#f94356"},
                                                {offset: 0.5, color: "#ff7e6e"},
                                                {offset: 1, color: "#ffb991"}
                                            ]
                                        )
                                    }
                                }
                            }
                        ]
                    }
                ]
            };
            this.initECharts_bottom(this.option_A);
        }
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
            width: 20px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .btn {
                width: 100%;
                text-align: center;
                border: 1px solid #38d;
                background: rgba(42, 57, 115, 0.7);
                border-radius: 2px;
                color: white;
                cursor: pointer;
            }

            .btn:hover {
                background: rgba(51, 136, 221, .7);
            }

            .select {
                background: rgba(51, 136, 221, .7);
            }
        }

        .item {
            width: 13.5%;
            height: 100%;
            border: 1px solid #38d;
            box-shadow: 0 0 20px #38d inset;
            position: relative;

            .ei {
                width: 100%;
                height: 100%;
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

    }
</style>
