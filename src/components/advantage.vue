<template>
  <!-- 比特云算的优势-->
  <div id="advantage">
    <div class="widthLR">
      <el-row><el-col :span="24"><h1 class="titleHegiht">比特云算的优势</h1></el-col></el-row>
      <div style="height:50px;"></div>
      <el-row>
          <el-col :span="12" >
            <el-col :span="6">
              <img :src="advantage1" alt="产品丰富">
            </el-col>
            <el-col :span="18" class="textCl">
              <div>产品丰富</div>
              <span>超短期/90天/180天/360天 全都有</span>
            </el-col>
          </el-col>
          <el-col :span="8" :offset="4">
            <el-col :span="6">
              <img :src="advantage2" alt="收益稳定">
            </el-col>
            <el-col :span="18" class="textCl">
              <div>收益稳定</div>
              <span>运营期间从未故障断发用户收益</span>
            </el-col>
          </el-col>
      </el-row>
      <div style="height:80px;"></div>
      <el-row>
        <el-col :span="12">
          <el-col :span="6">
            <img :src="advantage3" alt="超低电费">
          </el-col>
          <el-col :span="18" class="textCl">
              <div>超低电费</div>
              <span>每度电价低至0.35元</span>
          </el-col>
           </el-col>
           <el-col :span="8" :offset="4">
            <el-col :span="6">
              <img :src="advantage4" alt="收益稳定">
            </el-col>
            <el-col :span="18" class="textCl">
              <div>1元起购</div>
              <span>运营期间从未故障断发用户收益</span>
            </el-col>
          </el-col>
       
      </el-row>
    </div>
  </div>
</template>
<script>
import advantage1 from "../assets/img/advantage1.png"
import advantage2 from "../assets/img/advantage2.png"
import advantage3 from "../assets/img/advantage3.png"
import advantage4 from "../assets/img/advantage4.png"
export default {
  data() {
    return {
      advantage1:advantage1,
      advantage2:advantage2,
      advantage3:advantage3,
      advantage4:advantage4
    }
  }
};
</script>
<style scoped>
#advantage{background-color: #FAFAFA; height: 712px;}
.row-bg{padding-bottom: 90px;}
.textCl{text-align: left;padding-top:5%}
.textCl div{font-size: 24px;font-weight:500;margin-bottom: 10px;}
.textCl span{font-size: 16px;color: #575757;}
</style>