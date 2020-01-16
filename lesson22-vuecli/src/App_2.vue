//根组件
<template>
  <div id="app">
    <FormHelper :title="title">
      <div slot="title">
        <h2>{{title}}</h2>
        <p>this is a title test</p>
      </div>
      <div slot="text">
        <h1>这里是文本信息</h1>
        <p>这个是文本内容</p>
      </div>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper";

export default {
  name: "app",
  components: { FormHelper },
  data() {
    return {
      title: "这个是Title"
    };
  },
  methods: {}
};
</script>

<style>
h2 {
  background: lightgreen;
}
</style>
