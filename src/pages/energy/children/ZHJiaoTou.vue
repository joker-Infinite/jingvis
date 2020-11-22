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
        name: "ZHJiaoTou",
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
                        name: "营收",
                        icon: require("../../../assets/business/icon_1-1.png"),
                        iconActive: require("../../../assets/business/icon_1-2.png"),
                        collapseItem: [
                            {
                                id: "revenue_2020",
                                collapseTitle: "2020年营收",
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
                                                                let datas = [1.45, 2.93, 3.15, 4, 5];
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
                    {
                        id: "profit",
                        name: "利润",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "profit_2020",
                                collapseTitle: "2020年利润",
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
                    {
                        id: "piling",
                        name: "批零差价",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "piling_2020",
                                collapseTitle: "2020年批零差价",
                                EChartsBox: [
                                    {
                                        title: "油品批零差价默认展示总量",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "100%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px',
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
                                                        text: '',
                                                        top: 20,
                                                        left: '2%'
                                                    },
                                                    tooltip: {
                                                        trigger: 'axis'
                                                    },
                                                    legend: {
                                                        data: ['总量', '汽油', '柴油', '92', '95', '96', '0']
                                                    },
                                                    grid: {
                                                        left: '3%',
                                                        right: '4%',
                                                        top: '20%',
                                                        bottom: '3%',
                                                        containLabel: true
                                                    },
                                                    xAxis: {
                                                        type: 'category',
                                                        boundaryGap: false,
                                                        data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                                    },
                                                    yAxis: {
                                                        type: 'value'
                                                    },
                                                    series: [
                                                        {
                                                            name: '总量',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [120, 132, 101, 134, 90, 230, 210, 32, 12, 453, 321, 453]
                                                        },
                                                        {
                                                            name: '汽油',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [220, 182, 191, 234, 290, 330, 310, 43, 231, 546, 456, 546]
                                                        },
                                                        {
                                                            name: '柴油',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [150, 232, 201, 154, 190, 330, 410, 55, 33, 553, 456, 553]
                                                        },
                                                        {
                                                            name: '92',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [320, 332, 301, 334, 390, 330, 320, 321, 432, 675, 156, 675]
                                                        },
                                                        {
                                                            name: '95',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [820, 932, 901, 934, 1290, 1330, 1320, 321, 901, 765, 489, 765]
                                                        },
                                                        {
                                                            name: '96',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [321, 435, 654, 876, 987, 524, 214, 458, 465, 123, 156, 123]
                                                        },
                                                        {
                                                            name: '0',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [489, 43, 1456, 345, 1459, 735, 156, 156, 12, 56, 35, 56]
                                                        },
                                                    ]
                                                }
                                            },
                                        ],
                                    },
                                    {
                                        title: "销量环形对比单位（吨）",
                                        time: true,
                                        timeValue: "",
                                        style: {
                                            width: "100%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom: '10px',
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "49%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                                                    },
                                                    legend: {
                                                        left: 'center',
                                                        top: 'bottom',
                                                        data: ['柴油', '汽油']
                                                    },
                                                    series: [
                                                        {
                                                            name: '',
                                                            type: 'pie',
                                                            radius: ['50%', '70%'],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + '\n' + val.percent + '%'
                                                                }
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 20,
                                                                    length2: 30,
                                                                    lineStyle: {
                                                                        width: 1
                                                                    }
                                                                }
                                                            },
                                                            data: [
                                                                {value: 335, name: '柴油'},
                                                                {value: 310, name: '汽油'},
                                                            ]
                                                        },
                                                        {
                                                            name: '访问来源',
                                                            type: 'pie',
                                                            radius: ['50%', '70%'],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                position: 'inner',
                                                                formatter: '{b}：{c}亿元',
                                                            },
                                                            emphasis: {
                                                                label: {
                                                                    show: true,
                                                                    fontSize: '30',
                                                                    fontWeight: 'bold'
                                                                }
                                                            },
                                                            labelLine: {
                                                                show: true
                                                            },
                                                            data: [
                                                                {value: 335, name: '柴油'},
                                                                {value: 310, name: '汽油'},
                                                            ]
                                                        }

                                                    ]
                                                },
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "49%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                                                    },
                                                    legend: {
                                                        left: 'center',
                                                        top: 'bottom',
                                                        data: ['柴油', '汽油']
                                                    },
                                                    series: [
                                                        {
                                                            name: '',
                                                            type: 'pie',
                                                            radius: ['50%', '70%'],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + '\n' + val.percent + '%'
                                                                }
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 20,
                                                                    length2: 30,
                                                                    lineStyle: {
                                                                        width: 1
                                                                    }
                                                                }
                                                            },
                                                            data: [
                                                                {value: 335, name: '柴油'},
                                                                {value: 310, name: '汽油'},
                                                            ]
                                                        },
                                                        {
                                                            name: '访问来源',
                                                            type: 'pie',
                                                            radius: ['50%', '70%'],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                position: 'inner',
                                                                formatter: '{b}：{c}亿元',
                                                            },
                                                            emphasis: {
                                                                label: {
                                                                    show: true,
                                                                    fontSize: '30',
                                                                    fontWeight: 'bold'
                                                                }
                                                            },
                                                            labelLine: {
                                                                show: true
                                                            },
                                                            data: [
                                                                {value: 335, name: '柴油'},
                                                                {value: 310, name: '汽油'},
                                                            ]
                                                        }

                                                    ]
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "订单个数每月统计",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "59.5%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom:'10px'
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
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    color: '#3AA1FF',
                                                    barWidth: 20,
                                                    xAxis: {
                                                        type: 'category',
                                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                                    },
                                                    yAxis: {
                                                        type: 'value'
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        borderColor: 'rgba(255,255,255,.3)',
                                                        backgroundColor: 'rgba(13,5,30,.6)',
                                                        borderWidth: 1,
                                                        padding: 5,
                                                    },
                                                    series: [{
                                                        data: [120, 200, 150, 80, 70, 110, 130],
                                                        type: 'bar',
                                                    }]
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "各个高速的订单个数占比",
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
                                            marginBottom:'10px'
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
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                                                    },
                                                    legend: {
                                                        left: 'center',
                                                        top: 'bottom',
                                                        data: ['柴油', '汽油']
                                                    },
                                                    series: [
                                                        {
                                                            name: '',
                                                            type: 'pie',
                                                            radius: ['50%', '70%'],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                formatter: function (val) {
                                                                    return val.name + '\n' + val.percent + '%'
                                                                }
                                                            },
                                                            labelLine: {
                                                                normal: {
                                                                    length: 20,
                                                                    length2: 30,
                                                                    lineStyle: {
                                                                        width: 1
                                                                    }
                                                                }
                                                            },
                                                            data: [
                                                                {value: 335, name: '柴油'},
                                                                {value: 310, name: '汽油'},
                                                            ]
                                                        },
                                                        {
                                                            name: '访问来源',
                                                            type: 'pie',
                                                            radius: ['50%', '70%'],
                                                            avoidLabelOverlap: false,
                                                            label: {
                                                                position: 'inner',
                                                                formatter: '{b}：{c}亿元',
                                                            },
                                                            emphasis: {
                                                                label: {
                                                                    show: true,
                                                                    fontSize: '30',
                                                                    fontWeight: 'bold'
                                                                }
                                                            },
                                                            labelLine: {
                                                                show: true
                                                            },
                                                            data: [
                                                                {value: 335, name: '柴油'},
                                                                {value: 310, name: '汽油'},
                                                            ]
                                                        }

                                                    ]
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "各个高速订单个数",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
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
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    color: '#3AA1FF',
                                                    barWidth: 20,
                                                    xAxis: {
                                                        type: 'value'
                                                    },
                                                    yAxis: {

                                                        type: 'category',
                                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        borderColor: 'rgba(255,255,255,.3)',
                                                        backgroundColor: 'rgba(13,5,30,.6)',
                                                        borderWidth: 1,
                                                        padding: 5,
                                                    },
                                                    series: [{
                                                        data: [120, 200, 150, 80, 70, 110, 130],
                                                        type: 'bar',
                                                    }]
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "点击高速展示加油站订单个数",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
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
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    color: '#3AA1FF',
                                                    barWidth: 30,
                                                    xAxis: {
                                                        type: 'category',
                                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                                    },
                                                    yAxis: {
                                                        type: 'value'
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        borderColor: 'rgba(255,255,255,.3)',
                                                        backgroundColor: 'rgba(13,5,30,.6)',
                                                        borderWidth: 1,
                                                        padding: 5,
                                                    },
                                                    series: [{
                                                        data: [120, 200, 150, 80, 70, 110, 130],
                                                        type: 'bar',
                                                    }]
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: "gas",
                        name: "加油站",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "gas_2020",
                                collapseTitle: "2020年加油站分布",
                                EChartsBox: [
                                    {
                                        title: "展示加油站展示油库",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "100%",
                                            height: "600px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom:'10px',
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
                                    {
                                        title: "加油站个数",
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
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "59.5%",
                                                    height: "400px",
                                                },
                                                option: {
                                                    title: {
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    color: '#3AA1FF',
                                                    barWidth: 20,
                                                    xAxis: {
                                                        type: 'category',
                                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                                    },
                                                    yAxis: {
                                                        type: 'value'
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        borderColor: 'rgba(255,255,255,.3)',
                                                        backgroundColor: 'rgba(13,5,30,.6)',
                                                        borderWidth: 1,
                                                        padding: 5,
                                                    },
                                                    series: [{
                                                        data: [120, 200, 150, 80, 70, 110, 130],
                                                        type: 'bar',
                                                    }]
                                                },
                                            },
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "39.5%",
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
                                ],
                            },
                        ],
                    },
                    {
                        id: "Collection",
                        name: "回款率",
                        icon: require("../../../assets/business/icon_2-1.png"),
                        iconActive: require("../../../assets/business/icon_2-2.png"),
                        collapseItem: [
                            {
                                id: "Collection_2020",
                                collapseTitle: "2020年回款率",
                                EChartsBox: [
                                    {
                                        title: "中化交投的现金流",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "40%",
                                            height: "450px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                            marginBottom:'10px'
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
                                                        text: '',
                                                        top: 20,
                                                        left: '2%'
                                                    },
                                                    tooltip: {
                                                        trigger: 'axis'
                                                    },
                                                    legend: {
                                                        bottom: 10,
                                                        data: ['总量', '汽油', '柴油', '92', '95', '96', '0']
                                                    },
                                                    grid: {
                                                        left: '3%',
                                                        right: '4%',
                                                        top: '15%',
                                                        containLabel: true
                                                    },
                                                    xAxis: {
                                                        type: 'category',
                                                        boundaryGap: false,
                                                        data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                                    },
                                                    yAxis: {
                                                        type: 'value'
                                                    },
                                                    series: [
                                                        {
                                                            name: '总量',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [120, 132, 101, 134, 90, 230, 210, 32, 12, 453, 321, 453]
                                                        },
                                                        {
                                                            name: '汽油',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [220, 182, 191, 234, 290, 330, 310, 43, 231, 546, 456, 546]
                                                        },
                                                        {
                                                            name: '柴油',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [150, 232, 201, 154, 190, 330, 410, 55, 33, 553, 456, 553]
                                                        },
                                                        {
                                                            name: '92',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [320, 332, 301, 334, 390, 330, 320, 321, 432, 675, 156, 675]
                                                        },
                                                        {
                                                            name: '95',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [820, 932, 901, 934, 1290, 1330, 1320, 321, 901, 765, 489, 765]
                                                        },
                                                        {
                                                            name: '96',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [321, 435, 654, 876, 987, 524, 214, 458, 465, 123, 156, 123]
                                                        },
                                                        {
                                                            name: '0',
                                                            type: 'line',
                                                            stack: '总量',
                                                            data: [489, 43, 1456, 345, 1459, 735, 156, 156, 12, 56, 35, 56]
                                                        },
                                                    ]
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "中化交投回款占比",
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
                                            marginBottom:'10px'
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
                                        title: "欠钱公司占比",
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
                                            marginBottom:'10px'
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
                                    {
                                        title: "欠钱公司占比",
                                        time: false,
                                        select: false,
                                        timeValue: "",
                                        selectValue: "",
                                        style: {
                                            width: "100%",
                                            height: "500px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "49.5%",
                                                    height: "500px",
                                                },
                                                option: {
                                                    title: {
                                                        text: '',
                                                        top: 20,
                                                        left: '5%'
                                                    },
                                                    color: '#3AA1FF',
                                                    barWidth: 20,
                                                    xAxis: {
                                                        type: 'value'
                                                    },
                                                    yAxis: {

                                                        type: 'category',
                                                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                                                    },
                                                    tooltip: {
                                                        trigger: 'item',
                                                        borderColor: 'rgba(255,255,255,.3)',
                                                        backgroundColor: 'rgba(13,5,30,.6)',
                                                        borderWidth: 1,
                                                        padding: 5,
                                                    },
                                                    series: [{
                                                        data: [120, 200, 150, 80, 70, 110, 130],
                                                        type: 'bar',
                                                    }]
                                                },
                                            },
                                            {
                                                type:'table',
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "49.5%",
                                                    height: "500px",
                                                },
                                                border:true,
                                                columns:[
                                                    {prop:'A',label:'批发商'},
                                                    {prop:'B',label:'总体占比'},
                                                    {prop:'c',label:'毛利'},
                                                    {prop:'d',label:'汽油'},
                                                    {prop:'e',label:'柴油'},
                                                    {prop:'f',label:'总量（吨）'},
                                                ],
                                                tableData:[
                                                    {A:'批发商1',B:'90%',c:'3%',d:'9%',e:'32%',f:999},
                                                    {A:'批发商1',B:'54%',c:'3%',d:'9%',e:'32%',f:22},
                                                    {A:'批发商1',B:'32%',c:'3%',d:'9%',e:'32%',f:33},
                                                    {A:'批发商1',B:'12%',c:'3%',d:'9%',e:'32%',f:44},
                                                ]
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
