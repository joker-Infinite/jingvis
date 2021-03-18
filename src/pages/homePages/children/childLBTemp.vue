<template>
    <div class="LBT">
        <div class="all">
            <p><span>￥5000,000</span>总应收款</p>
            <p><span>￥5000,000</span>总已收款</p>
        </div>
        <div class="chartsList">
            <div class="charts">
                <internal ref="internal" id="lb"></internal>
            </div>
            <div class="list">
                <table border="1" cellspacing="0">
                    <tr>
                        <th>板块</th>
                        <th>应收款(万元)</th>
                        <th>已收款(万元)</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="ny"></span>能源</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="fwq"></span>服务区</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="cm"></span>传媒</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                    <tr>
                        <th>
                            <div class="cube"><span class="sy"></span>商业</div>
                        </th>
                        <th>2333</th>
                        <th>2333</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Internal from "../common/internal";

    export default {
        name: "childLBTemp",
        components: {Internal},
        data() {
            return {}
        },
        methods: {
            init() {
                let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF', '#0034ff'];
                let chartData = [
                    {
                        name: "早1发",
                        value: 40083,
                    },
                    {
                        name: "正点发",
                        value: 33974,
                    },
                    {
                        name: "晚2发",
                        value: 15400,
                    },
                    {
                        name: "早点",
                        value: 11021,
                    }
                ];
                let arrName = [];
                let arrValue = [];
                let sum = 0;
                let pieSeries = [];
                let lineYAxis = [];

                chartData.forEach((v) => {
                    arrName.push(v.name);
                    arrValue.push(v.value);
                    sum = sum + v.value;
                });

                chartData.forEach((v, i) => {
                    pieSeries.push({
                        name: '回款率',
                        type: 'pie',
                        clockWise: false,
                        hoverAnimation: false,
                        radius: [75 - i * 20 + '%', 67 - i * 20 + '%'],
                        center: ["40%", "50%"],
                        label: {
                            show: false
                        },
                        data: [{
                            value: v.value,
                            name: v.name
                        }, {
                            value: sum - v.value,
                            name: '',
                            itemStyle: {
                                color: "rgba(0,0,0,0)"
                            }
                        }]
                    });
                    pieSeries.push({
                        name: '',
                        type: 'pie',
                        silent: true,
                        z: 1,
                        clockWise: false, //顺时加载
                        hoverAnimation: false, //鼠标移入变大
                        radius: [75 - i * 20 + '%', 67 - i * 20 + '%'],
                        center: ["40%", "50%"],
                        label: {
                            show: false
                        },
                        data: [{
                            value: 7.5,
                            itemStyle: {
                                color: "#E3F0FF"
                            }
                        }, {
                            value: 2.5,
                            name: '',
                            itemStyle: {
                                color: "rgba(0,0,0,0)"
                            }
                        }]
                    });
                    v.percent = (v.value / sum * 100).toFixed(1) + "%";
                    lineYAxis.push({
                        value: i,
                        textStyle: {
                            rich: {
                                circle: {
                                    color: color[i],
                                    padding: [0, 5]
                                }
                            }
                        }
                    });
                });

                let option = {
                    color: color,
                    grid: {
                        top: '12%',
                        bottom: '54%',
                        left: "40%",
                        containLabel: false
                    },
                    yAxis: [{
                        type: 'category',
                        inverse: true,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            formatter: function (params) {
                                let item = chartData[params];
                                return '{percent|' + item.percent + '}'
                            },
                            interval: 0,
                            inside: true,
                            textStyle: {
                                color: "#333",
                                fontSize: 14,
                                rich: {
                                    percent: {
                                        color: '#333',
                                        fontSize: 12,
                                        lineHeight: 12,
                                        padding: [-20, 0, 0, 0]
                                    }
                                }
                            },
                            show: true
                        },
                        data: lineYAxis
                    }],
                    xAxis: [{
                        show: false
                    }],
                    series: pieSeries
                };
                this.$refs['internal'].initECharts(option);
            }
        },
        mounted() {
            this.init();
        }
    }
</script>

<style scoped lang="less">
    .LBT {
        width: 100%;
        height: 100%;

        .all {
            width: 100%;
            line-height: 40px;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: space-around;

            p {
                span {
                    font-size: 20px;
                    font-weight: 700;
                    padding-right: 10px;
                }
            }
        }

        .chartsList {
            width: 100%;
            height: calc(100% - 42px);
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;

            .charts {
                width: 45%;
                height: 100%;
            }

            .list {
                width: 55%;
                height: 100%;

                table {
                    border-collapse: collapse;
                    width: 99%;
                    text-align: center;
                }

                table,
                th,
                td {
                    border: 1px solid #606266;
                    line-height: 2;
                    font-size: 14px;
                }

                .cube {
                    width: calc(100% - 10px);
                    height: 100%;
                    text-align: left;
                    padding-left: 10px;

                    span {
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background: red;
                        margin-right: 10px;
                    }

                    .ny {
                        background: #FF8700;
                    }

                    .fwq {
                        background: #ffc300;
                    }

                    .cm {
                        background: #00e473;
                    }

                    .sy {
                        background: #009DFF;
                    }
                }
            }
        }
    }
</style>