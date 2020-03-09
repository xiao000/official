<template>
  <!-- 主页面 -->
  <el-container>
    <div class="home el-scrollbar" ref="home">
      <head-nav></head-nav>
        <div class="main">
            <!-- <transition  name="custom-classes-transition"  enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown" > -->
          <transition mode="in-out" name="fadee">
            <router-view></router-view>
          </transition>
        </div>
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
  width: 100%;
}
</style>