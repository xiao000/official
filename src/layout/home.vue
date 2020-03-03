<template>
  <!-- 主页面 -->
  <el-container>
    <div class="home el-scrollbar" ref="home">
      <el-header> 
        <head-nav></head-nav>
      </el-header>
      <el-main>
        <div class="main">
            <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
      <div class="indFooter">
        <footerNav></footerNav>
      </div>
      </el-footer>
      <backTop :ele="$refs.home"></backTop>
    </div>
  </el-container>
</template>
<script>
import HeadNav from "./head.vue";
import FooterNav from "./footer.vue";
import backTop from "./backTop.vue";
export default {
  name: "home",
  data() {
    return {
    };
  },
  components: {
    HeadNav,
    FooterNav,
    backTop
  }
};
</script>
<style scoped>
.home {
  margin: auto;
  width: 95%;
}
.indFooter {
  margin-bottom: 10px;
}
</style>