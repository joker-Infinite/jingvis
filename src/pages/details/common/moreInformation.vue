<template>
  <div style="width: 100%;height: 100%" :class="{sBody:true,hsBody:location !='homeKanBan'}">
    <el-dialog width="1000px" align="center" :visible.sync="visible" :modal="false"
               @close="$emit('showPopover', true)">
      <el-form ref="form" :model="form" label-width="125px" class="form" disabled>
        <p class="title">{{form.name}}</p>
        <el-col :span="8" v-for="(it,ix) in formData" :key="ix">
          <el-form-item :label="it.label+'：'">
            <el-input :value="it.value"></el-input>
          </el-form-item>
        </el-col>
        <div class="echarts">
          <div v-for="i in chartBox.length" :key="i" :id="'details_'+i"
               style="width: 49.5%;height:300px;margin-bottom: 10px;"></div>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
	export default {
		name: "moreInformation",
		props: {
			location: {
				type: String,
				default: ''
			}
		},
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
    padding: 0 !important;
  }

  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header > .el-dialog__title {
    color: black !important;
  }

  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__body {
    padding: 0;
    color: white;
  }

  .hsBody {
    .form {
      min-height: 500px;
      padding: 10px 50px 50px;
      overflow-y: scroll;
      background: none;
      background-size: 100% 100%;

      .title {
        color: #606266;
        font-size: 20px;
        font-weight: 800;
        line-height: 50px;
      }

      /deep/ .el-col {
        .el-form-item {
          .el-form-item__label {
            color: #606266;
          }

          .el-form-item__content {
            .el-input {
              .el-input__inner {
                background: none;
                border: none;
                color: #606266;
              }
            }
          }
        }
      }

      .echarts {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
      }
    }
  }

  .form {
    min-height: 500px;
    padding: 20px 50px 50px;
    overflow-y: scroll;
    background: url('../../../assets/detailsTest/imgDetailsBG.jpg');
    background-size: 100% 100%;

    .title {
      color: white;
      font-size: 20px;
      font-weight: 800;
      line-height: 50px;
    }

    .echarts {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    /deep/ .el-col {
      .el-form-item {
        .el-form-item__label {
          color: white;
        }

        .el-form-item__content {
          .el-input {
            .el-input__inner {
              background: none;
              border: none;
              color: white;
            }
          }
        }
      }
    }
  }

  .form::-webkit-scrollbar {
    display: none;
  }
</style>