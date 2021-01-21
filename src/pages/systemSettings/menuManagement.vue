<template>
    <div style="width: 100%;height: 100%">
        <my-table-base chooseItem="single"
                       :gridIndex="false"
                       :operations="operations"
                       :columns="columns"
                       operationsWidth="180px"
                       :tableData="tableData"
                       :buttons="buttons"
                       :pagination="false"
                       @selection-change="selectionChange">
        </my-table-base>
        <my-dialog width="1000px" title="新增" :visible.sync="visible" :closeOnClickModal="true" height="400px">
            <el-form ref="form" :model="formData" :rules="rules" label-width="100px">
                <el-col :span="8">
                    <el-form-item label="类型：" prop="menuType">
                        <el-select :disabled="btnType !== 'add'" v-model="formData.menuType"
                                   @change="changeMenuType(formData.menuType)">
                            <el-option label="主菜单" value="M"></el-option>
                            <el-option label="子菜单" value="S"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8" v-if="formData.menuType==='S'">
                    <el-form-item label="父菜单" prop="pid">
                        <el-select v-model="formData.pid">
                            <el-option v-for="(i,x) in allMenu" :key="x" :label="i.menuName"
                                       :value="i.menuId"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="名称：" prop="menuName">
                        <el-input v-model="formData.menuName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="图标：">
                        <el-input v-model="formData.icon"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="排序：" prop="sort">
                        <el-input v-model="formData.sort"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="路由：" prop="murl">
                        <el-input v-model="formData.murl"></el-input>
                    </el-form-item>
                </el-col>
            </el-form>
            <div slot="footerButton">
                <el-button type="primary" @click="saveMenu(formData)">确定</el-button>
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
                allMenu: [],
                formData: {},
                form: {
                    menuName: '',
                    pid: '',
                    icon: '',
                    menuType: '',
                    sort: '',
                    murl: '',
                },
                rules: {
                    menuName: [{required: true, message: '请输入菜单名称', trigger: 'blur'}],
                    pid: [{required: true, message: '请选择父菜单', trigger: 'change'}],
                    menuType: [{required: true, message: '请选择菜单类型', trigger: 'change'}],
                    sort: [{required: true, message: '请输入菜单排序', trigger: 'blur'}],
                    murl: [{required: true, message: '请输入菜单url', trigger: 'blur'}],
                },
                columns: [
                    {prop: 'menuName', label: '名称', query: true, sortable: true},
                    {prop: 'icon', label: '图标', query: true},
                    {prop: 'menuType', label: '类型', query: true, sortable: true},
                    {prop: 'sort', label: '排序', query: true, sortable: true},
                    {prop: 'murl', label: '路由', query: true, sortable: true},
                ],
                tableData: [],
                btnType: 'add',
                buttons: [
                    {
                        name: '新增',
                        icon: 'el-icon-plus',
                        callback: _ => {
                            this.btnType = 'add';
                            this.visible = true;
                            this.$nextTick(_ => {
                                this.formData = JSON.parse(JSON.stringify(this.form));
                                this.$refs['form'].resetFields();
                            })
                        }
                    },
                    /* {
                         name: '删除',
                         icon: 'el-icon-close',
                         type: 'danger',
                         callback: v => {
                         }
                     },*/
                ],
                operations: [
                    {
                        name: '编辑',
                        type: 'info',
                        callback: v => {
                            this.visible = true;
                            this.btnType = 'edit';
                            this.$nextTick(_ => {
                                this.formData = JSON.parse(JSON.stringify(v));
                                this.formData.menuType = this.formData.menuType == '子菜单' ? 'S' : 'M'
                            })
                        }
                    },
                    {
                        name: '删除',
                        type: 'danger',
                        callback: v => {
                            if (v.children && v.children.length > 0) {
                                this.$message.warning('不可删除！');
                            } else {
                                this.$message.success('可删除！');
                            }
                        }, isShow: v => {
                            if (v.children && v.children.length > 0) {
                                return false;
                            }
                            return true;
                        },
                    },
                ],
            }
        },
        methods: {
            changeMenuType(v) {
                if (v === 'M') {
                    this.formData.pid = 0;
                }
                if (v === 'S') {
                    this.formData.pid = '';
                }
            },
            async saveMenu(v) {
                let query = '';
                for (let i in v) {
                    query += i + '=' + v[i] + '&';
                }
                query = query.slice(0, query.length - 1);
                this.$refs['form'].validate(v => {
                    if (v) {
                        this.$axios.post('/api/admin/jt_menu/add_menu?' + query).then(res => {
                            this.$message.success('添加成功！');
                            this.visible = false;
                            this.refresh();
                        }).catch(error => {
                            this.$message.error('添加失败！');
                        })
                    }
                    if (!v) {
                        this.$message.warning('校验未通过！');
                    }
                })
            },
            selectionChange(d) {
                // console.log(d);
            },
            refresh() {
                this.$axios.get('/api/admin/jt_menu/list_menu').then(res => {
                    let data;
                    let M = [];
                    let SID = '';
                    let obj = {};
                    data = JSON.parse(JSON.stringify(res.data.data));
                    this.allMenu = JSON.parse(JSON.stringify(res.data.data));
                    data.forEach((i, x) => {
                        i.id = x + '';
                        obj[i.menuId] = [];
                        if (i.menuType === 'M') {
                            i.menuType = '主菜单';
                            M.push(i);
                        }
                        if (i.menuType === 'S') {
                            i.menuType = '子菜单';
                            SID += i.pid + ',';
                        }
                    });
                    for (let i in obj) {
                        for (let j = 0; j < data.length; j++) {
                            if (data[j].pid === i) {
                                obj[i].push(data[j]);
                            }
                        }
                    }
                    for (let i = 0; i < data.length; i++) {
                        for (let j in obj) {
                            if (data[i].menuId === j) {
                                data[i].children = obj[j];
                            }
                        }
                    }
                    this.tableData = M;
                })
            }
        },
        mounted() {
            this.refresh();
        }
    }
</script>

<style scoped>

</style>