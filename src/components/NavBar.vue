<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['signOut'])

function handleSignOut() {
  emit('signOut')
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary text-center">
    <div class="container-fluid">
      <RouterLink :to="{ name: 'home' }" class="nav-link ps-3"
        ><img src="/public/hongos-icon.png" alt="Logo" class="logo-nav"
      /></RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto pe-3">
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" class="nav-link">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'register' }" class="nav-link">Registrarse</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'login' }" class="nav-link">Iniciar sesión</RouterLink>
          </li>
          <li>
            <button @click="handleSignOut" class="btn btn-sm btn-outline-secondary ms-2">
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.logo-nav {
  width: 50px;
}
</style>
