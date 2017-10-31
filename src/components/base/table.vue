<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="intro" label="事项说明"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" v-if="status==='unfinished'" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" v-if="status==='finished' || status==='canceled'|| status==='unfinished'" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="small" v-if="status==='unfinished' " type="warning" @click="handleDelete(scope.$index, scope.row)">取消</el-button>
        </template>
      </el-table-column>
    </el-table>
    <this-dialog :is-show="isShowDialog" @on-close="closeDialog">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.date" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="事项说明" :label-width="formLabelWidth">
          <el-input v-model="form.intro" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align:right">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </this-dialog>
  </div>
</template>

<script>
import dialog from './dialog.vue';
export default {
  props: {
    status: {
      type: String,
      default: ''
    },
    tableData: {
      type: Array,
      default: [{
        date: '2016-05-02',
        intro: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  components: {
    thisDialog: dialog
  },
  data() {
    return {
      isShowDialog: false,
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      form: {
        intro: '',
        date: '',
        address: '',
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    handleEdit(index, row) {
      this.isShowDialog = true
      this.form.date = row.date;
      this.form.intro = row.intro;
      this.form.address = row.address;
    },
    closeDialog() {
      this.isShowDialog = false;
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该行程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }

  }
}
</script>

