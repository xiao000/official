 <template>
  <div class="contactUs">
    <el-row> <el-col :span="24"> <h1>联系我们</h1></el-col></el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3"><h2>商业合作：</h2></el-col>
      <el-col :span="8" class="syhz">service@hashsl.com</el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="3"><h2>客户服务：</h2></el-col>
      <el-col :span="8" class="khfw">
        <div></div>
        <div></div>
        <div></div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.contactUs{height: 500px;}
h1{font-size: 36px;}
h2{font-size: 26px;}
.syhz,.khfw{line-height: 78px;text-align: left;}
.khfw div{ display: inline-block;width: 100px;height: 100px;border: 1px solid #CCCBCE;margin-right: 18px;}
</style>