<template>
    <div class="businessBottomEcharts">
        <div class="top">
            <div>品牌分类</div>
            <div class="echarts">
                <div style="margin-right:1.6%" class="con" :id="businessId.id[0]"></div>
                <div class="con" :id="businessId.id[1]"></div>
            </div>
        </div>
        <div class="bottom">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="业态结构" width="180">
                </el-table-column>
                <el-table-column prop="name" label="所在服务区个数" width="180">
                </el-table-column>
                <el-table-column prop="address" label="经营场所个数">
                </el-table-column>
                <el-table-column prop="address" label="占地面积(平方米)">
                </el-table-column>
                <el-table-column prop="address" label="订单数">
                </el-table-column>
                <el-table-column prop="address" label="收入(元)">
                </el-table-column>
                <el-table-column prop="address" label="客单价(元)">
                </el-table-column>
                <el-table-column prop="address" label="坪效(元)">
                </el-table-column>
                <el-table-column prop="address" label="利润(元)">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        businessId: {
            type: Object,
            default: {}
        }

    },
    data() {
        return {
            tableData: [{
                date: '一线品牌',
                name: '',
                address: ''
            }, {
                date: '本地特色',
                name: '',
                address: ''
            }, {
                date: '传统产业',
                name: '',
                address: ''
            },]
        }
    },
    methods: {
        echartsLeft() {
            let EchartsLeft = this.$echarts.init(
                document.getElementById(this.businessId.id[0])
            );
            let index = 0;
            let colorList = ['#fd866a', '#9e87ff', '#73acff'];
            let option = {
                title: {
                    text: '总营业额(万元)',
                    top: '40%',
                    left: 'center',
                    // x: 'center',
                    // y: 'center',
                    textStyle: {
                        fontSize: 18
                    },
                    subtext: '85000',
                    subtextStyle: {
                        fontSize: 45,
                        color: '#1edf57'
                    }
                },
                grid: {
                    top: '20%',
                    right: '40',
                    left: '60',
                    bottom: '40' //图表尺寸大小
                },
                legend: {
                    orient: 'horizontal',
                    bottom: 10,
                },
                tooltip: {
                    trigger: 'item'
                },
                series: [{
                    type: 'pie',
                    center: ['50%', '50%'],
                    radius: ['44%', '55%'],
                    clockwise: true,
                    avoidLabelOverlap: true,
                    hoverOffset: 15,
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: '{a|{b}：{d}%}\n{hr|}',
                        rich: {
                            hr: {
                                backgroundColor: 't',
                                borderRadius: 3,
                                width: 3,
                                height: 3,
                                padding: [3, 3, 0, -12]
                            },
                            a: {
                                padding: [-30, 15, -20, 15]
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 20,
                            length2: 30,
                            lineStyle: {
                                width: 1
                            }
                        }
                    },
                    data: [{
                        'name': '传统',
                        'value': 1.45
                    }, {
                        'name': '品牌',
                        'value': 2.93
                    }, {
                        'name': '特色',
                        'value': 3.15
                    }
                    ],
                }]
            };
            window.onresize = EchartsLeft.resize;

            EchartsLeft.setOption(option);
        },
        echartsRight() {
            let EchartsRight = this.$echarts.init(
                document.getElementById(this.businessId.id[1])
            );
            var equipment = ['传统', '品牌', '特色'];
            var project = ['传统', '品牌', '特色'];
            let colorList = ['#73acff', '#fd866a', '#9e87ff'];
            let option = {
                backgroundColor: '#fff',
                legend: {
                    orient: 'horizontal',
                    bottom: 10,
                },
                tooltip: {
                    formatter: '{b}:{c}: ({d}%)',
                    // formatter: function (param) {
                    //     if (param.data.type == null) {

                    //         return param.data.name + ":" + param.value + '个';
                    //     } else {

                    //         return param.data.type + ":" + param.value + '个';
                    //     }
                    // }
                },

                series: [{
                    name: '整体分类',
                    type: 'pie',
                    radius: [0, '30%'],
                    label: {
                        position: 'inner',

                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 2,
                            color: function (params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },

                    selectedMode: 'single',
                    data: [{
                        value: 875,
                        name: '特色',

                    },
                    {
                        value: 1239,
                        name: '传统',

                    },
                    {
                        value: 1239,
                        name: '品牌',

                    },
                    ]
                },
                {
                    name: '招标方式',
                    type: 'pie',
                    radius: ['40%', '55%'],

                    itemStyle: {
                        normal: {
                            color: function (params) {
                                return colorList[params.dataIndex]
                            }
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{b}:{c}: ({d}%)',
                            textStyle: {
                                fontWeight: 'normal',
                                fontSize: 15
                            }
                        }
                    },

                    data: [{
                        value: 875,
                        name: '特色',
                        type: equipment[0],

                    },
                    {
                        value: 1239,
                        name: '传统',
                        type: equipment[1],

                    },
                    {
                        value: 1239,
                        name: '品牌',
                        type: equipment[2],

                    },




                    ]
                }
                ]
            };
            window.onresize = EchartsRight.resize;
            EchartsRight.setOption(option);
        },


    },
    mounted() {
        this.echartsLeft()
        this.echartsRight()
    },
    watch: {
        '$store.state.refresh': function () {
            console.log('wo')
            this.businessId.id.forEach(element => {
                document.getElementById(element).setAttribute('_echarts_instance_', '');
            });
            this.echartsLeft();
            this.echartsRight();
        }
    },

}
</script>
<style lang="less" scoped>
.con {
    width: 48.7%;
    height: 100%;
    background: url("../../assets/business/frame 1.png") no-repeat;
    background-size: 100% 100%;
}
.bottom /deep/ .el-table {
    border-radius: 10px;
}
.businessBottomEcharts {
    height: 640px;
    .top {
        height: 400px;
        .echarts {
            height: 380px;
            width: 100%;
            display: flex;
        }
    }
    .bottom {
        margin: 20px 0;
        width: 99%;
        background: url("../../assets/business/frame 1.png") no-repeat;
        background-size: 100% 100%;
    }
}
</style>