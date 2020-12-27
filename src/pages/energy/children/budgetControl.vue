<template>
    <div style="width: 100%; height: 100%;">
        <my-collapse-base ref="collapse" :collapseData="collapseData" @searchQuery="searchQuery"></my-collapse-base>
    </div>
</template>
<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";
import common from "../../../components/js/common";

export default {
    name: "budgetControl",
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
                    id: "budget",
                    name: "控制预算",
                    icon: require("../../../assets/business/icon_1-1.png"),
                    iconActive: require("../../../assets/business/icon_1-2.png"),
                    collapseItem: [
                        {
                            id: "budget_2020",
                            year: 2020,
                            collapseTitle: "2020年预算控制",
                            EChartsBox: [
                                {
                                    title: "月预算控制",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "39.5%",
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
                                                    formatter: function(val) {
                                                        return (
                                                            val[0].name +
                                                            "月" +
                                                            ":" +
                                                            "<br />预算:" +
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
                                                dataZoom: [
                                                    {
                                                        type: "inside",
                                                    },
                                                    {
                                                        type: "slider",
                                                    },
                                                ],
                                                xAxis: [
                                                    {
                                                        type: "category",
                                                        name: "月",
                                                        nameTextStyle: {
                                                            color: "#000",
                                                        },
                                                        color: "#59588D",
                                                        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
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
                                                        name: "万元",
                                                        nameTextStyle: {
                                                            color: "#000",
                                                            // fontSize: 16,
                                                            // padding: 10,
                                                        },
                                                        axisLabel: {
                                                            formatter: function(val) {
                                                                return val / 10000;
                                                            },
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
                                                            41227980.97,
                                                            66379186.39,
                                                            21512554.34,
                                                            23536277.13,
                                                            25344513.25,
                                                            21883601.06,
                                                            29285722.58,
                                                            33682947.29,
                                                            25867750.94,
                                                            95867750.94,
                                                            55867750.94,
                                                            45867750.94,
                                                        ],
                                                        barWidth: "16px",
                                                        itemStyle: {
                                                            normal: {
                                                                color: "#38A0FF",
                                                                barBorderRadius: [30, 30, 30, 30],
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
                                        },
                                    ],
                                },
                                {
                                    title: "子公司占比/业态占比",
                                    istime: true,
                                    select: false,
                                    style: {
                                        width: "60%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            style: {
                                                width: "50%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: {
                                                    text: "",
                                                },
                                                grid: {
                                                    top: "20%",
                                                    right: "40",
                                                    left: "60",
                                                    bottom: "40",
                                                },
                                                legend: {
                                                    orient: "horizontal",
                                                    bottom: 5,
                                                    data: ["新能源", "石化", "国储", "高路油站", "荆港嘉瑞"],
                                                },
                                                tooltip: {
                                                    trigger: "item",
                                                    formatter: "{b}: {c}万元 ({d}%)",
                                                },
                                                series: [
                                                    {
                                                        type: "pie",
                                                        center: ["50%", "50%"],
                                                        radius: ["30%", "45%"],
                                                        clockwise: true,
                                                        avoidLabelOverlap: true,
                                                        hoverOffset: 15,
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
                                                                    fontSize: 16,
                                                                },
                                                            },
                                                        },
                                                        labelLine: {
                                                            normal: {
                                                                lineStyle: {
                                                                    width: 1,
                                                                },
                                                            },
                                                        },
                                                        color:['#73ddff','#73acff','#fdd56a','#fdb36a','#fd866a','#9e87ff'],
                                                        data: [
                                                            { value: 335, name: "新能源" },
                                                            { value: 310, name: "石化" },
                                                            { value: 234, name: "国储" },
                                                            { value: 135, name: "高路油站" },
                                                            { value: 1548, name: "荆港嘉瑞" },
                                                        ],
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            style: {
                                                width: "50%",
                                                height: "300px",
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
                                                    data: ["过票", "油品批发", "分销", "油品零售", "非油品零售"],
                                                },
                                                series: [
                                                    {
                                                        type: "pie",
                                                        avoidLabelOverlap: true,
                                                        center: ["48%", "50%"],
                                                        radius: ["38%", "50%"],
                                                        clockwise: true,
                                                        hoverOffset: 20,
                                                        itemStyle: {
                                                            normal: {
                                                                color: function(v) {
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
                                                            padding: [2, -2, 2, -2],
                                                            borderRadius: 2,
                                                            distanceToLabelLine: 0,
                                                            normal: {
                                                                formatter(v) {
                                                                    let text = v.name + "\n" + v.percent + "%";
                                                                    return text;
                                                                },
                                                                textStyle: {
                                                                    fontSize: 16,
                                                                },
                                                            },
                                                        },
                                                        labelLine: {
                                                            normal: {
                                                                lineStyle: {
                                                                    width: 1,
                                                                },
                                                            },
                                                        },
                                                        data: [
                                                            { value: 335, name: "过票" },
                                                            { value: 310, name: "油品批发" },
                                                            { value: 234, name: "分销" },
                                                            { value: 135, name: "油品零售" },
                                                            { value: 1548, name: "非油品零售" },
                                                        ],
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "budget_2019",
                            year: 2019,
                            collapseTitle: "2019年预算控制",
                            EChartsBox: [
                                {
                                    title: "月预算控制",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "39.5%",
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
                                                    formatter: function(val) {
                                                        return (
                                                            val[0].name +
                                                            "月" +
                                                            ":" +
                                                            "<br />预算:" +
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
                                                dataZoom: [
                                                    {
                                                        type: "inside",
                                                    },
                                                    {
                                                        type: "slider",
                                                    },
                                                ],
                                                xAxis: [
                                                    {
                                                        type: "category",
                                                        name: "月",
                                                        nameTextStyle: {
                                                            color: "#000",
                                                        },
                                                        color: "#59588D",
                                                        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
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
                                                        name: "万元",
                                                        nameTextStyle: {
                                                            color: "#000",
                                                            // fontSize: 16,
                                                            // padding: 10,
                                                        },
                                                        axisLabel: {
                                                            formatter: function(val) {
                                                                return val / 10000;
                                                            },
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
                                                            41227980.97,
                                                            26379186.39,
                                                            51512554.34,
                                                            63536277.13,
                                                            85344513.25,
                                                            11883601.06,
                                                            59285722.58,
                                                            83682947.29,
                                                            65867750.94,
                                                            45867750.94,
                                                            25867750.94,
                                                            15867750.94,
                                                        ],
                                                        barWidth: "16px",
                                                        itemStyle: {
                                                            normal: {
                                                                color: "#38A0FF",
                                                                barBorderRadius: [30, 30, 30, 30],
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
                                        },
                                    ],
                                },
                                {
                                    title: "子公司占比/业态占比",
                                    istime: true,
                                    select: false,
                                    style: {
                                        width: "60%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            style: {
                                                width: "50%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: {
                                                    text: "",
                                                },
                                                grid: {
                                                    top: "20%",
                                                    right: "40",
                                                    left: "60",
                                                    bottom: "40",
                                                },
                                                legend: {
                                                    orient: "horizontal",
                                                    bottom: 5,
                                                    data: ["新能源", "石化", "国储", "高路油站", "荆港嘉瑞"],
                                                },
                                                tooltip: {
                                                    trigger: "item",
                                                    formatter: "{b}: {c}万元 ({d}%)",
                                                },
                                                series: [
                                                    {
                                                        type: "pie",
                                                        center: ["50%", "50%"],
                                                        radius: ["30%", "45%"],
                                                        clockwise: true,
                                                        avoidLabelOverlap: true,
                                                        hoverOffset: 15,
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
                                                                    fontSize: 16,
                                                                },
                                                            },
                                                        },
                                                        labelLine: {
                                                            normal: {
                                                                lineStyle: {
                                                                    width: 1,
                                                                },
                                                            },
                                                        },
                                                        color:['#73ddff','#73acff','#fdd56a','#fdb36a','#fd866a','#9e87ff'],
                                                        data: [
                                                            { value: 655, name: "新能源" },
                                                            { value: 510, name: "石化" },
                                                            { value: 334, name: "国储" },
                                                            { value: 435, name: "高路油站" },
                                                            { value: 548, name: "荆港嘉瑞" },
                                                        ],
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            style: {
                                                width: "50%",
                                                height: "300px",
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
                                                    data: ["过票", "油品批发", "分销", "油品零售", "非油品零售"],
                                                },
                                                series: [
                                                    {
                                                        type: "pie",
                                                        avoidLabelOverlap: true,
                                                        center: ["48%", "50%"],
                                                        radius: ["38%", "50%"],
                                                        clockwise: true,
                                                        hoverOffset: 20,
                                                        itemStyle: {
                                                            normal: {
                                                                color: function(v) {
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
                                                            padding: [2, -2, 2, -2],
                                                            borderRadius: 2,
                                                            distanceToLabelLine: 0,
                                                            normal: {
                                                                formatter(v) {
                                                                    let text = v.name + "\n" + v.percent + "%";
                                                                    return text;
                                                                },
                                                                textStyle: {
                                                                    fontSize: 16,
                                                                },
                                                            },
                                                        },
                                                        labelLine: {
                                                            normal: {
                                                                lineStyle: {
                                                                    width: 1,
                                                                },
                                                            },
                                                        },
                                                        data: [
                                                            { value: 635, name: "过票" },
                                                            { value: 910, name: "油品批发" },
                                                            { value: 434, name: "分销" },
                                                            { value: 635, name: "油品零售" },
                                                            { value: 1548, name: "非油品零售" },
                                                        ],
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "budget_",
                            year: 2019,
                            collapseTitle: "预算控制",
                            EChartsBox: [
                                {
                                    title:
                                        '<span style="float: left">预算项目列表</span><span style="float: right ;text-shadow:none;height: 100%;text-align: right;padding-right: 20px;font-weight:100;">2020年 执行金额:160亿元 预算金额:200亿元 总执行度:80%</span>',
                                    input: true,
                                    select: true,
                                    selectOption: [[2015, 2016, 2017, 2018]],
                                    style: {
                                        width: "100%",
                                        height: "600px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginBottom: "10px",
                                    },
                                    EChartsItem: [
                                        {
                                            style: {
                                                width: "100%",
                                                height: "600px",
                                            },
                                            isPagination: true,
                                            height: "630px",
                                            type: "table",
                                            columns: [
                                                { prop: "a", label: "预算项目" },
                                                { prop: "b", label: "预算金额（元）" },
                                                { prop: "c", label: "执行金额（元）" },
                                                { prop: "d", label: "执行速度" },
                                                { prop: "e", label: "时间偏离度（执行进度-时间进度）" },
                                                { prop: "f", label: "年份" },
                                            ],
                                            tableData: [
                                                { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                                                { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                                                { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                                                { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                                                { a: "/", b: "/", c: "/", d: "/", e: "/", f: "/" },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: "成本费用利用率",
                                    style: {
                                        width: "49.5%",
                                        height: "400px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginBottom: "10px",
                                    },
                                    EChartsItem: [
                                        {
                                            unit: "%",
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "380px",
                                            },

                                            option: {
                                                xAxis: {
                                                    type: "category",
                                                    name: "年",
                                                    nameTextStyle: {
                                                        color: "#000",
                                                    },
                                                    data: ["2015", "2016", "2017", "2018", "2019", "2020"],
                                                },
                                                tooltip: {
                                                    trigger: "axis",
                                                    formatter: "{b}年: {c}% ",
                                                },
                                                yAxis: {
                                                    type: "value",
                                                    name: "%",
                                                },
                                                series: [
                                                    {
                                                        data: [12, 20, 15, 80, 70, 11],
                                                        type: "line",
                                                        itemStyle: {
                                                            color: "#38d",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "分项成本变化趋势",
                                    showSearch: "notShow",
                                    selectOption: [["A成本", "B成本", "C成本", "D成本"]],
                                    select: true,
                                    style: {
                                        width: "49.5%",
                                        height: "400px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginBottom: "10px",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "380px",
                                            },
                                            unit: "万元",
                                            option: {
                                                xAxis: {
                                                    type: "category",
                                                    name: "年",
                                                    nameTextStyle: {
                                                        color: "#000",
                                                    },
                                                    data: ["2015", "2016", "2017", "2018", "2019", "2020"],
                                                },
                                                tooltip: {
                                                    trigger: "axis",
                                                    formatter: "{b}: {c}万元",
                                                },
                                                yAxis: {
                                                    type: "value",
                                                    name: "万元",
                                                },
                                                series: [
                                                    {
                                                        data: [120, 200, 1500, 800, 700, 110],
                                                        type: "bar",
                                                        itemStyle: {
                                                            color: "#38d",
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "revenue_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: [],
                        },
                    ],
                },
            ],
            arrData: [],
            ValueData: {
                inputValue: "",
                selectValue: "",
                timeValue: ["", ""],
            },
        };
    },
    methods: {
        async searchQuery(id, collapse, year, name) {
            this.ValueData = collapse;
            id.EChartsBox.forEach((element, index) => {
                element.EChartsItem.forEach((element, sindex) => {
                    this.arrData.push({
                        id: id.id + "-" + index + "-" + sindex,
                        option: element.option,
                    });
                });
            });
            await this.obtainData(name, year);
        },
        async obtainData(name, year) {
            let data = [];
            let id = "";
            this.ValueData.timeValue === null && (this.ValueData.timeValue = ["", ""]);
            const res = await this.$axios.get("/api/sundry/finance_type_list");
            for (let i = 0; i < res.data.data.length; i++) {
                if (res.data.data[i].financeName == name) {
                    id = res.data.data[i].financeTypeId;
                    break;
                }
            }
            await this.$axios
                .get("/api/jtService/list_service_finance", {
                    params: {
                        financeTypeId: id,
                        nianfen: year,
                        endTime: this.ValueData.timeValue[1],
                        stateTime: this.ValueData.timeValue[0],
                    },
                })
                .then((v) => {
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
                                                sItem.EChartsItem[0].option.xAxis[0].data.push(i.xBxis);
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
                                                    value: i.yAxis,
                                                });
                                            });
                                            sItem.EChartsItem[1].option.series[0].data = [];
                                            data.xYListFrom3.forEach((i, ix) => {
                                                sItem.EChartsItem[1].option.series[0].data.push({
                                                    name: i.xBxis,
                                                    value: i.yAxis,
                                                });
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                    // this.$nextTick(_ => {
                    //     this.$refs['collapse'].searchClick(this.arrData)
                    // })
                });
        },
        async obtainAxios(name, year, years) {
            let data = [];
            let id = "";
            await this.$axios
                .get("/api/sundry/fuwuqucaiwu", { params: { nianfen: year, type: years, plateName: "服务区板块" } })
                .then((v) => {
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
                                            data.forEach((element) => {
                                                xBxis.push(element.xBxis.split("-")[1]);
                                                yAxis.push(element.yAxis * 10000);
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
                            });
                        }
                    });
                });
            // this.$axios.get('/api/sundry/fuwuqucaiwu',{params:{nianfen:year,type:name}}).then(res=>{
            //     let xBxis = [];
            //     let yAxis = [];
            //     res.data.data.forEach(element => {

            //     });
            // })
        },
    },
    async mounted() {
        await new Promise((resolve) => {
            setInterval((_) => {
                resolve();
            }, 500);
        });
        this.$refs["collapse"].initECharts(this.collapseData);
    },
    async created() {
        // await this.obtainData('营收', '2019');
        // await this.obtainData('营收', '2020');
        // await this.obtainData('利润', '2019');
        // await this.obtainData('利润', '2020');
        await this.obtainAxios("利润", "2020", "lr");
        await this.obtainAxios("利润", "2019", "lr");
    },
    watch: {
        viewChange() {
            this.$refs["collapse"].refresh(this.collapseData);
        },
    },
};
</script>
