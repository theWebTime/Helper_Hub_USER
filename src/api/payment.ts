import api from "./axios";

export function createRazorpayOrder(payload: any) {
  return api.post("razorpay/create-order", payload, {
    meta: { toast: false, loader: true },
  });
}

export function verifyRazorpayPayment(payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  payment_method?: string;
}) {
  return api.post("razorpay/verify-signature", payload, {
    meta: { toast: true, loader: true },
  });
}