<template>
    <div class="container">
        <div class="collapse" id="collapse">
            <div v-for="(item, index) in collapseData" :key="index" :id="item.id" class="box_">
                <el-collapse v-model="activeName">
                    <el-collapse-item v-for="(cit, cix) in item.collapseItem"
                                      :name="item.id + cix"
                                      :key="cix"
                                      :class="{ noMargin: cix === 0 }">
                        <template slot="title">
                            {{ cit.collapseTitle }}
                        </template>
                        <div class="ECharts" style="width: 100%;min-height: 100px;">
                            <div class="allQuery" v-if="false">
                                <div>
                                    <el-input></el-input>
                                    <el-select
                                    ></el-select>
                                    <el-date-picker
                                            type="monthrange"
                                            range-separator="至"
                                            start-placeholder="开始月份"
                                            end-placeholder="结束月份">
                                    </el-date-picker>
                                    <el-button type="primary"
                                    >搜索
                                    </el-button>
                                    <el-button type="primary"
                                    >搜索
                                    </el-button>
                                    <el-button type="primary"
                                    >搜索
                                    </el-button>
                                    <el-button type="primary"
                                    >搜索
                                    </el-button>
                                </div>
                            </div>
                            <div v-for="(sit, six) in cit.EChartsBox"
                                 :key="six"
                                 :style="sit.style">
                                <div class="Title">{{ sit.title }}</div>
                                <div class="query" v-if="sit.time||sit.select">
                                    <el-date-picker
                                            v-if="sit.time"
                                            v-model="sit.timeValue"
                                            type="monthrange"
                                            range-separator="至"
                                            start-placeholder="开始月份"
                                            end-placeholder="结束月份"
                                    >
                                    </el-date-picker>
                                    <el-select
                                            v-model="sit.selectValue"
                                            v-if="sit.select"
                                    ></el-select>
                                    <el-button type="primary" v-if="sit.time || sit.select"
                                    >搜索
                                    </el-button>
                                </div>
                                <div v-for="(wit, wix) in sit.EChartsItem"
                                     :key="wix"
                                     style="margin-bottom:100px;"
                                     :style="wit.style"
                                     class="echarts"
                                     :id="cit.id + '-' + six + '-' + wix">
                                    <div style="width: 100%;height: 100%" v-if="!!wit.type&&wit.type!=='box'">
                                        <my-table @selectionChange="row=>{$emit('selectionChange',row)}"
                                                  :columns="wit.columns"
                                                  :height="wit.height ? wit.height : '300px'"
                                                  :multiple="false"
                                                  :border="wit.border?wit.border:false"
                                                  :data="wit.tableData"
                                                  :is-pagination="wit.isPagination"
                                                  v-if="wit.type === 'table'">
                                        </my-table>
                                        <my-map v-if="wit.type === 'map'"
                                                :vid="cit.id + '-' + six + '-' + wix"></my-map>
                                    </div>
                                    <div v-if="wit.type&&wit.type === 'box'" :style="wit.style.style">
                                        {{wit.style.style.content}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <div class="navigation">
            <div class="navBar">
                <p></p>
                <p style="cursor: pointer;" @click="collapseAll">
                    {{ sumClick % 2 === 0 ? "全部收起" : "全部展开" }}
                </p>
                <p
                        style="cursor: pointer;"
                        v-for="(it, ix) in collapseData"
                        @click="goto(it.id)"
                        :class="{ active: isActive == ix }"
                        :key="ix"
                >
                    <img class="img" :src="isActive == ix ? it.iconActive : it.icon"/>
                    {{ it.name }}
                </p>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
    import MyTable from "./myTable";
    import MyMap from "./myMap";

    export default {
        name: "myCollapseBase",
        components: {MyMap, MyTable},
        props: {
            collapseData: {
                type: Array,
                default: [],
            },
        },
        data() {
            return {
                activeName: [],
                activeName_: [],
                sumClick: "",
                isActive: "",
                time: 0,
                time_: 0,
                selectTime: "",
                EChartsData: [],
                EChartsData_: [],
                timeID: []
            };
        },
        methods: {
            async refresh() {
                let timeID = '';
                this.time_ = -1;
                await new Promise((resolve) => {
                    timeID = setInterval(_ => {
                        if (this.time_ > -1 && this.time_ !== this.EChartsData_.length) {
                            let data = this.EChartsData_[this.time_];
                            if (data.EChartsBox) {
                                data.EChartsBox.forEach((fi, fx) => {
                                    fi.EChartsItem.forEach((si, sx) => {
                                        let id = this.EChartsData_[this.time_].id + '-' + fx + '-' + sx;
                                        if (si.type !== 'table' && si.type !== 'map' && si.type !== 'box') {
                                            this.$echarts.init(document.getElementById(id)).dispose();
                                            this.$nextTick(_ => {
                                                this.$echarts.init(document.getElementById(id)).setOption(si.option);
                                            });
                                        }
                                    })
                                });
                            }
                        }
                        if (this.time_ === this.EChartsData_.length) {
                            clearInterval(timeID);
                            resolve()
                        }
                        this.time_++;
                    }, 400);
                    this.timeID.push(timeID);
                })
            },
            async initECharts() {
                let timeID = "";
                await new Promise((resolve) => {
                    timeID = setInterval(() => {
                        if (this.time !== this.EChartsData.length) {
                            let item = this.EChartsData[this.time];
                            this.$echarts.init(document.getElementById(item.id)).setOption(item.option);
                            this.time++;
                            resolve();
                        }
                        if (this.time === this.EChartsData.length) {
                            clearInterval(timeID);
                        }
                    }, 70);
                    this.timeID.push(timeID);
                });
            },
            /**
             * @param v 所点击导航的下标
             * */
            goto(v) {
                document.querySelector("#" + v).scrollIntoView(true);
            },
            /**
             * 监听滚动事件
             * */
            scrollChange() {
                let collapse = document.getElementById("collapse");
                collapse.addEventListener("scroll", (_) => {
                    this.navData = [];
                    this.collapseData.forEach((item, index) => {
                        this.navData.push({
                            index: index,
                            height: document.getElementById(item.id).offsetTop - 1,
                        });
                    });
                    this.navBar(collapse.scrollTop);
                });
            },
            /**
             * 滚动后导航选中
             * */
            navBar(v) {
                for (let i = 0; i < this.navData.length; i++) {
                    if (i < this.navData.length - 1) {
                        if (v > this.navData[i].height && v < this.navData[i + 1].height) {
                            this.isActive = i;
                            break;
                        }
                    }
                    if (i === this.navData.length - 1) {
                        if (v > this.navData[i].height) {
                            this.isActive = i;
                            break;
                        }
                    }
                }
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
        },
        mounted() {
            this.scrollChange();
            this.collapseData.forEach((i) => {
                i.collapseItem.forEach((m, cx) => {
                    if (m.EChartsBox.length !== 0) {
                        this.activeName.push(i.id + cx);
                        this.activeName_.push(i.id + cx);
                        this.EChartsData_.push({
                            id: m.id,
                            EChartsBox: m.EChartsBox
                        });
                    }
                    if (m.EChartsBox) {
                        m.EChartsBox.forEach((kt, ki) => {
                            kt.EChartsItem.forEach((mt, mx) => {
                                this.$nextTick(_ => {
                                    if (mt.type !== "map" && mt.type !== "table" && mt.type !== "box") {
                                        this.EChartsData.push({
                                            id: m.id + "-" + ki + "-" + mx,
                                            option: mt.option
                                        });
                                    }
                                });
                            });
                        });
                    }
                });
            });
            this.initECharts(this.collapseData);
        },
        beforeDestroy() {
            this.timeID.forEach(i => {
                clearInterval(i);
            })
        }
    };
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;

        .collapse {
            width: 85%;
            height: 100%;
            overflow-y: scroll;
            scroll-behavior: smooth;

            .box_ {
                width: 100%;
                min-height: 10px;
                margin-bottom: 8px;

                .ECharts {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    .allQuery {
                        width: 100%;
                        height: 60px;
                        background: #fff;
                        margin-bottom: 10px;
                        padding: 0 20px;
                        display: flex;
                        align-items: center;
                        // flex-direction: column;
                        border-radius: 10px;
                    }

                    .allQuery /deep/ .el-date-editor {
                        margin: 10px 20px 0 0;
                    }

                    .allQuery /deep/ .el-input {
                        margin: 10px 20px 10px 10px;
                        width: 200px;
                    }

                    .allQuery /deep/ .el-button {
                        margin: 10px 20px;
                    }

                    .allQuery /deep/ .el-select {
                        margin: 0 20px;
                        /*background: #d0d1ff;*/
                        /*color: white;*/
                    }
                }

                .ECharts > div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    position: relative;

                    .Title {
                        width: 100%;
                        height: 45px;
                        background: white;
                        line-height: 45px;
                        text-indent: 10px;
                        font-size: 18px;
                        font-weight: 600;
                        border-bottom: 5px solid #f3f7ff;
                    }

                    .query {

                        position: absolute;
                        width: 90%;
                        padding: 0 5%;
                        height: 60px;
                        z-index: 999;
                        left: 0;
                        top: 50px;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                    }

                    .query /deep/ .el-date-editor {
                        margin: 10px 20px 0 0;
                    }

                    .query /deep/ .el-input__inner {
                        margin: 10px 20px 0 0;
                    }

                    .query /deep/ .el-button {
                        margin: 10px 20px;
                    }

                    .query /deep/ .el-input__inner > .el-range-input {
                        /*background: #d0d1ff;*/
                        /*color: white;*/
                    }
                }
            }

            .box_ /deep/ .el-collapse {
                border-bottom: none;
            }

            .box_ /deep/ .el-collapse > .noMargin > div > .el-collapse-item__header {
                margin-top: 0 !important;
            }

            .box_ /deep/ .el-collapse > .el-collapse-item {
            }

            .box_
            /deep/
            .el-collapse
            > .el-collapse-item
            > div
            > .el-collapse-item__header {
                background: #737aef;
                border-radius: 10px;
                font-size: 16px;
                height: 48px;
                line-height: 48px;
                margin: 8px 0;
                width: 100%;
                color: white;
                border: none;
                text-indent: 10px;
            }

            .box_ /deep/ .el-collapse > .el-collapse-item > .el-collapse-item__wrap {
                background-color: rgba(0, 0, 0, 0) !important;
            }

            .box_
            /deep/
            .el-collapse
            > .el-collapse-item
            > .el-collapse-item__wrap
            > .el-collapse-item__content {
                padding-bottom: 0;
            }
        }

        .collapse::-webkit-scrollbar {
            display: none;
        }

        .navigation {
            width: 10%;
            height: 100%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: center;

            .navBar {
                box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
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
                    box-shadow: 10px 5px 10px 0 rgba(0, 0, 0, 0.3);
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
    }
</style>
