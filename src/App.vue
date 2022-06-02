<template>

<div class="logo">
  <img src="../src/assets/test2.jpg" alt="logo" class="logo_img" />
</div>

  <header>
    <a href="App.vue" class="home">HOME</a>
    <router-link to="/Login" class="link">Login</router-link>
    <router-link to="/Register" class="link">Register</router-link>
    <router-link to="/Profil" class="link">Profil</router-link>
    <router-link to="/NewPost" class="link">New post</router-link>
  </header>

  <router-view />






</template>

<script>

</script>



<style>


.logo_img{
height:400px;
margin-left: 500px;
}


header {
  
  background: #e3d494;
  height: 50px;
  border-radius: 5px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
header a {
  color: #e5e5e5;
}
.link {
  color: #482e02;
}

.link:hover {
  opacity: 80%;
   transform: scale(120%);
}

.home{
 color: #482e02;
}

.home:hover {
  opacity: 80%;
   transform: scale(150%);
}

</style>
