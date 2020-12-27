<template>
  <div class="mapBox" @mouseover="showCheckBoxBar" @mouseout="hiddenCheckBoxBar">
    <div class="btn" id="btn_map">
      <el-radio-group v-model="serviceChecked" @change="serviceCheck(serviceChecked)">
        <el-radio label="服务区"></el-radio>
        <el-radio label="油站"></el-radio>
        <el-radio label="超市"></el-radio>
        <el-radio label="卡口"></el-radio>
        <el-radio label="收银"></el-radio>
      </el-radio-group>
      <!--  <div style="width: 100%;height: 1px;background: #e0e0e0;margin: 5px 0"></div>
        <el-checkbox-group v-model="gasChecked" @change="gasCheck(gasChecked)">
          <el-checkbox label="中石化"></el-checkbox>
          <el-checkbox label="中石油"></el-checkbox>
          <el-checkbox label="交投能源"></el-checkbox>
        </el-checkbox-group>-->
      <!--<div class="btnIcon" @click="showCheckBox">
        <i class="el-icon-d-arrow-right"
           :style="{transform:clickIndex%2===0?'rotate(180deg)':'rotate(0deg)'}"></i>
      </div>-->
    </div>
    <div id="MAP"></div>
    <div class="el-icon-full-screen enlarge" @click="enlargeMap"></div>
    <div class="details" id="ds"></div>
    <!-- <animation v-for="(item,index) of rotateList" class="animation" :key="index" :style="item.style">
      <template>
        <div class="img">
          <div
            class="img1"
            style="background-size: 100% 100%;"
            :style="{ 'background-image': 'url(' + item.png1 + ')' }"
          ></div>
          <div
            class="img2"
            style="background-size: 100% 100%;"
            :style="{ 'background-image': 'url(' + item.png2 + ')' }"
          ></div>
        </div>
      </template>
    </animation> -->
    <el-dialog title="蔡甸服务区" align="center" width="900px" :modal-append-to-body="false" :visible.sync="visible">
      <img-floor-plan location="homeKanBan"></img-floor-plan>
    </el-dialog>
  </div>
</template>

<script>
	import animation from "./animation";
	import ServiceFloorPlan from "../../serviceArea/children/serviceFloorPlan";
	import ImgFloorPlan from "../../../components/common/imgFloorPlan";

	export default {
		name: "centerMapBase",
		components: {ImgFloorPlan, ServiceFloorPlan, animation},
		props: {
			backdrop: {
				type: Number,
				default: 0,
			},
		},
		data() {
			return {
				clickIndex: 0,
				serviceChecked: '服务区',
				gasChecked: ['中石化', '中石油', '交投能源',],
				visible: false,
				serviceSelect: 0,
				gasSelect: 0,
				//旋转的
				rotateList: [
					{
						png1: require('../../../assets/animation/5.png'),
						png2: require('../../../assets/animation/66.png'),
						style: {left: '0', top: '6%'}
					},
					{
						png1: require('../../../assets/animation/4_03.png'),
						png2: require('../../../assets/animation/4_02.png'),
						style: {right: '0', top: '6%'}
					},
					{
						png1: require('../../../assets/animation/3_2.png'),
						png2: require('../../../assets/animation/3_1.png'),
						style: {bottom: '0', left: '0'}
					},
					{
						png1: require('../../../assets/animation/2_1.png'),
						png2: require('../../../assets/animation/2_2.png'),
						style: {bottom: '0', right: '0'}
					},
				],
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
				//卡口
				bayonet: [],
				map: "",
				marker: [],
				mapStyleArr: [
					"fresh",
					// '8cb6df918ee512eae9c9198c38a40c91',
					"darkblue",
					"blue",
				],
				i: 0,
				timeId: "",
				checked: ["交投服务区", "其他服务区", "中石化", "中石油", "交投能源"],
				mapData: [],
				selectData: ["交投服务区", "其他服务区", "中石化", "中石油", "交投能源"],
				click: true,
				dblclick: true,
				timeID: ''
			};
		},
		methods: {
			hiddenCheckBoxBar() {
				let btn_map = document.getElementById('btn_map');
				btn_map.style.right = '-120px';
			},
			showCheckBoxBar() {
				let btn_map = document.getElementById('btn_map');
				btn_map.style.right = '0px';
			},
			serviceCheck(sv) {
				this.refresh(this.backdrop, sv, this.gasChecked);
			},
			gasCheck(gv) {
				this.refresh(this.backdrop, this.serviceChecked, gv);
			},
			showCheckBox() {
				let btn_map = document.getElementById('btn_map');
				if (this.clickIndex % 2 === 0) {
					btn_map.style.right = '0px';
				}
				if (this.clickIndex % 2 !== 0) {
					btn_map.style.right = '-120px';
				}
				this.clickIndex++;
			},
			enlargeMap() {
				this.$emit("MapBase", this.mapData);
			},
			initMap(position) {
				this.marker = [];
				let map = new AMap.Map("MAP", {
					center: [114.286298, 30.5855],
					zoom: 8,
				});
				map.setMapStyle("amap://styles/" + this.mapStyleArr[this.backdrop]);
				this.map = map;
				this.addMarker(map, position);
			},
			addMarker(v, position) {
				let that = this;
				position.forEach((item, index) => {
					let icon;
					if (item.type) {
						if (item.type === "ms") icon = require("../../../assets/gas/service-k.png");
						if (item.type === "os") icon = require("../../../assets/gas/service-c.png");
						if (item.type === "中石化") icon = require("../../../assets/gas/zsh.png");
						if (item.type === "中石油") icon = require("../../../assets/gas/zsy.png");
						if (item.type === "交投能源") icon = require("../../../assets/gas/jtny.png");
						if (item.type === "卡口") icon = require("../../../assets/gas/kk.png");
					}
					if (item.longitude && item.latitude && item.longitude != 'NULL' && item.latitude != 'NULL') {
						let marker = new AMap.Marker({
							icon: new AMap.Icon({
								image: icon,
								size: new AMap.Size(30, 30),
								imageSize: new AMap.Size(25, 30),
							}),
							position: [item.longitude, item.latitude],
						});
						this.marker.push(Object.assign(marker, {name: item.gisCompany, oid: item.oid}));
					}
				});
				this.marker.forEach((i, x) => {
					AMap.event.addListener(i, "dblclick", function () {
						clearTimeout(that.timeID);
						let arr = i.oid.split('-');
						if (arr[0] == 'ms') {
							that.visible = true;
						} else {
							infoWindow.open(v, i.getPosition());
						}
					});
					AMap.event.addListener(i, "click", function () {
						that.timeID = setTimeout(_ => {
							let arr = i.oid.split('-');
							let position_ = [arr[1], arr[2]];
							that.refresh(that.backdrop, '', '', position_, 'enlarge');
						}, 200)
					});
					let content = [];
					content.push("<div style='width: 200px;text-align: center'>" + i.name + "</div>");
					content.push("<div style='width: 200px;text-align: center;height: 70px'>内容</div>");
					let infoWindow = new AMap.InfoWindow({
						content: content.join(""),
						offset: new AMap.Pixel(3, -33),
					});
					infoWindow.on("close", function () {
					});
					i.setMap(v);
				});
				/* new AMap.plugin(["AMap.MarkerClusterer"], function () {
new AMap.MarkerClusterer(
  v,
  that.marker,
  {
    gridSize: 50,
    renderClusterMarker: that._renderClusterMarker
  }
)
})*/
			},
			//点聚合
			_renderClusterMarker(context) {
				let that = this;
				let count = this.marker.length;
				let factor;
				let Hue;
				factor = Math.pow(context.count / count, 1 / 18);
				Hue = 180 - factor * 180;
				let bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
				let borderColor = "hsla(" + Hue + ",100%,40%,1)";
				if (this.selectData.indexOf("交投服务区") !== -1 && this.selectData.length === 1) {
					factor = Math.pow(context.count / count, 1 / 18);
					Hue = 180 - factor * 230;
					bgColor = "hsla(" + Hue + ",100%,50%,0.7)";
					borderColor = "hsla(" + Hue + ",100%,40%,1)";
				}
				if (this.selectData.indexOf("其他服务区") !== -1 && this.selectData.length === 1) {
					factor = Math.pow(context.count / count, 1 / 18);
					Hue = 180 - factor * 80;
					bgColor = "hsla(" + Hue + ",0%,50%,0.7)";
					borderColor = "hsla(" + Hue + ",0%,40%,1)";
				}
				let div = document.createElement("div");
				let fontColor = "rgba(255,255,255,1)";
				let shadowColor = "hsla(" + Hue + ",100%,50%,1)";
				div.style.backgroundColor = bgColor;
				let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
				div.style.width = div.style.height = size + "px";
				div.style.border = "solid 1px " + borderColor;
				div.style.borderRadius = size / 2 + "px";
				div.style.boxShadow = "0 0 1px " + shadowColor;
				div.innerHTML = context.count;
				div.style.lineHeight = size + "px";
				div.style.color = fontColor;
				div.style.fontSize = "14px";
				div.style.textAlign = "center";
				div.onmousemove = function () {
					let arr = [];
					if (context.markers.length > 0) {
						context.markers.forEach((i) => {
							arr.push(that.position[that.marker.indexOf(i)]);
						});
					}
					let ms = [];
					let os = [];
					let sh = [];
					let sy = [];
					let jt = [];
					if (arr.length > 0) {
						arr.forEach((i) => {
							if (i.type === "ms") {
								ms.push(i);
							}
							if (i.type === "os") {
								os.push(i);
							}
							if (i.type === "中石化") {
								sh.push(i);
							}
							if (i.type === "中石油") {
								sy.push(i);
							}
							if (i.type === "交投能源") {
								jt.push(i);
							}
						});
					}
					let ds = document.getElementById("ds");
					ds.innerHTML =
						"<p>交投服务区：" +
						ms.length +
						"</p>" +
						"<p>其他服务区：" +
						os.length +
						"</p>" +
						"<p>中石化：" +
						sh.length +
						"</p>" +
						"<p>中石油：" +
						sy.length +
						"</p>" +
						"<p>交投能源：" +
						jt.length +
						"</p>";
					ds.style.right = "0px";
				};
				div.onmouseout = function () {
					let ds = document.getElementById("ds");
					ds.style.right = "-200px";
				};
				context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
				context.marker.setContent(div);
			},
			refresh(d, sv, gv, center, b) {
				if (!gv) {
					gv = this.gasChecked
				}
				if (!sv) {
					sv = this.serviceChecked
				}
				this.map.remove(this.marker);
				this.marker = [];
				let position = [];
				if (sv.indexOf("服务区") != -1) position.push(...this.myService, ...this.otherService);
				// if (sv.indexOf("其他服务区") != -1) position.push(...this.otherService);
				if (sv.indexOf("卡口") != -1) position.push(...this.bayonet);
				if (sv.indexOf("超市") != -1) position.push(...[]);
				if (sv.indexOf("收银") != -1) position.push(...[]);
				if (sv.indexOf("油站") != -1) position.push(...this.petrochemical, ...this.oil, ...this.energy);
				// if (gv.indexOf("中石油") != -1) position.push(...this.oil);
				// if (gv.indexOf("交投能源") != -1) position.push(...this.energy);
				let map;
				if (b === 'enlarge') {
					map = new AMap.Map("MAP", {
						center: center,
						zoom: 20,
					});
				}
				if (b !== 'enlarge') {
					map = new AMap.Map("MAP", {
						center: [114.286298, 30.5855],
						zoom: 8,
					});
				}
				map.setMapStyle("amap://styles/" + this.mapStyleArr[d]);
				this.map = map;
				this.addMarker(map, position);
			},
		},
		async mounted() {
			let position = [];
			let [service, allGas, bayonet_] = await Promise.all([
				this.$axios.get("/api/index/list_jtService", {params: {fwqType: '服务区'}}),
				this.$axios.get("/api/index/list_jtService", {params: {jyzType: this.gasChecked.join(',')}}),
				this.$axios.get("/api/index/list_jtService", {params: {kakou: '卡口'}}),
			])
			let data = service.data.data;
			let res = allGas.data.data;
			let bayonet = bayonet_.data.data;
			this.mapData.push(...data, ...res, ...bayonet);
			data.forEach((i, x) => {
				if (i.longitude && i.latitude && i.longitude != 'NULL' && i.latitude != 'NULL') {
					if (i.gisCompany === "湖北交投实业发展有限公司") {
						this.myService.push(Object.assign(i, {
							type: 'ms',
							oid: 'ms' + '-' + i.longitude + '-' + i.latitude
						}));
					}
					if (i.gisCompany !== "湖北交投实业发展有限公司") {
						this.otherService.push(Object.assign(i, {
							type: 'os',
							oid: 'os' + '-' + i.longitude + '-' + i.latitude
						}));
					}
				}
			});
			res.forEach((i, x) => {
				if (i.longitude && i.latitude && i.longitude != 'NULL' && i.latitude != 'NULL') {
					if (i.gisCompany === '中石化') {
						this.petrochemical.push(Object.assign(i, {
							type: '中石化',
							oid: '中石化' + '-' + i.longitude + '-' + i.latitude
						}));
					}
					if (i.gisCompany === '中石油') {
						this.oil.push(Object.assign(i, {
							type: '中石油',
							oid: '中石油' + '-' + i.longitude + '-' + i.latitude
						}));
					}
					if (i.gisCompany === '交投能源') {
						this.energy.push(Object.assign(i, {
							type: '交投能源',
							oid: '交投能源' + '-' + i.longitude + '-' + i.latitude
						}));
					}
				}
			});
			bayonet.forEach((i, x) => {
				if (i.longitude && i.latitude && i.longitude != 'NULL' && i.latitude != 'NULL') {
					this.bayonet.push(Object.assign(i, {
						type: '卡口',
						gisType: '卡口',
						oid: '卡口' + '-' + i.longitude + '-' + i.latitude
					}));
				}
			});
			position.push(...this.myService, ...this.otherService);
			this.position.push(...this.myService, ...this.otherService, ...this.petrochemical, ...this.oil, ...this.energy, ...this.bayonet);
			this.initMap(position);
		}
	};
</script>

<style scoped lang="less">
  .mapBox {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .details {
      color: white;
      width: 160px;
      height: 110px;
      position: absolute;
      top: 30px;
      right: -200px;
      transition: linear 0.3s;
      padding: 20px;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.4);
    }

    .btn {
      width: 70px;
      padding: 10px;
      height: 100px;
      position: absolute;
      top: 0;
      right: -120px;
      background: rgba(0, 0, 0, 0.7);
      z-index: 99;
      color: white;
      margin: auto;
      transition: linear .4s;

      .btnIcon {
        top: 0;
        width: 30px;
        position: absolute;
        left: -30px;
        height: 30px;
        background: rgba(0, 0, 0, 0.7);
        text-align: center;
        cursor: pointer;

        i {
          font-weight: 700;
          line-height: 30px;
          font-size: 20px;
          transition: linear .4s;
        }
      }

      /deep/ .el-radio-group {
        .el-radio {
          margin-right: 0;
          line-height: 20px;

          .el-radio__label {
            color: white;
          }
        }

        .is-checked {
          .el-radio__label {
            color: #409EFF;
          }
        }
      }
    }

    /* .btn /deep/ .el-checkbox {
       color: white;
       margin-right: 0;
     }

     .btn /deep/ .el-select {
       width: 90px;
     }

     .btn /deep/ .el-select > .el-select__tags {
       overflow: hidden;
       height: 30px;
     }

     .btn /deep/ .el-select > .el-input {
       min-width: 90px;
     }

     .btn /deep/ .el-select > .el-input > .el-input__inner {
       line-height: 30px;
       height: 30px;
       border: none;
       border-radius: 0;
       background: none;
       min-width: 90px;
       padding: 0 2px;
       color: white;
     }

     .btn /deep/ .el-select > .el-input > .el-input__inner::-webkit-input-placeholder {
       color: #cccccc;
     }

     .btn /deep/ .el-select > .el-input > .el-input__suffix {
       !*width: 20px;*!
     }

     .btn /deep/ .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-input__icon {
       line-height: 30px;
       color: white;
     }*/

    #MAP {
      width: 100%;
      height: 100%;
    }

    .enlarge {
      position: absolute;
      z-index: 300;
      right: 0;
      bottom: 0;
      width: 30px;
      height: 30px;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid white;
      // z-index: 99;
      font-size: 30px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      color: white;
    }
  }

  .mapBox /deep/ .el-dialog__wrapper > .el-dialog {
    background: #0c2348;
    color: white;
  }

  .mapBox /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title {
    color: white;
  }

  .mapBox /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header {
    padding: 10px 20px;
  }

  .mapBox /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__body {
    padding: 0;
    color: white;
  }

  .animation {
    position: absolute;
    // top: 5%;
    // right: 1%;
    z-index: 200;
  }
</style>
