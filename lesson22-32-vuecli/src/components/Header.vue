<template>
  <div class="header" @click="changeTitle">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      // title: "Vue Components Demo"
    };
  },
  methods: {
    changeTitle() {
      //   this.title = "liaoqiangang changed title";
      //注册事件    参数1:事件名称；参数2...：值
      console.log("注册事件");
      this.$emit("titleChange", "liaoqiangang changed title");
    }
  },
  //生命周期函数
  beforeCreate() {
    alert("1、这时实例还没有被创建，所以你无法知道deta，也不能用watch监听！");
  },
  created() {
    alert("2、这时实例已经创建，可以得到data，调用watch，但是页面还是空白的");
  },
  beforeMount() {
    alert("3、页面挂载前，此时页面依然是空白的，这时render函数首次被使用");
  },
  mounted() {
    alert("4、页面挂载了，这时你可以看到页面的内容，也可以访问到dom");
  },
  beforeUpdate() {
    alert("5、数据更新前，也就是虚拟DOM打补丁之前");
  },
  updated() {
    alert("6、数据已经更新完毕");
  },
  beforeDestroy() {
    alert("7、页面离开之前被调用，清除定时器，或者三方的一些DOM结构");
  },
  destroyed() {
    alert("8、实例已经完全被销毁");
  }
};
</script>

<style scoped>
.header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
