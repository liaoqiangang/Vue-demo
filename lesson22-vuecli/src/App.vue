//根组件
<template>
  <div id="app">
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <button @click="component='form-one'">show form one</button>
    <button @click="component='form-two'">show form two</button>
    <!-- <form-one />
    <form-two />-->
  </div>
</template>

<script>
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
export default {
  name: "app",
  components: {
    "form-one": FormOne,
    "form-two": FormTwo
  },
  data() {
    return {
      component: "form-one"
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
