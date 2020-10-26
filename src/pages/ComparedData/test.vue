<template>
    <div class="container">
        <div class="left">
            <div class="head">
                <div class="selected">
                    <div class="checkAll">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                                     @change="selectAll(checkAll)">全选
                        </el-checkbox>
                    </div>
                    <el-checkbox-group v-model="checked" @change="selectItem(checked)">
                        <el-checkbox v-for="(it,ix) in checkData" :label="it.label" :value="it.value"
                                     :key="ix"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="time"></div>
            </div>
            <el-table :data="tableData_" ref="table" border>
                <el-table-column fixed="left"
                                 align="center"
                                 label="序号"
                                 width="50">
                    <template slot-scope="scope">
                        {{scope.$index + 1}}
                    </template>
                </el-table-column>
                <el-table-column align="center" v-for="(it,ix) in columns" :prop="it.code" :label="it.label"
                                 :width="it.width"></el-table-column>
            </el-table>
        </div>
        <div style=" width: 20%;
            height: 100%;
            float: right; position: relative">
            <div class="right">
                <div class="box" v-for="(it,ix) in columns" v-if="ix !== 0">
                    <p>{{it.label}}</p>
                    <div class="btnGroup small">
                        <i class="el-icon-close" @click="del(ix)"></i>
                    </div>
                </div>
            </div>
            <div class="box addService">
                <div class="selectCon">
                    <div class="label">
                        <span>服务区：</span>
                        <el-select v-model="selectData.service">
                            <el-option v-for="(it,ix) in serviceData" :label="it.label" :value="it.value"
                                       :key="ix"></el-option>
                        </el-select>
                    </div>
                    <div class="label">
                        <span>业务：</span>
                        <el-select v-model="selectData.business">
                            <el-option v-for="(it,ix) in business" :label="it.label" :value="it.value"
                                       :key="ix"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="btnGroup">
                    <el-button size="mini" class="el-icon-check" type="primary" @click="newAdd"></el-button>
                    <el-button size="mini" class="el-icon-refresh-right" type="info" @click="reset"></el-button>
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
                isIndeterminate: false,
                checkAll: false,
                checked: [],
                checkData: [
                    {label: '利润', value: 'profit'},
                    {label: '利率', value: 'interestRate'},
                    {label: '收入', value: 'income'},
                    {label: '人流量', value: 'humanTraffic'},
                ],
                columns: [
                    {code: 'parameter', label: '参数', width: 200},
                    {code: 'serviceArea_1', label: 'XX服务区',},
                    {code: 'serviceArea_2', label: 'XS服务区',},
                    {code: 'serviceArea_3', label: 'XY服务区',},
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
                        serviceId: '45rw2s'
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
                ]
            }
        },
        methods: {
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
                let obj = {code: 'serviceArea_5', label: 'XT服务区',};
                this.serviceData.forEach((it, ix) => {
                    if (ix === this.selectData.service - 1) {
                        obj.label = it.label;
                    }
                });
                this.business.forEach((it, ix) => {
                    if (ix === this.selectData.business - 1) {
                        obj.label += '-' + it.label;
                    }
                });
                this.columns.push(obj);
                let obj_ = ['2万', '3.3', '6.3', '10万'];
                this.tableData.forEach((it, ix) => {
                    it.serviceArea_5 = obj_[ix];
                });
            },
            reset() {
                this.selectData = {
                    service: '',
                    business: '',
                }
            }
        },
        mounted() {
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
            background: #FFFFFF;
            overflow-y: scroll;

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
            height: 100%;
            /*float: right;*/
            background: #d6e764;
            overflow-y: scroll;
            position: relative;

            .box {
                width: 95%;
                height: 130px;
                background: #FFF;
                position: relative;
                border: 1px solid #989898;
                border-radius: 5px;
                margin: 5px auto;
                overflow: hidden;

                .selectCon {
                    width: 90%;
                    height: 100px;
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

                    .label /deep/ .el-select > .el-input > .el-input__suffix > .el-input__suffix-inner > .el-select__caret {
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

                .small {
                    width: 100%;
                    height: 0;
                    font-size: 20px;
                    transition: linear .2s;
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
            width: 95%;
            left: 2.5%;
        }
    }

    .right::-webkit-scrollbar {
        display: none;
    }
</style>