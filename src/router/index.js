import { createRouter, createWebHashHistory } from "vue-router";

/** import all views (pages) */
import Inbox from "../pages/index.vue";
import Archives from "../pages/archive.vue";

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
      path: "/archives",
      component: Archives,
      name: "archives",
    }
  ]
});

export default router;