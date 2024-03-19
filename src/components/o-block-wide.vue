<template>
  <div
    :style="{
      'background-image':
        'linear-gradient(90deg, rgba(221, 222, 226, 0.87) 25%, rgba(255, 255, 255, 0.00) 55%), url(' +
        imgLink +
        ')',
    }"
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
      default: "Wide block",
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
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 100px 0;
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
