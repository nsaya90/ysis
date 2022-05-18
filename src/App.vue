<template>
  <Register />
  <Login />

  <router-link to="/NewPost.vue">POOOOOOST</router-link>


</template>

<script>
//  enregistrer

import Register from "./components/Register.vue";
import Login from "./components/Login.vue";

export default {
  //   data(){
  // return{

  // }

  //   },

  components: {
    Register,
    Login,
  },
};
</script>
