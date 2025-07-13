<template>
  <section class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
      <h2 class="text-xl font-semibold text-center mb-4">Make a Payment</h2>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Amount (INR)</label>
        <input
          v-model.number="amount"
          type="number"
          class="w-full px-4 py-2 border border-gray-300 rounded-md"
          min="1"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Address</label>
        <select v-model="user_address_id" class="w-full px-4 py-2 border border-gray-300 rounded-md">
          <option v-for="address in addresses" :key="address.id" :value="address.id">
            {{ address.label }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Service Type</label>
        <select v-model.number="service_id" class="w-full px-4 py-2 border border-gray-300 rounded-md">
          <option :value="1">One-time</option>
          <option :value="2">Monthly</option>
        </select>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1">Schedule Start</label>
        <input
          v-model="schedule_start"
          type="datetime-local"
          class="w-full px-4 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div class="mb-4">
        <label>
          <input type="checkbox" v-model="is_dog" /> Dog is present?
        </label>
      </div>
      <div class="mb-4">
        <input
          v-model="special_instructions"
          type="text"
          class="w-full px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Special instructions (optional)"
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
import { ref, onMounted } from 'vue';
import { createRazorpayOrder, verifyRazorpayPayment } from '../api/payment';
import { useAuth } from '../store/auth'; // If you have an auth composable/store

const amount = ref(0);
const loading = ref(false);
const error = ref('');
const successMsg = ref('');
const user_id = ref(null);
const user_address_id = ref('');
const addresses = ref([
  { id: 1, label: "Home" },
  { id: 2, label: "Office" },
]); // Fetch from backend in production

const service_id = ref(1);
const subservice_id = ref(1); // static or fetch as needed
const subservice_type_detail_id = ref(1); // static or fetch as needed
const service_price = ref(100);
const platform_fee = ref(0);
const total_amount = ref(100);
const schedule_start = ref('');
const schedule_end = ref('');
const is_dog = ref(false);
const special_instructions = ref('');

onMounted(() => {
  // If using a store:
  // const { user } = useAuth();
  // user_id.value = user.id;
  // addresses.value = await fetchUserAddresses();
});

const startPayment = async () => {
  error.value = '';
  successMsg.value = '';
  loading.value = true;

  try {
    let sched_end = null;
    if (service_id.value == 2 && schedule_start.value) {
      const d = new Date(schedule_start.value);
      d.setMonth(d.getMonth() + 1);
      sched_end = d.toISOString().slice(0, 19).replace("T", " ");
    }

    const payload = {
      amount: amount.value,
      service_id: service_id.value,
      subservice_id: subservice_id.value,
      subservice_type_detail_id: subservice_type_detail_id.value,
      user_address_id: user_address_id.value,
      service_price: service_price.value,
      platform_fee: platform_fee.value,
      total_amount: total_amount.value,
      schedule_start: schedule_start.value.replace("T", " "),
      schedule_end: sched_end,
      is_dog: is_dog.value,
      special_instructions: special_instructions.value,
    };

    const res = await createRazorpayOrder(payload);

    const orderData = res.data?.data;
    if (!orderData?.order) throw new Error("Order not created");

    const key = orderData.razorpay_key_id || import.meta.env.VITE_RAZORPAY_KEY_ID;

    const options = {
      key,
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: "Helper Hub",
      description: "Payment for services",
      image: "/images/logo.png",
      order_id: orderData.order.id,
      handler: async function (response: any) {
        try {
          const verifyRes = await verifyRazorpayPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            payment_method: response.method || "razorpay",
          });

          if (verifyRes.data?.success) {
            successMsg.value = "Payment successful and booking confirmed!";
          } else {
            error.value = verifyRes.data?.message || "Verification failed!";
          }
        } catch (e: any) {
          error.value = e.response?.data?.message || "Payment verification error";
        }
      },
      prefill: {
        name: "User", // Optionally fill user's name
        contact: "",  // User's mobile
        email: ""     // User's email
      },
      theme: {
        color: "#3399cc"
      },
      modal: {
        ondismiss: function () {
          error.value = "Payment popup closed!";
        }
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