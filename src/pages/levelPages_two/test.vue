<template>
    <div class="body">
        <div class="left">
            <div class="content">
                <el-input placeholder="请输入关键字" v-model="filterText"></el-input>
                <div style="width: 100%;height: 1px;background: #d4d4d4;margin: 10px 0 0"></div>
                <el-tree
                        class="filter-tree"
                        :data="data"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        @node-click="nodeClick"
                        ref="tree"></el-tree>
            </div>
        </div>
        <div class="right">
            <component ref="common" :is="isComponent"></component>
        </div>
    </div>
</template>

<script>
    import item from './common/index'
    import navCommon from "./common/navCommon";

    export default {
        name: "test",
        components: {...item},
        data() {
            return {
                filterText: '',
                data: [
                    {
                        id: "A",
                        label: '一级 1',
                        children: [
                            {
                                id: 4,
                                label: '二级 1-1',
                            },
                            {
                                id: 9,
                                label: '三级 1-2'
                            },
                            {
                                id: 10,
                                label: '三级 1-3'
                            }
                        ]
                    },
                    {
                        id: "B",
                        label: '一级 2',
                        children: [{
                            id: 5,
                            label: '二级 2-1'
                        }, {
                            id: 6,
                            label: '二级 2-2'
                        }
                        ]
                    },
                    {
                        id: "C",
                        label: '一级 3',
                        children: [
                            {
                                id: 7,
                                label: '二级 3-1'
                            },
                            {
                                id: 8,
                                label: '二级 3-2'
                            }
                        ]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                isComponent: 'tabsCommon'
            }
        },
        methods: {
            nodeClick(data, node) {
                if (!data.children && data.id > 6) {
                    this.isComponent = 'navCommon';
                } else {
                    this.isComponent = 'tabsCommon';
                }
                this.$nextTick(_ => {
                    this.$refs['common'].refresh(data);
                })
            },
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },


    }
</script>

<style scoped lang="less">
    .body {
        width: 100%;
        height: 100%;
        background: rgb(93, 93, 93);
        position: fixed;

        .left {
            width: 20%;
            height: 100%;
            background: white;
            position: relative;
            float: left;

            .content {
                width: 96%;
                height: 96%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;

                .filter-tree {
                    height: 90%;
                }
            }

            /*.content /deep/ .el-input {
                width: 150px;

            }

            .content /deep/ .el-input > .el-input__inner {
                height: 20px;
                line-height: 20px;
            }*/
        }

        .right {
            width: 79%;
            height: 100%;
            background: #FFF;
            float: right;
            position: relative;
        }
    }
</style>