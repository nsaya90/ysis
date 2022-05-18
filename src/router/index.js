import { createRouter, createWebHistory } from "vue-router";
import Profil from "@/views/Profil.vue";
import Modify from "@/views/Modify.vue";
import NewPost from "@/views/NewPost.vue";

const routes = [
  {
    path: "/Profil",
    name: "profil",
    component: Profil,
  },
  {
    path: "/Modify",
    name: "modify",
    component: Modify,
  },
  {
    path: "/NewPost",
    name: "NewPost",
    component: NewPost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
