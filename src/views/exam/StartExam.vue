<template>
  <v-container>
    <v-card class="card-position">
      <v-container>
        <v-card-text class="text-xs-center teal--text pa-2 timer">{{hrs}}:{{min}}:{{sec}}</v-card-text>
      </v-container>
    </v-card>

    <Calculator class="calculator-position"/>

    <Pagination :questions="questions"/>
  </v-container>
</template>
<script>
import Pagination from "@/components/exam/Pagination";
import Calculator from "@/components/exam/Calculator";
import { get25Questions, get50Questions } from "@/services/storyblok.js";
import marked from "marked";
import { computeResult } from "@/utils/computeResult";
import { savePageAndPerPage, retrieveNextPage } from "@/utils/handlePaging";
export default {
  components: {
    Pagination,
    Calculator
  },
  data() {
    return {
      seconds: 0,
      minutes: 1,
      hours: 0,

      questions: []
    };
  },
  created() {
    let examVariant = this.$store.getters["examVariant"];
    if (examVariant === 1) {
      this.seconds = 0;
      this.minutes = 30;
      this.hours = 2;
    }
    this.loadQuestions(examVariant);
  },

  computed: {
    loading() {
      return this.$store.getters["loading"];
    },
    min() {
      if (this.minutes < 10) {
        return "0" + this.minutes;
      } else {
        return this.minutes;
      }
    },
    sec() {
      if (this.seconds < 10) {
        return "0" + this.seconds;
      } else {
        return this.seconds;
      }
    },
    hrs() {
      if (this.hours < 10) {
        return "0" + this.hours;
      } else {
        return this.hours;
      }
    }
  },
  watch: {
    loading(newValue) {
      if (!newValue) {
        this.startTime();
      }
    }
  },
  methods: {
    startTime() {
      this.tick();
      this._interval = setInterval(this.tick, 1000);
    },
    tick() {
      if (this.seconds !== 0) {
        this.seconds--;
      } else if (this.minutes !== 0) {
        this.minutes--;
        this.seconds = 59;
      } else if (this.hours !== 0) {
        this.hours--;
        this.minutes = 59;
      } else {
        this.endExam();
      }
    },
    endExam() {
      clearInterval(this._interval);
      const userSelectedSubjects = this.$store.getters["userSelectedSubjects"];
      let correctAnswers = this.questions.filter(question => {
        return question.answer === "" + question.selectedOption;
      });
      let resultToSave = {
        correct: correctAnswers.length,
        wrong: this.questions.length - correctAnswers.length,
        total: this.questions.length,
        date: new Date()
      };

      let result = computeResult(
        userSelectedSubjects,
        correctAnswers,
        this.questions
      );
      this.$store.commit("userSelectedSubjects", []);
      this.$store.commit("finalResult", result);
      this.$store.commit("resultToSave", resultToSave);
      this.$router.push("result");
    },
    pushDataToArray(name, story) {
      const content = story.content;
      content.selectedOption = null;
      content.question = marked(content.question);
      content.name = name;
      this.questions.push(content);
    },
    loadQuestions(examVariant) {
      const selectedSubs = this.$store.getters["userSelectedSubjects"];

      const cv = this.$store.getters["cacheVersion"];

      if (examVariant === 1) {
        this.$store.dispatch("setLoading", true);
        this.$store.dispatch("setError", false);

        selectedSubs.forEach(sub => {
          if (sub === "English Language") {
            get50Questions({
              cv: cv,
              starts_with: "English-Language",
              page: retrieveNextPage(sub)
            }).then(res => {
              savePageAndPerPage(retrieveNextPage(sub), 50, res.total, sub);
              res.data.stories.forEach(story => {
                this.pushDataToArray("English Language", story);
              });
            });
          } else {
            get50Questions({
              cv: cv,
              starts_with: sub,
              page: retrieveNextPage(sub)
            })
              .then(res => {
                savePageAndPerPage(retrieveNextPage(sub), 50, res.total, sub);
                res.data.stories.forEach(story => {
                  this.pushDataToArray(sub, story);
                  this.$store.dispatch("setLoading", false);
                });
              })
              .catch(error => {
                this.$store.dispatch("setError", error);
              });
          }
        });
      } else {
        this.$store.dispatch("setLoading", true);
        this.$store.dispatch("setError", false);
        selectedSubs.forEach(sub => {
          if (sub === "English Language") {
            get25Questions({
              cv: cv,
              starts_with: "English-Language",
              page: retrieveNextPage(sub)
            }).then(res => {
              savePageAndPerPage(retrieveNextPage(sub), 25, res.total, sub);

              res.data.stories.forEach(story => {
                this.pushDataToArray("English Language", story);
              });
            });
          } else {
            get25Questions({
              cv: cv,
              starts_with: sub,
              page: retrieveNextPage(sub)
            })
              .then(res => {
                savePageAndPerPage(retrieveNextPage(sub), 25, res.total, sub);
                res.data.stories.forEach(story => {
                  this.pushDataToArray(sub, story);
                  this.$store.dispatch("setLoading", false);
                });
              })
              .catch(error => {
                this.$store.dispatch("setError", error);
              });
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.card-position {
  position: fixed;
  top: 0px;
  right: 130px;
  z-index: 2;
  margin-right: 5px;
}
.timer {
  font-size: 18px;
}
.calculator-position {
  position: fixed;
  top: 0px;
  right: 5px;
  z-index: 2;
  text-align: right;
  padding: 0px;
  margin-left: 5px;
}
</style>
