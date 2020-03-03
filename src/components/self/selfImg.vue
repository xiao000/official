 <template>
     <div class="imgTxt">
         <img :src="bgImg" alt="背景图">
     </div>
</template>
<script>
import bgImg1 from "@/assets/img/bj2.png";
export default {
    data() {
        return {
        bgImg:bgImg1
        }
    }
}
</script>
<style scoped>
.imgTxt img{width:100%;
	height:auto;}
</style>