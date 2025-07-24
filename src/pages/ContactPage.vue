<template>
  <BreadCrumb2 pageName="Contact Us" />

  <section>
    <div class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
      <div class="grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
          <div class="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
            <PhChat weight="fill" />
          </div>
          <h4 class="heading-4 pt-6">Chat to support</h4>
          <p class="pb-6 text-sm font-medium text-n300">
            Speak to our friendly team.
          </p>
          <a :href="`mailto:${siteSettingStore.data?.support_email || ''}`" class="hover:underline">
            {{ siteSettingStore.data.support_email }}
          </a>
        </div>
        <div
          class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
          <div class="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
            <PhMapPin weight="fill" />
          </div>
          <h4 class="heading-4 pt-6">Visit us</h4>
          <p class="pb-6 text-sm font-medium text-n300">Visit our office.</p>
          {{ siteSettingStore.data?.address || '' }}
        </div>
        <div
          class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10">
          <div class="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300">
            <PhPhoneCall weight="fill" />
          </div>
          <h4 class="heading-4 pt-6">Contact Us</h4>
          <p class="pb-6 text-sm font-medium text-n300">
            Mon-Sat from 8am to 8pm.
          </p>
          <a :href="`tel:${siteSettingStore.data?.phone || ''}`" class="hover:underline">
            {{ siteSettingStore.data?.phone || '' }}
          </a>
        </div>
      </div>

      <div class="stp-15 grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex items-center justify-center self-stretch overflow-hidden rounded-3xl md:col-span-4">
          <img :src="contactImg" alt="" class="h-full rounded-3xl" />
        </div>
        <div class="col-span-12 rounded-3xl border border-n30 p-4 md:col-span-8 lg:p-15">
          <h3 class="heading-3 sbp-15 text-center">Get in touch</h3>
          <!-- Contact Us Form -->
          <form @submit.prevent="handleSubmit" class="grid grid-cols-12 gap-4 font-medium sm:gap-6">
            <div class="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
              <input v-model="form.name" type="text" class="outline-none placeholder:text-n100 w-full"
                placeholder="Name" name="user_name" required />
              <span v-if="validationErrors.name" class="text-xs text-red-500">{{ validationErrors.name[0] }}</span>
            </div>
            <div class="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
              <input v-model="form.phone" type="number" class="outline-none placeholder:text-n100 w-full"
                placeholder="Phone Number" name="phone" required />
              <span v-if="validationErrors.phone" class="text-xs text-red-500">{{ validationErrors.phone[0] }}</span>
            </div>
            <div class="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
              <input v-model="form.email" type="email" class="outline-none placeholder:text-n100 w-full"
                placeholder="Email" name="email" required />
              <span v-if="validationErrors.email" class="text-xs text-red-500">{{ validationErrors.email[0] }}</span>
            </div>
            <div class="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6">
              <textarea v-model="form.message" class="min-h-[100px] w-full outline-none placeholder:text-n100"
                placeholder="Message" name="message" required></textarea>
              <span v-if="validationErrors.message" class="text-xs text-red-500">{{ validationErrors.message[0]
              }}</span>
            </div>
            <div class="col-span-4">
              <button type="submit"
                class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
                :disabled="loading">
                <span class="relative z-10">
                  <span v-if="!loading">Submit</span>
                  <span v-else>Submitting...</span>
                </span>
              </button>
            </div>
            <div v-if="successMsg" class="col-span-12 text-green-600 text-sm pt-2">{{ successMsg }}</div>
            <div v-if="errorMsg" class="col-span-12 text-red-500 text-sm pt-2">{{ errorMsg }}</div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container px-2 sm:px-4 xl:px-15">
      <FaqSection />
    </div>
  </section>
  <section>
    <FooterOne />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PhChat, PhMapPin, PhPhoneCall } from "@phosphor-icons/vue";
import BreadCrumb2 from "../components/global/BreadCrumb2.vue";
import contactImg from "/images/contact_us.png";
import FaqSection from "../components/aboutUs/FaqSection.vue";
import FooterOne from "../components/global/footer/footerOne.vue";
import { useSiteSettingStore } from "../stores/siteSettingStore";
import { submitContactUs } from "../api/contact";

const siteSettingStore = useSiteSettingStore();

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
    const res = await submitContactUs(form.value);
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