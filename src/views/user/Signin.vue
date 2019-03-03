<template>
  <div class="mt-5">
    <v-container>
      <v-layout v-if="loading && spin">
        <v-flex xs12 class="text-xs-center progress">
          <v-progress-circular :size="70" :width="7" color="primary" indeterminate></v-progress-circular>
        </v-flex>
      </v-layout>
      <v-layout row wrap v-else>
        <v-flex xs12 sm6 offset-sm3>
          <div class="mb-2" v-if="error">
            <app-alert :type="'error'" :message="error.message" @alert-dismissed="onDismissed" :dismissible="true"></app-alert>
          </div>
          <v-card>
            <v-card-text>
              <p class="text-xs-center">Sign In</p>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  type="email"
                  name="email"
                  id="email"
                  v-model="email"
                  label="E-mail"
                  clearable
                  autofocus
                  append-icon="email"
                  required
                  :rules="[v => !!v || 'Email is required']"
                ></v-text-field>
                <v-text-field
                  type="password"
                  name="password"
                  id="password"
                  v-model="password"
                  label="Password"
                  clearable
                  append-icon="visibility_off"
                  required
                  :rules="[v => !!v || 'Password is required']"
                ></v-text-field>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                      class="right primary text-capitalize"
                      @click="signIn"
                      :loading="loading && logIn"
                      :disabled="loading"
                      flat
                    >Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: "",
      password: "",
      logIn: true,
      spin: true
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(newUser) {
      if (newUser !== null && newUser !== undefined) {
        // this.$router.push(this.$route.path);
        this.$router.push("/user");
      }
    }
  },

  methods: {
    signIn() {
      if (this.$refs.form.validate()) {
        this.spin = false;
        this.$store.dispatch("signUserIn", {
          email: this.email,
          password: this.password
        });
      }
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>
