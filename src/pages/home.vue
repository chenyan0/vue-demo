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
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="#545c64">
                            <el-menu-item index="1">任务中心</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">我的工作台</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-menu>
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
            activeIndex: '1',
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
         handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
        showDialog() {
            console.log('asdas');
            this.dialogVisible = true;
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../styles/home.scss";

</style>
<style  lang="scss" >
.el-menu--horizontal {

 .el-submenu__title{
                    color: hsla(0,0%,100%,.7);
                      &:hover{
                     background-color: #363e4f;
                     color:#fff;

                    
                }
                }
}
</style>

