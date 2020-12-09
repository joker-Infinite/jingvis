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
                mapStyleArr: [
                    'amap://styles/8cb6df918ee512eae9c9198c38a40c91',
                    'amap://styles/1111cca74c703c3218b102779351f6eb',
                    'amap://styles/f1f4181c84a35130099dfd661f061466',
                ],
                i: 0,
                position: []
            }
        },
        methods: {
            changeT(v) {
                this.i = v;
                this.marker = [];
                this.initMap(this.position);
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
                    let title = '方恒假日酒店<span style="font-size:11px;color:#F00;">价格:318</span>',
                        content = [];
                    content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
                    content.push("电话：010-64733333");
                    content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
                    let infoWindow = new AMap.InfoWindow({
                        isCustom: true,  //使用自定义窗体
                        content: that.createWindow(title, content.join("<br/>")),
                        offset: new AMap.Pixel(16, -45)
                    });
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
            createWindow(title, content) {
                let info = document.createElement("div");
                info.className = "custom-info input-card content-window-card";

                //可以通过下面的方式修改自定义窗体的宽高
                //info.style.width = "400px";
                // 定义顶部标题
                let top = document.createElement("div");
                let titleD = document.createElement("div");
                let closeX = document.createElement("img");
                top.className = "info-top";
                titleD.innerHTML = title;
                closeX.src = "https://webapi.amap.com/images/close2.gif";
                closeX.onclick = this.closeInfoWindow;

                top.appendChild(titleD);
                top.appendChild(closeX);
                info.appendChild(top);

                // 定义中部内容
                let middle = document.createElement("div");
                middle.className = "info-middle";
                middle.style.backgroundColor = 'white';
                middle.innerHTML = content;
                info.appendChild(middle);

                // 定义底部内容
                let bottom = document.createElement("div");
                bottom.className = "info-bottom";
                bottom.style.position = 'relative';
                bottom.style.top = '0px';
                bottom.style.margin = '0 auto';
                let sharp = document.createElement("img");
                sharp.src = "https://webapi.amap.com/images/sharp.png";
                bottom.appendChild(sharp);
                info.appendChild(bottom);
                return info;
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
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8
                });
                this.marker = this[v];
                map.remove(this[v == 'service' ? 'gas' : 'service'])
                this.$nextTick(_ => {
                    new AMap.MarkerClusterer(map, this.marker, {
                        gridSize: 80,
                        renderClusterMarker: this._renderClusterMarker
                    });
                })
            }
        },
        mounted() {
            let position = [];
            this.$axios.get('/api/index/list_jtService').then(res => {
                position = res.data.data.servicefrom;
                res.data.data.stationfrom.forEach(i => {
                    if (i.latitude != 1) {
                        i.gas = 'gas';
                        position.push(i);
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