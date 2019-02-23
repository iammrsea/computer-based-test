<template>
  <v-container>
    <v-dialog v-model="performanceDialog" width="500">
      <v-btn flat color="teal" slot="activator" class="px-0 mr-0">Click here to view all your stats</v-btn>
      <!-- <div v-if="allStats">
        <div v-for="(stat,i) in allStats" :key="i">
          <performance-stat :performance="stat"></performance-stat>
        </div>
      </div>
      <div v-else>
        <p>Sorry, there is nothing to show</p>
      </div>-->
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      performanceDialog: false
    };
  },
  methods: {
    onClose() {
      this.performanceDialog = false;
    }
  }
  //   computed: {
  //     allStats() {
  //       return this.$store.getters["allStats"];
  //     }
  //   }
};
</script>
