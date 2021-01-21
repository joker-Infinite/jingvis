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
                       operationsWidth="110"
                       :operations="operations">
        </my-table-base>

        <my-dialog width="1200px" height="350px" :title="name" :visible.sync="visible" :closeOnClickModal="true">
            <view-img :url="url" :json="json"></view-img>
        </my-dialog>
    </div>
</template>

<script>
    import MyTableBase from "../../components/common/myTableBase";
    import MyDialog from "../../components/common/myDialog";
    import ViewImg from "./common/viewImg";

    export default {
        name: "pictureList",
        components: {ViewImg, MyDialog, MyTableBase},
        data() {
            return {
                tableData: [],
                pageSizes: [20, 50, 100, 200],
                operations: [
                    {
                        name: '查看', callback: v => {
                            this.url = v.servicePicture;
                            this.json = v.serviceJson;
                            this.name = v.serviceName + '-' + v.serviceDirtion
                            this.visible = true;
                        }
                    },
                    {name: '删除', type: 'danger'},
                ],
                columns: [
                    {prop: 'serviceName', label: '名称', width: '200'},
                    {prop: 'serviceDirtion', label: '方向', width: '200'},
                    {prop: 'servicePicture', label: '图片', width: '150'},
                    {prop: 'serviceJson', label: 'JSON'},
                ],
                size: 20,
                current: 1,
                totalNum: 0,
                visible: false,
                url: '',
                json: '',
                name: ''
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
