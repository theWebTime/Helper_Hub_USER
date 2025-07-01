<template>
  <section class="pt-[100px]">
    <div class="relative z-10 h-[650px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      <div class="absolute inset-0 z-20 bg-n900/80"></div>
      <swiper
        :modules="[FreeMode, Autoplay]"
        :centeredSlides="true"
        :loop="true"
        :direction="'vertical'"
        :slidesPerView="4"
        :speed="10000"
        :autoplay="{
          delay: 1,
        }"
        :breakpoints="{
          '0': {
            slidesPerView: 13,
            spaceBetween: 10,
          },
          '350': {
            slidesPerView: 11,
            spaceBetween: 10,
          },

          '400': {
            slidesPerView: 9,
            spaceBetween: 10,
          },
          '500': {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          '620': {
            slidesPerView: 7,
            spaceBetween: 10,
          },

          '880': {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          '1150': {
            slidesPerView: 5,
            spaceBetween: 24,
          },
          '1500': {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }"
        class="smooth !absolute !container inset-0 w-fit mx-auto"
      >
        <swiper-slide
          v-for="(item, idx) in sliderImages"
          class="swiper-slide"
          :key="idx"
        >
          <img :src="item" alt="" />
        </swiper-slide>
      </swiper>

      <div
        class="relative z-30 mx-auto flex h-full max-w-[950px] flex-col items-center justify-center text-center text-white max-xxl:overflow-hidden"
      >
        <h5 class="heading-5 pb-3 text-center">Your Solution Hub</h5>

        <h1 class="display-2 pb-6 font-extrabold">
          Find the Right <br />
          <span class="text-y300">Talent</span> for Any Task
        </h1>

        <p class="w-[95%] pb-10 text-xl sm:text-2xl">
          Access assistance from a vast network of reliable local experts,
          spanning home repairs to beauty services.
        </p>

        <div class="w-[95%] text-n900 md:w-[650px] lg:w-[800px] xl:w-[950px]">
          <SearchBox />
        </div>

        <ul
          class="flex flex-wrap items-center justify-start gap-2 pl-2 pt-8 font-medium text-n900 max-sm:text-sm sm:gap-3"
        >
          <li class="heading-5 text-white">Popular:</li>
          <li class="rounded-lg bg-b50 px-2 py-2 sm:px-4">Handyman</li>
          <li class="rounded-lg bg-bg2 px-2 py-2 sm:px-4">Babysitting</li>
          <li class="rounded-lg bg-eb50 px-2 py-2 sm:px-4">Photography</li>
          <li class="rounded-lg bg-bg1 px-2 py-2 sm:px-4">Renovation</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import Swiper styles
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";

import sliderImg1 from "/images/home_four_hero1.png";
import sliderImg2 from "/images/home_four_hero2.png";
import sliderImg3 from "/images/home_four_hero3.png";
import sliderImg4 from "/images/home_four_hero4.png";
import SearchBox from "../ui/SearchBox.vue";

const sliderImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
];
</script>

<style scoped></style>
