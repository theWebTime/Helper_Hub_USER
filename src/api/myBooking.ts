import api from './axios'

// GET /user-booking-report/index
export function getMyBooking(params?: { page?: number; itemsPerPage?: number; search?: string }) {
    return api.get("user-booking-report/index", {
        meta: { toast: false, loader: true },
    });
}