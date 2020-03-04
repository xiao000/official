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
          <div class="logoTxt">矿机分时共享综合服务商</div>
        </el-col>
        <el-col :span="8">
          <h3 style="text-align: left;">关注我们</h3>
          <el-row :gutter="10">
            <el-col :span="4"><img :src="wx" alt="微信"></el-col>
            <el-col :span="4"><img :src="wb" alt="微博"></el-col>
            <el-col :span="4"><img :src="facebook" alt="facebook"></el-col>
            <el-col :span="4"><img :src="Twitter" alt="Twitter"></el-col>
            <el-col :span="4"><img :src="airplane" alt="airplane"></el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <h3 style="text-align: left;">关注我们</h3>
          <div class="codeImg">
          </div>
        </el-col>
        
      </el-row>
    </div>
    <el-row>
     <el-col :span="24">
        <p class="backmost">Copyright © 2018-2020 www.hashsl.com 粤ICP备18083800号-1</p>
      </el-col>
    </el-row>
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
  padding: 49px 0 20px;
  height: 388px;
  background-color: #000;
  color: #fff;
}
.logoTxt{font-size: 16px;}
h3{margin-top: 0;}
.backmost{background-color: #000;font-size: 14px;margin:0;padding-bottom: 8px;color: #fff;}

</style>