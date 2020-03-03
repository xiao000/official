<template>
    <!-- 合作伙伴 -->
    <div class="partner">
      <el-row><el-col :span="24"><h1>合作伙伴</h1></el-col></el-row>
        <el-row :gutter="20" type="flex" class="row-bg" justify="center">
            <el-col :span="4"><img :src="partner1" alt="partner1"></el-col>
            <el-col :span="4"><img :src="partner2" alt="partner2"></el-col>
            <el-col :span="4"><img :src="partner3" alt="partner3"></el-col>
            <el-col :span="4"><img :src="partner4" alt="partner4"></el-col>
            <el-col :span="4"><img :src="partner5" alt="partner5"></el-col>
        </el-row>
    </div>
</template>
<script>
import partner1 from "@/assets/img/partner1.png";
import partner2 from "@/assets/img/partner2.png";
import partner3 from "@/assets/img/partner3.png";
import partner4 from "@/assets/img/partner4.png";
import partner5 from "@/assets/img/partner5.png";
export default {
  data() {
    return {
      partner1:partner1, partner2:partner2,
       partner3:partner3,partner4:partner4,partner5:partner5
    };
  },
};
</script>
<style scoped>
.partner{
  height: 285px;
  background-color: #FAFAFA;
  }
</style>