<template>
  <v-container>
    <v-col>
      <h2>Add New User</h2>
      <v-form v-model="isFormValid">
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="First Name"
              v-model="name.firstName"
              :rules="[rules.required]"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="Last Name"
              v-model="name.lastName"
              :rules="[rules.required]"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-select
              item-text="C.C."
              :items="idTypes"
              v-model="identification.type"
              :rules="[rules.required]"
            />
          </v-col>
          <v-col cols="10">
            <v-text-field
              label="Identification"
              v-model="identification.number"
              :rules="[rules.required,rules.id]"
            />
          </v-col>
        </v-row>

        <v-text-field
          label="Username"
          v-model="username"
          hint="At least 8 characters"
          :rules="[rules.required,rules.username]"
        />
        <v-text-field
          label="Password"
          v-model="password"
          :rules="[rules.required]"
          :type="'password'"
        />
        <v-text-field label="Photo" v-model="photo" />
        <v-textarea label="Description" v-model="description" />
        <v-btn :disabled="!isFormValid" @click="onSubmit">Submit</v-btn>
      </v-form>
    </v-col>
  </v-container>
</template>

<script>
import axios from '../plugins/axios'
export default {
  name: "UserAdd",

  data: () => ({
    isFormValid: false,
    name: {
      firstName: "",
      lastName: ""
    },
    identification: {
      type: "C.C.",
      number: ""
    },
    username: "",
    password: "",
    photo: "",
    description: "",
    rules: {
      required: value => !!value || "Required",
      username: value => value.length >= 8 || "Min 8 characters",
      id: value => {
        const pattern = /^(0|[1-9][0-9]*)$/
        return pattern.test(value) || "Numbers only"
      }
    },
    idTypes: ["C.C.", "T.I.", "NIT"]
  }),

  methods: {
    onSubmit() {
      let user = {
        name: {
          firstName: this.name.firstName,
          lastName: this.name.lastName
        },
        identification: {
          type: this.identification.type,
          number: this.identification.number
        },
        username: this.username,
        password: this.password,
        photo: this.photo,
        description: this.description,
        active: true,
      };

      axios.post("/users",user).then(
        this.$router.push({ path: '/users'})
        // This is a problem if the user isn't able to be added.
      )
    }
  }
};
</script>