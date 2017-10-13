<template>
    <el-row class="container">
        <Head></Head>  
        <router-view></router-view>   
    </el-row>
</template>
<script>



import Head from '../components/head.vue'; // * 导入刚才我们创建的 header
export default {
    data() {
        return {
        
        }
    },
    components:{
       Head
    }
}
</script>
<style>
@import  "../styles/home.scss";
</style>