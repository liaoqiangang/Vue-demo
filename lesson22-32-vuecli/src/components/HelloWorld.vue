<template>
  <!-- HTML结构：只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ name }}</p>
    <p>微信号：{{ wechat }}</p>
    <p v-html="greeting()"></p>
  </div>
</template>

<script>
//js部分 逻辑部分
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      name: "廖千刚",
      wechat: "271476372"
    };
  },
  methods: {
    greeting() {
      // 注意不是双引号和单引号，是反单引号
      return `大家好，我叫 <b>${this.name}</b>,我的微信号是：<b>${this.wechat}</b>`;
    }
  }
};
</script>

<style scoped>
/* css样式部分 */
</style>
