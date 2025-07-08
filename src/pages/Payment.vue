<template>
    <section class="min-h-screen flex items-center justify-center">
      <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
        <h2 class="text-xl font-semibold text-center mb-4">Make a Payment</h2>
  
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Enter Amount (INR)</label>
          <input
            v-model.number="amount"
            type="number"
            class="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Enter amount"
            min="1"
            required
          />
        </div>
  
        <div v-if="error" class="text-red-500 text-sm mb-2">{{ error }}</div>
        <div v-if="successMsg" class="text-green-600 text-sm mb-2">{{ successMsg }}</div>
  
        <button
          @click="startPayment"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          :disabled="loading || amount <= 0"
        >
          {{ loading ? "Processing..." : "Pay Now" }}
        </button>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { createRazorpayOrder, verifyRazorpayPayment } from '../api/payment';
  
  const amount = ref(0);
  const loading = ref(false);
  const error = ref('');
  const successMsg = ref('');
  
  const startPayment = async () => {
    error.value = '';
    successMsg.value = '';
    loading.value = true;
  
    try {
      // Step 1: Create Razorpay order
      const res = await createRazorpayOrder(amount.value);
  
      const order = res.data?.data;
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Helper Hub",
        description: "Payment for services",
        image: "/images/logo.png",
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verifyRes = await verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });
  
            if (verifyRes.data?.success) {
              successMsg.value = "Payment successful and verified!";
            } else {
              error.value = verifyRes.data?.message || "Verification failed!";
            }
          } catch (e: any) {
            error.value = e.response?.data?.message || "Payment verification error";
          }
        },
        prefill: {
          name: "User",
          contact: "",
          email: ""
        },
        theme: {
          color: "#3399cc"
        }
      };
  
      const razor = new (window as any).Razorpay(options);
      razor.open();
  
    } catch (err: any) {
      error.value = err.response?.data?.message || "Failed to initiate payment.";
    } finally {
      loading.value = false;
    }
  };
  </script>
  