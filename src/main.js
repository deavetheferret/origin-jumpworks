import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");

const loader = document.querySelector(".loader");

const images = document.querySelectorAll("img");
let loadedImages = 0;

const imageLoaded = () => {
  loadedImages++;
  if (loadedImages === 2) {
    setTimeout(() => {
      loader.classList.remove("loading");
    }, 4000);
    setTimeout(() => {
      loader.style.display = "none";
    }, 5000);
  }
};

images.forEach((image) => {
  image.addEventListener("load", imageLoaded);
});

const detectDevTools = () => {
  const isDevToolsOpened = /./;
  isDevToolsOpened.toString = () => {
    console.log(
      "💀\n≤))≥\n_||_ are u serious rn?\n\nYou really thought that stealing my code was ok?"
    );
    return "Looking something in my code...";
  };

  console.log(isDevToolsOpened);
};

detectDevTools();
