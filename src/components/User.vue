<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-img :src="this.photo ? this.photo : this.defaultPhoto" height="200" max-height="200" max-width="200" contain aspect-ratio="1"/>
        <p v-if="this.active">Activo: Si</p>
        <p v-else>Activo: No</p>
      </v-col>
      <v-col cols="9">
        <h1>{{this.name.firstName}} {{this.name.lastName}}</h1>
        <h2>@{{this.username}}</h2>
        <p>{{this.identification.type}} {{this.identification.number}}</p>
        <p>{{this.description}}</p>
        <v-text-field
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          v-model="password"
          :rules="[rules.required]"
          @click:append="show = !show"
          readonly
        >{{this.password}}</v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../plugins/axios";
export default {
  name: "User",

  data: () => ({
    show: false,
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
    active: false,
    rules: {
      required: value => !!value || "Required",
      username: value => value.length >= 8 || "Min 8 characters"
    },
    idTypes: ["C.C.", "T.I.", "NIT"],
    defaultPhoto: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXc3Nz////t7e37+/ve3t7l5eXh4eH4+Pjm5uby8vL19fXv7+/p6ena2tpwjZMDAAAEq0lEQVR4nO2d0XajMAxEARswhv7/765JmjYNIYnlAUas7p597xzJ8kg2TlUZhmEYhmEYhmEYhmEYhmEYhmEYhmEYhgp8+nda/EzopqP/jm1JITxxDL85v0LDMAzDMAzjHd38f2qGIcZhbKa27c7lErshhFhfcMOYFIak8EwSx7p39SOuH5pwjkh2/ULdnc7YtNpVdi/0fRMnzSL9e4Ezg958HT5TeNGoU+SnAhOjPok+NB+HcMa1ujS2MUfdlUmRxE6gr9aUqY1InyKJo1SgFoldkCvUsRY/8DEv0GDjZFXmRs/vb9oigWkp0kssC2HNn6cfmu0XsPvw0iRNBG6F07KhzyVyB/FlU3+KIJavQ/aVCFiHcyN1tIwXiF33PQ1zELO63jWoaw2g0KQ0Za41CIHcaYpRSFxNEZtFouetpiCFxAsRpLCeaNMUpZC31KAUEvfBIIXExRSlkLeYlreH7Aohro1aIcR5UyuEdE+plvIqLBnp61BYNtP/gXfHrzymmPK6tsoXz7xnHLHCktPDX3re3gIzbKsjb6EBLUTiUloBDp9q6lJaQfZ8R31vsQUo7GPDe54P6i3qyCoRZEtr3gMoyH5/gbXYgNrD/0EhrW+DKRxOvw5p77hDfHfNvOdDfHcisiYpbF5KbL1BWz7rXpF6J9CchnWvSHjIwJS30FSgcSL1FAOSpsQj75SmCFtDu99fAGz6tKb0CmDTj6E7WsUrAMM24v3+QnGakicpoJoO3ElalZ+STuRJWrwSR/oQVr7ta6FIF93A7Nhu+C4IMzVqeXHBe6E9HdW8t+CF17/4i8wvIntK3TU9Imr2icczS0T7Prtd+4Oki6K3a38RpKmqJBWlKXfjuyS7x1CWpIIg0p7GrJE7WFQXwuwgqgthlXvWpsmx3chK016TY7uRVU2Jv3VaJ0sh9W29NbIUUk/y1zi/wqxKc36FKtdhVgOlspbmjRR5z+7XyRJI/hn+E77a7C7fBSWjxAuyDy8USZSek6p4zmxGfnFISQtVcDOK++mWb74muUAVL7ZVRQIVRNGXXzdhtqhfvoF8cdE3HefP+3SoO8KzSMJnsAPuW4QrXNkKSs8HXMNyJtyCvsN/AsEYNVUXdHr+JQXyUIGSh62zOW4A0I1brL5nuCMaZD9tm52P7Fxa/bRHdj7Q77cipXeeyhna7X/M0IcDondHv22XfEhyLtjuoazjkvORbX68BfBGMBA3oqvOJr6zjBg8bkkW9u1b4VBVB/HC80ZgBuW4dwQ2AHGiw7A/vMCVRhH08tOGFM4f+QWWGgDyFL1ScqBDXWR+KMhT0IfLmyO/9KciR+uCIGoJoTyINK3EW6TW5ui/OwPZVBX0VOcuyPZEPUkqtacK7MwvkjTVU0lnJBNj1HM6+yCppjoc2w3J8b+mQpMQfCDNO7p4Sv5C1NAZ3pO/I+oqpZKjKV2lVHKKqsmzzeQrJB0Cr5KvUNd2KHGm51cIvMG1C6ZwiTLTZgqfoGWSeMMUmkJ+8hUqaw8Fru30CiHPdO6JKTSF/GRPMUwhHaZwiSlk4/wK8x/sM4VsZJ9bqKul+Scz51c4OF28+WKoXRKmRhfhiYgf/gHZ+1ogqTKAlQAAAABJRU5ErkJggg=="
  }),

  created() {
    let rest = "/users/" + this.$route.params.id;
    axios.get(rest).then(res => {
      if (res.status == 200) {
        this.name = res.data.name;
        this.identification = res.data.identification;
        this.username = res.data.username;
        this.password = res.data.password;
        this.photo = res.data.photo;
        this.description = res.data.description
        this.active = res.data.active
      }
    });
  },
};
</script>