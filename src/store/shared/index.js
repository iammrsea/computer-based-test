export default {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    clearError(context) {
      context.commit("clearError");
    },
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    setError({ commit }, payload) {
      commit("setError", payload);
    }
  },
  getters: {
    error(state) {
      return state.error;
    },
    loading(state) {
      return state.loading;
    }
  }
};
