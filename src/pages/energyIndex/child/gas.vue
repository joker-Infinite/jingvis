<template>
    <!--加油站分布-->
    <div class="con">
        <el-collapse v-model="activeName">
            <el-collapse-item title="2020年加油站分布" name="1">
                <div class="item">
                    <div id="gasA" style="width: 98%"></div>
                    <div id="gasB" style="width: 58.5%"></div>
                    <div id="gasC" style="width: 38.5%"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="2019年加油站分布" name="2">
                <div class="item">
                    <div id="gasD" style="width: 98%"></div>
                    <div id="gasE" style="width: 58.5%"></div>
                    <div id="gasF" style="width: 38.5%"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="查看更多" name="3"></el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "gas",
        data() {
            return {
                activeName: ['1', '2'],
                order: ['A', 'B', 'C', 'D', 'E', 'F']
            }
        },
        methods: {
            initECharts() {
                let arr = [];
                this.order.forEach(i => {
                    arr.push('gas' + i);
                });
                let option_vb = {
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
                arr.forEach((item, index) => {
                    if (index === 1 || index === 4) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_vb);
                    }
                    if (index === 2 || index === 5) {
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
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-around;


        }

        .item > div {
            height: 400px;
            margin: 10px 0;
            background: white;
            border-radius: 10px;
        }

        .item > #gasA {
            height: 600px;
        }

        .item > #gasD {
            height: 600px;
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