<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-data-table :headers="headers" :items="users">
          <template #item.id="{ item }">{{ item.identification.type }} {{ item.identification.number }}</template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="viewItem(item)">mdi-account</v-icon>
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../plugins/axios";
export default {
  name: "Users",

  data: () => ({
    users: [],
    headers: [
      {
        text: "Username",
        align: "start",
        sortable: true,
        value: "username"
      },
      {
        text: "First Name",
        align: "start",
        sortable: true,
        value: "name.firstName"
      },
      {
        text: "Last Name",
        align: "start",
        sortable: true,
        value: "name.lastName"
      },
      {
        text: "Identification",
        align: "start",
        sortable: false,
        value: "id"
      },
      {
        text: "Actions",
        align: "start",
        sortable: false,
        value: "actions"
      }
    ]
  }),

  created() {
    // Use GET /users to retrieve all users from the database.
    axios.get("/users").then(res => {
      if (res.status == 200) {
        this.users = res.data;
      }
    });
  },

  methods: {
      viewItem(i){
          let user = "/users/" + i._id
          this.$router.push({ path: user})
      },
      editItem(i){
          let user = "/users/" + i._id + "/edit"
          this.$router.push({ path: user})
      },
      deleteItem(i){
          // Use DELETE /users/:id to delete the user with :id from the database.
          let index = this.users.indexOf(i)
          let rest = "/users/" + i._id
          confirm('Are you sure you want to delete this user?') && axios.delete(rest).then(
              res => {
                  if(res.status==200){
                      this.users.splice(index,1)
                  }
              }
          )
      }
  }
};
</script>