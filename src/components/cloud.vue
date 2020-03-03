<template>
  <!-- 云算力 -->
  <div id="cloud">
    <el-row><el-col :span="24"><h1>云算力</h1></el-col></el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <img :src="cloud1" alt="1">
        <span class="cloudTxt">购买算力套餐</span>
      </el-col>
      <el-col :span="5">
        <div class="arrow animated fadeInLeft">
          <img :src="arrow2" alt="1">
        </div>
      </el-col>
      <el-col :span="6">
        <img :src="cloud2" alt="1">
        <span class="cloudTxt">比特云算平台</span>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="15">
        <el-row type="flex" class="row-bg platform animated bounce" justify="center" align="middle">
          <el-col :span="3" class="pt1Animat animated fadeInLeft"><img :src="pt1" alt=""><span>采购矿机</span></el-col>
          <el-col :span="2" class="pt2Animat animated fadeInLeft"><div class="blueArrow"></div></el-col>
          <el-col :span="3" class="pt3Animat animated fadeInLeft"><img :src="pt2" alt=""><span>运输至矿场</span></el-col>
          <el-col :span="2" class="pt4Animat animated fadeInLeft"><div class="blueArrow"></div></el-col>
          <el-col :span="3" class="pt5Animat animated fadeInLeft"><img :src="pt3" alt=""><span>调试矿机联通矿池</span></el-col>
          <el-col :span="2" class="pt6Animat animated fadeInLeft"><div class="blueArrow"></div></el-col>
          <el-col :span="3" class="pt7Animat animated fadeInLeft"><img :src="pt4" alt=""><span>矿机运维</span></el-col>
          <div class="dottedArrow"></div>
        </el-row>
        </el-col>
    </el-row>
      <el-row>
     <el-col :span="5" :offset="15">
        <div class="arrowt animated fadeInDown">
          <img :src="arrow2" alt="1">
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <img :src="cloud3" alt="1">
        <span class="cloudTxt">分配收益给用户</span>
      </el-col>
      <el-col :span="5">
        <div class="arrowl animated fadeInRight">
          <img :src="arrow2" alt="1">
        </div>
      </el-col>
      <el-col :span="6">
        <img :src="cloud4" alt="1">
        <span class="cloudTxt">挖矿产生收益</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cloud1 from "../assets/img/ysl1.png";
import cloud2 from "../assets/img/ysl2.png";
import cloud3 from "../assets/img/ysl3.png";
import cloud4 from "../assets/img/ysl4.png";
import arrow2 from "../assets/img/arrow2.png";
import pt1 from "../assets/img/pt1.png";
import pt2 from "../assets/img/pt2.png";
import pt3 from "../assets/img/pt3.png";
import pt4 from "../assets/img/pt4.png";
export default {
  data() {
    return {
      cloud1:cloud1,
      cloud2:cloud2,
      cloud3:cloud3,
      cloud4:cloud4,
      arrow2:arrow2,
      pt1:pt1,
      pt2:pt2,
      pt3:pt3,
      pt4:pt4
    }
  }
}
</script>
<style type="text/css3" scoped>
#cloud{background-color: #FAFAFA;margin-bottom: 20px;}
.cloudTxt{font-size: 26px;}
.arrow,.arrowl{line-height: 445px;}
.arrowt img{transform: rotate(90deg);}
.arrowl,.arrowt,.arrow,.pt1Animat,.pt2Animat,
.pt3Animat,.pt4Animat,.pt5Animat,.pt6Animat,.pt7Animat{animation-iteration-count:1000;animation-duration:6.5s}
.arrowl img{transform: rotate(180deg);}
/* .pt1Animat{animation-delay:1s;}
.pt2Animat{animation-delay:4.5s;}
.pt3Animat{animation-delay:8s;}
.pt4Animat{animation-delay:11.5s;}
.pt5Animat{animation-delay:15s;}
.pt6Animat{animation-delay:18.5s;}
.pt7Animat{animation-delay:22s;} */
.platform{position: relative;border: 1px dashed #DDDDDD; width: 857px;height: 239px;margin: 30px 0;}
.platform span{font-size: 16px;}
.dottedArrow{
    position: absolute;
    width: 0;
    height: 0;
    top: -60px;
    left: 600px;
    border: 30px dashed;
    border-color: transparent transparent #DDDDDD transparent;
    margin-left: 20px;
}
.dottedArrow::after{
    content: '';
    position: absolute;
    top: -28px;
    left: -30px;
    border: 30px solid;
    border-color: transparent transparent #FAFAFA transparent ;
}
.blueArrow{
    width: 0;
    height: 0;
    border: 20px solid;
    border-color: transparent transparent transparent #007AFF;
    position: relative;}
.blueArrow::after{
    content: '';
    position: absolute;
    top: -25px;
    left: -35px;
    border: 25px solid;
    border-color: transparent transparent transparent #FAFAFA;
}

</style>