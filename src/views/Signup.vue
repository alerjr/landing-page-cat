<script>
import { RouterLink } from "vue-router";
import { createUser } from "../services/data";

export default {
  data() {
    return {
      newEmail: "",
      newPassword: "",
      newConfirmPassword: "",
      newFullName: "",
    };
  },
  methods: {
    async createUser(event) {
      event.preventDefault();

      if (
        this.newEmail &&
        this.newPassword &&
        this.newFullName &&
        this.newPassword === this.newConfirmPassword
      ) {
        try {
          const result = await createUser(
            this.newEmail,
            this.newPassword,
            this.newFullName
          );

          window.alert("Usuário criado");

          this.newEmail = "";
          this.newPassword = "";
          this.newConfirmPassword = "";
          this.newFullName = "";
        } catch (error) {
          if (error.code === "23505") {
            window.alert("Este e-mail já está cadastrado.");
          }
        }
      } else {
        window.alert("Senha divergente");
      }
    },
  },
};
</script>

<template>
  <div class="d-flex vh-100 flex-wrap">
    <div
      class="col-lg-6 col-12 d-flex justify-content-center align-items-center bg-dark text-light"
    >
      <div class="col-lg-10 col-10 p-3">
        <div class="mb-4">
          <h1 class="text-lg-end text-center">Seja bem vindo(a)!</h1>
        </div>
        <form @submit="createUser">
          <div class="mb-3 input-group">
            <span class="input-group-text bg-white border-end-0">
              <img
                src="../assets/profile.svg"
                alt="Ícone de nome"
                style="width: 20px; height: 20px"
              />
            </span>
            <input
              type="text"
              class="form-control p-3 border-start-0"
              id="nameInput"
              placeholder="Seu nome completo"
              required
              v-model="newFullName"
            />
          </div>

          <div class="mb-3 input-group">
            <span class="input-group-text bg-white border-end-0">
              <img
                src="../assets/mail.svg"
                alt="Ícone de email"
                style="width: 20px; height: 20px"
              />
            </span>
            <input
              type="email"
              class="form-control p-3 border-start-0"
              id="emailInput"
              placeholder="Seu email"
              required
              v-model="newEmail"
            />
          </div>

          <div class="mb-3 input-group">
            <span class="input-group-text bg-white border-end-0">
              <img
                src="../assets/password.svg"
                alt="Ícone de senha"
                style="width: 20px; height: 20px"
              />
            </span>
            <input
              type="password"
              class="form-control p-3 border-start-0"
              id="passwordInput"
              placeholder="Sua senha"
              required
              v-model="newPassword"
            />
          </div>

          <div class="mb-3 input-group">
            <span class="input-group-text bg-white border-end-0">
              <img
                src="../assets/passwordConfirm.svg"
                alt="Ícone de confirmação de senha"
                style="width: 20px; height: 20px"
              />
            </span>
            <input
              type="password"
              class="form-control p-3 border-start-0"
              id="passwordConfirmInput"
              placeholder="Confirme sua senha"
              required
              v-model="newConfirmPassword"
            />
          </div>

          <div
            class="d-flex justify-content-lg-end justify-content-center align-items-center"
          >
            <RouterLink to="/" class="col-lg-4 col-6 m-2">
              <button type="button" class="btn btn-dark w-100 p-2 border">Login</button>
            </RouterLink>

            <div class="col-lg-4 col-6 m-2">
              <button type="submit" class="btn btn-primary w-100 p-2">Criar conta</button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center bg-dark">
      <img src="../assets/space.svg" class="col-lg-10 col-6" />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap");

* {
  font-family: "Kumbh Sans", sans-serif;
}

input,
button,
span {
  border-radius: 2rem;
}

.btn-primary {
  background-color: #f97171;
  border: 0;
}

.btn-primary:hover {
  background-color: rgba(249, 113, 113, 0.69);
}

input:focus {
  box-shadow: none;
}
</style>
