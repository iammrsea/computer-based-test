<template>
  <v-card class="mb-4">
    <v-card-title class>
      <span>Questions Answered:</span>
      
      <span class="font-weight-bold">{{performance.total}}</span>
    </v-card-title>
    <v-card-title class>
      <span>Total Corect Answers:</span>
      
      <span class="font-weight-bold">{{performance.correct}}</span>
    </v-card-title>
    <v-card-title>
      <span>Total Wrong Answers:</span>
      
      <span class="font-weight-bold">{{performance.wrong}}</span>
    </v-card-title>
    <v-card-title>
      <span>Date it was taken:</span>
      
      <span class="font-weight-bold">{{performance.date | date}}</span>
    </v-card-title>
    <v-card-title>
      <span>Time it was taken:</span>
      <span class="font-weight-bold">{{performance.date | time}}</span>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="red white--text" flat @click="onRemove(performance.id)">Remove</v-btn>
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
  data() {
    return {
      requiredId: ""
    };
  },
  computed: {
    loading() {
      return this.$store.getters["loading"];
    }
  },
  filters: {
    date(date) {
      const myDate = new Date(date);
      const year = myDate.getFullYear();
      // const day = myDate.getDay();
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
  },
  methods: {
    onRemove(id) {
      this.requiredId = id;
      this.$store.dispatch("removeStat", id);
      // console.log(id);
    }
  }
};
</script>
<style scoped>
</style>
