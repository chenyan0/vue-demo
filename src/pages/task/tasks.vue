<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动中心</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
     <el-button type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">导出excel</el-button>
    <el-button type="default" icon="plus"><router-link :to="{ path: '/addTask' }" tag="span"> 添加</router-link></el-button>
    <div class="grid-content bg-purple-light">
      <el-tabs v-model="activeName" @tab-click="tabClick">
        <el-tab-pane v-for="(item,index) in tabPanel " :key="item.name" :label="item.title" :name="item.name">
          <v-table :tabledata="tableData"  :status="item.name" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"></v-table>
          <v-pagination :total="100" :pageIndex="2" @cur-change="currentChange"></v-pagination>
        </el-tab-pane>
      </el-tabs>
      <v-dialog :is-show="isShowDialog" @on-close="closeDialog">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import API from "../../api/api";
const api = new API();
import Vdialog from "../../components/base/dialog.vue";
import VTable from "../../components/base/table.vue";
import VPagination from "../../components/base/pagination";
export default {
  components: {
    VTable: VTable,
    VDialog: Vdialog,
    VPagination: VPagination
  },
  data() {
    return {
      isShowDialog: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
        date1: [
          { type: "date", required: true, message: "请选择日期", trigger: "change" }
        ],
        date2: [
          { type: "date", required: true, message: "请选择时间", trigger: "change" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [{ required: true, message: "请选择活动资源", trigger: "change" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      tabPanel: [
        {
          title: "未完成",
          name: "unfinished"
        },
        {
          title: "已完成",
          name: "finished"
        }
      ],
      tableData: [],
      activeName: "unfinished",
      loading: true,
      downloadLoading: false
    };
  },
  methods: {
    handleDownload() {
      this.downloadLoading = true;
      require.ensure([], () => {
        const { export_json_to_excel } = require("../../vendor/Export2Excel");
        const tHeader = ["序号", "时间", "名称", "区域", "性质", "特殊资源", "活动形式"];
        const filterVal = [
          "id",
          "date",
          "name",
          "region",
          "type",
          "resource",
          "desc"
        ];
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "活动列表Excel");
        this.downloadLoading = false;
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    closeDialog() {
      this.isShowDialog = false;
    },

    getLists() {
      this.loading = true;
      let params = {
        api: "/api/tasks",
        param: "exec xFool_p_getapp '',1"
      };
      let that = this;
      api
        .getTask(params)
        .then(res => {
          if (res) {
            setTimeout(function() {
              that.loading = false;
              that.tableData = JSON.parse(res.data).tasks;
            }, 1000);
          }
        })
        .catch(function(err) {
          that.loading2 = false;
          api.reqFail(that, "获取列表失败请刷新");
        });
    },
    tabClick() {
      this.getLists();
    },
    currentChange(val) {
      console.log(val);
      this.loading = true;
      let params = {
        api: "/api/tasks/paged",
        data: {
          pageIndex: val
        }
      };
      let that = this;
      api
        .getPageIndexTasks(params)
        .then(res => {
          if (res) {
            setTimeout(function() {
              that.loading = false;
              that.tableData = JSON.parse(res.data).tasks;
            }, 1000);
          }
        })
        .catch(function(err) {
          that.loading2 = false;
          api.reqFail(that, "获取列表失败请刷新");
        });
    }
  },
  mounted() {
    this.getLists();
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/todo.scss";
</style>
<style lang="scss">
$green: #67c23a;
$red: #fa5555;
$orange: #eb9e05;
.el-icon-edit {
  color: $green;
  padding: 0 4px;
}
.el-icon-delete {
  color: $red;
  padding: 0 4px;
}
.el-icon-share {
  color: $orange;
  padding: 0 4px;
}
</style>

