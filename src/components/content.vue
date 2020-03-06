<template>
   
    <div class="main">
        <carousel></carousel>
        <cloud></cloud>
        <advantage></advantage>
         <business></business>
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

</style>