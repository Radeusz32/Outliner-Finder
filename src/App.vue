<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="app">
    <div class="app">
      <NavBar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>
