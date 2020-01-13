//实例化vue对象
new Vue({
    el: "#vue-app", //el element
    data: {
        name: "",
        age: ""
    },
    methods: {
        getName() {
            //ref="name"    引用属性
            // console.log(this.$refs);
            this.name = this.$refs.name.value;
        },
        getAge() {
            //     console.log(this.$refs.age);
            //     console.log(this.$refs.age.value);
            this.age = this.$refs.age.value;
        }
    },
    // 监听属性
    watch: {
        name(val, oldVal) {
            console.log(val, oldVal);
        },
        age(val, oldVal) {
            console.log(val, oldVal);
        }
    }
});