<template>
    <div style="width: 100%;height: 100%;">
        <my-collapse-base :collapseData="collapseData" ref="collapse"></my-collapse-base>
    </div>
</template>

<script>
import MyCollapseBase from "../../components/common/myCollapseBase";
export default {
    name: "media",
    components: { MyCollapseBase },
    data() {
        return {
            collapseData: [
                {
                    id: "revenue",
                    name: "营收",
                    icon: require("../../assets/business/icon_1-1.png"),
                    iconActive: require("../../assets/business/icon_1-2.png"),
                    collapseItem: [
                        {
                            id: "revenue_2020",
                            collapseTitle: "2020年营收",
                            EChartsBox: [
                                {
                                    title: "",
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
                                                                // barBorderRadius: [30, 30, 30, 30],
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "目标达成率",
                                    time: true,
                                    select: false,
                                    timeValue: "",
                                    selectValue: "",
                                    style: {
                                        width: "59%",
                                        height: "450px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "70%",
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
                                                        radius: ["30%", "50%"],
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
                                                                "档案",
                                                                "自由媒体",
                                                                "外有媒体",
                                                                "设计策划",
                                                            ];
                                                            let datas = [1.45, 2.93, 3.15, 4];
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
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "30%",
                                                height: "400px",
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
                                                    formatter: function (params) {
                                                        return params.name + "：" + params.percent + " %";
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
                                                                        color: "#4FADFD",
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
                                                                        color: "#E1E8EE",
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
                            id: "revenue_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: []
                        },

                    ],
                },
                {
                    id: "profit",
                    name: "利润",
                    icon: require("../../assets/business/icon_2-1.png"),
                    iconActive: require("../../assets/business/icon_2-2.png"),
                    collapseItem: [
                        {
                            id: "profit_2020",
                            collapseTitle: "2020年利润",
                            EChartsBox: [
                                {
                                    title: "",
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
                                                                // barBorderRadius: [30, 30, 30, 30],
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "目标达成率",
                                    time: true,
                                    select: false,
                                    timeValue: "",
                                    selectValue: "",
                                    style: {
                                        width: "59%",
                                        height: "450px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "70%",
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
                                                        radius: ["30%", "50%"],
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
                                                                "档案",
                                                                "自由媒体",
                                                                "外有媒体",
                                                                "设计策划",
                                                            ];
                                                            let datas = [1.45, 2.93, 3.15, 4];
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
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "30%",
                                                height: "400px",
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
                                                    formatter: function (params) {
                                                        return params.name + "：" + params.percent + " %";
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
                                                                        color: "#4FADFD",
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
                                                                        color: "#E1E8EE",
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
                            id: "profit_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: []
                        },
                    ],
                },
                {
                    id: "cost",
                    name: "成本",
                    icon: require("../../assets/business/icon_3-1.png"),
                    iconActive: require("../../assets/business/icon_3-2.png"),
                    collapseItem: [
                        {
                            id: "cost_2020",
                            collapseTitle: "2020年成本",
                            EChartsBox: [
                                {
                                    title: "",
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
                                                                // barBorderRadius: [30, 30, 30, 30],
                                                            },
                                                        },
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                                {
                                    title: "目标达成率",
                                    time: true,
                                    select: false,
                                    timeValue: "",
                                    selectValue: "",
                                    style: {
                                        width: "59%",
                                        height: "450px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "70%",
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
                                                        radius: ["30%", "50%"],
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
                                                            let title = ["其他", "折旧", "人员管理"];
                                                            let datas = [1.45, 2.93, 3.15];
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
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "30%",
                                                height: "400px",
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
                                                    formatter: function (params) {
                                                        return params.name + "：" + params.percent + " %";
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
                                                                        color: "#4FADFD",
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
                                                                        color: "#E1E8EE",
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
                {
                    id: "unitofarea",
                    name: "面积/个数",
                    icon: require("../../assets/business/icon_2-1.png"),
                    iconActive: require("../../assets/business/icon_2-2.png"),
                    collapseItem: [
                        {
                            id: "unitofarea_2020",
                            collapseTitle: "2020年面积与个数",
                            EChartsBox: [
                                {
                                    title: "",
                                    time: true,
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
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "30%",
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
                                                        radius: ["30%", "50%"],
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
                                                            let title = ["May", "Tom", "Mary", "Jim", "Tony"];
                                                            let datas = [1.45, 2.93, 3.15, 6, 5];
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
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "20%",
                                                height: "400px",
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
                                                    formatter: function (params) {
                                                        return params.name + "：" + params.percent + " %";
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
                                                                        color: "#4FADFD",
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
                                                                        color: "#E1E8EE",
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
                            id: "unitofarea_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: []
                        },
                    ],
                },
                {
                    id: "vacancyrate",
                    name: "空置率",
                    icon: require("../../assets/business/icon_2-1.png"),
                    iconActive: require("../../assets/business/icon_2-2.png"),
                    collapseItem: [
                        {
                            id: "vacancyrate_2020",
                            collapseTitle: "2020年空置率",
                            EChartsBox: [
                                {
                                    title: "当前空置率",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "49.5%",
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
                                                        radius: ["30%", "50%"],
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
                                                            let title = ["May", "Tom", "Mary", "Jim", "Tony"];
                                                            let datas = [1.45, 2.93, 3.15, 6, 5];
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
                                    title: "累计空置率",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "49.5%",
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
                                                        radius: ["30%", "50%"],
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
                                                            let title = ["May", "Tom", "Mary", "Jim", "Tony"];
                                                            let datas = [1.45, 2.93, 3.15, 6, 5];
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
                                    title: "",
                                    time: false,
                                    select: true,
                                    timeValue: "",
                                    style: {
                                        width: "100%",
                                        height: "100px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "50px",
                                            },
                                            option: {},
                                        },
                                    ],
                                },
                                {
                                    title: "已经出售、未售出、已锁定、建设中（当前）",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "49.5%",
                                        height: "600px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "550px",
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
                                                        radius: ["30%", "50%"],
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
                                                                        "#1fcaa8",
                                                                        "#15b3e2",
                                                                        "#f69f41",
                                                                        "#f2535f",
                                                                        "#2e65fd",
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
                                                                "京珠高速",
                                                                "汉十高速",
                                                                "黄黄高速",
                                                                "鄂西高速",
                                                                "荆岳高速",
                                                                "武英高速",
                                                                "麻武高速",
                                                                "九江高速",
                                                                "恩来高速",
                                                                "宜巴高速",
                                                                "十房高速",
                                                            ];
                                                            let datas = [
                                                                1.45,
                                                                2.93,
                                                                3.15,
                                                                6,
                                                                5,
                                                                1.45,
                                                                2.93,
                                                                3.15,
                                                                6,
                                                                5,
                                                                10,
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
                                    title: "已经出售、未售出、已锁定、建设中（累计）",
                                    time: false,
                                    timeValue: "",
                                    style: {
                                        width: "49.5%",
                                        height: "600px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "550px",
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
                                                        radius: ["30%", "50%"],
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
                                                                        "#1fcaa8",
                                                                        "#15b3e2",
                                                                        "#f69f41",
                                                                        "#f2535f",
                                                                        "#2e65fd",
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
                                                                "京珠高速",
                                                                "汉十高速",
                                                                "黄黄高速",
                                                                "鄂西高速",
                                                                "荆岳高速",
                                                                "武英高速",
                                                                "麻武高速",
                                                                "九江高速",
                                                                "恩来高速",
                                                                "宜巴高速",
                                                                "十房高速",
                                                            ];
                                                            let datas = [
                                                                1.45,
                                                                2.93,
                                                                3.15,
                                                                6,
                                                                5,
                                                                1.45,
                                                                2.93,
                                                                3.15,
                                                                6,
                                                                5,
                                                                10,
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
                            ],
                        },
                        {
                            id: "vacancyrate_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: []
                        },
                    ],
                },
                {
                    id: "map",
                    name: "地图展示",
                    icon: require("../../assets/business/icon_2-1.png"),
                    iconActive: require("../../assets/business/icon_2-2.png"),
                    collapseItem: [
                        {
                            id: "map_2020",
                            collapseTitle: "GIS地图展示传媒",

                            EChartsBox: [
                                {
                                    title: "GIS地图展示传媒",
                                    time: false,
                                    select: true,
                                    timeValue: "",

                                    style: {
                                        width: "100%",
                                        height: "650px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            type: "map",
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "600px",
                                            },
                                            option: {},
                                        },
                                    ],
                                },
                                {
                                    title: "",
                                    time: false,
                                    select: false,
                                    timeValue: "",

                                    style: {
                                        cursor: "pointer",
                                        width: "100%",
                                        height: "600px",
                                        borderRadius: "10px",
                                        background: "white",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            type: "table",
                                            height: "600px",
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "500px",
                                                background: "#FFF",
                                            },
                                            isPagination: true,
                                            columns: [
                                                { prop: "a", label: "媒体编号" },
                                                { prop: "b", label: "高速路段" },
                                                { prop: "c", label: "媒体类型" },
                                                { prop: "d", label: "运营公司" },
                                                { prop: "e", label: "评估等级" },
                                                { prop: "f", label: "负责人/电话" },
                                                { prop: "g", label: "操作" },
                                            ],
                                            tableData: [
                                                {
                                                    a: "CM-YZ-K26",
                                                    b: "宜张高速",
                                                    c: "双面立柱",
                                                    d: "交投传媒",
                                                    e: "A",
                                                    f: "小明/4546545545",
                                                    g: "详情",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "map_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: []
                        },
                    ],
                },
                {
                    id: "flow",
                    name: "车流量",
                    icon: require("../../assets/business/icon_2-1.png"),
                    iconActive: require("../../assets/business/icon_2-2.png"),
                    collapseItem: [
                        {
                            id: "flow_2020",
                            collapseTitle: "高数车流量",

                            EChartsBox: [
                                {
                                    title: "高数车流量",
                                    time: false,
                                    select: true,
                                    timeValue: "",

                                    style: {
                                        width: "100%",
                                        height: "950px",
                                        background: "white",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    },
                                    EChartsItem: [
                                        {
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "900px",
                                            },
                                            option: {
                                                xAxis: {
                                                    type: "category",
                                                    data: [
                                                        "Mon",
                                                        "Tue",
                                                        "Wed",
                                                        "Thu",
                                                        "Fri",
                                                        "Sat",
                                                        "Sun",
                                                    ],
                                                },
                                                yAxis: {
                                                    type: "value",
                                                },
                                                series: [
                                                    {
                                                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                                                        type: "line",
                                                    },
                                                    {
                                                        data: [80, 92, 90, 93, 190, 130, 120],
                                                        type: "line",
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "flow_gd",
                            collapseTitle: "查看更多",
                            EChartsBox: []
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style scoped></style>
