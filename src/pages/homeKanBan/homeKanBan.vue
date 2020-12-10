<template>
    <div class="body" id="body_a">
        <div id="weather-v2-plugin-simple"></div>
        <div class="container">
            <div class="con" id="theme">
                <div class="H_top">
                    <div class="H_top_left">
                        <HomeTopLeft :backdrop="backdrop"></HomeTopLeft>
                    </div>
                    <div class="Real-timeInformation">
                        <div id="con">
                            <p v-for="i in timeInformation" :key="i">
                                <img src="../../assets/announcement.png">{{ i }}
                            </p>
                        </div>
                    </div>
                    <div class="H_top_center">
                        <!--                        <center-map :backdrop="backdrop" @showMap="showMap"></center-map>-->
                        <center-map-base :backdrop="backdrop"></center-map-base>
                    </div>
                    <div class="H_top_right">
                        <HomeTopRight :backdrop="backdrop" ref="homeTopRight"></HomeTopRight>
                    </div>
                </div>
                <div style="height: 1%;width: 100%"></div>
                <div class="H_bottom">
                    <home-bottom :backdrop="backdrop" ref="homebottom" @showOne="showOne"></home-bottom>
                </div>
            </div>
            <div class="Switch">
                <el-select popper-class="DATAselect" v-model="selectValue" @change="switchStyle(selectValue)">
                    <el-option label="默认" :value="0"></el-option>
                    <el-option label="靛青" :value="1"></el-option>
                </el-select>
            </div>
            <div class="more">
                <span style="padding: 0 10px">{{ times }}</span>
            </div>
        </div>
        <show-e-charts ref="showECharts" :backdrop="backdrop"></show-e-charts>
        <show-map :backdrop="backdrop" ref="showMap"></show-map>
    </div>
</template>

<script>
    import HomeTopLeft from "./children/HomeTopLeft";
    import CenterMap from "./children/centerMap";
    import HomeTopRight from "./children/HomeTopRight";
    import HomeBottom from "./children/HomeBottom";
    import ShowECharts from "../../components/common/showECharts";
    import ShowMap from "../../components/common/showMap";
    import time from "../../components/js/time"
    import CenterMapBase from "./children/centerMapBase";

    export default {
        name: "homeKanBan",
        data() {
            return {
                backdrop: 0,
                selectValue: 0,
                times: '',
                timeInformation: [
                    "凌晨二时 石家庄 XXX服务区因为XXX 已临时关闭 预计XXX开放 11111111",
                    "凌晨三时 武汉 XXX服务区因为XXX 已临时关闭 预计XXX开放 22222222",
                    "凌晨二时 襄阳 XXX服务区因为XXX 已临时关闭 预计XXX开放 3333333",
                    "凌晨四时 随州 XXX服务区因为XXX 已临时关闭 预计XXX开放 44444444",
                    "凌晨五时 驻马店 XXX服务区因为XXX 已临时关闭 预计XXX开放 55555555"
                ],
                screenHeight: '',
                screenWidth: ''
            };
        },
        mounted() {
            this.screenHeight = window.screen.height + 'px';
            this.screenWidth = window.screen.width + 'px';
            let this_ = this;
            this_.times = time()
            setInterval(function () {
                // 修改数据da
                this_.times = time()
            }, 1000)
            var script = document.createElement("script");
            var script2 = document.createElement("script");
            let WIDGET = `WIDGET = {
                CONFIG: {
                    "modules": "0132",
                    "background": 5,
                    "tmpColor": "FFFFFF",
                    "tmpSize": 16,
                    "cityColor": "FFFFFF",
                    "citySize": 16,
                    "aqiSize": 16,
                    "weatherIconSize": 24,
                    "alertIconSize": 18,
                    "padding": "10px 10px 10px 10px",
                    "shadow": "0",
                    "language": "zh",
                    "fixed": "false",
                    "vertical": "middle",
                    "horizontal": "right",
                    "key": "s02uREQje9"
                }
                }`
            script.text = WIDGET
            script2.src = "https://apip.weatherdt.com/simple/static/js/weather-simple-common.js?v=2.0"
            document.body.appendChild(script)
            document.body.appendChild(script2)
            let item = setInterval(() => {
                if (document.getElementsByClassName("s-sticker")[0]) {
                    document.getElementsByClassName("s-sticker")[0].nextElementSibling.style.position = 'fixed'
                    document.getElementsByClassName("s-sticker")[0].nextElementSibling.style.right = '18%'
                    document.getElementsByClassName("s-sticker")[0].nextElementSibling.style.top = '11%'
                    document.getElementsByClassName("s-sticker")[0].nextElementSibling.style.zIndex = '100000'
                    clearInterval(item)
                }
            }, 100);
        },
        methods: {
            switchStyle(v) {
                this.backdrop = v;
                let style = [
                    {
                        width: '92%',
                        height: '79%',
                        margin: '6.5% 4% 0',
                    }, {
                        width: '97%',
                        height: '85%',
                        margin: ' 6.5% 1.5% 0',
                    }, {
                        width: '97%',
                        height: '85%',
                        margin: ' 6.5% 1.5% 0',
                    }
                ];
                let bac = [
                    {
                        background: "url('" + require('../../assets/bage.png') + "') no-repeat"
                    }, {
                        background: "url('" + require('../../assets/bgi.jpg') + "') no-repeat"
                    }, {
                        background: "url('" + require('../../assets/bage3.png') + "') no-repeat"
                    }
                ];
                let theme = document.getElementById('theme');
                let body_a = document.getElementById('body_a');
                Object.assign(theme.style, style[v]);
                Object.assign(body_a.style, bac[v]);
            },
            showOne(v, type) {
                this.$refs["showECharts"].openDialog(v, type, this.selectValue);
            },
            showMap(v) {
                this.$refs['showMap'].openDialog(v);
            }
        },
        components: {CenterMapBase, ShowMap, ShowECharts, HomeBottom, HomeTopRight, CenterMap, HomeTopLeft}
    };
</script>

<style lang="less"> 
.body {
    width: 100%;
    height: 100%;
    background: url('../../assets/bage.png') no-repeat;
    background-size: cover;

    .container {
        width: 100%;
        height: 100%;
        // background: url("../assets/head.png") no-repeat;
        background-size: 100%;
        overflow: hidden;
        position: relative;

        .Switch {
            height: 31px;
            right: 6%;
            top: 1%;
            position: absolute;
        }

        .more {
            /*width: 30%;*/
            height: 31px;
            right: 13.5%;
            top: 8.2%;
            position: absolute;

        }

        .Switch /deep/ .el-input__inner {
            background: transparent;
            color: #fff;
            border-color: #0681D5;
            box-shadow: inset 1px 1px 7px rgba(1, 192, 249, 0.5);
        }

        .more > span {
            color: white;
        }

        .Switch /deep/ .el-select > .el-input {
            width: 70px;
        }

        .Switch /deep/ .el-select > .el-input > .el-input__inner {
            padding: 2px 5px;
            text-align: center;
            height: 30px;
            line-height: 30px;
        }

        .Switch /deep/ .el-select > .el-input > .el-input__suffix {
            display: none;
        }

        .con {
            width: 92%;
            height: 79%;
            margin: 6.5% 4% 0;

            .H_top {
                height: 78%;
                width: 100%;
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                justify-content: space-between;

                .Real-timeInformation {
                    width: 48%;
                    height: 30px;
                    line-height: 30px;
                    background: rgba(34, 188, 255, 0.2);
                    border: 1px solid #0681d5;
                    position: absolute;
                    z-index: 99;
                    overflow: hidden;
                    border-radius: 10em;
                    top: 8.5%;
                    left: 20%;
                    box-sizing: border-box;

                    #con {
                        width: 100%;
                        height: 100%;
                        color: red;
                        transition: linear 0.3s;

                    }

                    #con > p {
                        text-indent: 10px;
                        display: flex;
                        align-items: center;

                        img {
                            width: 2%;
                            margin-left: 1%;
                        }
                    }
                }

                .H_top_left {
                    width: 15%;
                    height: 100%;
                }

                .H_top_center {
                    width: 54%;
                    height: 96%;
                    margin-top: 0.5em;
                }

                .H_top_right {
                    width: 28%;
                    height: 100%;
                }
            }

            .H_bottom {
                height: 23%;
                width: 100%;
            }
        }
    }
}

.body  /deep/  .s-sticker {
    // position: absolute !important;
    width: 100px !important;
    position: fixed !important;
    right: 0 !important;
    margin-right: 9%;
    margin-top: 3.5%;
    // top: 7.1% !important;
    z-index: 1000;
    height: 50px !important;
}

</style>
