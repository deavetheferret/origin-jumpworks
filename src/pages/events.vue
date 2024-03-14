<template>
  <main>
    <section>
      <o-block
        title="IAE 2954"
        content="Come see us at the annual ship showroom for the IAE 2954. We will let you test and purchase our ships as you always want. Don't miss the chance to see the best of the best."
        mediaLink="src/assets/img/iae2953.webp"
        buttonLink="/events"
        buttonText="See the schedule"
      >
      </o-block>
      <o-block-fs
        title="Embrace the luxury"
        content="The 600I serie is here to let you have the rest you deserve. Across the stars and landscapes, take your time without constrinct."
        imgLink="src/assets/img/600i-shadows.webp"
      >
      </o-block-fs>
    </section>
  </main>
</template>

<script setup>
import oBlockFs from "@/components/o-block-fs.vue";
import oBlock from "@/components/o-block.vue";
import oBlockWide from "@/components/o-block-wide.vue";
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  section {
    flex: none;
    scroll-snap-align: start;
  }
}
</style>
