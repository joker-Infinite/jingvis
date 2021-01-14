<template>
    <div class="container">
        <div class="nav" id="nav">
            <el-menu
                    :unique-opened="true"
                    :collapse="menuStatus % 2 === 0"
                    :default-active="key"
                    router
                    class="el-menu-vertical-demo"
                    @select="select"
            >
                <div class="oc" id="oc" style="text-align: right">
                    <i
                            :class="
              menuStatus % 2 === 0 ? 'el-icon-s-unfold' : 'el-icon-s-fold'
            "
                            @click="menuOC"
                    ></i>
                </div>
                <el-submenu
                        v-for="(item, index) in submenu"
                        :index="item.id"
                        :class="{ addTo: isActive == item.id }"
                        :key="index"
                >
                    <template slot="title">
                        <span slot="title">{{ item.label }}</span>
                    </template>
                    <el-menu-item
                            v-if="item.menuItemUrl[cIndex].charAt(0) !== '#'"
                            v-for="(cItem, cIndex) in item.menuItem"
                            :index="item.menuItemUrl[cIndex]"
                            :key="cIndex"
                    >
                        {{ cItem }}
                    </el-menu-item>
                    <el-submenu
                            v-for="(cItem, cIndex) in item.menuItem"
                            :index="item.menuItemUrl[cIndex]"
                            v-if="item.menuItemUrl[cIndex].charAt(0) === '#'"
                    >
                        <template
                                slot="title"
                                v-if="item.menuItemUrl[cIndex].charAt(0) === '#'"
                        >
                            {{ cItem }}
                        </template>
                        <el-menu-item
                                v-for="(sItem, sIndex) in item.childMenuItem"
                                :index="item.childMenuItemUrl[sIndex]"
                                v-if="item.menuItemUrl[cIndex].charAt(1) == 1"
                                :key="sIndex"
                        >
                            {{ sItem }}
                        </el-menu-item>
                        <el-menu-item
                                v-for="(sItem, sIndex) in item.childMenuItem"
                                :index="item.childMenuItemUrl[sIndex]"
                                v-if="item.menuItemUrl[cIndex].charAt(1) == 3"
                                :key="sIndex"
                        >
                            {{ sItem }}
                        </el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </div>
        <div class="con" id="con_">
            <router-view
                    :viewChange="menuStatus % 2 === 0"
                    @clickTable="clickTable"
                    @callback="callback"
            ></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                submenu: [],
                admin: [
                    {
                        id: "7",
                        label: "系统插件",
                        icon: '&#xe600;',
                        menuItem: [">>服务区录入", ">>服务区平面图"],
                        menuItemUrl: ['/widget/imgParameter', "/widget/serviceArea"]
                    },
                    {
                        id: "8",
                        label: "权限管理",
                        icon: '&#xe635;',
                        menuItem: [">>用户管理"],
                        menuItemUrl: ["/authorityManagement/userManagement"]
                    },
                    {
                        id: "9",
                        label: "系统设置",
                        icon: '&#xe616;',
                        menuItem: [">>菜单管理", ">>字典管理"],
                        menuItemUrl: [
                            "/systemSettings/menuManagement",
                            "/systemSettings/dataDictionary"
                        ]
                    },
                ],
                tagData: [],
                key: "/serviceArea/revenue",
                menuStatus: 1,
                isActive: "/serviceArea/revenue",
                openData: ""
            };
        },
        methods: {
            callback(i) {
                console.log(i);
            },
            clickTable(v) {
                this.setCookie(
                    document.cookie.split("=")[1].split("-")[0],
                    "/details/serviceDetails"
                );
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
            select(k, n, m) {
                if (k == "") {
                    let routeData = this.$router.resolve({
                        path: "/homeKanBan".replace("#", "")
                    });
                    window.open(routeData.href, "_blank");
                } else {
                    this.setCookie(k, "");
                }
            },
            getCookie() {
                let cookie = document.cookie;
                if (cookie) {
                    let path = cookie.split("=")[1].split("-");
                    this.key = path[0];
                    if (path[1] && path[1].length > 1) {
                        this.$router.push(path[1]);
                    } else {
                        this.$router.push(path[0]);
                    }
                }
            },
            setCookie(v, key) {
                this.key = v;
                document.cookie = "menu=" + v + "-" + key;
            }
        },
        mounted() {
            this.getCookie();
            this.submenu.push(...this.admin);
            let token = localStorage.getItem("token");
            token = token.split(" ");
            if (token[1] === "admin") {
                // this.submenu.push(...this.admin);
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
            min-width: 210px;
            height: 100%;
            overflow-y: scroll;
            transition: linear 0.3s;
            background: white;
            margin-right: 5px;
            box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.1);

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
            width: 89.5%;
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
