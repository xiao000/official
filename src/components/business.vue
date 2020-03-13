<template>
  <!-- 业务范围 -->
  <div id="business">
    <div class="widthLR">
    <el-row><el-col :span="24"><h1 class="titleHegiht">业务范围</h1></el-col></el-row>
    <div style="height:100px;"></div>
    <el-row>
      <template v-for="(item, index) in items">
        <el-col class="businessMian" :span="8" :key="index">
          <div class="img">
            <img :src="item.imgVal" :alt="index">
            </div>
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
        </el-col>
      </template>
    </el-row>
    </div>
  </div>
</template>
<script>
import business1 from "../assets/img/business1.png"
import business2 from "../assets/img/business2.png"
import business3 from "../assets/img/business3.png"
export default {
  data() {
    return {
      items: [
        {
          imgVal: business1,
          title: "云算力",
          text: "云算力套餐，1元起购，获取数字货币收益如此简单"
        },
        {
          imgVal: business2,
          title: "矿机托管",
          text: "降低运维难度和电力成本 保障矿机安全和稳定运转"
        },
        {
          imgVal: business3,
          title: "矿场基建",
          text: "规模化运作，集群化部署成本低，效率高"
        }
      ]
    };
  }
};
</script>
<style scoped>
#business{margin-bottom: 20px;height: 712px;}
#business h3{font-size: 24px; font-weight: 500;}
#business p{
    font-size: 18px;
    width: 206px;
    display: block;
    text-align:left;
    margin: auto;
    padding-left: 20px;
    font-weight: 300;
    color: #575757;
    }
    .businessMian:first-child{width: 20.53%;}
     .businessMian:nth-child(2){width: 56.13%;}
      .businessMian:last-child{width: 23.33%;}

</style>