// src/main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import { router } from "./route";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

// Page title scroll
router.beforeEach((to, from, next) => {
  // Set title
  if (to.meta && typeof to.meta.title === "string") {
    document.title = to.meta.title;
  } else {
    document.title = "Default Title";
  }

  // Scroll top
  window.scrollTo(0, 0);

  // 🔐 Route protection
  if (to.meta.requiresAuth && !localStorage.getItem("token")) {
    // Not logged in → Redirect to Sign In
    return next("/sign-in");
  }

  return next();
});

app.use(MotionPlugin);
app.use(router);
app.use(createPinia());

app.use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  hideProgressBar: false,
});

app.mount("#app");
