
//根组件
<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Header @titleChange="updateTitle" :title="title" />
    <h1>App.vue</h1>
    <!-- 3、调用组件 -->
    <!-- 属性传值：值有两种情况：1、传值  2、传引用（对象 数组） -->
    <Users :users="users" />
    <br />
    <Users :users="users" />
    <Footer />
  </div>
</template>

<script>
//局部调用组件
//1、局部引入组件
import Users from "./components/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "app",
  // 2、注册组件
  components: { Users, Header, Footer },
  data() {
    return {
      users: [
        { name: "廖千刚1", wechat: "liaoqiangang", show: false },
        { name: "廖千刚2", wechat: "liaoqiangang", show: false },
        { name: "廖千刚3", wechat: "liaoqiangang", show: false },
        { name: "廖千刚4", wechat: "liaoqiangang", show: false },
        { name: "廖千刚5", wechat: "liaoqiangang", show: false },
        { name: "廖千刚6", wechat: "liaoqiangang", show: false },
        { name: "廖千刚7", wechat: "liaoqiangang", show: false }
      ],
      title: "Vue liaoqiangang！"
    };
  },
  methods: {
    updateTitle(updatedTitle) {
      console.log(updatedTitle);

      this.title = updatedTitle;
    }
  }
};
</script>

<style>
h1 {
  color: purple;
}
</style>
