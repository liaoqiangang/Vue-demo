//实例化vue对象
new Vue({
  el: "#vue-app", //el element
  data: {
    age: 33,
    a: 0,
    b: 0
  },
  //   methods: {
  //     addToA() {
  //       console.log("addToA");
  //       return this.age + this.a;
  //     },
  //     addToB() {
  //       console.log("addToB");
  //       return this.age + this.b;
  //     }
  //   }
  computed: {
    addToA() {
      console.log("addToA");
      return this.age + this.a;
    },
    addToB() {
      console.log("addToB");
      return this.age + this.b;
    }
  }
});
