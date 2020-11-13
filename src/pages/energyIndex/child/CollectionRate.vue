<template>
    <!--回款率-->
    <div class="con">
        <el-collapse v-model="activeName">
            <el-collapse-item title="2020年回款率" name="1">
                <div class="item">
                    <div class="big" id="CollectionRateA"></div>
                    <div class="medium" id="CollectionRateB"></div>
                    <div class="small" id="CollectionRateC"></div>
                    <div style="width: 48.5%;margin-bottom: 0;height: 600px" id="CollectionRateD"></div>
                    <div style="width: 48.5%;margin-bottom: 0;height: 600px" id="CollectionRateE">
                        <my-table :columns="columns" height="580px" :multiple="false" :border="false"
                                  :data="tableData"></my-table>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="2019年回款率" name="2">
                <div class="item">
                    <div class="big" id="CollectionRateF"></div>
                    <div class="medium" id="CollectionRateG"></div>
                    <div class="small" id="CollectionRateH"></div>
                    <div style="width: 48.5%;margin-bottom: 0;height: 600px" id="CollectionRateI"></div>
                    <div style="width: 48.5%;margin-bottom: 0;height: 600px" id="CollectionRateJ">
                        <my-table :columns="columns" height="580px" :multiple="false" :data="tableData"></my-table>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="查看更多" name="3"></el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import MyTable from "../../common/myTable";

    export default {
        name: "CollectionRate",
        components: {MyTable},
        data() {
            return {
                activeName: ['1', '2'],
                order: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
                columns: [
                    {prop: 'A', label: '批发商'},
                    {prop: 'B', label: '总体占比'},
                    {prop: 'C', label: '毛利'},
                    {prop: 'D', label: '汽油'},
                    {prop: 'E', label: '柴油'},
                    {prop: 'F', label: '总量(吨)'},
                ],
                tableData: []
            }
        },
        methods: {
            initECharts() {
                let arr = [];
                this.order.forEach(i => {
                    arr.push('CollectionRate' + i);
                });
                let option_l = {
                    title: {
                        text: '各个公司的现金流'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
                        top: 'bottom',
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '7%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };
                let option_p1 = {
                    title: {
                        text: '各个公司回款占比'
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
                let option_p2 = {
                    title: {
                        text: '欠钱公司占比'
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
                let option_hb = {
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
                    if (index === 0 || index === 5) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_l);
                    }
                    if (index === 1 || index === 6) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_p1);
                    }
                    if (index === 2 || index === 7) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_p2);
                    }
                    if (index === 3 || index === 8) {
                        this.$echarts.init(document.getElementById(item)).setOption(option_hb);
                    }
                })
            }
        },
        mounted() {
            this.initECharts();
            for (let i = 1; i < 12; i++) {
                this.tableData.push(
                    {A: '批发商' + i, B: '8%', C: '8%', D: '8%', E: '8%', F: i + '0000'}
                )
            }
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

            .big {
                width: 43%;
            }

            .medium {
                width: 27%;
            }

            .small {
                width: 27%;
            }
        }

        .item > div {
            height: 400px;
            background: white;
            border-radius: 10px;
            margin: 10px 0;
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