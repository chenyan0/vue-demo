<template>
        <el-col :span="24" class="main">
            <menus></menus>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <strong class="title">事项安排</strong>
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                        </el-breadcrumb>
    
                    </el-col>
                    <todo></todo>       
                </div>
            </section>
        </el-col>
     
</template>
<script>



import menus from './menus'; // * 导入刚才我们创建的 menus组件
import todo from './todo'; // * 导入刚才我们创建的 todo
export default {
    data() {
        return {
        }
    },
    methods: {
        //显示编辑界面
        handleEdit: function (index, row) {
            this.editFormVisible = true;
            this.editForm = Object.assign({}, row);
        },

    },
    components:{
        menus,todo
    }
}
</script>
<style>
@import  "../styles/home.scss";
</style>