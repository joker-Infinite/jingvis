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
                        id: "rateofreturn",
                        name: "回款率",
                        icon: require("../../../assets/business/icon_6-1.png"),
                        iconActive: require("../../../assets/business/icon_6-2.png"),
                        collapseItem: [
                            {
                                id: "rateofreturn_2020",
                                year: 2020,
                                collapseTitle: "2020回款率",
                                EChartsBox: [
                                    {
                                        title: "2020年回款管理",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "49.5%",
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
                                                        //提示框组件
                                                        trigger: "axis",
                                                        formatter:
                                                            "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
                                                        axisPointer: {
                                                            type: "shadow",
                                                            label: {
                                                                backgroundColor:
                                                                    "#6a7985",
                                                            },
                                                        },
                                                        textStyle: {
                                                            color: "#fff",
                                                            fontStyle: "normal",
                                                            fontFamily: "微软雅黑",
                                                            fontSize: 12,
                                                        },
                                                    },
                                                    grid: {
                                                        left: "10%",
                                                        right: "10%",
                                                        bottom: "10%",
                                                        top: "20%",
                                                        //	padding:'0 0 10 0',
                                                        containLabel: true,
                                                    },
                                                     legend: {
                                                        top: '1%',
                                                        textStyle: {
                                                            color: '#a4a8b4'
                                                        },
                                                    },
                                                    xAxis: [
                                                        {
                                                            type: "category",
                                                            //	boundaryGap: true,//坐标轴两边留白
                                                            data: [
                                                                "1月",
                                                                "2月",
                                                                "3月",
                                                                "4月",
                                                                "5月",
                                                                "6月",
                                                                "7月",
                                                                "8月",
                                                                "9月",
                                                                "10月",
                                                                "11月",
                                                                "12月",
                                                            ],
                                                            axisLabel: {
                                                                //坐标轴刻度标签的相关设置。
                                                                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                                                                //	margin:15,
                                                                textStyle: {
                                                                    color:
                                                                        "#c8c9c9",
                                                                    fontStyle:
                                                                        "normal",
                                                                    fontFamily:
                                                                        "微软雅黑",
                                                                    fontSize: 12,
                                                                },
                                                                // rotate: 50,
                                                            },
                                                            axisTick: {
                                                                //坐标轴刻度相关设置。
                                                                show: false,
                                                            },
                                                            axisLine: {
                                                                //坐标轴轴线相关设置
                                                                lineStyle: {
                                                                    color:
                                                                        "#c8c9c9",
                                                                    opacity: 1,
                                                                },
                                                            },
                                                            splitLine: {
                                                                //坐标轴在 grid 区域中的分隔线。
                                                                show: false,
                                                            },
                                                        },
                                                        {
                                                            type: "value",
                                                            max:
                                                                [
                                                                    "1月",
                                                                    "2月",
                                                                    "3月",
                                                                    "4月",
                                                                    "5月",
                                                                    "6月",
                                                                    "7月",
                                                                    "8月",
                                                                    "9月",
                                                                    "10月",
                                                                    "11月",
                                                                    "12月",
                                                                ].length * 100,
                                                            show: false,
                                                        },
                                                    ],
                                                    yAxis: [
                                                        {
                                                            type: "value",
                                                            splitNumber: 5,
                                                            axisLabel: {
                                                                textStyle: {
                                                                    color:
                                                                        "#c8c9c9",
                                                                    fontStyle:
                                                                        "normal",
                                                                    fontFamily:
                                                                        "微软雅黑",
                                                                    fontSize: 12,
                                                                },
                                                            },
                                                            axisLine: {
                                                                show: false,
                                                            },
                                                            axisTick: {
                                                                show: false,
                                                            },
                                                            splitLine: {
                                                                show: true,
                                                                lineStyle: {
                                                                    color: ["#fff"],
                                                                    opacity: 0.06,
                                                                },
                                                            },
                                                        },
                                                    ],
                                                    series: [
                                                        {
                                                            name: "应收",
                                                            type: "bar",
                                                            data: [
                                                                62,
                                                                80,
                                                                80,
                                                                62,
                                                                60,
                                                                55,
                                                                45,
                                                                30,
                                                                15,
                                                                106,
                                                                55,
                                                                45,
                                                                30,
                                                                15,
                                                                1,
                                                            ],
                                                            barWidth: 12,
                                                            barCategoryGap: 50,
                                                            itemStyle: {
                                                                normal: {
                                                                    show: true,
                                                                    color:
                                                                        "#3aa1ff",
                                                                    barBorderRadius: 50,
                                                                    borderWidth: 0,
                                                                },
                                                            },
                                                        },
                                                        {
                                                            name: "未收",
                                                            type: "bar",
                                                            data: [
                                                                65,
                                                                55,
                                                                60,
                                                                45,
                                                                42,
                                                                15,
                                                                12,
                                                                5,
                                                                106,
                                                                55,
                                                                45,
                                                                30,
                                                                15,
                                                                1,
                                                            ],
                                                            barWidth: 12,
                                                            barCategoryGap: 50,
                                                            itemStyle: {
                                                                normal: {
                                                                    show: true,
                                                                    color:
                                                                        "#fc5ea9",
                                                                    barBorderRadius: 50,
                                                                    borderWidth: 0,
                                                                },
                                                            },
                                                        },
                                                  
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "2020年供应商回款占比",
                                        time: false,
                                        select: false,
                                        style: {
                                            width: "49.5%",
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
                                                    title: [
                                                        {
                                                            text: "暂无数据",
                                                            // top: 15,
                                                            // left: 20,
                                                            x: "36%",
                                                            y: "47%",
                                                            textStyle: {
                                                                fontSize: 16,
                                                            },
                                                        },
                                                    ],
                                                    grid: {
                                                        top: "20%",
                                                        right: "40",
                                                        left: "60",
                                                        bottom: "40", //图表尺寸大小
                                                    },
                                                    legend: {
                                                        orient: "vertical",
                                                        right: '10%',
                                                        top:'20%'
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                    },
                                                    series: [
                                                        {
                                                            type: "pie",
                                                            center: ["40%", "50%"],
                                                            radius: ["35%", "55%"],
                                                            clockwise: true,
                                                            avoidLabelOverlap: true,
                                                            hoverOffset: 15,
                                                            itemStyle: {
                                                                normal: {
                                                                    color: function (
                                                                        params
                                                                    ) {
                                                                        var colorList = [
                                                                            "#73ddff",
                                                                            "#73acff",
                                                                            "#9e87ff",
                                                                            "#ff3976",
                                                                            "#2ccc44",
                                                                            "#ffbc32",
                                                                            "#fd866a",
                                                                            "#1ca7ff",
                                                                        ];
                                                                        return colorList[
                                                                            params
                                                                                .dataIndex
                                                                            ];
                                                                    },
                                                                },
                                                            },
                                                            label: {
                                                                show: true,
                                                                position: "outer",
                                                                width: 0,
                                                                height: 0,
                                                                lineHeight: 0,
                                                                backgroundColor:
                                                                    "auto",
                                                                padding: [
                                                                    2,
                                                                    -2,
                                                                    2,
                                                                    -2,
                                                                ],
                                                                borderRadius: 2,
                                                                distanceToLabelLine: 0,
                                                                normal: {
                                                                    formatter(v) {
                                                                        let text =
                                                                            v.name +
                                                                            "\n" +
                                                                            v.percent +
                                                                            "%";
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
                                                                    length2: 30,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    name: "A供应商",
                                                                    value: 1.45,
                                                                },
                                                                {
                                                                    name: "B供应商",
                                                                    value: 2.93,
                                                                },
                                                                {
                                                                    name: "C供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "D供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "E供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "F供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "H供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "其他",
                                                                    value: 3.15,
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
                                id: "rateofreturn_2019",
                                year: 2019,
                                collapseTitle: "2019回款率",
                                EChartsBox: [
                                    {
                                        title: "2019年回款管理",
                                        time: false,
                                        timeValue: "",
                                        style: {
                                            width: "49.5%",
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
                                                        //提示框组件
                                                        trigger: "axis",
                                                        formatter:
                                                            "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
                                                        axisPointer: {
                                                            type: "shadow",
                                                            label: {
                                                                backgroundColor:
                                                                    "#6a7985",
                                                            },
                                                        },
                                                        textStyle: {
                                                            color: "#fff",
                                                            fontStyle: "normal",
                                                            fontFamily: "微软雅黑",
                                                            fontSize: 12,
                                                        },
                                                    },
                                                    grid: {
                                                        left: "10%",
                                                        right: "10%",
                                                        bottom: "10%",
                                                        top: "20%",
                                                        //	padding:'0 0 10 0',
                                                        containLabel: true,
                                                    },
                                                     legend: {
                                                        top: '1%',
                                                        textStyle: {
                                                            color: '#a4a8b4'
                                                        },
                                                    },
                                                    xAxis: [
                                                        {
                                                            type: "category",
                                                            //	boundaryGap: true,//坐标轴两边留白
                                                            data: [
                                                                "1月",
                                                                "2月",
                                                                "3月",
                                                                "4月",
                                                                "5月",
                                                                "6月",
                                                                "7月",
                                                                "8月",
                                                                "9月",
                                                                "10月",
                                                                "11月",
                                                                "12月",
                                                            ],
                                                            axisLabel: {
                                                                //坐标轴刻度标签的相关设置。
                                                                //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                                                                //	margin:15,
                                                                textStyle: {
                                                                    color:
                                                                        "#c8c9c9",
                                                                    fontStyle:
                                                                        "normal",
                                                                    fontFamily:
                                                                        "微软雅黑",
                                                                    fontSize: 12,
                                                                },
                                                                // rotate: 50,
                                                            },
                                                            axisTick: {
                                                                //坐标轴刻度相关设置。
                                                                show: false,
                                                            },
                                                            axisLine: {
                                                                //坐标轴轴线相关设置
                                                                lineStyle: {
                                                                    color:
                                                                        "#c8c9c9",
                                                                    opacity: 1,
                                                                },
                                                            },
                                                            splitLine: {
                                                                //坐标轴在 grid 区域中的分隔线。
                                                                show: false,
                                                            },
                                                        },
                                                        {
                                                            type: "value",
                                                            max:
                                                                [
                                                                    "1月",
                                                                    "2月",
                                                                    "3月",
                                                                    "4月",
                                                                    "5月",
                                                                    "6月",
                                                                    "7月",
                                                                    "8月",
                                                                    "9月",
                                                                    "10月",
                                                                    "11月",
                                                                    "12月",
                                                                ].length * 100,
                                                            show: false,
                                                        },
                                                    ],
                                                    yAxis: [
                                                        {
                                                            type: "value",
                                                            splitNumber: 5,
                                                            axisLabel: {
                                                                textStyle: {
                                                                    color:
                                                                        "#c8c9c9",
                                                                    fontStyle:
                                                                        "normal",
                                                                    fontFamily:
                                                                        "微软雅黑",
                                                                    fontSize: 12,
                                                                },
                                                            },
                                                            axisLine: {
                                                                show: false,
                                                            },
                                                            axisTick: {
                                                                show: false,
                                                            },
                                                            splitLine: {
                                                                show: true,
                                                                lineStyle: {
                                                                    color: ["#fff"],
                                                                    opacity: 0.06,
                                                                },
                                                            },
                                                        },
                                                    ],
                                                    series: [
                                                        {
                                                            name: "应收",
                                                            type: "bar",
                                                            data: [
                                                                62,
                                                                80,
                                                                80,
                                                                62,
                                                                60,
                                                                55,
                                                                45,
                                                                30,
                                                                15,
                                                                106,
                                                                55,
                                                                45,
                                                                30,
                                                                15,
                                                                1,
                                                            ],
                                                            barWidth: 12,
                                                            barCategoryGap: 50,
                                                            itemStyle: {
                                                                normal: {
                                                                    show: true,
                                                                    color:
                                                                        "#3aa1ff",
                                                                    barBorderRadius: 50,
                                                                    borderWidth: 0,
                                                                },
                                                            },
                                                        },
                                                        {
                                                            name: "未收",
                                                            type: "bar",
                                                            data: [
                                                                65,
                                                                55,
                                                                60,
                                                                45,
                                                                42,
                                                                15,
                                                                12,
                                                                5,
                                                                106,
                                                                55,
                                                                45,
                                                                30,
                                                                15,
                                                                1,
                                                            ],
                                                            barWidth: 12,
                                                            barCategoryGap: 50,
                                                            itemStyle: {
                                                                normal: {
                                                                    show: true,
                                                                    color:
                                                                        "#fc5ea9",
                                                                    barBorderRadius: 50,
                                                                    borderWidth: 0,
                                                                },
                                                            },
                                                        },
                                                  
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        title: "2019年供应商回款占比",
                                        time: false,
                                        select: false,
                                        style: {
                                            width: "49.5%",
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
                                                    title: [
                                                        {
                                                            text: "暂无数据",
                                                            // top: 15,
                                                            // left: 20,
                                                            x: "36%",
                                                            y: "47%",
                                                            textStyle: {
                                                                fontSize: 16,
                                                            },
                                                        },
                                                    ],
                                                    grid: {
                                                        top: "20%",
                                                        right: "40",
                                                        left: "60",
                                                        bottom: "40", //图表尺寸大小
                                                    },
                                                    legend: {
                                                        orient: "vertical",
                                                        right: '10%',
                                                        top:'20%'
                                                    },
                                                    tooltip: {
                                                        trigger: "item",
                                                    },
                                                    series: [
                                                        {
                                                            type: "pie",
                                                            center: ["40%", "50%"],
                                                            radius: ["35%", "55%"],
                                                            clockwise: true,
                                                            avoidLabelOverlap: true,
                                                            hoverOffset: 15,
                                                            itemStyle: {
                                                                normal: {
                                                                    color: function (
                                                                        params
                                                                    ) {
                                                                        var colorList = [
                                                                            "#73ddff",
                                                                            "#73acff",
                                                                            "#9e87ff",
                                                                            "#ff3976",
                                                                            "#2ccc44",
                                                                            "#ffbc32",
                                                                            "#fd866a",
                                                                            "#1ca7ff",
                                                                        ];
                                                                        return colorList[
                                                                            params
                                                                                .dataIndex
                                                                            ];
                                                                    },
                                                                },
                                                            },
                                                            label: {
                                                                show: true,
                                                                position: "outer",
                                                                width: 0,
                                                                height: 0,
                                                                lineHeight: 0,
                                                                backgroundColor:
                                                                    "auto",
                                                                padding: [
                                                                    2,
                                                                    -2,
                                                                    2,
                                                                    -2,
                                                                ],
                                                                borderRadius: 2,
                                                                distanceToLabelLine: 0,
                                                                normal: {
                                                                    formatter(v) {
                                                                        let text =
                                                                            v.name +
                                                                            "\n" +
                                                                            v.percent +
                                                                            "%";
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
                                                                    length2: 30,
                                                                    lineStyle: {
                                                                        width: 1,
                                                                    },
                                                                },
                                                            },
                                                            data: [
                                                                {
                                                                    name: "A供应商",
                                                                    value: 1.45,
                                                                },
                                                                {
                                                                    name: "B供应商",
                                                                    value: 2.93,
                                                                },
                                                                {
                                                                    name: "C供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "D供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "E供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "F供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "H供应商",
                                                                    value: 3.15,
                                                                },
                                                                {
                                                                    name: "其他",
                                                                    value: 3.15,
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
                                id: "rateofreturn_gd",
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