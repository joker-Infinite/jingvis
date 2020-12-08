<template>
    <div style="width: 100%" class="box">
        <el-dialog :visible.sync="visible" width="80vh" :modal="false">
            <div class="time" v-if="timeSelect">
                <span class="text_icon">从</span>
                <el-date-picker
                        v-model="time"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions"
                >
                </el-date-picker>
                <el-button size="small">搜索</el-button>
            </div>
            <div class="bigShow" :style="isSelect" v-if="visible">
                <div class="MMA" v-if="type">
                    平均：{{obj.average}}<br>
                    最高：{{obj.max}}<br>
                    最低：{{obj.min}}
                </div>
                <div class="MMA_" v-if="type">
                    {{msg}}
                </div>
                <div id="commonECharts_data"></div>
                <div id="commonECharts"></div>
                <div class="block_l"></div>
                <div class="block_r"></div>
                <div class="block_b"></div>
            </div>
            <div class="select_type" v-if="isShow">
                <el-radio class="checkboxItem" @change="changeRadioBD(1)" v-model="selectBD" :label="1">服务区
                </el-radio>
                <el-radio class="checkboxItem" @change="changeRadioBD(2)" v-model="selectBD" :label="2">自营油站
                </el-radio>
                <el-radio class="checkboxItem" @change="changeRadioBD(3)" v-model="selectBD" :label="3">自营超市
                </el-radio>
                <el-radio class="checkboxItem" @change="changeRadioBD(4)" v-model="selectBD" :label="4">服务区招商
                </el-radio>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="visible_" width="80vh">
            <div class="bigShow_" v-if="visible_">
                <div class="left">
                    <div id="commonEChartsLeft"></div>
                </div>
                <div class="right">
                    <div id="commonEChartsRight"></div>
                </div>
                <div class="block_l"></div>
                <div class="block_r"></div>
                <div class="block_b"></div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import clone from '../../../public/api/clone'

    export default {
        name: "showECharts",
        // props: {
        //   timeSelect: {
        //     type: Boolean,
        //     default: false
        //   }
        // },
        data() {
            return {
                timeSelect: false,
                time: "",
                visible: false,
                two: false,
                visible_: false,
                isShow: false,
                selectBD: 1,
                pickerOptions: {},
                type: false,
                option: {},
                msg: '',
                obj: {
                    min: '',
                    max: '',
                    average: ''
                },
                isSelect:{}
            };
        },
        methods: {
            showTarget(v) {
                this.obj = {
                    min: '',
                    max: '',
                    average: ''
                };
                let mun = [];
                let num = 0;
                if (v && v.series) {
                    let d = v.series[0].data;
                    d.forEach(i => {
                        mun.push(i.value);
                        num += Number(i.value);
                    });
                    this.obj.max = Math.max(...mun);
                    this.obj.min = Math.min(...mun);
                    this.obj.average = num / d.length;
                    if (v.yAxis[0] && v.yAxis[0].name && v.yAxis[0].name == '亿') {
                        this.obj.max = (this.obj.max / 100000000).toFixed(2);
                        this.obj.min = (this.obj.min / 100000000).toFixed(2);
                        this.obj.average = (this.obj.average / 100000000).toFixed(2);
                    }
                    if (v.yAxis[0] && v.yAxis[0].name && v.yAxis[0].name == '百万') {
                        this.obj.max = (this.obj.max / 1000000).toFixed(2);
                        this.obj.min = (this.obj.min / 1000000).toFixed(2);
                        this.obj.average = (this.obj.average / 1000000).toFixed(2);
                    }
                }
            },
            openDialog(v, t ,selectValue) {
                if(selectValue===0){
                    this.isSelect = {
                        background: `url(${require("../../assets/kuang-_03.png")})` + 'no-repeat',
                        'background-size': '100% 100%'
                    }
                }else{
                    this.isSelect = {
                        background: `url(${require("../../assets/bgg.png")})` + 'no-repeat',
                        'background-size': '100% 100%'
                    }
                }
                v = clone(v)
                if (t === "time") {
                    this.timeSelect = true;
                } else {
                    this.timeSelect = false;
                }
                if (t === 'MMA') {
                    this.type = true;
                    this.option = v;
                    v.xAxis[0].data.forEach((it, ix) => {
                        this.option.xAxis[0].data[ix] = ix + 1;
                    });
                    if (this.option.yAxis[0].name == '亿') {
                        this.msg = '营收（亿）';
                    }
                    if (this.option.yAxis[0].name == '百万') {
                        this.msg = '利润（百万）';
                    }
                    this.showTarget(this.option);
                    this.option.yAxis[0].name = ''
                }
                if (Array.isArray(v) === true) {
                    this.visible_ = true;
                    this.$nextTick((_) => {
                        this.inntECharts_(v);
                        this.isShow = false;
                    });
                } else {
                    this.visible = true;
                    this.$nextTick(() => {
                        if (v.series[0] && v.series[0].data.length === 0) {
                            if (v.grid) {
                                v.grid.show = false
                            }
                            v.xAxis[0].show = false;
                            v.yAxis[0].show = false;
                            this.type = false
                            document.getElementById('commonECharts_data').innerHTML = '暂无数据'
                        }
                        this.initECharts(v);
                    })
                }
            },
            initECharts(option) {
                document.getElementById("commonECharts").removeAttribute("_echarts_instance_");
                this.$nextTick((_) => {
                    let commonECharts = this.$echarts.init(
                        document.getElementById("commonECharts")
                    );
                    option.grid = {
                        bottom: "10%",
                        left: "9%",
                        right: "4%",
                        show: option.grid && option.grid.show ? true : false,
                        top: "20%",
                    };
                    commonECharts.setOption(option);
                });
            },
            inntECharts_(option) {
                document
                    .getElementById("commonEChartsLeft")
                    .removeAttribute("_echarts_instance_");
                document
                    .getElementById("commonEChartsRight")
                    .removeAttribute("_echarts_instance_");
                this.$nextTick((_) => {
                    let commonEChartsLeft = this.$echarts.init(
                        document.getElementById("commonEChartsLeft")
                    );
                    let commonEChartsRight = this.$echarts.init(
                        document.getElementById("commonEChartsRight")
                    );
                    commonEChartsLeft.setOption(option[0]);
                    commonEChartsRight.setOption(option[1]);
                });
            },
        },
    };
</script>

<style scoped lang="less">
    .select_type {
        width: 100%;
        position: absolute;
        top: 15%;
        left: 10%;
        z-index: 999;

        .checkboxItem {
            color: white;
        }
    }

    .box /deep/ .el-dialog__wrapper > .el-dialog {
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
    }

    .box /deep/ .el-dialog__body {
        padding: 0;
    }

    .box /deep/ .el-dialog__header {
        position: absolute;
        right: 0;
        top: -1vh;
        color: red;
        z-index: 1000;
    }

    .box /deep/ .el-dialog__header > .el-dialog__headerbtn > .el-dialog__close {
        color: white;
    }

    .time {
        text-align: center;
        background: rgb(0 18 53);
        color: white;
        /*border: 3px solid rgb(22, 154, 252);*/
        box-shadow: 0 0 10px rgb(22, 115, 210) inset;
        border-bottom: none;

        .text_icon {
            padding: 0 10px;
        }
    }

    .time /deep/ .el-date-editor {
        background: none;
        border: none;
    }

    .time /deep/ .el-date-editor > .el-range-input {
        color: black;
        /*background: none;*/
    }

    .time /deep/ .el-date-editor > .el-range-separator {
        color: white;
    }

    .time /deep/ .el-date-editor > .el-input__icon {
        color: white;
    }

    .time /deep/ .el-button {
        background: none;
        /*border: none;*/
        border-radius: 0;
        color: white;
    }

    .bigShow {
        width: 100%;
        height: 60vh;
        box-shadow: 0 0 10px #38d inset;
        position: relative;
        // background: #10448a;
        // background: url("../../assets/detail_background.jpg") no-repeat;
        

        #commonECharts_data {
            width: 115px;
            height: 35px;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            font-size: 2em;
            color: #fff;
        }

        .MMA {
            width: 18%;
            position: absolute;
            top: 2%;
            right: 0;
            text-align: left;
            font-size: 16px;
            color: white;
        }

        .MMA_ {
            width: 18%;
            position: absolute;
            top: 9%;
            left: 8%;
            text-align: left;
            font-size: 20px;
            color: white;
        }

        #commonECharts {
            // width: 710px;
            // height: 560px;
            // padding: 20px;
            width: 100%;
            height: 100%;
        }

        .block_l {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            width: 0.5em;
            height: 4.5em;
            background: #00b8fe;
            z-index: 999;
        }

        .block_r {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            width: 0.5em;
            height: 4.5em;
            background: #00b8fe;
            z-index: 999;
        }

        .block_b {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 4.5em;
            height: 0.5em;
            background: #00b8fe;
            z-index: 999;
        }
    }

    .bigShow_ {
        width: 750px;
        height: 600px;
        box-shadow: 0 0 10px #38d inset;
        position: relative;
        background: #10448a;

        .left {
            width: 50%;
            height: 100%;
            float: left;

            #commonEChartsLeft {
                width: 100%;
                height: 100%;
            }
        }

        .right {
            width: 50%;
            height: 100%;
            float: right;

            #commonEChartsRight {
                width: 100%;
                height: 100%;
            }
        }

        .block_l {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            width: 0.5em;
            height: 4.5em;
            background: #00b8fe;
            z-index: 999;
        }

        .block_r {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            width: 0.5em;
            height: 4.5em;
            background: #00b8fe;
            z-index: 999;
        }

        .block_b {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 4.5em;
            height: 0.5em;
            background: #00b8fe;
            z-index: 999;
        }
    }
</style>
