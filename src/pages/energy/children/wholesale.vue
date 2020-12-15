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
        name: "wholesale",
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
                        name: "批零差价",
                        icon: require("../../../assets/business/icon_1-1.png"),
                        iconActive: require("../../../assets/business/icon_1-2.png"),
                        collapseItem: [
                            {
                                id: "profit_2020",
                                year: 2020,
                                collapseTitle: "批零差价",
                                EChartsBox: [
                                    {
                                        title: "油品价格",
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
                                                    xAxis: {
                                                        type: 'category',
                                                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                                    },
                                                    yAxis: {
                                                        type: 'value'
                                                    },
                                                    grid: {
                                                        left: 40,
                                                        right: 40,
                                                        top: 30,
                                                        bottom: 50
                                                    },
                                                    legend: {
                                                        orient: "horizontal",
                                                        bottom: 5,
                                                        data: ['汽油', '柴油', '总量', '92', '95', '96', '0']
                                                    },
                                                    series: [
                                                        {
                                                            name: '汽油',
                                                            data: [213, 123, 432, 321, 323, 321, 234, 543, 654, 435, 434, 333],
                                                            type: 'line'
                                                        },
                                                        {
                                                            name: '柴油',
                                                            data: [322, 432, 543, 234, 543, 215, 546, 654, 567, 756, 321, 435],
                                                            type: 'line'
                                                        },
                                                        {
                                                            name: '总量',
                                                            data: [11, 22, 33, 44, 55, 66, 77, 45, 65, 87, 432, 31],
                                                            type: 'line'
                                                        },
                                                        {
                                                            name: '92',
                                                            data: [33, 32, 33, 76, 35, 32, 432, 432, 32, 231, 76, 31],
                                                            type: 'line'
                                                        },
                                                        {
                                                            name: '95',
                                                            data: [45, 123, 32, 42, 321, 44, 312, 45, 65, 87, 23, 31],
                                                            type: 'line'
                                                        },
                                                        {
                                                            name: '96',
                                                            data: [65, 32, 76, 234, 56, 66, 312, 45, 65, 87, 34, 31],
                                                            type: 'line'
                                                        },
                                                        {
                                                            name: '0',
                                                            data: [321, 32, 435, 234, 45, 36, 312, 45, 65, 87, 432, 31],
                                                            type: 'line'
                                                        },
                                                    ]
                                                }
                                            }
                                        ],
                                    },
                                    {
                                        title: "批零差价（默认显示最近30天的数据）",
                                        time: true,
                                        showSearch:'notShow',
                                        year: true,
                                        month: true,
                                        day: true,
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
                                                    xAxis: {
                                                        type: 'category',
                                                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                                    },
                                                    yAxis: {
                                                        type: 'value'
                                                    },
                                                    grid: {
                                                        left: 40,
                                                        right: 40,
                                                        top: 70,
                                                        bottom: 50
                                                    },
                                                    legend: {
                                                        orient: "horizontal",
                                                        bottom: 5,
                                                        data: ['国内批发差价', '自身批发差价']
                                                    },
                                                    series: [
                                                        {
                                                            name: '国内批发差价',
                                                            data: [213, 123, 432, 321, 323, 321, 234, 543, 654, 435, 434, 333],
                                                            type: 'line'
                                                        },
                                                        {
                                                            name: '自身批发差价',
                                                            data: [132, 433, 321, 65, 768, 987, 343, 234, 123, 432, 543, 232],
                                                            type: 'line'
                                                        },
                                                    ]
                                                }
                                            }
                                        ],
                                    },
                                    {
                                        title: "采点",
                                        style: {
                                            width: "100%",
                                            height: "400px",
                                            background: "white",
                                            borderRadius: "10px",
                                            overflow: "hidden",
                                        },
                                        EChartsItem: [
                                            {
                                                /*ECharts的属性*/
                                                style: {
                                                    width: "100%",
                                                    height: "350px",
                                                },
                                                option: {
                                                    grid: {
                                                        top: 50,
                                                        left: 30,
                                                        right: 30,
                                                        bottom: 30
                                                    },
                                                    xAxis: {},
                                                    yAxis: {},
                                                    series: [{
                                                        symbolSize: 20,
                                                        data: [
                                                            [10.0, 8.04],
                                                            [8.0, 6.95],
                                                            [13.0, 7.58],
                                                            [9.0, 8.81],
                                                            [11.0, 8.33],
                                                            [14.0, 9.96],
                                                            [6.0, 7.24],
                                                            [4.0, 4.26],
                                                            [12.0, 10.84],
                                                            [7.0, 4.82],
                                                            [5.0, 5.68]
                                                        ],
                                                        type: 'scatter'
                                                    }]
                                                }
                                            }
                                        ],
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