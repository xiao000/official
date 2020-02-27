<template>
  <!-- 业务范围 -->
  <div id="business">
    <el-row>
      <el-col :span="24">
        <h1>业务范围</h1>
      </el-col>
      <template v-for="(item, index) in items">
        <el-col :span="8" :key="index">
          <div class="img">{{item.imgVal}}</div>
          <h3>{{item.title}}</h3>
          <span>{{item.text}}</span>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          imgVal: "图片",
          title: "云算力",
          text: "云算力合约，1元起购，获取数字货币收益如此简单"
        },
        {
          imgVal: "图片",
          title: "矿机托管",
          text: "降低运维难度和电力成本保障矿机安全和稳定的运转"
        },
        {
          imgVal: "图片",
          title: "矿场基建",
          text: "规模化运作，集群化部署成本低，效率高"
        }
      ]
    };
  }
};
</script>