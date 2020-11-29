<template>
    <div style="width: 100%;height: 100%">
        <el-dialog title="详情" :visible.sync="visible" :modal="false">
            <el-form :model="form" label-width="100px" style="height: 300px" disabled>
                <el-col :span="8">
                    <el-form-item label="名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="面积">
                        <el-input v-model="form.area"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="收入/月">
                        <el-input v-model="form.income"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="成本/月">
                        <el-input v-model="form.cost"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="利润/月">
                        <el-input v-model="form.profit"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="描述">
                        <el-input type="textarea" resize="none" rows="4" v-model="form.remark"></el-input>
                    </el-form-item>
                </el-col>
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
                    name: '',
                    area: '50平方米',
                    income: '10000',
                    cost: '1000',
                    profit: '9000',
                    remark: ''
                }
            }
        },
        methods: {
            openDialog(v) {
                this.visible = true;
                this.form.name = v.name;
                this.form.remark = v.remark;
            }
        }
    }
</script>

<style scoped>

</style>