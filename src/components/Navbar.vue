<template>
  <div>
    <v-toolbar flat app dark class="primary">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" tag="span" style="cursor:pointer">TripleS</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="(link,index) in links" :key="index" :to="link.route">
          <v-icon left>{{link.icon}}</v-icon>
          <span class="text-capitalize">{{link.text}}</span>
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
          <span class="text-capitalize">Logout</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer app class v-model="drawer">
      <v-list>
        <v-list-tile v-for="(link,index) in links" :key="index" :to="link.route">
          <v-list-tile-action>
            <v-icon left>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{link.text}}</v-list-tile-content>
        </v-list-tile>
        <v-btn flat v-if="userIsAuthenticated" class="ml-0" @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
          <v-spacer></v-spacer>
          <span class="text-capitalize ml-3">Logout</span>
        </v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    links() {
      const user = this.$store.getters.user;
      if (user !== null && user !== undefined) {
        return [{ icon: "person", text: "Profile", route: "/user" }];
      } else {
        return [
          { icon: "face", text: "Sign up", route: "/signup" },
          { icon: "lock_open", text: "Sign in", route: "/signin" }
        ];
      }
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logUserOut");
      this.$router.push("/signin");
    }
  }
};
</script>

