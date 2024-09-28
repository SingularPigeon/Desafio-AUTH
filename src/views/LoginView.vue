<script setup>
import { ref } from 'vue'
import { $auth } from '@/firebaseApp'
import { signInWithEmailAndPassword } from 'firebase/auth'
import SignWithGoogle from '@/components/SignWithGoogle.vue'

const email = ref('')
const password = ref('')

async function handleLogin() {
  try {
    await signInWithEmailAndPassword($auth, email.value, password.value)
    email.value = ''
    password.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form @submit.prevent="handleLogin" class="mb-3">
          <h2 class="text-center my-3">Iniciar sesión</h2>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              v-model="email"
              placeholder="nombre@correo.com"
              required
            />
            <label for="floatingInput">Tu correo</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Contraseña"
              required
            />
            <label for="floatingPassword">Contraseña</label>
          </div>
          <button class="w-100 btn btn-lg btn-outline-primary mt-3" type="submit">
            Iniciar sesión
          </button>
        </form>
      </div>
      <div class="col-md-6 offset-md-3 text-center">
        <p class="text-center">o</p>
        <SignWithGoogle />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
