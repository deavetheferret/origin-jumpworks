<template>
  <div
    :style="{ 'background-image': 'url(' + imgLink + ')' }"
    class="o-container"
  >
    <v-container>
      <v-row>
        <v-col cols="4">
          <h2>{{ title }}</h2>
          <p>
            {{ content }}
          </p>
          <a :href="pageLink">
            <span>—</span>
            {{ buttonText }}
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Fullscreen block",
    },
    imgLink: {
      type: String,
      required: true,
      default: "src/assets/img/600i-shadows.webp",
    },
    content: {
      type: String,
      required: true,
      default:
        "This is a fullscreen block. Use it to add images as background and content on top of it.",
    },
    buttonText: {
      type: String,
      required: false,
      default: "Learn more",
    },
    pageLink: {
      type: String,
      required: false,
      default: "#",
    },
  },
};
</script>

<style scoped>
.o-container {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 160px 0;
  h2 {
    font-size: 32px;
    font-weight: 500;
  }
}
</style>
