<template>
    <el-col :span="24" class="content-wrapper">
        <el-row class=" form todo-new input-symbol">
            <el-col :span="24">
                <!-- 新增单个代办单项输入框,监听了回车事件，双向绑定text值,监听了disabled属性，在todo.locked为true的情况下无法编辑-->
                <el-col :span="1">
                    <i class="el-icon-plus"></i>
                </el-col>
                <el-col :span="23">
                    <el-input v-model="text" placeholder="请输入内容" @keyup.enter.native="onAdd"></el-input>
                </el-col>
            </el-col>
        </el-row>
        <el-card class="box-card">
            <el-row v-for="o in items" :key="o" class="lists-item">
                <el-col :span="24">
                    <el-col :span="4">
                        <el-checkbox v-model="o.checked" @change="selectItem"></el-checkbox>
                    </el-col>
                    <el-col :span="17">
                        <span v-bind:class="{over:o.isDelete}">{{ o.text }}</span>
                    </el-col>
                    <el-col :span="3">
                        <span v-on:click="del(o)">删除</span>
                        <span>修改</span>
                        <span>详情</span>
          
                    </el-col>
                </el-col>
            </el-row>
        </el-card>
  
    </el-col>
 
</template>
<script>
export default {
    data() {
        return {
            items: [
                { checked: false, text: '新的一天', isDelete: false },
                { checked: false, text: '新的一天', isDelete: false },
                { checked: false, text: '新的一天', isDelete: false }],
            text: '' //新增代办单项绑定的值
        }
    },
    methods: {
        onAdd: function () {
            this.items.push({
                checked: false, text: this.text, isDelete: false
            }); // 当用户点击回车时候 ，给items的值新增一个对象，this.text 即输入框绑定的值
            this.text = ''; //初始化输入框的值。
        },
        selectItem:function(eve){
            if(eve.checked){
                this.$refs
            }
        },

        del:function(eve){
            console.log(eve);
            if(eve.checked){
                eve.isDelete=!eve.isDelete;

            }else{
                 this.$message('请先选择删除条目');
            }
            console.log(eve.isDelete);

        }
    }

}
</script>
<style lang="scss" scoped>
@import '../styles/todo.scss';
</style>

