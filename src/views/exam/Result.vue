<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3 v-if="result!==null">
        <v-card>
          <v-card-title primary-title>
            <span
              class="headline text-xs-center"
            >Congratulations for the effort you put in, you should be proud of yourself</span>
          </v-card-title>
          <v-container>
            <v-card-text>
              <span>Your Performance Statistics:</span>
              <div v-for="(oneResult,i) in result" :key="i">
                <div v-if="oneResult.score!==undefined">
                  <v-card-text class="headline">Total Score: {{oneResult.score}}</v-card-text>
                  <v-divider></v-divider>
                </div>
                <div v-else>
                  <v-card-text class="font-weight-bold">{{oneResult.name}}</v-card-text>
                  <v-card-text>Correct Answers: {{oneResult.correct}}</v-card-text>
                  <v-card-text>Wrong Answers: {{oneResult.wrong}}</v-card-text>
                  <v-divider></v-divider>
                </div>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="teal" @click="onRetry">Retry</v-btn>
              <save-result-dialog class="text-xs-left pa-0 mr-0"></save-result-dialog>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else>
        <v-card>
          <v-container>
            <v-btn flat color="teal" @click="onRestartTest">Please click to start another test</v-btn>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SaveResultDialog from "@/components/exam/SaveResultDialog";
export default {
  components: {
    SaveResultDialog
  },
  computed: {
    result() {
      return this.$store.getters["finalResult"];
    }
  },

  data() {
    return {};
  },
  methods: {
    onRestartTest() {
      this.$router.push("user/exam");
    },
    onRetry() {
      this.$router.push("exam");
    }
  }
};
</script>
