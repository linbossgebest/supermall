<template>
  <div id="home">
    <nav-bar class="title">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiperItem v-for="(item, index) in arr" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiperItem>
    </swiper>
    <scroll
      class="content"
      :data="testdata"
      :pullup="pullup"
      @scrollToEnd="loadData"
      :pulldown="pulldown"
      @pulldown="refreshData"
    >
      <ul>
        <li><button @click="testClick">button</button> 1</li>
        <li v-for="(item, index) in testdata" :key="index">{{ item }}</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Home",
  components: {
    Scroll,
    Swiper,
    SwiperItem,
    NavBar,
  },
  data() {
    return {
      pulldown: true,
      pullup: true,
      arr: [
        {
          name: "1",
          link: "#",
          image: require("assets/img/swiper/1.jpg"),
        },
        {
          name: "2",
          link: "#",
          image: require("assets/img/swiper/2.jpg"),
        },
        {
          name: "3",
          llink: "#",
          image: require("assets/img/swiper/3.jpg"),
        },
        {
          name: "4",
          link: "#",
          image: require("assets/img/swiper/4.jpg"),
        },
        {
          name: "5",
          link: "#",
          image: require("assets/img/swiper/5.jpg"),
        },
      ],
      testdata: [],
    };
  },
  mounted() {
    for (var i = 0; i < 19; i++) {
      this.testdata.push(i)
    }
  },
  methods: {
    testClick() {
      // this.$router.replace('/detail')
      this.$router.push("/detail/" + "111");
      this.$toast.show('跳转详细页面')
    },
    loadData() {
      var data = this.testdata.length + 1;
      this.testdata.push(data);
      console.log(this.testdata);
      // setTimeout(() => {

      // }, 200);
    },
    refreshData(){
      console.log("数据刷新")
    }
  },
};
</script>
<style scoped>
.content {
  height: 200px;
  background: blue;
  overflow: hidden;
}

.title {
  background-color: var(--color-tint);
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 10px;
}
</style>