import { defineStore } from "pinia";
import { pincode } from "../api/pincode";

export const usePincodeStore = defineStore("pincode", {
    state: () => ({
        data: [] as Array<{ id: number; pin_code: string }>,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async loadPincodes() { // <-- Use a descriptive name!
            this.loading = true;
            this.error = null;
            try {
                const res = await pincode({ itemsPerPage: 100 });
                this.data = res.data.data || []; // Fallback to empty array if undefined
            } catch (e: any) {
                this.error = e?.message || "Failed to load pincodes";
            } finally {
                this.loading = false;
            }
        },
    },
});