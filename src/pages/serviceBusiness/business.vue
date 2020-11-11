<template>
    <div class="business" :style="{ width: widths }">
        <div class="businessMargin">
            <busines-top ref="scrollDiv"></busines-top>
            <busines-bottom ref="scrollBottom"></busines-bottom>
            <div class="anchor ">
                <div @click="packup()">{{ !ispackUp ? "全部收起" : "全部展开" }}</div>
                <div :class="{ anchorHover: isHover == inde }" @click="goto(inde)" v-for="(item, inde) of anchorData" :key="inde">
                    <img :src="isHover == inde ? item.iconHover : item.icon" />
                    <!-- <img src="../../assets/business/icon_03.png" alt=""> -->
                    {{ item.name }}
                </div>
            </div>
        </div>
        <el-backtop></el-backtop>
    </div>
</template>
<script>
import BusinesTop from "./businesstop";
import BusinesBottom from "./businessbottom";

export default {
    components: { BusinesTop, BusinesBottom },
    props: {
        quantityShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            bool: [true, true, true, true],
            ispackUp: false,
            isHover: 0,
            scrollTop: "",
            isActive: 0,
            tabData: [],
            navData: [],
            height: 0,
            businessIdData: {
                businessId: [
                    {
                        name: "2020年营收",
                        id: ["HomeEchartsLeft", "HomeEchartsCenter", "HomeEchartsRight"],
                        data: {
                            left: [[], []],
                            xAis: [],
                            center: [[]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"],
                            right: [],
                            rightxAis: []
                        },
                        show: true
                    },
                    {
                        name: "2019年营收",
                        id: ["HomeEchartsLeft2", "HomeEchartsCenter2", "HomeEchartsRight2"],
                        data: {
                            left: [[], []],
                            xAis: [],
                            center: [[]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"],
                            right: [],
                            rightxAis: []
                        },
                        show: true
                    },
                    {
                        name: "以往年份",
                        id: "",
                        data: {
                            left: [[], []],
                            xAis: [],
                            center: [[]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"],
                            right: [],
                            rightxAis: []
                        },
                        show: true
                    }
                ],
                profitbusinessId: [
                    {
                        name: "2020年利润",
                        id: ["HomeEchartsLeft3", "HomeEchartsCenter3", "HomeEchartsRight3"],
                        data: {
                            left: [[], []],
                            xAis: [],
                            center: [[]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"],
                            right: [],
                            rightxAis: []
                        },
                        show: true
                    },
                    {
                        name: "2019年利润",
                        id: ["HomeEchartsLeft4", "HomeEchartsCenter4", "HomeEchartsRight4"],
                        data: {
                            left: [[], []],
                            xAis: [],
                            center: [[]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"],
                            right: [],
                            rightxAis: []
                        },
                        show: true
                    },
                    {
                        name: "以往年份",
                        id: "",
                        data: {
                            left: [[], []],
                            xAis: [],
                            center: [[]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"],
                            right: [],
                            rightxAis: []
                        },
                        show: true
                    }
                ],
                costbusinessId: [
                    {
                        name: "2020年成本",
                        id: ["HomeEchartsLeft5", "HomeEchartsCenter5", "HomeEchartsRight5"],
                        show: true,
                        data: {
                            left: [
                                [40, 80, 500, 36, 30, 35, 400, 60, 40, 80, 50, 360],
                                [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                            ],
                            xAis: [
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
                                "12"
                            ],
                            center: [[1.45, 2.93, 3.15, 4, 5]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"]
                        },
                        echartsBottoms: "echartsBottom"
                    },
                    {
                        name: "2019年成本",
                        id: ["HomeEchartsLeft6", "HomeEchartsCenter6", "HomeEchartsRight6"],
                        show: true,
                        data: {
                            left: [
                                [400, 800, 500, 36, 30, 35, 400, 60, 40, 80, 50, 30],
                                [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                            ],
                            xAis: [
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
                                "12"
                            ],
                            center: [[1.45, 2.93, 3.15, 4, 5]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"]
                        },
                        echartsBottoms: "echartsBottom2"
                    },
                    {
                        name: "以往成本",
                        id: "",
                        show: true,
                        data: {
                            left: [
                                [400, 800, 500, 36, 30, 35, 400, 60, 40, 80, 50, 30],
                                [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                            ],
                            xAis: [
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
                                "12"
                            ],
                            center: [[1.45, 2.93, 3.15, 4, 5]],
                            centerxAis: ["特产", "小吃", "餐饮", "便利店", "加油"]
                        },
                        echartsBottoms: "echartsBottom2"
                    }
                ],
                quantitativeStructurebusinessId: [
                    {
                        name: "2020年业态结构",
                        id: [
                            {
                                id: ["EchartsLeft1", "EchartsCenter1"]
                            },
                            {
                                id: ["EchartsLeft21", "EchartsCenter21"]
                            }
                        ]
                    },
                    {
                        name: "2019年业态结构",
                        id: [
                            {
                                id: ["EchartsLeft2", "EchartsCenter2"]
                            },
                            {
                                id: ["EchartsLeft22", "EchartsCenter22"]
                            }
                        ]
                    },
                    {
                        name: "以往年份",
                        id: []
                    }
                ],
                rateofreturnbusinessId: [
                    {
                        name: "2020回款率",
                        id: ["echartsleft111", "echartsright111"]
                    },
                    {
                        name: "2019回款率",
                        id: ["echartsleft222", "echartsright222"]
                    },
                    {
                        name: "以往年份",
                        id: ""
                    }
                ]
            },
            anchorData: [
                {
                    name: "营收",
                    icon: require("../../assets/business/icon_1-1.png"),
                    iconHover: require("../../assets/business/icon_1-2.png")
                },
                {
                    name: "利润",
                    icon: require("../../assets/business/icon_2-1.png"),
                    iconHover: require("../../assets/business/icon_2-2.png")
                },
                {
                    name: "成本",
                    icon: require("../../assets/business/icon_3-1.png"),
                    iconHover: require("../../assets/business/icon_3-2.png")
                },
                {
                    name: "数量",
                    icon: require("../../assets/business/icon_4-1.png"),
                    iconHover: require("../../assets/business/icon_4-2.png")
                },
                {
                    name: "结构",
                    icon: require("../../assets/business/icon_5-1.png"),
                    iconHover: require("../../assets/business/icon_5-2.png")
                },
                {
                    name: "回款率",
                    icon: require("../../assets/business/icon_6-1.png"),
                    iconHover: require("../../assets/business/icon_6-2.png")
                }
            ],
            widths: ""
        };
    },

    methods: {
        goto(v) {
            let id = "#box" + (v + 1);
            document.querySelector(id).scrollIntoView(true);
            this.isHover = v;
        },
        packup() {
            if (this.ispackUp) {
                this.ispackUp = false;
                this.$refs.scrollDiv.revenue = ["1", "2"];
                this.$refs.scrollDiv.profit = ["1", "2"];
                this.$refs.scrollDiv.cost = ["1", "2"];
                this.$refs.scrollBottom.quantitativeStructure = ["1", "2", "3"];
                this.$refs.scrollBottom.rateofreturn = ["1", "2"];
            } else {
                this.ispackUp = true;
                this.$refs.scrollDiv.revenue = [];
                this.$refs.scrollDiv.profit = [];
                this.$refs.scrollDiv.cost = [];
                this.$refs.scrollBottom.quantitativeStructure = [];
                this.$refs.scrollBottom.rateofreturn = [];
            }
        },
        isscrollTop(val) {
            this.navData.forEach((element, index) => {
                if (val >= element) {
                    this.isHover = index;
                }
            });
        },
        isechartsShow(){
            this.$refs.scrollDiv.isechartsShow()
        },
        isaxios(url, nianfen, id, i, is) {
            this.$axios
                .get("/api" + url, {
                    params: { nianfen: nianfen, serviceCompanyId: "", serviceId: "" }
                })
                .then(res => {
                    res.data.data.forEach(element => {
                        if (is === "bar") {
                            this.businessIdData[id][i].data.left[0].push(element.yAxis / 100);
                            this.businessIdData[id][i].data.left[1].push(element.yAxis / 100);
                            this.businessIdData[id][i].data.xAis.push(element.xBxis + "月");
                        }
                        if (is === "pie") {
                            this.businessId[i].data.center[0].push(element.yAxis / 100);
                        }
                    });
                });
        }
    },
    mounted() {
        this.widths = document.body.clientWidth;
        //  // 营收2020
        this.isaxios("/jtService/list_jtservice_revenue_month", "2020-01-01", "businessId", 0, "bar");
        this.isaxios("/jtService/list_jtservice_revenue_format", "2020-01-01", "businessId", 0, "pie");
        // // 营收2019
        this.isaxios("/jtService/list_jtservice_revenue_month", "2019-01-01", "businessId", 1, "bar");
        this.isaxios("/jtService/list_jtservice_revenue_format", "2019-01-01", "businessId", 1, "pie");
        // // 利润2020
        this.isaxios("/jtService/list_jtservice_revenue_month", "2020-01-01", "profitbusinessId", 0, "bar");
        this.isaxios("/jtService/list_jtservice_revenue_format", "2020-01-01", "profitbusinessId", 0, "pie");
        // // 利润2019
        this.isaxios("/jtService/list_jtservice_revenue_month", "2019-01-01", "profitbusinessId", 1, "bar");
        this.isaxios("/jtService/list_jtservice_revenue_format", "2019-01-01", "profitbusinessId", 1, "pie");
        // this.isaxios('/jtService/list_jtservice_profit_month', '2019-01-01', 3, 'bar')
        // this.isaxios('/jtService/list_jtservice_profit_format', '2019-01-01', 3, 'pie')
        let time = setTimeout(() => {
            for (let i = 1; i <= 6; i++) {
                if (i <= 3) {
                    this.navData.push(document.getElementById("box" + i).offsetTop);
                } else {
                    this.navData.push(document.getElementById("box" + i).offsetTop - 36);
                }
            }
            window.clearTimeout(time)
        }, 500);
        this.$refs.scrollDiv.businessId = this.businessIdData.businessId;
        this.$refs.scrollDiv.profitbusinessId = this.businessIdData.profitbusinessId;
        this.$refs.scrollDiv.costbusinessId = this.businessIdData.costbusinessId;
        this.$refs.scrollBottom.quantitativeStructurebusinessId = this.businessIdData.quantitativeStructurebusinessId;
        this.$refs.scrollBottom.rateofreturnbusinessId = this.businessIdData.rateofreturnbusinessId;
    },
    watch:{
        quantityShow(){
            this.$refs.scrollBottom.quantityShow = this.quantityShow;
        }
    }
};
</script>
<style scoped lang="less">
.business {
    // width: 100%;
    height: 100%;
    // height: 2000px;
    background: #f3f7ff;

    .businessMargin {
        margin: 0 5%;
        margin-right: 11%;
        background: transparent;

        .anchor {
            padding-top: 5%;
            padding-bottom: 5%;
            box-sizing: border-box;
            position: fixed;
            box-shadow: 1, 1, 1, 10 rgba(0, 0, 0, 1);
            width: 8%;
            // height: 80%;
            background: #fff;
            z-index: 100;
            top: 10%;
            right: 1%;
            border-radius: 10px;
            // text-align: center;
            div {
                cursor: pointer;
                padding: 10% 0;
                margin: 15% 0;
                margin-left: 25%;
            }

            .anchorHover,
            .anchorHover:hover {
                background: #737aef;
                margin-left: -8%;
                margin-right: 8%;
                border-radius: 10px;
                padding-left: 40px;
            }
        }
    }
}
</style>
