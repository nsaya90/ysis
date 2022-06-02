<template>
  <button class="btnPage" @click="pageSucessive">page suivante</button>

  <p v-for="elem in list" :key="elem.description" class="postText">
    {{ elem.title }}
  </p>
</template>

<script>
export default {
  name: "PostRegister",
  data() {
    return {
      list: [],
      message: "",
      result: null,
    };
  },

  /* ---------------------------------------------------------------------------------------*/
  /* ------------------------METHODES DE L'API => RECUPERER TOUS LES POSTS ------------------*/
  /* ---------------------------------------------------------------------------------------*/

  methods: {
    async pageSucessive() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const reponse = await fetch(
        "https://social-network-api.osc-fr1.scalingo.io/ysis/posts?page=0&limit=5",
        options
      );

      const data = await reponse.json();

      this.list = data.posts;

      console.log(data.posts);
    },
  },
};
</script>

<style>
.btnPage {
  background-color: #e3d494;
  border: 1px solid white;
  width: 300px;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 650px;
}

.postText {
  background-color: #f6ecbf;
  border: 1px solid white;
  width: 300px;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 650px;
}
</style>
