<template>
    <div class="main">
         <!-- 关于我们 -->
        <self-img></self-img>
        
        <about-us></about-us>
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
</style>