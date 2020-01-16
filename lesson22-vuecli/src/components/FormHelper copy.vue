<template>
  <div>
    <slot name="title"></slot>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,soluta?</h1>
    <!-- 标签占位 -->
    <slot name="text"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
h2 {
  background: lightgreen;
}
</style>