<template>
   
    <div class="main">
         <!-- 走马灯 -->
        <carousel></carousel>
        <hr>
        <business></business>
        <hr>
        <cloud></cloud>
        <hr>
        <advantage></advantage>
        <hr>
        <download-app></download-app>
    </div>
</template>
<script>
import Carousel from "@/components/carousel"
import Business from "@/components/business"
import Cloud from "@/components/cloud"
import Advantage from "@/components/advantage"
import DownloadApp from "@/components/downloadApp"
export default {
    components:{
            Carousel,
            Business,
            Cloud,
            Advantage,
            DownloadApp
        },
}
</script>
<style scoped>
hr{
    border:0.5px dashed #DEE1E6;margin:20px 0
}
</style>