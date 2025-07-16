<template>
  <section class="stp-30 sbp-30">
    <div class="container grid grid-cols-12 max-xl:gap-6">
      <div class="col-span-12 lg:col-span-7 xl:col-span-6">
        <div class="flex flex-col gap-6 md:flex-row md:gap-10 items-center">
          <!-- First Image + Experience Label -->
          <div class="flex flex-col items-center gap-4">
            <div class="overflow-hidden rounded-2xl shadow-lg">
              <img :src="aboutImg2" alt="" class="w-[180px] h-[180px] object-cover md:w-[416px] md:h-[525px]" />
            </div>
            <div class="flex flex-col items-center mt-2">
              <div class="display-3 font-extrabold text-b300 flex">1+</div>
              <p class="text-lg font-medium sm:min-w-[200px] xxl:text-xl text-center">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12 flex flex-col items-start justify-center lg:col-span-5 xl:col-start-8">
        <h5 class="heading-5 text-r300">About Us</h5>
        <h2 class="heading-2 max-w-[500px] pt-4">
          {{ siteSettingStore.data.about_us }}
        </h2>
        <p class="pb-4 pt-3 text-n300 xl:pb-8">
          At Helper Hub, we connect you with trusted, trained domestic helpers for everyday tasks — making life simpler,
          safer, and more efficient.
        </p>
        <ul class="ml-4 flex list-disc flex-col gap-3 pb-6 xl:pb-10">
          <li>👩‍🍳 Verified & Trained Staff — Every helper goes through a strict screening and training process.</li>
          <li>🕒 Flexible Booking Options — Book services as per your schedule, whether one-time or recurring.</li>
          <li>💳 Transparent Pricing — No hidden fees. Know your cost upfront with fixed-price services.</li>
          <li>🛡️ Secure & Insured Services — Enjoy peace of mind with safety-first policies and insurance coverage.
          </li>
        </ul>

        <div class="text-sm text-white">
          <LinkButton link="/contact" text="Know More About" :is-blue="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LinkButton from "../ui/LinkButton.vue";
import aboutImg1 from "/images/about_1.jpg";
import aboutImg2 from "/images/about_2.jpg";
import { useSiteSettingStore } from "../../stores/siteSettingStore";

const siteSettingStore = useSiteSettingStore();
</script>

<style scoped></style>
