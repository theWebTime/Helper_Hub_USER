import api from "./axios"

export function fetchSiteSetting() {
    return api.get('site-setting-show', {
        meta: { toast: false, loader: true }
    })
}