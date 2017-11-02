<template>
  <div>
     <el-dialog title="提示" :visible.sync="isShow" width="30%" :modal-append-to-body="false" :before-close="closePop" >
     <slot></slot> 
     <slot name="footer"></slot>
  </el-dialog>
  </div>
  
 
</template>
<script>
export default {
  props: {
    
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    closePop() {
      //  this.$parent.$refs.dialog.$emit('update:isShow', false);
       this.$emit('on-close');
      }
  }
}
</script>
<style lang="scss" scoped>
.el-dialog {
  z-index: 3000;
}
</style>