<template>
  <div style="width: 100%;height: 100%">
    <div class="star" v-if="showStar">
      <p>
        <span :style="{ color: color }">硬件环境：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
      <p>
        <span :style="{ color: color }">车流量：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
      <p>
        <span :style="{ color: color }">商户评级：</span>
        <el-rate :max="3" :value="3" disabled></el-rate>
      </p>
    </div>
    <div class="radar" v-if="color !== 'black'">
      <div style="position:absolute;left: -20px;font-size: 18px;">指数：</div>
      <div id="radar"></div>
    </div>
    <show-e-charts ref="showECharts"></show-e-charts>
  </div>
</template>

<script>
	import ShowECharts from "../common/showECharts";

	export default {
		name: "startAndRadar",
		components: {ShowECharts},
		props: {
			color: {
				type: String,
				default: "white"
			},
			showStar: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				option: {
					tooltip: {},
					radar: {
						center: ["55%", "50%"],
						radius: 50,
						indicator: [
							{name: "订单数量", max: 1000},
							{name: "客单价", max: 500},
							{name: "均车消费", max: 500},
							{name: "转化率", max: 100},
							{name: "坪效", max: 600}
						]
					},
					series: [
						{
							name: '指数',
							type: "radar",
							data: [
								{
									value: [500, 90, 200, 80, 85, 90]
								}
							]
						}
					]
				}
			};
		},
		methods: {
			initCharts() {
				let charts = this.$echarts.init(document.getElementById("radar"));
				charts.setOption(this.option);
			}
		},
		mounted() {
			let option = {
				tooltip: {
					trigger: 'axis',
					formatter: v => {
						let text = '';
						let time = '';
						v.forEach(i => {
							time = i.name;
							if (i.seriesName == '均车消费' || i.seriesName == '客单价') {
								text += i.seriesName + '：' + i.value + '元<br>'
							}
							if (i.seriesName == '转化率') {
								text += i.seriesName + '：' + i.value + '%<br>'
							}
						});
						return time + '<br>' + text;
					}
				},
				legend: {
					data: ['客单价', '均车消费', '转化率'],
					bottom: 20,
					textStyle: {color: 'white'}
				},
				grid: {
					left: 80,
					top: 100,
					right: 70,
					bottom: 70
				},
				xAxis: [
					{
						type: 'category',
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						axisPointer: {
							type: 'shadow'
						},
						axisLabel: {
							textStyle: {
								color: '#FFF'
							}
						},
						axisLine: {
							lineStyle: {
								color: "#FFF",
							},
						},
					}
				],
				yAxis: [
					{
						type: 'value',
						name: '元',
						min: 0,
						max: 250,
						interval: 50,
						axisLabel: {
							formatter: '{value}',
							textStyle: {
								color: '#FFF'
							}
						},
						axisLine: {
							lineStyle: {
								color: "#FFF",
							},
						},
					},
					{
						type: 'value',
						name: '转化率',
						min: 0,
						max: 25,
						interval: 5,
						axisLabel: {
							formatter: '{value} %',
							textStyle: {
								color: '#FFF'
							}
						},
						axisLine: {
							lineStyle: {
								color: "#FFF",
							},
						},
					}
				],
				series: [
					{
						name: '客单价',
						type: 'bar',
						data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
					},
					{
						name: '均车消费',
						type: 'bar',
						data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
						itemStyle: {color: '#596aec'},
					},
					{
						name: '转化率',
						type: 'line',
						yAxisIndex: 1,
						data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
						itemStyle: {color: '#43cef7'},
					}
				]
			};
			document.getElementById("radar").onclick = v => {
				this.$refs['showECharts'].openDialog(option, 'not');
			};
			this.initCharts();
		}
	};
</script>

<style scoped lang="less">
  .star {
    position: absolute;
    font-size: 14px;
    left: 15px;
    top: 35px;
    width: 250px;

    p {
      width: 200px;
      height: 100%;
      overflow: hidden;
    }

    span {
      width: 70px;
      color: white;
      float: left;
      text-align: right;
      line-height: 20px;
    }

    /deep/ .el-rate {
      float: left;
      width: 48px;
    }

    /deep/ .el-rate > .el-rate__item > .el-rate__icon {
      font-size: 16px;
      margin-right: 0;
      line-height: 20px;
    }
  }

  .radar {
    position: absolute;
    right: 0;
    top: 0;
    width: 200px;
    height: 200px;

    #radar {
      width: 200px;
      height: 200px;
    }
  }
</style>
