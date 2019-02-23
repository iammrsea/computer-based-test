export default {
  state: {
    instructions: [
      "The test is going to last for 2hrs30mins and a total of 200 questions",
      "It comprises four subjects, 50 questions per subject ",
      "English Language is compulsory, but you can choose any other 3 subjects of your choice",
      "You are not expected to answer the questions in any particular order; you can skip questions and return to them later",
      "There is calculator at the top right corner in case you need one",
      "Cheating is not allowed",
      "If you finish before it is time, click the submit button to finish",
      "If you are caught up with time, the system would sumbit your answers automatically",
      "Wait for your result when the test ends"
    ],
    subjects: [
      "English Language",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Economics",
      "Accounting",
      "CRS",
      "Literature-in-English",
      "Commerce",
      "Government"
    ],
    userSelectedSubjects: [],
    examVariant: null
  },
  mutations: {
    userSelectedSubjects(state, selectedSubPayload) {
      state.userSelectedSubjects = selectedSubPayload;
    },
    examVariant(state, examVariantPayload) {
      state.examVariant = examVariantPayload;
    }
  },
  actions: {
    userSelectedSubjects({ commit }, selectedSubPayload) {
      commit("userSelectedSubjects", selectedSubPayload);
    },
    examVariant({ commit }, examVariantPayload) {
      commit("examVariant", examVariantPayload);
    }
  },
  getters: {
    instructions(state) {
      return state.instructions;
    },
    subjects(state) {
      return state.subjects;
    },
    userSelectedSubjects(state) {
      return state.userSelectedSubjects;
    },
    examVariant(state) {
      return state.examVariant;
    }
  }
};
