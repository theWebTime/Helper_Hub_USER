import api from "./axios";

export function pincode(params = {}) {
    return api.get("pincode-list", {
        params,
        meta: { toast: false, loader: true },
    });
}