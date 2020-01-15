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
      fetch("http://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(this.todo),
        headers: {
          "Content-type": "application/json"
        }
      })
        .then(res => {
          return res.json();
        })
        .then(todo => {
          console.log(todo);
          this.todos.unshift(todo);
        });
    }
  },
  computed: {},
  mounted() {
    //自动会执行
    // fetch get请求
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => {
        return res.json();
      })
      .then(todos => {
        this.todos = todos;
      });
    //Promise对象，有三种状态 result-已经获取结果  pending-还在请求中 reject-失败了
    // 成功，会走.then  失败会走.catch
    // console.log(todos);
  }
});
