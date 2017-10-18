<template>
<div>
    <el-row class="container">
        <el-row>
            <el-col :span="24" class="header">
                <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
                    <!--{{collapsed?'':sysName}}-->
                    <img :src="this.sysName" />
                </el-col>
                <el-col :span="10">
                    <div class="tools" @click.prevent="collapse">
                        <i class="fa fa-align-justify"></i>
                    </div>
                </el-col>
                <el-col :span="4" class="userinfo">
                    <el-dropdown trigger="hover">
                        <span class="el-dropdown-link userinfo-inner">
                            <img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <router-link to="/mall">我的消息</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/mall">去商城</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <router-link to="/mall">设置</router-link>
                            </el-dropdown-item>
                            <el-dropdown-item divided @click.native="showDialog()">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-col>
    
        </el-row>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
    <span>确认退出登陆？</span>
    <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClose()">确 定</el-button>
    </span>
    </el-dialog>
    </div>
   
</template>
<script>


import Dialog from '../components/base/dialog.vue';
export default {
    components: [
        Dialog
    ],
    data() {
        return {
             dialogVisible: false,

            sysName: require('../assets/images/logo.png'),
            collapsed: false,
            sysUserName: '剑走偏锋',
            sysUserAvatar: require('../assets/images/avator.jpg'),
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },

        }
    },
    methods: {
        handleClose(done) {
         
                    this.$router.push('/login');
           
        },
        showDialog(){
            console.log('asdas');
            this.dialogVisible=true;
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../styles/home.scss";

</style>
