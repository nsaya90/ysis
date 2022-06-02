<template>
  <!-----------------------------   TEMPLATE REGISTER -->
  <div class="wrapper">
    <section class="register">
      <!-- <h4>S'ENREGISTRER</h4> -->
      <div id="mainContainer">
        <!-- Formulaire d'enregistrement -->
        <form @submit.prevent="register">
          <div class="input-container">
            <label for="emailInput">Email : </label>
            <input type="email" v-model="email" placeholder="email" required />
          </div>

          <div class="input-container">
            <label for="passwordInput">Password : </label>
            <input
              type="password"
              v-model="password"
              placeholder="1234"
              required
            />
          </div>

          <div class="input-container">
            <label for="lastNameInput">Nom : </label>
            <input
              type="text"
              id="lastNameInput"
              v-model="lastname"
              placeholder="nom"
              required
            />
          </div>

          <div class="input-container">
            <label for="firstNameInput">Prénom : </label>
            <input
              type="text"
              id="firstNameInput"
              v-model="firstname"
              placeholder="prenom"
              required
            />
          </div>

          <input class="register-button" type="submit" value="S'enregistrer" />
        </form>

        <p v-if="result === true" class="success">
          Enregistrement réussi
          <br />
          message: {{ token }}
        </p>
        <p v-else-if="result === false" class="error">Connexion échouée</p>
      </div>
    </section>
  </div>
</template>

// SCRIPT---------------------------------------

<script>
// REGISTER --------------------------------

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      lastname: "",
      firstname: "",
      result: null,
      token: "",
    };
  },

  methods: {
    async register() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          lastname: this.lastname,
          firstname: this.firstname,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/register",
        options
      );

      const data = await response.json();
      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;
      }
    },
  },
};
</script>

<style>
.register-button {
  background-color: #e3d494;
  border: 1px solid white;
  width: 200px;
  height: 30px;
  margin-top: 30px;
  border-radius: 20px;
  margin-left: 60px;
}

.register-button:hover {
  opacity: 80%;
}
</style>
