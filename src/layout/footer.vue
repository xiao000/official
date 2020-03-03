<template>
  <!-- 页尾 -->
  <div class="footer">
    <partner></partner>
    <div class="footMain">
      <el-row>
        <el-col :span="8">
          <div class="logoImg">
             <img class="logo" :src="logo" alt="比特云算" />
          </div>
          <div>矿机分时共享综合服务商</div>
        </el-col>
        <el-col :span="8">
          <h3 style="text-align: left;">关注我们</h3>
          <el-row :gutter="10">
            <el-col :span="4">微信</el-col>
            <el-col :span="4">微博</el-col>
            <el-col :span="4">微信</el-col>
            <el-col :span="4">微信</el-col>
            <el-col :span="4">微信</el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <h3 style="text-align: left;">关注我们</h3>
          <div class="codeImg"></div>
        </el-col>
      </el-row>
    </div>
    <p class="backmost">Copyright © 2018-2020 www.hashsl.com 粤ICP备18083800号-1</p>
  </div>
</template>
<script>
import Partner from "@/components/partner";
import logoImg from "@/assets/img/logo1.png";
import wx from "@/assets/img/wx.png";
import wb from "@/assets/img/wb.png";
import facebook from "@/assets/img/facebook.png";
import Twitter from "@/assets/img/Twitter.png";
import airplane from "@/assets/img/airplane.png";
export default {
  data(){
    return { 
      logo: logoImg,
      wx:wx,
      wb:wb,
      facebook:facebook,
      Twitter:Twitter,
      airplane:airplane
    }
  },
  components: {
    Partner
  }
};
</script>
<style scoped>
.footMain {
  padding: 20px 0;
  height: 200px;
  background-color: #000;
  color: #fff;
}
/* .backmost {
  text-align: center;
  color: #aaa;
  line-height: 30px;
  font-size: 12px;
  border-top: 0.5px solid #DEE1E6;
} */
</style>