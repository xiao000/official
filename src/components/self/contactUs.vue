 <template>
  <div class="contactUs">
    <el-row> <el-col :span="24"> <h1 class="titleHegiht">联系我们</h1></el-col></el-row>
    <el-row type="flex" class="row-bg myMain" justify="center">
      <el-col :span="4"><h2>商业合作</h2></el-col>
      <el-col :span="9" class="syhz">service@hashsl.com</el-col>
    </el-row>
    <el-row type="flex" class="row-bg myMain2" justify="center">
      <el-col :span="4"><h2>客户服务</h2></el-col>
      <el-col :span="3" class="khfw">
          <img :src="service3" alt="">
      </el-col>
       <el-col :span="3" class="khfw">
          <img :src="service2" alt="">
      </el-col>
       <el-col :span="3" class="khfw">
          <img :src="service1" alt="">
      </el-col>
    </el-row>
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
.contactUs{height:672px;background-color: #FAFAFA; }
.titleHegiht{height: 160px;line-height: 160px;margin: 0;}
h2{font-size: 16px;font-weight: 400;margin: auto;}
.syhz,.khfw{text-align: left;}
.myMain{margin-bottom: 98px;}
/* .khfw div{ display: inline-block;width: 100px;height: 100px;border: 1px solid #CCCBCE;margin-right: 18px;margin-top: 22px} */
</style>