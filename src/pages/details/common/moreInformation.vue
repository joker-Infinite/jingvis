<template>
  <div style="width: 100%;height: 100%" class="sBody">
    <el-dialog width="1000px" align="center" :title="form.name" :visible.sync="visible" :modal="false"
               @close="$emit('showPopover', true)">
      <el-form ref="form" :model="form" label-width="125px" class="form" disabled>
        <el-col :span="8" v-for="(it,ix) in formData" :key="ix">
          <el-form-item :label="it.label+'：'">
            <el-input :value="it.value"></el-input>
          </el-form-item>
        </el-col>
        <div class="echarts">
          <div v-for="i in chartBox.length" :key="i" :id="'details_'+i"
               style="width: 49.5%;height:300px;margin-bottom: 10px"></div>
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
				formData: [],
				chartBox: [],
				ID: []
			}
		},
		methods: {
			openDialog(v) {
				if (v.name === '大厅') {
					return '';
				}
				this.formData = v.formData;
				this.chartBox = v.chartBox;
				this.visible = true;
				this.$nextTick(_ => {
					this.$echarts.init(document.getElementById('details_1')).dispose();
					this.$echarts.init(document.getElementById('details_2')).dispose();
					let form = document.getElementsByClassName('form')[0];
					form.scrollTo(0, 0);
					this.form.name = v.name;
					this.ECharts();
				})
			},
			ECharts() {
				let eId = [];
				for (let i = 1; i < this.chartBox.length + 1; i++) {
					let id = 'details_' + i;
					eId.push(this.$echarts.init(document.getElementById(id)))
				}
				this.ID = eId;
				eId.forEach((i, x) => {
					if (this.openIndex % 2 == 0) {
						document.getElementById(i).removeAttribute("_echarts_instance_");
					}
					this.$nextTick(_ => {
						i.setOption(this.chartBox[x]);
					})
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
    min-height: 300px;
    overflow-y: scroll;

    .echarts {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }

  .form::-webkit-scrollbar {
    display: none;
  }
</style>