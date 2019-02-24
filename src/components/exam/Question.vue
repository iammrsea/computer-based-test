<template>
  <v-card class="mb-1" raised hover>
    <v-container>
      <v-card-title>{{question.question}}</v-card-title>
      <v-card-text>
        <v-radio-group v-model="question.selectedOption">
          <v-radio :label=" 'A '+question.option1" color="teal" :value="1"></v-radio>
          <v-radio :label="'B '+question.option2" color="teal" :value="2"></v-radio>
          <v-radio :label="'C '+question.option3" color="teal" :value="3"></v-radio>
          <v-radio :label="'D '+question.option4" color="teal" :value="4"></v-radio>
        </v-radio-group>
      </v-card-text>
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
