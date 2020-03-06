<template>
    <!-- 下载APP -->
    <div id="downloadApp">
       <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="6">
                <div class="phoneLogo">
                    <img :src="phoneLogo" alt="手机">
                </div>
            </el-col>
            <el-col :span="8">
                <div class="lodApp">
                    <div class="codeApp">扫码下载APP</div>
                    <img :src="appcode" alt="手机">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import phone from "@/assets/img/phone.png";
import appcode from "@/assets/img/appCode.png";
export default {
  data(){
    return { 
      phoneLogo: phone,
      appcode:appcode
      }
  }
}
</script>
<style scoped>
#downloadApp{
    background: url(../assets/img/bj.png) no-repeat center top;
    background-size: 100% 100%;
    /* height: 775px; */
    }
.lodApp{padding-top: 28%;}
.codeApp{font-size: 26px;}
</style>