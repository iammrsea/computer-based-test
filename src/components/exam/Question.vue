<template>
  <v-card class="mb-1" raised hover>
    <v-container>
      <div v-if="question.passage!==''&& question.passage!== undefined">
        <v-card-text>{{question.passage}}</v-card-text>
      </div>
      <div v-html="question.question" class="ma-0"></div>
      <div class="ma-0">
        <v-radio-group v-model="question.selectedOption" class="ma-0">
          <v-radio :label="question.option_one" color="teal" :value="1"></v-radio>
          <v-radio :label="question.option_two" color="teal" :value="2"></v-radio>
          <v-radio :label="question.option_three" color="teal" :value="3"></v-radio>
          <v-radio :label="question.option_four" color="teal" :value="4"></v-radio>
        </v-radio-group>
      </div>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  computed: {},
  data() {
    return {};
  }
};
</script>
