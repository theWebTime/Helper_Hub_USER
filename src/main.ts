// src/main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { router } from "./route";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import Toast, { createToastInterface } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

/* ──  Toast plugin (must be installed before we create the global toast) ── */
app.use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  hideProgressBar: false,
});

/* A standalone toast instance we can use anywhere (including route guards) */
const toast = createToastInterface();

/* ──  Router guard  ── */
router.beforeEach((to, from, next) => {
  // Dynamic title
  document.title = typeof to.meta?.title === "string" ? to.meta.title : "Default Title";
  window.scrollTo(0, 0);

  // Auth protection
  if (to.meta?.requiresAuth && !localStorage.getItem("token")) {
    toast.error("Please sign in to continue.");        // 🔔 show toast
    return next("/sign-in");                           // 🚀 redirect
  }

  next();
});

/* plugins */
app.use(MotionPlugin);
app.use(router);
app.use(createPinia());

app.mount("#app");
