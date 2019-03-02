<template>
  <v-container>
    <v-dialog v-model="performanceDialog" persistent width="500">
      <v-btn flat color="teal" slot="activator" class="px-0 ma-0">Next Time</v-btn>

      <v-card>
        <v-container>
          <div class="mb-2" v-if="error">
            <app-alert
              :type="'error'"
              :message="error.message"
              @alert-dismissed="onDismissed"
              :dismissible="true"
            ></app-alert>
          </div>
          <v-card-title>
            <p
              class="headline"
            >Would you like your performance stats to be saved for future reference and appraisal?</p>
            <v-divider></v-divider>
          </v-card-title>
          <v-card-title>
            <div class="mb-2" v-if="error">
              <app-alert :type="'error'" :message="error.message" :dismissible="false"></app-alert>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark flat class="teal" @click="onYes" :loading="loading" :disabled="loading">Yes</v-btn>
            <v-btn @click=" onCancel" flat dark class="red">No/Exit</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      performanceDialog: false
    };
  },
  computed: {
    result() {
      return this.$store.getters["resultToSave"];
    },
    loading() {
      return this.$store.getters["loading"];
    },
    error() {
      return this.$store.getters["error"];
    },
    user() {
      return this.$store.getters["user"];
    }
  },
  watch: {
    user(newUser) {
      if (Array.isArray(newUser.performance)) {
        this.$router.push("/user");
        this.performanceDialog = false;
      }
    }
  },

  methods: {
    onCancel() {
      this.performanceDialog = false;
      this.$router.push("/user");
    },
    onYes() {
      if (this.result !== null && this.result !== undefined) {
        const result = this.result;
        this.$store.dispatch("saveUserPerformance", result);
      }
    }
  }
};
</script>
