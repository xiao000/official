<template>
  <!-- 业务范围 -->
  <div id="business">
    <el-row><el-col :span="24"><h1>业务范围</h1></el-col></el-row>
   <el-row :gutter="20" type="flex" class="row-bg" justify="center">
      <template v-for="(item, index) in items">
        <el-col :span="5" :key="index">
          <div class="img">
            <img :src="item.imgVal" :alt="index">
            </div>
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
        </el-col>
      </template>
    </el-row>
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
          text: "云算力合约，1元起购，获取数字货币收益如此简单"
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
#business{margin-bottom: 20px;height: 389px;}
#business h3{font-size: 14px;}
#business p{font-size: 12px;
    width: 138px;
    display: block;
    text-align: left;
    margin: auto;}
</style>