import Vue from "vue";
import Vuex from "vuex";
import user from "../store/user";
import shared from "../store/shared";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user: user,
    shared: shared
  }
});
