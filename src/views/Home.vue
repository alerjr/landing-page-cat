<script>
import { RouterLink } from "vue-router";
import { fetchUsers } from "../services/data";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (this.email && this.password) {
        try {
          const users = await fetchUsers();

          const foundUser = users.find(
            (user) => user.email === this.email && user.password === this.password
          );

          if (foundUser) {
            this.$router.push("/welcome");
          } else {
            window.alert("Email ou senha incorretos.");
          }
        } catch (error) {
          console.error(error);
          window.alert("Erro ao buscar usuários.");
        }
      } else {
        window.alert("Preencha todos os campos.");
      }
    },
  },
};
</script>

<template>
  <div class="d-flex vh-100 flex-wrap">
    <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center bg-dark">
      <img src="../assets/cat.svg" class="col-lg-10 col-6" />
    </div>
    <div
      class="col-lg-6 col-12 d-flex justify-content-center align-items-center bg-dark text-light"
    >
      <div class="col-lg-10 col-8 p-3">
        <div class="mb-4">
          <h1>Acesse sua conta</h1>
        </div>
        <div class="mb-3 input-group">
          <span class="input-group-text bg-white border-end-0">
            <img
              src="../assets/mail.svg"
              alt="Ícone do email"
              style="width: 20px; height: 20px"
            />
          </span>
          <input
            type="email"
            class="form-control p-3 border-start-0"
            id="emailInput"
            placeholder="Seu email"
            required
            v-model="email"
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
            v-model="password"
          />
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <div class="col-lg-4 col-6 m-2">
            <button @click="login" type="button" class="btn btn-primary w-100 p-2">
              Login
            </button>
          </div>

          <RouterLink to="/sign-up" class="col-lg-4 col-6 m-2">
            <button type="button" class="btn btn-dark w-100 p-2 border">
              Criar conta
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap");

* {
  font-family: "Kumbh Sans", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #000; /* previne fundo branco entre colunas */
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

/* Garante que colunas não causem lacunas no mobile */
@media (max-width: 768px) {
  .d-flex.vh-100.flex-wrap > div {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
