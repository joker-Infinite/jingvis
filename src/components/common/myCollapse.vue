<template>
    <div class="container">
        <div class="collapse" id="collapse">
            <el-collapse v-model="activeName">
                <el-collapse-item :name="index" :id="'box' + index" :class="{'box':true,'noPD':index===0}"
                                  v-for="(item, index) in collapseData">
                    <template slot="title">
                        {{item.name}}
                    </template>
                    <div class="collapseItem">
                        <div v-for="(it,ix) in item.ECharts.EChartsItem"
                             :style="{width:it.width,borderRadius:it.borderRadius}">
                            <div class="itemTitle">
                                {{it.title}}
                            </div>
                            <div class="eChartsItem" :ref="item.ECharts.id+ix" :id="item.ECharts.id+ix"
                                 :style="it.style"></div>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="navigation">
            <div class="navBar">
                <p></p>
                <p style="cursor: pointer;" @click="collapseAll">{{sumClick%2===0?'全部收起':'全部展开'}}</p>
                <p style="cursor: pointer;" v-for="(it, ix) in collapseData" @click="goto(ix)"
                   :class="{active: isActive === ix }"
                   :key="ix">
                    <img class="img" :src="isActive === ix?it.iconActive:it.icon"/>
                    {{it.name}}
                </p>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myCollapse",
        props: {
            sum: {
                type: Number,
                default: 1
            },
            collapseData: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                activeName: [],
                activeName_: [],
                isActive: 0,
                navData: [],
                sumClick: 0
            }
        },
        methods: {
            async initECharts(v) {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, 500)
                })
                v.forEach((item, index) => {
                    item.ECharts.EChartsItem.forEach((it, ix) => {
                        let id = item.ECharts.id + ix;
                        this.$nextTick(_ => {
                            this.$echarts.init(document.getElementById(id)).setOption(it.option);
                        })
                    });
                });
            },
            /*
            * 全部收齐/展开
            * */
            collapseAll() {
                this.activeName = [];
                if (this.sumClick % 2 === 0) {
                    this.activeName = [];
                }
                if (this.sumClick % 2 !== 0) {
                    this.activeName = this.activeName_;
                }
                this.sumClick++;
            },
            /**
             * @param v 所点击导航的下标
             * */
            goto(v) {
                let id = "#box" + v;
                document.querySelector(id).scrollIntoView(true);
            },
            /**
             * 监听滚动事件
             * */
            scrollChange() {
                let left = document.getElementById("collapse");
                left.addEventListener("scroll", _ => {
                    this.navData = [];
                    this.collapseData.forEach((item, index) => {
                        this.navData.push({
                            index: index,
                            height: document.getElementById("box" + index).offsetTop
                        });
                    });
                    this.navBar(left.scrollTop);
                });
            },
            /**
             * 滚动后导航选中
             * */
            navBar(v) {
                for (let i = 0; i < this.navData.length; i++) {
                    if (v < this.navData[i].height || v == this.navData[i].height) {
                        this.isActive = i;
                        break;
                    }
                }
            }
        },
        mounted() {
            this.scrollChange();
            this.initECharts(this.collapseData);
            this.collapseData.forEach((it, ix) => {
                this.activeName_.push(ix);
                this.activeName.push(ix);
            });
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: left;
        background: #F3F7FF;

        .collapse {
            width: 85%;
            padding: 0 2.5%;
            height: 100%;
            overflow-y: scroll;
            scroll-behavior: smooth;

            .noPD /deep/ .el-collapse-item__wrap > .el-collapse-item__content {
                padding-bottom: 0;
            }
        }

        .collapse::-webkit-scrollbar {
            display: none;
        }

        .collapse /deep/ .el-collapse > .el-collapse-item > .el-collapse-item__wrap {
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0) !important;
        }

        .collapse /deep/ .el-collapse > .el-collapse-item > div > .el-collapse-item__header {
            background: #737AEF;
            border-radius: 10px;
            font-size: 16px;
            height: 48px;
            line-height: 48px;
            margin: 1em 0;
            width: 100%;
            // margin: auto;
            color: white;
            border: none;
            text-indent: 10px;
        }

        .collapse /deep/ .el-collapse > .el-collapse-item > .el-collapse-item__wrap {
            border: none;
        }

        .collapse /deep/ .el-collapse > .el-collapse-item > .el-collapse-item__wrap > .el-collapse-item__content {
            padding-bottom: 0;
        }

        .collapse /deep/ .el-collapse > .noPD > div > .el-collapse-item__header {
            margin-top: 0;
        }

        .navigation {
            width: 8%;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: center;

            .navBar {
                /*box-shadow: 1px 1px 1px 10px rgba(0, 0, 0, 1);*/
                width: 100%;
                // height: 80%;
                background: #fff;
                border-radius: 10px;

                .active {
                    background: #737aef;
                    margin-left: -8%;
                    margin-right: 8%;
                    color: white;
                    padding-left: 40px;
                }
            }

            .navBar > p {
                // cursor: pointer;
                font-size: 16px;
                padding: 10% 0;
                margin: 5% 0;
                margin-left: 25%;
                transition: linear 0.3s;
                border-radius: 10px;

                .img {
                    vertical-align: -6px;
                }
            }
        }

        .collapseItem {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 100%;
            min-height: 300px;

            .itemTitle {
                width: 100%;
                background: white;
                line-height: 60px;
                text-indent: 10px;
                font-size: 20px;
                font-weight: 700;
                border-bottom: 5px solid #F3F7FF;
            }

            .eChartsItem {
                width: 100%;
            }
        }

        .collapseItem > div {
            height: 100%;
            overflow: hidden;
        }
    }
</style>