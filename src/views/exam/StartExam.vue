<template>
  <v-container>
    <v-card class="card-position">
      <v-container>
        <v-card-text class="text-xs-center teal--text pa-2 timer">{{hrs}}:{{min}}:{{sec}}</v-card-text>
      </v-container>
    </v-card>

    <Calculator class="calculator-position"/>

    <Pagination :questions="myData"/>
  </v-container>
</template>
<script>
import Pagination from "@/components/exam/Pagination";
import Calculator from "@/components/exam/Calculator";
export default {
  components: {
    Pagination,
    Calculator
  },
  mounted() {
    // this.startTime();
  },
  created() {
    let examVariant = this.$store.getters["examVariant"];
    if (examVariant === 1) {
      this.seconds = 0;
      this.minutes = 30;
      this.hours = 2;
    }
    this.$store.dispatch("setLoading", true);
    this.loadData().then(data => {
      this.myData = data;
      this.$store.dispatch("setLoading", false);
    });
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
      let correctAnswers = this.myData.filter(question => {
        return question.answer === question.selectedOption;
      });
      let result = {
        correct: correctAnswers.length,
        wrong: this.myData.length - correctAnswers.length,
        total: this.myData.length,
        date: new Date()
      };

      this.$store.commit("question/finalResult", result);
      this.$router.push("result");
    },
    loadData() {
      return new Promise(resolve => {
        setTimeout(() => {
          const data = [
            {
              question: "Which of the following is not a programming langauage",
              option1: "javascript",
              option2: "CSS",
              option3: "java",
              option4: "python",
              answer: 2,
              selectedOption: null
            },
            {
              question: "Which of the following is not a programming langauage",
              option1: "javascript",
              option2: "CSS",
              option3: "java",
              option4: "python",
              answer: 2,
              selectedOption: null
            },
            {
              question: "Which of the following is not a programming langauage",
              option1: "javascript",
              option2: "CSS",
              option3: "java",
              option4: "python",
              answer: 2,
              selectedOption: null
            },
            {
              question: "Which of the following is not a programming langauage",
              option1: "javascript",
              option2: "CSS",
              option3: "java",
              option4: "python",
              answer: 2,
              selectedOption: null
            },
            {
              question: "Which of the following is not a programming langauage",
              option1: "javascript",
              option2: "CSS",
              option3: "java",
              option4: "python",
              answer: 2,
              selectedOption: null
            }
          ];

          resolve(data);
        }, 5000);
      });
    }
  },

  data() {
    return {
      seconds: 0,
      minutes: 20,
      hours: 0,

      fullSeconds: 0,
      fullMinutes: 30,
      fullHours: 2,

      myData: []
    };
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
