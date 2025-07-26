<template>
  <section class="pt-[100px]">
    <div class="relative z-10 h-[650px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      <div class="absolute inset-0 z-20 bg-n900/80"></div>
      <swiper :modules="[FreeMode, Autoplay]" :centeredSlides="true" :loop="true" :direction="'vertical'"
        :slidesPerView="4" :speed="10000" :autoplay="{
          delay: 1,
        }" :breakpoints="{
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
        }" class="smooth !absolute !container inset-0 w-fit mx-auto">
        <swiper-slide v-for="(item, idx) in sliderImages" class="swiper-slide" :key="idx">
          <img :src="item" alt="" />
        </swiper-slide>
      </swiper>

      <div
        class="relative z-30 mx-auto flex h-full max-w-[950px] flex-col items-center justify-center text-center text-white max-xxl:overflow-hidden">
        <h5 class="heading-5 pb-3 text-center">Reliable Help, Right When You Need It</h5>

        <h2 class="display-2 pb-6 font-extrabold">
          Your Everyday <br />
          <span class="text-y300">Task Partner</span>
        </h2>

        <p class="w-[95%] pb-10 text-xl sm:text-2xl">
          From cleaning and cooking to kitchen help and home support — Helper Hub connects you with verified experts for
          hassle-free service at your doorstep.
        </p>

        <div class="w-[95%] text-n900 md:w-[650px] lg:w-[800px] xl:w-[950px]">
          <SearchBox />
        </div>

        <ul
          class="flex flex-wrap items-center justify-start gap-2 pl-2 pt-8 font-medium text-n900 max-sm:text-sm sm:gap-3">
          <li class="heading-5 text-white">Popular:</li>
          <li v-if="randomSubServiceStore.loading" class="text-white px-2 py-2" style="font-size: 16px">
            Loading...
          </li>
          <li v-else-if="randomSubServiceStore.error" class="text-red-500 px-2 py-2" style="font-size: 16px">
            {{ randomSubServiceStore.error }}
          </li>
          <li v-else-if="randomSubServiceStore.data.length === 0" class="text-white px-2 py-2" style="font-size: 16px">
            No sub services found.
          </li>
          <li v-else v-for="(sub, idx) in randomSubServiceStore.data" :key="sub.id"
            :class="`rounded-lg px-2 py-2 sm:px-4 ${colorClasses[idx % colorClasses.length]}`" style="font-size: 16px">
            {{ sub.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";

import sliderImg1 from "/images/home1.png";
import sliderImg2 from "/images/home2.png";
import sliderImg3 from "/images/home3.png";
import sliderImg4 from "/images/home4.png";
import SearchBox from "../ui/SearchBox.vue";

import { onMounted } from "vue";
import { useRandomSubServiceStore } from "../../stores/randomSubServiceStore";

const randomSubServiceStore = useRandomSubServiceStore();

onMounted(() => {
  randomSubServiceStore.loadRandomSubServices();
});

const sliderImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
];

// Define your color classes here, in the order you want them applied
const colorClasses = [
  "bg-b50",
  "bg-bg2",
  "bg-eb50",
  "bg-bg1",
];
</script>

<style scoped></style>