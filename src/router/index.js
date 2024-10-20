import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products_category",
    component: () => import("@/views/ProductsCategory.vue"),
  },
  {
    path: "/products/product-details/:productId",
    name: "products_details",
    component: () => import("@/views/ProductDetails.vue"),
  },
  {
    path: "/CartPage",
    name: "CartPage",
    component: () => import("@/views/CartPage"),
  },
  {
    path: "/CheckOut",
    name: "CheckOut",
    component: () => import("@/views/CheckOut"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
