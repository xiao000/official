<template>
  <!-- 比特云算的优势-->
  <div id="advantage">
    <el-row><el-col :span="24"><h1>比特云算的优势</h1></el-col></el-row>
    <el-row type="flex" class="row-bg" justify="center">
    <template v-for="(item, index) in item1">
        <el-col :span="12" :key="index">
          <el-col :span="6" :offset="6">
            <img :src="item.imgVal" :alt="item.title">
          </el-col>
          <el-col :span="10" class="textCl">
            <h3>{{item.title}}</h3>
            <span>{{item.text}}</span>
              
          </el-col>
        </el-col>
      </template>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
    <template v-for="(item, index) in item2">
        <el-col :span="12" :key="index">
          <el-col :span="6" :offset="6">
            <img :src="item.imgVal" :alt="item.title">
          </el-col>
          <el-col :span="10" class="textCl">
            <h3>{{item.title}}</h3>
            <span>{{item.text}}</span>
          </el-col>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script>
import advantage1 from "../assets/img/advantage1.png"
import advantage2 from "../assets/img/advantage2.png"
import advantage3 from "../assets/img/advantage3.png"
import advantage4 from "../assets/img/advantage4.png"
export default {
  data() {
    return {
      item1:[{
          imgVal: advantage1,
          title: "产品丰富",
          text: "180天/360天、含电费/不含电费 全都有"
        },
        {
          imgVal: advantage2,
          title: "收益稳定",
          text: "运营期间从未故障断发用户收益"
        }],
      item2:[
          {
          imgVal: advantage3,
          title: "超低电费",
          text: "每度电价低至0.38元"
        },
        {
          imgVal: advantage4,
          title: "1元起购",
          text: "起购门槛业内最低"
        }]
    };
  }
};
</script>
<style scoped>
#advantage{background-color: #FAFAFA; margin-bottom: 20px;}
.row-bg{padding-bottom: 90px;}
.textCl{text-align: left;padding-top:5%}
</style>