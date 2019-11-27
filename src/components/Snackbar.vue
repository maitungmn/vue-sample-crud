<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar" color="red">
      {{ text }}
      <v-btn color="white" text @click="closeSnackbar">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    text: "Wrong ID or Password!"
  }),
  computed: {
    ...mapGetters({
      snackbar: "auth/toggleSnackbar"
    })
  },
  watch: {
    snackbar(newVal) {
      if (!newVal) {
        this.closeSnackbar;
      }
    }
  },
  methods: {
    closeSnackbar() {
      this.$store.commit("auth/setToggleSnackbar", false);
    }
  }
};
</script>