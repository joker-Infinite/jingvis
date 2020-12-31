<template>
  <div
          style="width: 100%;height: 100%"
          :class="{sBody: true,hsBody: imgSize == 'small' || location != 'homeKanBan'}">
    <el-dialog
            width="1100px"
            align="center"
            :visible.sync="visible"
            :modal="false"
            @close="closeDialog">
      <el-form ref="form" :model="form" label-width="125px" class="form">
        <p class="title">
          <el-col :span="8">
            <el-form-item></el-form-item>
          </el-col>
          <el-col :span="8">
            <span style="display: inline-block;">{{ form.name }}</span>
          </el-col>
          <el-col :span="8">
            <span
                    :style="{
                display: 'inline-block',
                fontSize: '15px',
                fontWeight: '600',
                color:location != 'homeKanBan'||imgSize == 'small'? '#38d': '#f6fe96'}">
              {{
                !form.noPingEffect
                  ? form.remark
                    ? form.remark.length < 10
                      ? "坪效：6元/㎡(自营)"
                      : form.remark > 10 && form.remark < 20
                      ? "坪效：5元/㎡(合营)"
                      : "坪效：5元/㎡(租赁)"
                    : "坪效：6元/㎡(租赁)"
                  : ""
              }}</span><span :style="{
                display: 'inline-block',
                fontSize: '15px',
                fontWeight: '600',
                color: imgSize == 'small' || location != 'homeKanBan'? '#38d': '#f6fe96'}">
              {{ form.BGQ ? "服务区坪效：20元/㎡" : "" }}</span>
          </el-col>
        </p>
        <el-col :span="8" v-for="(it, ix) in formData" :key="ix">
          <el-form-item :label="it.label + '：'" :class="it.addColor">
            <el-input disabled :value="it.value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <div
                  v-if="form.columns && form.columns.length !== 0"
                  :style="{
              fontWeight: '700',
              lineHeight: '30px',
              fontSize: '16px',
              color:location != 'homeKanBan'? '#333': imgSize == 'small'? '#333': 'white'}">
            加油站油枪列表
          </div>
          <table
                  :style="{
              color:location != 'homeKanBan' ? '#333': imgSize == 'small'? '#333': 'white'}"
                  class="table"
                  border="1"
                  cellspacing="0">
            <tr v-for="(it, ix) in form.columns">
              <th>{{ it.a }}</th>
              <th>{{ it.b }}</th>
              <th>{{ it.c }}</th>
              <th>{{ it.d }}</th>
              <th>{{ it.e }}</th>
              <th>{{ it.f }}</th>
            </tr>
          </table>
        </el-col>
        <el-col :span="12">
          <div style="width: 10px;height: 10px"></div>
        </el-col>
        <el-col :span="8" v-if="chartBox.length === 1">
          <p>
            <el-date-picker v-model="dates" type="month" placeholder="请选择日期">
            </el-date-picker>
          </p>
        </el-col>
        <div class="echarts">
          <div
                  v-for="i in 2"
                  :key="i"
                  :style="{ width: '49.5%',height: chartBox.length === 2 ? '300px' : '400px',marginBottom: '10px',position: 'relative'}">
            <!--  <div v-if="i == 2 && NE == 'gas'" class="KK ll">进入</div>
              <div v-if="i == 2 && NE == 'gas'" class="KK rr">驶出</div>-->
            <div class="KK ll" v-if="i==2&& (form.name=='男厕'|| form.name=='女厕')">男（223）</div>
            <div class="KK rr" v-if="i==2&& (form.name=='男厕'|| form.name=='女厕')">女（175）</div>
            <div class="KK rr"></div>
            <div :id="NE + i" style="width: 100%;height: 100%"></div>
          </div>
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
				default: ""
			},
			imgSize: {
				type: String,
				default: ""
			},
			NE: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				dates: "2020-12",
				visible: false,
				form: {
					name: ""
				},
				formData: [],
				chartBox: [],
				ID: [],
				cellSize: [60, 60],
				pieRadius: 20,
				legendSelected: {},
				scatterData: []
			};
		},
		methods: {
			async closeDialog() {
				await this.clearECharts();
				this.$emit("showPopover", true);
			},
			clearECharts() {
				document
					.getElementById(this.NE + "1")
					.removeAttribute("_echarts_instance_");
				document
					.getElementById(this.NE + "2")
					.removeAttribute("_echarts_instance_");
			},
			getVirtulData() {
				let date = +this.$echarts.number.parseDate("2020-12-01");
				let end = +this.$echarts.number.parseDate("2021-1-01");
				let dayTime = 3600 * 24 * 1000;
				let data = [];
				for (let time = date; time < end; time += dayTime) {
					data.push([
						this.$echarts.format.formatTime("yyyy-MM-dd", time),
						Math.floor(Math.random() * 10000)
					]);
				}
				return data;
			},
			getPieSeries(charts) {
				let that = this;
				return this.$echarts.util.map(this.getVirtulData(), function (
					item,
					index
				) {
					let center = charts.convertToPixel("calendar", item);
					return {
						id: index + "pie",
						type: "pie",
						center: center,
						barWidth: 20,
						title: {
							text: "近半年销售额",
							x: "center",
							textStyle: {
								color: "#FFF"
							}
						},
						label: {
							normal: {
								formatter: "{c}",
								position: "inside"
							}
						},
						radius: that.pieRadius,
						data: [
							{
								name: "大车",
								value: Math.round(Math.random() * 24),
								itemStyle: {color: "#596aec"}
							},
							{
								name: "小车",
								value: Math.round(Math.random() * 24),
								itemStyle: {color: "#43cef7"}
							}
						]
					};
				});
			},
			openDialog(v) {
				if (v.name === "大厅") {
					return "";
				}
				this.formData = v.formData;
				this.chartBox = v.chartBox;
				this.visible = true;
				this.$nextTick(_ => {
					let form = document.getElementsByClassName("form")[0];
					form.scrollTo(0, 0);
					this.form = v;
					this.scatterData = this.getVirtulData();
					this.ECharts(v);
				});
			},
			ECharts(v) {
				let eId = [];
				for (let i = 1; i < 2 + 1; i++) {
					let id = this.NE + i;
					eId.push(this.$echarts.init(document.getElementById(id)));
				}
				this.ID = eId;
				if (v.name !== "停车区") {
					this.allECharts(eId);
				}
				if (v.name === "停车区") {
					this.smallECharts(eId);
				}
			},
			allECharts(eId) {
				eId.forEach((i, x) => {
					if (this.openIndex % 2 == 0) {
						document.getElementById(i).removeAttribute("_echarts_instance_");
					}
					this.$nextTick(_ => {
						i.setOption(this.chartBox[x]);
					});
					if (x == 1) {
						i.on('legendselectchanged', function (v) {
							this.legendSelected = v;
						})
					}
				});
			},
			smallECharts(eId) {
				let that = this;
				let option = {
					tooltip: {
						formatter: v => {
							return v.name + ":" + v.value + "辆";
						}
					},
					title: {
						text: "当前月每日车流量",
						x: "center",
						textStyle: {
							color:
								this.location != "homeKanBan"
									? "#333"
									: this.imgSize == "small"
									? "#333"
									: "white"
						}
					},
					legend: {
						data: ["大车", "小车"],
						bottom: 0,
						textStyle: {
							color:
								this.location != "homeKanBan"
									? "#333"
									: this.imgSize == "small"
									? "#333"
									: "white"
						}
					},
					calendar: {
						top: "middle",
						left: "center",
						orient: "vertical",
						cellSize: this.cellSize,
						yearLabel: {
							show: false,
							textStyle: {
								fontSize: 30
							}
						},
						dayLabel: {
							margin: 5,
							firstDay: 1,
							nameMap: [
								"星期日",
								"星期一",
								"星期二",
								"星期三",
								"星期四",
								"星期五",
								"星期六"
							],
							textStyle: {
								color:
									this.location != "homeKanBan"
										? "#333"
										: this.imgSize == "small"
										? "#333"
										: "white"
							}
						},
						monthLabel: {
							show: false
						},
						range: ["2020-12"]
					},
					series: [{
						id: 'label',
						type: 'scatter',
						coordinateSystem: 'calendar',
						symbolSize: 1,
						label: {
							normal: {
								show: true,
								formatter: function (params) {
									return that.$echarts.format.formatTime('dd', params.value[0]);
								},
								offset: [-that.cellSize[0] / 2 + 10, -that.cellSize[1] / 2 + 10],
								textStyle: {
									color: '#000',
									fontSize: 14
								}
							}
						},
						data: this.scatterData
					}]
				};
				eId[0].setOption(this.chartBox[0]);
				eId[1].setOption(option);
				setTimeout(function () {
					let series = that.getPieSeries(eId[1]);
					eId[1].setOption({
						series: series
					});
				}, 10);
			}
		}
	};
</script>

<style scoped lang="less">
  .sBody /deep/ .el-dialog__wrapper > .el-dialog {
    background: white !important;
  }

  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__header {
    padding: 0 !important;
  }

  .sBody
  /deep/
  .el-dialog__wrapper
  > .el-dialog
  > .el-dialog__header
  > .el-dialog__title {
    color: black !important;
  }

  .sBody /deep/ .el-dialog__wrapper > .el-dialog > .el-dialog__body {
    padding: 0;
    color: white;
  }

  .hsBody {
    .form {
      min-height: 300px;
      padding: 10px 50px 50px;
      overflow-y: scroll;
      background: none;
      background-size: 100% 100%;

      .search {
        text-align: right;
      }

      .title {
        color: #606266;
        font-size: 20px;
        font-weight: 800;
        line-height: 50px;
      }

      /deep/ .el-col {
        .el-date-editor {
          .el-input__inner {
            line-height: 35px;
            height: 35px;
            background: rgba(255, 255, 255, 1);
            border: 1px solid #dcdfe6;
            color: #606266;
          }

          .el-input__prefix {
            .el-input__icon {
              line-height: 35px;
              color: #606266;
            }
          }
        }

        .red {
          .el-form-item__label {
            color: red !important;
          }

          .el-form-item__content {
            .el-input {
              .el-input__inner {
                color: red !important;
              }
            }
          }
        }

        .green {
          .el-form-item__label {
            color: green !important;
          }

          .el-form-item__content {
            .el-input {
              .el-input__inner {
                color: green !important;
              }
            }
          }
        }
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
        position: relative;
      }
    }
  }

  .form {
    min-height: 300px;
    padding: 20px 50px 50px;
    overflow-y: scroll;
    background: url("../../../assets/detailsTest/imgDetailsBG.jpg");
    background-size: 100% 100%;

    /deep/ .el-col {
      p {
        height: 50px;

        .el-date-editor {
          .el-input__inner {
            line-height: 35px;
            height: 35px;
            background: rgba(0, 0, 0, 0);
            border: 1px solid #00bff6;
            color: #00bff6;
          }

          .el-input__prefix {
            .el-input__icon {
              line-height: 35px;
              background: rgba(0, 0, 0, 0);
              color: #00bff6;
            }
          }
        }
      }

      .red {
        .el-form-item__label {
          color: red !important;
        }

        .el-form-item__content {
          .el-input {
            .el-input__inner {
              color: red !important;
            }
          }
        }
      }

      .green {
        .el-form-item__label {
          color: green !important;
        }

        .el-form-item__content {
          .el-input {
            .el-input__inner {
              color: green !important;
            }
          }
        }
      }
    }

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

  .KK {
    position: absolute;
    z-index: 10;
    font-size: 18px;
    color: white;
  }

  .ll {
    left: 50px;
  }

  .rr {
    right: 50px;
  }

  table {
    color: #333;
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    font-weight: 100;
    margin-bottom: 10px;
  }

  table,
  th,
  td {
    border: 1px solid #606266;
    line-height: 2.5;
  }

  .form::-webkit-scrollbar {
    display: none;
  }
</style>
