<template>
  <el-select v-model="value" placeholder="请选择" size="small" >
    <el-option v-for="(item, index) in selections"  @click.native="chooseSelection(index)" :key="item.value" :label="item.label" :value="item.value">
    {{item.label }}</el-option>
    <!--<li v-for="(item, index) in selections" @click="chooseSelection(index)">{{ item.label }}</li>-->
  </el-select>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        value: 0
      }]
    }
  },
  data() {
    return {

      nowIndex: 0,
      value: this.selections[0].label
    }

  },
    methods: {
   chooseSelection (index) {
      this.nowIndex = index;
       console.log(this.value);
      this.$emit('on-change', this.selections[this.nowIndex])
    }
  }

}
</script>