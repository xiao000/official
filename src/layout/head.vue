<template>
  <div class="handMain">
    <el-row>
      <el-col :span="10">
        <el-col :md="10" :sm="10" :offset="2">
          <!-- LOGO图 -->
          <div class="logoImg"></div>
        </el-col>
        <el-col :md="8" :sm="12">
          <span class="logoText">买算力，更便宜！</span>
        </el-col>
      </el-col>
      <el-col :md="14" :sm="24">
        <ul class="el-menu-demo" mode="horizontal">
          <li
            :class="{ active: index==selectItem }"
            v-for="(item,index) in items"
            @click="change(index,item.domId)"
            :key="index"
          >{{item.name}}</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectItem: 0,
      items: [
        { domId: "block", name: "首页" },
        { domId: "business", name: "业务范围" },
        { domId: "cloud", name: "云算力" },
        { domId: "downloadApp", name: "下载APP" },
        { domId: "", name: "关于我们" }
      ]
    };
  },
  methods: {
    change(index, domId) {
      if (index == "4") {
           this.$router.push({ path: "/myself" });
      } else {
         this.$router.push({ path: "/content" });
        // 当前窗口正中心位置到指定dom位置的距离
        //页面滚动了的距离
        let height =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        //指定dom到页面顶端的距离
        let dom = document.getElementById(domId);
        let domHeight = dom.offsetTop + 10;
        //滚动距离计算
        var S = Number(height) - Number(domHeight);
        //判断上滚还是下滚
        if (S < 0) {
          //下滚
          S = Math.abs(S);
          window.scrollBy({ top: S, behavior: "smooth" });
        } else if (S == 0) {
          //不滚
          window.scrollBy({ top: 0, behavior: "smooth" });
        } else {
          //上滚
          S = -S;
          window.scrollBy({ top: S, behavior: "smooth" });
        }
        this.selectItem = index
      }
    }
  }
};
</script>

<style scoped>
.logoImg {
  display: inline-block;
  width: 100%;
  height: 90px;
  background-color: #999;
  margin: 10px 0;
}
.logoText {
  line-height: 115px;
}
.handMain {
  border-bottom: 1px solid #dfdfdf;
}

.handMain ul {
  margin: 0;
  height: 115px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.handMain ul li {
  list-style: none;
  width: 100px;
  height: 115px;
  line-height: 115px;
  font-size: 20px;
  padding: 0 10px;
}
.handMain ul li a {
  display: block;
  color: black;
  text-align: center;
  text-decoration: none;
}
.handMain ul li.active,
.handMain ul li:hover {
  border: none;
  color: #ff6a00;
}
</style>