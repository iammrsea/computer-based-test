<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <v-img :src="require('@/assets/img/exam.jpg')" max-height="500"></v-img>
      </v-flex>
    </v-layout>

    <v-container fluid>
      <v-layout align-center justify-center column>
        <v-flex xs12>
          <v-layout v-if="loading">
            <v-flex xs12 class="text-xs-center progress">
              <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
            </v-flex>
          </v-layout>
          <div v-else>
            <div class="mb-2" v-if="error">
              <app-alert :type="'error'" :message="error.message" @alert-dismissed="onDismissed"></app-alert>
            </div>
            <v-card id="content">
              <v-container>
                <v-card-title>
                  <v-layout column>
                    <v-flex
                      xs12
                      class="headline text-xs-center mt-3"
                      v-if="user!==null && user!==undefined"
                    >Welcome to our awesome computer based test (CBT). Please visit your profile to practice the test</v-flex>

                    <v-flex
                      v-else
                      xs12
                      class="headline text-xs-center mt-3"
                    >Welcome to our awesome computer based test (CBT). Please sign in/up to practice the test</v-flex>
                  </v-layout>
                </v-card-title>
                <v-card-text>
                  <v-layout v-if="user" row>
                    <v-flex class="text-xs-center">
                      <v-btn large flat class="primary" @click="onProfile">
                        <v-icon left>person</v-icon>
                        <span class="mt-1">Profile</span>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap v-else>
                    <v-flex xs6 sm6 class="text-sm-right text-xs-center">
                      <v-btn large flat class="primary text-capitalize" to="/signin">Sign In</v-btn>
                    </v-flex>
                    <v-flex xs6 sm6 class="text-sm-left text-xs-center">
                      <v-btn large flat class="primary text-capitalize" to="signup">Sign Up</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-container>
            </v-card>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters["error"];
    },
    user() {
      return this.$store.getters["user"];
    }
  },
  methods: {
    onProfile() {
      this.$router.push("/user");
    }
  }
};
</script>
<style scoped>
#content {
  margin-top: -70px;
  z-index: 3;
}
</style>
