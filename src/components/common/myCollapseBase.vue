<template>
    <div class="container">
        <div class="collapse" id="collapse" :style="{width:navBarShow?'90%':'98%'}">
            <div v-for="(item, index) in collapseData"
                 :key="index"
                 :id="item.id"
                 class="box_">
                <el-collapse v-model="activeName">
                    <el-collapse-item
                            v-for="(cit, cix) in item.collapseItem"
                            :name="item.id + cix"
                            :key="cix"
                            :class="{ noMargin: cix === 0 }">
                        <template slot="title">
                            {{ cit.collapseTitle }}
                        </template>
                        <div class="ECharts"
                             style="width: 100%; min-height: 100px">
                            <div v-if="cit.EChartsBox.length === 0"
                                 style="width: 100%;height: 100px;background: white;border-radius: 10px"></div>
                            <div class="allQuery" v-if="cit.allQuery&&cit.allQueryData">
                                <div>
                                    <el-input v-if="cit.allQueryData.input" placeholder="请输入内容"
                                              v-model="allQuery.inputValue"></el-input>
                                    <el-select v-if="cit.allQueryData.select"
                                               v-model="allQuery.selectValue"></el-select>
                                    <el-date-picker
                                            v-model="allQuery.timeValue"
                                            v-if="cit.allQueryData.time"
                                            type="monthrange"
                                            value-format="yyyy-MM"
                                            range-separator="至"
                                            start-placeholder="开始月份"
                                            end-placeholder="结束月份">
                                    </el-date-picker>
                                    <el-button icon="el-icon-search" type="primary"
                                               @click="refreshClick(cit,allQuery,cit.year,item.name,cit)">搜索
                                    </el-button>
                                </div>
                            </div>
                            <div  v-for="(sit, six) in cit.EChartsBox"
                                 :key="six"
                                 :style="sit.style">
                                <div class="Title">{{ sit.title }}</div>
                                <div class="query"
                                     v-if="sit.time || sit.select || sit.input">
                                     <el-input v-model="query.inputValue" v-if="sit.input" placeholder="请输入内容"></el-input>
                                    <el-select v-model="query.selectValue"
                                               v-if="sit.select"></el-select>
                                    <el-date-picker
                                            v-if="sit.time"
                                            v-model="query.timeValue"
                                            type="monthrange"
                                            value-format="yyyy-MM"
                                            range-separator="至"
                                            start-placeholder="开始月份"
                                            end-placeholder="结束月份">
                                    </el-date-picker>
                                    <el-button icon="el-icon-search" type="primary" v-if="sit.time || sit.select"
                                               @click="refreshClick(cit,query,cit.year,item.name,sit)">搜索
                                    </el-button>
                                </div>
                                <div v-for="(wit, wix) in sit.EChartsItem"
                                     :key="wix"
                                     style=" margin-bottom: 100px;position: relative;"
                                     :style="wit.style"
                                     class="echarts"
                                     @mouseover="mouseover(wit, wix, sit.title,(cit.id + '++' + six + '++' + wix),(cit.id + '-' + six + '-' + wix))">
                                    <my-information
                                            @isData="isData"
                                            v-if="(wit.type !=='box' && !wit.type && wit.option.series && wit.option.series[0].data.length !==0 && wit.option.series[0].data[0].name!=='占比')"
                                            class="information"
                                    ></my-information>
                                    <div class="MaxMinAverage"
                                         v-if="(wit.option && wit.option.series && 
                                         wit.option.series[0].data.length !==0 && 
                                         wit.option.series[0].type !=='pie' &&
                                         wit.option.series[0].data[0].name!=='占比')">
                                         <div>平均：{{showTarget(wit.option,'average') + '万元'}}</div>
                                         <div>最高：{{showTarget(wit.option,'max') + '万元'}}</div>
                                         <div>最低：{{showTarget(wit.option,'min') + '万元'}}</div>
                                    </div>
                                    <div class="null" v-if="!wit.type && wit.option.series[0].data.length ==0">
                                        暂无数据
                                    </div>
                                    <div v-if="!wit.type"
                                         style="width: 100%; height: 100%;overflow: hidden;"
                                         :id="cit.id + '-' + six + '-' + wix"></div>
                                    <!-- 转换表格开始 -->
                                    <div v-if="!wit.type" style="width: 100%; height: 100%;overflow: auto;"
                                         :id="cit.id + '++' + six + '++' + wix"></div>
                                    <!-- 转换表格结束 -->
                                    <div style=" width: 100%; height: 100%;"
                                         :style="{marginTop : sit.time || sit.select ? '60px' :''}"
                                         v-if="!!wit.type && wit.type !== 'box'">
                                        <my-table
                                                :totalCount="totalCount"
                                                @ClickTotal="ClickTotal"
                                                @selectionChange="(row) => {$emit('selectionChange',row);}"
                                                :columns="wit.columns"
                                                :height="wit.height? wit.height:'300px'"
                                                :multiple="false"
                                                :border=" wit.border ? wit.border : true"
                                                :data="wit.tableData"
                                                :is-pagination="wit.isPagination"
                                                v-if="wit.type === 'table'">
                                        </my-table>
                                        <my-map v-if="wit.type === 'map'"
                                                :vid="cit.id + '-' + six + '-' + wix"></my-map>
                                    </div>
                                    <div v-if="wit.type && wit.type === 'box'"
                                         :style="wit.style.style">
                                        {{ wit.style.style.content }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <div class="navigation" v-if="navBarShow">
            <div class="navBar">
                <p></p>
                <p style="cursor: pointer" @click="collapseAll">
                    {{ sumClick % 2 === 0 ? "全部收起" : "全部展开" }}
                </p>
                <p v-for="(it, ix) in collapseData"
                   @click="goto(it.id)"
                   :class="{ active: isActive == ix,'navItem':true }"
                   :key="ix">
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
    import MyInformation from "./myInformation";
    import {outExe} from "../../../public/api/excel";
    import clone from "../../../public/api/clone"

    export default {
        name: "myCollapseBase",
        components: {MyMap, MyTable, MyInformation},
        props: {
            navBarShow:{
                type: Boolean,
                default: false,
            },
            collapseData: {
                type: Array,
                default: [],
            },
            totalCount: {
                type: Number,
                default: 0,
            }
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
                timeID: [],
                optionData: [],
                optionTitle: "",
                optionType: "",
                optionId: '',
                optionIid: '',
                allQuery: {
                    inputValue: '',
                    selectValue: '',
                    timeValue: ''
                },
                query: {
                    inputValue: '',
                    selectValue: '',
                    timeValue: ''
                },
                canSearch: true,
                NoDataTmie: 1000
            };
        },
        methods: {
            // 计算平均值最小值最大值
            showTarget(v, type) {
                let obj = {
                    min: '',
                    max: '',
                    average: ''
                };
                let mun = [];
                let num = 0;
                if (v && v.series) {
                    let d = v.series[0].data;
                    d.forEach(i => {
                        if(!!i.value){
                            mun.push(i.value);
                            num += Number(i.value);
                        }else{
                            mun.push(i);
                            num += Number(i);
                        }
                    });
                    obj.max = Math.max(...mun);
                    obj.min = Math.min(...mun);
                    obj.average = parseInt(num / d.length  / 10000)
                    if (type === 'max') {
                        return parseInt(obj.max / 10000);
                    }
                    if (type === 'min') {
                        return parseInt(obj.min / 10000);
                    }
                    if (type === 'average') {
                        return obj.average;
                    }
                }
            },
            searchClick(arr) {
                arr.forEach(i => {
                    this.$echarts.init(document.getElementById(i.id)).dispose();
                    this.$nextTick((_) => {
                        this.$echarts.init(document.getElementById(i.id)).setOption(i.option);
                    });
                })
            },
            // 按钮的节流
            refreshClick(EChartsBox, query, year, name, collapseItem) {
                this.$emit('searchQuery', EChartsBox, query, year, name)
            },
            async refresh() {
                let timeID = "";
                this.time_ = -1;
                let number = 1000;
                await new Promise((resolve) => {
                    timeID = setInterval((_) => {
                        if (this.time_ > -1 && this.time_ !== this.EChartsData_.length) {
                            let data = this.EChartsData_[this.time_];
                            console.log(data)
                            if (!!data && data.EChartsBox && data.EChartsBox.length !== 0) {
                                data.EChartsBox.forEach((fi, fx) => {
                                    fi.EChartsItem.forEach((si, sx) => {
                                        let id = this.EChartsData_[this.time_].id + "-" + fx + "-" + sx;
                                        if (si.type !== "table" && si.type !== "map" && si.type !== "box") {
                                            this.$echarts.init(document.getElementById(id)).dispose();
                                            this.$nextTick((_) => {
                                                if(si.option.series[0].data.length!==0){
                                                    this.$echarts.init(document.getElementById(id)).setOption(si.option);
                                                }
                                            });
                                        }
                                    });
                                });
                            }
                        }
                        if (this.time_ === this.EChartsData_.length) {
                            clearInterval(timeID);
                            resolve();
                        }
                        this.time_++;
                    }, 400);
                    this.timeID.push(timeID);
                });
            },
            async initECharts() {
                let timeID = "";
                await new Promise((resolve) => {
                    timeID = setInterval(() => {
                        if (this.time !== this.EChartsData.length) {
                            let item = this.EChartsData[this.time];
                            if(item.option.series[0].data.length!==0){
                                this.$echarts.init(document.getElementById(item.id)).setOption(item.option);
                            }
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
            mouseover(wit, wix, title, id, ids) {
                this.optionIid = ids
                this.optionId = id;
                this.optionTitle = title;
                this.optionData = wit;
                // console.log(wit,wix)
            },
            /**
             * 导出以及table的数据
             */
            isExcelData() {
                let datas = {};
                let xAxis = [];
                let series = [];
                let bool = true;
                let optionData = clone(this.optionData)
                optionData.option.series.forEach((element, index) => {
                    series.push([]);
                    // 饼图
                    if (optionData.option.series[0].type === "pie") {
                        let list = [];
                        optionData.option.series[index].data.forEach(
                            (element) => {
                                list.push(element.value);
                            }
                        );
                        series[index].push(list);
                        // datas.series = [this.optionData.option.series[0].data];
                        if (optionData.option.legend.data) {
                            datas.xAxis = optionData.option.legend.data;
                        } else {
                            let x = []
                            optionData.option.series[0].data.forEach(element => {
                                x.push(element.name)
                            });
                            datas.xAxis = x;
                        }
                        // 折线图
                    } else if (optionData.option.series[0].type === "line") {
                        series[index].push(optionData.option.series[index].data);
                        series[index][0].unshift(optionData.option.legend.data[index]);
                        datas.xAxis = optionData.option.xAxis.data;
                        if (bool) {
                            bool = false;
                            datas.xAxis.unshift(" ");
                        }
                        // 柱状图
                    } else if (optionData.option.series[0].type === "bar") {
                        series[index].push(optionData.option.series[index].data);
                        if (!(optionData.option.xAxis[0])) {
                            if (optionData.option.yAxis.data) {
                                datas.xAxis = optionData.option.yAxis.data;
                            } else {
                                datas.xAxis = optionData.option.xAxis.data;
                            }
                        } else {
                            datas.xAxis = optionData.option.xAxis[0].data;
                        }
                    }
                });
                datas.name = this.optionTitle;
                datas.series = series;
                return datas
            },
            /**
             * 导入导出excel
             */
            isData(val) {
                debugger
                let datas = this.isExcelData()
                // 图标
                if (val === "focus") {
                    document.getElementById(this.optionIid).style.display = 'block'
                }
                // 列表
                if (val === "datas") {
                    document.getElementById(this.optionIid).style.display = 'none';
                    if (datas.series[0][0].length !== 0) {
                        let table = `<table style="text-align:center;vertical-align:middle;margin:20px auto 0" cellPadding="0" cellSpacing="0" border=1 width="90%">`
                        table += `<tr>
                        <th colspan=${datas.series.length + 1}>${datas.name}</th>
                    </tr>`
                        datas.xAxis.forEach((element, index) => {
                            table += `<tr>
                            <td style="line-height: 2">${element}</td>`
                            switch (datas.series.length) {
                                case 7:
                                    table += `<td>${datas.series[4][0][index]}</td>`
                                case 6:
                                    table += `<td>${datas.series[4][0][index]}</td>`
                                case 5:
                                    table += `<td>${datas.series[4][0][index]}</td>`
                                case 4:
                                    table += `<td>${datas.series[3][0][index]}</td>`
                                case 3:
                                    table += `<td>${datas.series[2][0][index]}</td>`
                                case 2:
                                    table += `<td>${datas.series[1][0][index]}</td>`
                                case 1:
                                    table += `<td>${datas.series[0][0][index]}</td>`
                                default:
                                    break;
                            }

                            table += `</tr>`
                        });

                        table += '</table>'
                        document.getElementById(this.optionId).innerHTML = table
                    }
                }
                //导出excel
                if (val === "excel") {
                    outExe(this.isExcelData())
                }

            },
            ClickTotal(value) {
                this.$emit('ClickTotal', value)
            }
        },
        mounted() {
            // this.refresh()
            this.scrollChange();
            this.collapseData.forEach((i) => {
                i.collapseItem.forEach((m, cx) => {
                    if (m.EChartsBox && m.EChartsBox.length !== 0) {
                        this.activeName.push(i.id + cx);
                        this.activeName_.push(i.id + cx);
                        this.EChartsData_.push({
                            id: m.id,
                            EChartsBox: m.EChartsBox,
                        });
                    }
                    if (m.EChartsBox && m.EChartsBox.length !== 0) {
                        m.EChartsBox.forEach((kt, ki) => {
                            kt.EChartsItem.forEach((mt, mx) => {
                                this.$nextTick((_) => {
                                    if (mt.type !== "map" && mt.type !== "table" && mt.type !== "box") {
                                        this.EChartsData.push({
                                            id: m.id + "-" + ki + "-" + mx,
                                            option: mt.option,
                                        });
                                    }
                                });
                            });
                        });
                    }
                });
            });
        },
        beforeDestroy() {
            this.timeID.forEach((i) => {
                clearInterval(i);
            });
        },
    };
</script>

<style scoped lang="less">

    .container {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;

        .collapse {
            width: 98%;
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
                        height: 50px;
                        background: #fff;
                        margin-bottom: 5px;
                        padding: 0 20px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        // flex-direction: column;
                        border-radius: 10px;
                    }

                    .allQuery /deep/ .el-date-editor {
                        margin: 5px 20px 0 0;
                    }

                    .allQuery /deep/ .el-input {
                        margin: 5px 20px 5px 10px;
                        width: 200px;
                    }

                    .allQuery /deep/ .el-button {
                        margin: 5px 20px;
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
                        height: 40px;
                        background: white;
                        line-height: 40px;
                        text-indent: 10px;
                        font-size: 18px;
                        font-weight: 600;
                        border-bottom: 5px solid #f3f7ff;
                        text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
                    }

                    .query {
                        position: absolute;
                        width: 90%;
                        height: 60px;
                        z-index: 999;
                        top: 50px;
                        right: 20px;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                    }

                    .query /deep/ .el-date-editor {
                        margin: 10px 20px 0 0;
                    }
                    .query /deep/ .el-input {
                        margin: 10px 20px 0 0;
                        width: 180px;
                    }
                    .query /deep/ .el-select {
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

            .box_
            /deep/
            .el-collapse
            > .noMargin
            > div
            > .el-collapse-item__header {
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
                background: #1d7dca;
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

            .box_
            /deep/
            .el-collapse
            > .el-collapse-item
            > .el-collapse-item__wrap {
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
            width: 8%;
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

                .navItem {
                    cursor: pointer;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .active {
                    background: #1d7dca;
                    margin-left: -8%;
                    margin-right: 8%;
                    color: white;
                    padding-left: 20px;
                    box-shadow: 10px 5px 10px 0 rgba(0, 0, 0, 0.3);
                }
            }

            .navBar > p {
                // cursor: pointer;
                font-size: 15px;
                padding: 10% 0;
                margin: 5% 0;
                margin-left: 20%;
                transition: linear 0.3s;
                border-radius: 10px;

                .img {
                    width: 20px;
                    vertical-align: -6px;
                }
            }
        }

        .echarts {
            position: relative;
            
            
            .MaxMinAverage{
                position: absolute;
                display: flex;
                flex-direction: column-reverse;
                top: -40px;
                right: 10px;
                background: #fff;
                padding: 5px;
                box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
                border-radius: 10px;
                div{
                    font-weight: 700;
                }
            }

            .null {
                z-index: 999;
                width: 100px;
                height: 20px;
                font-size: 20px;
                font-weight: 700;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
            }
        }

        .information {
            display: none;
        }

        .echarts:hover.echarts > .information {
            display: block;
        }
    }
</style>