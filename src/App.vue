<template>
  <o-header></o-header>
  <router-view></router-view>
  <o-footer></o-footer>
</template>

<script setup>
import oHeader from "@/components/o-header.vue";
import oFooter from "@/components/o-footer.vue";
import router from "@/router.js";
</script>

<style scoped>
.noise-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  user-select: none;
  pointer-events: none;
  z-index: 1000;
  mix-blend-mode: multiply;
  background: url(assets/img/bg-noise-source.png),
    lightgray 0% 0% / 69.53125px 69.53125px repeat;
}
</style>
