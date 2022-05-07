import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/text/:textid",
      name: "text",
      component: HomeView,
    },

    {
      path: "/not_found",
      name: "not-found",
      component: NotFoundView,
    },

  ],
});

export default router;
