<template>
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
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>  <router-link to="/mall">去商城</router-link></el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
      </el-row>
</template>


<script>
export default {
      data() {
        return {
            sysName: './static/logo.png',
            collapsed: false,
            sysUserName: '剑走偏锋',
            sysUserAvatar: './static/avator.jpg',
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
    methods:{
        logout(){
            this.$router.push('/login');
        }
        // goMall(){
        //     this.$router.push('/mall');
        // }
    }
}
</script>

