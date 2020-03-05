<template>
    <!-- 下载APP -->
    <div id="downloadApp">
        <el-row>
            <el-col :span="8" :offset="4">
                <div class="phoneLogo">
                    <img :src="phoneLogo" alt="手机">
                </div>
            </el-col>
            <el-col :span="12">
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
    background-size: 100% 100%;
    }
.lodApp{padding: 140px;}
.codeApp{height: 50px; line-height: 50px;font-size: 46px;}
/* .appLogo{background-color: #fff;border: 1px solid #fff;height: 100px;width: 100px;} */
/* .phoneLogo img{ width:auto;
        height:auto;
        max-width:100%;
        max-height:100%;} */
</style>