<template>
    <div style="width: 100%;height: 100%;font-size: 50px">
        <my-collapse :sum="3" :collapseData="collapseData"></my-collapse>
    </div>
</template>

<script>
    import MyCollapse from "../../components/common/myCollapse";

    export default {
        name: "serviceArea",
        components: {MyCollapse},
        data() {
            return {
                collapseData: [
                    {
                        name: "营收",
                        collapseName: '2020年营收',
                        icon: require("../../assets/business/icon_1-1.png"),
                        iconActive: require("../../assets/business/icon_1-2.png"),
                        type: 1,
                        ECharts: {
                            id: 'a',
                            EChartsItem: [
                                {
                                    title: '',
                                    width: '40%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: '各个公司营收占比',
                                    width: '30%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 40,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: 'A公司', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: 'B公司', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: 'C公司', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: 'D公司', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: 'E公司', itemStyle: {color: '#F2637B'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                                {
                                    title: '营收类型占比',
                                    width: '27%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 20,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: '过票', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: '油品批发', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: '分销', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: '油品零售', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: '非油品零售', itemStyle: {color: '#F2637B'}},
                                                    {value: 1548, name: '其他', itemStyle: {color: '#975FE5'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "营收",
                        collapseName: '2019年营收',
                        icon: require("../../assets/business/icon_1-1.png"),
                        iconActive: require("../../assets/business/icon_1-2.png"),
                        ECharts: {
                            id: 'a1',
                            EChartsItem: [
                                {
                                    title: '',
                                    width: '40%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: '各个公司营收占比',
                                    width: '30%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 40,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: 'A公司', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: 'B公司', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: 'C公司', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: 'D公司', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: 'E公司', itemStyle: {color: '#F2637B'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                                {
                                    title: '营收类型占比',
                                    width: '27%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 20,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: '过票', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: '油品批发', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: '分销', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: '油品零售', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: '非油品零售', itemStyle: {color: '#F2637B'}},
                                                    {value: 1548, name: '其他', itemStyle: {color: '#975FE5'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "利润",
                        collapseName: '2020年利润',
                        icon: require("../../assets/business/icon_2-1.png"),
                        iconActive: require("../../assets/business/icon_2-2.png"),
                        type: 1,
                        ECharts: {
                            id: 'b',
                            EChartsItem: [
                                {
                                    title: '',
                                    width: '40%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: '各个公司利润占比',
                                    width: '30%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 40,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: 'A公司', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: 'B公司', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: 'C公司', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: 'D公司', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: 'E公司', itemStyle: {color: '#F2637B'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                                {
                                    title: '利润类型占比',
                                    width: '27%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 20,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: '过票', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: '油品批发', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: '分销', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: '油品零售', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: '非油品零售', itemStyle: {color: '#F2637B'}},
                                                    {value: 1548, name: '其他', itemStyle: {color: '#975FE5'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "利润",
                        collapseName: '2019年利润',
                        icon: require("../../assets/business/icon_2-1.png"),
                        iconActive: require("../../assets/business/icon_2-2.png"),
                        ECharts: {
                            id: 'b1',
                            EChartsItem: [
                                {
                                    title: '',
                                    width: '40%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: '各个公司利润占比',
                                    width: '30%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 40,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: 'A公司', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: 'B公司', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: 'C公司', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: 'D公司', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: 'E公司', itemStyle: {color: '#F2637B'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                                {
                                    title: '利润类型占比',
                                    width: '27%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
                                        title: {},
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
                                                        length2: 20,
                                                        lineStyle: {
                                                            width: 1
                                                        }
                                                    }
                                                },
                                                data: [
                                                    {value: 335, name: '过票', itemStyle: {color: '#3AA1FF'}},
                                                    {value: 310, name: '油品批发', itemStyle: {color: '#59D4D4'}},
                                                    {value: 234, name: '分销', itemStyle: {color: '#4ECB73'}},
                                                    {value: 135, name: '油品零售', itemStyle: {color: '#F8D33D'}},
                                                    {value: 1548, name: '非油品零售', itemStyle: {color: '#F2637B'}},
                                                    {value: 1548, name: '其他', itemStyle: {color: '#975FE5'}}
                                                ]
                                            }
                                        ]
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "成本",
                        collapseName: '2020年成本',
                        icon: require("../../assets/business/icon_3-1.png"),
                        iconActive: require("../../assets/business/icon_3-2.png"),
                        type: 1,
                        ECharts: {
                            id: 'c',
                            EChartsItem: [
                                {
                                    title: 'CCCC',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'CCCC',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "成本",
                        collapseName: '2020年成本',
                        icon: require("../../assets/business/icon_3-1.png"),
                        iconActive: require("../../assets/business/icon_3-2.png"),
                        ECharts: {
                            id: 'c1',
                            EChartsItem: [
                                {
                                    title: 'CCCC',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'CCCC',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "数量",
                        collapseName: '2020年数量',
                        icon: require("../../assets/business/icon_4-1.png"),
                        iconActive: require("../../assets/business/icon_4-2.png"),
                        type: 1,
                        ECharts: {
                            id: 'd',
                            EChartsItem: [
                                {
                                    title: 'DDDD',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'DDDD',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "数量",
                        collapseName: '2020年数量',
                        icon: require("../../assets/business/icon_4-1.png"),
                        iconActive: require("../../assets/business/icon_4-2.png"),
                        ECharts: {
                            id: 'd1',
                            EChartsItem: [
                                {
                                    title: 'DDDD',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'DDDD',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "结构",
                        collapseName: '2020年结构',
                        icon: require("../../assets/business/icon_5-1.png"),
                        iconActive: require("../../assets/business/icon_5-2.png"),
                        type: 1,
                        ECharts: {
                            id: 'e',
                            EChartsItem: [
                                {
                                    title: 'EEEE',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'EEEE',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "结构",
                        collapseName: '2020年结构',
                        icon: require("../../assets/business/icon_5-1.png"),
                        iconActive: require("../../assets/business/icon_5-2.png"),
                        ECharts: {
                            id: 'e1',
                            EChartsItem: [
                                {
                                    title: 'EEEE',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'EEEE',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "回款率",
                        collapseName: '2020年回款率',
                        icon: require("../../assets/business/icon_6-1.png"),
                        iconActive: require("../../assets/business/icon_6-2.png"),
                        type: 1,
                        ECharts: {
                            id: 'f',
                            EChartsItem: [
                                {
                                    title: 'FFFF',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'FFFF',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                    {
                        name: "回款率",
                        collapseName: '2020年回款率',
                        icon: require("../../assets/business/icon_6-1.png"),
                        iconActive: require("../../assets/business/icon_6-2.png"),
                        ECharts: {
                            id: 'f1',
                            EChartsItem: [
                                {
                                    title: 'FFFF',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                                {
                                    title: 'FFFF',
                                    width: '49%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
                                    },
                                    option: [{
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
                                    }],
                                },
                            ]
                        }
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>