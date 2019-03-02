import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Profile from "./views/user/Profile.vue";
import Signin from "./views/user/Signin.vue";
import Signup from "./views/user/Signup.vue";
import UserHome from "./views/user/UserHome.vue";
import Exam from "./views/exam/Exam.vue";
import StartExam from "./views/exam/StartExam.vue";
import Result from "./views/exam/Result.vue";
import AuthGuard from "./auth-guard";

import Testing from "./views/Testing.vue";

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
      path: "/testing",
      name: "testing",
      component: Testing
    },
    {
      path: "/user",
      name: "user",
      component: UserHome,
      children: [
        {
          path: "",
          name: "profile",
          component: Profile,
          beforeEnter: AuthGuard
        },
        {
          path: "exam",
          name: "exam",
          component: Exam,
          beforeEnter: AuthGuard
        },
        {
          path: "start-exam",
          name: "start-exam",
          component: StartExam,
          beforeEnter: AuthGuard
        },
        {
          path: "result",
          name: "result",
          component: Result,
          beforeEnter: AuthGuard
        }
      ]
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
