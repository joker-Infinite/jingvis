<template>
  <div class="container">
    <div class="left">
      <!--            <div class="head">-->
      <!--                <div class="selected">-->
      <!--                    <div class="checkAll">-->
      <!--                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"-->
      <!--                                     @change="selectAll(checkAll)">全选-->
      <!--                        </el-checkbox>-->
      <!--                    </div>-->
      <!--                    <el-checkbox-group v-model="checked" @change="selectItem(checked)">-->
      <!--                        <el-checkbox v-for="(it,ix) in checkData" :label="it.label" :value="it.value"-->
      <!--                                     :key="ix"></el-checkbox>-->
      <!--                    </el-checkbox-group>-->
      <!--                </div>-->
      <!--                <div class="time"></div>-->
      <!--            </div>-->
      <div style="width: 10%;height: 100%;float: left">
        <div class="customizeBtn">
          <el-button type="primary" @click="customizeTemplate"
            >自定义模板</el-button
          >
        </div>
        <div class="navBox">
          <div>
            <span
              :class="{ navItem: true, active: navIndex === i }"
              @click="navClick(i)"
              v-for="i in 10"
            >
              {{ i }}-{{ i }}
            </span>
          </div>
        </div>
      </div>
      <div style="width: 90%;height: 100%;float: right">
        <div class="head_tabs" style="height: 5%">
          <div class="tabs">
            <div
              @click="tabClick(i)"
              :class="{ tabs_item: true, borderBottom: tabIndex === i }"
              v-for="i in 4"
            >
              <span>模板-{{ i }}</span>
            </div>
          </div>
        </div>
        <div style="width: 100%;height: 95%">
          <el-table :data="tableData_" ref="table" border height="100%">
            <el-table-column
              align="center"
              v-for="(it, ix) in columns"
              :key="ix"
              :prop="it.code"
              :label="it.label"
              :width="it.width"
            ></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div
      style=" width: 20%;
            height: 100%;
            float: right; position: relative"
    >
      <div class="right">
        <div class="box" v-for="(it, ix) in columns" v-if="ix !== 0">
          <div class="title">
            <el-select v-model="it.value">
              <el-option
                v-for="(item, index) in serviceData"
                :label="item.label"
                :value="item.value"
                :key="index"
              ></el-option>
            </el-select>
          </div>
          <div class="selectCon">
            <div class="label">
              <span>时间：</span>
              <el-date-picker
                v-model="it.time"
                type="monthrange"
                align="right"
                value-format="yyyy-MM-dd"
                format="yyyy-MM-dd"
                unlink-panels
                range-separator="至"
                start-placeholder="开始月份"
                end-placeholder="结束月份"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
            <div class="label">
              <span>服务区：</span>
              <el-select v-model="it.service">
                <el-option
                  v-for="(it, ix) in serviceData"
                  :label="it.label"
                  :value="it.value"
                  :key="ix"
                ></el-option>
              </el-select>
            </div>
            <div class="label">
              <span>业务：</span>
              <el-select v-model="it.business">
                <el-option
                  v-for="(it, ix) in business"
                  :label="it.label"
                  :value="it.value"
                  :key="ix"
                ></el-option>
              </el-select>
            </div>
            <div class="label">
              <span>业态：</span>
              <el-select v-model="it.format">
                <el-option
                  v-for="(it, ix) in business"
                  :label="it.label"
                  :value="it.value"
                  :key="ix"
                ></el-option>
              </el-select>
            </div>
          </div>
          <div class="btnGroup small">
            <i class="el-icon-close" @click="del(ix)"></i>
          </div>
        </div>
      </div>
      <div class="box addService">
        <div class="selectCon">
          <div class="label">
            <span>时间：</span>
            <el-date-picker
              v-model="selectData.time"
              type="monthrange"
              align="right"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              unlink-panels
              range-separator="至"
              start-placeholder="开始月份"
              end-placeholder="结束月份"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </div>
          <div class="label">
            <span>服务区：</span>
            <el-select v-model="selectData.service">
              <el-option
                v-for="(it, ix) in serviceData"
                :label="it.label"
                :value="it.value"
                :key="ix"
              ></el-option>
            </el-select>
          </div>
          <div class="label">
            <span>业务：</span>
            <el-select v-model="selectData.business">
              <el-option
                v-for="(it, ix) in business"
                :label="it.label"
                :value="it.value"
                :key="ix"
              ></el-option>
            </el-select>
          </div>
          <div class="label">
            <span>业态：</span>
            <el-select v-model="selectData.format">
              <el-option
                v-for="(it, ix) in business"
                :label="it.label"
                :value="it.value"
                :key="ix"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="btnGroup">
          <el-button
            size="mini"
            class="el-icon-check"
            type="primary"
            @click="newAdd"
          ></el-button>
          <el-button
            size="mini"
            class="el-icon-refresh-right"
            type="info"
            @click="reset"
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "test",
    data() {
        return {
            navIndex: 1,
            tabIndex: 1,
            service: '',
            isIndeterminate: false,
            checkAll: false,
            checked: [],
            checkData: [
                {label: '利润', value: 'profit'},
                {label: '利率', value: 'interestRate'},
                {label: '收入', value: 'income'},
                {label: '人流量', value: 'humanTraffic'},
            ],
            columns: [],
            columns_1: [
                {code: 'parameter', label: '参数/服务区', width: 200},
                {code: 'serviceArea_1', label: 'sss', value: 1, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_2', label: 'mmm', value: 2, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_3', label: 'ttt', value: 3, time: '', service: '', business: '', format: ''},
            ],
            columns_2: [
                {code: 'parameter', label: '参数/服务区', width: 200},
                {code: 'serviceArea_1', label: 'rrr', value: 1, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_2', label: 'uuu', value: 2, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_3', label: 'iii', value: 3, time: '', service: '', business: '', format: ''},
            ],
            columns_3: [
                {code: 'parameter', label: '参数/服务区', width: 200},
                {code: 'serviceArea_1', label: 'kkk', value: 1, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_2', label: 'lll', value: 2, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_3', label: 'aaa', value: 3, time: '', service: '', business: '', format: ''},
            ],
            columns_4: [
                {code: 'parameter', label: '参数/服务区', width: 200},
                {code: 'serviceArea_1', label: 'bbb', value: 1, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_2', label: 'ddd', value: 2, time: '', service: '', business: '', format: ''},
                {code: 'serviceArea_3', label: 'ccc', value: 3, time: '', service: '', business: '', format: ''},
            ],
            tableData: [
                {
                    parameter: '利润',
                    serviceArea_1: '50万',
                    serviceArea_2: '10万',
                    serviceArea_3: '15万',
                    serviceArea_4: '15万',
                },
                {
                    parameter: '利率',
                    serviceArea_1: '5.8',
                    serviceArea_2: '3.9',
                    serviceArea_3: '4.2',
                    serviceArea_4: '4.2',
                },
                {
                    parameter: '收入',
                    serviceArea_1: '3.3',
                    serviceArea_2: '9.3',
                    serviceArea_3: '8.5',
                    serviceArea_4: '8.5',
                },
                {
                    parameter: '人流量',
                    serviceArea_1: '5万',
                    serviceArea_2: '1万',
                    serviceArea_3: '5000',
                    serviceArea_4: '5000',
                },
            ],
            tableData_: [],
            selectData: {
                service: '',
                business: '',
                format: '',
                time: '',
            },
            serviceData: [
                {
                    label: '服务区1',
                    value: 1,
                    serviceId: '451d2s'
                },
                {
                    label: '服务区2',
                    value: 2,
                    serviceId: '45we2s'
                },
                {
                    label: '服务区3',
                    value: 3,
                    serviceId: '45rw3s'
                },
                {
                    label: '服务区4',
                    value: 4,
                    serviceId: '45r22s'
                },
                {
                    label: '服务区5',
                    value: 5,
                    serviceId: '45gw2s'
                },
            ],
            business: [
                {
                    label: '加油站',
                    value: 1,
                    businessId: '4erw2s'
                },
                {
                    label: '自营商店',
                    value: 2,
                    businessId: '4er96s'
                },
                {
                    label: '车辆数',
                    value: 3,
                    businessId: '49822s'
                },
            ],
            pickerOptions: {
                shortcuts: [
                    {
                        text: '本月',
                        onClick(picker) {
                            picker.$emit('pick', [new Date(), new Date()]);
                        }
                    },
                    {
                        text: '今年至今',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date(new Date().getFullYear(), 0);
                            picker.$emit('pick', [start, end]);
                        }
                    },
                    {
                        text: '最近六个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setMonth(start.getMonth() - 6);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
            },
        }
    },
    methods: {
        customizeTemplate() {

        },
        navClick(i) {
            this.navIndex = i;
        },
        tabClick(i) {
            this.tabIndex = i;
            this.columns = this.['columns_' + i];
        },
        selectItem(v) {
            let data = [];
            let arr = JSON.parse(JSON.stringify(this.tableData));
            if (this.checked.length === this.checkData.length) {
                this.isIndeterminate = false;
                this.checkAll = true;
            } else {
                this.isIndeterminate = true;
                this.checkAll = false;
            }
            if (this.checked.length === 0) {
                this.isIndeterminate = false;
            }
            this.tableData.forEach(i => {
                if (v.join(',').indexOf(i.parameter) !== -1) {
                    data.push(i);
                }
            });
            this.tableData_ = data;
        },
        selectAll(v) {
            this.isIndeterminate = false;
            if (v) {
                this.checkData.forEach(i => {
                    this.checked.push(i.label);
                })
                this.tableData_ = this.tableData;
            }
            if (!v) {
                this.checked = [];
                this.tableData_ = [];
            }
        },
        del(v) {
            let newData = [];
            let data = JSON.parse(JSON.stringify(this.columns));
            this.columns = [];
            data.forEach((it, ix) => {
                if (ix !== v) {
                    newData.push(it);
                }
            });
            this.columns = newData;
        },
        newAdd() {
            let obj = {
                code: 'serviceArea_5',
                label: 'XT服务区',
                value: '',
                time: this.selectData.time,
                service: this.selectData.service,
                business: this.selectData.business,
                format: this.selectData.format
            };
            this.serviceData.forEach((it, ix) => {
                if (ix === this.selectData.service - 1) {
                    obj.label = it.label;
                    obj.value = ix + 1;
                }
            });
            this.business.forEach((it, ix) => {
                if (ix === this.selectData.business - 1) {
                    obj.business = this.selectData.business
                }
            });
            this.columns.push(obj);
            let obj_ = ['2万', '3.3', '6.3', '10万'];
            this.tableData.forEach((it, ix) => {
                it.serviceArea_5 = obj_[ix];
            });
            this.reset();
        },
        reset() {
            this.selectData = {
                service: '',
                business: '',
                format: '',
                time: ''
            }
        }
    },
    mounted() {
        this.columns = this.columns_1;
        this.checkAll = true;
        this.checkData.forEach(i => {
            this.checked.push(i.label);
        });
        if (this.checkAll) {
            this.tableData_ = this.tableData;
        }
        if (!this.checkAll) {
            this.tableData_ = [];
        }
    }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: fixed;

  .left {
    width: 80%;
    height: 100%;
    float: left;
    background: #ffffff;
    overflow-y: scroll;

    .head_tabs {
      width: 100%;
      overflow: hidden;

      .tabs {
        width: 98%;
        margin: 0 1%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;

        .tabs_item {
          width: 200px;
          height: 80%;
          text-align: center;
          margin: 0 5px;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          justify-content: space-around;
          cursor: pointer;
        }

        .borderBottom {
          border-bottom: 3px solid #3a95f0;
          color: #3a95f0;
        }

        .tabs_item:hover {
          border-bottom: 3px solid #3a95f0;
          color: #3a95f0;
        }
      }
    }

    .navBox {
      width: 100%;
      height: 90%;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;

      .navItem {
        display: inline-block;
        width: 80%;
        margin: 0 10%;
        background: #eeeeee;
        line-height: 2;
        text-align: center;
        cursor: pointer;
      }

      .active {
        background: #333333;
        color: white;
      }
    }

    .customizeBtn {
      width: 100%;
      height: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    .customizeBtn /deep/ .el-button {
      height: 30px;
      width: 80%;
      margin: 0 auto;
      font-size: 12px;
      line-height: 30px;
      padding: 0 5px;
      border-radius: 0;
    }

    .head {
      display: flex;
      width: 95%;
      padding: 0 2.5%;

      .selected {
        width: 70%;
        height: 100px;
        background: #efedf2;
        overflow: scroll;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;

        .checkAll {
          width: 100% !important;
          height: 1px !important;
        }
      }

      .selected /deep/ .el-checkbox {
        width: 150px;
      }

      .selected::-webkit-scrollbar {
        display: none;
      }

      .time {
      }
    }
  }

  .right {
    width: 100%;
    height: 78%;
    /*float: right;*/
    background: #d6e764;
    overflow-y: scroll;
    position: relative;

    .box {
      width: 95%;
      height: 215px;
      background: #fff;
      position: relative;
      border: 1px solid #989898;
      border-radius: 5px;
      margin: 5px auto;
      overflow: hidden;

      .selectCon {
        width: 90%;
        margin: auto;
        padding: 5px 0;
        font-size: 12px;

        .label {
          width: 100%;
          line-height: 40px;
        }

        .label > span {
          width: 15%;
          display: inline-block;
        }

        .label /deep/ .el-select {
          width: 75%;
        }

        .label /deep/ .el-select > .el-input {
          width: 100%;
        }

        .label /deep/ .el-select > .el-input > .el-input__inner {
          width: 100%;
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-select > .el-input > .el-input__suffix {
          height: 30px;
        }

        .label
          /deep/
          .el-select
          > .el-input
          > .el-input__suffix
          > .el-input__suffix-inner
          > .el-select__caret {
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-date-editor {
          width: 75%;
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-date-editor > .el-input__icon {
          height: 30px;
          line-height: 30px;
        }

        .label /deep/ .el-date-editor > .el-range-input {
          height: 25px;
          line-height: 25px;
        }

        .label /deep/ .el-date-editor > .el-range-separator {
          height: 30px;
          line-height: 30px;
        }
      }

      .title {
        text-align: center;
      }

      .title /deep/ .el-select > .el-input {
        height: 30px;
        line-height: 30px;
      }

      .title /deep/ .el-select > .el-input > .el-input__inner {
        height: 30px;
        line-height: 30px;
        border: none;
        border-bottom: 1px solid #d1d1d1;
        border-radius: 0;
        text-align: center;
      }

      .title
        /deep/
        .el-select
        > .el-input
        > .el-input__suffix
        > .el-input__suffix-inner
        > .el-select__caret {
        height: 30px;
        line-height: 30px;
      }

      .btnGroup {
        width: 100%;
        height: 30px;
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
      }

      .small {
        width: 100%;
        height: 0;
        font-size: 20px;
        transition: linear 0.2s;
      }

      .small > i {
        width: 20px;
        height: 20px;
        background: rgba(77, 77, 77, 0.66);
        border-radius: 100%;
        color: white;
        cursor: pointer;
      }
    }

    .box > p {
      text-align: center;
    }

    .box:hover .small {
      height: 25px;
      line-height: 25px;
    }
  }

  .addService {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 22%;
    background: #e6e6e6;
    overflow: hidden;

    .selectCon {
      width: 90%;
      height: 200px;
      margin: auto;
      padding: 5px 0;

      .label {
        width: 100%;
        line-height: 40px;
      }

      .label > span {
        width: 25%;
        display: inline-block;
      }

      .label /deep/ .el-select {
        width: 75%;
      }

      .label /deep/ .el-select > .el-input {
        width: 100%;
      }

      .label /deep/ .el-select > .el-input > .el-input__inner {
        width: 100%;
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-select > .el-input > .el-input__suffix {
        height: 30px;
      }

      .label
        /deep/
        .el-select
        > .el-input
        > .el-input__suffix
        > .el-input__suffix-inner
        > .el-select__caret {
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-date-editor {
        width: 75%;
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-date-editor > .el-input__icon {
        height: 30px;
        line-height: 30px;
      }

      .label /deep/ .el-date-editor > .el-range-input {
        height: 25px;
        line-height: 25px;
      }

      .label /deep/ .el-date-editor > .el-range-separator {
        height: 30px;
        line-height: 30px;
      }
    }

    .btnGroup {
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      left: 0;
      text-align: center;
    }
  }
}

.right::-webkit-scrollbar {
  display: none;
}
</style>
