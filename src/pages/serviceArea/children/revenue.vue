<template>
    <div style="width: 100%; height: 100%;">
        <my-collapse-base ref="collapse" :collapseData="collapseData" @searchQuery="searchQuery">
        </my-collapse-base>
    </div>
</template>
<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";
import common from "../../../components/js/common";
export default {
    name: "revenue",
    components: { MyCollapseBase },
    mixins: [common],
    props: {
        viewChange: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            collapseData: [
                {
                    id: "revenue",
                    name: "营收",
                    icon: require("../../../assets/business/icon_1-1.png"),
                    iconActive: require("../../../assets/business/icon_1-2.png"),
                    collapseItem: [
                        {
                             id: "revenue_2020",
                            year: 2020,
                            collapseTitle: "2020年营收",
                            allQuery: true,
                            allQueryData: {
                                input: false,
                                select: false,
                                time: true
                            },
                            EChartsBox: [
                                {
                                    title: "2020年营收",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "35%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: {
                                                    text: "",
                                                },
                                                tooltip: {
                                                    trigger: "axis",
                                                    formatter: function (val) {
                                                        return (
                                                            val[0].name + '月' + 
                                                            ":" + "<br />" +
                                                            val[0].value / 10000 +
                                                            "万元"
                                                        );
                                                    },
                                                },
                                                grid: {
                                                    top: "50",
                                                    right: "60",
                                                    left: "60",
                                                    bottom: "60", //图表尺寸大小
                                                },
                                                dataZoom: [{
                                                    type: 'inside'
                                                }, {
                                                    type: 'slider'
                                                }],
                                                xAxis: [
                                                    {
                                                        type: "category",
                                                        color: "#59588D",
                                                        data: [],
                                                        axisLabel: {
                                                            margin: 10,
                                                            color: "#999",
                                                            textStyle: {
                                                                fontSize: 12,
                                                            },
                                                        },
                                                        axisLine: {
                                                            lineStyle: {
                                                                color:
                                                                    "rgba(107,107,107,0.37)",
                                                            },
                                                        },
                                                        axisTick: {
                                                            show: false,
                                                        },
                                                    },
                                                ],
                                                yAxis: [
                                                    {
                                                        axisLabel: {
                                                            formatter: function (val) {
                                                                return val / 10000
                                                            },
                                                            color: "#999",
                                                            textStyle: {
                                                                fontSize: 12,
                                                            },
                                                        },
                                                        axisLine: {
                                                            lineStyle: {
                                                                color:
                                                                    "rgba(107,107,107,0.37)",
                                                            },
                                                        },
                                                        axisTick: {
                                                            show: false,
                                                        },
                                                        splitLine: {
                                                            lineStyle: {
                                                                color:
                                                                    "rgba(131,101,101,0.2)",
                                                                type: "dashed",
                                                            },
                                                        },
                                                    },
                                                    // {
                                                    //     type: 'value',
                                                    //     min: '',//最小坐标
                                                    //     max: '',//最大坐标
                                                    //     axisLabel: {
                                                    //         fontSize: 14,
                                                    //         color: "#999",
                                                    //         formatter: '{value} %'
                                                    //     },
                                                    //     axisLine: {
                                                    //         lineStyle: {
                                                    //             color:
                                                    //                 "rgba(107,107,107,0.37)",
                                                    //         },
                                                    //     },
                                                    //     splitLine: {
                                                    //         show: false//是否显示分隔线。
                                                    //     },
                                                    //     axisTick: {
                                                    //         show: false,
                                                    //     },
                                                    // }
                                                ],
                                                series: [
                                                    {
                                                        type: "bar",
                                                        data: [],
                                                        barWidth: "16px",
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "#38A0FF",
                                                                barBorderRadius: [
                                                                    30,
                                                                    30,
                                                                    30,
                                                                    30,
                                                                ],
                                                            },
                                                        },
                                                    },
                                                    // {
                                                    //     data: [],
                                                    //     type: "line",
                                                    //     name: "折线图",
                                                    //     yAxisIndex: 1,
                                                    //     // symbol: 'none',
                                                    //     lineStyle: {
                                                    //         color: "#fea2a2",
                                                    //         width: 2,
                                                    //         shadowColor:
                                                    //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                                    //         shadowBlur: 10,
                                                    //         shadowOffsetY: 10,
                                                    //     },
                                                    //     itemStyle: {
                                                    //         normal: {
                                                    //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                    //                 offset: 0,
                                                    //                 color: 'rgb(255, 204, 102)'
                                                    //             }, {
                                                    //                 offset: 1,
                                                    //                 color: 'rgb(255, 153, 51)'
                                                    //             }]),
                                                    //             label: {
                                                    //                 show: true,
                                                    //                 position: 'top',
                                                    //                 textStyle: {
                                                    //                     fontSize: '16',
                                                    //                     color: 'rgb(255, 156, 54)',
                                                    //                 }
                                                    //             }
                                                    //         },
                                                    //     },
                                                    //     areaStyle: {
                                                    //         normal: {
                                                    //             color:
                                                    //                 "rgba(0,0,0,0)",
                                                    //         },
                                                    //     },
                                                    // },
                                                ],
                                            },
                                        }
                                    ],
                                },
                                {
                                    title: "2020年营收业态占比/片区占比",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "64.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "50%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: { text: "", },
                                                grid: {
                                                    top: "20%",
                                                    right: "40",
                                                    left: "0",
                                                    bottom: "40", //图表尺寸大小
                                                },
                                                legend: {
                                                    orient: "vertical",
                                                    top: 'center',
                                                    right:10,
                                                },
                                                tooltip: { trigger: "item", },
                                                series: [{
                                                    type: "pie",
                                                    center: ["40%", "50%"],
                                                    radius: ["25%", "40%"],
                                                    clockwise: true,
                                                    avoidLabelOverlap: true,
                                                    hoverOffset: 15,
                                                    itemStyle: {
                                                        normal: {
                                                            // 设置扇形的阴影
                                                            shadowBlur: 30,
                                                            shadowColor: 'rgba(0,0,0,0.3)', 
                                                            shadowOffsetX: -5,
                                                            shadowOffsetY: 5,
                                                            color: function (v) {
                                                                let colorList = [
                                                                    "#76c15c",
                                                                    "#15b3e2",
                                                                    "#2e65fd",
                                                                    "#1fcaa8",
                                                                    "#ee6565",
                                                                    "#fec02a",
                                                                    "#fe3922",
                                                                    "#52fe36",
                                                                    "#fe3afc",
                                                                ];
                                                                return colorList[v.dataIndex];
                                                            },
                                                        },
                                                    },
                                                    label: {
                                                        show: true,
                                                        position: "outer",
                                                        width: 0,
                                                        height: 0,
                                                        lineHeight: 0,
                                                        backgroundColor: "auto",
                                                        padding: [2, -2, 2, -2,],
                                                        borderRadius: 2,
                                                        distanceToLabelLine: 0,
                                                        normal: {
                                                            formatter(v) {
                                                                // let text = v.name + "\n" + v.percent + "%";
                                                                let text = v.percent + "%";
                                                                return text;
                                                            },
                                                            textStyle: {
                                                                fontSize: 14,
                                                            },
                                                        },
                                                    },
                                                    labelLine: {
                                                        normal: {
                                                            
                                                            length: 30,
                                                            length2: 25,
                                                            lineStyle: {
                                                                width: 1,
                                                            },
                                                        },
                                                    },
                                                    data: [],
                                                }],
                                            },
                                        },
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "50%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: { text: "" },
                                                tooltip: { trigger: "item" },
                                                legend: {
                                                    orient: "vertical",
                                                    top: 'center',
                                                    right:10,
                                                },
                                                series: [{
                                                    type: "pie",
                                                    minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                                                    avoidLabelOverlap: true, //是否启用防止标签重叠策略
                                                    center: ["45%", "50%"],
                                                    radius: ["30%", "45%"],
                                                    clockwise: true,
                                                    hoverOffset: 20,
                                                    itemStyle: {
                                                        normal: {
                                                            // 设置扇形的阴影
                                                            shadowBlur: 30,
                                                            shadowColor: 'rgba(0,0,0,0.3)', 
                                                            shadowOffsetX: -5,
                                                            shadowOffsetY: 5,
                                                            color: function (v) {
                                                                let colorList = [
                                                                    "#76c15c",
                                                                    "#15b3e2",
                                                                    "#2e65fd",
                                                                    "#1fcaa8",
                                                                    "#ee6565",
                                                                    "#fec02a",
                                                                    "#fe3922",
                                                                    "#52fe36",
                                                                    "#fe3afc",
                                                                ];
                                                                return colorList[v.dataIndex];
                                                            },
                                                        },
                                                    },
                                                    label: {
                                                        show: true,
                                                        position: "outer",
                                                        width: 0,
                                                        height: 0,
                                                        lineHeight: 0,
                                                        backgroundColor: "auto",
                                                        padding: [2, -2, 2, -2,],
                                                        borderRadius: 2,
                                                        distanceToLabelLine: 0,
                                                        normal: {
                                                            formatter(v) {
                                                                // let text = v.name + "\n" + v.percent + "%";
                                                                let text = v.percent + "%";
                                                                return text;
                                                            },
                                                            textStyle: {
                                                                fontSize: 14,
                                                            },
                                                        },
                                                    },
                                                    labelLine: {
                                                        normal: {
                                                            length: 30,
                                                            length2: 10,
                                                            lineStyle: {
                                                                width: 1,
                                                            },
                                                        },
                                                    },
                                                    data: [],
                                                }],
                                            },
                                        }],
                                },


                            ]
                        },
                        {
                            id: "revenue_2019",
                            year: 2019,
                            collapseTitle: "2019年营收",
                            allQuery: true,
                            allQueryData: {
                                input: false,
                                select: false,
                                time: true
                            },
                            EChartsBox: [
                                {
                                    title: "2019年营收",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "35%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: {
                                                    text: "",
                                                },
                                                tooltip: {
                                                    trigger: "axis",
                                                    formatter: function (val) {
                                                        return (
                                                            val[0].name + '月' + 
                                                            ":" + "<br />" +
                                                            (val[0].value / 10000).toFixed(2) +
                                                            "万元"
                                                        );
                                                    },
                                                },
                                                grid: {
                                                    top: "50",
                                                    right: "60",
                                                    left: "60",
                                                    bottom: "60", //图表尺寸大小
                                                },
                                                dataZoom: [{
                                                    type: 'inside'
                                                }, {
                                                    type: 'slider'
                                                }],
                                                xAxis: [
                                                    {
                                                        type: "category",
                                                        color: "#59588D",
                                                        data: [],
                                                        axisLabel: {
                                                            margin: 10,
                                                            color: "#999",
                                                            textStyle: {
                                                                fontSize: 12,
                                                            },
                                                        },
                                                        axisLine: {
                                                            lineStyle: {
                                                                color:
                                                                    "rgba(107,107,107,0.37)",
                                                            },
                                                        },
                                                        axisTick: {
                                                            show: false,
                                                        },
                                                    },
                                                ],
                                                yAxis: [
                                                    {
                                                        axisLabel: {
                                                            formatter: function (val) {
                                                                return val / 10000
                                                            },
                                                            color: "#999",
                                                            textStyle: {
                                                                fontSize: 12,
                                                            },
                                                        },
                                                        axisLine: {
                                                            lineStyle: {
                                                                color:
                                                                    "rgba(107,107,107,0.37)",
                                                            },
                                                        },
                                                        axisTick: {
                                                            show: false,
                                                        },
                                                        splitLine: {
                                                            lineStyle: {
                                                                color:
                                                                    "rgba(131,101,101,0.2)",
                                                                type: "dashed",
                                                            },
                                                        },
                                                    },
                                                    // {
                                                    //     type: 'value',
                                                    //     min: '',//最小坐标
                                                    //     max: '',//最大坐标
                                                    //     axisLabel: {
                                                    //         fontSize: 14,
                                                    //         color: "#999",
                                                    //         formatter: '{value} %'
                                                    //     },
                                                    //     axisLine: {
                                                    //         lineStyle: {
                                                    //             color:
                                                    //                 "rgba(107,107,107,0.37)",
                                                    //         },
                                                    //     },
                                                    //     splitLine: {
                                                    //         show: false//是否显示分隔线。
                                                    //     },
                                                    //     axisTick: {
                                                    //         show: false,
                                                    //     },
                                                    // }
                                                ],
                                                series: [
                                                    {
                                                        type: "bar",
                                                        data: [],
                                                        barWidth: "16px",
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "#38A0FF",
                                                                barBorderRadius: [
                                                                    30,
                                                                    30,
                                                                    30,
                                                                    30,
                                                                ],
                                                            },
                                                        },
                                                    },
                                                    // {
                                                    //     data: [],
                                                    //     type: "line",
                                                    //     name: "折线图",
                                                    //     yAxisIndex: 1,
                                                    //     // symbol: 'none',
                                                    //     lineStyle: {
                                                    //         color: "#fea2a2",
                                                    //         width: 2,
                                                    //         shadowColor:
                                                    //             "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                                    //         shadowBlur: 10,
                                                    //         shadowOffsetY: 10,
                                                    //     },
                                                    //     itemStyle: {
                                                    //         normal: {
                                                    //             color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                    //                 offset: 0,
                                                    //                 color: 'rgb(255, 204, 102)'
                                                    //             }, {
                                                    //                 offset: 1,
                                                    //                 color: 'rgb(255, 153, 51)'
                                                    //             }]),
                                                    //             label: {
                                                    //                 show: true,
                                                    //                 position: 'top',
                                                    //                 textStyle: {
                                                    //                     fontSize: '16',
                                                    //                     color: 'rgb(255, 156, 54)',
                                                    //                 }
                                                    //             }
                                                    //         },
                                                    //     },
                                                    //     areaStyle: {
                                                    //         normal: {
                                                    //             color:
                                                    //                 "rgba(0,0,0,0)",
                                                    //         },
                                                    //     },
                                                    // },
                                                ],
                                            },
                                        }
                                    ],
                                },
                                {
                                    title: "2019年营收业态占比/片区占比",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "64.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "50%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: { text: "", },
                                                grid: {
                                                    top: "20%",
                                                    right: "40",
                                                    left: "0",
                                                    bottom: "40", //图表尺寸大小
                                                },
                                                legend: {
                                                    orient: "vertical",
                                                    top: 'center',
                                                    right:10,
                                                },
                                                tooltip: { trigger: "item", },
                                                series: [{
                                                    type: "pie",
                                                    center: ["40%", "50%"],
                                                    radius: ["25%", "40%"],
                                                    clockwise: true,
                                                    avoidLabelOverlap: true,
                                                    hoverOffset: 15,
                                                    itemStyle: {
                                                        normal: {
                                                            // 设置扇形的阴影
                                                            shadowBlur: 30,
                                                            shadowColor: 'rgba(0,0,0,0.3)', 
                                                            shadowOffsetX: -5,
                                                            shadowOffsetY: 5,
                                                            color: function (v) {
                                                                let colorList = [
                                                                    "#76c15c",
                                                                    "#15b3e2",
                                                                    "#2e65fd",
                                                                    "#1fcaa8",
                                                                    "#ee6565",
                                                                    "#fec02a",
                                                                    "#fe3922",
                                                                    "#52fe36",
                                                                    "#fe3afc",
                                                                ];
                                                                return colorList[v.dataIndex];
                                                            },
                                                        },
                                                    },
                                                    label: {
                                                        show: true,
                                                        position: "outer",
                                                        width: 0,
                                                        height: 0,
                                                        lineHeight: 0,
                                                        backgroundColor: "auto",
                                                        padding: [2, -2, 2, -2,],
                                                        borderRadius: 2,
                                                        distanceToLabelLine: 0,
                                                        normal: {
                                                            formatter(v) {
                                                                let text = v.name + "\n" + v.percent + "%";
                                                                // let text = v.percent + "%";
                                                                return text;
                                                            },
                                                            textStyle: {
                                                                fontSize: 14,
                                                            },
                                                        },
                                                    },
                                                    labelLine: {
                                                        normal: {
                                                            
                                                            length: 30,
                                                            length2: 25,
                                                            lineStyle: {
                                                                width: 1,
                                                            },
                                                        },
                                                    },
                                                    data: [],
                                                }],
                                            },
                                        },
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "50%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: { text: "" },
                                                tooltip: { trigger: "item" },
                                                legend: {
                                                    orient: "vertical",
                                                    top: 'center',
                                                    right:10,
                                                },
                                                series: [{
                                                    type: "pie",
                                                    minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                                                    avoidLabelOverlap: true, //是否启用防止标签重叠策略
                                                    center: ["45%", "50%"],
                                                    radius: ["30%", "45%"],
                                                    clockwise: true,
                                                    hoverOffset: 20,
                                                    itemStyle: {
                                                        normal: {
                                                            // 设置扇形的阴影
                                                            shadowBlur: 30,
                                                            shadowColor: 'rgba(0,0,0,0.3)', 
                                                            shadowOffsetX: -5,
                                                            shadowOffsetY: 5,
                                                            color: function (v) {
                                                                let colorList = [
                                                                    "#76c15c",
                                                                    "#15b3e2",
                                                                    "#2e65fd",
                                                                    "#1fcaa8",
                                                                    "#ee6565",
                                                                    "#fec02a",
                                                                    "#fe3922",
                                                                    "#52fe36",
                                                                    "#fe3afc",
                                                                ];
                                                                return colorList[v.dataIndex];
                                                            },
                                                        },
                                                    },
                                                    label: {
                                                        show: true,
                                                        position: "outer",
                                                        width: 0,
                                                        height: 0,
                                                        lineHeight: 0,
                                                        backgroundColor: "auto",
                                                        padding: [2, -2, 2, -2,],
                                                        borderRadius: 2,
                                                        distanceToLabelLine: 0,
                                                        normal: {
                                                            formatter(v) {
                                                                let text = v.name + "\n" + v.percent + "%";
                                                                // let text = v.percent + "%";
                                                                return text;
                                                            },
                                                            textStyle: {
                                                                fontSize: 14,
                                                            },
                                                        },
                                                    },
                                                    labelLine: {
                                                        normal: {
                                                            length: 30,
                                                            length2: 10,
                                                            lineStyle: {
                                                                width: 1,
                                                            },
                                                        },
                                                    },
                                                    data: [],
                                                }],
                                            },
                                        }],
                                },


                            ]
                        },
                        {
                            id: "revenue_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: []
                        },
                    ],
                },
            ],
            arrData: [],
            ValueData: {
                inputValue: '',
                selectValue: '',
                timeValue: ['', ''],
            },
        }
    },
    methods: {
        async searchQuery(id, collapse, year, name) {
            this.ValueData = collapse;
            id.EChartsBox.forEach((element, index) => {
                element.EChartsItem.forEach((element, sindex) => {
                    this.arrData.push({
                        id: id.id + '-' + index + '-' + sindex,
                        option: element.option
                    })
                });
            });
            await this.obtainData(name, year);
        },
        async obtainData(name, year) {
            let data = [];
            let id = '';
            this.ValueData.timeValue === null && (this.ValueData.timeValue = ['', '']);
            const res = await this.$axios.get("/api/sundry/finance_type_list");
            for (let i = 0; i < res.data.data.length; i++) {
                if (res.data.data[i].financeName == name) {
                    id = res.data.data[i].financeTypeId;
                    break;
                }
            }
            await this.$axios.get('/api/jtService/list_service_finance', {
                params: {
                    financeTypeId: id,
                    nianfen: year,
                    endTime: this.ValueData.timeValue[1],
                    stateTime: this.ValueData.timeValue[0]
                }
            }).then(v => {
                data = v.data.data;
                let mm = [];
                this.collapseData.forEach((item, index) => {
                    if (item.name == name) {
                        item.collapseItem.forEach((cItem, cIndex) => {
                            if (cItem.year == year) {
                                cItem.EChartsBox.forEach((sItem, sIndex) => {
                                    if (sIndex == 0) {
                                        sItem.EChartsItem[0].option.series[0].data = [];
                                        sItem.EChartsItem[0].option.xAxis[0].data = [];
                                        data.xYListFrom1.forEach((i, ix) => {
                                            sItem.EChartsItem[0].option.series[0].data.push(i.yAxis);
                                            mm.push(i.yAxis);
                                            sItem.EChartsItem[0].option.xAxis[0].data.push(i.xBxis.split('-')[1]);
                                        });
                                        // if (mm.length !== 0) {
                                        //     let arr = this.YoYIncrease(mm);
                                        //     // sItem.EChartsItem[0].option.yAxis[1].min = parseInt(Math.min(...arr) - 5);
                                        //     // sItem.EChartsItem[0].option.yAxis[1].max = parseInt(Math.max(...arr) + 5);
                                        //     sItem.EChartsItem[0].option.series[1].data.push(...arr);
                                        // }
                                    }
                                    if (sIndex == 1) {
                                        sItem.EChartsItem[0].option.series[0].data = [];
                                        data.xYListFrom2.forEach((i, ix) => {
                                            sItem.EChartsItem[0].option.series[0].data.push({
                                                name: i.xBxis,
                                                value: i.yAxis
                                            });
                                        })
                                        sItem.EChartsItem[1].option.series[0].data = []
                                        data.xYListFrom3.forEach((i, ix) => {
                                            sItem.EChartsItem[1].option.series[0].data.push({
                                                name: i.xBxis,
                                                value: i.yAxis
                                            });
                                        })
                                    }
                                });
                            }
                        })
                    }
                })
                this.$nextTick(_ => {
                    this.$refs['collapse'].searchClick(this.arrData)
                })
            })
        },
        async obtainAxios(name, year,years){
             let data = [];
            let id = '';
            await this.$axios.get('/api/sundry/fuwuqucaiwu', 
                {params:{nianfen:year,type:years}}
            ).then(v => {
                data = v.data.data;
                let mm = [];
                this.collapseData.forEach((item, index) => {
                    if (item.name == name) {
                        item.collapseItem.forEach((cItem, cIndex) => {
                            if (cItem.year == year) {
                                cItem.EChartsBox.forEach((sItem, sIndex) => {
                                    if (sIndex == 0) {
                                        sItem.EChartsItem[0].option.series[0].data = [];
                                        sItem.EChartsItem[0].option.xAxis[0].data = [];
                                        let yAxis = [];
                                        let xBxis = [];
                                        data.forEach(element => {
                                            xBxis.push(element.xBxis.split('-')[1]);
                                            yAxis.push(element.yAxis*10000)
                                        });
                                        sItem.EChartsItem[0].option.series[0].data = yAxis;
                                        sItem.EChartsItem[0].option.xAxis[0].data = xBxis;
                                    }
                                    // if (sIndex == 1) {
                                    //     sItem.EChartsItem[0].option.series[0].data = [];
                                    //     data.xYListFrom2.forEach((i, ix) => {
                                    //         sItem.EChartsItem[0].option.series[0].data.push({
                                    //             name: i.xBxis,
                                    //             value: i.yAxis
                                    //         });
                                    //     })
                                    //     sItem.EChartsItem[1].option.series[0].data = []
                                    //     data.xYListFrom3.forEach((i, ix) => {
                                    //         sItem.EChartsItem[1].option.series[0].data.push({
                                    //             name: i.xBxis,
                                    //             value: i.yAxis
                                    //         });
                                    //     })
                                    // }
                                });
                            }
                        })
                    }
                })
                
            })
            // this.$axios.get('/api/sundry/fuwuqucaiwu',{params:{nianfen:year,type:name}}).then(res=>{
            //     let xBxis = [];
            //     let yAxis = [];
            //     res.data.data.forEach(element => {
                    
            //     });
            // })
        }
    },
    async mounted() {
        await new Promise(resolve => {
            setInterval(_ => {
                resolve();
            }, 500);
        });
        this.$refs["collapse"].initECharts(this.collapseData);
    },
    async created() {
        await this.obtainData('营收', '2019');
        await this.obtainAxios('营收', '2020','ys');
        await this.obtainData('利润', '2019');
        await this.obtainData('利润', '2020');
    },
    watch: {
        viewChange() {
            this.$refs["collapse"].refresh(this.collapseData);
        },
    }
}
</script>