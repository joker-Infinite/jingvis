<template>
    <div style="width: 100%;height: 100%;font-size: 50px">
        <my-collapse-base ref="collapse" :collapseData="collapseData"
                          @selectionChange="selectionChange"></my-collapse-base>
    </div>
</template>

<script>
    import MyCollapseBase from "../../../components/common/myCollapseBase";

    export default {
        name: "piFa",
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
                        id: "a",
                        name: "营收",
                        icon: require("../../../assets/business/icon_1-1.png"),
                        iconActive: require("../../../assets/business/icon_1-2.png"),
                        collapseItem: [
                            {
                                id: "a_2020",
                                collapseTitle: "2020年营收",
                                allQuery: true,
                                allQueryData: {
                                    input: false,
                                    select: false,
                                    time: true
                                },
                                EChartsBox: [
                                    {
                                        title: "",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "40%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                    barWidth: 20,
                                                    tooltip: {
                                                        trigger: "axis",
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    xAxis: {
                                                        type: "category",
                                                        data: [
                                                            "Jan",
                                                            "Fab",
                                                            "Mar",
                                                            "Apr",
                                                            "May",
                                                            "Jun",
                                                            "Jul",
                                                            "Aug",
                                                            "Sep",
                                                            "Oct",
                                                            "Nov",
                                                            "Dec",
                                                        ],
                                                    },
                                                    yAxis: {
                                                        type: "value",
                                                    },
                                                    series: [
                                                        {
                                                            data: [
                                                                120,
                                                                200,
                                                                150,
                                                                80,
                                                                70,
                                                                110,
                                                                323,
                                                                123,
                                                                432,
                                                                54,
                                                                66,
                                                                777,
                                                            ],
                                                            type: "bar",
                                                            itemStyle: {
                                                                color: "#38A0FF",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "59%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "50%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: "",
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    legend: {
                                                        left: "center",
                                                        top: "bottom",
                                                        data: ["A公司", "B公司", "C公司", "D公司", "E公司"],
                                                    },
                                                    series: [
                                                        {
                                                            name: "",
                                                            type: "pie",
                                                            radius: ["30%", "50%"],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + "\n" + val.percent + "%";
                                                                },
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 15,
                                                                    length2: 15,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    value: 335,
                                                                    name: "A公司",
                                                                    itemStyle: {color: "#3AA1FF"},
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: "B公司",
                                                                    itemStyle: {color: "#59D4D4"},
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: "C公司",
                                                                    itemStyle: {color: "#4ECB73"},
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: "D公司",
                                                                    itemStyle: {color: "#F8D33D"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "E公司",
                                                                    itemStyle: {color: "#F2637B"},
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "50%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: "",
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                                                    },
                                                    legend: {
                                                        left: "center",
                                                        top: "bottom",
                                                        data: [
                                                            "E92",
                                                            "E95",
                                                            "92",
                                                            "95",
                                                            "98",
                                                            "0",
                                                        ],
                                                    },

                                                    series: [
                                                        {
                                                            name: "",
                                                            type: "pie",
                                                            radius: ["30%", "50%"],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + "\n" + val.percent + "%";
                                                                },
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 10,
                                                                    length2: 10,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    value: 335,
                                                                    name: "E92",
                                                                    itemStyle: {color: "#3AA1FF"},
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: "E95",
                                                                    itemStyle: {color: "#59D4D4"},
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: "92",
                                                                    itemStyle: {color: "#4ECB73"},
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: "95",
                                                                    itemStyle: {color: "#F8D33D"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "98",
                                                                    itemStyle: {color: "#F2637B"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "0",
                                                                    itemStyle: {color: "#975FE5"},
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
                            {id: '', collapseTitle: "查看更多", EChartsBox: []}
                        ],
                    },
                    {
                        id: "b",
                        name: "利润",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "b_2020",
                                collapseTitle: "2020年利润",
                                allQuery: true,
                                allQueryData: {
                                    input: false,
                                    select: false,
                                    time: true
                                },
                                EChartsBox: [
                                    {
                                        title: "",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "40%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                    barWidth: 20,
                                                    tooltip: {
                                                        trigger: "axis",
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    xAxis: {
                                                        type: "category",
                                                        data: [
                                                            "Jan",
                                                            "Fab",
                                                            "Mar",
                                                            "Apr",
                                                            "May",
                                                            "Jun",
                                                            "Jul",
                                                            "Aug",
                                                            "Sep",
                                                            "Oct",
                                                            "Nov",
                                                            "Dec",
                                                        ],
                                                    },
                                                    yAxis: {
                                                        type: "value",
                                                    },
                                                    series: [
                                                        {
                                                            data: [
                                                                120,
                                                                200,
                                                                150,
                                                                80,
                                                                70,
                                                                110,
                                                                323,
                                                                123,
                                                                432,
                                                                54,
                                                                66,
                                                                777,
                                                            ],
                                                            type: "bar",
                                                            itemStyle: {
                                                                color: "#38A0FF",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "59%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "50%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: "",
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    legend: {
                                                        left: "center",
                                                        top: "bottom",
                                                        data: ["A公司", "B公司", "C公司", "D公司", "E公司"],
                                                    },
                                                    series: [
                                                        {
                                                            name: "",
                                                            type: "pie",
                                                            radius: ["30%", "50%"],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + "\n" + val.percent + "%";
                                                                },
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 15,
                                                                    length2: 15,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    value: 335,
                                                                    name: "A公司",
                                                                    itemStyle: {color: "#3AA1FF"},
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: "B公司",
                                                                    itemStyle: {color: "#59D4D4"},
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: "C公司",
                                                                    itemStyle: {color: "#4ECB73"},
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: "D公司",
                                                                    itemStyle: {color: "#F8D33D"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "E公司",
                                                                    itemStyle: {color: "#F2637B"},
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "50%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: "",
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                        formatter: "{a} <br/>{b}: {c} ({d}%)",
                                                    },
                                                    legend: {
                                                        left: "center",
                                                        top: "bottom",
                                                        data: [
                                                            "E92",
                                                            "E95",
                                                            "92",
                                                            "95",
                                                            "98",
                                                            "0",
                                                        ],
                                                    },

                                                    series: [
                                                        {
                                                            name: "",
                                                            type: "pie",
                                                            radius: ["30%", "50%"],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + "\n" + val.percent + "%";
                                                                },
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 10,
                                                                    length2: 10,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    value: 335,
                                                                    name: "E92",
                                                                    itemStyle: {color: "#3AA1FF"},
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: "E95",
                                                                    itemStyle: {color: "#59D4D4"},
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: "92",
                                                                    itemStyle: {color: "#4ECB73"},
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: "95",
                                                                    itemStyle: {color: "#F8D33D"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "98",
                                                                    itemStyle: {color: "#F2637B"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "0",
                                                                    itemStyle: {color: "#975FE5"},
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
                            {id: '', collapseTitle: "查看更多", EChartsBox: []}
                        ],
                    },
                    {
                        id: "c",
                        name: "成本",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "c_2020",
                                collapseTitle: "2019年成本",
                                EChartsBox: [
                                    {
                                        title: "成本",
                                        time: true,
                                        select: true,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "100%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                    },
                                                    legend: {
                                                        data: [
                                                            "国际油价",
                                                            "采购成本",
                                                            "批发价格",
                                                        ],
                                                        top: "bottom",
                                                    },
                                                    grid: {
                                                        left: "3%",
                                                        right: "4%",
                                                        bottom: "7%",
                                                        containLabel: true,
                                                    },
                                                    xAxis: {
                                                        type: "category",
                                                        boundaryGap: false,
                                                        data: [
                                                            "周一",
                                                            "周二",
                                                            "周三",
                                                            "周四",
                                                            "周五",
                                                            "周六",
                                                            "周日",
                                                        ],
                                                    },
                                                    yAxis: {
                                                        type: "value",
                                                    },
                                                    series: [
                                                        {
                                                            name: "国际油价",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [120, 132, 101, 134, 90, 230, 210],
                                                        },
                                                        {
                                                            name: "采购成本",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [220, 182, 191, 234, 290, 330, 310],
                                                        },
                                                        {
                                                            name: "批发价格",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [150, 232, 201, 154, 190, 330, 410],
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "毛利润，人工、管理、其他成本",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "59.5%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                    },
                                                    legend: {
                                                        data: [
                                                            "毛利润",
                                                            "人工",
                                                            "管理",
                                                            "其他成本",
                                                        ],
                                                        top: "bottom",
                                                    },
                                                    grid: {
                                                        left: "3%",
                                                        right: "4%",
                                                        bottom: "7%",
                                                        containLabel: true,
                                                    },
                                                    xAxis: {
                                                        type: "category",
                                                        boundaryGap: false,
                                                        data: [
                                                            "周一",
                                                            "周二",
                                                            "周三",
                                                            "周四",
                                                            "周五",
                                                            "周六",
                                                            "周日",
                                                        ],
                                                    },
                                                    yAxis: {
                                                        type: "value",
                                                    },
                                                    series: [
                                                        {
                                                            name: "毛利润",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [120, 132, 101, 134, 90, 230, 210],
                                                        },
                                                        {
                                                            name: "人工",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [220, 182, 191, 234, 290, 330, 310],
                                                        },
                                                        {
                                                            name: "管理",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [150, 232, 201, 154, 190, 330, 410],
                                                        },
                                                        {
                                                            name: "其他成本",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [320, 332, 301, 334, 390, 330, 320],
                                                        }
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "毛利润，人工、管理、其他成本",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "39.5%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    legend: {
                                                        left: "center",
                                                        top: "bottom",
                                                        data: ["人工成本", "管理成本", "其他成本"],
                                                    },
                                                    series: [
                                                        {
                                                            name: "",
                                                            type: "pie",
                                                            radius: ["30%", "50%"],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + "\n" + val.percent + "%";
                                                                },
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 15,
                                                                    length2: 15,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    value: 335,
                                                                    name: "人工成本",
                                                                    itemStyle: {color: "#3AA1FF"},
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: "管理成本",
                                                                    itemStyle: {color: "#59D4D4"},
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: "其他成本",
                                                                    itemStyle: {color: "#4ECB73"},
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
                            {id: '', collapseTitle: "查看更多", EChartsBox: []}
                        ],
                    },
                    {
                        id: "d",
                        name: "批发增长率",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "d_2020",
                                collapseTitle: "2020批发增长率",
                                EChartsBox: [
                                    {
                                        title: "",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "40%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                    },
                                                    legend: {
                                                        data: [
                                                            "总量",
                                                            "a公司",
                                                            "b公司",
                                                            "c公司",
                                                        ],
                                                        top: "bottom",
                                                    },
                                                    grid: {
                                                        left: "3%",
                                                        right: "4%",
                                                        bottom: "7%",
                                                        containLabel: true,
                                                    },
                                                    xAxis: {
                                                        type: "category",
                                                        boundaryGap: false,
                                                        data: [
                                                            "周一",
                                                            "周二",
                                                            "周三",
                                                            "周四",
                                                            "周五",
                                                            "周六",
                                                            "周日",
                                                        ],
                                                    },
                                                    yAxis: {
                                                        type: "value",
                                                    },
                                                    series: [
                                                        {
                                                            name: "总量",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [120, 132, 101, 134, 90, 230, 210],
                                                        },
                                                        {
                                                            name: "a公司",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [220, 182, 191, 234, 290, 330, 310],
                                                        },
                                                        {
                                                            name: "b公司",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [150, 232, 201, 154, 190, 330, 410],
                                                        },
                                                        {
                                                            name: "c公司",
                                                            type: "line",
                                                            stack: "总量",
                                                            data: [320, 332, 301, 334, 390, 330, 320],
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "各个公司回款占比",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "29%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    legend: {
                                                        left: "center",
                                                        top: "bottom",
                                                        data: ["A公司", "B公司", "C公司", "D公司", "E公司"],
                                                    },
                                                    series: [
                                                        {
                                                            name: "",
                                                            type: "pie",
                                                            radius: ["30%", "50%"],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + "\n" + val.percent + "%";
                                                                },
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 15,
                                                                    length2: 15,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    value: 335,
                                                                    name: "A公司",
                                                                    itemStyle: {color: "#3AA1FF"},
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: "B公司",
                                                                    itemStyle: {color: "#59D4D4"},
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: "C公司",
                                                                    itemStyle: {color: "#4ECB73"},
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: "D公司",
                                                                    itemStyle: {color: "#F8D33D"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "E公司",
                                                                    itemStyle: {color: "#F2637B"},
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "欠钱公司占比",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "29%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    legend: {
                                                        left: "center",
                                                        top: "bottom",
                                                        data: ["A公司", "B公司", "C公司", "D公司", "E公司"],
                                                    },
                                                    series: [
                                                        {
                                                            name: "",
                                                            type: "pie",
                                                            radius: ["30%", "50%"],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + "\n" + val.percent + "%";
                                                                },
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 15,
                                                                    length2: 15,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    value: 335,
                                                                    name: "A公司",
                                                                    itemStyle: {color: "#3AA1FF"},
                                                                },
                                                                {
                                                                    value: 310,
                                                                    name: "B公司",
                                                                    itemStyle: {color: "#59D4D4"},
                                                                },
                                                                {
                                                                    value: 234,
                                                                    name: "C公司",
                                                                    itemStyle: {color: "#4ECB73"},
                                                                },
                                                                {
                                                                    value: 135,
                                                                    name: "D公司",
                                                                    itemStyle: {color: "#F8D33D"},
                                                                },
                                                                {
                                                                    value: 1548,
                                                                    name: "E公司",
                                                                    itemStyle: {color: "#F2637B"},
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "欠钱公司占比",
                                        time: true,
                                        select: true,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "100%",
                                            height: "500px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                type: 'table',
                                                border: true,
                                                isPagination: true,
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "350px",
                                                },
                                                height: '500px',
                                                columns: [
                                                    {prop: 'a', label: '批发商'},
                                                    {prop: 'b', label: '总体占比'},
                                                    {prop: 'c', label: '毛利'},
                                                    {prop: 'd', label: '92'},
                                                    {prop: 'e', label: '95'},
                                                    {prop: 'f', label: '98'},
                                                    {prop: 'g', label: '0'},
                                                    {prop: 'h', label: '总量（吨）'},
                                                    {prop: 'i', label: '欠款'},
                                                    {prop: 'j', label: '回款'},
                                                    {prop: 'k', label: '信用评估指数'},
                                                ],
                                                tableData: [
                                                    {
                                                        a: '批发商1',
                                                        b: '20%',
                                                        c: '11',
                                                        d: '2',
                                                        e: '2',
                                                        f: '2',
                                                        g: '2',
                                                        h: '2',
                                                        i: '2',
                                                        j: '2',
                                                        k: '2'
                                                    },
                                                    {
                                                        a: '批发商2',
                                                        b: '20%',
                                                        c: '11',
                                                        d: '2',
                                                        e: '2',
                                                        f: '2',
                                                        g: '2',
                                                        h: '2',
                                                        i: '2',
                                                        j: '2',
                                                        k: '2'
                                                    },
                                                    {
                                                        a: '批发商3',
                                                        b: '20%',
                                                        c: '11',
                                                        d: '2',
                                                        e: '2',
                                                        f: '2',
                                                        g: '2',
                                                        h: '2',
                                                        i: '2',
                                                        j: '2',
                                                        k: '2'
                                                    },
                                                    {
                                                        a: '批发商4',
                                                        b: '20%',
                                                        c: '11',
                                                        d: '2',
                                                        e: '2',
                                                        f: '2',
                                                        g: '2',
                                                        h: '2',
                                                        i: '2',
                                                        j: '2',
                                                        k: '2'
                                                    },
                                                ],
                                                option: {},
                                            },
                                        ],
                                    },
                                ],
                            },
                            {id: '', collapseTitle: "查看更多", EChartsBox: []}
                        ],
                    },
                    {
                        id: "e",
                        name: "油库状态",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "e_2020",
                                collapseTitle: "油库状态",
                                allQuery: true,
                                allQueryData: {
                                    input: false,
                                    select: false,
                                    time: true
                                },
                                EChartsBox: [
                                    {
                                        title: "油库 库存",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "49.5%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                    barWidth: 20,
                                                    tooltip: {
                                                        trigger: "axis",
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    xAxis: {
                                                        type: "category",
                                                        data: [
                                                            "Jan",
                                                            "Fab",
                                                            "Mar",
                                                            "Apr",
                                                            "May",
                                                            "Jun",
                                                            "Jul",
                                                            "Aug",
                                                            "Sep",
                                                            "Oct",
                                                            "Nov",
                                                            "Dec",
                                                        ],
                                                    },
                                                    yAxis: {
                                                        type: "value",
                                                    },
                                                    series: [
                                                        {
                                                            data: [
                                                                120,
                                                                200,
                                                                150,
                                                                80,
                                                                70,
                                                                110,
                                                                323,
                                                                123,
                                                                432,
                                                                54,
                                                                66,
                                                                777,
                                                            ],
                                                            type: "bar",
                                                            itemStyle: {
                                                                color: "#38A0FF",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "油库 进出",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "49.5%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                    barWidth: 20,
                                                    tooltip: {
                                                        trigger: "axis",
                                                        formatter: "{b} : {c}",
                                                        axisPointer: {
                                                            // 坐标轴指示器，坐标轴触发有效
                                                            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
                                                        },
                                                    },
                                                    xAxis: {
                                                        type: "category",
                                                        data: [
                                                            "Jan",
                                                            "Fab",
                                                            "Mar",
                                                            "Apr",
                                                            "May",
                                                            "Jun",
                                                            "Jul",
                                                            "Aug",
                                                            "Sep",
                                                            "Oct",
                                                            "Nov",
                                                            "Dec",
                                                        ],
                                                    },
                                                    yAxis: {
                                                        type: "value",
                                                    },
                                                    series: [
                                                        {
                                                            data: [
                                                                120,
                                                                200,
                                                                150,
                                                                80,
                                                                70,
                                                                110,
                                                                323,
                                                                123,
                                                                432,
                                                                54,
                                                                66,
                                                                777,
                                                            ],
                                                            type: "bar",
                                                            itemStyle: {
                                                                color: "#38A0FF",
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "油库桑基图",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        /*包裹ECharts的父级元素的属性*/
                                        style: {
                                            width: "100%",
                                            height: "450px",
                                            borderRadius: "10px",
                                            background: "white",
                                            marginBottom: "10px",
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
                                                        text: "{a|     省份访问TOP10}",
                                                        show: true,
                                                        x: "center",
                                                        textStyle: {
                                                            fontFamily: "幼圆",
                                                            lineHeight: 15,
                                                            rich: {
                                                                a: {
                                                                    color: "#FFF",
                                                                    fontSize: "15",
                                                                    height: 15,
                                                                    width: 15,
                                                                },
                                                            },
                                                        },
                                                    },

                                                    tooltip: {
                                                        trigger: "item",
                                                        triggerOn: "mousemove",
                                                    },
                                                    series: {
                                                        type: "sankey",
                                                        layout: "none",
                                                        right: "10%",
                                                        top: "20%",
                                                        focusNodeAdjacency: "inEdges",
                                                        label: {
                                                            color: "#FFF",
                                                        },
                                                        data: [
                                                            {
                                                                name: "a",
                                                            },
                                                            {
                                                                name: "b",
                                                            },
                                                            {
                                                                name: "a1",
                                                            },
                                                            {
                                                                name: "a2",
                                                            },
                                                            {
                                                                name: "b1",
                                                            },
                                                            {
                                                                name: "c",
                                                            },
                                                        ],
                                                        links: [
                                                            {
                                                                source: "a",
                                                                target: "a1",
                                                                value: 5,
                                                            },
                                                            {
                                                                source: "a",
                                                                target: "a2",
                                                                value: 3,
                                                            },
                                                            {
                                                                source: "b",
                                                                target: "b1",
                                                                value: 8,
                                                            },
                                                            {
                                                                source: "a",
                                                                target: "b1",
                                                                value: 3,
                                                            },
                                                            {
                                                                source: "b1",
                                                                target: "a1",
                                                                value: 1,
                                                            },
                                                            {
                                                                source: "b1",
                                                                target: "c",
                                                                value: 2,
                                                            },
                                                        ],
                                                        focusNodeAdjacency: true,
                                                        levels: [
                                                            {
                                                                depth: 0,
                                                                itemStyle: {
                                                                    color: "#ff82ce",
                                                                },
                                                                lineStyle: {
                                                                    color: "source",
                                                                    opacity: 0.5,
                                                                },
                                                            },
                                                            {
                                                                depth: 1,
                                                                itemStyle: {
                                                                    color: "#00aeff",
                                                                },
                                                                lineStyle: {
                                                                    color: "source",
                                                                    opacity: 0.6,
                                                                },
                                                            },
                                                            {
                                                                depth: 2,
                                                                itemStyle: {
                                                                    color: "#eae375",
                                                                },
                                                                lineStyle: {
                                                                    color: "source",
                                                                    opacity: 0.6,
                                                                },
                                                            },
                                                            {
                                                                depth: 3,
                                                                itemStyle: {
                                                                    color: "#f5eb4c",
                                                                },
                                                                lineStyle: {
                                                                    color: "source",
                                                                    opacity: 0.6,
                                                                },
                                                            },
                                                        ],
                                                        lineStyle: {
                                                            curveness: 0.5,
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                            {id: '', collapseTitle: "查看更多", EChartsBox: []}
                        ],
                    },
                ],
            };
        },
        methods: {
            selectionChange(v) {
                console.log(v);
            }
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
