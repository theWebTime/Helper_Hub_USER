<template>
  <div
    class="rtl:mr-10 ltr:ml-10 flex items-start justify-start gap-10 max-lg:hidden 3xl:ml-40 3xl:gap-20"
  >
    <Swiper
      :modules="[FreeMode, Autoplay]"
      :loop="true"
      :speed="10000"
      :direction="'vertical'"
      :slides-per-view="'auto'"
      :initialSlide="10"
      :autoplay="{
        delay: 1,
      }"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        '700': {
          slidesPerView: 2.2,
        },
      }"
      class="smooth !h-[100vh] max-xl:hidden"
    >
      <swiper-slide
        v-for="{ id, review, img, name } in loginReviewData"
        :key="id"
        class="swiper-slide relative mt-16 max-w-[320px] bg-white px-8 pb-8"
      >
        <div class="-mt-4">
          <span class="text-4xl !leading-none text-v200">
            <PhQuotes weight="fill" />
          </span>
        </div>
        <p class="stp-15 pb-8 text-n300">{{ review }}</p>
        <div class="flex items-center justify-start gap-3">
          <img :src="img" class="size-12 rounded-full" alt="" />
          <p class="font-semibold">{{ name }}</p>
          <div class="pl-2">
            <img :src="icon" alt="" />
          </div>
        </div>
      </swiper-slide>
    </Swiper>

    <Swiper
      :modules="[FreeMode, Autoplay]"
      :loop="true"
      :speed="10000"
      :direction="'vertical'"
      :slides-per-view="'auto'"
      :initialSlide="10"
      :autoplay="{
        delay: 1,
        reverseDirection: true,
      }"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        '700': {
          slidesPerView: 2.2,
        },
      }"
      class="smooth h-[100vh]"
    >
      <swiper-slide
        v-for="{ id, review, img, name } in loginReviewData"
        :key="id"
        class="swiper-slide relative mt-16 max-w-[320px] bg-white px-8 pb-8"
      >
        <div class="-mt-4">
          <span class="text-4xl !leading-none text-v200">
            <PhQuotes weight="fill" />
          </span>
        </div>
        <p class="stp-15 pb-8 text-n300">{{ review }}</p>
        <div class="flex items-center justify-start gap-3">
          <img :src="img" class="size-12 rounded-full" alt="" />
          <p class="font-semibold">{{ name }}</p>
          <div class="pl-2">
            <img :src="icon" alt="" />
          </div>
        </div>
      </swiper-slide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";
import { loginReviewData } from "../../data/data";
import icon from "/images/login_slider_icon.png";
import { PhQuotes } from "@phosphor-icons/vue";
</script>

<style scoped></style>
