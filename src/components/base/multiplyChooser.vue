<template>

  
  <el-checkbox-group v-model="value" size="small" @change="change">
    <el-checkbox-button v-for="(item,index) in selections" :label="item.label"  :value="item.value"  :key="index">{{item.label}}</el-checkbox-button>
  </el-checkbox-group>
 
 


</template>
<script>
  export default {
      props:{
          selections:{
              type:Array,
              default:[{
                label: 'test',
               value:0
              }]
          }
      },
    data () {
      return {
       value:[this.selections[0].label],
      };
    },
    methods:{
      change () {
        console.log(this.value);
      this.$emit('on-change', this.value)
    },
    checkActive (index) {
      return this.nowIndexes.indexOf(index) !== -1
    }
    }
  }
</script>