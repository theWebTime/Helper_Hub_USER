<template>
  <section class="relative bg-r50/30">
    <img :src="shape" alt="" class="absolute bottom-0 right-0 max-sm:hidden" />
    <div
      class="4xl:large-container sbp-30 relative overflow-hidden pt-[180px] max-4xl:container md:pt-[225px]"
    >
      <div
        class="flex items-start justify-between max-md:flex-col max-md:gap-12 xxl:items-center"
      >
        <div class="w-full md:w-[45%] lg:w-[40%]">
          <div class="max-xl:overflow-hidden">
            <h5 class="heading-5">Your Solution Hub</h5>

            <h1 class="display-3 pt-3 !font-extrabold">
              Find the Right <span class="text-b300">Talent</span> for Any Task
            </h1>

            <p class="sbp-15 pt-6 text-lg text-n300">
              Access assistance from a vast network of reliable local experts,
              spanning home repairs to beauty services.
            </p>

            <div
              class="relative z-20 w-full rounded-3xl bg-white text-start md:w-[650px] lg:w-[800px] xl:w-[963px]"
            >
              <SearchBox />
            </div>

            <ul
              class="flex items-center justify-start gap-2 pt-8 font-medium max-md:flex-wrap max-sm:text-sm sm:gap-3"
            >
              <li class="heading-5">Popular:</li>
              <li class="rounded-lg bg-b50 px-2 py-2 sm:px-4">Handyman</li>
              <li class="rounded-lg bg-bg2 px-2 py-2 sm:px-4">Babysitting</li>
              <li class="rounded-lg bg-eb50 px-2 py-2 sm:px-4">Photography</li>
              <li class="rounded-lg bg-bg1 px-2 py-2 sm:px-4">Renovation</li>
            </ul>

            <div class="stp-15 flex items-center justify-start gap-6">
              <p class="display-4 font-[800] text-n900">4.7</p>
              <div class="">
                <p class="font-medium text-n900">Based on 10,000+ review on</p>
                <div class="text-xl text-y600 flex">
                  <PhStar weight="fill" />
                  <PhStar weight="fill" />
                  <PhStar weight="fill" />
                  <PhStar weight="fill" />
                  <PhStarHalf weight="fill" />
                </div>
              </div>
            </div>

            <div
              class="flex items-center justify-start gap-4 pt-6 max-sm:flex-wrap"
            >
              <img :src="brandLogo1" alt="" />
              <img :src="brandLogo2" alt="" />
              <img :src="brandLogo3" alt="" />
              <img :src="brandLogo4" alt="" />
            </div>
          </div>
        </div>
        <div class="h-full w-full md:w-[50%]">
          <img :src="heroImg" alt="" class="self-stretch" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhStar, PhStarHalf } from "@phosphor-icons/vue";
import brandLogo1 from "/images/brand_logo_1.png";
import brandLogo2 from "/images/brand_logo_2.png";
import brandLogo3 from "/images/brand_logo_3.png";
import brandLogo4 from "/images/brand_logo_4.png";
import shape from "/images/home3_hero_shape.png";
import heroImg from "/images/home_three_hero_img.png";
import SearchBox from "../ui/SearchBox.vue";
</script>

<style scoped></style>
