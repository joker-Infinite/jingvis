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
            // console.log(val, "我能");
            this.navData.forEach((element, index) => {
              console.log(val,element,'zhang')
                if (val >= element) {
                    this.isHover = index;
                }
            });
            if ( this.bool[0] && val > 100) {
                this.bool[0] = false;
                this.$refs.scrollDiv.businessId3 = {
                    id: ["HomeEchartsLeft3", "HomeEchartsCenter3", "HomeEchartsRight3"],
                    show: false,
                    data: {
                        left: [
                            [40, 80, 50, 36, 300, 35, 40, 60, 40, 80, 5000, 36],
                            [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                        ],
                        center: [[1.45, 2.93, 3.15, 4, 5]]
                    }
                };
                let timeId = setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId3);
                     window.clearTimeout(timeId)
                }, 100);

            }
            if ( this.bool[1] && val > 300) {
              console.log('调用了 HomeEchartsLeft4')
                this.bool[1] = false;
                this.$refs.scrollDiv.businessId4 = {
                    id: ["HomeEchartsLeft4", "HomeEchartsCenter4", "HomeEchartsRight4"],
                    show: false,
                    data: {
                        left: [
                            [40, 80, 500, 36, 30, 35, 40, 60, 40, 80, 50, 36],
                            [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                        ],
                        center: [[1.45, 2.93, 3.15, 4, 5]]
                    }
                };
                let timeId = setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId4);
                    window.clearTimeout(timeId)
                }, 10);

                // this.$refs.scrollDiv.businessId6.show=true;
            }
            if (this.bool[2] && val > 1100 ) {
                this.bool[2] = false;
                this.$refs.scrollDiv.businessId5 = {
                    id: ["HomeEchartsLeft5", "HomeEchartsCenter5", "HomeEchartsRight5"],
                    show: false,
                    data: {
                        left: [
                            [40, 80, 500, 36, 30, 35, 400, 60, 40, 80, 50, 360],
                            [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                        ],
                        center: [[1.45, 2.93, 3.15, 4, 5]]
                    },
                    echartsBottoms: "echartsBottom"
                };
               let timeId = setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId5);
                     window.clearTimeout(timeId)
                }, 10);

            }
            if (this.bool[3] && val > 2000) {
                this.bool[3] = false;
                this.$refs.scrollDiv.businessId6 = {
                    id: ["HomeEchartsLeft6", "HomeEchartsCenter6", "HomeEchartsRight6"],
                    show: false,
                    data: {
                        left: [
                            [400, 800, 500, 36, 30, 35, 400, 60, 40, 80, 50, 30],
                            [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                        ],
                        center: [[1.45, 2.93, 3.15, 4, 5]]
                    },
                    echartsBottoms: "echartsBottom2"
                };
               let timeId = setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId6);
                    window.clearTimeout(timeId)
                }, 10);

            }
        }
    },
    mounted() {
        this.widths = document.body.clientWidth;
        for (let i = 1; i <= 6; i++) {
          if(i<=3){

            this.navData.push(document.getElementById("box" + i).offsetTop);
          }else{
            this.navData.push(document.getElementById("box" + i).offsetTop-36);
          }
        }
        // this.$refs.scrollDiv.isechartsShow('A')
    },
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
            /*box-shadow: 1, 1, 1, 10 rgba(0, 0, 0, 1);*/
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
