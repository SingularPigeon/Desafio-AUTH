<script setup>
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { $auth } from '@/firebaseApp'
import GoogleIcon from './icons/GoogleIcon.vue'
async function SignWithGoogle() {
  try {
    const provider = new GoogleAuthProvider()

    await signInWithPopup($auth, provider)
  } catch (error) {
    console.error(error)
  }
}
</script>
<template>
  <button class="btn btn-outline-primary w-100" @click="SignWithGoogle">
    <GoogleIcon class="me-3" /> Iniciar sesión con Google
  </button>
</template>
