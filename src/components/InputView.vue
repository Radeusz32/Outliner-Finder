<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { result } from "../store.js";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
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
    <h2>{{ t("message.heading") }}</h2>
    <input
      v-model="input"
      @input="filterInput"
      :placeholder="t('message.placeholder')"
    />
    <button @click="searchOutlier">{{ t("message.button") }}</button>
  </div>
</template>

<style scoped>
.input-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
}

h2 {
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #555;
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
}

button {
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: #111;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #333;
}
</style>
