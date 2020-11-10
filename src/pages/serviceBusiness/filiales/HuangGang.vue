<template>
    <div class="business" :style="{ width: widths }">
        <div class="businessMargin">
            <my-table @isCom="isCom"></my-table>
            <busines-top ref="scrollDiv"></busines-top>
            <busines-bottom></busines-bottom>
            <div class="anchor ">
                <div :class="{ anchorHover: isHover == index }" @click="goto(index)" v-for="(item, index) of anchorData" :key="index">
                    <img :src="isHover == index ? item.iconHover : item.icon" />
                    <!-- <img src="../../assets/business/icon_03.png" alt=""> -->
                    {{ item.name }}
                </div>
            </div>
        </div>
        <el-backtop></el-backtop>
    </div>
</template>
<script>
import BusinesTop from "../businesstop";
import BusinesBottom from "../businessbottom";
import MyTable from "./HuangGangcommon/table";
export default {
    components: { BusinesTop, BusinesBottom, MyTable },
    props: ["scroll"],
    data() {
        return {
          bool: [true, true, true,true],
            isHover: 0,
            scrollTop: "",
            isActive: 0,
            tabData: [],
            navData: [],
            height: 0,
            anchorData: [
                {
                    name: "营收",
                    icon: require("../../../assets/business/icon_1-1.png"),
                    iconHover: require("../../../assets/business/icon_1-2.png")
                },
                {
                    name: "利润",
                    icon: require("../../../assets/business/icon_2-1.png"),
                    iconHover: require("../../../assets/business/icon_2-2.png")
                },
                {
                    name: "成本",
                    icon: require("../../../assets/business/icon_3-1.png"),
                    iconHover: require("../../../assets/business/icon_3-2.png")
                },
                {
                    name: "数量",
                    icon: require("../../../assets/business/icon_4-1.png"),
                    iconHover: require("../../../assets/business/icon_4-2.png")
                },
                {
                    name: "结构",
                    icon: require("../../../assets/business/icon_5-1.png"),
                    iconHover: require("../../../assets/business/icon_5-2.png")
                },
                {
                    name: "回款率",
                    icon: require("../../../assets/business/icon_6-1.png"),
                    iconHover: require("../../../assets/business/icon_6-2.png")
                }
            ],
            widths: ""
        };
    },

    methods: {
        goto(v) {
            this.isHover = v;
            let id = "#box" + (v + 1);
            document.querySelector(id).scrollIntoView(true);
        },
        isCom(val) {
            this.$emit("isCom", val);
        },
        isscrollTop(val) {
            console.log(val, "我能1");
            this.navData.forEach((element, index) => {
                if (val >= element) {
                    this.isHover = index;
                }
            });
            if (this.bool[0] && val > 300) {
                this.bool[0] = false;
                this.$refs.scrollDiv.businessId3.show = true;
                this.$refs.scrollDiv.businessId3 = {
                    id: ["HomeEchartsLeft3", "HomeEchartsCenter3", "HomeEchartsRight3"],
                    show: false,
                    data: {
                        left: [
                            [40, 80, 50, 36, 300, 35, 40, 60, 40, 80, 50, 36],
                            [40, 60, 40, 36, 30, 35, 40, 60, 40, 80, 50, 36]
                        ],
                        center: [[1.45, 2.93, 3.15, 4, 5]]
                    }
                };
                setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId3);
                }, 10);
            }
            if (this.bool[1] && val > 500) {
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
                setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId4);
                }, 10);
                // this.$refs.scrollDiv.businessId6.show=true;
            }
            if (this.bool[2] && val > 1300) {
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
                setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId5);
                }, 10);
            }
            if (this.bool[3] && val > 2200) {
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
                setTimeout(() => {
                    this.$refs.scrollDiv.isechartsShow(this.$refs.scrollDiv.businessId6);
                }, 10);
            }
        }
    },
    mounted() {
        this.widths = document.body.clientWidth;
        for (let i = 1; i <= 6; i++) {
            this.navData.push(document.getElementById("box" + i).offsetTop);
        }
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
        margin-right: 10%;
        background: transparent;
        .anchor {
            padding-top: 5%;
            box-sizing: border-box;
            position: fixed;
            box-shadow: 1, 1, 1, 10 rgba(0, 0, 0, 1);
            width: 8%;
            height: 80%;
            background: #fff;
            z-index: 100;
            top: 10%;
            right: 0;
            border-radius: 10px;
            // text-align: center;
            div {
                cursor: pointer;
                padding: 10px 0;
                margin: 30px 0;
                margin-left: 40px;
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
