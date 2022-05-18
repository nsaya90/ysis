<template>
  <body>
    <header>
      <img src="./logo.jpg" class="logo" />
    </header>
    <!-- Nom de l'utilisateur -->
    <!-- Prénom de l'utilisateur -->

    <button class="buttonPost">Post</button>

    <!-- LIEN POUR AUTRE PAGES -->
    <div class="link">
      <router-link to="/Modify">Modifier votre profil</router-link>
      <router-link to="/NewPost">Publier un post</router-link>
    </div>
  </body>
</template>

<script>
//  const response = await fetch(
//         "https://social-network-api.osc-fr1.scalingo.io/demo/login",
//         options
//       );

//       const data = await response.json();
//       console.log(data);

export default {
  name: "Profil",
  components: {},
};
</script>

<style>

.logo {
  height: 400px;
  margin-left: 400px;
}

.link {
  /* background-color: rgb(255, 255, 255); */
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-family: Arial;
}
</style>
