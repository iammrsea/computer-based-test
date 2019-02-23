import Vue from "vue";
import Vuex from "vuex";
import user from "../store/user";
import shared from "../store/shared";
import exam from "../store/exam";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user: user,
    shared: shared,
    exam: exam
  }
});
