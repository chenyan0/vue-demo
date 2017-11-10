<template>
<div>
<div class="bg-ani"></div>
    <el-form :model="loginForm" :rules="rules2" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
import API from "../api/api";
const api = new API();
export default {
  data() {
    return {
      logining: false,
      loginForm: {
        account: "",
        password: ""
      },
      rules2: {
        account: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
          //{ validator: validaePass }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  methods: {
    setCookie(c_name,c_pwd,exdays) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "passWord" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
     //读取cookie
  getCookie:function () {
    if (document.cookie.length>0) {
      var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
      for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('=');//再次切割
        //判断查找相对应的值
        if(arr2[0]=='userName'){
          this.loginForm.account=arr2[1];//保存到保存数据的地方
        }else if(arr2[0]=='passWord'){
          this.loginForm.password=arr2[1];
        }
      }
    }
  },
  //清除cookie
  clearCookie:function () {
    this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
  },
    handleSubmit(ev) {
      let name = this.loginForm.account;
      let pass = this.loginForm.password;
      if ((this.checked = true)) {
        //传入账号名，密码，和保存天数3个参数
        this.setCookie(name, pass, 7);
      }
      let that = this;
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.logining = true;
          let loginParams = {
            api: "/api/login",
            data: [
              { username: this.loginForm.account },
              { password: this.loginForm.passWord }
            ]
          };
          api.login(loginParams).then(res => {
            console.log(res);
            if(res.status=='200'){
                this.$router.push({
                  path: "/tasks"
                });
            }else{
                api.reqFail(that,'登录失败,请重试')
            }
          });
        }
      });
    }
  },
//   挂载
  mounted() {
    document.body.setAttribute("class", "bodylogin");
    this.getCookie();
  },
//   销毁期
  destroyed() {
    document.body.removeAttribute("class", "bodylogin");
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/login.scss";
</style>
<style >
.bodylogin {
  background-color: #5ccbff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

