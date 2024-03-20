<template>
  <main>
    <section id="overview">
      <o-block
        title="Since 2754 you have more than a spaceship"
        content="Origin Jumpworks started its journey on the shores of the Rhine in Cologne, Earth. Incorporated during the mid-28th century, the company gained recognition for producing high-quality thrusters for the UEE military. — First era"
        :mediaLink="cologne2857"
        buttonText=""
      ></o-block>
    </section>
    <section>
      <o-block
        title="New journey to New Austin"
        content="Origin Jumpworks envisions a future defined by continued innovation and expansion. Origin aims to further diversify its lineup, offering a range of spacecraft tailored to meet the evolving needs and desires of its discerning clientele in the ever-expanding universe of space travel. — Second era"
        :mediaLink="terraAustin"
        buttonText=""
      ></o-block>
    </section>
    <section>
      <o-block
        title="Looking ahead"
        content="Origin Jumpworks envisions a future defined by continued innovation and expansion. Origin aims to further diversify its lineup, offering a range of spacecraft tailored to meet the evolving needs and desires of its discerning clientele in the ever-expanding universe of space travel. — Third era"
        :mediaLink="sketch100i01"
        buttonText=""
      ></o-block>
    </section>
    <section>
      <o-block
        title="Over the years and over the cameras."
        content="For a several years we filmed and took picture of our events or presence at some events.
For all this time we gather a complete art gallery of our designs and contributors."
        buttonText="See the gallery"
        :mediaLink="landscape400i"
      >
      </o-block>
    </section>
  </main>
</template>

<script setup>
import oBlock from "@/components/o-block.vue";

import cologne2857 from "@/assets/img/cologne-2857.webp";
import terraAustin from "@/assets/img/terra-new-austin.webp";
import sketch100i01 from "@/assets/img/100i-sketch-01.webp";
import landscape400i from "@/assets/img/400i-landscape.webp";
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
