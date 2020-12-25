<template>
  <div style="width: 100%;height: 100%" class="sBody">
    <el-dialog width="1000px" align="center" :title="form.name" :visible.sync="visible" :modal="false"
               @close="$emit('showPopover',true)">
      <el-form ref="form" :model="form" label-width="125px" class="form" disabled>
        <el-col :span="8" v-for="(it,ix) in formData" :key="ix">
          <el-form-item :label="it.label+'：'">
            <el-input :value="it.value"></el-input>
          </el-form-item>
        </el-col>
        <div class="echarts">
          <div v-for="i in 3" :key="i" :id="'details_'+i"
               style="width: 100%;height:300px;margin-bottom: 10px"></div>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
	export default {
		name: "moreInformation",
		data() {
			return {
				visible: false,
				form: {
					name: ''
				},
				formData: []
			}
		},
		methods: {
			openDialog(v) {
				if (v.name === '大厅') {
					return '';
				}
				this.formData = v.formData;
				this.visible = true;
				this.$nextTick(_ => {
					let form = document.getElementsByClassName('form')[0];
					form.scrollTo(0, 0);
					this.form.name = v.name;
					this.ECharts();
				})
			},
			ECharts() {
				let eId = [];
				for (let i = 1; i < 4; i++) {
					let id = 'details_' + i;
					eId.push(this.$echarts.init(document.getElementById(id)))
				}
				let option = [
					{
						barWidth: 30,
						title: {
							text: '近六个月收益',
							left: 'center'
						},
						tooltip: {
							trigger: 'item',
							formatter: '{b}月:{c}'
						},
						xAxis: {
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6']
						},
						yAxis: {
							type: 'value'
						},
						grid: {
							left: 40,
							right: 20,
							top: 40,
							bottom: 25
						},
						series: [{
							data: [120, 200, 150, 80, 70, 110],
							type: 'bar',
							itemStyle: {
								color: '#379DFB'
							}
						}]
					},
					{
						barWidth: 30,
						title: {
							text: '近六个月订单数',
							left: 'center'
						},
						tooltip: {
							trigger: 'axis',
							formatter: '{b}月:{c}'
						},
						xAxis: {
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6']
						},
						yAxis: {
							type: 'value'
						},
						grid: {
							left: 40,
							right: 20,
							top: 40,
							bottom: 25
						},
						series: [{
							data: [120, 200, 150, 80, 70, 110],
							type: 'line',
							itemStyle: {
								color: '#379DFB'
							}
						}]
					},
					{
						barWidth: 30,
						title: {
							text: '近六个月客单价',
							left: 'center'
						},
						tooltip: {
							trigger: 'axis',
							formatter: '{b}月:{c}'
						},
						xAxis: {
							type: 'category',
							data: ['1', '2', '3', '4', '5', '6']
						},
						yAxis: {
							type: 'value'
						},
						grid: {
							left: 40,
							right: 20,
							top: 40,
							bottom: 25
						},
						series: [{
							data: [120, 200, 150, 80, 70, 110],
							type: 'line',
							itemStyle: {
								color: '#379DFB'
							}
						}]
					}
				];
				eId.forEach((i, x) => {
					i.setOption(option[x]);
				})
			}
		}
	}
</script>

<style scoped lang="less">
  .sBody /deep/ .el-dialog__wrapper > .el-dialog {
    background: white !important;
  }

  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header {
    padding: 20px 20px 10px;
  }

  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title {
    color: black !important;
  }

  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__body {
    padding: 30px 20px !important;
    color: white;
  }

  .form {
    height: 600px;
    overflow-y: scroll;

    .echarts {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .form::-webkit-scrollbar {
    display: none;
  }
</style>