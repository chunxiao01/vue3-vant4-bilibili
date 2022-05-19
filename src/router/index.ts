import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "default", redirect: "/home" },
  { path: "/home", name: "home", component: () => import("@/views/Home.vue") },
  {
    path: "/category",
    name: "category",
    component: () => import("@/views/Category.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/Search.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "err404",
    component: () => import("@/views/Err404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
