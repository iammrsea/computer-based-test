<template>
  <div class="mt-5">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <div class="mb-2" v-if="error">
            <app-alert
              :type="'error'"
              :message="error.message"
              @alert-dismissed="onDismissed"
              :dismissible="true"
            ></app-alert>
          </div>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>
                <v-spacer></v-spacer>
                <span class="text-xs-center">Sign Up</span>
                <v-spacer></v-spacer>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  type="email"
                  name="email"
                  id="email"
                  clearable
                  autofocus
                  append-icon="email"
                  v-model="email"
                  label="E-mail"
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
                <v-text-field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  label="Confirm Password"
                  clearable
                  append-icon="visibility_off"
                  required
                  :rules="[comparePasswords]"
                ></v-text-field>
                <v-layout>
                  <v-flex xs12>
                    <v-btn
                      class="right primary text-capitalize"
                      flat
                      @click="signUp"
                      :disabled="loading"
                      :loading="loading"
                    >Sign Up</v-btn>
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
      confirmPassword: ""
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords must match"
        : false;
    },
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
        let date = ("" + new Date()).split(" ");
        let myDate = date[4] + " " + date[5];
        this.$store.commit("timeSignedIn", myDate);
        this.$router.push("/user");
      }
    }
  },

  methods: {
    signUp() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("signUserUp", {
          email: this.email,
          password: this.password
        });
        this.$refs.form.reset();
      }
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>
