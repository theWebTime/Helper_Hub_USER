<template>
  <section class="stp-30 sbp-30 bg-n20">
    <div class="container relative">
      <swiper
        :modules="[FreeMode, Navigation, Pagination]"
        :loop="true"
        :autoplay="{
          delay: 3000,
        }"
        :spaceBetween="24"
        :slidesPerView="1"
        :navigation="{
          nextEl: '.ara-next',
          prevEl: '.ara-prev',
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          '992': {
            slidesPerView: 2,
            spaceBetween: 100,
          },
        }"
        class="home3-testimonial-carousel"
      >
        <swiper-slide
          v-for="{ id, review, img, name, profileId } in testimonialData.filter(
            (_, idx) => idx % 2 === 0
          )"
          class="flex flex-col items-start justify-start"
          :key="id"
        >
          <div class="flex items-center justify-start gap-2 text-2xl text-b300">
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
          </div>
          <p class="pt-6 text-lg font-medium text-n500">{{ review }}</p>
          <div class="flex items-center justify-start gap-8 pt-8">
            <div
              class="flex items-center justify-start gap-4 border-r border-n60 pr-8"
            >
              <div class="rounded-full bg-n60 p-[2px]">
                <img :src="img" alt="" class="rounded-full" />
              </div>
              <div class="">
                <p class="heading-5">{{ name }}</p>
                <p class="font-medium text-n500">{{ profileId }}</p>
              </div>
            </div>
            <div class="text-3xl !leading-none text-b300">
              <PhTwitterLogo weight="fill" />
            </div>
          </div>
        </swiper-slide>

        <div class="flex items-center justify-between">
          <div
            class="swiper-pagination !relative mt-16 max-w-[120px] rounded-full bg-white px-2 pt-0.5"
          ></div>

          <div
            class="flex items-center justify-end gap-3 pt-6 text-2xl !leading-none text-b300 lg:pt-10"
          >
            <button
              class="ara-prev flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:-rotate-45 hover:bg-b300 hover:text-white lg:p-4"
            >
              <PhArrowUpLeft />
            </button>
            <button
              class="ara-next flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:rotate-45 hover:bg-b300 hover:text-white lg:p-4"
            >
              <PhArrowUpRight />
            </button>
          </div>
        </div>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhArrowUpLeft,
  PhArrowUpRight,
  PhStar,
  PhTwitterLogo,
} from "@phosphor-icons/vue";
import { testimonialData } from "../../data/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<style scoped></style>
