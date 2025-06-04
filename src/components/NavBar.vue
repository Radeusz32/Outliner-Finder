<script setup>
import { useI18n } from "vue-i18n";
import { watch } from "vue";

const { locale } = useI18n();

watch(locale, (newLocale) => {
  localStorage.setItem("locale", newLocale);
});
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">Outlier Finder</div>
    <div class="navbar-lang">
      <select v-model="locale" class="lang-select">
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

.navbar-lang {
  display: flex;
  align-items: center;
}

.lang-select {
  font-size: 1rem;
  padding: 0.4rem 1rem;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.lang-select:hover {
  background-color: #f1f1f1;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.2);
}
</style>
