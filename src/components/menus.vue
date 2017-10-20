<template>
    <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-->
        <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
            <el-menu-item-group>
                <el-menu-item index="1" v-for="item in items"  :key="item">
                    <i class="el-icon-date"></i> {{item.key}}</el-menu-item>
            </el-menu-item-group>
            <li style="padding-left: 20px;">
                <el-button type="text"  @click.native.prevent="add" to>新增</el-button>
            </li>
            
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
