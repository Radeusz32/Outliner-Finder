<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="app">
    <div class="app">
      <Navbar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>
