<!-- !!!!! A faire => Il faut ranger les post du plus récent au plus ancien -->

<template>
  <h4 class="title">Ajout d'un post</h4>
  <div class="text">
    <input type="text" @input="taskDescription" class="input1" />
    <input type="text" @input="taskDescriptionContent" class="input2" />
  </div>
  <p>{{ message }}</p>

  <button class="btnGo" @click="add">GO !</button>

  <div class="box_post">
    <ul>
      <label for="Todo">Post</label>
      <li v-for="elem in list" :key="elem.description">
        {{ elem.title }}
        {{ elem.description }}

        <p v-if="like === false">LIKE</p>
        <p v-else class="like">LIKE</p>
      </li>
    </ul>
  </div>
  <PostRegister />
</template>

<script>
// Je récupère le token dans le localStorage
// poour pouvoir plus bas l'utiliser lors de login
// pour remplire la condition du Authorization: `Bearer ${token}`
const token = localStorage.getItem("token");
import PostRegister from "../components/PostRegister";

export default {
  name: "NewPost",
  components: {
    PostRegister,
  },

  data() {
    return {
      list: [],
      like: false,
      inputTask: "",
      info: "",
      infoContent: "",
      message: "",
      result: null,
    };
  },

  methods: {
    /* -----------------------------------------------------------------------------------------------*/
    /* ------------------------------------METHODES DE L'API => POST ---------------------------------*/
    /* -----------------------------------------------------------------------------------------------*/
    taskDescription(e) {
      this.info = e.target.value;
    },

    taskDescriptionContent(e) {
      this.infoContent = e.target.value;
    },

    async add() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: this.info,
          content: this.infoContent,
        }),
      };

      const reponse = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/post",
        options
      );

      const data = await reponse.json();
      console.log(data);
      this.result = data.success;
      if (data.success === true) {
        this.message = data.message;
      }
      // ici on créé un objet qui sera nos post

      //  !!!! !!!! A faire ici => mettre un id différent pour chaque post qui sera créé
      //  il nous permettra de gérer le like dans les posit
      let post = {
        title: this.info,
        content: this.infoContent,
        false: false,
      };
      // on récupère notre array qui se nomme list dans notre data
      // on utilise la fonction concat pour rajouter nos post dans un tableau
      // Pour pouvoir ensuite les afficher dans note template
      this.list = this.list.concat(post);
    },

    /* -----------------------------------------------------------------------------------------------*/
    /* ------------------------------------METHODES DE L'API => POST/COMMENT ------------------------*/
    /* -----------------------------------------------------------------------------------------------*/

    async postComment() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
        body: JSON.stringify({
          // postId:
          // content:
        }),
      };
      const reponse = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/post/comment",
        options
      );
      const data = await reponse.json();

      this.result = data.success;
      if (data.sucess === true) {
        this.message = data.message;
      }
    },

    /* -----------------------------------------------------------------------------------------------*/
    /* ------------------------------------METHODES DE L'API => POST/LIKE ----------------------------*/
    /* -----------------------------------------------------------------------------------------------*/

    async postLike() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer token",
        },
        body: JSON.stringify({
          // postId:
        }),
      };
      const reponse = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/post/like",
        options
      );
      const data = await reponse.json();

      this.result = data.success;
      if (data.sucess === true) {
        this.message = data.message;
      }
    },
  },
};
</script>

<style>

.title{
margin-left: 720px;
}

.like {
  color: blue;
}

.text {
  background-color: rgb(255, 248, 214);
  height: 50px;
  width: 600px;
  border-radius: 20px;
  margin-left: 500px;
  
}

.box_post {
  background-color: rgb(255, 248, 214);
  border: 1px solid white;
  width: 600px;
  margin-left: 500px;
  border-radius: 20px;
}

.input1 {
  border-radius: 50px;
  margin: 15px 50px;
  width: 200px;
}

.input2 {
  border-radius: 20px;
  width: 200px;
}

.btnGo {
  width: 100px;
  margin-left: 700px;
  background-color: #e3d494;
  border: 1px solid white;
  border-radius: 20px;
  width: 200px;
  height: 30px;
}
</style>
