<template>
    <div class="box_form">
        <fieldset>
            <legend>Modification de votre profil</legend>
            <form action="">
                <label for="nom">Nom : </label>
                <input type="text" />

                <label for="prenom">Prenom : </label>
                <input type="text" />

                <label for="mail">Mail : </label>
                <input type="text" />

                <label for="age">Age : </label>
                <input type="number" />

                <label for="occupation">Occupation : </label>
                <input type="text" />

                <button @click="putUser">Valider</button>
            </form>
        </fieldset>
    </div>
</template>

<script>
const token = localStorage.getItem("token");
export default {
    name: "Profil",
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            age: "",
            occupation: "",
            result: null,
            message: "",
        };
    },
    methods: {
        async putUser(event) {
          event.preventDefault()
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            const reponse = await fetch(
                "https://social-network-api.osc-fr1.scalingo.io/ysis/user",
                options
            );
            const data = await reponse.json();

            this.result = data.success;
            console.log(data);

            this.firstname = data.firstname;
            this.lastname = data.lastname;
            this.email = data.email;
            this.age = data.age;
            this.occupation = data.occupation;

            if (data.sucess === true) {
                this.message = "ok";
            }
        },
    },
};
</script>

<style>
legend {
    font-size: 25px;
}

form {
    display: flex;
    flex-direction: column;
}

.box_form {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
