<template>
    <!--批零差价-->
    <div class="con">
        <el-collapse v-model="activeName">
            <el-collapse-item title="2020年批零差价" name="1">
                <div class="item">
                    <div style="width: 98%;" id="wholesaleA"></div>
                    <div style="width: 48.5%;" id="wholesaleB"></div>
                    <div style="width: 48.5%;" id="wholesaleC"></div>
                    <div style="width: 58.5%;" id="wholesaleD"></div>
                    <div style="width: 38.5%;" id="wholesaleE"></div>
                    <div style="width: 48.5%;margin-bottom: 0" id="wholesaleF"></div>
                    <div style="width: 48.5%;margin-bottom: 0" id="wholesaleG"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="2019年批零差价" name="2">
                <div class="item">
                    <div style="width: 98%;" id="wholesaleH"></div>
                    <div style="width: 48.5%;" id="wholesaleI"></div>
                    <div style="width: 48.5%;" id="wholesaleJ"></div>
                    <div style="width: 58.5%;" id="wholesaleK"></div>
                    <div style="width: 38.5%;" id="wholesaleL"></div>
                    <div style="width: 48.5%;margin-bottom: 0" id="wholesaleM"></div>
                    <div style="width: 48.5%;margin-bottom: 0" id="wholesaleN"></div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="查看更多" name="3"></el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "Wholesale",
        data() {
            return {
                activeName: ['1', '2'],
                order: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
            }
        },
        methods: {
            initECharts() {
                let arr = [];
                this.order.forEach(i => {
                    arr.push('wholesale' + i);
                });
                let option = {
                    title: {
                        text: '油品批零差价默认展示总量'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['总量', '汽油', '柴油', '92', '95', '96', '0']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '总量',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 32, 12, 453, 321, 453]
                        },
                        {
                            name: '汽油',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310, 43, 231, 546, 456, 546]
                        },
                        {
                            name: '柴油',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410, 55, 33, 553, 456, 553]
                        },
                        {
                            name: '92',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320, 321, 432, 675, 156, 675]
                        },
                        {
                            name: '95',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320, 321, 901, 765, 489, 765]
                        },
                        {
                            name: '96',
                            type: 'line',
                            stack: '总量',
                            data: [321, 435, 654, 876, 987, 524, 214, 458, 465, 123, 156, 123]
                        },
                        {
                            name: '0',
                            type: 'line',
                            stack: '总量',
                            data: [489, 43, 1456, 345, 1459, 735, 156, 156, 12, 56, 35, 56]
                        },
                    ]
                };
                let option_ = {
                    title: {
                        text: ''
                    },
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
                let option_vb = {
                    title: {
                        text: ''
                    },
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
                let option_hb = {
                    title: {
                        text: '各个高速订单个数'
                    },
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {

                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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

                arr.forEach((item, index) => {
                    if (index === 0 || index === 7) {
                        this.$echarts.init(document.getElementById(item)).setOption(option);
                    }
                    if (index === 1 || index === 2 || index === 4 || index === 8 || index === 9 || index === 11) {
                        if (index === 1 || index === 8) {
                            option_.title.text = '销量环形对比单位（吨）';
                        }
                        if (index === 2 || index === 9) {
                            option_.title.text = '';
                        }
                        if (index === 4 || index === 11) {
                            option_.title.text = '各个高速的订单个数占比';
                        }
                        this.$echarts.init(document.getElementById(item)).setOption(option_);
                    }
                    if (index === 3 || index === 6 || index === 10 || index === 13) {
                        if (index === 3 || index === 10) {
                            option_vb.title.text = '订单个数每月统计'
                        }
                        if (index === 6 || index === 13) {
                            option_vb.title.text = '点击高速展示加油站订单个数'
                        }
                        this.$echarts.init(document.getElementById(item)).setOption(option_vb);
                    }
                    if (index === 5 || index === 12) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_hb);
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