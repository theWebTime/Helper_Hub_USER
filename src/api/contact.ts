import api from './axios'

// GET /contact-us-store
export function submitContactUs(payload: {
    name?: string
    phone?: string
    email?: string
    message?: string
}) {
    return api.get("contact-us-store", {
        params: payload,
        meta: { toast: true, loader: true },
    });
}

// GET /newsletter-store
export function submitNewsletter(payload: {
    email: string
}) {
    return api.get("contact-us-store", {
        params: payload,
        meta: { toast: true, loader: true },
    });
}