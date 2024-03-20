import { createRouter, createWebHistory } from "vue-router";
import oHome from "@/views/home.vue";
import oEvents from "@/views/events.vue";
import oHistory from "@/views/history.vue";
import oShips from "@/views/ships.vue";
import o404 from "@/views/404.vue";
import o100i from "@/views/100i.vue";
import oPolicies from "@/views/policies.vue";

const routes = [
  { path: "/", component: oHome },
  { path: "/events", component: oEvents },
  { path: "/history", component: oHistory },
  { path: "/ships", component: oShips },
  { path: "/:pathMatch(.*)*", component: o404 },
  { path: "/ships/100i", component: o100i },
  { path: "/policies", component: oPolicies },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
