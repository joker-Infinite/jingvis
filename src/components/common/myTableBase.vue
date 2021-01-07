<template>
    <div style="width: 100%;height: 100%;background: white" class="myTable">
        <div class="btnBar" v-if="buttons.length>0">
            <template v-for="btn in buttons">
                <el-button
                        size="medium"
                        :key="btn.name"
                        v-show="typeof(btn.hidden) == 'undefined'?true:((typeof btn.hidden == 'function')?!btn.hidden():!btn.hidden)"
                        :type="btn.type?btn.type:'primary'"
                        :icon="btn.icon?btn.icon:''"
                        :disabled="typeof(btn.disabled) === 'undefined'?false:((typeof btn.disabled == 'function')?btn.disabled():btn.disabled)"
                        @click="buttonClick(btn.callback)">
                    {{btn.name}}
                </el-button>
            </template>
        </div>
        <el-table
                :data="data"
                :height="buttons.length==0&&!pagination?'100%':buttons.length==0||!pagination?'calc(100% - 50px)':'calc(100% - 100px)'"
                style="width: 100%;"
                :highlight-current-row="chooseItem == 'single'"
                row-key="id"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
                @select="select"
                @row-click="selection"
                @select-all="selectAll">
            <el-table-column v-if="chooseItem != 'single'"
                             align="center"
                             fixed="left"
                             type="selection"
                             width="50">
            </el-table-column>
            <el-table-column v-if="gridIndex"
                             align="center"
                             fixed="left"
                             label="序号"
                             width="50">
                <template slot-scope="scope">
                    {{scope.$index+1}}
                </template>
            </el-table-column>
            <template v-for="(item,index) in columns">
                <el-table-column
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :align="item.align ? item.align : 'center'"
                        :width="item.width ? item.width : ''">
                </el-table-column>
            </template>
            <el-table-column
                    v-if="operations.length>0"
                    fixed="right"
                    label="操作"
                    :width="operationsWidth" align="center">
                <template slot-scope="scope">
                    <el-button :type="operation.type?operation.type:'primary'"
                               size="mini"
                               v-for="operation in operations"
                               :key="operation.name"
                               @click.stop="columnClick(scope.row,scope.$index,operation.callback)">
                        {{operation.name}}
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination" v-if="pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myTableBase",
        props: {
            data: {
                type: Array,
                default: []
            },
            columns: {
                type: Array,
                default: []
            },
            chooseItem: {
                type: String,
                default: ''
            },
            isSelection: {
                type: Boolean,
                default: true
            },
            gridIndex: {
                type: Boolean,
                default: true
            },
            buttons: {//网格按钮组
                type: Array,
                default: function () {
                    return []
                }
            },
            operations: {//网格行按钮清单
                type: Array,
                default: function () {
                    return []
                }
            },
            operationsWidth: {
                type: String,
                default: ''
            },
            pagination: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                currentPage4: 4
            }
        },
        methods: {
            columnClick(item, index, callback) {
                if (callback) {
                    callback(item, index);
                }
            },
            buttonClick(callback, $event) {
                if (callback) {
                    callback($event);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            //多选时点击复选框
            select(selection, row) {
                this.$emit('selection-change', selection)
            },
            //单选
            selection(selection) {
                this.$emit('selection-change', [selection])
            },
            //点击全选
            selectAll(selection) {
                this.$emit('selection-change', selection)
            }
        }
    }
</script>

<style scoped lang="less">
    .myTable {
        .btnBar {
            width: 100%;
            height: 50px;

            /deep/ .el-button {
                padding: 10px 10px;
                margin: 6px 5px;
            }
        }

        /deep/ .el-table {
            .el-table__header-wrapper {
                .el-table__header {
                    tr {
                        th {
                            background: #efefef;
                        }
                    }
                }
            }

            .el-table__fixed-header-wrapper {
                .el-table__header {
                    tr {
                        th {
                            background: #efefef;
                        }
                    }
                }
            }

            .el-table__fixed-right {
                .el-table__fixed-body-wrapper {
                    .el-table__body {
                        tbody {
                            .el-table__row {
                                td {
                                    .cell {
                                        .el-button--mini {
                                            padding: 7px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .pagination {
            width: calc(100% - 20px);
            padding: 9px 10px;
            height: 32px;
            text-align: right;
            overflow: hidden;
        }
    }
</style>