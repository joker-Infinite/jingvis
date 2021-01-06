<template>
    <div style="width: 100%;height: 100%">
        <el-table
                :data="data"
                height="100%"
                :max-height="maxHeight"
                style="width: 100%;"
                :highlight-current-row="chooseItem == 'single'"
                @select="select"
                @row-click="selection">
            <el-table-column v-if="isSelection"
                             fixed="left"
                             type="selection"
                             width="40">
            </el-table-column>
            <el-table-column v-if="gridIndex"
                             fixed="left"
                             label="序号"
                             width="50">
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
        </el-table>
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
            buttons: {
                type: Array,
                default: []
            },
            maxHeight: {
                type: String,
                default: ''
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
            }
        },
        data() {
            return {}
        },
        methods: {
            select() {
            },
            selection() {
            }
        }
    }
</script>

<style scoped>

</style>