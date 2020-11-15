<template>
    <div class="container">
        <div class="nav">
            <el-menu
                    :default-active="key"
                    class="el-menu-vertical-demo"
                    @select="select"
                    @open="open"
                    @close="close">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu v-for="item in submenu" :index="item.id">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{item.label}}</span>
                    </template>
                    <el-menu-item v-for="(cItem,cIndex) in menuItem" :index="item.id+'-'+cIndex">{{cItem}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="con">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                submenu: [
                    {
                        id: "2",
                        label: "服务区指标",
                        icon: 'el-icon-location'
                    },
                    {
                        id: "3",
                        label: "能源指标",
                        icon: 'el-icon-s-help'
                    },
                    {
                        id: "4",
                        label: "传媒指标",
                        icon: 'el-icon-video-camera-solid'
                    },
                    {
                        id: "5",
                        label: "商业指标",
                        icon: 'el-icon-office-building'
                    },
                ],
                menuItem: ['黄冈分公司', '宜昌分公司', '孝感分公司', '十堰分公司', '恩施分公司', '咸宁分公司', '服务区对比'],
                key: '',
            }
        },
        methods: {
            /**
             * 菜单子节点事件
             * @param k 当前节点index
             * @param n 父节点及当前节点index
             * @param n 节点组件本身
             * */
            select(k, n, m) {
                this.clickMenu(k);
            },
            /**
             * 菜单父节点事件
             * */
            close(k) {
                this.key = k + '-0';
                this.clickMenu(k);
            },
            open(k) {
                this.key = k + '-0';
                this.clickMenu(k);
            },
            clickMenu(v) {
                 if (v === '1') {
                     this.$router.push('/');
                 }
                 if (v === '2') {
                     this.$router.push('/serviceArea/serviceArea');
                 }
                 if (v === '3') {
                     this.$router.push('/energy/energy');
                 }
                 if (v === '4') {
                     this.$router.push('/media/media');
                 }
                 if (v === '5') {
                     this.$router.push('/business/business');
                 }
                 if (v === '2-0') {
                     this.$router.push('/serviceArea/huangGang');
                 }
            }
        },
    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: left;

        .nav {
            width: 10%;
            min-width: 200px;
            height: 100%;
            background: #ffe438;
            overflow-y: scroll;
        }

        .nav::-webkit-scrollbar {
            display: none;
        }

        .nav /deep/ .el-menu {
            height: 100%;
        }

        .con {
            width: 90%;
            height: 100%;
        }
    }
</style>