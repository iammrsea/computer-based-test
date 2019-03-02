<template>
  <v-container>
    <v-dialog v-model="submissionDialog" persistent width="500">
      <v-btn flat color="teal" slot="activator" class="px-0 mr-0">Submit</v-btn>
      <v-card>
        <v-container>
          <v-card-title>
            <p class="headline">Are you sure you want to submit and end the test?</p>
            <v-divider></v-divider>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark flat color="teal" @click="onYes">Yes</v-btn>
            <v-btn @click="onNo" flat dark color="red">No</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { computeResult } from "@/utils/computeResult";
export default {
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      submissionDialog: false
    };
  },
  methods: {
    onYes() {
      const userSelectedSubjects = this.$store.getters["userSelectedSubjects"];
      let correctAnswers = this.questions.filter(question => {
        return question.answer === "" + question.selectedOption;
      });
      let resultToSave = {
        correct: correctAnswers.length,
        wrong: this.questions.length - correctAnswers.length,
        total: this.questions.length,
        date: new Date().getTime()
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
      this.submissionDialog = false;
    },
    onNo() {
      this.submissionDialog = false;
    }
    // computeResult(userSelectedSubjects, correctAnswers) {
    //   //Groups the questions based on the subject name
    //   let subOne = this.questions.filter(question => {
    //     return question.name === userSelectedSubjects[0];
    //   });
    //   let subTwo = this.questions.filter(question => {
    //     return question.name === userSelectedSubjects[1];
    //   });
    //   let subThree = this.questions.filter(question => {
    //     return question.name === userSelectedSubjects[2];
    //   });
    //   let subFour = this.questions.filter(question => {
    //     return question.name === userSelectedSubjects[3];
    //   });

    //   //Retrieves correctly answered questions
    //   let subOneCorrect = subOne.filter(question => {
    //     return question.answer === "" + question.selectedOption;
    //   });
    //   let subTwoCorrect = subTwo.filter(question => {
    //     return question.answer === "" + question.selectedOption;
    //   });
    //   let subThreeCorrect = subThree.filter(question => {
    //     return question.answer === "" + question.selectedOption;
    //   });
    //   let subFourCorrect = subFour.filter(question => {
    //     return question.answer === "" + question.selectedOption;
    //   });

    //   let myResults = {
    //     subOne: {
    //       name: userSelectedSubjects[0],
    //       correct: subOneCorrect.length,
    //       wrong: subOne.length - subOneCorrect.length
    //     },
    //     subTwo: {
    //       name: userSelectedSubjects[1],
    //       correct: subTwoCorrect.length,
    //       wrong: subTwo.length - subTwoCorrect.length
    //     },
    //     subThree: {
    //       name: userSelectedSubjects[2],
    //       correct: subThreeCorrect.length,
    //       wrong: subThree.length - subThreeCorrect.length
    //     },
    //     subFour: {
    //       name: userSelectedSubjects[3],
    //       correct: subFourCorrect.length,
    //       wrong: subFour.length - subFourCorrect.length
    //     },
    //     total: {
    //       score: correctAnswers.length
    //     },
    //     date: new Date().getTime()
    //   };

    //   return myResults;
    // }
  }
};
</script>
