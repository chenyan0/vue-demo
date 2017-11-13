<template>
    <aside >
        <!--导航菜单-->
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#ffffff" active-text-color="#ffd04b" router unique-opened>
                 <el-menu-item index="2" :route="{path:'/dashboard'}"><i class="el-icon-setting"></i>仪表盘</el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>活动中心</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1"  :route="{path:'/tasks'}">未完成</el-menu-item>
                    <el-menu-item index="2-2"  :route="{path:'/tasks'}">已完成</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </aside>
</template>
<script>
export default {
  data() {
    return {
    
    };
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
        path: "/table/add"
      });
    }
  }
};
</script>
<style lang="scss">
.el-menu {
  background-color: transparent;
}

.el-submenu .el-menu-item:hover,.el-menu-item:hover,
.el-submenu__title:hover,
.el-submenu.is-opened {
  background-color: #363e4f;
  color: #fff;
}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
.el-menu-item.is-active {
  color: #fff;
  background: #363e4f;
}
.el-submenu .el-menu {
  background-color: #3e4554;
}
.el-submenu__title,
.el-submenu .el-menu-item,
.el-menu-item {
  color: #c6c8cd;
}
</style>
