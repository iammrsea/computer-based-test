<template>
  <div class="profile">
    <h1 class="subheading grey--text">Profile</h1>
    <v-container>Content</v-container>
  </div>
</template>

<script>
export default {
   beforeRouteLeave(to, from, next) {
        const answer = window.confirm(
          "Do you really wants to leave? You have unsaved changes!"
        );
        if (answer) {
          next();
        } else {
          next(false);
        }
      },
  methods: {}
};
</script>
