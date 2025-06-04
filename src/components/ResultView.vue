<script setup>
import { useRoute, useRouter } from "vue-router";
import { result } from "../store.js";

const router = useRouter();

function goBack() {
  router.push("/");
}
</script>

<template>
  <div class="result-view">
    <h2>Wartość odstająca:</h2>
    <p class="outlier">{{ result }}</p>
    <button @click="goBack">Powrót</button>
  </div>
</template>

<style scoped>
.result-view {
  text-align: center;
  margin-top: 2rem;
}
.outlier {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
