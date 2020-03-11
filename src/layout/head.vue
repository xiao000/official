<template>
  <div class="handMain">
    <div class="widthLR">
    <el-row>
        <el-col :span="3" class="logoImg">
          <img class="logo" :src="logo" alt="比特云算" />
      </el-col>
      <el-col :span="12" :offset="9">
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
  </div>
</template>
<script>
import logoImg from "@/assets/img/logo11.png";
export default {
  data() {
    return {
      logo: logoImg,
      selectItem: 0,
      items: [
        { domId: "block", name: "首页" },
        { domId: "cloud", name: "云算力" },
        { domId: "business", name: "业务范围" },
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
 line-height: 80px;
}
.logoImg img{vertical-align:middle;margin-right:20px;}

.handMain {
  background-color: #2d2d2d;
  color: #ffffff;
  border-bottom: 1px solid #2d2d2d;
  height: 80px;
}

.handMain ul {
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.handMain ul li {
  list-style: none;
  min-width: 80px;
  line-height: 80px;
  padding: 0 15px;
  font-size: 17px;
}
.handMain ul li:last-child{
  padding: 0;
  margin: 0;
}
.handMain ul li.active,
.handMain ul li:hover {
  color: #F55033;
  font-size: 17px;
  font-weight: 600;
}
</style>