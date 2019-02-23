import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/user/Profile.vue";
import Signin from "./views/user/Signin.vue";
import Signup from "./views/user/Signup.vue";
import AuthGuard from "./auth-guard";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: AuthGuard
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   console.log("Received a request to route");
//   console.log("to Route object: " + to.fullPath);
//   console.log("from Route object: " + from.fullPath);
//   next();
// });

export default router;
