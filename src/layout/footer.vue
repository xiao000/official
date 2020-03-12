<template>
  <!-- 页尾 -->
  <div class="footer">
    <partner></partner>
    <div class="footMain">
      <div class="widthLR">
      <el-row type="flex" class="row-bg" justify="left">
        <el-col :span="8">
            <div class="footLogo">
              <div class="logoImg"><img class="logo" :src="logo" alt="比特云算"/></div>
              <br>
              <div class="logoTxt">矿机分时共享综合服务商</div>
            </div>
        </el-col>
        <el-col :span="8">
          <h3 style="text-align: left;">关于我们</h3>
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="weChat" >
              <img :src="wx" alt="微信" @mouseenter="weChatShow" @mouseleave="weChatShow">
              </div>
            </el-col>
            <el-col :span="4">
              <a href="https://weibo.com/u/6648370472?is_all=1" target="_blank" rel="noopener noreferrer">
              <img :src="wb" alt="微博" @mouseenter="IconFunwb" @mouseleave="IconFunwb">
              </a>
            </el-col>
            <!-- <el-col :span="4"><img :src="facebook" alt="facebook" @mouseenter="IconFunfacebook" @mouseleave="IconFunfacebook"></el-col>
            <el-col :span="4"><img :src="Twitter" alt="Twitter" @mouseenter="IconFunTwitter" @mouseleave="IconFunTwitter" ></el-col>
            <el-col :span="4"><img :src="airplane" alt="airplane" @mouseenter="IconFunairplane" @mouseleave="IconFunairplane"></el-col> -->
            <el-col class="WxShow"><img :src="weChatCode" alt="weCahtImg" v-show="weChatinShow"></el-col>
          </el-row>
          
        </el-col>
        <el-col :span="4" :offset="4" style="text-align:left;">
          <h3 style="text-align: left;">联系我们</h3>
          <div style="text-align:center;"> <img :src="sevcode" alt=""></div>
          <div class="logoTxt sevcodeTxt">官方运营微信</div>
        </el-col>
        
      </el-row>
    </div>
    <el-row>
     <el-col :span="24">
        <p class="backmost">Copyright © 2018-2020 www.hashsl.com 粤ICP备18083800号-1</p>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
<script>
import Partner from "@/components/partner";
import logoImg from "@/assets/img/logo01.png";
import wx from "@/assets/img/wx.png";
import wb from "@/assets/img/wb.png";
import facebook from "@/assets/img/facebook.png";
import Twitter from "@/assets/img/Twitter.png";
import airplane from "@/assets/img/airplane.png";

import wxC from "@/assets/img/wxC.png";
import wbC from "@/assets/img/wbC.png";
import facebookC from "@/assets/img/facebookC.png";
import TwitterC from "@/assets/img/TwitterC.png";
import airplaneC from "@/assets/img/airplaneC.png";

import weChatCode from "@/assets/img/weChatCode.png";
import sevcode from "@/assets/img/sevCode.png";
export default {
  data(){
    return { 
      logo: logoImg,
      weChatCode:weChatCode,
      wx:wx,
      wb:wb,
      facebook:facebook,
      Twitter:Twitter,
      airplane:airplane,
      wxC:wxC,
      wbC:wbC,
      facebookC:facebookC,
      TwitterC:TwitterC,
      airplaneC:airplaneC,
      weChatinShow:false,
      sevcode:sevcode
    }
  },
  methods: {
    weChatShow() {
      if(this.weChatinShow){
        this.weChatinShow = false;
        this.wx=wx;
      }else{
        this.weChatinShow = true;
        this.wx=wxC;
      }
    },
    IconFunwb(){
      if(this.wb==wb){
        this.wb=wbC;
      }else{
        this.wb=wb;
      }
    },
    IconFunfacebook(){
      if(this.facebook==facebook){
        this.facebook=facebookC;
      }else{
        this.facebook=facebook;
      }
    },
    IconFunTwitter(){
      if(this.Twitter==Twitter){
        this.Twitter=TwitterC;
      }else{
        this.Twitter=Twitter;
      }
    },
    IconFunairplane(){
      if(this.airplane==airplane){
        this.airplane=airplaneC;
      }else{
        this.airplane=airplane;
      }
    }

  },
  components: {
    Partner
  }
};
</script>
<style scoped>
.footer{height: 310px;}
.logoImg img{margin-bottom: 13px;}
.footMain {
  padding: 23px 0 20px;
  height: 189px;
  background-color: #2d2d2d;
  color: #fff;
}
.logoTxt{font-size: 15px;}
.sevcodeTxt{text-align: center;}
h3{margin-top: 0; font-size: 18px;font-weight:300;}
.backmost{background-color: #2d2d2d;font-size: 14px;margin:0;padding-bottom: 8px;color: #fff;}
.footLogo{text-align: left;}
.WxShow{position:absolute;
    top: 80%;
    left: -42%;}
</style>