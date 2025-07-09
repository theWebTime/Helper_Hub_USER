import api from "./axios";

export function privacyPolicy(params = {}) {
    return api.get("privacy-policy-index", {
        params,
        meta: { toast: false, loader: true },
    });
}