<template>
<!-- 走马灯 -->
  <div id="block">
    <el-carousel height="826px">
      <el-carousel-item v-for="item in Carousel" :key="item">
        <img :src="item" alt="Carousel">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Carousel1 from "../assets/img/Carousel1.png"
export default {
  data() {
    return {
      Carousel:[Carousel1,Carousel1,Carousel1]
    }
  }
}
</script>
<style>
#block{margin-bottom:20px;}
</style>