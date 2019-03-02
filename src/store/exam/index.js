export default {
  state: {
    instructions: [
      "The test is going to last for 2hrs30mins/1hr30mins and a total of 200/100 questions depending on your choice",
      "It comprises four subjects, 50/25 questions per subject ",
      "English Language is compulsory, but you can choose any other 3 subjects of your choice",
      "In case your preferred 3 subjects are not all represented in the available subject list, select any random subject(s) to complete it. At the end of the test, you would get a breakdown of your performance per subject",
      "You are not expected to answer the questions in any particular order; you can skip questions and return to them later",
      "There is calculator at the top right corner in case you need one.",
      "Cheating is not allowed.",
      "If you finish before it is time, click the submit button to finish",
      "If you are caught up with time, the system would sumbit your answers automatically",
      "Wait for your result when the test ends"
    ],
    // subjects: [
    //   "English Language",
    //   "Mathematics",
    //   "Physics",
    //   "Chemistry",
    //   "Biology",
    //   "Economics",
    //   "Accounting",
    //   "CRS",
    //   "Literature-in-English",
    //   "Commerce",
    //   "Government"
    // ],
    subjects: [],
    cacheVersion: "",
    userSelectedSubjects: [],
    examVariant: null,
    questions: [],
    finalResult: null,
    resultToSave: null
  },
  mutations: {
    userSelectedSubjects(state, selectedSubPayload) {
      state.userSelectedSubjects = selectedSubPayload;
    },
    examVariant(state, examVariantPayload) {
      state.examVariant = examVariantPayload;
    },
    questions(state, questionsPayload) {
      state.questions = questionsPayload;
    },
    finalResult(state, resultPayload) {
      state.finalResult = resultPayload;
    },
    resultToSave(state, resultPayload) {
      state.resultToSave = resultPayload;
    },
    subjects(state, subjectsPayload) {
      state.subjects = subjectsPayload;
    },
    cacheVersion(state, cachePayload) {
      state.cacheVersion = cachePayload;
    }
  },
  actions: {
    userSelectedSubjects({ commit }, selectedSubPayload) {
      commit("userSelectedSubjects", selectedSubPayload);
    },
    examVariant({ commit }, examVariantPayload) {
      commit("examVariant", examVariantPayload);
    },
    subjects({ commit }, subjectsPayload) {
      commit("subjects", subjectsPayload);
    },
    cacheVersion({ commit }, cachePayload) {
      commit("cacheVersion", cachePayload);
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
    },
    questions(state) {
      return state.questions;
    },
    finalResult(state) {
      if (state.finalResult) {
        const result = [];
        for (let [k, v] of Object.entries(state.finalResult)) {
          if (k !== "date") {
            result.push(v);
          }
        }
        return result;
      }
    },
    cacheVersion(state) {
      return state.cacheVersion;
    },
    resultToSave(state) {
      return state.resultToSave;
    }
  }
};
