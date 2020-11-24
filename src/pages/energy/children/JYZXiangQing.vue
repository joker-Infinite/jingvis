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
                                                type: 'map',
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
                                        title: "非油品、油、柴油、汽油、92、95、98、E92、E95 ",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "59.5%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px'
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
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "非油品、油、柴油、汽油、92、95、98、E92、E95 月份金额统计",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "39.5%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px'
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
                                        title: "车流量以及客单价",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "59.5%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px'
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
                                        title: "大车与小车占比",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "39.5%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px'
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
                                        title: "非油品、油、柴油、汽油、92、95、98、E92、E95 ",
                                        time: true,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "100%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px'
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
                                                            type: "bar",
                                                            data: [
                                                                32,
                                                                43,
                                                                13,
                                                                43,
                                                                21,
                                                                76,
                                                                76,
                                                                55,
                                                                12,
                                                                54,
                                                                32,
                                                                12,
                                                            ],
                                                            barWidth: "16px",
                                                            itemStyle: {
                                                                normal: {
                                                                    color: "#13ff21",
                                                                    barBorderRadius: [30, 30, 30, 30],
                                                                },
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "tab列表",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "100%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px'
                                        },
                                        EChartsItem: [
                                            {
                                                type: 'table',
                                                /*ECharts的属性*/
                                                isPagination:true,
                                                height: "500px",
                                                style: {
                                                    width: "100%",
                                                    height: "400px",
                                                },
                                                border: true,
                                                columns: [
                                                    {prop: 'a', label: '加油站'},
                                                    {prop: 'b', label: '零食（金额/订单）'},
                                                    {prop: 'c', label: '小吃（金额/订单）'},
                                                    {prop: 'd', label: '饮料（金额/订单）'},
                                                    {prop: 'e', label: '烟酒（金额/订单）'},
                                                    {prop: 'f', label: '汽车用品（金额/订单）'},
                                                    {prop: 'g', label: '时间'},
                                                    {prop: 'h', label: '汽油'},
                                                    {prop: 'i', label: '柴油'}
                                                ],
                                                tableData: [
                                                    {
                                                        a: 'xxx加油站',
                                                        b: '5%',
                                                        c: '5%',
                                                        d: '5%',
                                                        e: '5%',
                                                        f: '5%',
                                                        g: '5%',
                                                        h: '5%',
                                                        i: '5%'
                                                    },
                                                    {
                                                        a: 'xxx加油站',
                                                        b: '5%',
                                                        c: '5%',
                                                        d: '5%',
                                                        e: '5%',
                                                        f: '5%',
                                                        g: '5%',
                                                        h: '5%',
                                                        i: '5%'
                                                    },
                                                    {
                                                        a: 'xxx加油站',
                                                        b: '5%',
                                                        c: '5%',
                                                        d: '5%',
                                                        e: '5%',
                                                        f: '5%',
                                                        g: '5%',
                                                        h: '5%',
                                                        i: '5%'
                                                    },
                                                ],
                                                option: {},
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
        mounted() {
            this.$refs["collapse"].initECharts(this.collapseData);
        },
        watch: {
            viewChange() {
                this.$refs['collapse'].refresh(this.collapseData)
            }
        }
    };
</script>

<style scoped></style>
