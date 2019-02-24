<template>
  <v-container>
    <v-card>
      <v-container>
        <v-img :src="require('@/assets/img/exam2.jpg')" aspect-ratio="2.75" v-scroll-reveal></v-img>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0 text-xs-center">The Show is about to begin, fasten your belt</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
              <h4 class="ml-2 subheading">Are you sure you are ready for this?</h4>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
              <select-subject-dialog></select-subject-dialog>
            </v-flex>
          </v-layout>
        </v-card-actions>
        <v-divider></v-divider>
        <v-card-text v-if="userSelectedSubjects.length !==0 && userSelectedSubjects.length !== -1">
          <v-card raised dark color="teal">
            <v-container>
              <v-card-title primary-title>You have chosen to be tested on the following subjects:</v-card-title>
              <v-layout row wrap>
                <v-flex xs12 sm6 class="mb-2">
                  <v-card-text
                    v-for="(subject,i) in userSelectedSubjects"
                    :key="i"
                  >{{i+1}}---{{subject}}</v-card-text>
                </v-flex>
                <v-flex xs12 sm6>
                  <div v-if="examVariant===1">
                    <p>
                      Total Number of Questions:
                      <span>200</span>
                    </p>
                    <p>
                      Time:
                      <span>2hrs30mins</span>
                    </p>
                  </div>
                  <div v-else>
                    <p>
                      Total Number of Questions:
                      <span>100</span>
                    </p>
                    <p>
                      Time:
                      <span>1hrs30mins</span>
                    </p>
                  </div>
                  <v-spacer></v-spacer>
                  <v-btn class="primary text-capitalize" flat @click="onStart">Start Now</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import SelectSubjectDialog from "@/components/exam/SelectSubjectDialog";

export default {
  components: {
    SelectSubjectDialog
  },
  data() {
    return {
      selected: ["English Language"],
      radioGroup: 2,
      right: {
        origin: "right"
      },
      left: {
        origin: "left"
      },
      bottom: {
        origin: "bottom"
      }
    };
  },
  computed: {
    userSelectedSubjects() {
      return this.$store.getters["userSelectedSubjects"];
    },
    examVariant() {
      return this.$store.getters["examVariant"];
    }
  },
  methods: {
    onStart() {
      this.$store.commit("userSelectedSubjects", []);
      this.$router.push("start-exam");
    }
  }
};
</script>
<style>
body {
  padding: 0px;
  margin: 0px;
}
</style>
