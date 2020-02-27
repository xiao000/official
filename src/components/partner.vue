<template>
    <!-- 合作伙伴 -->
    <div class="partner">
        <el-row :gutter="20">
            <el-col :span="4"><h2>合作伙伴</h2></el-col>
            <template v-for="(item,index) in items">
            <el-col :span="4" :key="index"><h5>{{item}}</h5></el-col>
            </template>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["合作伙伴1", "合作伙伴2", "合作伙伴3", "合作伙伴4","合作伙伴5"]
    };
  },
};
</script>
<style scoped>
.partner{border-bottom: 0.5px dashed #DEE1E6;border-top:0.5px dashed #DEE1E6;}
</style>