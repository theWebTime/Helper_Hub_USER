import { defineStore } from "pinia";
import { randomSubService } from "../api/service";

export const useRandomSubServiceStore = defineStore("randomSubService", {
    state: () => ({
        data: [] as Array<{ id: number; name: string; image: string }>, // <-- Add image here
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async loadRandomSubServices() {
            this.loading = true;
            this.error = null;
            try {
                const res = await randomSubService();
                this.data = res.data.data || [];
            } catch (e: any) {
                this.error = e?.message || "Failed to load sub services";
            } finally {
                this.loading = false;
            }
        },
    },
});