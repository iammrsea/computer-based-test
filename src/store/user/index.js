import { auth, firestore } from "../../services/firebase";

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, userPayload) {
      // console.log(userPayload);
      state.user = userPayload;
    }
    // setUserPerformance(state, performancePayload) {
    //   if (typeof performancePayload === "object") {
    //     stat.user.performance.push(performancePayload);
    //   } else {
    //     state.user.performance = performancePayload;
    //   }
    // }
  },
  actions: {
    signUserUp({ commit }, userPayload) {
      commit("setLoading", true, { root: true });
      commit("clearError", null, { root: true });
      auth
        .createUserWithEmailAndPassword(userPayload.email, userPayload.password)
        .then(user => {
          commit("setLoading", false, { root: true });
          const newUser = {
            id: user.user.uid,
            email: userPayload.email,
            performance: []
          };
          commit("setUser", newUser);
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
          // console.log(error);
        });
    },
    signUserIn({ commit }, userPayload) {
      commit("setLoading", true, { root: true });
      commit("clearError", null, { root: true });
      auth
        .signInWithEmailAndPassword(userPayload.email, userPayload.password)
        .then(user => {
          commit("setLoading", false, { root: true });
          const newUser = {
            id: user.user.uid,
            email: userPayload.email,
            performance: []
          };
          commit("setUser", newUser);
          // console.log(newUser);
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
          // console.log(error);
        });
    },
    setUser({ commit }, userPayload) {
      commit("setUser", userPayload);
    },
    logUserOut({ commit }) {
      auth.signOut();
      commit("setUser", null);
    },
    saveUserPerformance({ commit, getters }, performancePayload) {
      commit("setLoading", true, { root: true });
      commit("clearError", null, { root: true });
      const userId = getters.user.id;
      firestore
        .collection("users")
        .doc(userId)
        .collection("performances")
        .add(performancePayload)
        .then(docRef => {
          const performance = {
            ...performancePayload,
            id: docRef.id
          };
          const user = {
            id: getters.user.id,
            email: getters.user.email,
            performance: getters.user.performance.push(performance)
          };
          commit("setLoading", false, { root: true });
          commit("setUser", user);
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
          // console.log(error);
        });
    },
    fetchUserPerformances({ commit, getters }) {
      commit("setLoading", true, { root: true });
      commit("clearError", null, { root: true });
      const user = getters.user;
      firestore
        .collection("users")
        .doc(user.id)
        .collection("performances")
        .get()
        .then(querySnapshot => {
          const performances = [];
          querySnapshot.forEach(doc => {
            const performance = {
              correct: doc.get("correct"),
              wrong: doc.get("wrong"),
              total: doc.get("total"),
              date: doc.get("date")
            };
            performances.push(performance);
          });
          const user = {
            id: getters.user.id,
            email: getters.user.email,
            performance: performances
          };
          commit("setUser", user);
          commit("setLoading", false, { root: true });
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
          // console.log(error);
        });
    },
    autoSignin({ commit }, userPayload) {
      commit("setUser", {
        id: userPayload.uid,
        email: userPayload.email,
        performance: []
      });
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  }
};
