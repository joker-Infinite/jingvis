<template>
  <div style="width: 100%;height: 100%">
    <div class="star">
      <span :style="{color:color}">硬件环境：</span>
      <el-rate :max="3" :value="3" disabled></el-rate>
      <span :style="{color:color}">车流量：</span>
      <el-rate :max="3" :value="3" disabled></el-rate>
      <span :style="{color:color}">商户评级：</span>
      <el-rate :max="3" :value="3" disabled></el-rate>
    </div>
    <div class="radar">
      <div id="radar"></div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "startAndRadar",
		props: {
			color: {
				type: String,
				default: 'white'
			}
		},
		data() {
			return {
				option: {
					radar: {
						center: ['55%', '50%'],
						radius: 50,
						indicator: [
							{name: '订单数量'},
							{name: '客单价'},
							{name: '均车消费'},
							{name: '转化率'},
							{name: '坪效'},
						]
					},
					series: [{
						type: 'radar',
						data: [
							{
								value: [1, 0.5, 0.7, 0.4, 0.8, 0.9],
							}
						]
					}]
				}
			}
		},
		methods: {
			initCharts() {
				let charts = this.$echarts.init(document.getElementById('radar'));
				charts.setOption(this.option);
			}
		},
		mounted() {
			this.initCharts();
		}
	}
</script>

<style scoped lang="less">
  .star {
    position: absolute;
    font-size: 14px;
    left: 15px;
    top: 35px;
    width: 150px;
    height: 60px;

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