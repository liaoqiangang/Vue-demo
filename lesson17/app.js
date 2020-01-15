const one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "this is app one"
  },
  methods: {},
  computed: {}
});

const two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "this is app two"
  },
  methods: {
    changgeOneTitle() {
      one.title = "this is app one changed!";
    }
  },
  computed: {
    greet() {
      return "Hello liaoqiangang";
    }
  }
});

two.title = "this is app two changed!";
