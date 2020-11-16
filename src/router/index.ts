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
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { requiresAuth: true }
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
  if (to.path === "/signout") {
    firebase.auth().signOut();
    return next({name: "Home"});
  }

  firebase.auth().onAuthStateChanged(user => {
    if (!user && to.matched.some(record => record.meta.requiresAuth)) {
      return next({ name: "Signin" });
    } else {
      return next();
    }
  });
});

export default router;
