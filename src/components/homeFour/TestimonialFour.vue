<template>
  <section class="stp-30 sbp-30 relative overflow-hidden bg-b50">
    <div class="absolute right-0 top-0">
      <img :src="illus" alt="" class="max-[1860px]:w-[280px] max-3xl:w-[150px] max-xl:hidden" />
    </div>
    <div class="container">
      <div class="sbp-15 flex items-center justify-between gap-6 border-b border-sp max-sm:flex-col">
        <div class="">
          <h5 class="heading-5 text-r300">Testimonials</h5>
          <h2 class="heading-2 max-w-[500px] pt-4">
            What Users Are Saying About The Helper Hub
          </h2>
        </div>
        <p class="font-medium text-n500 sm:max-w-[300px]">
          Incredibly impressed on-demand cleaning service. Prompt, thorough and
          left home sparkling.
        </p>
      </div>

      <div class="grid grid-cols-12 max-lg:gap-6">
        <!-- <div
          class="stp-15 col-span-12 flex items-center justify-center border-sp pr-6 md:col-span-4 md:border-r lg:col-span-5 lg:pr-20"
        >
          <img :src="testimonialImg" alt="" class="max-md:max-h-[300px]" />
        </div> -->

        <div class="col-span-12 flex items-center justify-start md:col-span-7 lg:col-span-12 lg:col-start-1">
          <swiper :modules="[FreeMode, Navigation]" :loop="true" :autoplay="{
            delay: 3000,
          }" :navigation="{
              nextEl: '.ara-next',
              prevEl: '.ara-prev',
            }" :slidesPerView="'auto'" class="!md:max-lg:pt-6">
            <swiper-slide v-for="{ id, review, name } in testimonialData" :key="id" class="swiper-slide w-full">
              <p class="border-b border-sp pb-5 text-lg font-medium text-n500 sm:text-xl">
                {{ review }}
              </p>

              <h4 class="heading-4 pt-5">{{ name }}</h4>
              <!-- <p class="pt-1 font-medium text-n500">VP of Marketing</p> -->
            </swiper-slide>

            <div class="flex items-center justify-start gap-3 pt-6 text-2xl !leading-none text-b300 lg:pt-10">
              <button
                class="ara-prev flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:-rotate-45 hover:bg-b300 hover:text-white lg:p-4">
                <PhArrowUpLeft />
              </button>
              <button
                class="ara-next flex items-center justify-center rounded-full border border-b300 p-3 duration-500 hover:rotate-45 hover:bg-b300 hover:text-white lg:p-4">
                <PhArrowUpRight />
              </button>
            </div>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import illus from "/images/home-four-illus.png";
import testimonialImg from "/images/testimonial_img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { testimonialData } from "../../data/data";
import { PhArrowUpLeft, PhArrowUpRight } from "@phosphor-icons/vue";
</script>

<style scoped></style>
