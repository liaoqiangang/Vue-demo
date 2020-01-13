//实例化vue对象
new Vue({
  el: "#vue-app", //el element
  data: {
    name: "豆豆",
    wechat: "liaoqiangang",
    website: "https://www.baidu.com",
    websiteTag: '<a href="https://taobao.com" target="_blank">taobao</a>',
    age: 30,
    x: 0,
    y: 0
  },
  methods: {
    // greet: function() {
    //   return "Good night " + this.name;
    // }
    greet(time) {
      // return "Good night " + this.name;
      return `Good ${time} ${this.name}`;
    },
    haveLunch() {
      return `你吃过午饭了嘛？`;
    },
    add(inc) {
      this.age += inc;
    },
    substract(dec) {
      this.age -= dec;
    },
    updateXY() {
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    handleClick() {
      alert("baidu");
    },
    logName() {
      console.log("正在输入姓名……");
    },
    logAge() {
      console.log("正在输入年龄……");
    }
  }
});