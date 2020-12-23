<template>
  <div style="width: 100%;height: 100%" class="sBody">
    <el-dialog width="1000px" :title="form.name" :visible.sync="visible" :modal="false">
      <el-form ref="form" :model="form" label-width="100px" class="form" disabled>
        <el-col :span="8">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="面积">
            <el-input v-model="form.area"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="收入/月">
            <el-input v-model="form.income"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="成本/月">
            <el-input v-model="form.cost"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="利润/月">
            <el-input v-model="form.profit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="描述">
            <el-input type="textarea" resize="none" rows="4" v-model="form.remark"></el-input>
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
					name: '',
					area: '50平方米',
					income: '10000',
					cost: '1000',
					profit: '9000',
					remark: ''
				}
			}
		},
		methods: {
			openDialog(v) {
				this.visible = true;
				this.$nextTick(_ => {
					let form = document.getElementsByClassName('form')[0];
					form.scrollTo(0, 0);
					this.form.name = v.name;
					this.form.remark = v.remark;
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
							top: 20,
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
							top: 20,
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
							top: 20,
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
  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header {
    padding: 20px 20px 10px;
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