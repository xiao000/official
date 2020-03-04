<template>
  <div id="block">
    <el-carousel :height="bannerHeight + 'px'">
      <el-carousel-item v-for="(item,index) in Carousel" :key="index">
        <el-row>
          <el-col :span="24">
             <img :src="item.imgVal" :alt="index" ref="bannerHeight" @load="imgLoad" />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Carousel1 from "../assets/img/Carousel1.png"
import Carousel2 from "../assets/img/Carousel1.png"
import Carousel3 from "../assets/img/Carousel1.png"
export default {
  data() {
    return {
      bannerHeight:"",
      Carousel: [
        {
          imgVal: Carousel1
        },
        {
          imgVal: Carousel2
        },
        {
          imgVal: Carousel3
        }
      ]
    }
  },
    mounted() {
      this.imgLoad();
      window.addEventListener("resize",()=>{
        this.bannerHeight=this.$refs.bannerHeight[0].height;
        this.imgLoad();
      })
    },
    methods:{
      imgLoad(){
        this.$nextTick(()=>{
          this.bannerHeight=this.$refs.bannerHeight[0].height;
        })
      }
    }
}
</script>
<style>
#block img{
    width: 100%;
    height: 100%;
}
</style>