<template>
    <div class="container">
        <div class="nav" id="nav">
            <el-menu
                    :unique-opened="true"
                    :collapse="menuStatus % 2 === 0"
                    :default-active="key "
                    class="el-menu-vertical-demo"
                    @select="select"
                    @open="open"
                    @close="close">
                <div class="oc" id="oc" style="text-align: right">
                    <i :class=" menuStatus % 2 === 0 ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                       @click="menuOC"></i>
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
                            :index="item.id + '-' + cIndex">
                        {{ cItem }}
                    </el-menu-item>
                    <!--  <el-submenu index="4-0" v-if="item.id === '4'">
                          <template slot="title">
                              中化交投
                          </template>
                          <el-menu-item index="4-0-0">加油站详情页</el-menu-item>
                      </el-submenu>
                      <el-menu-item index="4-1" v-if="item.id === '4'">石化能源
                      </el-menu-item>
                      <el-menu-item index="4-2" v-if="item.id === '4'">新能源</el-menu-item>-->
                </el-submenu>
            </el-menu>
        </div>
        <div class="con" id="con_">
            <!--<div class="history">
                <el-tag :closable="tagData.length !==1"
                        v-for="it in tagData"
                        :class="{'is-active':key === it.index}"
                        @click="tagClick(it)"
                        @close="tagClose(it)">
                    {{it.content}}
                </el-tag>
            </div>-->
            <router-view :viewChange="menuStatus % 2 === 0" @clickTable="clickTable"></router-view>
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
                        ],
                        menuItemUrl: [
                            '/serviceArea/serviceArea',
                            '/serviceArea/huangGang',
                            '/serviceArea/yiChang',
                            '/serviceArea/xiaoGan',
                            '/serviceArea/shiYan',
                            '/serviceArea/enShi',
                            '/serviceArea/xianNing',]
                    },
                    {
                        id: "3",
                        label: "服务区业务",
                        img: require("../assets/Home/10.png"),
                        imgActive: require("../assets/Home/3.png"),
                        menuItem: ["消费意愿", "服务区业态", "服务区对比"],
                        menuItemUrl: [
                            '',
                            '/serviceArea/FWQYeTai',
                            '/comparison/comparison'
                        ]
                    },
                    {
                        id: "4",
                        label: "能源公司",
                        img: require("../assets/Home/8.png"),
                        imgActive: require("../assets/Home/9.png"),
                        menuItem: ['数据总览', "中化交投", "石化能源", "新能源"],
                        menuItemUrl: [
                            '/energy/energy',
                            '/energy/ZHJiaoTou',
                            '/comparison/comparison'
                        ]
                    },
                    {
                        id: "5",
                        label: "能源业务",
                        img: require("../assets/Home/6.png"),
                        imgActive: require("../assets/Home/7.png"),
                        menuItem: ["批发", "油品零售", "非油品零售", "直分销", "大宗采购"],
                        menuItemUrl: [
                            '/energy/piFa',
                            '/energy/YPLingShou',
                            '/energy/FYPLingShou'
                        ]
                    },
                    {
                        id: "6",
                        label: "传媒指标",
                        img: require("../assets/Home/4.png"),
                        imgActive: require("../assets/Home/5.png"),
                        menuItem: ["广告详情"],
                        menuItemUrl: [
                            '/media/media',
                        ]
                    },
                    {
                        id: "7",
                        label: "商业指标",
                        img: require("../assets/Home/4.png"),
                        imgActive: require("../assets/Home/5.png"),
                    }
                ],
                tagData: [],
                key: "",
                menuStatus: 1,
                isActive: '2-0',
                openData: ''
            }
        },
        methods: {
            tagClick(v) {
                this.isActive = v.index.charAt(0);
                this.key = v.index;
                this.$router.push(v.path);
                this.setCookie(v.index);
            },
            tagClose(v) {
                this.tagData.splice(this.tagData.indexOf(v), 1);
            },
            clickTable(v) {
                let i = '';
                if (v) {
                    i = this.openData + '-d';
                }
                if (!v) {
                    i = this.openData;
                }
                document.cookie = 'menu=' + i;
            },
            setTag(v) {
                if (v.length === 1) {
                    v = v + '-0';
                }
                let arr = v.split('-');
                let obj = {};
                let indexs = '';
                this.tagData.forEach(i => {
                    indexs += i.index + ',';
                });
                this.submenu.forEach(i => {
                    if (i.id == arr[0] && arr[1] && indexs.indexOf(v) === -1) {
                        obj = {
                            content: i.menuItem[arr[1]],
                            path: this.$route.path,
                            index: v
                        };
                        this.tagData.push(obj);
                    }
                })
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
                this.key = k;
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
                this.setCookie(v);
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
                if (v === "4-0") {
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
                if (v === "4-1") {
                    this.$router.push("/energy/ZHJiaoTou");
                }
                /*if (v === "4-0-0") {
                    this.$router.push("/energy/JYZXiangQing");
                }*/
                if (v === "5-0") {
                    this.$router.push("/energy/piFa");
                }
                if (v === "5-1") {
                    this.$router.push("/energy/YPLingShou");
                }
                if (v === "5-2") {
                    this.$router.push("/energy/FYPLingShou");
                }
                this.setTag(v);
            },
            getCookie() {
                let cookie = document.cookie;
                let arr = [];
                let arr_ = [];
                if (cookie) {
                    arr = cookie.split('=');
                    this.key = arr[1];
                    arr_ = arr[1].split('-');
                    if (arr_.length === 2) {
                        this.clickMenu(arr_[0] + '-' + arr_[1]);
                    }
                    if (arr_.length === 3) {
                        this.key = arr_[0] + '-' + arr_[1];
                        let i = this.openData ? this.openData : this.key + '-d';
                        document.cookie = 'menu=' + i;
                        this.$router.push("/details/details");
                    }
                    this.isActive = this.key.charAt(0);
                } else {
                    this.key = '2-0';
                    this.isActive = this.key.charAt(0);
                }
            },
            setCookie(v) {
                let open = v;
                if (open.length === 1 && open != 1) {
                    open = open + '-0';
                }
                this.openData = open;
                document.cookie = 'menu=' + open;
            },
        },
        mounted() {
            this.getCookie();
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
            min-width: 150px;
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
                background: #1d7dca !important;
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
            /*height: calc(100% - 40px);*/
            height: 100%;
            background: #f3f7ff;

            .history {
                z-index: 1111;
                width: 85%;
                margin-left: 1.3%;
                height: 40px;
                background: #f3f7ff;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                overflow-x: scroll;
            }

            .history::-webkit-scrollbar {
                display: none;
            }

            .history /deep/ .el-tag {
                margin: 4px;
                border-radius: 0;
                cursor: pointer;
                min-width: 75px;
                text-align: center;
            }

            .is-active {
                background: #1d7dca;
                color: white;
                border: 1px solid #1d7dca;
            }

            .is-active /deep/ .el-tag__close {
                color: white;
            }
        }
    }
</style>
