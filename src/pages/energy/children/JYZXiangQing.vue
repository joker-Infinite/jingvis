<template>
    <div style="width: 100%;height: 100%;font-size: 50px">
        <my-collapse-base
                ref="collapse"
                :collapseData="collapseData"
        ></my-collapse-base>
    </div>
</template>

<script>
    import MyCollapseBase from "../../../components/common/myCollapseBase";

    export default {
        name: "JYZXiangQing",
        components: {MyCollapseBase},
        props: {
            viewChange: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                collapseData: [
                    {
                        id: "revenue",
                        name: "加油站基本信息",
                        icon: require("../../../assets/business/icon_1-1.png"),
                        iconActive: require("../../../assets/business/icon_1-2.png"),
                        collapseItem: [
                            {
                                id: "revenue_2020",
                                collapseTitle: "加油站基本信息",
                                EChartsBox: [
                                    {
                                        title: "加油站基本信息",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "100%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                type:'map',
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "400px",
                                                },
                                                option: {},
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: "profit",
                        name: "加油站多维度统计",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "profit_2020",
                                collapseTitle: "加油站多维度统计",
                                EChartsBox: [
                                    {
                                        title: "实际成本",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "40%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: "",
                                                    },
                                                    tooltip: {
                                                        trigger: "axis",
                                                        formatter: function (val) {
                                                            return val[0].name + ":" + val[0].value + "元";
                                                        },
                                                    },
                                                    grid: {
                                                        top: "20%",
                                                        right: "40",
                                                        left: "60",
                                                        bottom: "40", //图表尺寸大小
                                                    },
                                                    xAxis: [
                                                        {
                                                            type: "category",
                                                            color: "#59588D",
                                                            data: [
                                                                "1",
                                                                "2",
                                                                "3",
                                                                "4",
                                                                "5",
                                                                "6",
                                                                "7",
                                                                "8",
                                                                "9",
                                                                "10",
                                                                "11",
                                                                "12",
                                                            ],
                                                            axisLabel: {
                                                                margin: 10,
                                                                color: "#999",
                                                                textStyle: {
                                                                    fontSize: 12,
                                                                },
                                                            },
                                                            axisLine: {
                                                                lineStyle: {
                                                                    color: "rgba(107,107,107,0.37)",
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
                                                                formatter: "{value}",
                                                                color: "#999",
                                                                textStyle: {
                                                                    fontSize: 12,
                                                                },
                                                            },
                                                            axisLine: {
                                                                lineStyle: {
                                                                    color: "rgba(107,107,107,0.37)",
                                                                },
                                                            },
                                                            axisTick: {
                                                                show: false,
                                                            },
                                                            splitLine: {
                                                                lineStyle: {
                                                                    color: "rgba(131,101,101,0.2)",
                                                                    type: "dashed",
                                                                },
                                                            },
                                                        },
                                                    ],
                                                    series: [
                                                        {
                                                            type: "bar",
                                                            data: [
                                                                40,
                                                                80,
                                                                500,
                                                                36,
                                                                30,
                                                                35,
                                                                400,
                                                                60,
                                                                40,
                                                                80,
                                                                50,
                                                                360,
                                                            ],
                                                            barWidth: "16px",
                                                            itemStyle: {
                                                                normal: {
                                                                    color: "#38A0FF",
                                                                    barBorderRadius: [30, 30, 30, 30],
                                                                },
                                                            },
                                                        },
                                                        {
                                                            data: [
                                                                40,
                                                                80,
                                                                500,
                                                                36,
                                                                30,
                                                                35,
                                                                400,
                                                                60,
                                                                40,
                                                                80,
                                                                50,
                                                                360,
                                                            ],
                                                            type: "line",
                                                            name: "折线图",
                                                            // symbol: 'none',
                                                            lineStyle: {
                                                                color: "#fea2a2",
                                                                width: 2,
                                                                shadowColor: "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                                                shadowBlur: 10,
                                                                shadowOffsetY: 10,
                                                            },
                                                            areaStyle: {
                                                                normal: {
                                                                    color: "rgba(0,0,0,0)",
                                                                },
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "营收2",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "29%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: "",
                                                    },
                                                    grid: {
                                                        top: "20%",
                                                        right: "40",
                                                        left: "60",
                                                        bottom: "40", //图表尺寸大小
                                                    },
                                                    legend: {
                                                        orient: "horizontal",
                                                        bottom: 10,
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                    },
                                                    series: [
                                                        {
                                                            type: "pie",
                                                            center: ["50%", "50%"],
                                                            radius: ["25%", "40%"],
                                                            clockwise: true,
                                                            avoidLabelOverlap: true,
                                                            hoverOffset: 15,
                                                            itemStyle: {
                                                                normal: {
                                                                    color: function (params) {
                                                                        let colorList = [
                                                                            "#1fcaa8",
                                                                            "#15b3e2",
                                                                            "#f69f41",
                                                                            "#f2535f",
                                                                            "#2e65fd",
                                                                        ];
                                                                        return colorList[params.dataIndex];
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
                                                                padding: [2, -2, 2, -2],
                                                                borderRadius: 2,
                                                                distanceToLabelLine: 0,
                                                                normal: {
                                                                    formatter(v) {
                                                                        let text = v.name + "\n" + v.percent + "%";
                                                                        return text;
                                                                    },
                                                                    textStyle: {
                                                                        fontSize: 12,
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
                                                            data: (function () {
                                                                let data = [];
                                                                let title = [
                                                                    "特产",
                                                                    "小吃",
                                                                    "餐饮",
                                                                    "便利店",
                                                                    "加油",
                                                                ];
                                                                [1.45, 2.93, 3.15, 4, 5].forEach(
                                                                    (element, index) => {
                                                                        data.push({
                                                                            name: title[index],
                                                                            value: element,
                                                                        });
                                                                    }
                                                                );
                                                                return data;
                                                            })(),
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "营收3",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "29%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: "",
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                    },

                                                    legend: {
                                                        orient: "horizontal",
                                                        bottom: 10,
                                                    },

                                                    series: [
                                                        {
                                                            type: "pie",
                                                            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                                                            avoidLabelOverlap: true, //是否启用防止标签重叠策略
                                                            center: ["48%", "50%"],
                                                            radius: ["30%", "38%"],
                                                            clockwise: true,
                                                            hoverOffset: 20,
                                                            itemStyle: {
                                                                normal: {
                                                                    color: function (params) {
                                                                        let colorList = [
                                                                            "#76c15c",
                                                                            "#15b3e2",
                                                                            "#2e65fd",
                                                                            "#1fcaa8",
                                                                            "#ee6565",
                                                                            "#fec02a",
                                                                        ];
                                                                        return colorList[params.dataIndex];
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
                                                                padding: [2, -2, 2, -2],
                                                                borderRadius: 2,
                                                                distanceToLabelLine: 0,
                                                                normal: {
                                                                    formatter(v) {
                                                                        let text = v.name + "\n" + v.percent + "%";
                                                                        return text;
                                                                    },
                                                                    textStyle: {
                                                                        fontSize: 12,
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
                                                            data: [
                                                                {
                                                                    name: "宜昌",
                                                                    value: 1.45,
                                                                },
                                                                {
                                                                    name: "恩施",
                                                                    value: 2.93,
                                                                },
                                                                {
                                                                    name: "孝感",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "咸宁",
                                                                    value: 4.78,
                                                                },
                                                                {
                                                                    name: "十堰",
                                                                    value: 5.93,
                                                                },
                                                                {
                                                                    name: "黄冈",
                                                                    value: 5.73,
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
        },
        watch: {
            viewChange() {
                this.$refs['collapse'].refresh(this.collapseData)
            }
        }
    };
</script>

<style scoped></style>
