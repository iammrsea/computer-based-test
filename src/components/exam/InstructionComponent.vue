<template>
  <v-card>
    <v-container>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-1">Test Instructions</h3>
          <div>Read the following instructions carefully before you proceed to start the test</div>
        </div>
      </v-card-title>
      <v-card-text>
        <div v-for="(instruction,i) in instructions" :key="i">
          <v-divider></v-divider>

          <p class="pa-2">{{instruction}}</p>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          flat
          color="teal"
          class="text-capitalize ml-0 pl-0"
          @click="proceed"
        >Proceed to select subjects</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    instructions: {
      type: Array,
      required: true
    }
  },
  methods: {
    proceed() {
      this.$router.push("user/exam");
    }
  }
};
</script>
