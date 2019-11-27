<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form id="check-login-form" @submit.prevent="handleLogin">
              <v-text-field
                v-model.trim="form.id"
                :rules="nameRules"
                :counter="16"
                label="Id"
                name="login"
                type="text"
                required
              />

              <v-text-field
                v-model.trim="form.password"
                :rules="pwRules"
                :counter="16"
                label="Password"
                name="password"
                type="password"
                required
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn type="submit" color="primary" form="check-login-form">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <Snackbar />
  </v-container>
</template>

<script>
export default {
  name: "Signin",
  props: {
    source: String
  },
  components: {
    Snackbar: () => import("@/components/Snackbar")
  },
  data: () => ({
    form: {
      id: "",
      password: ""
    },
    nameRules: [
      v => !!v || "Id is required",
      v => v.length <= 16 || "Id must be less than 16 characters"
    ],
    pwRules: [
      v => !!v || "Password is required",
      v => v.length <= 16 || "Password must be less than 16 characters"
    ]
  }),
  methods: {
    handleLogin() {
      const mustbe = "demo";
      const { id, password } = this.form;
      if (id === mustbe && password === mustbe) {
        localStorage.setItem("user", mustbe);
        this.$router.push("/");
      } else {
        this.$store.commit("auth/setToggleSnackbar", true);
      }
    }
  }
};
</script>