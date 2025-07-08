<template>
  <section class="stp-30 sbp-30">
    <div class="container grid grid-cols-12 max-xl:gap-6">
      <div class="col-span-12 lg:col-span-7 xl:col-span-6">
        <div class="flex items-start justify-start gap-4 sm:gap-8">
          <div class="overflow-hidden rounded-2xl">
            <img :src="aboutImg1" alt="" />
          </div>
          <div
            class="flex flex-col items-center justify-center md:mt-16 xl:mt-4"
          >
            <div class="display-3 font-extrabold text-b300 flex">0 7+</div>
            <p class="text-lg font-medium sm:min-w-[200px] xxl:text-xl">
              Years Experience
            </p>
          </div>
        </div>
        <div
          class="-mt-24 flex items-end justify-end overflow-hidden min-[370px]:-mt-40 sm:-mt-72 md:-mt-80 lg:-mt-52 xl:-mt-64 xxl:-mt-80"
        >
          <img
            :src="aboutImg2"
            alt=""
            class="rounded-2xl max-sm:max-w-[250px] max-[480px]:max-w-[180px] max-[370px]:max-w-[130px]"
          />
        </div>
      </div>

      <div
        class="col-span-12 flex flex-col items-start justify-center lg:col-span-5 xl:col-start-8"
      >
        <h5 class="heading-5 text-r300">About Us</h5>
        <h2 class="heading-2 max-w-[500px] pt-4">
          {{siteSettingStore.data.about_us}}
        </h2>
        <p class="pb-4 pt-3 text-n300 xl:pb-8">
          Readers are distracted by readable content when viewing page layout.
          This phenomenon has long been recognized in the design and publishing
          industries.
        </p>
        <ul class="ml-4 flex list-disc flex-col gap-3 pb-6 xl:pb-10">
          <li>Readers are distracted by readable content when viewing</li>
          <li>Biodegradable chemicals are used</li>
          <li>Cleaning Tools will be used to remove deep stains</li>
          <li>Complete Sanitization and cleaning of bathroom</li>
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
import aboutImg1 from "/images/about_us_img_1.png";
import aboutImg2 from "/images/about_us_img_2.png";
import { useSiteSettingStore } from "../../stores/siteSettingStore";

const siteSettingStore = useSiteSettingStore();
</script>

<style scoped></style>
