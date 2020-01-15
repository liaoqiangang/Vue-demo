//创建全局变量
let data = {
  name: "豆豆",
  wechat: "liaoqiangang"
};

// 创建全局组件
Vue.component("Greeting", {
  // html 模版
  template: `
    <p>
    这是全局组件，可以在任何等容器中使用
    我的名字是：{{ name }}
    我的微信号：{{ wechat }}
    <button @click="changeName">改名</button>
    </p>
  `,
  // 属性 方法等
  data() {
    return data;
  },
  methods: {
    changeName() {
      this.name = "欢欢";
    }
  }
});

const one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "app one"
  },
  methods: {},
  computed: {}
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "app two"
  },
  methods: {},
  computed: {}
});
