//实例化vue对象
new Vue({
  el: "#vue-app", //el element
  data: {
    mrChangeColor: true,
    mrChangeLength: false
  },
  computed: {
    comClass: function() {
      return {
        changeColor: this.mrChangeColor,
        changelength: this.mrChangeLength
      };
    }
  },
  watch: {
    mrChangeColor(val, oldVal) {
      console.log(val, oldVal);
    }
  }
});
