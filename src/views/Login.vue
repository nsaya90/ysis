<template>
  <div id="mainContainer">
    <!-- Formulaire de connexion -->
    <form @submit.prevent="login">
      <div class="input-container">
        <label for="emailInput">Email : </label>
        <input type="email" v-model="email" placeholder="votre mail" required />
      </div>

      <div class="input-container">
        <label for="passwordInput">Password : </label>
        <input
          type="password"
          v-model="password"
          placeholder="votre mot de password"
          required
        />
      </div>

      <input class="login-button" type="submit" value="Se connecter" />
    </form>

    <p v-if="result === true" class="success">
      Connexion réussie
      <br />
      Token: {{ token }}
    </p>
    <p v-else-if="result === false" class="error">Connexion échouée</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      result: null,
      token: "",
    };
  },

  methods: {
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/login",
        options
      );

      const data = await response.json();

      this.result = data.success;
      if (data.success === true) {
        this.token = data.token;

        // On récupère le token et l'insère dans un localStorage
        localStorage["token"] = data.token;

        // let key = localStorage["token"]
      }
    },
  },
};
</script>

<style>

#mainContainer {
  height: 150px;
  width: 300px;
  margin-top: 20px;
  background-color: rgb(255, 248, 214);
  margin-left: 610px;
  border-radius: 20px;
}



.input-container{
height: 30px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 5px;

}

.login-button{
  background-color: #e3d494;
  border: 1px solid white;
  width: 200px;
  height: 30px;
  margin-top: 30px;
border-radius: 20px;
margin-left: 60px;
}

.login-button:hover {
    opacity: 80%;
}

</style>
