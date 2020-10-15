<template>
    <div style="width: 100%" class="box">
        <el-dialog :visible.sync="visible" width="800px">
            <div class="bigShow" v-if="visible">
                <div id="commonECharts"></div>
                <div class="block_l"></div>
                <div class="block_r"></div>
                <div class="block_b"></div>
            </div>
        </el-dialog>
        <el-dialog :visible.sync="visible_" width="800px">
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
    export default {
        name: "showECharts",
        data() {
            return {
                visible: false,
                two: false,
                visible_: false
            }
        },
        methods: {
            openDialog(v) {
                if (Array.isArray(v) === true) {
                    this.visible_ = true;
                    this.$nextTick(_ => {
                        this.inntECharts_(v);
                    });
                } else {
                    this.visible = true;
                    this.$nextTick(_ => {
                        this.initECharts(v);
                    });
                }


            },
            initECharts(option) {
                document.getElementById("commonECharts").removeAttribute("_echarts_instance_");
                this.$nextTick(_ => {
                    let commonECharts = this.$echarts.init(document.getElementById("commonECharts"));
                    commonECharts.setOption(option);
                })
            },
            inntECharts_(option) {
                document.getElementById("commonEChartsLeft").removeAttribute("_echarts_instance_");
                document.getElementById("commonEChartsRight").removeAttribute("_echarts_instance_");
                this.$nextTick(_ => {
                    let commonEChartsLeft = this.$echarts.init(document.getElementById("commonEChartsLeft"));
                    let commonEChartsRight = this.$echarts.init(document.getElementById("commonEChartsRight"));
                    commonEChartsLeft.setOption(option[0]);
                    commonEChartsRight.setOption(option[1]);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .box /deep/ .el-dialog__wrapper > .el-dialog {
        background: rgba(0, 0, 0, .5);
    }

    .bigShow {
        width: 750px;
        height: 600px;
        box-shadow: 0 0 10px #38d inset;
        position: relative;
        background: #10448a;

        #commonECharts {
            width: 710px;
            height: 560px;
            padding: 20px;
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