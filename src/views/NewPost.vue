<template>
  <h1>Ajout d'un Post</h1>

  <input type="text" @input="taskDescription" />
  <input type="text" @input="taskDescriptionContent" />

  <p>{{ message }}</p>

  <button @click="add">GO !</button>

  <div class="box_todo">
    <ul>
      <label for="Todo">Tâche à faire</label>
      <li v-for="elem in list" :key="elem.description">
        {{ elem.title }}
        {{ elem.description }}
        <input type="button" value="Commencer" @click="commencer" />
      </li>
    </ul>
  </div>
</template>

<script>
const token = localStorage.getItem("token");

// function buildAuthorizationHeader() {
//   const token = localStorage.getItem("BEARER_TOKEN");
//   if (!token) return "";
//   return `Bearer ${token}`;
// }

export default {
  name: "Post",
  data() {
    return {
      list: [],
      inputTask: "",
      info: "",
      infoContent: "",
      message: "", // => token
      result: null,
    };
  },

  methods: {
    /* -----------------------------------------------------------------------------------------------*/
    /* ------------------------------------METHODES DE L'API => POST ---------------------------------*/
    /* -----------------------------------------------------------------------------------------------*/
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
      // }, => end methods de l'API
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

  /* -----------------------------------------------------------------------------------------*/
  /* ------------------------------------METHODES DE L'API => LOGIN ----------------------------*/
  /* -----------------------------------------------------------------------------------------------*/

//   async login(email, password) {
//     const user = await fetch(
//       "https://social-network-api.osc-fr1.scalingo.io/ysis/login",
//       options,
//       {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     ).then((res) => res.json());

//     localStorage.setItem("BEARER_TOKEN", user.token);

//     return user;
//   },
};
</script>

<style>
/* body {
  background-image: url(./doubleTriangle.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

#root {
  width: 600px;
  height: 600px;
  border-radius: 80%;
  background-color: rgb(242, 237, 232);
  margin-left: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  border: 1px solid gray;
  padding: 8px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  box-sizing: border-box;
}

.blu {
  background-color: aqua;
} */
</style>
