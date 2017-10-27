<template>
        <el-col :span="24" class="main">
            <menus></menus>
            <section class="content-container" >
                    <el-button type="info">新增行程</el-button>
                <div class="grid-content bg-purple-light">
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
             img: require('../assets/images/pic1.jpg')
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
<style lang="scss" scoped>
@import  "../styles/home.scss";
</style>