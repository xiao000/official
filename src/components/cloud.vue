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
        <div class="arrow">
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
        <el-row type="flex" class="row-bg platform" justify="center" align="middle">
          <el-col :span="4"><img :src="pt1" alt=""></el-col>
          <el-col :span="2"><div class="blueArrow"></div></el-col>
          <el-col :span="4"><img :src="pt2" alt=""></el-col>
          <el-col :span="2"><div class="blueArrow"></div></el-col>
          <el-col :span="4"><img :src="pt3" alt=""></el-col>
          <el-col :span="2"><div class="blueArrow"></div></el-col>
          <el-col :span="4"><img :src="pt4" alt=""></el-col>
        </el-row>
        </el-col>
    </el-row>
      <el-row>
     <el-col :span="5" :offset="15">
        <div class="arrowt">
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
        <div class="arrow">
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
h1{font-size: 36px;}
.cloudTxt{font-size: 26px;}
.arrow{line-height: 445px;}
.platform{border: 1px dashed #DDDDDD; width: 857px;height: 239px;}
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
/* .arrowt,.arrowt img{width: 81px;height: 115px;} */
/* .arrowt img{transform: rotateY(90deg);} */
</style>