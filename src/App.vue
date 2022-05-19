<template>
    <header>
        
        <a href="App.vue">HOME</a>
        <router-link to="/Login" class="link">Login</router-link>
        <router-link to="/Register" class="link">Register</router-link>
        <router-link to="/Profil" class="link" >Profil</router-link>
        <router-link to="/NewPost" class="link">New post</router-link>
    </header>
    <router-view />
</template>

<style>
header {
    background: #14213D;
    height: 50px;
    border-radius: 5px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    
}
header a {
    color: #E5E5E5;
}
.link {
    color: #FCA311;
}
</style>
