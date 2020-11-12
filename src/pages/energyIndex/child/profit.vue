<template>
    <!--利润-->
    <div class="con">
        <el-collapse v-model="activeName">
            <el-collapse-item title="2020年利润" name="1">
                <div class="item">
                    <div class="big" id="profitA"></div>
                    <div class="medium" id="profitB"></div>
                    <div class="small" id="profitC"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="2019年利润" name="2">
                <div class="item">
                    <div class="big" id="profitD"></div>
                    <div class="medium" id="profitE"></div>
                    <div class="small" id="profitF"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="查看更多" name="3"></el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "profit",
        data() {
            return {
                activeName: ['1', '2'],
                order: ['A', 'B', 'C', 'D', 'E', 'F']
            }
        },
        methods: {
            initECharts() {
                let arr = [];
                let option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(220, 220, 220, 0.8)'
                        }
                    }]
                };
                let option_ = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        left: 'center',
                        top: 'bottom',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ]
                        }
                    ]
                };
                this.order.forEach(i => {
                    arr.push('profit' + i);
                });
                arr.forEach((item, index) => {
                    if (index === 0 || index === 3) {
                        this.$echarts.init(document.getElementById(item)).setOption(option);
                    }
                    if (index !== 0 && index !== 3) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_);
                    }
                })
            }
        },
        mounted() {
            this.initECharts();
        }
    }
</script>

<style scoped lang="less">
    .con {
        width: 100%;

        .item {
            width: 100%;
            height: 400px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            .big {
                width: 40%;
                height: 100%;
                background: white;
                border-radius: 10px;
            }

            .medium {
                width: 30%;
                height: 100%;
                background: white;
                border-radius: 10px;
            }

            .small {
                width: 27%;
                height: 100%;
                background: white;
                border-radius: 10px;
            }
        }
    }

    .con /deep/ .el-collapse > .el-collapse-item > div > .el-collapse-item__header {
        background: #737AEF;
        border-radius: 10px;
        font-size: 16px;
        height: 48px;
        line-height: 48px;
        margin: 1em 0;
        width: 100%;
        // margin: auto;
        color: white;
        border: none;
    }
    .con /deep/ .el-collapse > .el-collapse-item > .el-collapse-item__wrap {
        background-color: rgba(0, 0, 0, 0);
    }
</style>