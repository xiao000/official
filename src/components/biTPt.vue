<template>
  <div id="cloudPTCon">
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="24">
        <el-row type="flex" class="row-bg" justify="center" align="bottom">
          <div class="platform">
            <el-col ref="pt1Animat" :span="5" :class="['pt1Animat animated', { 'fadeInLeft': isAddClass}]">
              <img :src="pt1" alt class="ptImg"/>
              <span>采购矿机</span>
            </el-col>
            <el-col ref="pt2Animat" :span="1" :class="['pt2Animat animated', { 'fadeInLeft': isAddClass}]">
              <img :src="pt" alt class="ptImg"/>
 
            </el-col>
            <el-col ref="pt3Animat" :span="5" :class="['pt3Animat animated', { 'fadeInLeft': isAddClass}]">
             <img :src="pt2" alt class="ptImg"/>
              <span>运输至矿场</span>
            </el-col>
            <el-col ref="pt4Animat" :span="1" :class="['pt4Animat animated', { 'fadeInLeft': isAddClass}]">
              <img :src="pt" alt class="ptImg"/>
 
            </el-col>
            <el-col ref="pt5Animat" :span="6" :class="['pt5Animat animated', { 'fadeInLeft': isAddClass}]">
             <img :src="pt3" alt class="ptImg"/>
              <span>调试矿机联通矿池</span>
            </el-col>
            <el-col ref="pt6Animat" :span="1" :class="['pt6Animat animated', { 'fadeInLeft': isAddClass}]">
              <img :src="pt" alt class="ptImg"/>
 
            </el-col>
            <el-col ref="pt7Animat" :span="5" :class="['pt7Animat animated', { 'fadeInLeft': isAddClass}]">
              <img :src="pt4" alt class="ptImg"/>
 
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
import pt from "../assets/img/pt.png";
export default {
  data() {
    return {
      pt1: pt1,
      pt2: pt2,
      pt3: pt3,
      pt4: pt4,
      pt: pt,
      // flag: false,
      isAddClass: false,
    };
  },
  methods: {
    debounceByLast(key, func, timeout) {
      const str = `${key}#m6978==`;
      window[str] && clearTimeout(window[str]);
      window[str] = setTimeout(() => {
        func();
        window[str] = null;
      }, timeout);
    },
    fadeInLeft() {
      this.debounceByLast(
        "bi-tpt",
        () => {
          this.addClass();
        },
        300
      );
    },
    addClass() {
      var showId = document.getElementById("cloudPTCon");
      var clients =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      var divTop = showId.getBoundingClientRect().top;
      let that = this;
      if (divTop > clients || divTop < -300) {
        this.isAddClass = false;
      } else {
        this.isAddClass = true;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.fadeInLeft);
  }
};
</script>
<style scoped>
#cloudPTCon {
  height: 170px;
}
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
  animation-duration: 1s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-duration: 1s;
}
/* animation-delay设置动画在启动前的延迟间隔。 */
.pt2Animat {
  animation-delay: 2s;
}
.pt3Animat {
  animation-delay: 3s;
}
.pt4Animat {
  animation-delay: 4s;
}
.pt5Animat {
  animation-delay: 5s;
}
.pt6Animat {
  animation-delay: 6s;
}
.pt7Animat {
  animation-delay: 7s;
}

.platform {
  /* height: 242px; */
  background: url(../assets/img/ptbj.png) no-repeat center center;
  background-size: 100% 100%;
  padding: 32px 16px 16px;
  position: absolute;
  top: 10px;
  right: 0;
  width: 60%;
}
.platform span {
  font-size: 18px;
  width: 135px;
}
.ptImg{display: block;
    margin: auto;}
</style>