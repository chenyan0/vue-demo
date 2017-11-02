<template>
<div>
<div class="bg-ani"></div>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
        </el-form-item>
    </el-form>
</div>
</template>
<script>
export default {
    data() {
        return {
            logining: false,
            ruleForm2: {
                account: 'admin',
                checkPass: '123456'
            },
            rules2: {
                account: [{
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                },
                    //{ validator: validaePass }
                ],
                checkPass: [{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                },
                    //{ validator: validaePass2 }
                ]
            },
            checked: true
        };
    },
    methods: {
        handleReset2() {
            this.$refs.ruleForm2.resetFields();
        },
        handleSubmit2(ev) {
            var _this = this;
            this.$router.push({
                path: '/tasks'
            });
            // this.$refs.ruleForm2.validate((valid) => {
            //     if (valid) {
            //         //_this.$router.replace('/table');
            //         this.logining = true;
            //         //NProgress.start();
            //         var loginParams = {
            //             username: this.ruleForm2.account,
            //             password: this.ruleForm2.checkPass
            //         };
            //         requestLogin(loginParams).then(data => {
            //             this.logining = false;
            //             //NProgress.done();
            //             let {
            //                 msg,
            //                 code,
            //                 user
            //             } = data;
            //             if (code !== 200) {
            //                 this.$message({
            //                     message: msg,
            //                     type: 'error'
            //                 });
            //             } else {
            //                 sessionStorage.setItem('user', JSON.stringify(user));

            //             }
            //         });
            //     } else {
            //         console.log('error submit!!');
            //         return false;
            //     }
            // });
        }
    },
    created(){
  document.body.setAttribute("class","bodylogin");
},destroyed(){
  document.body.removeAttribute("class","bodylogin");
    
}
}
</script>
<style lang="scss" scoped>
@import '../styles/login.scss';

</style>
<style >
.bodylogin{
  background-color: #5CCBFF;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

