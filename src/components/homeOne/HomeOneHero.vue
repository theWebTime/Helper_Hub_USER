<template>
  <section class="relative bg-r50 pt-30 sm:pt-40 xl:pt-52">
    <div
      class="container relative grid grid-cols-12 max-xl:overflow-x-hidden max-md:gap-6 lg:-mb-10"
    >
      <div
        class="col-span-12 sm:col-span-10 md:col-span-6 lg:col-span-5 max-xxl:overflow-hidden duration-1000"
        v-motion-pop-visible-once
      >
        <div class="flex flex-col items-start justify-center">
          <h5 class="heading-5 pb-3 font-[700] text-r300">Your Solution Hub</h5>
          <div class="relative">
            <h1
              class="sm:display-3 text-[32px] font-[800] text-n600 max-sm:pr-10"
            >
              Find the Right <span class="text-r300">Talent</span> for Any Task
            </h1>
            <div
              class="absolute -bottom-2 right-2 flex items-center justify-start rounded-full border border-y600 p-1 max-[450px]:hidden sm:bottom-0 sm:right-12 md:right-32 lg:right-20 xl:bottom-2 xl:right-28 xxl:right-44"
            >
              <div
                class="overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8"
              >
                <img :src="people1" alt="" class="rounded-full" />
              </div>
              <div
                class="-ml-2 overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8 lg:-ml-4"
              >
                <img :src="people2" alt="" class="rounded-full" />
              </div>
              <div
                class="-ml-2 overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8 lg:-ml-4"
              >
                <img :src="people3" alt="" class="rounded-full" />
              </div>
              <div
                class="-ml-2 overflow-hidden rounded-full bg-white p-0.5 max-lg:size-8 lg:-ml-4"
              >
                <img :src="people4" alt="" class="rounded-full" />
              </div>
              <div class="-ml-2 max-lg:size-8 lg:-ml-4">
                <img :src="people5" alt="" class="rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="max-xxl:overflow-hidden sm:col-span-10 md:col-span-5 lg:col-span-4 lg:col-start-9 col-span-12 duration-1000"
        v-motion-pop-visible-once
      >
        <div class="flex flex-col items-start justify-center">
          <p class="pb-6 font-semibold text-n500">
            Access assistance from a vast network of reliable local experts.
          </p>
          <div class="">
            <LinkButton
              link="/find-workers"
              text="Explore Now"
              :isYellow="true"
            />
          </div>
          <div class="flex items-center justify-start gap-6 pt-3">
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
        </div>
      </div>
    </div>

    <CircleText />

    <div class="stp-15">
      <swiper
        class="smooth"
        :modules="[FreeMode, Autoplay]"
        :autoplay="{
          delay: 1,
        }"
        :slides-per-view="1"
        :loop="true"
        :speed="12000"
        :centeredSlides="true"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
          },
        }"
      >
        <swiper-slide
          v-for="{ id, img, title, desc, bgColor } in homeOneHeroSlider"
        >
          <div
            :class="bgColor"
            class="relative flex flex-col items-end justify-start gap-10 rounded-md pl-6 pt-4 md:pt-8 3xl:gap-3 3xl:px-8"
            :key="id"
          >
            <router-link
              to="/find-workers"
              class="flex items-center justify-center rounded-full bg-g200 p-3 !leading-none duration-500 hover:rotate-45 hover:bg-r300 max-3xl:mr-4"
            >
              <PhArrowUpRight weight="bold" />
            </router-link>

            <div class="h-full">
              <img :src="img" alt="" class="max-h-full self-stretch" />
            </div>
            <div class="absolute left-4 top-4 md:top-8 lg:left-8">
              <p class="heading-2 pb-3 text-white">{{ title }}</p>
              <p class="max-w-[240px] font-medium text-white max-sm:text-sm">
                {{ desc }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { homeOneHeroSlider } from "../../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { PhArrowUpRight, PhStar, PhStarHalf } from "@phosphor-icons/vue";
import people5 from "/images/people_plus.png";
import people1 from "/images/people_small1.png";
import people2 from "/images/people_small2.png";
import people3 from "/images/people_small3.png";
import people4 from "/images/people_small4.png";
import CircleText from "../ui/CircleText.vue";
import LinkButton from "../ui/LinkButton.vue";
</script>

<style scoped></style>
