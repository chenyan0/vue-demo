<template>
  <div>
    <el-table :data="tabledata" :default-sort = "{prop: 'id'}" style="width: 100%">
      <el-table-column prop="id" label="序号"   width="100"> </el-table-column>
      <el-table-column prop="date" label="活动时间" sortable show-overflow-tooltip> </el-table-column>
      <el-table-column prop="name" label="活动名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="region" label="活动区域"  width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="type" label="活动性质" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="resource" label="特殊资源" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="desc" label="活动形式" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <i class="el-icon-edit" v-if="status==='unfinished'" @click="handleEdit(scope.$index, scope.row)"></i>
          <i class="el-icon-delete" v-if="status==='finished' || status==='canceled'|| status==='unfinished'" @click="handleDelete(scope.$index, scope.row)"></i>
          <i class="el-icon-share" @click="handleDelete(scope.$index, scope.row)"></i>
        </template>
      </el-table-column>
    </el-table>
    <this-dialog :is-show="isShowDialog" @on-close="closeDialog">
      <el-form :model="form">
        <el-form-item label="活动时间" :label-width="formLabelWidth">
          <el-date-picker v-model="form.date" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-input v-model="form.region" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="活动性质" :label-width="formLabelWidth">
          <el-input v-model="form.type" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="特殊资源" :label-width="formLabelWidth">
          <el-input v-model="form.resource" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动形式" :label-width="formLabelWidth">
          <el-input v-model="form.desc" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align:right">
        <el-button>取 消</el-button>
        <el-button type="primary" @click="closeDialog">确 定</el-button>
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
    tabledata: {
      type: Array,
      default: [{
        id:1,
        date: '2016-05-02',
        name: '王小虎',
        region: '上海市普陀区金沙江路 1518 弄',
        type: '上海市普陀区金沙江路 1518 弄',
        resource: '上海市普陀区金沙江路 1518 弄',
        desc: '上海市普陀区金沙江路 1518 弄'
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
        name: '',
        date: '',
        region: '',
      },
      formLabelWidth: '120px'
    };
  },
  methods: {
    handleEdit(index, row) {
      this.isShowDialog = true;
      this.form=Object.assign({}, row);  //不能直接连等复制，需要指向一个新的引用
    },
    closeDialog(index, row) {
      this.isShowDialog = false;
      // const index = this.tabledata.indexOf(row); //找到修改的数据在list中的位置
      // this.tabledata.splice(index, 1,this.updatedData);
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.tabledata.splice(index, 1);
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

