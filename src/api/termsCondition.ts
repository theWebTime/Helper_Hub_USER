import api from "./axios";

export function termsCondition(params = {}) {
    return api.get("terms-condition-index", {
        params,
        meta: { toast: false, loader: true },
    });
}