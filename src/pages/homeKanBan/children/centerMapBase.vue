<template>
    <div class="mapBox">
        <div class="btn">
            <el-checkbox-group v-model="checked" @change="queryDot">
                <el-checkbox label="服务区"></el-checkbox>
                <el-checkbox label="卡口"></el-checkbox>
                <el-checkbox label="收银"></el-checkbox>
                <el-checkbox label="其他服务区"></el-checkbox>
                <el-checkbox label="加油站"></el-checkbox>
                <el-checkbox label="加油站-石化"></el-checkbox>
                <el-checkbox label="加油站-交投"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div id="MAP"></div>
    </div>
</template>

<script>
    export default {
        name: "centerMapBase",
        props: {
            backdrop: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                map: '',
                marker: [],
                gas: [],
                service: [],
                gasData: [],
                serviceData: [],
                mapStyleArr: [
                    'amap://styles/8cb6df918ee512eae9c9198c38a40c91',
                    'amap://styles/1111cca74c703c3218b102779351f6eb',
                    'amap://styles/f1f4181c84a35130099dfd661f061466',
                ],
                i: 0,
                position: [],
                type: '',
                timeId: '',
                checked: ['服务区', '加油站']
            }
        },
        methods: {
            initMap(position) {
                console.log(this.backdrop)
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8,
                    mapStyle: this.mapStyleArr[this.backdrop]
                });
                this.map = map;
                this.addMarker(map, position)
            },
            addMarker(v, position) {
                let that = this;
                position.forEach((item, index) => {
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
                    if (index > 2 && !item.gas) {
                        icon = 'https://iknow-pic.cdn.bcebos.com/43a7d933c895d1438b0a645d63f082025aaf074b'
                    }
                    if (item.gas && item.gas == 'gas') {
                        icon = require('../../../assets/gas.png')
                    }
                    let marker = new AMap.Marker({
                        icon: new AMap.Icon({
                            image: icon,
                            size: new AMap.Size(30, 30),
                            imageSize: new AMap.Size(25, 30)
                        }),
                        position: [item.longitude, item.latitude],
                    });
                    if (item.gas && item.gas == 'gas') {
                        this.gas.push(marker);
                    } else {
                        this.service.push(marker);
                    }
                    this.marker.push(marker);
                });
                this.marker.forEach((i, x) => {
                    AMap.event.addListener(i, 'click', function () {
                        infoWindow.open(v, i.getPosition());
                    });
                    let content = [];
                    content.push("<div style='width: 200px;text-align: center'>" + position[x].name + "</div>");
                    content.push("<div style='width: 200px;text-align: center;height: 70px'>内容</div>");
                    let infoWindow = new AMap.InfoWindow({
                        content: content.join(""),
                        offset: new AMap.Pixel(3, -33)
                    });
                    infoWindow.on('close', function () {
                        // console.log('close')
                    })
                    i.setMap(v);
                });
                this.timeId = setInterval(_ => {
                    new AMap.plugin(["AMap.MarkerClusterer"], function () {
                        new AMap.MarkerClusterer(
                            v,
                            that.marker,
                            {
                                gridSize: 50,
                                renderClusterMarker: that._renderClusterMarker
                            }
                        )
                    })
                }, 100)
            },
            //点聚合
            _renderClusterMarker(context) {
                clearInterval(this.timeId);
                let count = this.marker.length;
                let factor = Math.pow(context.count / count, 1 / 18);
                let div = document.createElement('div');
                let Hue = 180 - factor * 180;
                let bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
                let fontColor = 'hsla(' + Hue + ',100%,20%,1)';
                let borderColor = 'hsla(' + Hue + ',100%,40%,1)';
                let shadowColor = 'hsla(' + Hue + ',100%,50%,1)';
                div.style.backgroundColor = bgColor;
                let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
                div.style.width = div.style.height = size + 'px';
                div.style.border = 'solid 1px ' + borderColor;
                div.style.borderRadius = size / 2 + 'px';
                div.style.boxShadow = '0 0 1px ' + shadowColor;
                div.innerHTML = context.count;
                div.style.lineHeight = size + 'px';
                div.style.color = fontColor;
                div.style.fontSize = '14px';
                div.style.textAlign = 'center';
                context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
                context.marker.setContent(div)
            },
            queryDot(v) {
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8,
                    mapStyle: this.mapStyleArr[this.backdrop]
                });
                map.remove(this.marker);
                this.type = v;
                this.marker = [];
                if (v.indexOf('服务区') !== -1 && v.indexOf('加油站') === -1) {
                    this.addMarker(map, this.serviceData)
                }
                if (v.indexOf('加油站') !== -1 && v.indexOf('服务区') === -1) {
                    this.addMarker(map, this.gasData)
                }
                if (v.indexOf('加油站') !== -1 && v.indexOf('服务区') !== -1) {
                    this.addMarker(map, this.position)
                }
            }
        },
        mounted() {
            let position = [];
            this.$axios.get('/api/index/list_jtService').then(res => {
                this.serviceData = JSON.parse(JSON.stringify(res.data.data.servicefrom));
                position = res.data.data.servicefrom;
                res.data.data.stationfrom.forEach(i => {
                    if (i.latitude != 1) {
                        i.gas = 'gas';
                        position.push(i);
                        this.gasData.push(i);
                    }
                });
                this.position = position;
                this.initMap(position);
            })
        },
        watch: {
            backdrop: {
                handler(nv, ov) {
                    if (!this.type) {
                        this.initMap(this.position)
                    }
                    if (this.type == '服务区') {
                        this.initMap(this.serviceData)
                    }
                    if (this.type == '加油站') {
                        this.initMap(this.gasData)
                    }
                },
                deep: true
            }
        }
    }
</script>

<style scoped lang="less">
    .mapBox {
        width: 100%;
        height: 100%;
        position: relative;

        .btn {
            width: 100%;
            height: 30px;
            position: absolute;
            top: 0;
            background: rgba(0, 0, 0, 0.6);
            z-index: 99;
            color: white;
            margin: auto;
        }

        .btn /deep/ .el-checkbox-group {
            padding: 5px 20px;
        }

        .btn /deep/ .el-checkbox-group > .el-checkbox {
            color: white;
        }

        #MAP {
            width: 100%;
            height: 100%;
        }
    }
</style>