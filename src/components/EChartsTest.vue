<template>
  <div class="big">
    <div class="myCharts" v-for="(it,ix) in chartsBox" :id="'test'+ix" :key="ix"></div>
  </div>
</template>

<script>
	export default {
		name: "EChartsTest",
		data() {
			return {
				chartsBox: [
					{
						backgroundColor: this.$echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
							offset: 0,
							color: '#431ab8'
						}, {
							offset: 1,
							color: '#471bba'
						}]),
						title: {
							text: (0.3 * 100).toFixed(0) + '{a|%}',
							textStyle: {
								fontSize: 50,
								fontFamily: 'Microsoft Yahei',
								fontWeight: 'normal',
								color: '#bcb8fb',
								rich: {
									a: {
										fontSize: 28,
									}
								}
							},
							x: 'center',
							y: '35%'
						},
						graphic: [{
							type: 'group',
							left: 'center',
							top: '60%',
							children: [{
								type: 'text',
								z: 100,
								left: '10',
								top: 'middle',
								style: {
									fill: '#aab2fa',
									text: '流量统计',
									font: '20px Microsoft YaHei'
								}
							}]
						}],
						series: [{
							type: 'liquidFill',
							radius: '80%',
							center: ['50%', '50%'],
							//  shape: 'roundRect',
							data: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3],
							backgroundStyle: {
								color: {
									type: 'linear',
									x: 1,
									y: 0,
									x2: 0.5,
									y2: 1,
									colorStops: [{
										offset: 1,
										color: 'rgba(68, 145, 253, 0)'
									}, {
										offset: 0.5,
										color: 'rgba(68, 145, 253, .25)'
									}, {
										offset: 0,
										color: 'rgba(68, 145, 253, 1)'
									}],
									globalCoord: false
								},
							},
							outline: {
								borderDistance: 0,
								itemStyle: {
									borderWidth: 20,
									borderColor: {
										type: 'linear',
										x: 0,
										y: 0,
										x2: 0,
										y2: 1,
										colorStops: [{
											offset: 0,
											color: 'rgba(69, 73, 240, 0)'
										}, {
											offset: 0.5,
											color: 'rgba(69, 73, 240, .25)'
										}, {
											offset: 1,
											color: 'rgba(69, 73, 240, 1)'
										}],
										globalCoord: false
									},
									shadowBlur: 10,
									shadowColor: '#000',
								}
							},
							itemStyle: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 1,
										color: 'rgba(58, 71, 212, 0)'
									}, {
										offset: 0.5,
										color: 'rgba(31, 222, 225, .2)'
									}, {
										offset: 0,
										color: 'rgba(31, 222, 225, 1)'
									}],
									globalCoord: false
								},
							},
							label: {
								normal: {
									formatter: '',
								}
							}
						},]
					},
				]
			}
		},
		methods: {
			initCharts(v) {
				v.forEach((it, ix) => {
					let id = "test" + ix;
					this.$echarts.init(document.getElementById(id)).setOption(it);
				})
			},
		},
		mounted() {
			this.initCharts(this.chartsBox);
		}
	}
</script>

<style scoped lang="less">
  .big {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;

    .myCharts {
      width: 32%;
      height: 400px;
      background: #461bb9;
    }
  }
</style>