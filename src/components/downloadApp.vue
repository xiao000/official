<template>
    <!-- 下载APP -->
    <div id="downloadApp">
        <el-row :gutter="30">
            <el-col :span="4" :offset="8">
                <div class="phoneLogo"></div>
            </el-col>
            <el-col :span="4" :offset="1">
                <div class="codeApp">扫码下载APP</div>
                <div class="appLogo"></div>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
#downloadApp{text-align: center;}
.codeApp{height: 50px; line-height: 50px; width: 200px;}
.phoneLogo{width: 200px;height: 300px;background-color: cadetblue;}
.appLogo{width: 200px;height: 200px;background-color: cadetblue;}
</style>