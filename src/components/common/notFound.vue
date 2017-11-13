<template>
<div class="errorPage">
  <router-link :to="{path:'/'}"><img src="../../assets/images/404.png" alt=""></a></router-link>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.errorPage{
height: 100vh;
    background: #39434d;
img{
  height: 80%;
  margin: 0 auto;
  display: block;
}
}
</style>
