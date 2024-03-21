<template>
  <div class="o-block-container">
    <v-container>
      <v-row align-center>
        <v-col cols="4" class="data-col">
          <h2>{{ title }}</h2>
          <p>
            {{ content }}
          </p>
          <a v-if="buttonText" :href="pageLink">
            <span>—</span>
            {{ buttonText }}
          </a>
        </v-col>
        <v-col cols="8">
          <div
            class="media-col"
            :style="{ 'background-image': 'url(' + mediaLink + ')' }"
          ></div>
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
      required: false,
      default: "Fullscreen block",
    },
    content: {
      type: String,
      required: false,
      default:
        "This is a fullscreen block. Use it to add images as background and content on top of it.",
    },
    mediaLink: {
      type: String,
      required: false,
      default: "./img/600i-shadows.webp",
    },
    buttonText: {
      type: String,
      required: false,
      default: "Learn more",
    },
    pageLink: {
      type: String,
      required: false,
      default: "/404",
    },
  },
};
</script>

<style scoped>
.o-block-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .media-col {
    width: 60%;
    height: auto;
    position: absolute;
    right: 0;
    top: 55%;
    transform: translateY(-53%);
    aspect-ratio: 16 / 11;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .data-col {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
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
      align-self: flex-end;
      span {
        margin-right: 50px;
      }
    }
  }
}
</style>
