<template>
  <div>
    
    <el-table :data="tableData"  style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="事项说明" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">

          <el-button size="small"  @click="dialogFormVisible =true">编辑</el-button>
          <el-button size="small"  type="danger" @click="confirm(scope.$index, scope.row)" >删除</el-button>
          <el-button size="small"  type="warning" @click="handleDelete(scope.$index, scope.row)">取消</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="行程安排" :visible.sync="dialogFormVisible" :modal-append-to-body="false" width="30%">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.date" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="事项说明" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
  //   status:{
  //     type:String,
  //     default:''
  //   },
    tableData: {
      type: Array,
      default: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  data() {
    return {
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
      dialogFormVisible: false,
      form: {
        name: '',
        date: '',
        address: '',

      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    confirm(index, row) {
         console.log(index, row);
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

