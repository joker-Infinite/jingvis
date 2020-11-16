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
                        icon: require("../../assets/business/icon_1-1.png"),
                        iconActive: require("../../assets/business/icon_1-2.png"),
                        ECharts: {
                            id: 'a',
                            EChartsItem: [
                                {
                                    title: 'AAAA',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                                {
                                    title: 'AAAA',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                            ]
                        }
                    },
                    {
                        name: "利润",
                        icon: require("../../assets/business/icon_2-1.png"),
                        iconActive: require("../../assets/business/icon_2-2.png"),
                        ECharts: {
                            id: 'b',
                            EChartsItem: [
                                {
                                    title: 'BBBB',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                                {
                                    title: 'BBBB',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                            ]
                        }
                    },
                    {
                        name: "成本",
                        icon: require("../../assets/business/icon_3-1.png"),
                        iconActive: require("../../assets/business/icon_3-2.png"),
                        ECharts: {
                            id: 'c',
                            EChartsItem: [
                                {
                                    title: 'CCCC',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                                {
                                    title: 'CCCC',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                            ]
                        }
                    },
                    {
                        name: "数量",
                        icon: require("../../assets/business/icon_4-1.png"),
                        iconActive: require("../../assets/business/icon_4-2.png"),
                        ECharts: {
                            id: 'd',
                            EChartsItem: [
                                {
                                    title: 'DDDD',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                                {
                                    title: 'DDDD',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                            ]
                        }
                    },
                    {
                        name: "结构",
                        icon: require("../../assets/business/icon_5-1.png"),
                        iconActive: require("../../assets/business/icon_5-2.png"),
                        ECharts: {
                            id: 'e',
                            EChartsItem: [
                                {
                                    title: 'EEEE',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                                {
                                    title: 'EEEE',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                            ]
                        }
                    },
                    {
                        name: "回款率",
                        icon: require("../../assets/business/icon_6-1.png"),
                        iconActive: require("../../assets/business/icon_6-2.png"),
                        ECharts: {
                            id: 'f',
                            EChartsItem: [
                                {
                                    title: 'FFFF',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                                {
                                    title: 'FFFF',
                                    width: '48%',
                                    borderRadius: '10px',
                                    style: {
                                        height: '400px',
                                        padding: '0',
                                        margin: '0',
                                        background: 'white',
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
                                    },
                                },
                            ]
                        }
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>