<template>
  <v-card class="mb-4">
    <v-card-title class>
      Questions Answered:
      <span class="font-weight-bold">{{performance.total}}</span>
    </v-card-title>
    <v-card-title class>
      Total Corect Answers:
      <span class="font-weight-bold">{{performance.correct}}</span>
    </v-card-title>
    <v-card-title>
      Total Wrong Answers:
      <span class="font-weight-bold">{{performance.wrong}}</span>
    </v-card-title>
    <v-card-title>
      Date it was taken:
      <span class="font-weight-bold">{{performance.date | date}}</span>
    </v-card-title>
    <v-card-title>
      Time it was taken:
      <span class="font-weight-bold">{{performance.date | time}}</span>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="red white--text" flat>Remove</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    performance: {
      type: Object,
      required: true
    }
  },
  filters: {
    date(date) {
      const myDate = new Date(date);
      const year = myDate.getFullYear();
      const day = myDate.getDay();
      const dat = myDate.getDate();
      const month = myDate.getMonth();
      return ` ${month}/${dat}/${year}`;
    },
    time(date) {
      const myDate = new Date(date);
      const hrs = myDate.getHours();
      const mins = myDate.getMinutes();
      const secs = myDate.getSeconds();
      return `${hrs}:${mins}:${secs}`;
    }
  }
};
</script>
<style scoped>
</style>
