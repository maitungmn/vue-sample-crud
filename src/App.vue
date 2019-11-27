<template>
  <v-app>
    <DefaultLayout v-if="$route.path !== '/signin'">
      <router-view />
    </DefaultLayout>
    <router-view v-else />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    DefaultLayout: () => import("@/layouts/default.vue")
  },
  data: () => ({
    //
  }),
  created() {}
};
</script>

<style lang="scss" scoped>
@import "./assets/styles/app.scss";
</style>

