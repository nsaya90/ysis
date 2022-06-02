import { createRouter, createWebHistory } from "vue-router";
import Profil from "@/views/Profil.vue";
import Modify from "@/views/Modify.vue";
import NewPost from "@/views/NewPost.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";


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
    path: "/Newpost",
    name: "newpost",
    component: NewPost,
  },
  {
    path: "/Login",
    name: "login",
    component: Login,
  },
  {
    path: "/Register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
