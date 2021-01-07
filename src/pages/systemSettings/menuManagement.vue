<template>
    <div style="width: 100%;height: 100%">
        <my-table-base chooseItem="single"
                       :gridIndex="false"
                       :operations="operations"
                       :columns="columns"
                       operationsWidth="180px"
                       :data="tableData"
                       :buttons="buttons"
                       @selection-change="selectionChange">
        </my-table-base>
        <my-dialog width="1000px" title="新增" :visible.sync="visible" :closeOnClickModal="true" height="500px">
            <el-form :model="formData" label-width="100px">
                <el-col :span="8">
                    <el-form-item label="名称：">
                        <el-input v-model="formData.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="图标：">
                        <el-input v-model="formData.icon"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="类型：">
                        <el-input v-model="formData.type"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="排序：">
                        <el-input v-model="formData.index"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="路由：">
                        <el-input v-model="formData.router"></el-input>
                    </el-form-item>
                </el-col>
            </el-form>
            <div slot="footerButton">
                <el-button type="primary">确定</el-button>
                <el-button type="info" @click="visible=false">取消</el-button>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import MyTableBase from "../../components/common/myTableBase";
    import MyDialog from "../../components/common/myDialog";

    export default {
        name: "menuManagement",
        components: {MyDialog, MyTableBase},
        data() {
            return {
                visible: false,
                formData: {
                    name: '',
                    icon: '',
                    type: '',
                    index: '',
                    router: '',
                },
                columns: [
                    {prop: 'a', label: '名称', width: '100px', query: true},
                    {prop: 'b', label: '图标', query: true},
                    {prop: 'c', label: '类型', query: true},
                    {prop: 'd', label: '排序', query: true},
                    {prop: 'e', label: '路由', query: true},
                ],
                tableData: [
                    {id: 1, a: '111', b: '222', c: '菜单', d: 1, e: '/.../..'},
                    {id: 2, a: '111', b: '222', c: '菜单', d: 2, e: '/.../..'},
                    {
                        id: 3, a: '111', b: '222', c: '菜单', d: 3, e: '/.../..',
                        children: [
                            {id: 31, a: '111-2', b: '222-2', c: '子菜单', d: 31, e: '/.../..'},
                            {id: 32, a: '111-2', b: '222-2', c: '子菜单', d: 32, e: '/.../..'},
                            {id: 33, a: '111-2', b: '222-2', c: '子菜单', d: 33, e: '/.../..'},
                        ]
                    },
                ],
                buttons: [
                    {
                        name: '新增',
                        icon: 'el-icon-plus',
                        callback: _ => {
                            this.visible = true;
                        }
                    },
                    {
                        name: '删除',
                        icon: 'el-icon-close',
                        type: 'danger',
                        callback: _ => {
                        }
                    },
                ],
                operations: [
                    {
                        name: '编辑',
                        type: 'info',
                        callback: _ => {
                        }

                    },
                    {
                        name: '删除',
                        type: 'danger',
                        callback: _ => {
                        }
                    },
                ],
            }
        },
        methods: {
            selectionChange(d) {
                // console.log(d);
            }
        }
    }
</script>

<style scoped>

</style>