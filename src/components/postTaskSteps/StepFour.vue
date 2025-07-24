<template>
  <div class="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6 space-y-6 border">
    <h2 class="text-2xl font-bold text-n800">Booking Summary</h2>

    <!-- Selected Details -->
    <div class="space-y-3">
      <div v-for="type in subservice.types" :key="type.slug"
        class="flex justify-between text-sm text-n700 border-b pb-2">
        <span class="font-medium">{{ type.name }}</span>
        <span>{{ getDetailLabel(type.slug) }} – ₹{{
          getDetailPrice(type.slug)
        }}</span>
      </div>
    </div>

    <!-- Platform Fee -->
    <div v-if="platformFee > 0" class="flex justify-between text-sm text-n700 border-b pb-2">
      <span>Platform Fee</span>
      <span>₹{{ platformFee.toFixed(2) }}</span>
    </div>

    <!-- Total -->
    <div class="flex justify-between text-lg font-semibold text-n800 pt-2">
      <span>Total</span>
      <span>₹{{ (totalAmount + platformFee).toFixed(2) }}</span>
    </div>

    <!-- Error / Success -->
    <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>
    <div v-if="successMsg" class="text-green-600 text-sm">{{ successMsg }}</div>

    <!-- Action Buttons -->
    <div class="pt-4">
      <button @click="startPayment"
        class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold" :disabled="loading">
        {{ loading ? "Processing..." : "Pay" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useSiteSettingStore } from "../../stores/siteSettingStore";
import { createRazorpayOrder, verifyRazorpayPayment } from "../../api/payment";

// Access platform fee via Pinia
const siteSettingStore = useSiteSettingStore();
console.log("siteSettingStore", siteSettingStore.data);
const platform_fee_value = siteSettingStore.data?.platform_fee_value;

const props = defineProps<{
  formData: {
    step1: any;
    step2: Record<string, number>;
    step3: number | null;
  };
  subservice: {
    id: number;
    service_id: number;
    types: {
      slug: string;
      name: string;
      details: {
        id: number;
        label: string;
        price: number;
      }[];
    }[];
  };
}>();

const loading = ref(false);
const error = ref("");
const successMsg = ref("");

// Helpers
function getDetail(slug: string) {
  const type = props.subservice.types.find((t) => t.slug === slug);
  const id = props.formData.step2[slug];
  return type?.details.find((d) => d.id === id);
}
function getDetailLabel(slug: string) {
  return getDetail(slug)?.label ?? "";
}
function getDetailPrice(slug: string) {
  const detail = getDetail(slug);
  return detail ? Number(detail.price) : 0;
}

const totalAmount = computed(() => {
  return Object.keys(props.formData.step2).reduce((sum, slug) => {
    return sum + getDetailPrice(slug);
  }, 0);
});

const platformFee = computed(() => {
  return platform_fee_value ? Number(platform_fee_value) : 0;
});

async function startPayment() {
  error.value = "";
  successMsg.value = "";
  loading.value = true;

  try {
    const payload = {
      service_id: props.subservice.service_id,
      subservice_id: props.subservice.id,
      subservice_type_detail_ids: Object.entries(props.formData.step2)
        .filter(([key, value]) => typeof value === "number")
        .map(([_, value]) => value),
      schedule_date:
        props.formData.step1.date_from || props.formData.step1.date,
      schedule_time: props.formData.step1.time,
      user_address_id: props.formData.step3,
      is_dog: props.formData.step2?.is_dog ?? false,
      special_instructions: props.formData.step2?.special_instruction ?? "",
      notes: [],
    };


    const res = await createRazorpayOrder(payload);
    const orderData = res.data?.data;

    if (!orderData?.order) throw new Error("Order not created");

    const options = {
      key: orderData.razorpay_key_id || import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: "Helper Hub",
      description: "Payment for services",
      image: "/images/hh_round_header.png",
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
          error.value =
            e.response?.data?.message || "Payment verification error";
        }
      },
      prefill: {
        name: "User",
        email: "",
        contact: "",
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          error.value = "Payment popup closed!";
        },
      },
    };

    const razor = new (window as any).Razorpay(options);
    razor.open();
  } catch (err: any) {
    error.value = err.response?.data?.message || "Failed to initiate payment.";
  } finally {
    loading.value = false;
  }
}
</script>
