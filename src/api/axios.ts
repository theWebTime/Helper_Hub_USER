import axios from "axios";
import { useToast } from "vue-toastification";
import { useLoadingStore } from "../stores/loadingStore";

let toastInstance: any;

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // ✅ Start loader if meta.loader is true
    if (config?.meta?.loader) {
      const loading = useLoadingStore();
      loading.start();
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    // ✅ Stop loader if needed
    if (response?.config?.meta?.loader) {
      const loading = useLoadingStore();
      loading.stop();
    }

    const shouldToast = response?.config?.meta?.toast;
    const { success, message } = response.data || {};

    if (shouldToast) {
      toastInstance = toastInstance || useToast();

      if (success && message) {
        toastInstance.success(message);
      } else if (!success && message) {
        toastInstance.error(message);
      }
    }

    return response;
  },
  (error) => {
    // ✅ Stop loader if needed
    if (error?.config?.meta?.loader) {
      const loading = useLoadingStore();
      loading.stop();
    }

    try {
      const shouldToast = error?.config?.meta?.toast;

      if (shouldToast) {
        toastInstance = toastInstance || useToast();
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Something went wrong. Please try again.";

        toastInstance.error(message);
      }
    } catch (err) {
      console.error("Toast error handler failed:", err);
    }

    return Promise.reject(error);
  }
);

export default api;
