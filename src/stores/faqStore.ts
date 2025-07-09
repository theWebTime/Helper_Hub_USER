import { defineStore } from "pinia";
import { fetchFaq } from "../api/faq";

export const useFaqStore = defineStore("faq", {
    state: () => ({
        data: [] as Array<{ id: number; question: string; answer: string }>,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async loadFaq() {
            this.loading = true;
            this.error = null;
            try {
                const res = await fetchFaq({ itemsPerPage: 100 }); // adjust as needed
                this.data = res.data.data.data; // adjust if your API response shape is different
            } catch (e: any) {
                this.error = e?.message || "Failed to load FAQ";
            } finally {
                this.loading = false;
            }
        },
    },
});