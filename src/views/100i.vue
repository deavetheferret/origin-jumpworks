<template>
  <main>
    <section>
      <o-block-fs
        title="100I series"
        content="The 600I serie is here to let you have the rest you deserve. Across the stars and landscapes, take your time without constrinct."
        :imgLink="ship100i"
        buttonText=""
      ></o-block-fs>
    </section>
    <section>
      <o-block-fs
        title="The concept"
        content="Tour the universe with the perfect coupling of luxury and performance. The most efficient and eco-friendly ship on the market. Capable of long distance flights that most ships of its size aren't equipped for, the 100i is perfect for solo pilots looking to turn heads without sacrificing functionality or reliability."
        buttonText=""
        :imgLink="sketch100i04"
      ></o-block-fs>
    </section>
    <section>
      <o-block
        title="Designed for efficiency"
        content="The 100I was designed to reach the best look wihtout breaking its power. Fly with style faster than ever. Unleash the power of the air and take the control of the sky."
        buttonText=""
        :mediaLink="sketch100i02"
      ></o-block>
    </section>
    <section>
      <o-block
        title="Break the limits"
        content="All lines, all curves, all shapes are designed to make you feel the power of the 100I and its speed. Like a curvy strike, find you style and make it yours."
        buttonText=""
        :mediaLink="sketch100i03"
      ></o-block>
    </section>
    <section>
      <o-block-fs
        title="A perfect balance"
        content="There is no need to choose between luxury and performance. The 100I is the perfect balance between both. A clueless design, without a single visible cable, bolt or screw. Smoother than ever."
        buttonText=""
        :imgLink="ext100i02"
      ></o-block-fs>
    </section>
    <section>
      <o-block-fs
        title="AIR technology"
        content="The AIR technology for Adaptive Intake Refinery is a patented system that enables the 100I to fly at high speed in atmospheric conditions and with high manoeuvrability."
        buttonText=""
        :imgLink="ext100i01"
      ></o-block-fs>
    </section>
    <section>
      <o-block
        title="Quick look in the hull"
        content="The interior of the 100I was made in only one purpose — efficiency. Sober with straight lines, the origin’s style hit hard on this ship."
        buttonText=""
        :mediaLink="int100i"
      ></o-block>
    </section>
    <section>
      <o-block
        title="Your ship, your style"
        content="Choose whithin these 3 different styles to make your 100I yours. "
        buttonText="Find a dealer"
        pageLink="https://robertsspaceindustries.com/pledge/ships?manufacturer_id%5B%5D=6"
        :mediaLink="colors100i"
      ></o-block>
    </section>
  </main>
</template>

<script setup>
import oBlockFs from "@/components/o-block-fs.vue";
import oBlock from "@/components/o-block.vue";

import ship100i from "@/assets/img/100i.webp";
import sketch100i04 from "@/assets/img/100i-sketch-04.webp";
import sketch100i02 from "@/assets/img/100i-sketch-02.webp";
import sketch100i03 from "@/assets/img/100i-sketch-03.webp";
import ext100i02 from "@/assets/img/100i-ext-02.webp";
import ext100i01 from "@/assets/img/100i-ext-01.webp";
import int100i from "@/assets/img/100i-interior.webp";
import colors100i from "@/assets/img/100i-colors.webp";
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
