<template>
  <h1>Bienvenue sur votre profil</h1>

  <!-- Nom de l'utilisateur -->
  <!-- Prénom de l'utilisateur -->

  <button>Post</button>

  <button @click="getUser">Vos info</button>

  <ul>
    <li>{{ firstname }}</li>
    <li>{{ lastname }}</li>
    <li>{{ email }}</li>
    <li>{{ age }}</li>
    <li>{{ occupation }}</li>
  </ul>

  <p>{{ message }}</p>

  <router-link to="/Modify" class="modifyProfil"
    >Modifier votre profil</router-link
  >
</template>

<script>
const token = localStorage.getItem("token");
export default {
  name: "Profil",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      age: "",
      occupation: "",
      result: null,
      message: "",
    };
  },
  methods: {
    async getUser() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const reponse = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/user",
        options
      );
      const data = await reponse.json();

      this.result = data.success;
      console.log(data);

      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.email = data.email;
      this.age = data.age;
      this.occupation = data.occupation;

      if (data.sucess === true) {
        this.message = "ok";
      }
    },
  },
};
</script>

<style>
.modifyProfil {
}
</style>
