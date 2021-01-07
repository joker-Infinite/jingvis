<template>
    <my-table-base chooseItem="single"
                   :gridIndex="false"
                   :operations="operations"
                   :columns="columns"
                   operationsWidth="100px"
                   :data="tableData"
                   :buttons="buttons"
                   @selection-change="selectionChange"></my-table-base>
</template>

<script>
    import MyTableBase from "../../components/common/myTableBase";

    export default {
        name: "menuManagement",
        components: {MyTableBase},
        data() {
            return {
                columns: [
                    {prop: 'a', label: '名称', width: '100px'},
                    {prop: 'b', label: '图标'},
                    {prop: 'c', label: '类型'},
                    {prop: 'd', label: '排序'},
                    {prop: 'e', label: '路由'},
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
                        callback: _ => {
                        }

                    },
                    {
                        name: '删除',
                        callback: _ => {
                        }
                    },
                ]
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