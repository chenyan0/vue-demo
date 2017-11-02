<template>
        <el-col :span="24" class="main">
            <menus></menus>
            <section class="content-container" >
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </section>
        </el-col>
     
</template>
<script>



import menus from '../../components/menus'; // * 导入刚才我们创建的 menus组件
import todo from './todo'; // * 导入刚才我们创建的 todo
export default {
    data() {
        return {
            data:[],
             img: require('../../assets/images/pic1.jpg')
        }
    },
  
    components:{
        menus,todo
    }
}
</script>
<style lang="scss" scoped>
@import  "../../styles/home.scss";
</style>

