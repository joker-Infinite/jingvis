<template>
    <div class="mapBox">
        <div class="btn">
            <el-button @click="queryDot('service')">服务区</el-button>
            <el-button @click="queryDot('gas')">加油站</el-button>
            <el-button @click="changeT(0)">主题一</el-button>
            <el-button @click="changeT(1)">主题二</el-button>
            <el-button @click="changeT(2)">主题三</el-button>
        </div>
        <div id="MAP"></div>
    </div>
</template>

<script>
    export default {
        name: "centerMapBase",
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
                type: ''
            }
        },
        methods: {
            changeT(v) {
                this.i = v;
                this.marker = [];
                if (!this.type) {
                    this.initMap(this.position)
                }
                if (this.type == 'service') {
                    this.initMap(this.serviceData)
                }
                if (this.type == 'gas') {
                    this.initMap(this.gasData)
                }
            },
            initMap(position) {
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8,
                    mapStyle: this.mapStyleArr[this.i]
                });
                this.map = map;
                this.addMarker(map, position)
            },
            async addMarker(v, position) {
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
                this.marker.forEach(i => {
                    AMap.event.addListener(i, 'click', function () {
                        infoWindow.open(v, i.getPosition());
                    });
                    let content = [];
                    content.push("<div style='width: 200px;text-align: center'>详细信息</div>");
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
                await new Promise(resolve => {
                    setInterval(_ => {
                        resolve();
                    }, 500)
                })
                setTimeout(_ => {
                    new AMap.MarkerClusterer(v, this.marker, {
                        gridSize: 80,
                        renderClusterMarker: this._renderClusterMarker
                    });
                }, 100)
            },
            closeInfoWindow() {
                this.map.clearInfoWindow();
            },
            //点聚合
            _renderClusterMarker(context) {
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
                this.type = v;
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8,
                    mapStyle: this.mapStyleArr[this.i]
                });
                map.remove(this.marker);
                this.marker = [];
                if (v == 'service') {
                    this.addMarker(map, this.serviceData)
                }
                if (v == 'gas') {
                    this.addMarker(map, this.gasData)
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
        }
    }
</script>

<style scoped lang="less">
    .mapBox {
        width: 100%;
        height: 100%;
        position: relative;

        .btn {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50px;
            background-color: rgba(137, 134, 139, 0.62);
            z-index: 9999;
        }

        #MAP {
            width: 100%;
            height: 100%;
        }
    }
</style>