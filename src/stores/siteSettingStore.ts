import { defineStore } from "pinia";
import { fetchSiteSetting } from "../api/siteSetting";

export const useSiteSettingStore = defineStore("siteSetting", {
  state: () => ({
    data: null as any,
    loaded: false,
  }),
  actions: {
    async loadSiteSetting() {
      try {
        const res = await fetchSiteSetting();
        this.data = res.data.data
        this.loaded = true;
      } catch (e) {
        this.data = null;
        this.loaded = false;
      }
    },
  },
});