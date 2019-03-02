<template>
  <v-container>
    <v-layout v-if="loading">
      <v-flex xs12 class="text-xs-center progress">
        <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
      </v-flex>
    </v-layout>
    <div v-else>
      <div class="mb-2" v-if="error">
        <app-alert :type="'error'" :message="error.message" @alert-dismissed="onDismissed"></app-alert>
      </div>
      <div v-for="(question,i) in paginatedData" :key="i">
        <Question :question="question"/>
      </div>
      <div class="text-xs-center">
        <v-layout justify-center>
          <v-flex xs12>
            <v-card flat>
              <v-card-text>
                <v-pagination v-model="pageNumber" :length="pageCount"></v-pagination>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="text-xs-right">
        <v-spacer></v-spacer>
        <!-- <v-btn dark class="teal mr-0" @click="onSubmit">Submit</v-btn> -->
        <submission :questions="questions" class="mr-0"></submission>
      </div>
    </div>
  </v-container>
</template>
<script>
import Question from "@/components/exam/Question";
import Submission from "@/components/exam/Submission";
export default {
  components: {
    Question,
    Submission
  },
  props: {
    questions: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      pageNumber: 1
    };
  },

  methods: {
    onSubmit() {
      // console.log(this.questions);
      // console.log("Obtained from the general store");
      // console.log(this.$store.getters["question/questions"]);
    }
  },
  computed: {
    pageCount() {
      let listSize = this.questions.length;
      let size = this.size;
      return Math.ceil(listSize / size);
    },
    paginatedData() {
      if (this.pageNumber === 1) {
        return this.questions.slice(0, this.size);
      }
      let start = (this.pageNumber - 1) * this.size;

      let end = start + this.size;
      return this.questions.slice(start, end);
    },
    loading() {
      return this.$store.getters["loading"];
    },
    error() {
      return this.$store.getters["error"];
    }
  }
};
</script>
<style scoped>
.progress {
  z-index: 3;
}
</style>
