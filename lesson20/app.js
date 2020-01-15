new Vue({
  el: "#vue-app",
  data: {
    todos: [],
    todo: {
      title: "",
      completed: false
    }
  },
  methods: {
    onSubmit() {
      axios
        .post("http://jsonplaceholder.typicode.com/todos", this.todo)
        .then(res => {
          this.todos.unshift(res.data);
        });
    }
  },
  computed: {},
  mounted() {
    axios.get("http://jsonplaceholder.typicode.com/todos").then(res => {
      this.todos = res.data;
    });
  }
});
