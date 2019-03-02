import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import { store } from "./store/index";
import router from "./router";
import AlertComponent from "./components/Alert.vue";
import { auth } from "./services/firebase";
import ScrollReveal from "./plugins/scrollreveal";
import { loadSubjects } from "./utils/loadSubjects.js";

Vue.config.productionTip = false;
Vue.component("app-alert", AlertComponent);

Vue.use(ScrollReveal, {
  duration: 5000,
  reset: true,
  delay: 10,
  distance: "30px"
});

const vm = new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignin", user);
        this.$store.dispatch("fetchUserPerformances");
        loadSubjects(vm);
      }
    });
  }
}).$mount("#app");
