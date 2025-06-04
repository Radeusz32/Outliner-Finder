import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

import pl from "./lang/pl.json";
import en from "./lang/en.json";

const i18n = createI18n({
  locale: "pl",
  fallbackLocale: "en",
  messages: {
    pl,
    en,
  },
});

createApp(App).use(router).use(i18n).mount("#app");
