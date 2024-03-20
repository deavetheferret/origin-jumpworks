<template>
  <main>
    <section id="featured">
      <o-block-fs
        title="Embrace the luxury"
        content="The 600I serie is here to let you have the rest you deserve. Across the stars and landscapes, take your time without constrinct."
        :imgLink="shadow600i"
        pageLink="/ships"
      >
      </o-block-fs>
    </section>
    <section id="our-history">
      <o-block
        title="Since 2754, you have more than a spaceship."
        content="Origin Jumpworks GmBH started its journey on the shores of the Rhine in Cologne, Earth. Incorporated during the mid-28th century, the company gained recognition for producing high-quality thrusters for the UEE military."
        :mediaLink="renderLooped"
        pageLink="/history"
      ></o-block>
    </section>
    <section id="our-presence">
      <o-block-wide
        title="IAE 2954"
        content="Come see us at the annual ship showroom for the IAE 2954. We will let you test and purchase our ships as you always want.
        The IAE will takes place at NewBabbage — November 2954"
        :imgLink="iae2953"
        buttonText="Get your tickets"
        pageLink="/events"
      ></o-block-wide>
      <o-block-wide
        title="CitizenCon 2954"
        content="CitizenCon 2954 returns to Manchester Central on October 19-20. We are going to show our latest innovations and ships concepts. As always, we love to see you, who's buying our ships and the citizenCon is the best place for that. — October 19-20 2954"
        :imgLink="g12"
        buttonText="Get your tickets"
        pageLink="/events"
      >
      </o-block-wide>
    </section>
    <section id="find-a-ship">
      <o-block-fs
        title="Travel the world like Roland McFee"
        content="Get the brand new iteration of our famous M50 you'll be surprised by its power and speed rather than its length. One of the littlest ship ever made in our New Austin's factory.
          Be the first to travel that fast and that precize."
        :imgLink="m50"
        pageLink="/ships"
      ></o-block-fs>
    </section>
  </main>
</template>

<script setup>
import oBlockFs from "@/components/o-block-fs.vue";
import oBlock from "@/components/o-block.vue";
import oBlockWide from "@/components/o-block-wide.vue";

import shadow600i from "@/assets/img/600i-shadows.webp";
import renderLooped from "@/assets/video/render-looped.gif";
import iae2953 from "@/assets/img/iae2953.webp";
import g12 from "@/assets/img/g12-exterior.png";
import m50 from "@/assets/img/m50.webp";
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
style
