<template>
  <div class="handMain">
    <el-row>
      <el-col :span="10">
          <div class="logoImg">
            <img class="logo" :src="logo" alt="比特云算" />
          </div>
       
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
import logoImg from "@/assets/img/logo1.png";
export default {
  data() {
    return {
      logo: logoImg,
      selectItem: 0,
      items: [
        { domId: "block", name: "首页" },
        { domId: "business", name: "业务范围" },
        { domId: "cloud", name: "云算力" },
        { domId: "downloadApp", name: "下载APP" },
        { domId: "block", name: "关于我们" }
      ]
    };
  },
  methods: {
    change(index, domId) {
      var that = this;
      if (index != "4") {
        if (that.$route.path == "/content") {
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
          that.selectItem = index;
        } else {
          that.selectItem = index;
          that.$router.push({ path: "/content" });
        }
      } else {
        that.selectItem = index;
        that.$router.push({ path: "/myself" });
      }
    }
  }
};
</script>

<style scoped>
.logoImg{
  display: inline-block;
  width: 100%;
  height: 90px;
  line-height: 90px;
  margin: 10px 0;
}
.logoImg img{vertical-align:middle;}

.handMain {
  background-color: #000000;
  color: #ffffff;
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
  /* color: #ff6a00; */
  background-color: #ff6a00;
}
</style>