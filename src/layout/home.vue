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
        <!-- <content-view></content-view> -->
      </div>
      </el-main>
      <div class="indFooter">
        <footerNav></footerNav>
     </div>
       <backTop :ele="$refs.home"></backTop>
    </div>
  </el-container>
</template>
<script>
import HeadNav from "./head.vue";
import FooterNav from "./footer.vue";
import backTop from "./backTop.vue";
// import contentView from "../components/content";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    HeadNav,
    FooterNav,
    backTop
    // contentView
  }
};
</script>
<style scoped>
.home{margin: auto;}
.indFooter{margin-bottom: 10px;}
</style>