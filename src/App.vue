<template>
  <Register/>
  <Login/>
  
</template>

<script>
//  enregistrer
const token = localStorage.getItem('token');

console.log(token);

import Register from './components/Register.vue'
import Login from './components/Login.vue'

export default {
//   data(){
// return{
  
// }

//   },

  components:{
   Register,
   Login,
  }

}



</script>
