<template>
    <div class="table">
        <el-table :data="data"
                  :height="height"
                  style="width: 100%"
                  :border="border"
                  highlight-current-row
                  @current-change="singleChoice"
                  @selection-change="multipleChoice">
            <el-table-column
                    v-if="multiple"
                    align="center"
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    v-if="showIndex"
                    label="序号"
                    align="center"
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column v-for="(item,index) in columns"
                             :prop="item.prop"
                             :label="item.label"
                             :align="item.align?item.align:'center'"
                             :width="item.width?item.width:''">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "myTable",
        props: {
            data: {
                type: Array,
                default: []
            },
            columns: {
                type: Array,
                default: []
            },
            multiple: {
                type: Boolean,
                default: true
            },
            showIndex: {
                type: Boolean,
                default: true
            },
            border: {
                type: Boolean,
                default: true
            },
            height: {
                type: String,
                default: '400px'
            }
        },
        data() {
            return {}
        },
        methods: {
            singleChoice(v) {
                this.$emit('selectionChange', v);
            },
            multipleChoice(v) {
                this.$emit('selectionChange', v);
            }
        }
    }
</script>

<style scoped lang="less">
    .table {
        padding: 10px;
    }
</style>