<template>
  <div class="huanggangTable">
    <div class="Btn">
      <div>
        <el-input
          style="width:140%"
          placeholder="请输入服务区"
          v-model="input"
          clearable
        ></el-input>
      </div>
      <div>
        <el-date-picker
          class="items"
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
      <div>
        <el-button type="primary" @click="inquire()">查询</el-button>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        align="center"
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="{ 'text-align': 'center' }"
        :span-method="arraySpanMethod"
        @row-click="serviceDetail"
        border
        style="width: 100%"
      >
        <el-table-column prop="id" label="服务区名称" width="180">
          <template slot-scope="{ row }">
            <span style="cursor: pointer" @click="serviceDetail(row)">{{
              row.id
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="高速名称"> </el-table-column>
        <el-table-column prop="amount1" label="车流量(辆)">
          <el-table-column prop="amount2" label="大车"> </el-table-column>
          <el-table-column prop="amount3" label="小车"> </el-table-column>
        </el-table-column>

        <el-table-column prop="amount3" label="收益(元)"> </el-table-column>
        <el-table-column prop="amount3" label=" 利润(元)"> </el-table-column>
        <el-table-column prop="amount3" label="坪效(元)"> </el-table-column>
        <el-table-column prop="amount3" label="面积(m)"> </el-table-column>
        <el-table-column prop="amount3" label="业态订单数">
          <el-table-column prop="amount3" label="加油"> </el-table-column>
          <el-table-column prop="amount3" label="小吃"> </el-table-column>
          <el-table-column prop="amount3" label="便利店"> </el-table-column>
          <el-table-column prop="amount3" label="餐饮"> </el-table-column>
        </el-table-column>
      </el-table>
      <div class="paging">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      value2: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      tableData: [
        {
          id: "A服务区",
          name: "A高数",
          amount1: 1000,
          amount2: 1000,
          amount3: 1000
        },
        {
          id: "A服务区",
          name: "A高数",
          amount1: 1000,
          amount2: 1000,
          amount3: 1000
        },
        {
          id: "A服务区",
          name: "A高数",
          amount1: 1000,
          amount2: 1000,
          amount3: 1000
        },
        {
          id: "A服务区",
          name: "A高数",
          amount1: 1000,
          amount2: 1000,
          amount3: 1000
        },
        {
          id: "A服务区",
          name: "A高数",
          amount1: 1000,
          amount2: 1000,
          amount3: 1000
        }
      ]
    };
  },
  methods: {
    serviceDetail(row) {
      this.$emit("isCom", "three");
    },
    inquire() {
      this.$emit("isShoww", true);
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // if (rowIndex === 0) {
      //      return [1, 2];
      // //   if (columnIndex === 0) {
      // //   } else if (columnIndex === 1) {
      // //     return [0, 0];
      // //   }
      // }
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
body /deep/ .el-picker-panel {
  background: red !important;
}
.items /deep/ .el-picker-panel__shortcut {
  display: block;
  width: 100%;
  border: 0;
  background-color: transparent;
  line-height: 28px;
  font-size: 50px;
  color: #5a5e66;
  padding-left: 12px;
  text-align: left;
  outline: 0;
  cursor: pointer;
}
.paging {
  text-align: right;
  margin: 2em 0;
}
.huanggangTable {
  .Btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
  }
}
</style>
