<template>
  <main id="all-ships">
    <section id="featured">
      <o-block-fs
        title="100I series"
        content="Let the voyage begin with the 2947 600I. This multi-role luxury vessel features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form."
        :imgLink="../assets/img/100i.webp"
        pageLink="/ships/100i"
      ></o-block-fs>
    </section>
    <section>
      <o-block-fs
        title="600I series"
        content="Let the voyage begin with the 2947 600I. This multi-role luxury vessel features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form."
        pageLink="/ships/600i"
      ></o-block-fs>
    </section>
    <section>
      <o-block-fs
        title="G12 series"
        content="Let the voyage begin with the 2947 600I. This multi-role luxury vessel features an exquisitely detailed hull design that balances performance and versatility in a sleek and timeless form."
        :imgLink="../assets/img/g12.webp"
        pageLink="/ships/g12"
      ></o-block-fs>
    </section>
    <section>
      <o-block-fs
        title=" The M50"
        content="Get the brand new iteration of our famous M50 you’ll be surprised by its power and speed rather than its length. One of the littlest ship ever made in our New Austin’s factory. Be the first to travel that fast and that precize."
        :imgLink="../assets/img/m50.webp"
        pageLink="/ships/m50"
      ></o-block-fs>
    </section>
    <section>
      <o-block-fs
        title="The 400I"
        content="Alone you're faster but together you're stronger. The 400I is the perfect ship for a small crew. It's the perfect balance between speed and power. It's the perfect ship for you."
        :imgLink="../assets/img/400i.webp"
        pageLink="/ships/400i"
      ></o-block-fs>
    </section>
    <section>
      <o-block-fs
        title="The great 890 Jump"
        content="From New Austin to your heart. The 890 Jump is one of the most luxurious ship ever made. It's the perfect way to travel in style and comfort with your guests or your employees. It's the perfect ship for you."
        :imgLink="../assets/img/890jump.webp"
        pageLink="/ships/890jump"
      ></o-block-fs>
    </section>
  </main>
</template>

<script setup>
import oBlockFs from "@/components/o-block-fs.vue";
import ship100i from "@/assets/img/100i.webp";
import g12 from "@/assets/img/g12.webp";
import m50 from "@/assets/img/m50.webp";
import ship400i from "@/assets/img/400i.webp";
import ship890jump from "@/assets/img/890jump.webp";
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
