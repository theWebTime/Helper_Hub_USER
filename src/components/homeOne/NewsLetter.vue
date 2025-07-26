<template>
  <section class="stp-30 sbp-30 relative overflow-hidden bg-n900">
    <div
      class="jumping1 absolute -right-40 top-96 size-[300px] rounded-full bg-n900 sm:top-48 sm:size-[400px] lg:-right-10 lg:top-20 xl:size-[640px]">
    </div>
    <div
      class="jumping2 absolute -left-64 bottom-96 z-10 size-[350px] rounded-full bg-n900 sm:bottom-64 sm:size-[400px] lg:-left-40 lg:bottom-20 xl:size-[640px]">
    </div>
    <div
      class="slideRight absolute -left-64 top-96 size-[350px] rounded-full bg-n900 sm:top-64 sm:size-[500px] lg:-left-40 lg:top-20 xl:size-[876px]">
    </div>
    <div
      class="slideLeft absolute left-1/4 top-[400px] size-[300px] rounded-full bg-n900 max-sm:hidden sm:size-[400px] lg:top-80 xl:top-60 xl:size-[754px]">
    </div>

    <div class="container relative z-20 grid grid-cols-12 text-white max-lg:gap-6 max-xxl:overflow-hidden">
      <div class="col-span-12 md:col-span-5 flex flex-col items-start justify-center">
        <div>
          <h5 class="heading-5">Newsletter</h5>
          <h2 class="heading-2 pt-4">Don't Miss a Beat with Our Newsletter</h2>
        </div>
      </div>
      <div class="col-span-12 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8">
        <div>
          <h5 class="heading-5">Sign up to stay up to date</h5>
          <div class="flex items-start justify-start gap-3 pt-6 max-[450px]:flex-col md:items-center">
            <div>
              <input v-model="form.email" type="email" placeholder="Email"
                class="rounded-full bg-white px-8 py-3 text-n900 outline-none placeholder:text-n700"
                :disabled="loading" />
              <span v-if="validationErrors.email" class="text-xs text-red-500">{{ validationErrors.email[0] }}</span>

            </div>
            <div class="text-n900">
              <button @click="handleSubmit" class="group relative flex items-center justify-start pr-12 font-semibold"
                :disabled="loading">
                <span class="rounded-full bg-y300 px-6 py-3 duration-500 group-hover:translate-x-12">
                  <span v-if="!loading">Send</span>
                  <span v-else>Sending...</span>
                </span>
                <span
                  class="absolute right-0 top-0 translate-x-0 rounded-full bg-y300 p-[14px] text-xl !leading-none duration-500 group-hover:right-[90px] group-hover:rotate-45">
                  <PhArrowUpRight weight="bold" />
                </span>
              </button>
            </div>
          </div>
          <div v-if="successMsg" class="text-green-500 pt-3 font-medium">{{ successMsg }}</div>
          <div v-if="errorMsg" class="text-red-500 pt-3 font-medium">{{ errorMsg }}</div>
          <div class="stp-15 flex flex-wrap items-center justify-start gap-6">
            <div class="flex items-center justify-start">
              <div class="overflow-hidden rounded-full bg-n900 p-1">
                <img :src="ctaImg1" alt="" class="rounded-full" />
              </div>
              <div class="-ml-5 overflow-hidden rounded-full bg-n900 p-1">
                <img :src="ctaImg2" alt="" class="rounded-full" />
              </div>
              <div class="-ml-5 overflow-hidden rounded-full bg-n900 p-1 text-n900">
                <p
                  class="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-lg font-semibold !leading-none">
                  +500
                </p>
              </div>
            </div>
            <div>
              <h5 class="heading-5">More than 500 active users!</h5>
              <router-link to="/sign-up" class="flex items-center justify-start gap-3 pt-3 font-medium">
                Join them now
                <PhArrowRight />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PhArrowRight, PhArrowUpRight } from "@phosphor-icons/vue";
import ctaImg1 from "/images/cta_img1.png";
import ctaImg2 from "/images/cta_img2.png";
import { submitNewsletter } from "../../api/contact"; // Correct import

const form = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const loading = ref(false);
const successMsg = ref("");
const errorMsg = ref("");
const validationErrors = ref<Record<string, string[]>>({});

const handleSubmit = async () => {
  loading.value = true;
  successMsg.value = "";
  errorMsg.value = "";
  validationErrors.value = {};
  try {
    const res = await submitNewsletter(form.value);
    if (res.data && res.data.success) {
      successMsg.value = "Your message has been sent successfully!";
      form.value = { name: "", phone: "", email: "", message: "" };
    } else {
      errorMsg.value = res.data?.message || "Failed to submit message.";
      if (res.data?.data) validationErrors.value = res.data.data;
    }
  } catch (err: any) {
    errorMsg.value = err.response?.data?.message || "Failed to submit message.";
    if (err.response?.data?.data) validationErrors.value = err.response.data.data;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>