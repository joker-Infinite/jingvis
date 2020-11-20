<template>
  <div class="table">
    <el-table
      :data="data"
      :height="parseInt(height) - 200 + 'px'"
      style="width: 100%"
      :border="border"
      highlight-current-row
      @current-change="singleChoice"
      @selection-change="multipleChoice"
    >
      <el-table-column
        v-if="multiple"
        align="center"
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndex"
        label="序号"
        align="center"
        type="index"
        width="50"
      >
      </el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :prop="item.prop"
        :label="item.label"
        :align="item.align ? item.align : 'center'"
        :width="item.width ? item.width : ''"
      >
        <el-table-column
          v-if="item.children && item.children.length > 0"
          v-for="(cit, cix) in item.children"
          :key="cix"
          :align="cit.align ? cit.align : 'center'"
          :prop="cit.prop"
          :label="cit.label"
        ></el-table-column>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="isPagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[20, 50, 100]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "myTable",
  props: {
    data: {
      type: Array,
      default: []
    },
    columns: {
      type: Array,
      default: []
    },
    multiple: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: "400px"
    },
    isPagination: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage1: 1,
      currentPage2: 2,
      currentPage3: 3,
      currentPage4: 4
    };
  },
  methods: {
    singleChoice(v) {
      this.$emit("selectionChange", v);
    },
    multipleChoice(v) {
      this.$emit("selectionChange", v);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped lang="less">
.table {
  padding: 10px;
}

.table /deep/ .el-pagination {
  padding: 5px;
  text-align: right;
}
</style>
