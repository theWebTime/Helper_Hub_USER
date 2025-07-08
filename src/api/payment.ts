import api from "./axios";

export function createRazorpayOrder(amount: number) {
  return api.post(
    "razorpay/create-order",
    { amount },
    {
      meta: { toast: true, loader: true },
    }
  );
}

export function verifyRazorpayPayment(payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}) {
  return api.post("razorpay/verify-signature", payload, {
    meta: { toast: true, loader: true },
  });
}
