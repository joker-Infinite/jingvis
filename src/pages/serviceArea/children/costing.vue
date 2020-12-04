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
                    id: "cost",
                    name: "成本",
                    icon: require("../../../assets/business/icon_3-1.png"),
                    iconActive: require("../../../assets/business/icon_3-2.png"),
                    collapseItem: [
                        {
                            id: "cost_2020",
                            year: 2020,
                            collapseTitle: "2020年成本",
                            allQuery: true,
                            allQueryData: {
                                input: false,
                                select: false,
                                time: true
                            },
                            EChartsBox: [
                                {
                                    title: "实际成本",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "40%",
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
                                                            val[0].name +
                                                            ":" +
                                                            val[0].value +
                                                            "元"
                                                        );
                                                    },
                                                },
                                                grid: {
                                                    top: "50",
                                                    right: "40",
                                                    left: "60",
                                                    bottom: "60", //图表尺寸大小
                                                },
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
                                                            formatter:
                                                                "{value}",
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
                                                    {
                                                        data: [],
                                                        type: "line",
                                                        name: "折线图",
                                                        // symbol: 'none',
                                                        lineStyle: {
                                                            color: "#fea2a2",
                                                            width: 2,
                                                            shadowColor:
                                                                "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                                            shadowBlur: 10,
                                                            shadowOffsetY: 10,
                                                        },
                                                        areaStyle: {
                                                            normal: {
                                                                color:
                                                                    "rgba(0,0,0,0)",
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "业态占比",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "29.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            style: {
                                                width: "100%",
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
                                                                    fontSize: 16,
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
                                                            let datas = [
                                                                1.45,
                                                                2.93,
                                                                3.15,
                                                                4,
                                                                5,
                                                            ];
                                                            datas.forEach((element, index) => {
                                                                data.push({
                                                                    name: title[index],
                                                                    value: element,
                                                                });
                                                            });
                                                            return data;
                                                        })(),
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "片区占比",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "29.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            style: {
                                                width: "100%",
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
                                                },

                                                series: [
                                                    {
                                                        type: "pie",
                                                        minAngle: 5,
                                                        avoidLabelOverlap: true,
                                                        center: ["48%", "50%"],
                                                        radius: ["30%", "38%"],
                                                        clockwise: true,
                                                        hoverOffset: 20,
                                                        itemStyle: {
                                                            normal: {
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
                                                                    // let text = v.percent + "%";
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
                                {
                                    title: "公司成本种类预算成本",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "50%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginTop: "5px",
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
                                                    top: 20,
                                                    left: 20,
                                                },
                                                tooltip: {
                                                    trigger: "axis",
                                                    formatter: function (val) {
                                                        return (
                                                            val[0].name +
                                                            ":" +
                                                            val[0].value +
                                                            "元" +
                                                            "<br>" +
                                                            val[1].value +
                                                            "元" +
                                                            "<br>" +
                                                            "实际占比:" +
                                                            val[2].value +
                                                            "%"
                                                        );
                                                    },
                                                },
                                                grid: {
                                                    left: "3%",
                                                    right: "4%",
                                                    bottom: "3%",
                                                    containLabel: true,
                                                },
                                                xAxis: {
                                                    type: "value",
                                                    splitLine: {
                                                        show: false,
                                                    },
                                                    axisTick: {
                                                        show: false,
                                                    },
                                                    axisLine: {
                                                        show: false,
                                                    },
                                                    axisLabel: {
                                                        show: false,
                                                    },
                                                },
                                                yAxis: {
                                                    type: "category",
                                                    data: [
                                                        "北京",
                                                        "上海",
                                                        "天津",
                                                        "深圳",
                                                        "456",
                                                        "7889",
                                                        "99789",
                                                    ],
                                                    splitLine: {
                                                        show: false,
                                                    },
                                                    axisTick: {
                                                        show: false,
                                                    },
                                                    axisLine: {
                                                        show: false,
                                                    },
                                                },
                                                series: [
                                                    {
                                                        name: "A门店",
                                                        type: "bar",
                                                        stack: "总量",
                                                        barWidth: 20,
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "#379DFB",
                                                                barBorderRadius: [
                                                                    5,
                                                                    5,
                                                                    5,
                                                                    5,
                                                                ],
                                                            },
                                                        },
                                                        label: {
                                                            normal: {
                                                                show: true,
                                                                color: "#fff",
                                                                position:
                                                                    "insideRight",
                                                            },
                                                        },
                                                        z: 10,
                                                        data: [
                                                            320,
                                                            302,
                                                            301,
                                                            543,
                                                            320,
                                                            302,
                                                            301,
                                                        ],
                                                    },
                                                    {
                                                        name: "B门店",
                                                        type: "bar",
                                                        stack: "总量",
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "#dfe5f1",
                                                                shadowBlur: [
                                                                    0,
                                                                    0,
                                                                    0,
                                                                    10,
                                                                ],
                                                                barBorderRadius: [
                                                                    5,
                                                                    5,
                                                                    5,
                                                                    5,
                                                                ],
                                                            },
                                                        },
                                                        label: {
                                                            normal: {
                                                                show: true,
                                                                color: "#000",
                                                                position:
                                                                    "insideRight",
                                                            },
                                                        },
                                                        z: 5,
                                                        data: [
                                                            90,
                                                            230,
                                                            210,
                                                            432,
                                                            320,
                                                            302,
                                                            301,
                                                        ],
                                                    },
                                                    {
                                                        name: "B门店",
                                                        type: "bar",
                                                        stack: "总量",
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "rgba(237,125,49, 0)",
                                                                shadowBlur: [
                                                                    0,
                                                                    0,
                                                                    0,
                                                                    10,
                                                                ],
                                                                barBorderRadius: [
                                                                    5,
                                                                    5,
                                                                    5,
                                                                    5,
                                                                ],
                                                            },
                                                        },
                                                        label: {
                                                            normal: {
                                                                color: "red",
                                                                show: true,
                                                                position: [
                                                                    10,
                                                                    5,
                                                                ],
                                                                formatter:
                                                                    "{c}%",
                                                            },
                                                        },
                                                        z: 5,
                                                        data: [
                                                            10,
                                                            10,
                                                            10,
                                                            100,
                                                            10,
                                                            10,
                                                            10,
                                                        ],
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "总公司成本",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "49.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginTop: "5px",
                                    },
                                    EChartsItem: [
                                        {
                                            type: "box",
                                            style: {
                                                width: "30%",
                                                height: "300px",
                                                position: "relative",
                                                style: {
                                                    content: "2000万",
                                                    width: "75%",
                                                    color: "#fff",
                                                    height: "100px",
                                                    background: "#38d",
                                                    position: "absolute",
                                                    top: "100px",
                                                    left: "10%",
                                                    borderRadius: "10px",
                                                    lineHeight: "100px",
                                                    fontWeight: 700,
                                                    textAlign: "center",
                                                    fontSize: "30px",
                                                },
                                            },
                                            option: {},
                                        },
                                        {
                                            type: "box",
                                            /*ECharts的属性*/
                                            style: {
                                                width: "30%",
                                                height: "300px",
                                                position: "relative",
                                                style: {
                                                    content: "9999万",
                                                    width: "75%",
                                                    color: "#fff",
                                                    height: "100px",
                                                    background: "#81dd9d",
                                                    position: "absolute",
                                                    top: "150px",
                                                    left: "10%",
                                                    borderRadius: "10px",
                                                    lineHeight: "100px",
                                                    fontWeight: 700,
                                                    textAlign: "center",
                                                    fontSize: "30px",
                                                },
                                            },
                                            option: {},
                                        },
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "40%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: {
                                                    text: 66 + "%",
                                                    x: "center",
                                                    y: "center",
                                                    textStyle: {
                                                        fontWeight: "normal",
                                                        color: "#29EEF3",
                                                        fontSize: "25",
                                                    },
                                                },
                                                tooltip: {
                                                    formatter: function (
                                                        params
                                                    ) {
                                                        return (
                                                            params.name +
                                                            "：" +
                                                            params.percent +
                                                            " %"
                                                        );
                                                    },
                                                },
                                                series: [
                                                    {
                                                        name: "circle",
                                                        type: "pie",
                                                        clockWise: true,
                                                        radius: ["50%", "66%"],
                                                        itemStyle: {
                                                            normal: {
                                                                label: {
                                                                    show: false,
                                                                },
                                                                labelLine: {
                                                                    show: false,
                                                                },
                                                            },
                                                        },
                                                        hoverAnimation: false,
                                                        data: [
                                                            {
                                                                value: 66,
                                                                name: "占比",
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: {
                                                                            // 颜色渐变
                                                                            colorStops: [
                                                                                {
                                                                                    offset: 0,
                                                                                    color:
                                                                                        "#4FADFD", // 0% 处的颜色
                                                                                },
                                                                                {
                                                                                    offset: 1,
                                                                                    color:
                                                                                        "#28E8FA", // 100% 处的颜色1
                                                                                },
                                                                            ],
                                                                        },
                                                                        label: {
                                                                            show: false,
                                                                        },
                                                                        labelLine: {
                                                                            show: false,
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                            {
                                                                name: "剩余",
                                                                value: 100 - 66,
                                                                itemStyle: {
                                                                    normal: {
                                                                        color:
                                                                            "#E1E8EE",
                                                                    },
                                                                },
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
                        {
                            id: "cost_2019",
                            year: 2019,
                            collapseTitle: "2019年成本",
                            allQuery: true,
                            allQueryData: {
                                input: false,
                                select: false,
                                time: true
                            },
                            EChartsBox: [
                                {
                                    title: "实际成本",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "40%",
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
                                                            val[0].name +
                                                            ":" +
                                                            val[0].value +
                                                            "元"
                                                        );
                                                    },
                                                },
                                                grid: {
                                                    top: "50",
                                                    right: "40",
                                                    left: "60",
                                                    bottom: "60", //图表尺寸大小
                                                },
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
                                                            formatter:
                                                                "{value}",
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
                                                    {
                                                        data: [],
                                                        type: "line",
                                                        name: "折线图",
                                                        // symbol: 'none',
                                                        lineStyle: {
                                                            color: "#fea2a2",
                                                            width: 2,
                                                            shadowColor:
                                                                "rgba(0, 0, 0, 0.3)", //设置折线阴影
                                                            shadowBlur: 10,
                                                            shadowOffsetY: 10,
                                                        },
                                                        areaStyle: {
                                                            normal: {
                                                                color:
                                                                    "rgba(0,0,0,0)",
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "业态占比",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "29.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            style: {
                                                width: "100%",
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
                                                                    fontSize: 16,
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
                                                            let datas = [
                                                                1.45,
                                                                2.93,
                                                                3.15,
                                                                4,
                                                                5,
                                                            ];
                                                            datas.forEach((element, index) => {
                                                                data.push({
                                                                    name: title[index],
                                                                    value: element,
                                                                });
                                                            });
                                                            return data;
                                                        })(),
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "片区占比",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "29.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            style: {
                                                width: "100%",
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
                                                },

                                                series: [
                                                    {
                                                        type: "pie",
                                                        minAngle: 5,
                                                        avoidLabelOverlap: true,
                                                        center: ["48%", "50%"],
                                                        radius: ["30%", "38%"],
                                                        clockwise: true,
                                                        hoverOffset: 20,
                                                        itemStyle: {
                                                            normal: {
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
                                                                    // let text = v.percent + "%";
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
                                {
                                    title: "公司成本种类预算成本",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "50%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginTop: "5px",
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
                                                    top: 20,
                                                    left: 20,
                                                },
                                                tooltip: {
                                                    trigger: "axis",
                                                    formatter: function (val) {
                                                        return (
                                                            val[0].name +
                                                            ":" +
                                                            val[0].value +
                                                            "元" +
                                                            "<br>" +
                                                            val[1].value +
                                                            "元" +
                                                            "<br>" +
                                                            "实际占比:" +
                                                            val[2].value +
                                                            "%"
                                                        );
                                                    },
                                                },
                                                grid: {
                                                    left: "3%",
                                                    right: "4%",
                                                    bottom: "3%",
                                                    containLabel: true,
                                                },
                                                xAxis: {
                                                    type: "value",
                                                    splitLine: {
                                                        show: false,
                                                    },
                                                    axisTick: {
                                                        show: false,
                                                    },
                                                    axisLine: {
                                                        show: false,
                                                    },
                                                    axisLabel: {
                                                        show: false,
                                                    },
                                                },
                                                yAxis: {
                                                    type: "category",
                                                    data: [
                                                        "北京",
                                                        "上海",
                                                        "天津",
                                                        "深圳",
                                                        "456",
                                                        "7889",
                                                        "99789",
                                                    ],
                                                    splitLine: {
                                                        show: false,
                                                    },
                                                    axisTick: {
                                                        show: false,
                                                    },
                                                    axisLine: {
                                                        show: false,
                                                    },
                                                },
                                                series: [
                                                    {
                                                        name: "A门店",
                                                        type: "bar",
                                                        stack: "总量",
                                                        barWidth: 20,
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "#379DFB",
                                                                barBorderRadius: [
                                                                    5,
                                                                    5,
                                                                    5,
                                                                    5,
                                                                ],
                                                            },
                                                        },
                                                        label: {
                                                            normal: {
                                                                show: true,
                                                                color: "#fff",
                                                                position:
                                                                    "insideRight",
                                                            },
                                                        },
                                                        z: 10,
                                                        data: [
                                                            320,
                                                            302,
                                                            301,
                                                            543,
                                                            320,
                                                            302,
                                                            301,
                                                        ],
                                                    },
                                                    {
                                                        name: "B门店",
                                                        type: "bar",
                                                        stack: "总量",
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "#dfe5f1",
                                                                shadowBlur: [
                                                                    0,
                                                                    0,
                                                                    0,
                                                                    10,
                                                                ],
                                                                barBorderRadius: [
                                                                    5,
                                                                    5,
                                                                    5,
                                                                    5,
                                                                ],
                                                            },
                                                        },
                                                        label: {
                                                            normal: {
                                                                show: true,
                                                                color: "#000",
                                                                position:
                                                                    "insideRight",
                                                            },
                                                        },
                                                        z: 5,
                                                        data: [
                                                            90,
                                                            230,
                                                            210,
                                                            432,
                                                            320,
                                                            302,
                                                            301,
                                                        ],
                                                    },
                                                    {
                                                        name: "B门店",
                                                        type: "bar",
                                                        stack: "总量",
                                                        itemStyle: {
                                                            normal: {
                                                                color:
                                                                    "rgba(237,125,49, 0)",
                                                                shadowBlur: [
                                                                    0,
                                                                    0,
                                                                    0,
                                                                    10,
                                                                ],
                                                                barBorderRadius: [
                                                                    5,
                                                                    5,
                                                                    5,
                                                                    5,
                                                                ],
                                                            },
                                                        },
                                                        label: {
                                                            normal: {
                                                                color: "red",
                                                                show: true,
                                                                position: [
                                                                    10,
                                                                    5,
                                                                ],
                                                                formatter:
                                                                    "{c}%",
                                                            },
                                                        },
                                                        z: 5,
                                                        data: [
                                                            10,
                                                            10,
                                                            10,
                                                            100,
                                                            10,
                                                            10,
                                                            10,
                                                        ],
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "总公司成本",
                                    time: false,
                                    select: false,
                                    style: {
                                        width: "49.5%",
                                        height: "350px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                        marginTop: "5px",
                                    },
                                    EChartsItem: [
                                        {
                                            type: "box",
                                            style: {
                                                width: "30%",
                                                height: "300px",
                                                position: "relative",
                                                style: {
                                                    content: "2000万",
                                                    width: "75%",
                                                    color: "#fff",
                                                    height: "100px",
                                                    background: "#38d",
                                                    position: "absolute",
                                                    top: "100px",
                                                    left: "10%",
                                                    borderRadius: "10px",
                                                    lineHeight: "100px",
                                                    fontWeight: 700,
                                                    textAlign: "center",
                                                    fontSize: "30px",
                                                },
                                            },
                                            option: {},
                                        },
                                        {
                                            type: "box",
                                            /*ECharts的属性*/
                                            style: {
                                                width: "30%",
                                                height: "300px",
                                                position: "relative",
                                                style: {
                                                    content: "9999万",
                                                    width: "75%",
                                                    color: "#fff",
                                                    height: "100px",
                                                    background: "#81dd9d",
                                                    position: "absolute",
                                                    top: "150px",
                                                    left: "10%",
                                                    borderRadius: "10px",
                                                    lineHeight: "100px",
                                                    fontWeight: 700,
                                                    textAlign: "center",
                                                    fontSize: "30px",
                                                },
                                            },
                                            option: {},
                                        },
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "40%",
                                                height: "300px",
                                            },
                                            option: {
                                                title: {
                                                    text: 66 + "%",
                                                    x: "center",
                                                    y: "center",
                                                    textStyle: {
                                                        fontWeight: "normal",
                                                        color: "#29EEF3",
                                                        fontSize: "25",
                                                    },
                                                },
                                                tooltip: {
                                                    formatter: function (
                                                        params
                                                    ) {
                                                        return (
                                                            params.name +
                                                            "：" +
                                                            params.percent +
                                                            " %"
                                                        );
                                                    },
                                                },
                                                series: [
                                                    {
                                                        name: "circle",
                                                        type: "pie",
                                                        clockWise: true,
                                                        radius: ["50%", "66%"],
                                                        itemStyle: {
                                                            normal: {
                                                                label: {
                                                                    show: false,
                                                                },
                                                                labelLine: {
                                                                    show: false,
                                                                },
                                                            },
                                                        },
                                                        hoverAnimation: false,
                                                        data: [
                                                            {
                                                                value: 66,
                                                                name: "占比",
                                                                itemStyle: {
                                                                    normal: {
                                                                        color: {
                                                                            // 颜色渐变
                                                                            colorStops: [
                                                                                {
                                                                                    offset: 0,
                                                                                    color:
                                                                                        "#4FADFD", // 0% 处的颜色
                                                                                },
                                                                                {
                                                                                    offset: 1,
                                                                                    color:
                                                                                        "#28E8FA", // 100% 处的颜色1
                                                                                },
                                                                            ],
                                                                        },
                                                                        label: {
                                                                            show: false,
                                                                        },
                                                                        labelLine: {
                                                                            show: false,
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                            {
                                                                name: "剩余",
                                                                value: 100 - 66,
                                                                itemStyle: {
                                                                    normal: {
                                                                        color:
                                                                            "#E1E8EE",
                                                                    },
                                                                },
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
                        {
                            id: "cost_gd",
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
                // this.$nextTick(_ => {
                //     this.$refs['collapse'].searchClick(this.arrData)
                // })
            })
        },
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
        // await this.obtainData('营收', '2019');
        // await this.obtainData('营收', '2020');
        // await this.obtainData('利润', '2019');
        // await this.obtainData('利润', '2020');
    },
    watch: {
        viewChange() {
            this.$refs["collapse"].refresh(this.collapseData);
        },
    }
}
</script>