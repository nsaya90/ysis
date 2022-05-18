<!-- !!!!! A faire => Il faut ranger les post du plus récent au plus ancien -->



<template>
    <h1>Ajout d'un Post</h1>

    <input type="text" @input="taskDescription" />
    <input type="text" @input="taskDescriptionContent" />

    <p>{{ message }}</p>

    <button @click="add">GO !</button>

    <div class="box_post">
        <ul>
            <label for="Todo">Post</label>
            <li v-for="elem in list" :key="elem.description">
                {{ elem.title }}
                {{ elem.description }}
                
                <input type="button" value="LIKE" @click="commencer" />
            </li>
        </ul>
    </div>
</template>

<script>
// Je récupère le token dans le localStorage
// poour pouvoir plus bas l'utiliser lors de login
// pour remplire la condition du Authorization: `Bearer ${token}`
const token = localStorage.getItem("token");

export default {
    name: "Post",
    data() {
        return {
            list: [],

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
