<template>
  <div class="businesstop">
    <!-- 营收开始 -->
    <el-collapse id="box1" v-model="revenue" @change="handleChange">
      <el-collapse-item
        :name="(i + 1).toString()"
        v-for="(item, i) of businessId"
        :key="i"
      >
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
            >{{ item.name }}</span
          >
        </template>
        <businessTopEcharts ref="busin" :businessId="item"></businessTopEcharts>
      </el-collapse-item>
    </el-collapse>
    <!-- 营收结束 -->
    <!-- 利润开始 -->
    <el-collapse id="box2" v-model="profit" @change="handleChange">
      <el-collapse-item
        :name="(i + 1).toString()"
        v-for="(item, i) of profitbusinessId"
        :key="i"
      >
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
            >{{ item.name }}</span
          >
        </template>
        <businessTopEcharts ref="busin" :businessId="item"></businessTopEcharts>
      </el-collapse-item>
    </el-collapse>
    <!-- 利润结束 -->
    <!-- 成本开始 -->
    <el-collapse id="box3" v-model="cost" @change="handleChange">
      <el-collapse-item
        :name="(i + 1).toString()"
        v-for="(item, i) of costbusinessId"
        :key="i"
      >
        <template slot="title">
          <span
            style="font-weight:bold;font-size:14px;color:#fff;margin-left:20px"
            >2020年成本</span
          >
        </template>
        <businessTopEcharts
          :businessId="item"
          :isshow="true"
        ></businessTopEcharts>
      </el-collapse-item>
    </el-collapse>
    <!-- 成本结束 -->
  </div>
</template>
<script>
import businessTopEcharts from "./businessTopEcharts";
export default {
  components: { businessTopEcharts },
  data() {
    return {
      revenue: ["1", "2"],
      profit: ["1", "2"],
      cost: ["1", "2"],
      businessId: [],
      profitbusinessId: [],
      costbusinessId: []
    };
  },
  methods: {
    handleChange(val) {
      console.log(val, "dianji");
      // this.$refs.busin.isechartsShow(data);
    },
    iconList(is) {
      if (is === 1) {
        let table;
        this.businessId.data.left[1].forEach(element => {
          table += `<tr><td>${element}</td></tr>`;
        });

        document.getElementById("HomeEchartsLeft").innerHTML =
          `<table width="100%" border="1">` + table + `</table>`;
      } else if (is === 2) {
      } else {
      }
    },
    isechartsShow(data) {
      this.$refs.busin.isechartsShow(data);
    }
  },
  mounted() {
    // window.addEventListener("scroll", function(){
    //     console.log('scrolling',456);
    // });
  }
};
</script>

<style lang="less" scoped>
.titleList {
  display: flex;
  justify-content: space-between;
  width: 20%;
  margin-left: 60%;
  span {
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
    color: #999;
    width: 30%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    margin: 10px 0;
  }
}
.businesstop /deep/ .el-collapse-item__wrap {
  background: transparent;
}
.businesstop /deep/ .el-collapse-item__header {
  background: #737aef;
  border-radius: 10px;
  color: #fff;
  border: 0;
  margin: 1em 0;
}
.businesstop /deep/ .el-icon-arrow-right:before {
  color: #fff;
  font-size: 20px;
  margin: 20px;
}
</style>
