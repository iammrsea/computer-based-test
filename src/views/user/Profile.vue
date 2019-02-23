<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-layout justify-center justify-space-around>
          <v-flex xs12 class="text-xs-center pa-1 mb-4 font-weight-light">
            <p
              class="headline"
            >Welcome to your profile page where you can practice some test questions</p>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 md5 class="mb-3">
            <ProfileComponent/>
          </v-flex>
          <!-- <v-flex xs12 md6 offset-md1>
            <Instruction :instructions="instructions"/>
          </v-flex>-->
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import ProfileComponent from "@/components/user/ProfileComponent";
// import Instruction from "@/components/cbt/Instruction";

export default {
  components: {
    ProfileComponent
  },
  methods: {},
  computed: {
    instructions() {
      return this.$store.getters["exam/instructions"];
    },
    user() {
      return this.$store.getters["user"];
    }
  }
};
</script>

// <script>
import ProfileComponent from "@/components/user/ProfileComponent";
// import Instruction from "@/components/cbt/Instruction";

export default {
  components: {
    ProfileComponent
  },
  methods: {},
  computed: {
    instructions() {
      return this.$store.getters["exam/instructions"];
    },
    user() {
      return this.$store.getters["user"];
    }
  }
};
</script>
