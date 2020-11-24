<template>
    <div class="container">
        <div class="nav" id="nav">
            <el-menu
                    :collapse="menuStatus % 2 === 0"
                    :default-active="key"
                    class="el-menu-vertical-demo"
                    @select="select"
                    @open="open"
                    @close="close">
                <div class="oc" id="oc" style="text-align: right">
                    <i :class=" menuStatus % 2 === 0 ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                       @click="menuOC"
                    ></i>
                </div>
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu v-for="(item,index) in submenu" :index="item.id"
                            :class="{'addTo':isActive==item.id}">
                    <template slot="title">
                        <img :src="isActive==item.id?item.imgActive:item.img"
                             style="width: 20px;height: 20px;margin-right: 5px"/>
                        <span slot="title">{{ item.label }}</span>
                    </template>
                    <el-menu-item
                            v-for="(cItem, cIndex) in item.menuItem"
                            :index="item.id + '-' + cIndex"
                            v-if="item.id !== '4'">
                        {{ cItem }}
                    </el-menu-item>
                    <el-submenu index="4-0" v-if="item.id === '4'">
                        <template slot="title">
                            中化交投
                        </template>
                        <el-menu-item index="4-0-0">加油站详情页</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="4-1" v-if="item.id === '4'">石化能源
                    </el-menu-item>
                    <el-menu-item index="4-2" v-if="item.id === '4'">新能源</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="con" id="con_">
            <router-view :viewChange="menuStatus % 2 === 0"></router-view>
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
                        label: "服务区公司",
                        img: require("../assets/Home/2.png"),
                        imgActive: require("../assets/Home/1.png"),
                        menuItem: [
                            "数据总览",
                            "黄冈分公司",
                            "宜昌分公司",
                            "孝感分公司",
                            "十堰分公司",
                            "恩施分公司",
                            "咸宁分公司",
                        ]
                    },
                    {
                        id: "3",
                        label: "服务区业务",
                        img: require("../assets/Home/10.png"),
                        imgActive: require("../assets/Home/3.png"),
                        menuItem: ["消费意愿", "服务区业态", "服务区对比"]
                    },
                    {
                        id: "4",
                        label: "能源公司",
                        img: require("../assets/Home/8.png"),
                        imgActive: require("../assets/Home/9.png"),
                        menuItem: ["中化交投", "石化能源", "新能源"]
                    },
                    {
                        id: "5",
                        label: "能源业务",
                        img: require("../assets/Home/6.png"),
                        imgActive: require("../assets/Home/7.png"),
                        menuItem: ["批发", "油品零售", "非油品零售", "直分销", "大宗采购"]
                    },
                    {
                        id: "6",
                        label: "传媒指标",
                        img: require("../assets/Home/4.png"),
                        imgActive: require("../assets/Home/5.png"),
                        menuItem: ["广告详情"]
                    },
                    {
                        id: "7",
                        label: "商业指标",
                        img: require("../assets/Home/4.png"),
                        imgActive: require("../assets/Home/5.png"),
                    }
                ],
                key: "",
                menuStatus: 1,
                isActive: '2-0'
            };
        },
        methods: {
            mouseOver(v) {
                console.log('v');
                console.log(v);
            },
            menuOC() {
                this.menuStatus++;
                let nav = document.querySelector("#nav");
                let con = document.querySelector("#con_");
                if (this.menuStatus % 2 === 0) {
                    Object.assign(nav.style, {
                        minWidth: "0",
                        width: "64px"
                    });
                    Object.assign(con.style, {
                        width: "100%"
                    });
                } else {
                    Object.assign(nav.style, {
                        minWidth: "200px",
                        width: "10%"
                    });
                    Object.assign(con.style, {
                        width: "90%"
                    });
                }
            },
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
                this.key = k + "-0";
                this.clickMenu(k);
            },
            open(k) {
                this.key = k + "-0";
                this.clickMenu(k);
            },
            clickMenu(v) {
                console.log(v)
                this.isActive = v.charAt(0);
                if (v === "1") {
                    let routeData = this.$router.resolve({
                        path: "/homeKanBan".replace("#", "")
                    });
                    window.open(routeData.href, "_blank");
                }
                if (v === "2") {
                    this.$router.push("/serviceArea/serviceArea");
                }
                if (v === "3") {

                }
                if (v === "4") {
                    this.$router.push("/energy/energy");
                }
                if (v === "6") {
                    this.$router.push("/media/media");
                }
                if (v === "6-0") {
                    this.$router.push("/media/media");
                }
                if (v === "5") {
                    this.$router.push("/energy/piFa");
                }
                if (v === "2-0") {
                    this.$router.push("/serviceArea/serviceArea");
                }
                if (v === "2-1") {
                    this.$router.push("/serviceArea/huangGang");
                }
                if (v === "2-2") {
                    this.$router.push("/serviceArea/yiChang");
                }
                if (v === "2-3") {
                    this.$router.push("/serviceArea/xiaoGan");
                }
                if (v === "2-4") {
                    this.$router.push("/serviceArea/shiYan");
                }
                if (v === "2-5") {
                    this.$router.push("/serviceArea/enShi");
                }
                if (v === "2-6") {
                    this.$router.push("/serviceArea/xianNing");
                }
                if (v === "3-1") {
                    this.$router.push("/serviceArea/FWQYeTai");
                }
                if (v === "3-2") {
                    this.$router.push("/comparison/comparison");
                }
                if (v === "4-0") {
                    this.$router.push("/energy/ZHJiaoTou");
                }
                if (v === "4-0-0") {
                    this.$router.push("/energy/JYZXiangQing");
                }
                if (v === "5-0") {
                    this.$router.push("/energy/piFa");
                }
                if (v === "5-1") {
                    this.$router.push("/energy/YPLingShou");
                }
                if (v === "5-2") {
                    this.$router.push("/energy/FYPLingShou");
                }
            }
        }
    };
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
            min-width: 200px;
            height: 100%;
            overflow-y: scroll;
            transition: linear 0.3s;
            background: white;

            .oc {
                margin-right: 20px;
            }

            .oc > i {
                font-size: 20px;
                line-height: 25px;
                cursor: pointer;
                color: #909399;
            }

            .addTo {
                background: #737aef !important;
            }

            .addTo > .el-submenu__title > span {
                color: white;
            }

            .addTo /deep/ .el-submenu__title > i {
                color: white !important;
            }
        }

        .nav::-webkit-scrollbar {
            display: none;
        }

        .nav /deep/ .el-menu {
            background: white;
            transition: linear 0.3s;
            border-right: none;
        }

        .con {
            width: 90%;
            height: 100%;
            background: #f3f7ff;
            transition: linear 0.3s;
        }
    }
</style>
