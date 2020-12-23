<template>
    <div class="con">
       <!-- <div class="view">
            <el-menu default-active="1-0" class="el-menu-vertical-demo">
                <el-submenu v-for="(fi,fx) in menu" :key="fx" :index="fx+''" :class="{'del':fi.menuName=='首页'}">
                    <template slot="title">
                        {{fi.menuName}}
                    </template>
                    <el-menu-item v-if="fi.child.length>0" v-for="(si,sx) in fi.child" :index="fx+'-'+sx">
                        {{si.menuName}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="option">
            <el-input contenteditable="true" type="textarea" resize="none" rows="50"
                      v-model="JSON.stringify(menu)"></el-input>
        </div>-->
        <my-dialog></my-dialog>
    </div>
</template>

<script>
    import MyDialog from "./myDialog";
    export default {
        name: "temporary",
        components: {MyDialog},
        data() {
            return {
                menu: [],
            }
        },
        /*methods: {
            async getMenuItem(data) {
                for (let i = 0; i < data.length; i++) {
                    await this.$axios.get('/bpi/admin/jt_menu/list_menu', {params: {menuId: data[i].menuId}}).then(v => {
                        if (v.data.data && v.data.data.length === 0) {

                        }
                        if (v.data.data && v.data.data.length > 0) {
                            data[i].child = v.data.data;
                        }
                        this.menu = [];
                        this.menu = data;
                    });
                }
            }
        },
        async created() {
            let data = [];
            const res = await this.$axios.get('/bpi/admin/jt_menu/list_menu', {params: {menuId: 0}});
            this.menu = data = res.data.data;
            await this.getMenuItem(data);
        }*/
    }
</script>

<style scoped lang="less">
    .con {
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: row;

        .view {
            width: 70%;
            height: 100%;
            background: #99a9bf;
        }

        .view /deep/ .el-menu > .del > .el-submenu__title > .el-submenu__icon-arrow {
            display: none;
        }

        .option {
            width: 30%;
            height: 100%;
            background: #A8D9FF;
        }
    }
</style>