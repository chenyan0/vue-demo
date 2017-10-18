<template>

  
  <el-checkbox-group v-model="value" size="small">
    <el-checkbox-button v-for="(item,index) in selections" :label="item.label"  :value="item.value" :checked="true" :key="index" @click.native="chooseSelection(index)">{{item.label}}</el-checkbox-button>
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
       value:this.selections[0].label,
       nowIndex:[0]
      };
    },
    methods:{
      // chooseSelection(index){
      //   this.nowIndex=index;
      //   console.log(index);
      //   this.$emit('on-change',this.selections[this.nowIndex]);
      // }

      chooseSelection (index) {
      if (this.nowIndexes.indexOf(index) === -1) {
        this.nowIndexes.push(index)  
      }
      else {
        this.nowIndexes = _.remove(this.nowIndexes, (idx) => {
          return idx !== index
        })
      }
      let nowObjArray = _.map(this.nowIndexes, (idx) => {
        return this.selections[idx]
      })
      this.$emit('on-change', nowObjArray)
    },
    checkActive (index) {
      return this.nowIndexes.indexOf(index) !== -1
    }
    }
  }
</script>