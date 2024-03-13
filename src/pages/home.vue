<template>
  <main>
    <section id="featured">
      <o-block-fs
        title="Embrace the luxury"
        content="The 600I serie is here to let you have the rest you deserve. Across the stars and landscapes, take your time without constrinct."
        imgLink="src/assets/img/600i-shadows.webp"
      >
      </o-block-fs>
    </section>
    <section id="our-history">
      <o-block
        title="Since 2754, you have more than a spaceship."
        content="Origin Jumpworks GmBH started its journey on the shores of the Rhine in Cologne, Earth. Incorporated during the mid-28th century, the company gained recognition for producing high-quality thrusters for the UEE military."
        mediaLink="src/assets/video/render-looped.gif"
      ></o-block>
    </section>
    <section id="find-a-ship">
      <o-block-fs
        title="Travel the world like Roland McFee"
        content="Get the brand new iteration of our famous M50 you'll be surprised by its power and speed rather than its length. One of the littlest ship ever made in our New Austin's factory.
          Be the first to travel that fast and that precize."
        imgLink="src/assets/img/m50.webp"
      ></o-block-fs>
    </section>
  </main>
</template>

<script setup>
import oBlockFs from "@/components/o-block-fs.vue";
import oBlock from "@/components/o-block.vue";
</script>

<style scoped>
main {
  section {
    width: 100vw;
  }
}
</style>
