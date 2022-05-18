<template>
  <body>
    <div id="root">
      <div class="container">
        <label class="newPost">
          <h1>NEW POST</h1>
          <p>test</p>
          Publier
          <input @input="setNewPost" type="text" name="post" />
          <button @click="addPost" type="button">GO !</button>
        </label>

        <div class="columns">
          <!-- on travail sur la liste de reception -->
          <ul>
            <li v-for="post in postList">
              {{ post.text }}
              <div class="actions">
                <button @click="changeBackground()" :class="[theme.background]">
                  j'aime
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Newtonsoft",
  components: {},
};
const App = {
  data() {
    return {
      newPost: "",
      postList: [],
      idPost: 0,
      theme: {
        background: "",
      },
    };
  },

  methods: {
    setNewPost: function (event) {
      this.newPost = event.target.value;
    },

    addPost: function () {
      if (!this.newPost) return;
      let count = ++this.idPost;
      id = "post" + count;

      const newPost = {
        text: this.newPost,
        createdAt: new Date().getTime(),
        status: "post",
        number: id,
      };
      console.log(newPost);

      this.postList = this.postList.concat(newPost);
      this.newPost = "";
    },
    changeBackground: function () {
      this.theme.background = "blu";
    },
  },

  computed: {
    posted: function () {
      return this.postList.filter((task) => task.status === "post");
    },
  },
};
</script>

<style>
body {
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
}
</style>
