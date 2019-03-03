import { auth, firestore } from "../../services/firebase";

export default {
  state: {
    user: null,
    timeSignedIn: null
  },
  mutations: {
    setUser(state, userPayload) {
      state.user = userPayload;
    },
    removeStat(state, idPayload) {
      if (state.user) {
        const indexOfStatToRemove = state.user.performance.findIndex(stat => {
          return idPayload === stat.id;
        });
        state.user.performance.splice(indexOfStatToRemove, 1);
      }
    },
    timeSignedIn(state, timePayload) {
      state.timeSignedIn = timePayload;
    }
  },
  actions: {
    signUserUp({ commit }, userPayload) {
      commit("setLoading", true, { root: true });
      commit("clearError", null, { root: true });
      auth
        .createUserWithEmailAndPassword(userPayload.email, userPayload.password)
        .then(user => {
          const newUser = {
            id: user.user.uid,
            email: userPayload.email,
            performance: []
          };
          commit("setUser", newUser);
          commit("setLoading", false, { root: true });
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
        });
    },
    signUserIn({ commit }, userPayload) {
      commit("setLoading", true, { root: true });
      commit("clearError", null, { root: true });
      auth
        .signInWithEmailAndPassword(userPayload.email, userPayload.password)
        .then(user => {
          this.performanceDialog = false;
          const newUser = {
            id: user.user.uid,
            email: userPayload.email,
            performance: []
          };
          commit("setUser", newUser);
          this.performanceDialog = false;
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
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
          const pArray = getters.user.performance;
          pArray.push(performance);

          const user = {
            id: getters.user.id,
            email: getters.user.email,
            performance: pArray
          };
          commit("setLoading", false, { root: true });
          commit("setUser", user);
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
        });
    },
    removeStat({ commit, getters }, statId) {
      commit("setLoading", true, { root: true });
      commit("clearError", null, { root: true });
      firestore
        .collection("users")
        .doc(getters.user.id)
        .collection("performances")
        .doc(statId)
        .delete()
        .then(() => {
          commit("removeStat", statId);
          commit("setLoading", false, { root: true });
        })
        .catch(error => {
          commit("setLoading", false, { root: true });
          commit("setError", error, { root: true });
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
              ...doc.data(),
              id: doc.id
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
    },
    featuredStats(state) {
      if (state.user) {
        return state.user.performance
          .sort((statA, statB) => {
            return statB.date - statA.date;
          })
          .slice(0, 2);
      }
    },
    allStats(state) {
      if (state.user) {
        return state.user.performance.sort((statA, statB) => {
          return statB.date - statA.date;
        });
      }
    },
    timeSignedIn(state) {
      return state.timeSignedIn;
    }
  }
};
