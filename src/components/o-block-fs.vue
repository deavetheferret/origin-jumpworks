<template>
  <div
    :style="{ 'background-image': 'url(' + imgLink + ')' }"
    class="o-container"
  >
    <v-container>
      <v-row>
        <v-col cols="4" class="data-col">
          <h2>{{ title }}</h2>
          <p>
            {{ content }}
          </p>
          <router-link v-if="pageLink" :to="pageLink" class="button">
            <span>—</span>
            {{ buttonText }}
          </router-link>
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

      default: "Fullscreen block",
    },
    imgLink: {
      type: String,

      default: "./img/600i-shadows.webp",
    },
    content: {
      type: String,

      default:
        "This is a fullscreen block. Use it to add images as background and content on top of it.",
    },
    buttonText: {
      type: String,

      default: "Learn more",
    },
    pageLink: {
      type: String,
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
  padding: 100px 0;
  h2 {
    font-size: 32px;
    font-weight: 500;
  }
  .button {
    margin-top: 20px;
    font-weight: 500;
    font-size: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    span {
      margin-right: 50px;
    }
  }
}
</style>
