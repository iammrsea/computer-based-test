<template>
  <div class="team">
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
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
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
      }
    };
  },
  methods: {}
};
</script>
