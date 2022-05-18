<template>
  <!-----------------------------   TEMPLATE REGISTER -->
  

    <!-----------------------------   TEMPLATE LOGIN -->
    <section class="login">
      <h2>SE CONNECTER</h2>
      <div id="mainContainer">
        <!-- Formulaire de connexion -->
        <form @submit.prevent="login">
          <div class="input-container">
            <label for="emailInput">Email : </label>
            <input
              type="email"
              id="emailInput"
              v-model="email"
              placeholder="mail"
              required
            />
          </div>

          <div class="input-container">
            <label for="passwordInput">Password : </label>
            <input
              type="password"
              id="passwordInput"
              v-model="password"
              placeholder="1234"
              required
            />
          </div>

          <input class="login-button" type="submit" value="Se connecter" />
        </form>

        <p v-if="result === true" class="success">
          Connexion réussie
          <br />
          message: {{ message }}
        </p>
        <p v-else-if="result === false" class="error">Connexion échouée</p>
      </div>
    </section>
  

</template>

// SCRIPT---------------------------------------


<script>

// LOGIN ---------------------------------------

export default {
  data() {
    return {
      email: "",
      password: "",
      result: null,
      message: "",
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
          emailc: this.email,
          passwordc: this.password,
          
        }),
      };

      const response = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/login",
        options
      );

      const data = await response.json();
      this.result = data.success;
      if (data.success === true) {
        this.message = "conexion réussie";
      }
    },
  },
};




</script>




<style>
#mainContainer {
  display: flex;
  justify-content: flex-end;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 100px 30px;
}

.input-container {
  margin: 10px;
  display: flex;
  flex-direction: row;
}

.input-container label {
  padding: 5px;
}

.input-container input {
  border: 1px solid grey;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  flex-grow: 1;
}

.login-button .register-button {
  margin: 20px;
  padding: 10px;
  background-color: grey;
  color: white;
  border: 0px;
  border-radius: 5px;
  font-size: 15px;
}

.login-button:hover {
  cursor: pointer;
}

.success {
  margin-top: 20px;
  padding: 10px;
  background-color: #2c962c;
  color: white;
}

.error {
  margin-top: 20px;
  padding: 10px;
  background-color: #b42f26;
  color: white;
}

.wrapper {
  display: flex;

  justify-content: center;
  align-content: center;
}
</style>
