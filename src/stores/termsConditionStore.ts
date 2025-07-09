import { defineStore } from "pinia";
import { termsCondition } from "../api/termsCondition";

export const useTermsConditionStore = defineStore("termsCondition", {
    state: () => ({
        data: [] as Array<{ id: number; title: string; description: string }>,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async loadTermsCondition() {
            this.loading = true;
            this.error = null;
            try {
                const res = await termsCondition({ itemsPerPage: 100 });
                this.data = res.data.data.data; // adjust if API shape changes
            } catch (e: any) {
                this.error = e?.message || "Failed to load Terms & Conditions";
            } finally {
                this.loading = false;
            }
        },
    },
});