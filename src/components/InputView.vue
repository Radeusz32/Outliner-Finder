<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { result } from "../store.js";

const input = ref("");
const router = useRouter();

function filterInput(event) {
  input.value = event.target.value.replace(/[^\d,-]/g, "");
}

function searchOutlier() {
  const numbers = input.value
    .split(",")
    .map((n) => parseInt(n.trim()))
    .filter((n) => !isNaN(n));

  if (numbers.length < 3) {
    alert("Wprowadź co najmniej 3 liczby.");
    return;
  }

  const even = numbers.filter((n) => n % 2 === 0);
  const odd = numbers.filter((n) => n % 2 !== 0);

  let outlier = null;

  if (even.length === 1) {
    outlier = even[0];
  } else if (odd.length === 1) {
    outlier = odd[0];
  } else {
    alert("Nie znaleziono jednoznacznej wartości odstającej.");
    return;
  }

  result.value = outlier;

  router.push({ name: "ResultView" });
}
</script>
<template>
  <div class="input-view">
    <h2>Wprowadź liczby oddzielone przecinkami:</h2>
    <input
      v-model="input"
      @input="filterInput"
      placeholder="Np. 2,4,0,100,4,11,2602,36"
    />
    <button @click="searchOutlier">Wyszukaj</button>
  </div>
</template>
<style scoped>
.input-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: auto;
}
input {
  padding: 0.5rem;
  font-size: 1rem;
}
button {
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
