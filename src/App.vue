<script setup>
import { useRouter } from 'vue-router'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { $auth } from '@/firebaseApp'
import { signOut } from 'firebase/auth'
import FooterComponent from './components/FooterComponent.vue'

const router = useRouter()

async function handleSignOut() {
  try {
    await signOut($auth)
    alert('Has cerrado sesión correctamente')
    router.push({ name: 'login' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <NavBar @signOut="handleSignOut" />
  <section class="container-fluid p-0 mb-4">
    <HeaderComponent />
  </section>

  <RouterView />
  <FooterComponent />
</template>
