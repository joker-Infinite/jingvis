<template>
    <div style="width: 100%; height: 100%;">
        <my-collapse-base
            ref="collapse"
			@selectData="selectData"
            @ClickTotal="ClickTotal"
            :numberCount="numberCount"
            :totalCount="pages"
            :collapseData="collapseData"
            @searchQuery="searchQuery"
        ></my-collapse-base>
    </div>
</template>
<script>
import MyCollapseBase from "../../../components/common/myCollapseBase";
import common from "../../../components/js/common";

export default {
    name: "wholesale",
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
                                        marginBottom: "10px",
                                    },
                                    EChartsItem: [
                                        {
                                            unit: "元/吨",
                                            /*ECharts的属性*/
                                            style: {
                                                width: "100%",
                                                height: "350px",
                                            },
                                            option:{
                                                        title: {
                                                            text: "{a|国际价格}{b|国内批发价}{c|国内零售价}",
                                                            show: true,
                                                            y: "6",
                                                            right: '200',
                                                            textStyle: {
                                                                lineHeight: 15,
                                                                rich: {
                                                                    a: {
                                                                        color: "#95A2FF",
                                                                        fontSize: "15",

                                                                    },
                                                                    b: {
                                                                        color: "#3CB8FE",
                                                                        fontSize: "15",
                                                                        padding: 10
                                                                    },
                                                                    c: {
                                                                        color: "#FE9394",
                                                                        fontSize: "15",
                                                                    }
                                                                },

                                                            },
                                                        },
                                                        tooltip: {
                                                            trigger: 'axis',
                                                            formatter: function(params) {
                                                                return params[0].seriesName + ":" + "<br>" +
                                                                    '国际价格:' + params[0].value + '元/升' + "<br>" +
                                                                    '国内批发价:' + params[1].value + '元/升' + "<br>" +
                                                                    '国内零售价:' + params[2].value + '元/升' + "<br>"
                                                            },
                                                            show: true
                                                        },
                                                        xAxis: {
                                                            type: "category",
                                                            
                                                            data: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                                                        },
                                                        yAxis: {
                                                            type: "value",
                                                            name:'元/升',
                                                            nameTextStyle:{
                                                                color:"#000"
                                                            }
                                                        },
                                                        grid: {
                                                            left: 40,
                                                            right: 40,
                                                            top: 50,
                                                            bottom: 50,
                                                        },
                                                        color:['#1DD6CF','#ED8DD0'],
                                                        legend: {
                                                            orient: "horizontal",
                                                            bottom: 5,
                                                            selectedMode:'single',
                                                            icon:'circle',
                                                            borderColor: '#f00',
                                                            selected: {
                                                                "汽油": true, //图例为‘全部’的一项默认置灰
                                                                "柴油": false,
                                                                "92": false,
                                                                "95": false,
                                                                "98": false
                                                            },
                                                            textStyle: {
                                                                color: '#f00',
                                                                
                                                            },
                                                            top:10,
                                                            data: [ "汽油", "柴油", "92", "95", "98"],
                                                        },
                                                        series: [
                                                            {
                                                                name: "汽油",
                                                                data: [5.05,5.05 ,5.35 , 5.35, 4.95, 5.45, 5.45, 5.95, 5.95, 5.55, 5.15, 5.15],
                                                                color: '#95A2FF',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "汽油",
                                                                data: [5.55,5.65 ,5.75 , 5.95, 5.55, 5.55, 5.85, 5.95, 6.45, 5.65, 5.45, 5.95],
                                                                color: '#3CB8FE',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "汽油",
                                                                data: [6.05,6.25 ,6.55 , 6.75, 5.55, 6.75, 6.95, 7.95, 6.95, 6.55, 6.15, 6.95],
                                                                color: '#FE9394',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "柴油",
                                                                data: [5.52,5.05 ,5.35 , 5.95, 5.95, 5.45, 5.45, 5.55, 6.05, 6.00, 5.85, 5.85],
                                                                color: '#95A2FF',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "柴油",
                                                                data: [5.55,5.65 ,5.75 , 5.95, 5.55, 5.55, 5.85, 5.95, 6.45, 5.65, 5.45, 5.95],
                                                                color: '#3CB8FE',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "柴油",
                                                                data: [6.62,6.55 ,6.75 , 6.55, 6.95, 6.55, 6.95, 6.58, 6.15, 6.50, 6.85, 6.85],
                                                                color: '#FE9394',
                                                                type: "line",
                                                            }, 
                                                            {
                                                                name: "92",
                                                                data: [5.05,5.05 ,5.35 , 5.35, 4.95, 5.45, 5.45, 5.95, 5.95, 5.55, 5.15, 5.15],
                                                                color: '#95A2FF',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "92",
                                                                data: [5.55,5.65 ,5.75 , 5.95, 5.55, 5.55, 5.85, 5.95, 6.45, 5.65, 5.45, 5.95],
                                                                color: '#3CB8FE',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "92",
                                                                data: [6.05,6.25 ,6.55 , 6.75, 5.55, 6.75, 6.95, 7.95, 6.95, 6.55, 6.15, 6.95],
                                                                color: '#FE9394',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "95",
                                                                data: [6.25,6.05 ,6.35 , 6.35, 6.95, 6.45, 6.45, 6.95, 6.95, 6.55, 6.15, 6.15],
                                                                color: '#95A2FF',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "95",
                                                                data: [6.55,6.65 ,6.75 , 6.55, 6.55, 6.05, 6.85, 6.95, 6.45,6.65, 6.45, 6.95],
                                                                color: '#3CB8FE',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "95",
                                                                data: [6.95,6.95 ,7.01 , 7.05, 6.95, 6.75, 6.95, 7.90, 7.95, 7.55, 7.15, 7.95],
                                                                color: '#FE9394',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "98",
                                                                data: [6.05,6.05 ,6.55 , 6.95, 7.05, 7.15, 6.45, 6.95, 6.95, 7.55, 6.15, 6.95],
                                                                color: '#95A2FF',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "98",
                                                                data: [6.55,6.85 ,6.75 , 7.15, 7.35, 7.85, 7.45, 7.95, 7.05, 6.55, 7.15, 6.99],
                                                                color: '#3CB8FE',
                                                                type: "line",
                                                            },
                                                            {
                                                                name: "98",
                                                                data: [7.05,7.25 ,7.45 , 7.45, 7.05, 7.75, 7.95,8.01, 8.15, 8.35, 8.15, 8.00],
                                                                color: '#FE9394',
                                                                type: "line",
                                                            },
                                                        ],
                                                    },
                                                },
                                            ],
                                        },
                                {
                                    title: "批零差价",
                                    time: false,
                                    showSearch: "notShow",
                                    year: false,
                                    month: false,
                                    day: false,
                                    style: {
                                        width: "100%",
                                        height: "450px",
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
                                                height: "400px",
                                            },
                                            unit: "元/吨",
                                            option: {
                                            tooltip: {
                                                trigger: 'axis',
                                                formatter: function(params) {
                                                    return params[0].seriesName +":"+params[0].value+'元/吨'+"<br>"+
                                                    params[1].seriesName +":"+params[1].value+'元/吨'
                                                },
                                                show: true
                                            },
                                            legend: {
                                                data: ['国内批发差价','自身批发差价'],
                                                align: "right",
                                                right: 200,
                                                icon:'circle',
                                                top: 20
                                            },
                                            grid: {
                                                top: 50,
                                                left: 50,
                                                right: 30,
                                                bottom: 30,
                                            },
                                            xAxis: {
                                                type: "category",
                                                data: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                                            },
                                            yAxis: {
                                                // type: "value",
                                                name:'元/吨'
                                            },
                                            series: [
                                                {
                                                    name: "国内批发差价",
                                                    data: [213, 123, 432, 321, 323, 321, 234, 543, 654, 435, 434, 333],
                                                    type: "line",
                                                },
                                                {
                                                    name: "自身批发差价",
                                                    data: [132, 433, 321, 65, 768, 987, 343, 234, 123, 432, 543, 232],
                                                    type: "line",
                                                },
                                                
                                            ],

                                        },
                                        },
                                    ],
                                },
                                {
                                    title: "大宗采购",
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
                                            unit: "元/吨",
                                            option: {
                                                grid: {
                                                    top: 80,
                                                    left: 50,
                                                    right: 30,
                                                    bottom: 30,
                                                },
                                                legend: {
                                                    data: ['国内批发差价','自身批发差价','大宗采购'],
                                                    align: "right",
                                                    right: 200,
                                                    icon:'circle',
                                                    top: 20
                                                },
                                                tooltip: {
                                                    trigger: 'axis',
                                                    axisPointer: {
                                                        type: 'none'
                                                    },
                                                    formatter: function(params) {
                                                        return params[0].name+":"+"<br>"+
                                                        params[0].seriesName  + ' : ' + params[0].value+"元"+
                                                        '<br>'+params[1].seriesName  + ' : ' + params[1].value+"元"+
                                                        '<br>'+params[2].seriesName  + ' : ' + params[2].value[1]+'吨'
                                                    }
                                                },
                                                xAxis: {
                                                    type: "category",
                                                    data: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
                                                },
                                                yAxis: {
                                                    // type: "value",
                                                    name:'元/吨'
                                                },
                                                series: [{
                                                        name: "国内批发差价",
                                                        data: [213, 123, 432, 321, 323, 321, 234, 543, 654, 435, 434, 333],
                                                        type: "line",
                                                    },
                                                    {
                                                        name: "自身批发差价",
                                                        data: [132, 433, 321, 65, 768, 987, 343, 234, 123, 432, 543, 232],
                                                        type: "line",
                                                    },
                                                    {
                                                        symbolSize: 20,
                                                        name:'大宗采购',
                                                        data: [
                                                            ['01月', 800.04],
                                                            ["02月", 161.95],
                                                            ["03月", 370.58],
                                                            ["04月", 285.81],
                                                            ["05月", 282.33],
                                                            ["06月", 194.96],
                                                            ["07月", 175.24],
                                                            ["08月", 34.26],
                                                            ["09月", 100.84],
                                                            ["10月", 400.82],
                                                            ["11月", 520.68],
                                                            ["12月", 520.68],
                                                        ],
                                                        type: "scatter",
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
                {
                    id: "revenueTable",
                    name: "批零差价历史记录列表",
                    icon: require("../../../assets/business/icon_1-1.png"),
                    iconActive: require("../../../assets/business/icon_1-2.png"),
                    collapseItem: [
                        {
                            id: "ab_2019",
                            collapseTitle: "批零差价历史记录列表",
                            EChartsBox: [
                                {
                                    title: "批零差价历史记录列表",
                                    showTitle: "notShow",
									button: true,
                                    time: false,
									input: false,
                                    style: {
                                        cursor: "pointer",
                                        width: "100%",
                                        height: "680px",
                                        borderRadius: "10px",
                                        background: "white",
                                        overflow: "hidden",
                                        marginBottom: "10px",
                                    },
                                    EChartsItem: [
                                        {
                                            type: "table",
                                            height: "780px",
                                            style: {
                                                width: "100%",
                                                background: "#FFF",
                                            },
                                            isPagination: true,
                                            columns: [
                                                // {prop: "A", label: "指标名称"},
                                                { prop: "dieselLingshou", label: "最高汽油零售指导价" },
                                                { prop: "dieselPifa", label: "最高汽油批发价格" },
                                                { prop: "gasolineLingshou", label: "最高柴油零售指导价" },
                                                { prop: "gasolinePifa", label: "最高柴油批发指导价" },
                                                { prop: "oilType", label: "油品类型" },
                                                { prop: "odateTime", label: "日期时间" },
                                            ],
                                            tableData: [
                                                // {
                                                //     A: "批发商11",
                                                //     B: "8%",
                                                //     C: "8%",
                                                //     D: "8%",
                                                //     E: "8%",
                                                //     F: "110000",
                                                // },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            pages: 0,
            arrData: [],
			numberCount: 10,
			text:'',
			valData:{},
            ValueData: {
                inputValue: "",
                selectValue: "",
                timeValue: ["", ""],
            },
        };
    },
    methods: {
		selectData(vals){
			this.text = vals;
			let val = this.valData
			this.tableAxios(val.pageNum,val.pageSize,this.text)
		},
		ClickTotal(val){
			this.valData = val;
			this.tableAxios(val.pageNum,val.pageSize,this.text)
		},
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
            await this.$axios.get("/api/sundry/fuwuqucaiwu", { params: { nianfen: year, type: years, plateName: "服务区板块" } }).then((v) => {
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
		async tableAxios(pageNum,pageSize,type){
			await this.$axios.get("/api/sundry/pilingcha_list", { params: { pageNum, pageSize, type } }).then((re) => {
            let data = re.data.list;
            this.pages = re.data.pages;
            data.forEach((element, index) => {
                for (const key in element) {
                    const item = element[key];
                    if (item == null) {
                        data[index][key] = "/";
                    }
                }
            });
            this.collapseData[1].collapseItem[0].EChartsBox[0].EChartsItem[0].tableData = data;
        });
		}
    },
    async mounted() {
        await new Promise((resolve) => {
            setInterval((_) => {
                resolve();
            }, 500);
        });
        await this.tableAxios(1,10,'')
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
