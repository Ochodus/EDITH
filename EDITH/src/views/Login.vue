<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
const login = () => {
  router.push({
    path: "/main",
  });
}

</script>

<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  <div class="login">
    <h1 class="green">Login</h1>
    <div class="mb-3">
      <label for="id_input" class="form-label">ID</label>
      <input type="text" class="form-control" id="id_input" placeholder="">
    </div>
    <div class="mb-3">
      <label for="psw_input" class="form-label">Password</label>
      <input type="password" class="form-control" id="psw_input" placeholder="">
    </div>
    <div class="mb-3">
      <button type="submit" class="btn btn-primary mb-3" @click="login()">Login</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.login h1, .login h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .login h1, .login h3 {
    text-align: left;
  }
}
</style>
