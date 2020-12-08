<template>
    <div style="width: 100%;height:100%;background: #3388dd">
        <el-button @click="add">添加</el-button>
        <my-table height="1100px"
                  :showIndex="false"
                  :multiple="false"
                  :columns="columns"
                  :border="true"
                  :data="tabData"></my-table>
    </div>
</template>

<script>
    import MyTable from "../../components/common/myTable";

    export default {
        name: "ComparedTest",
        data() {
            return {
                columns: [
                    {prop: 'name', label: '服务区名称', width: '120px'},
                ],
                tabData: [
                    {
                        name: '基础信息'
                    }, {
                        name: '负责人'
                    }, {
                        name: '联系方式'
                    }, {
                        name: '经营面积'
                    }, {
                        name: '运行开始时间'
                    }, {
                        name: '停车位数量'
                    }, {
                        name: '大车个数'
                    }, {
                        name: '小车个数'
                    }, {
                        name: '男蹲位'
                    }, {
                        name: '女蹲位'
                    }, {
                        name: '业态数量'
                    }, {
                        name: '厕所等级'
                    }, {
                        name: '厕所改造时间'
                    }, {
                        name: '充电桩数量'
                    }, {
                        name: '充电桩分布'
                    }, {
                        name: '小便器阀数量'
                    }, {
                        name: '面盆龙头个数'
                    }, {
                        name: '便民休闲座椅'
                    }, {
                        name: '保安人数'
                    }, {
                        name: '保洁人数'
                    }, {
                        name: '经营单位人数'
                    }, {
                        name: '加油员配置'
                    }, {
                        name: '加油机数量'
                    },
                ],
            }
        },
        methods: {
            add() {
                let obj = {};
                for (let i = 0; i < 4; i++) {
                    this.columns.push({
                        prop: 'service' + i,
                        label: '服务区' + i
                    });
                    obj['service' + i] = '';
                }
                ;
                this.tabData.forEach(i => {
                    Object.assign(i, obj);
                });
            }
        },
        components: {MyTable}
    }
</script>

<style scoped>

</style>