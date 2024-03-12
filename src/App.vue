<template>
  <o-header></o-header>
  <div class="noise-bg"></div>
</template>

<script setup>
import oHeader from "./components/o-header.vue";
</script>

<style scoped>
.noise-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.1;
  user-select: none;
  pointer-events: none;
  z-index: 1;
  background: url(assets/img/bg-noise-source.png),
    lightgray 0% 0% / 69.53125px 69.53125px repeat;
}
</style>
