 <template>
  <div class="contactUs">
    <div class="widthLR">
    <el-row> <el-col :span="24"> <h1 class="titleHegiht">联系我们</h1></el-col></el-row>
    <el-row class="serviceImg">
      <el-col :span="3"><h2>商业合作</h2></el-col>
      <el-col :span="18" class="syhz">service@hashsl.com</el-col>
    </el-row>
    <el-row> 
      <el-col :span="3"><h2>客户服务</h2></el-col>
      <el-col :span="5" class="khfw">
          <img :src="service3" alt="">
          <p style="text-align: center;">Eva</p>
      </el-col>
       <el-col :span="5" class="khfw">
          <img :src="service2" alt="">
          <p style="text-align: center;">花心</p>
      </el-col>
       <el-col :span="5" class="khfw">
          <img :src="service1" alt="">
          <p style="text-align: center;">皇阿玛</p>
      </el-col>
    </el-row>
  </div>
  </div>
</template>
<script>
import service1 from "@/assets/img/service1.png";
import service2 from "@/assets/img/service2.png";
import service3 from "@/assets/img/service3.png";
export default {
  data(){
    return { 
      service1:service1,service2:service2,service3:service3
    }
  }
}
</script>
<style scoped>
.contactUs{height:672px;background-color: #FAFAFA;}
h2{font-weight: 400;margin: auto; font-size: 18px; text-align: left;}
.syhz{text-align: left;font-size: 18px; }
.khfw{text-align: center;font-size: 18px;}
.khfw:nth-child(3){margin:0 12%;}
.myMain{margin-bottom: 98px;}
.serviceImg{margin-bottom:110px;}
</style>