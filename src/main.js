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
