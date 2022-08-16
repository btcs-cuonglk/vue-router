import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../components/HomeView.vue";
import ProductView from "../components/ProductView.vue";
import AboutView from "../components/AboutView.vue";
import ErrorView from "../components/ErrorView";

const routes = [
  { path: "/", component: HomeView },
  { path: "/ProductView", component: ProductView },
  { path: "/AboutView", component: AboutView },
  { path: "/:pathMatch(.*)*", component: ErrorView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
