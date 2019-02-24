<template>
  <v-container>
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
            <v-flex xs12 md6 offset-md1>
              <InstructionComponent :instructions="instructions"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import ProfileComponent from "@/components/user/ProfileComponent";
import InstructionComponent from "@/components/exam/InstructionComponent";

export default {
  components: {
    ProfileComponent,
    InstructionComponent
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters["user"];
    },
    instructions() {
      return this.$store.getters["instructions"];
    }
  }
};
</script>

