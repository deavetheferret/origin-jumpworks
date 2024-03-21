<template>
  <div class="o-container">
    <v-container class="sub-container">
      <v-row>
        <v-col cols="4">
          <h2>{{ title }}</h2>
          <p>
            {{ content }}
          </p>
          <a v-if="pageLink" :href="pageLink">
            <span>—</span>
            {{ buttonText }}
          </a>
        </v-col>
        <div
          class="media-col"
          :style="{ 'background-image': 'url(' + imgLink + ')' }"
        ></div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "Wide block",
    },
    imgLink: {
      type: String,
      required: false,
      default: "./img/600i-shadows.webp",
    },
    content: {
      type: String,
      required: false,
      default:
        "This is a wide block. Use it like a half page, with a background image and content on top of it.",
    },
    buttonText: {
      type: String,
      required: false,
      default: "Learn more",
    },
    pageLink: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.o-container {
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  position: relative;
  .sub-container {
    padding: 100px 0;
  }
  .media-col {
    right: 0;
    top: 0;
    position: absolute;
    height: 50vh;
    padding: 0;
    background-size: cover;
    background-position: center;
    width: calc((100vw / 3 * 2) - 100px);
  }
  h2 {
    font-size: 32px;
    font-weight: 500;
  }
  a {
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
