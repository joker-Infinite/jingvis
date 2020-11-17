<template>
    <div style="width: 100%;height: 100%;font-size: 50px">
        <my-collapse-base :collapseData="collapseData"></my-collapse-base>
    </div>
</template>

<script>
    import MyCollapseBase from "../../components/common/myCollapseBase";

    export default {
        name: "energy",
        components: {MyCollapseBase},
        data() {
            return {
                collapseData: [
                    {
                        id: 'a',
                        name: '营收',
                        icon: require("../../assets/business/icon_1-1.png"),
                        iconActive: require("../../assets/business/icon_1-2.png"),
                        collapseItem: [
                            {
                                id: 'a_2019',
                                collapseTitle: '2019年营收',
                                EChartsBox: [
                                    {
                                        title: 'gis地图',
                                        timeValue: '',
                                        selectValue: '',
                                        style: {
                                            width: '100%',
                                            height: '650px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                type: 'map',
                                                style: {
                                                    width: '100%',
                                                    height: '600px',
                                                    background: '#B9FFC8'
                                                },
                                            }
                                        ]
                                    },
                                    {
                                        title: 'table列表',
                                        timeValue: '',
                                        selectValue: '',
                                        style: {
                                            width: '100%',
                                            height: '650px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                type: 'table',
                                                style: {
                                                    width: '100%',
                                                    height: '600px',
                                                    background: '#B9FFC8'
                                                },
                                            }
                                        ]
                                    },
                                    {
                                        title: '营收',
                                        time: true,
                                        select: false,
                                        timeValue: '',
                                        selectValue: '',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '营收1',
                                        time: true,
                                        timeValue: '',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '营收2',
                                        time: true,
                                        timeValue: '',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '营收3',
                                        time: false,
                                        select: true,
                                        timeValue: '',
                                        selectValue: '',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                id: 'a_2020',
                                collapseTitle: '20120年营收',
                                EChartsBox: [
                                    {
                                        title: '营收4',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '营收5',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '营收6',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '营收7',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: 'b',
                        name: "利润",
                        icon: require("../../assets/business/icon_2-1.png"),
                        iconActive: require("../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: 'b_2019',
                                collapseTitle: '2019年利润',
                                EChartsBox: [
                                    {
                                        title: '利润',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润1',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润2',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润3',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                id: 'b_2020',
                                collapseTitle: '2020年利润',
                                EChartsBox: [
                                    {
                                        title: '利润4',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润5',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润6',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润7',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: 'c',
                        name: "成本",
                        icon: require("../../assets/business/icon_3-1.png"),
                        iconActive: require("../../assets/business/icon_3-2.png"),
                        collapseItem: [
                            {
                                id: 'c_2019',
                                collapseTitle: '2019年成本',
                                EChartsBox: [
                                    {
                                        title: '利润',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润1',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润2',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润3',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                id: 'c_2020',
                                collapseTitle: '2020年成本',
                                EChartsBox: [
                                    {
                                        title: '利润4',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润5',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润6',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润7',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: 'd',
                        name: "数量",
                        icon: require("../../assets/business/icon_4-1.png"),
                        iconActive: require("../../assets/business/icon_4-2.png"),
                        collapseItem: [
                            {
                                id: 'd_2019',
                                collapseTitle: '2019年数量',
                                EChartsBox: [
                                    {
                                        title: '利润',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润1',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润2',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润3',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                id: 'd_2020',
                                collapseTitle: '20120年数量',
                                EChartsBox: [
                                    {
                                        title: '利润4',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润5',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润6',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润7',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: 'e',
                        name: "结构",
                        icon: require("../../assets/business/icon_5-1.png"),
                        iconActive: require("../../assets/business/icon_5-2.png"),
                        collapseItem: [
                            {
                                id: 'e_2019',
                                collapseTitle: '2019年结构',
                                EChartsBox: [
                                    {
                                        title: '结构',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润1',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润2',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润3',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                id: 'e_2020',
                                collapseTitle: '20120年结构',
                                EChartsBox: [
                                    {
                                        title: '利润4',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润5',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润6',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润7',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: 'f',
                        name: "回款率",
                        icon: require("../../assets/business/icon_6-1.png"),
                        iconActive: require("../../assets/business/icon_6-2.png"),
                        collapseItem: [
                            {
                                id: 'f_2019',
                                collapseTitle: '2019年回款率',
                                EChartsBox: [
                                    {
                                        title: '利润',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润1',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润2',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润3',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                            {
                                id: 'f_2020',
                                collapseTitle: '20120年回款率',
                                EChartsBox: [
                                    {
                                        title: '利润4',
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: '100%',
                                            height: '450px',
                                            borderRadius: '10px',
                                            background: 'white',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '40%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '30%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '27%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润5',
                                        style: {
                                            width: '40%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润6',
                                        style: {
                                            width: '30%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                    {
                                        title: '利润7',
                                        style: {
                                            width: '27%',
                                            height: '450px',
                                            background: 'white',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: '100%',
                                                    height: '400px',
                                                },
                                                option: {
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
                                                                {
                                                                    value: 335,
                                                                    name: 'A公司',
                                                                    itemStyle: {color: '#3AA1FF'}
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: 'B公司',
                                                                    itemStyle: {color: '#59D4D4'}
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: 'C公司',
                                                                    itemStyle: {color: '#4ECB73'}
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: 'D公司',
                                                                    itemStyle: {color: '#F8D33D'}
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: 'E公司',
                                                                    itemStyle: {color: '#F2637B'}
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>