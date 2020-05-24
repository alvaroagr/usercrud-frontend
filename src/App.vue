<template>
  <div id="app">
    <v-app>
      <header>
        <v-app-bar app color="primary" dark>
          <div class="d-flex align-center">
            <h1>User Database</h1>
          </div>

          <v-toolbar color="primary" dark flat>
            <v-toolbar-items>
              <v-btn to="/" text exact>Home</v-btn>
              <v-btn to="/users/new" text exact>Add User</v-btn>
              <v-btn to="/users" text exact>Users</v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-app-bar>
      </header>

      <v-content>
        <router-view />
      </v-content>

      <v-footer
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Alvaro A. Gomez Rey</strong>
      </v-col>
    </v-footer>

    </v-app>

    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>