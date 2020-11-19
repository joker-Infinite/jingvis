<template>
  <div class="container">
    <div class="nav" id="nav">
      <el-menu
        :collapse="menuStatus % 2 === 0"
        :default-active="key"
        class="el-menu-vertical-demo"
        @select="select"
        @open="open"
        @close="close"
      >
        <div class="oc" id="oc" style="text-align: right">
          <i
            :class="
              menuStatus % 2 === 0 ? 'el-icon-s-unfold' : 'el-icon-s-fold'
            "
            @click="menuOC"
          ></i>
        </div>
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu v-for="item in submenu" :index="item.id">
          <template slot="title">
            <i :class="item.icon" v-if="item.id"></i>
            <span slot="title">{{ item.label }}</span>
          </template>
          <el-menu-item
            v-for="(cItem, cIndex) in item.menuItem"
            :index="item.id + '-' + cIndex"
            v-if="item.id !== '4'"
          >
            {{ cItem }}
          </el-menu-item>
          <el-submenu index="4-0" v-if="item.id === '4'">
            <template slot="title">
              中化交投
            </template>
            <el-menu-item index="4-0-0">加油站详情页</el-menu-item>
          </el-submenu>
          <el-menu-item index="4-1" v-if="item.id === '4'"
            >石化能源</el-menu-item
          >
          <el-menu-item index="4-2" v-if="item.id === '4'">新能源</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="con" id="con_">
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
          label: "服务区公司",
          icon: "el-icon-location",
          menuItem: [
            "数据总览",
            "黄冈分公司",
            "宜昌分公司",
            "孝感分公司",
            "十堰分公司",
            "恩施分公司",
            "咸宁分公司",
            "服务区对比"
          ]
        },
        {
          id: "3",
          label: "服务区业务",
          icon: "el-icon-s-help",
          menuItem: ["消费意愿", "服务区业态", "服务区对比"]
        },
        {
          id: "4",
          label: "能源公司",
          icon: "el-icon-video-camera-solid",
          menuItem: ["中化交投", "石化能源", "新能源"]
        },
        {
          id: "5",
          label: "能源业务",
          icon: "el-icon-office-building",
          menuItem: ["批发", "油品零售", "非油品零售", "直分销", "大宗采购"]
        },
        {
          id: "6",
          label: "传媒指标",
          icon: "el-icon-office-building",
          menuItem: ["广告详情"]
        },
        {
          id: "7",
          label: "商业指标",
          icon: "el-icon-office-building"
        }
      ],
      key: "",
      menuStatus: 1
    };
  },
  methods: {
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
        this.$router.push("/energy/energy");
      }
      if (v === "4") {
        this.$router.push("/media/media");
      }
      if (v === "5") {
        this.$router.push("/business/business");
      }
      if (v === "2-0") {
        this.$router.push("/serviceArea/huangGang");
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
