<template>
    <div style="width: 100%;height: 100%">
        <my-table-base ref="myTableBase"
                       @size-change="sizeChange"
                       @current-change="currentChange"
                       chooseItem='single'
                       :totalNum="totalNum"
                       :pageSizes="pageSizes"
                       :columns="columns"
                       :table-data="tableData"
                       operationsWidth="50"
                       :operations="operations">
        </my-table-base>
    </div>
</template>

<script>
    import MyTableBase from "../../components/common/myTableBase";

    export default {
        name: "pictureList",
        components: {MyTableBase},
        data() {
            return {
                tableData: [],
                pageSizes: [20, 50, 100, 200],
                operations: [
                    {name: '删除', type: 'danger'}
                ],
                columns: [
                    {prop: 'serviceName', label: '名称', width: '200'},
                    {prop: 'serviceDirtion', label: '方向', width: '200'},
                    {prop: 'servicePicture', label: '图片', width: '150'},
                    {prop: 'serviceJson', label: 'JSON'},
                ],
                size: 20,
                current: 1,
                totalNum: 0
            }
        },
        methods: {
            sizeChange(v) {
                this.size = v;
                this.refresh('pagination', this.current, v);
            },
            currentChange(v) {
                this.current = v;
                this.refresh('pagination', v, this.size);
            },
            refresh(p, c, s) {
                let params = {pageNum: 1, pageSize: 20};
                if (p === 'pagination') {
                    params = {
                        pageNum: c,
                        pageSize: s,
                    }
                }
                this.$axios.get("/api/admin/jt_service/service_plan_list", {
                    params: params
                }).then(res => {
                    let data = res.data.list;
                    this.totalNum = res.data.total;
                    this.tableData = data;
                    this.$nextTick(_ => {
                        this.$refs['myTableBase'].refreshScroll();
                    })
                })
            }
        },
        mounted() {
            this.refresh();
        }
    };
</script>

<style scoped></style>
