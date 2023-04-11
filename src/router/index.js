import { createRouter, createWebHashHistory } from "vue-router";

/** import all views (pages) */
import Inbox from "../pages/index.vue";
import Archive from "../pages/archive.vue";

/** router instance */
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Inbox,
      name: "inbox"
    },
    {
      path: "/archive",
      component: Archive,
      name: "archive",
    }
  ]
});

export default router;