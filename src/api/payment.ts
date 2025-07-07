import api from './axios';
const API_URL = import.meta.env.VITE_API_URL;

const withToast = () => ({
  meta: { toast: true, loader: true }
});

export function createRazorpayOrder(amount: number) {
  return api.post(`${API_URL}/razorpay/create-order`, { amount }, withToast());
}

export function verifyRazorpayPayment(payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) {
  return api.post(`${API_URL}/razorpay/verify-signature`, payload, withToast());
}
