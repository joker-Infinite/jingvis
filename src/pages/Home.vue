<template>
  <div class="container">
    <div class="nav" id="nav">
      <el-menu
              :unique-opened="true"
              :collapse="menuStatus % 2 === 0"
              :default-active="key"
              router
              class="el-menu-vertical-demo"
              @select="select">
        <div class="oc" id="oc" style="text-align: right">
          <i :class=" menuStatus % 2 === 0 ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
             @click="menuOC"></i>
        </div>
        <el-menu-item index=''>
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu v-for="(item,index) in submenu" :index="item.id"
                    :class="{'addTo':isActive==item.id}"
                    :key="index">
          <template slot="title">
            <img :src="isActive==item.id?item.imgActive:item.img"
                 style="width: 20px;height: 20px;margin-right: 5px"/>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item
                  v-if="item.menuItemUrl[cIndex].charAt(0)!=='#'"
                  v-for="(cItem, cIndex) in item.menuItem"
                  :index="item.menuItemUrl[cIndex]"
                  :key="cIndex">
            {{cItem}}
          </el-menu-item>
          <el-submenu v-for="(cItem, cIndex) in item.menuItem" :index="item.menuItemUrl[cIndex]"
                      v-if="item.menuItemUrl[cIndex].charAt(0)==='#'">
            <template slot="title" v-if="item.menuItemUrl[cIndex].charAt(0)==='#'"> {{ cItem }}</template>
            <el-menu-item v-for="(sItem,sIndex) in item.childMenuItem"
                          :index="item.childMenuItemUrl[sIndex]"
                          v-if="item.menuItemUrl[cIndex].charAt(1)==1"
                          :key="sIndex">
              {{sItem}}
            </el-menu-item>
            <el-menu-item v-for="(sItem,sIndex) in item.childMenuItem"
                          :index="item.childMenuItemUrl[sIndex]"
                          v-if="item.menuItemUrl[cIndex].charAt(1)==3"
                          :key="sIndex">
              {{sItem}}
            </el-menu-item>
          </el-submenu>
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
						label: "服务区事业部",
						img: require("../assets/Home/2.png"),
						imgActive: require("../assets/Home/1.png"),
						menuItem: [
							">>服务区比对",
							">>服务区营收",
							">>服务区利润",
							">>服务区成本",
							// ">>预算控制",
							">>基础信息",
							">>业态结构",
							">>回款情况",
							">>供应商",//
							">>用户评价",//
							">>服务区片区",
							">>服务区线路",
						],
						menuItemUrl: [
							'/serviceArea/comparison',
							'/serviceArea/revenue',
							'/serviceArea/profit',
							'/serviceArea/costing',
							'/serviceArea/basicInformations',
							'/serviceArea/construction',
							'/serviceArea/rateOfReturn',
							'/serviceArea/supplier',
							'/serviceArea/comment',
							'#1',
							'#2',
						],
						childMenuItem: [
							'>>>黄冈分公司',
							'>>>恩施分公司',
							'>>>宜昌分公司',
							'>>>咸宁分公司',
							'>>>孝感分公司',
							'>>>十堰分公司',
						],
						childMenuItemUrl: [
							"/serviceArea/huangGang",
							'/serviceArea/enShi',
							'/serviceArea/yiChang',
							'/serviceArea/xianNing',
							'/serviceArea/xiaoGan',
							'/serviceArea/shiYan',
						],
					},
					{
						id: "3",
						label: "能源事业部",
						img: require("../assets/Home/10.png"),
						imgActive: require("../assets/Home/3.png"),
						menuItem: [
							">>能源营收",
							">>能源利润",
							">>预算控制",
							">>批零差价",
							">>能源零售",
							">>油品批发",
							">>应收账款",
							">>油库来源",
							">>能源子公司",
							">>能源线路",],
						menuItemUrl: [
							"/energy/energyrevenue",
							"/energy/profit",
							"/energy/budgetControl",
							"/energy/wholesale",
							"/energy/gasRetail",
							"/energy/gasWholesale",
							"/energy/accountsReceivable",
							"/energy/gasSource",
							"#3",
							"#4",
						],
						childMenuItem: [
							'>>>新能源',
							'>>>中石化',
							'>>>中化交投',
							'>>>国储',
							'>>>高路油站',
							'>>>荆港嘉瑞',
						],
						childMenuItemUrl: [
							"/energy/xinNengYuan",
							"/energy/zhongShiHua",
							"/energy/zhongHuaJiaoTou",
							"/energy/guoChu",
							"/energy/gaoLuYouZhan",
							"/energy/jingGangJiaRui",
						],
					},
					/*  {
                id: "4",
                label: "能源公司",
                img: require("../assets/Home/8.png"),
                imgActive: require("../assets/Home/9.png"),
                menuItem: ['>>数据总览', ">>中化交投", ">>石化能源", ">>新能源"],
                menuItemUrl: [
                    '/energy/energy',
                    '/energy/ZHJiaoTou',
                    '/comparison/comparison',
                    '/comparison/comparison'
                ]
            },
            {
                id: "5",
                label: "能源业务",
                img: require("../assets/Home/6.png"),
                imgActive: require("../assets/Home/7.png"),
                menuItem: [">>批发", ">>油品零售", ">>非油品零售", ">>直分销", ">>大宗采购"],
                menuItemUrl: [
                    '/energy/piFa',
                    '/energy/YPLingShou',
                    '/energy/FYPLingShou',
                    '/energy/FYPLingShou',
                    '/energy/FYPLingShou',
                ]
            },*/
					{
						id: "6",
						label: "传媒指标",
						img: require("../assets/Home/4.png"),
						imgActive: require("../assets/Home/5.png"),
						menuItem: [">>广告详情"],
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
				key: "/serviceArea/revenue",
				menuStatus: 1,
				isActive: '/serviceArea/revenue',
				openData: ''
			}
		},
		methods: {
			clickTable(v) {
				this.setCookie(document.cookie.split('=')[1].split('-')[0], '/details/details')
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
				if (k == '') {
					let routeData = this.$router.resolve({
						path: "/homeKanBan".replace("#", "")
					});
					window.open(routeData.href, "_blank");
				} else {
					this.setCookie(k, '')
				}
			},
			getCookie() {
				let cookie = document.cookie;
				if (cookie) {
					let path = cookie.split('=')[1].split('-');
					this.key = path[0];
					if (path[1] && path[1].length > 1) {
						this.$router.push(path[1])
					} else {
						this.$router.push(path[0])
					}
				}
			},
			setCookie(v, key) {
				this.key = v;
				document.cookie = 'menu=' + v + '-' + key;
			}
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
      min-width: 210px;
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
