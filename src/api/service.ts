import api from "./axios";

export function service(params = {}) {
    return api.get("service-list", {
        params,
        meta: { toast: false, loader: true },
    });
}

export function randomSubService(params = {}) {
    return api.get("random-sub-service-list", {
        params,
        meta: { toast: false, loader: true },
    });
}