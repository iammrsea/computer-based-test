<template>
  <v-alert
    dismissible
    :value="alert"
    :type="type"
    transition="scale-transition"
    @input="onClose"
  >{{message}}</v-alert>
</template>

<script>
export default {
  props: ["message", "type"],
  data() {
    return {
      alert: true
    };
  },
  methods: {
    onClose() {
      // console.log("Alert has been closed");
      this.$emit("alert-dismissed");
    }
  }
};
</script>

