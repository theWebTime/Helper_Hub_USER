import api from './axios'

// GET /user-booking-report/index
export function getMyBooking(params?: { page?: number; itemsPerPage?: number; search?: string }) {
    return api.get("user-booking-report", {
        meta: { toast: false, loader: true },
    });
}