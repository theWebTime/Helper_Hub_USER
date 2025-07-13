import { defineStore } from "pinia";
import { service } from "../api/service";

export const useServiceStore = defineStore("service", {
    state: () => ({
        data: [] as Array<{ id: number; name: string }>,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async loadServices() { // <-- Use a descriptive name!
            this.loading = true;
            this.error = null;
            try {
                const res = await service({ itemsPerPage: 100 });
                this.data = res.data.data || []; // Fallback to empty array if undefined
            } catch (e: any) {
                this.error = e?.message || "Failed to load services";
            } finally {
                this.loading = false;
            }
        },
    },
});