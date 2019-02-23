<template>
  <div>
    <v-card>
      <v-container>
        <v-card-title>
          <v-layout column>
            <v-flex class="text-xs-center">
              <v-icon style="font-size: 45px;" color="teal">person</v-icon>
            </v-flex>
            <v-flex class="text-xs-center">
              <h3>
                <Address v-if="user">Email: {{user.email}}</Address>
              </h3>
            </v-flex>
          </v-layout>
        </v-card-title>

        <v-divider></v-divider>
        <v-card-text>
          <v-layout column>
            <v-flex xs12 class="pa-2 mb-2">Time Logged in:</v-flex>
            <v-divider></v-divider>
            <v-flex xs12 sm6 offset-sm3 class="py-2 my-3">
              <span class="primary--text hidden-sm-only">Featured Performance Stats:</span>
              <span
                class="primary--text headline hidden-md-and-up hidden-xs-only"
              >Featured Performance Stats:</span>
            </v-flex>
            <v-layout row wrap>
              <v-flex xs12>
                <div v-if="!viewMore">
                  <div v-if="featuredStats">
                    <div v-for="(performance,i) in featuredStats" :key="i" class="mb-2">
                      <performance-stat :performance="performance"></performance-stat>
                    </div>
                  </div>
                  <div v-else>
                    <p>You don't have previously saved performance stats</p>
                  </div>
                </div>
                <div v-else>
                  <div v-if="allStats">
                    <div v-for="(performance,i) in allStats" :key="i" class="mb-2">
                      <performance-stat :performance="performance"></performance-stat>
                    </div>
                  </div>
                  <div v-else>
                    <p>You don't have previously saved performance stats</p>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div v-if="!viewMore">
            <v-btn flat color="teal" @click="viewMore=!viewMore">View more...</v-btn>
          </div>
          <div v-else>
            <v-btn flat color="teal" @click="viewMore=!viewMore">View less...</v-btn>
          </div>
        </v-card-actions>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="teal" @click="onSignOut">SignOut</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import PerformanceStat from "@/components/user/PerformanceStat";

export default {
  components: {
    PerformanceStat
  },
  props: [],
  data() {
    return {
      viewMore: false
    };
  },
  computed: {
    user() {
      return this.$store.getters["user"];
    },
    allStats() {
      return this.$store.getters["allStats"];
    },
    featuredStats() {
      return this.$store.getters["featuredStats"];
    }
  },

  methods: {
    onSignOut() {
      this.$store.dispatch("logUserOut");
      this.$router.push("/");
    }
  }
};
</script>
