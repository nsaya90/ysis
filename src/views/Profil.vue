<template>
  <h1>Bienvenue sur votre profil</h1>

  <!-- Nom de l'utilisateur -->
  <!-- Prénom de l'utilisateur -->

  <button>Post</button>

  <router-link to="/Modify">Modifier votre profil</router-link> 
  
</template>

<script>

//  const response = await fetch(
//         "https://social-network-api.osc-fr1.scalingo.io/demo/login",
//         options
//       );

//       const data = await response.json();
//       console.log(data);



export default {
  name: 'Profil',
  components: {
   
  }
}
</script>
