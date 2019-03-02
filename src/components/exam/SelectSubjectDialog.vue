<template>
  <v-container>
    <v-dialog v-model="selectDialog" persistent width="500">
      <v-btn flat color="teal" slot="activator">Proceed</v-btn>

      <v-card>
        <v-container>
          <v-card-title>
            <p class="headline">You are allowed to select only three subjects</p>
            <v-divider></v-divider>
          </v-card-title>
          <v-card-title>
            <div class="mb-2" v-if="error">
              <app-alert :type="'error'" :message="error.message" :dismissible="false"></app-alert>
            </div>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs6 v-for="(subject,i) in subjects" :key="i">
                <v-checkbox
                  v-if="subject ==='English Language'"
                  v-model="selected"
                  color="teal"
                  input-value="true"
                  :value="subject"
                  disabled
                  :label="subject"
                  row
                ></v-checkbox>

                <v-checkbox
                  row
                  v-else
                  v-model="selected"
                  color="teal"
                  :label="subject"
                  :value="subject"
                ></v-checkbox>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            <p>Select which of the options you would prefer</p>
            <v-radio-group v-model="radioGroup">
              <v-radio :label="examTypeOpts.option_one" color="teal" :value="1"></v-radio>
              <v-radio :label="examTypeOpts.option_two" color="teal" :value="2"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark flat color="teal" @click="onProceed">Proceed</v-btn>
            <v-btn @click=" onCancel" flat dark color="red">Cancel</v-btn>
          </v-card-actions>
        </v-container>
        <!-- {{selected}} -->
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected: ["English Language"],
      selectDialog: false,
      examTypeOpts: {
        option_one: "50 questions per subject and 200 in all?",
        option_two: "25 questions per subject and 100 in all?"
      },
      radioGroup: 1
    };
  },
  computed: {
    error() {
      return this.$store.getters["error"];
    },
    subjects() {
      return this.$store.getters["subjects"];
    }
  },
  watch: {
    selected(newValue) {
      if (newValue.length > 4 && this.error === null) {
        const error = {
          message: "You can only select three subjects"
        };
        this.$store.commit("setError", error);
        return;
      }
      if (newValue.length <= 4 && this.error !== null) {
        this.$store.dispatch("clearError");
      }
    }
  },
  methods: {
    onCancel() {
      this.selectDialog = false;
      this.selected = ["English Language"];
      this.$store.dispatch("clearError");
    },
    onProceed() {
      if (this.selected.length !== 4) {
        if (this.$store.getters["error"]) {
          return;
        } else {
          const error = {
            message: "You can only be tested on  a combination of 4 subjects"
          };
          this.$store.commit("setError", error);
          return;
        }
      } else {
        this.$store.dispatch("userSelectedSubjects", this.selected);
        this.$store.dispatch("examVariant", this.radioGroup);
        this.selected = ["English Language"];
        this.selectDialog = false;
      }
    }
  }
};
</script>
