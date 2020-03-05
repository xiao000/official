<template>
  <!-- 云算力 -->
  <div id="cloud">
    <el-row>
      <el-col :span="24">
        <h1>云算力</h1>
      </el-col>
    </el-row>
     <el-row type="flex" class="row-bg" justify="center" align="middle">
        <el-col :span="6">
              <img :src="cloud1" alt="1" />
              <span class="cloudTxt">购买算力套餐</span>
        </el-col>
        <el-col :span="6">
          <div class="arrow">
            <img :src="arrow2" alt="1" />
          </div>
        </el-col>
        <el-col :span="6" class="btCloud">
          <img :src="cloud2" alt="1" />
          <span class="cloudTxt" id="positionPT">比特云算平台</span>
        </el-col>
    </el-row>
        <biTiCloudPT></biTiCloudPT>
    <el-row>
      <el-col :span="12" :offset="12">
        <div class="arrowt">
          <img :src="arrow1" alt="1" />
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" align="middle">
      <el-col :span="6">
        <img :src="cloud3" alt="1" />
        <span class="cloudTxt">分配收益给用户</span>
      </el-col>
     <el-col :span="6">
        <div class="arrowl">
          <img :src="arrow2" alt="1" />
        </div>
      </el-col>
     <el-col :span="6" :offset="1">
        <img :src="cloud4" alt="1" />
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
import arrow1 from "../assets/img/arrow1.png";
import arrow2 from "../assets/img/arrow22.png";
import biTiCloudPT from "./biTPt"
export default {
  data() {
    return {
      cloud1: cloud1,
      cloud2: cloud2,
      cloud3: cloud3,
      cloud4: cloud4,
      arrow1: arrow1,
      arrow2: arrow2
    };
  },
  components:{
    biTiCloudPT
  }
};
</script>
<style type="text/css3" scoped>
#cloud {
  background-color: #fafafa;
  padding-bottom: 90px;
  margin-bottom: 20px;
}
.cloudTxt {
  font-size: 26px;
  width: 192px;
}
/* .arrow,.arrowl{
        height:auto;
        width: 25%;
        max-width:100%;
        max-height:100%;
        }   */
        /* .arrowt img {
  transform: rotate(90deg);
}  */
   /* .arrowt{width: auto;height:auto;  max-width:100%;
        max-height:100%;} */

.arrow {
  position: relative;
  animation: arrowRight 3s linear infinite;
}

@keyframes arrowRight {
  0% {
    opacity: 0;
    left: -58px;
  }
  20% {
    opacity: 0.33;
    left: -38px;
  }
  40% {
    opacity: 0.66;
    left: -18px;
  }
  60% {
    opacity: 0.8;
    left: 8px;
  }
  80% {
    opacity: 0.5;
    left: 28px;
  }
  100% {
    opacity: 0;
    left: 58px;
  }
}
@-webkit-keyframes arrowRight {
   0% {
    opacity: 0;
    left: -58px;
  }
  20% {
    opacity: 0.33;
    left: -38px;
  }
  40% {
    opacity: 0.66;
    left: -18px;
  }
  60% {
    opacity: 0.8;
    left: 8px;
  }
  80% {
    opacity: 0.5;
    left: 28px;
  }
  100% {
    opacity: 0;
    left: 58px;
  }
}
@-moz-keyframes  arrowRight {
  0% {
    opacity: 0;
    left: -58px;
  }
  20% {
    opacity: 0.33;
    left: -38px;
  }
  40% {
    opacity: 0.66;
    left: -18px;
  }
  60% {
    opacity: 0.8;
    left: 8px;
  }
  80% {
    opacity: 0.5;
    left: 28px;
  }
  100% {
    opacity: 0;
    left: 58px;
  }
}
.arrowt{
  position: relative;
  animation: arrowDown 3s linear infinite;
}
@keyframes arrowDown {
  0% {
    opacity: 0;
    top: -18px;
  }
  20% {
    opacity: 0.33;
    top: 8px;
  }
  40% {
    opacity: 0.66;
    top: 18px;
  }
  60% {
    opacity: 0.8;
    top: 28px;
  }
  80% {
    opacity: 0.5;
    top: 38px;
  }
  100% {
    opacity: 0;
    top: 58px;
  }
}
@-webkit-keyframes arrowDown {
 0% {
    opacity: 0;
    top: -18px;
  }
  20% {
    opacity: 0.33;
    top: 8px;
  }
  40% {
    opacity: 0.66;
    top: 18px;
  }
  60% {
    opacity: 0.8;
    top: 28px;
  }
  80% {
    opacity: 0.5;
    top: 38px;
  }
  100% {
    opacity: 0;
    top: 58px;
  }
}
@-moz-keyframes arrowDown {
 0% {
    opacity: 0;
    top: -18px;
  }
  20% {
    opacity: 0.33;
    top: 8px;
  }
  40% {
    opacity: 0.66;
    top: 18px;
  }
  60% {
    opacity: 0.8;
    top: 28px;
  }
  80% {
    opacity: 0.5;
    top: 38px;
  }
  100% {
    opacity: 0;
    top: 58px;
  }
}
.arrowl {
  position: relative;
  animation: arrowLeft 3s linear infinite;
}
@keyframes arrowLeft {
  0% {
    opacity: 0;
    right: -58px;
  }
  20% {
    opacity: 0.33;
    right: -38px;
  }
  40% {
    opacity: 0.66;
    right: -18px;
  }
  60% {
    opacity: 0.8;
    right: 8px;
  }
  80% {
    opacity: 0.5;
    right: 28px;
  }
  100% {
    opacity: 0;
    right: 58px;
  }
}
@-webkit-keyframes arrowLeft {
  0% {
    opacity: 0;
    right: -58px;
  }
  20% {
    opacity: 0.33;
    right: -38px;
  }
  40% {
    opacity: 0.66;
    right: -18px;
  }
  60% {
    opacity: 0.8;
    right: 8px;
  }
  80% {
    opacity: 0.5;
    right: 28px;
  }
  100% {
    opacity: 0;
    right: 58px;
  }
}
@-moz-keyframes arrowLeft {
  0% {
    opacity: 0;
    right: -58px;
  }
  20% {
    opacity: 0.33;
    right: -38px;
  }
  40% {
    opacity: 0.66;
    right: -18px;
  }
  60% {
    opacity: 0.8;
    right: 8px;
  }
  80% {
    opacity: 0.5;
    right: 28px;
  }
  100% {
    opacity: 0;
    right: 58px;
  }
}

.arrowl img {
  transform: rotate(180deg);
}

</style>