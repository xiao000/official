<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{padding: 0;
  margin: 0;}
#app {
  font-family: "PuHuiTi";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
#app .el-main{padding: 0 20px 20px 20px;}
</style>
