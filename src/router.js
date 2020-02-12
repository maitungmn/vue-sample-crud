import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home.vue";
import Signin from "@/pages/Signin.vue";
import Howler from "@/pages/Howler.vue";

import AuthGuard from "@/middlewares/AuthGuard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "/vue-sample-crud/" : "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    }
    },
    {
      path: "/howler",
      name: "Howler",
      component: Howler
    }
  ]
});
