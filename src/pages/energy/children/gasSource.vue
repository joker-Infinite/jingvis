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
        name: "gasSource",
        components: {MyCollapseBase},
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
                        id: "profit",
                        name: "",
                        icon: require("../../../assets/business/icon_1-1.png"),
                        iconActive: require("../../../assets/business/icon_1-2.png"),
                        collapseItem: [
                            {
                                id: "profit_2020",
                                year: 2020,
                                collapseTitle: "2020年油库来源",
                                EChartsBox: [
                                    {
                                        title: "",
                                        time: false,
                                        style: {
                                            width: "100%",
                                            height: "400px",
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
                                                    height: "350px",
                                                },
                                                option: {
                                                    color: [
                                                        '#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'
                                                    ],
                                                    tooltip: {
                                                        trigger: 'item',
                                                        triggerOn: 'mousemove'
                                                    },
                                                    animation: false,
                                                    series: [
                                                        {
                                                            type: 'sankey',
                                                            bottom: '10%',
                                                            right: '5%',
                                                            focusNodeAdjacency: 'allEdges',
                                                            data: [
                                                                {name: 'a'},
                                                                {name: 'b'},
                                                                {name: 'a1'},
                                                                {name: 'b1'},
                                                                {name: 'c'},
                                                                {name: 'e'}
                                                            ],
                                                            links: [
                                                                {source: 'a', target: 'a1', value: 5},
                                                                {source: 'e', target: 'b', value: 3},
                                                                {source: 'a', target: 'b1', value: 3},
                                                                {source: 'b1', target: 'a1', value: 1},
                                                                {source: 'b1', target: 'c', value: 2},
                                                                {source: 'b', target: 'c', value: 1}
                                                            ],
                                                            label: {
                                                                position: 'top'
                                                            },
                                                            lineStyle: {
                                                                color: 'source',
                                                                curveness: 0.5
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                    },
                                    {
                                        title: "流入占比",
                                        time: false,
                                        select: false,
                                        style: {
                                            width: "49.5%",
                                            height: "350px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [{
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
                                                    bottom: 5,
                                                    data: ['A进货商', 'B进货商', 'C进货商', 'D进货商', 'E进货商']
                                                },
                                                tooltip: {
                                                    trigger: "item",
                                                },
                                                series: [{
                                                    type: "pie",
                                                    center: ["50%", "50%"],
                                                    radius: ["30%", "45%"],
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
                                                        {value: 335, name: 'A进货商'},
                                                        {value: 310, name: 'B进货商'},
                                                        {value: 234, name: 'C进货商'},
                                                        {value: 135, name: 'D进货商'},
                                                        {value: 1548, name: 'E进货商'}
                                                    ]
                                                }],
                                            },
                                        }],
                                    },
                                    {
                                        title: "流出占比",
                                        time: false,
                                        select: false,
                                        style: {
                                            width: "49.5%",
                                            height: "350px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [{
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
                                                    data: ['A批发商', 'B批发商', 'C批发商', 'D批发商', 'E批发商']
                                                },
                                                series: [{
                                                    type: "pie",
                                                    avoidLabelOverlap: true,
                                                    center: ["48%", "50%"],
                                                    radius: ["38%", "50%"],
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
                                                        backgroundColor:
                                                            "auto",
                                                        padding: [2, -2, 2, -2,],
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
                                                        {value: 335, name: 'A批发商'},
                                                        {value: 310, name: 'B批发商'},
                                                        {value: 234, name: 'C批发商'},
                                                        {value: 135, name: 'D批发商'},
                                                        {value: 1548, name: 'E批发商'}
                                                    ]
                                                }],
                                            },
                                        }],
                                    },
                                ]
                            },
                            {
                                id: "profit_2019",
                                year: 2020,
                                collapseTitle: "2019年油库来源",
                                EChartsBox: [
                                    {
                                        title: "",
                                        time: false,
                                        style: {
                                            width: "100%",
                                            height: "400px",
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
                                                    height: "350px",
                                                },
                                                option: {
                                                    color: [
                                                        '#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'
                                                    ],
                                                    tooltip: {
                                                        trigger: 'item',
                                                        triggerOn: 'mousemove'
                                                    },
                                                    animation: false,
                                                    series: [
                                                        {
                                                            type: 'sankey',
                                                            bottom: '5%',
                                                            right: '5%',
                                                            focusNodeAdjacency: 'allEdges',
                                                            data: [
                                                                {name: 'a'},
                                                                {name: 'b'},
                                                                {name: 'a1'},
                                                                {name: 'b1'},
                                                                {name: 'c'},
                                                                {name: 'e'}
                                                            ],
                                                            links: [
                                                                {source: 'a', target: 'a1', value: 5},
                                                                {source: 'e', target: 'b', value: 3},
                                                                {source: 'a', target: 'b1', value: 3},
                                                                {source: 'b1', target: 'a1', value: 1},
                                                                {source: 'b1', target: 'c', value: 2},
                                                                {source: 'b', target: 'c', value: 1}
                                                            ],
                                                            label: {
                                                                position: 'top'
                                                            },
                                                            lineStyle: {
                                                                color: 'source',
                                                                curveness: 0.5
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                    },
                                    {
                                        title: "流入占比",
                                        time: false,
                                        select: false,
                                        style: {
                                            width: "49.5%",
                                            height: "350px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [{
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
                                                    bottom: 5,
                                                    data: ['A进货商', 'B进货商', 'C进货商', 'D进货商', 'E进货商']
                                                },
                                                tooltip: {
                                                    trigger: "item",
                                                },
                                                series: [{
                                                    type: "pie",
                                                    center: ["50%", "50%"],
                                                    radius: ["30%", "45%"],
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
                                                        {value: 335, name: 'A进货商'},
                                                        {value: 310, name: 'B进货商'},
                                                        {value: 234, name: 'C进货商'},
                                                        {value: 135, name: 'D进货商'},
                                                        {value: 1548, name: 'E进货商'}
                                                    ]
                                                }],
                                            },
                                        }],
                                    },
                                    {
                                        title: "流出占比",
                                        time: false,
                                        select: false,
                                        style: {
                                            width: "49.5%",
                                            height: "350px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [{
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
                                                    data: ['A批发商', 'B批发商', 'C批发商', 'D批发商', 'E批发商']
                                                },
                                                series: [{
                                                    type: "pie",
                                                    avoidLabelOverlap: true,
                                                    center: ["48%", "50%"],
                                                    radius: ["38%", "50%"],
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
                                                        backgroundColor:
                                                            "auto",
                                                        padding: [2, -2, 2, -2,],
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
                                                        {value: 335, name: 'A批发商'},
                                                        {value: 310, name: 'B批发商'},
                                                        {value: 234, name: 'C批发商'},
                                                        {value: 135, name: 'D批发商'},
                                                        {value: 1548, name: 'E批发商'}
                                                    ]
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
            async obtainAxios(name, year, years) {
                let data = [];
                let id = '';
                await this.$axios.get('/api/sundry/fuwuqucaiwu',
                    {params: {nianfen: year, type: years, plateName: '服务区板块'}}
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
                                                yAxis.push(element.yAxis * 10000)
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
            await this.obtainAxios('利润', '2020', 'lr');
            await this.obtainAxios('利润', '2019', 'lr');
        },
        watch: {
            viewChange() {
                this.$refs["collapse"].refresh(this.collapseData);
            },
        }
    }
</script>