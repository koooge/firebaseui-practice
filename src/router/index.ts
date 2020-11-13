import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import firebase from "firebase/app";

import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user && to.name !== "Signin") {
      next({ name: "Signin" });
    } else {
      next();
    }
  });
});

export default router;
