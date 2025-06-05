<script setup></script>

<template>
  <div class="d-flex vh-100 flex-wrap">
    <div
      class="col-lg-6 col-12 d-flex justify-content-center align-items-center bg-dark text-light"
    >
      <div class="col-10 p-3 text-center">
        <h1 class="mb-4">Muito bem-vindo(a)</h1>

        <RouterLink to="/sign-up" class="col-lg-4 col-6 m-2">
          <button type="button" class="btn btn-dark w-100 p-2 mb-2">
            Criar conta
          </button>
        </RouterLink>

        <RouterLink to="/" class="col-lg-4 col-6 m-2">
          <button type="button" class="btn btn-dark w-100 p-2 mt-2">Login</button>
        </RouterLink>
      </div>
    </div>

    <div class="col-lg-6 col-12 d-flex justify-content-center align-items-center bg-dark">
      <img src="../assets/success.svg" class="col-lg-10 col-6" />
    </div>
  </div>
</template>

<style scoped>
button {
  border-radius: 2rem;
  background-color: #f97171;
}
</style>
