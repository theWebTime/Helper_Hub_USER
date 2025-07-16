import api from './axios'


export function randomSubService(params = {}) {
    return api.get("random-sub-service-list", {
        params,
        meta: { toast: false, loader: true },
    });
}