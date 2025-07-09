import api from "./axios"

export function fetchFaq() {
    return api.get('faq-index', {
        meta: { toast: false, loader: true }
    })
}