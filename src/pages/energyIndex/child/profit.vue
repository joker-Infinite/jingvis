<template>
    <!--利润-->
    <div class="con">
        <el-collapse v-model="activeName">
            <el-collapse-item name="1">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2020年利润</span>
                </template>
                <div class="item">
                    <div class="big" id="profitA"></div>
                    <div class="medium" id="profitB"></div>
                    <div class="small" id="profitC"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">2019年利润</span>
                </template>
                <div class="item">
                    <div class="big" id="profitD"></div>
                    <div class="medium" id="profitE"></div>
                    <div class="small" id="profitF"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title">
                    <span style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px">查看更多</span>
                </template>
            </el-collapse-item>
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
                title: {
                    text: ''
                },
                barWidth: 20,
                tooltip: {
                    trigger: 'axis',
                    formatter: "{b} : {c}",
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 323, 123, 432, 54, 66, 777],
                    type: 'bar',
                    itemStyle: {
                        color: '#38A0FF'
                    },
                }]
            };
            let option_p1 = {
                title: {
                    text: '各个公司营收占比',
                    top: '20',
                    left: '5%'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {c}",
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: ['A公司', 'B公司', 'C公司', 'D公司', 'E公司']
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['40%', '60%'],
                        avoidLabelOverlap: false,
                        labelLine: {
                            normal: {
                                length: 30,
                                length2:40,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: [
                            { value: 335, name: 'A公司', itemStyle: { color: '#3AA1FF' } },
                            { value: 310, name: 'B公司', itemStyle: { color: '#59D4D4' } },
                            { value: 234, name: 'C公司', itemStyle: { color: '#4ECB73' } },
                            { value: 135, name: 'D公司', itemStyle: { color: '#F8D33D' } },
                            { value: 1548, name: 'E公司', itemStyle: { color: '#F2637B' } }
                        ]
                    }
                ]
            };
            let option_p2 = {
                title: {
                    text: '营收类型占比',
                    top: '20',
                    left: '5%'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: ['过票', '油品批发', '分销', '油品零售', '非油品零售', '其他']
                },
                
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        avoidLabelOverlap: false,
                        labelLine: {
                            normal: {
                                length: 20,
                                length2:20,
                                lineStyle: {
                                    width: 1
                                }
                            }
                        },
                        data: [
                            { value: 335, name: '过票', itemStyle: { color: '#3AA1FF' } },
                            { value: 310, name: '油品批发', itemStyle: { color: '#59D4D4' } },
                            { value: 234, name: '分销', itemStyle: { color: '#4ECB73' } },
                            { value: 135, name: '油品零售', itemStyle: { color: '#F8D33D' } },
                            { value: 1548, name: '非油品零售', itemStyle: { color: '#F2637B' } },
                            { value: 1548, name: '其他', itemStyle: { color: '#975FE5' } }
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
                    if (index === 1 || index === 4) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_p1);
                    }
                    if (index === 2 || index === 5) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_p2);
                    }

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
            padding-bottom: 10px;
            box-sizing: border-box;
        }

        .small {
            width: 27%;
            height: 100%;
            background: white;
            border-radius: 10px;
            padding-bottom: 10px;
            box-sizing: border-box;
        }
    }
}

.con /deep/ .el-collapse > .el-collapse-item > div > .el-collapse-item__header {
    background: #737aef;
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