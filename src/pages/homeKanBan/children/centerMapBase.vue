<template>
    <div class="mapBox">
        <div class="btn">
            <el-checkbox-group v-model="checked" @change="queryDot">
                <el-checkbox label="交投服务区"></el-checkbox>
                <el-checkbox label="其他服务区"></el-checkbox>
                <el-checkbox label="中石化"></el-checkbox>
                <el-checkbox label="中石油"></el-checkbox>
                <el-checkbox label="交投能源"></el-checkbox>
            </el-checkbox-group>
        </div>
        <div id="MAP"></div>
        <div class="el-icon-full-screen enlarge" @click="enlargeMap"></div>
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
                position: [],
                //交投能源
                energy: [],
                //中石化
                petrochemical: [],
                //中石油
                oil: [],
                //交投服务区
                myService: [],
                //其他服务区
                otherService: [],
                map: '',
                marker: [],
                mapStyleArr: [
                    // 'fresh',
                    '8cb6df918ee512eae9c9198c38a40c91',
                    'darkblue',
                    'blue',
                ],
                i: 0,
                timeId: '',
                checked: ['交投服务区', '其他服务区', '中石化', '中石油', '交投能源'],
                mapData: [],
                selectData: ['交投服务区', '其他服务区', '中石化', '中石油', '交投能源'],
            }
        },
        methods: {
            enlargeMap() {
                this.$emit("MapBase", this.mapData);
            },
            initMap(position) {
                this.marker = [];
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8,
                });
                map.setMapStyle("amap://styles/" + this.mapStyleArr[this.backdrop])
                this.map = map;
                this.addMarker(map, position)
            },
            addMarker(v, position) {
                let that = this;
                position.forEach((item, index) => {
                    let icon;
                    if (item.type) {
                        if (item.type === 'ms') icon = require('../../../assets/myService.png');
                        if (item.type === 'os') icon = require('../../../assets/otherService.png');
                        if (item.type === '中石化') icon = require('../../../assets/zsh.png');
                        if (item.type === '中石油') icon = require('../../../assets/zsy.png');
                        if (item.type === '交投能源') icon = require('../../../assets/jtny.png');
                    }
                    let marker = new AMap.Marker({
                        icon: new AMap.Icon({
                            image: icon,
                            size: new AMap.Size(30, 30),
                            imageSize: new AMap.Size(25, 30)
                        }),
                        position: [item.longitude, item.latitude],
                    });
                    this.marker.push(Object.assign(marker, {name: item.name}));
                });
                this.marker.forEach((i, x) => {
                    AMap.event.addListener(i, 'click', function () {
                        infoWindow.open(v, i.getPosition());
                    });
                    let content = [];
                    content.push("<div style='width: 200px;text-align: center'>" + i.name + "</div>");
                    content.push("<div style='width: 200px;text-align: center;height: 70px'>内容</div>");
                    let infoWindow = new AMap.InfoWindow({
                        content: content.join(""),
                        offset: new AMap.Pixel(3, -33)
                    });
                    infoWindow.on('close', function () {
                    })
                    i.setMap(v);
                });
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
            },
            //点聚合
            _renderClusterMarker(context) {
                let count = this.marker.length;
                let factor;
                let Hue;
                factor = Math.pow(context.count / count, 1 / 18);
                Hue = 180 - factor * 180;
                let bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
                let borderColor = 'hsla(' + Hue + ',100%,40%,1)';
                if (this.selectData.indexOf('交投服务区') !== -1 && this.selectData.length === 1) {
                    factor = Math.pow(context.count / count, 1 / 18);
                    Hue = 180 - factor * 230;
                    bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
                    borderColor = 'hsla(' + Hue + ',100%,40%,1)';
                }
                if (this.selectData.indexOf('其他服务区') !== -1 && this.selectData.length === 1) {
                    factor = Math.pow(context.count / count, 1 / 18);
                    Hue = 180 - factor * 80;
                    bgColor = 'hsla(' + Hue + ',0%,50%,0.7)';
                    borderColor = 'hsla(' + Hue + ',0%,40%,1)';
                }
                let div = document.createElement('div');
                let fontColor = 'rgba(255,255,255,1)';
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
                this.selectData = v;
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8,
                    mapStyle: this.mapStyleArr[this.backdrop]
                });
                map.remove(this.marker);
                this.type = v;
                this.marker = [];
                let position = [];
                if (v.indexOf('交投服务区') != -1) position.push(...this.myService)
                if (v.indexOf('其他服务区') != -1) position.push(...this.otherService)
                if (v.indexOf('中石化') != -1) position.push(...this.petrochemical)
                if (v.indexOf('中石油') != -1) position.push(...this.oil)
                if (v.indexOf('交投能源') != -1) position.push(...this.energy)
                this.initMap(position)
            },
            refresh(d) {
                this.map.remove(this.marker);
                this.marker = [];
                let position = [];
                if (this.checked.indexOf('交投服务区') != -1) position.push(...this.myService)
                if (this.checked.indexOf('其他服务区') != -1) position.push(...this.otherService)
                if (this.checked.indexOf('中石化') != -1) position.push(...this.petrochemical)
                if (this.checked.indexOf('中石油') != -1) position.push(...this.oil)
                if (this.checked.indexOf('交投能源') != -1) position.push(...this.energy)
                let map = new AMap.Map('MAP', {
                    center: [114.286298, 30.5855],
                    zoom: 8,
                });
                map.setMapStyle("amap://styles/" + this.mapStyleArr[d])
                this.map = map;
                this.addMarker(map, position)
            }
        },
        mounted() {
            let position = [];
            //交投能源
            let energy = [];
            //中石化
            let petrochemical = [];
            //中石油
            let oil = [];
            //交投服务区
            let myService = [];
            //其他服务区
            let otherService = [];
            this.$axios.get('/api/index/list_jtService').then(res => {
                let data = res.data.data;
                this.mapData = JSON.parse(JSON.stringify(res.data.data));
                data.forEach(i => {
                    if (i.fwqDanwei == "湖北交投实业发展有限公司") {
                        if (i.fwqJ && i.fwqW) {
                            myService.push({
                                longitude: i.fwqJ,
                                latitude: i.fwqW,
                                name: i.gisName,
                                type: 'ms'
                            });
                        }
                    }
                    if (i.fwqDanwei != "湖北交投实业发展有限公司") {
                        if (i.fwqJ && i.fwqW) {
                            otherService.push({
                                longitude: i.fwqJ,
                                latitude: i.fwqW,
                                name: i.gisName,
                                type: 'os'
                            });
                        }
                    }
                    if (i.jyzDanwei && i.jyzDanwei.charAt(2) == '化') {
                        if (i.jyzJ && i.jyzW) {
                            petrochemical.push({
                                longitude: i.jyzJ,
                                latitude: i.jyzW,
                                name: i.jyzDanwei,
                                type: '中石化'
                            })
                        }

                    }
                    if (i.jyzDanwei && i.jyzDanwei.charAt(2) == '油') {
                        if (i.jyzJ && i.jyzW) {
                            oil.push({
                                longitude: i.jyzJ,
                                latitude: i.jyzW,
                                name: i.jyzDanwei,
                                type: '中石油'
                            })
                        }
                    }
                    if (i.jyzDanwei && i.jyzDanwei == '交投能源') {
                        if (i.jyzJ && i.jyzW) {
                            energy.push({
                                longitude: i.jyzJ,
                                latitude: i.jyzW,
                                name: i.jyzDanwei,
                                type: '交投能源'
                            })
                        }
                    }
                });
                this.myService = myService;
                this.otherService = otherService;
                this.petrochemical = petrochemical;
                this.oil = oil;
                this.energy = energy;
                this.position = position = [...myService, ...otherService, ...petrochemical, ...oil, ...energy];
                this.initMap(myService, 'myService');
            })
        },
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

        .enlarge {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, .5);
            border: 1px solid white;
            z-index: 99;
            font-size: 30px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
            color: white;
        }
    }
</style>