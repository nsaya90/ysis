<template>
  <!-----------------------------   TEMPLATE REGISTER -->
  <div class="wrapper">
    
  <section class="register">
    <h2>S'ENREGISTRER</h2>
    <div id="mainContainer">
      <!-- Formulaire d'enregistrement -->
      <form @submit.prevent="register">
        <div class="input-container">
          <label for="emailInput">Email : </label>
          <input
            type="email"
            id="emailInput"
            v-model="email"
            placeholder="email"
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
        message: {{ message }}
      </p>
      <p v-else-if="result === false" class="error">Connexion échouée</p>
    </div>
  </section>


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
</div>




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

// REGISTER --------------------------------

 export default {
   data() {
     return {
       email: "",
       password: "",
      lastname: "",
       firstname: "",
       result: null,
       message: "",
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
         this.message = "inscription réussie";
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
