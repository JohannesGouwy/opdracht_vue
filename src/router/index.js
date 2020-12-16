import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RecipeDetails from "@/views/RecipeDetails";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recipe/:id",
    name: "RecipeDetails",
    props: true,
    component: RecipeDetails
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
