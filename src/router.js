import { createRouter, createWebHistory } from "vue-router";
import oHome from "@/pages/home.vue";
import oEvents from "@/pages/events.vue";
import oHistory from "@/pages/history.vue";
import oShips from "@/pages/ships.vue";

const routes = [
  { path: "/", component: oHome },
  { path: "/events", component: oEvents },
  { path: "/history", component: oHistory },
  { path: "/ships", component: oShips },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
