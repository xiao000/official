<template>
<div class="cloudPTCon">
  <el-row type="flex" class="row-bg" justify="end">
    <el-col :span="18" :xs="18">
    <el-row type="flex" class="row-bg" justify="center" align="bottom">
         <div class="platform">
            <el-col ref="pt1Animat" :span="4" class="pt1Animat animated fadeInLeft">
              <img :src="pt1" alt /><br>
              <span>采购矿机</span>
            </el-col>
            <el-col ref="pt2Animat" :span="2" class="pt2Animat animated fadeInLeft">
              <img :src="pt" alt /><br>
            </el-col>
            <el-col ref="pt3Animat" :span="4" class="pt3Animat animated fadeInLeft">
              <img :src="pt2" alt /><br>
              <span>运输至矿场</span>
            </el-col>
            <el-col ref="pt4Animat" :span="2" class="pt4Animat animated fadeInLeft">
             <img :src="pt" alt /><br>
            </el-col>
            <el-col ref="pt5Animat" :span="4" class="pt5Animat animated fadeInLeft">
              <img :src="pt3" alt /><br>
              <span>调试矿机联通矿池</span>
            </el-col>
            <el-col ref="pt6Animat" :span="2" class="pt6Animat animated fadeInLeft">
             <img :src="pt" alt /><br>
            </el-col>
            <el-col ref="pt7Animat" :span="4" class="pt7Animat animated fadeInLeft">
              <img :src="pt4" alt /><br>
              <span>矿机运维</span>
            </el-col>
          </div>
        </el-row>
        </el-col>
</el-row>
</div>
</template>
<script>

import pt1 from "../assets/img/pt1.png";
import pt2 from "../assets/img/pt2.png";
import pt3 from "../assets/img/pt3.png";
import pt4 from "../assets/img/pt4.png";
import pt from "../assets/img/pt.png"
export default {
    data(){
        return{
            pt1: pt1,
            pt2: pt2,
            pt3: pt3,
            pt4: pt4,
            pt:pt,
            flag:false
        }
    },
    methods:{
      handleScroll(){
        var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>=10){
          this.flag=true;
          // this.$refs.pt1Animat.classList.add("fadeInLeft");
          // this.$refs.pt2Animat.classList.add("fadeInLeft");
          // this.$refs.pt3Animat.classList.add("fadeInLeft");
          // this.$refs.pt4Animat.classList.add("fadeInLeft");
          // this.$refs.pt5Animat.classList.add("fadeInLeft");
          // this.$refs.pt6Animat.classList.add("fadeInLeft");
          // this.$refs.pt7Animat.classList.add("fadeInLeft");
        }
      }
    },
    mounted(){
      window.addEventListener("scroll",this.handleScroll)
    }
}
</script>
<style scoped>
.cloudPTCon{height: 28vh;}
.pt1Animat,
.pt2Animat,
.pt3Animat,
.pt4Animat,
.pt5Animat,
.pt6Animat,
.pt7Animat {
  /* 定义动画的播放次数。infinite */
  animation-iteration-count: 1;
  /* 动画指定需要多少秒或毫秒完成 */
  animation-duration: 2s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-duration: 2s;
}
/* animation-delay设置动画在启动前的延迟间隔。 */
.pt1Animat{animation-delay:1s;}
.pt2Animat{animation-delay:2s;}
.pt3Animat{animation-delay:3s;}
.pt4Animat{animation-delay:4s;}
.pt5Animat{animation-delay:5s;}
.pt6Animat{animation-delay:6s;}
.pt7Animat{animation-delay:7s;}


.platform {
  /* height: 242px; */
  background: url(../assets/img/ptbj.png) no-repeat center center;
  background-size: 100% 100%;
  margin-right: 8%;
  padding: 35px 6px 6px 45px;
  position: absolute;
  top: 0px;
}
.platform span {
  font-size: 16px;
  width: 135px;
}
</style>