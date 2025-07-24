import api from './axios'

// GET /user-address/index
export function getAddresses(params?: { page?: number; itemsPerPage?: number; search?: string }) {
    return api.get("user-address/index", {
        meta: { toast: false, loader: true },
    });
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
    return api.post("user-address/store", payload, {
        meta: { toast: true, loader: true },
    });
}

// GET /user-address/show/{id}
export function getAddress(id: number) {
    return api.get(`user-address/show/${id}`, {
        meta: { toast: true, loader: true },
    });
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
    return api.post(`user-address/update/${id}`, payload, {
        meta: { toast: true, loader: true },
    });
}

// POST /user-address/delete/{id}
export function deleteAddress(id: number) {
    return api.post(`user-address/delete/${id}`, {}, {
        meta: { toast: true, loader: true },
    });
}

// GET /user-address/pincode-list
export function getPincodeList() {
    return api.get("user-address/pincode-list", {
        meta: { toast: false, loader: true },
    });
}