<template>
    <div class="LTT">
        <internal ref="internal" id="lt" style="width: 50%"></internal>
        <div style="width: 50%;height: 100%">
            <div class="buttonGroup">
                <el-button>服务区</el-button>
                <el-button>传媒</el-button>
                <el-button>商业</el-button>
                <el-button>能源</el-button>
            </div>
            <div class="information">
                <p>实际金额<span>1233万元</span></p>
                <p>预算金额<span>2000万元</span></p>
                <p>实际控制率<span>60%</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import Internal from "../common/internal";

    export default {
        name: "childLTTemp",
        components: {Internal},
        data() {
            return {}
        },
        methods: {
            init() {
                let op = {
                    backgroundColor: this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
                        offset: 0,
                        color: '#431ab8'
                    }, {
                        offset: 1,
                        color: '#471bba'
                    }]),
                    title: {
                        text: (0.3 * 100).toFixed(0) + '{a|%}',
                        textStyle: {
                            fontSize: 50,
                            fontFamily: 'Microsoft Yahei',
                            fontWeight: 'normal',
                            color: '#bcb8fb',
                            rich: {
                                a: {
                                    fontSize: 28,
                                }
                            }
                        },
                        x: 'center',
                        y: '35%'
                    },
                    graphic: [{
                        type: 'group',
                        left: 'center',
                        top: '60%',
                        children: [{
                            type: 'text',
                            z: 100,
                            left: '10',
                            top: 'middle',
                            style: {
                                fill: '#aab2fa',
                                text: '流量统计',
                                font: '20px Microsoft YaHei'
                            }
                        }]
                    }],
                    series: [{
                        type: 'liquidFill',
                        radius: '80%',
                        center: ['50%', '50%'],
                        //  shape: 'roundRect',
                        data: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
                        backgroundStyle: {
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0.5,
                                y2: 1,
                                colorStops: [{
                                    offset: 1,
                                    color: 'rgba(68, 145, 253, 0)'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(68, 145, 253, .25)'
                                }, {
                                    offset: 0,
                                    color: 'rgba(68, 145, 253, 1)'
                                }],
                                globalCoord: false
                            },
                        },
                        outline: {
                            borderDistance: 0,
                            itemStyle: {
                                borderWidth: 20,
                                borderColor: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(69, 73, 240, 0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(69, 73, 240, .25)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(69, 73, 240, 1)'
                                    }],
                                    globalCoord: false
                                },
                                shadowBlur: 10,
                                shadowColor: '#000',
                            }
                        },
                        itemStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 1,
                                    color: 'rgba(58, 71, 212, 0)'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(31, 222, 225, .2)'
                                }, {
                                    offset: 0,
                                    color: 'rgba(31, 222, 225, 1)'
                                }],
                                globalCoord: false
                            },
                        },
                        label: {
                            normal: {
                                formatter: '',
                            }
                        }
                    },]
                }
                this.$refs['internal'].initECharts(op);
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped lang="less">
    .LTT {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: flex-start;

        .buttonGroup {
            width: 100%;

            /deep/ .el-button {
                margin: 10px 0 0 10px;
                border: none;
                padding: 10px 0;
                width: 100px;
                border-radius: 0;
            }
        }

        .information {
            width: 100%;

            p {
                width: 100%;
                line-height: 30px;

                span {
                    font-size: 20px;
                    font-weight: 700;
                    padding-left: 15px;
                }
            }
        }
    }
</style>