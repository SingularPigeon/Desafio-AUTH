<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary text-center mt-5 py-3">
    <div class="container-fluid td-flex justify-content-center">
      <RouterLink :to="{ name: 'home' }" class="nav-link"
        ><img src="/public/hongos-icon.png" alt="Logo" class="logo-nav"
      /></RouterLink>
    </div>
  </nav>
</template>
<style scoped>
.logo-nav {
  width: 50px;
}
</style>
