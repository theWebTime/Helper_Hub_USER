import { defineStore } from "pinia";
import { privacyPolicy } from "../api/privacyPolicy";

export const usePrivacyPolicyStore = defineStore("privacyPolicy", {
    state: () => ({
        data: [] as Array<{ id: number; title: string; description: string }>,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async loadPrivacyPolicy() {
            this.loading = true;
            this.error = null;
            try {
                const res = await privacyPolicy({ itemsPerPage: 100 });
                this.data = res.data.data.data; // adjust if API shape changes
            } catch (e: any) {
                this.error = e?.message || "Failed to load Privacy Policy";
            } finally {
                this.loading = false;
            }
        },
    },
});