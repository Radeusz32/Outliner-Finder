<script setup>
import { useRoute, useRouter } from "vue-router";
import { result } from "../store.js";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const router = useRouter();

function goBack() {
  router.push("/");
}
</script>

<template>
  <div class="result-view">
    <h2>{{ t("message.result") }}</h2>
    <p class="outlier">{{ result }}</p>
    <button @click="goBack">{{ t("message.back") }}</button>
  </div>
</template>

<style scoped>
.result-view {
  max-width: 600px;
  margin: 2rem auto 0 auto;
  text-align: center;
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
