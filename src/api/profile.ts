import api from "./axios"

const API_URL = import.meta.env.VITE_API_URL

const withToast = () => ({
    meta: { toast: true, loader: true }
})

// GET /profile
export function getProfile() {
    return api.get(`${API_URL}/profile`, withToast())
}

// PUT /profile/update
export function updateProfile(payload: {
    name: string
    email: string
    mobile: string
}) {
    return api.put(`${API_URL}/profile/update`, payload, withToast())
}