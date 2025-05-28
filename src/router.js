import { createRouter, createWebHistory } from "vue-router";
import InputView from "./components/InputView.vue";
import ResultView from "./components/ResultView.vue";

const routes = [
  { path: "/", component: InputView },
  { path: "/result/:result", name: "ResultView", component: ResultView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
