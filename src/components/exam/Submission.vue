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
      let correctAnswers = this.questions.filter(question => {
        return question.answer === question.selectedOption;
      });
      let result = {
        correct: correctAnswers.length,
        wrong: this.questions.length - correctAnswers.length,
        total: this.questions.length,
        date: new Date().getTime()
      };

      this.$store.commit("finalResult", result);
      this.$router.push("result");
      this.submissionDialog = false;
    },
    onNo() {
      this.submissionDialog = false;
    }
  }
};
</script>
