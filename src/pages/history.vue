<template>
  <main>
    <section>
      <o-block-fs
        title="Embrace the luxury"
        content="The 600I serie is here to let you have the rest you deserve. Across the stars and landscapes, take your time without constrinct."
        imgLink="src/assets/img/600i-shadows.webp"
      >
      </o-block-fs>
      <o-block-fs></o-block-fs>
      <o-block-fs></o-block-fs>
      <o-block-fs></o-block-fs>
    </section>
  </main>
</template>

<script setup>
import oBlockFs from "@/components/o-block-fs.vue";
</script>

<style scoped>
main {
  height: 100vh;
  section {
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    div {
      flex: none;
      scroll-snap-align: start;
    }
  }
}
</style>
