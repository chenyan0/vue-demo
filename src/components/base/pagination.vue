<template>
  <div class="block">
  <!-- <span class="demonstration">大于 7 页时的效果</span> -->
  <el-pagination
    layout="prev, pager, next"
    :total="total" 
    @current-change="handleCurrentChange" :current-page="pageIndex" >
  </el-pagination>
</div>
</template>
<script>
export default {
    props:{
        total:{
            type:Number,
            default:1

        },
        pageIndex:{
             type:Number,
            default:1
        }
    },
    data(){
        return{

        }
    },
    methods:{
      handleCurrentChange(val) {
          this.$emit('cur-change',val);
      }
    }
}
</script>
