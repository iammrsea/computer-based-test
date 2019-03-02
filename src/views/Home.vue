<template>
  <div class="team">
    <v-layout v-if="loading">
      <v-flex xs12 class="text-xs-center progress">
        <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
      </v-flex>
    </v-layout>
    <div v-else>
      <div class="mb-2" v-if="error">
        <app-alert :type="'error'" :message="error.message" @alert-dismissed="onDismissed"></app-alert>
      </div>
      <v-card>
        <v-container>
          <v-card-title>
            <v-layout column>
              <v-flex xs12>
                <v-container>
                  <v-img :src="require('@/assets/img/exam.jpg')"></v-img>
                </v-container>
              </v-flex>
              <v-flex
                xs12
                class="headline text-xs-center mt-3"
              >Welcome to our awesome computer based test (CBT). Please Sign in/Sign up to practice the test</v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs6 sm6 class="text-sm-right text-xs-center">
                <v-btn
                  large
                  flat
                  class="primary text-capitalize"
                  v-scroll-reveal="left"
                  to="/signin"
                >Sign In</v-btn>
              </v-flex>
              <v-flex xs6 sm6 class="text-sm-left text-xs-center">
                <v-btn
                  large
                  flat
                  class="primary text-capitalize"
                  v-scroll-reveal="right"
                  to="signup"
                >Sign Up</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
// import { getListOfSubjects, getCV } from "@/services/storyblok.js";
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters["error"];
    }
  },
  created() {
    // this.$store.dispatch("setLoading", true);
    // this.$store.dispatch("setError", false);
    // getCV()
    //   .then(res => {
    //     this.$store.dispatch('cacheVersion',res.data.space.version)
    //     return getListOfSubjects({
    //       starts_with: "subjects"
    //     });
    //   })
    //   .then(res => {
    //     console.log(res.data.stories);
    //     this.$store.dispatch("setLoading", false);
    //     const subjects = [];
    //     const stories = res.data.stories;
    //     stories.forEach(story => {
    //       subjects.push(story.content.name);
    //     });
    //     this.$store.dispatch("subjects", subjects);
    //   })
    //   .catch(error => {
    //     this.$store.dispatch("setError", error);
    //     console.log(error);
    //   });
  },
  data() {
    return {
      top: {
        origin: "top"
      },
      right: {
        origin: "right"
      },
      left: {
        origin: "left"
      },
      cv: ""
    };
  },
  methods: {}
};
</script>
