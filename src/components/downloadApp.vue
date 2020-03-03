<template>
    <!-- 下载APP -->
    <div id="downloadApp">
        <el-row>
            <el-col :md="8" :offset="4">
                <div class="phoneLogo">
                    <img :src="phoneLogo" alt="手机">
                </div>
            </el-col>
            <el-col :md="11">
                <div class="lodApp">
                    <div class="codeApp">扫码下载APP</div>
                    <div class="appLogo">
                        <!-- <img :src="phoneLogo" alt="手机"> -->
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import phone from "@/assets/img/phone.png";
export default {
  data(){
    return { 
      phoneLogo: phone
      }
  }
}
</script>
<style scoped>
#downloadApp{
    background: url(../assets/img/bj.png) no-repeat center top;
    }
.lodApp{padding: 140px;}
.codeApp{height: 50px; line-height: 50px;font-size: 46px;}
.appLogo img{width: 395px;height: 395px;}
</style>