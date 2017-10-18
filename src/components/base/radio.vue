<template>
    <el-radio-group v-model="value" size="small">
    <el-radio-button  v-for="(item,index) in selections" :key="index" :label="item.label"  @click.native="chooseSelection(index)"></el-radio-button>
  </el-radio-group>
</template>
<script>
export default {
    props:{
        selections:{
            type:Array,
            default:[{
                label: 'test',
                value: 0
            }]
        }
    },
  data(){
      return {
          value:this.selections[0].label,
          nowIndex:0
      }
  },
  methods:{
      chooseSelection(index){
        this.nowIndex=index;
        this.$emit('on-change',this.selections[this.nowIndex]);
      }
  }
}
</script>

