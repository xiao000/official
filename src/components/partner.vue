<template>
    <!-- 合作伙伴 -->
    <div class="partner">
      <div class="widthLR">
      <el-row><el-col :span="24"><h1 class="titleHegiht">合作伙伴</h1></el-col></el-row>
        <el-row :gutter="20" type="flex" class="row-bg" justify="left">
            <el-col :span="4" class="imgWidth">
              <a href="https://www.aex.plus/" target="_blank" >
              <img :src="partner1" alt="partner1">
              </a>
              </el-col>
            <el-col :span="4" class="imgWidth">
              <a href="https://www.whatsminer.com/" target="_blank" >
              <img :src="partner2" alt="partner2">
              </a>
              </el-col>
            <el-col :span="4" class="imgWidth">
              <a href="https://www.bitmain.com/" target="_blank" >
              <img :src="partner3" alt="partner3">
              </a>
            </el-col>
            <el-col :span="4" class="imgWidth">
              <a href="https://www.btc.com" target="_blank" >
              <img :src="partner4" alt="partner4">
              </a>
              </el-col>
            <el-col :span="4" class="imgWidth">
              <a href="https://coinmarketcap.com/" target="_blank" >
              <img :src="partner5" alt="partner5">
              </a>
              </el-col>
        </el-row>
    </div>
    </div>
</template>
<script>
import partner1 from "@/assets/img/partner1.png";
import partner2 from "@/assets/img/partner2.png";
import partner3 from "@/assets/img/partner3.png";
import partner4 from "@/assets/img/partner4.png";
import partner5 from "@/assets/img/partner5.png";
export default {
  data() {
    return {
      partner1:partner1, partner2:partner2,
       partner3:partner3,partner4:partner4,partner5:partner5
    };
  },
};
</script>
<style scoped>
.imgWidth{width:25.66%;}
.imgWidth:nth-child(1){text-align: left;}
</style>