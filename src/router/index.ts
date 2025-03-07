import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/FormPage.vue"),
    },
    {
      path: "/result",
      component: () => import("../pages/ResultPage.vue"),
    },
  ],
});

export default router;
