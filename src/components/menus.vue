<template>
    <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-->
   <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#ffffff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>行程表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">未完成</el-menu-item>
          <el-menu-item index="1-2">已完成</el-menu-item>
          <el-menu-item index="1-2">已取消</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
   
    </el-menu>
    </aside>
    
</template>
<script>
import Add from "./Add";
export default {
    data() {
        return {
            items: [
                 //菜单的模拟数据
                { key: '星期一', index: 1, locked: true },
                { key: '星期二', index: 2, locked: true }, 
                { key: '星期三', index: 3, locked: false
            }
            ],
            collapsed: false,
        }
    },
     
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
         add(ev) {
            var _this = this;
            this.$router.push({
                path: '/table/add'
            });
        }
    }
}
</script>
<style lang="scss">
.el-menu{
    background-color: transparent;
}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover{
  background-color: #293642;
}
</style>
