import api from './axios'

const API_URL = import.meta.env.VITE_API_URL

const withToast = () => ({
    meta: { toast: true, loader: true }
})

// GET /user-address/index
export function getAddresses(params?: { page?: number; itemsPerPage?: number; search?: string }) {
    return api.get(`${API_URL}/user-address/index`, { ...withToast(), params })
}

// POST /user-address/store
export function createAddress(payload: {
    pin_code_id: number
    type: string
    address: string
    title?: string
    name?: string
    phone?: string
    landmark?: string
    is_default?: boolean
}) {
    return api.post(`${API_URL}/user-address/store`, payload, withToast())
}

// GET /user-address/show/{id}
export function getAddress(id: number) {
    return api.get(`${API_URL}/user-address/show/${id}`, withToast())
}

// POST /user-address/update/{id}
export function updateAddress(id: number, payload: {
    pin_code_id: number
    type: string
    address: string
    title?: string
    name?: string
    phone?: string
    landmark?: string
    is_default?: boolean
}) {
    return api.post(`${API_URL}/user-address/update/${id}`, payload, withToast())
}

// POST /user-address/delete/{id}
export function deleteAddress(id: number) {
    return api.post(`${API_URL}/user-address/delete/${id}`, {}, withToast())
}

// GET /user-address/pincode-list
export function getPincodeList() {
    return api.get(`${API_URL}/user-address/pincode-list`, withToast())
}