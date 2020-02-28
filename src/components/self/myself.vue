<template>
    <div class="main">
         <!-- 关于我们 -->
        <self-img></self-img>
        <hr>
        <about-us></about-us>
        <hr>
        <contact-us></contact-us>
        
    </div>
</template>
<script>
import selfImg from "@/components/self/selfImg"
import aboutUs from "@/components/self/aboutUs"
import contactUs from "@/components/self/contactUs"
export default {
    components:{
            selfImg,
            aboutUs,
            contactUs
        },
}
</script>
<style scoped>
hr{
    border:0.5px dashed #DEE1E6;margin:20px 0
}
</style>