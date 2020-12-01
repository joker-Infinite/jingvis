<template>
    <div class="amap-page-container">
        <div class="el-icon-full-screen enlarge" @click="enlargeMap"></div>
        <div class="Real-timeInformation">
            <div id="con">
                <p v-for="i in timeInformation" :key="i">
                    {{ i }}
                </p>
            </div>
        </div>
        <el-amap
                vid="djisoa"
                :center="center"
                :zoom="zoom"
                class="amap-demo"
                :events="events"
                :map-style="mapStyle"
                pitch-enable="false">
            <el-amap-marker
                    v-for="(marker, index) in markers"
                    :key="index"
                    :events="marker.events"
                    :position="marker.position"
                    :icon="marker.icon"/>
            <el-amap-info-window
                    v-if="window"
                    :position="window.position"
                    :visible="window.visible"
                    :content="window.content"
                    :offset="window.offset"
                    :close-when-click-map="true"
                    :is-custom="true">
                <div id="info-window">
                    <p style="line-height: 30px;text-align: center">
                        {{ window.address }}
                    </p>
                    <p style="text-align: center;font-size: 20px;font-weight: 700;" v-for="i in 3" :key="i">
                        {{ i }}+XXXXXXXXXXX
                    </p>
                </div>
            </el-amap-info-window>
        </el-amap>
    </div>
</template>

<script>
    export default {
        name: "centerMap",
        components: {},
        data() {
            return {
                amaps: false,
                markersData: [],
                zoom: 8,
                center: [114.286298, 30.5855],
                expandZoomRange: true,
                markers: [],
                windows: [],
                window: "",
                events: {},
                mapStyle: "amap://styles/8cb6df918ee512eae9c9198c38a40c91",
                i: 0,
                timeClear: "",
                timeInformation: [
                    "凌晨二时 石家庄 XXX服务区因为XXX 已临时关闭 预计XXX开放 11111111",
                    "凌晨三时 武汉 XXX服务区因为XXX 已临时关闭 预计XXX开放 22222222",
                    "凌晨二时 襄阳 XXX服务区因为XXX 已临时关闭 预计XXX开放 3333333",
                    "凌晨四时 随州 XXX服务区因为XXX 已临时关闭 预计XXX开放 44444444",
                    "凌晨五时 驻马店 XXX服务区因为XXX 已临时关闭 预计XXX开放 55555555"
                ]
            };
        },
        methods: {
            enlargeMap() {
                this.$emit("showMap", this.markersData);
            },
            check() {
                let con = document.getElementById("con");
                if (this.i < this.timeInformation.length - 1) {
                    this.i++;
                    con.style.marginTop = -30 * this.i + "px";
                }
                if (this.i == this.timeInformation.length - 1) {
                    // clearInterval(this.timeClear);
                    this.i = 0;
                    con.style.marginTop = "0px;";
                }
            },
            async point() {
                const markers = [];
                const windows = [];
                const that = this;
                this.markersData.forEach((item, index) => {
                    let icon = require('../../../assets/First.png');
                    if (index === 0) {
                        icon = require('../../../assets/First.png')
                    }
                    if (index === 1) {
                        icon = require('../../../assets/Second.png')
                    }
                    if (index === 2) {
                        icon = require('../../../assets/Thrid.png')
                    }
                    if (index > 2) {
                        icon = 'https://iknow-pic.cdn.bcebos.com/43a7d933c895d1438b0a645d63f082025aaf074b'
                    }
                    markers.push({
                        position: item.position.split(','),
                        events: {
                            click() {
                                // 方法：鼠标移动到点标记上，显示相应窗体
                                that.windows.forEach(window => {
                                    window.visible = false; // 关闭窗体
                                });
                                that.window = that.windows[index];
                                that.$nextTick(() => {
                                    that.window.visible = true;
                                });
                            }
                        },
                        icon: new AMap.Icon({
                            image: icon,
                            size: new AMap.Size(52, 52),
                            imageSize: new AMap.Size(30, 40)
                        })
                    });
                    windows.push({
                        position: item.position,
                        isCustom: true,
                        offset: [115, 55], // 窗体偏移
                        showShadow: false,
                        visible: false, // 初始是否显示
                        address: item.address
                    });
                });
                //  加点
                this.markers = [...markers];
                // 加弹窗
                this.windows = [...windows];
            }
        },
        mounted() {
            // this.timeClear = setInterval(this.check, 3000);
        },
        created() {
            this.$axios.get('/api/index/list_jtService').then(res => {
                res.data.data.forEach(i => {
                    if (i < 3) {
                        this.markersData.push({
                            position: i.longitude + ',' + i.latitude,
                            address: i.serviceName,
                            money: i.shouyi
                        })
                    }
                });
                this.point();
            })
        }
    };
</script>

<style lang="less" scoped>
    .amap-demo {
        height: 99.7%;
        width: 100%;
    }

    .amap-page-container {
        width: 100%;
        height: 100%;
        position: relative;

        .enlarge {
            position: absolute;
            right: 0;
            bottom: 2px;
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, 0);
            border: 1px solid white;
            z-index: 99;
            font-size: 30px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
            color: white;
        }

        .Real-timeInformation {
            width: 100%;
            height: 30px;
            line-height: 30px;
            background: rgba(34, 188, 255, 0.2);
            border: 1px solid #0681d5;
            position: absolute;
            z-index: 99;
            overflow: hidden;
            border-radius: 10em;
            margin-top: 0.5em;
            box-sizing: border-box;

            #con {
                width: 100%;
                height: 100%;
                color: red;
                transition: linear 0.3s;
            }

            #con > p {
                text-indent: 10px;
            }
        }
    }

    #info-window {
        width: 211px;
        height: 146px;
        margin-left: 30px;
        background: rgba(255, 255, 255, 0.6);

        position: relative;
        overflow: hidden;

        .detail {
            width: 100%;
            height: 24px;
            color: #fff;
            background-color: #1a73e8;
            position: absolute;
            bottom: 0;
            font-size: 12px;
            line-height: 24px;
            text-align: center;

            cursor: pointer;
        }
    }
</style>
