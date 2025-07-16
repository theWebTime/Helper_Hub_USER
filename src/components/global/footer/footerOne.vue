<template>
  <footer class="bg-n900 text-white">
    <section class="stp-15 overflow-hidden">
      <div class="4xl:large-container max-4xl:mx-4">
        <!-- Top Section -->
        <div class="sbp-15 flex items-center justify-between border-b border-n500 max-xl:flex-col max-xl:gap-6">
          <div class="flex w-full items-center justify-start gap-4 max-xl:justify-center">
            <img :src="bigArrow" alt="" class="max-xxl:w-[80px] max-md:w-[60px]" />
            <p class="text-xl font-medium sm:text-3xl md:text-5xl 3xl:text-[72px]">
              Let’s work together
            </p>
          </div>

          <div class="flex items-center justify-between gap-6 max-sm:flex-col">
            <div class="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
              <p class="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10">
                Looking to book a Service?
              </p>
              <div class="flex items-center justify-center font-bold text-n900">
                <LinkButton link="/service" text="BOOK NOW" :is-yellow="true" />
              </div>
            </div>
            <div class="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
              <p class="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10">
                Have Any Questions?
              </p>
              <div class="flex items-center justify-center font-bold text-n900">
                <LinkButton link="/faq" text="CLICK HERE" :is-yellow="true" />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div
            class="flex items-center justify-between gap-6 py-10 text-base font-medium max-lg:flex-col sm:text-lg lg:py-20 xl:text-xl">
            <!-- Left Links -->
            <ul class="flex items-center justify-start gap-4 sm:gap-6 lg:gap-10">
              <li><router-link class="duration-500 hover:text-r300" to="/">Home</router-link></li>
              <li><router-link class="duration-500 hover:text-r300" to="/about-us">About Us</router-link></li>
              <li><router-link class="duration-500 hover:text-r300" to="/faq">FAQ</router-link></li>
            </ul>


            <!-- Logo -->
            <router-link to="/index" class="">
              <img :src="whiteLogo" alt="Helper Hub White Logo" class="max-w-[150px] max-sm:max-w-[150px]" />
            </router-link>

            <!-- Right Links -->
            <ul class="flex items-center justify-start gap-4 sm:gap-6 lg:gap-10">
              <li><router-link class="duration-500 hover:text-r300" to="/services">Services</router-link></li>
              <li><router-link class="duration-500 hover:text-r300" to="/privacy-policy">Privacy Policy</router-link>
              </li>
              <li><router-link class="duration-500 hover:text-r300" to="/contact">Contact Us</router-link></li>
            </ul>
          </div>

        </div>
        <!-- Contact + Social Section -->
        <div class="container">

          <div class="stp-15 flex items-center justify-between gap-6 max-md:flex-col max-[450px]:items-start">
            <div class="flex items-center justify-start gap-6 font-medium max-sm:items-start max-[450px]:flex-col">
              <p class="max-w-[200px] text-start lg:max-w-[250px]">
                {{ siteSettingStore.data?.address || '' }}
              </p>
              <div class="lg:pl-25">
                <p class="font-semibold">
                  <a :href="`tel:${siteSettingStore.data?.phone || ''}`" class="hover:underline">
                    {{ siteSettingStore.data?.phone || '' }}
                  </a>
                </p>
                <p>
                  <a :href="`mailto:${siteSettingStore.data?.email || ''}`" class="hover:underline">
                    {{ siteSettingStore.data?.email || '' }}
                  </a>
                </p>
              </div>
            </div>

            <div class="flex items-center justify-center gap-3 text-2xl">
              <a v-for="{ id, icon, link } in socialLinks.slice(0, 3)" :key="id" :href="link" target="_blank"
                rel="noopener noreferrer" class="group relative">
                <span
                  class="flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200">
                  <component :is="icon" />
                </span>

                <div class="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>
                <div class="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>
                <div class="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"></div>
                <div class="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"></div>
              </a>
            </div>
          </div>
        </div>
        <br />


        <!-- Huge Background Title -->
        <!-- <h1
          class="text-center text-[430px] font-bold leading-none max-4xl:text-[400px] max-3xl:text-[350px] max-xxl:text-[300px] max-xl:text-[230px] max-lg:text-[180px] max-md:text-[130px] max-sm:text-[70px]"
        >
          Helper Hub
        </h1> -->

        <!-- Middle Section: Stats + Newsletter -->
        <div class="border-y border-n500">
          <div class="flex items-center justify-between lg:container max-xl:py-8 max-lg:flex-col max-lg:gap-6">
            <!-- Left Stat -->
            <div>
              <div class="display-3 xl:display-2 text-center flex justify-center items-center">
                <count-up :end-val="1" :options="{ enableScrollSpy: true }" />000
              </div>
              <p class="max-w-[250px] text-center text-base font-medium xl:text-lg">
                Customers are satisfied with our work
              </p>
            </div>

            <!-- Center Stat -->
            <div class="border-n500 px-6 py-12 max-lg:w-full max-lg:border-y lg:border-x xl:p-20 xxl:p-30">
              <div class="display-3 xl:display-2 text-center flex justify-center items-center">
                <count-up :end-val="1" :options="{ enableScrollSpy: true }" />+
              </div>
              <p class="mx-auto max-w-[250px] text-center text-base font-medium xl:text-lg">
                Years of Reliable Service Delivery
              </p>
            </div>

            <!-- Right Newsletter -->
            <div class="flex flex-col items-start justify-start gap-5 sm:pl-4">
              <p class="text-lg font-medium">Subscribe to our newsletter</p>
              <div class="rounded-full border-2 border-white flex items-center overflow-hidden">
                <input type="email"
                  class="bg-transparent px-2 outline-none placeholder:text-white max-[400px]:w-[200px] min-[400px]:px-4 lg:px-8"
                  v-model="form.email" placeholder="Email" :disabled="loading" />
                <span v-if="validationErrors.email" class="text-xs text-red-500">{{ validationErrors.email[0] }}</span>
                <button
                  class="rounded-full border-2 border-white bg-y300 px-2 py-3 font-medium text-n900 sm:px-4 sm:py-4 xl:px-8"
                  @click="handleSubmit" :disabled="loading">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Navigation + Copyright -->
        <div class="container">
          <!-- Bottom Strip -->
          <div class="flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col">
            <div class="flex items-center justify-start gap-1">
              <p>Developed By</p>
              <a href="tel:+917862813861" class="text-g200 underline ml-2">The Web Time IT Solution</a>
            </div>
            <p>Copyright © {{ new Date().getFullYear() }} Helper Hub</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup lang="ts">
import { useSocialLinks } from "../../../data/data";
import LinkButton from "../../ui/LinkButton.vue";
import bigArrow from "/images/big_arrow.png";
import whiteLogo from "/images/Helper_hub_logo_r.png";
import { useSiteSettingStore } from "../../../stores/siteSettingStore";
import CountUp from "vue-countup-v3";
import { ref } from "vue";
import { submitNewsletter } from "../../../api/contact"; // Correct import

const siteSettingStore = useSiteSettingStore();
const socialLinks = useSocialLinks();

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
