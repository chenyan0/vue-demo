<template>
  <el-tabs v-model="activeName">
    <el-tab-pane :label="'未完成('+tableData.length+')'" name="first">
      <v-table :table-data="tableData"></v-table>
    </el-tab-pane>
    <el-tab-pane :label="'已完成('+tableData.length+')'" name="second">
      <v-table :table-data="tableData"></v-table>
    </el-tab-pane>
    <el-tab-pane :label="'已取消('+tableData.length+')'" name="third">
      <v-table :table-data="tableData"></v-table>
    </el-tab-pane>
  
  </el-tabs>
</template>
<script>
import VTable from './base/table.vue'
export default {
  components: {
    VTable: VTable
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎a',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎b',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎c',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎d',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      activeName: 'first'
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};

</script>
<style lang="scss" scoped>
@import '../styles/todo.scss';
</style>

