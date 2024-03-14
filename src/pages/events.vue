<template>
  <main>
    <section id="featured">
      <o-block
        title="IAE 2954"
        content="Come see us at the annual ship showroom for the IAE 2954. We will let you test and purchase our ships as you always want. Don't miss the chance to see the best of the best."
        mediaLink="src/assets/img/iae2953.webp"
        buttonLink="/events"
        buttonText="See the schedule"
      >
      </o-block>
    </section>
    <section id="this-year">
      <o-block-fs
        title="CitizenCon 2954"
        content="CitizenCon 2954 returns to Manchester Central on October 19-20. We are going to show our latest innovations and ships concepts. As always, we love to see you, who’s buying our ships and the citizenCon is the best place for that. — October 19-20 2954"
        imgLink="src/assets/img/g12-exterior.png"
        buttonText="Get your tickets"
      >
      </o-block-fs>
    </section>
    <section>
      <o-block-fs
        title="New Austin technology and innovations center"
        content="This year we have and we expect to done a lot of innovations that can probably change how we think the space-travel for the next 10 years. We are proud to show you all our discoveries and brevets at the TIC 2955. — January 10-12 2955"
        imgLink="src/assets/img/g12-garage.png"
        buttonText="See the schedule"
      >
      </o-block-fs>
    </section>
    <section>
      <o-block
        title="Together to gather"
        content="By joining us as a contributor, member or partner, you will be raise straight to the great origin family circle. Be that high in the sky that we cannot even see the clouds of Stanton 2."
        buttonText="Join us"
        mediaLink="src/assets/img/club-box.png"
      ></o-block>
    </section>
    <section id="passed-events">
      <o-block-wide
        title="CitizenCon 2953"
        content="Last year, we were glad to present you the 400I that we teased for a couple of years, but it wasn’t the only thing to see. The UEE has spelled on the Pyro’s conflict and the opportunity to go there. Obviously we’re not going to place a Pyro’s dealer.

— October 19-20 2953"
        buttonText="See how it was"
        imgLink="src/assets/img/g12-exterior.png"
      ></o-block-wide>
      <o-block-wide
        title="Invictus Launch Week"
        content="As always, Origin has made one of the big days in the yearly ship showdown. Unfortunately we haven’t something new to show you that time but be patient, we’re always thinking of our future and comfort.

— May 19-30 2953"
        buttonText="See how it was"
        imgLink="src/assets/img/invictus-week.webp"
      ></o-block-wide>
    </section>
    <section id="Gallery">
      <o-block
        title="Over the years and over the cameras."
        content="For a several years we filmed and took picture of our events or presence at some events.
For all this time we gather a complete art gallery of our designs and contributors."
        buttonText="See the gallery"
        mediaLink="src/assets/img/400i-landscape.webp"
      >
      </o-block>
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
