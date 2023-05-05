import { createRouter, createWebHashHistory } from "vue-router";

/** router instance */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "inbox",
      component: () => import('../pages/index.vue')
    },
    {
      path: "/archive",
      name: "archive",
      component: () => import('../pages/archive.vue'),
    }
  ]
});

export default router;