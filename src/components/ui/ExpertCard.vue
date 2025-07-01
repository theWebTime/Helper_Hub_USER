<template>
  <div class="flex flex-col gap-6 rounded-3xl border border-n40 bg-n10 py-6">
    <div class="flex items-center justify-start gap-3 px-3 sm:px-6">
      <div class="relative max-md:overflow-hidden">
        <div
          class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
        >
          <div class="absolute -top-[20px] left-[5px]">
            <div
              class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
            >
              <div class="absolute -top-[19px] left-[4px] z-20">
                <div
                  class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                >
                  <div
                    class="r-hex3 absolute -left-0.5 -top-[19px] z-30 inline-block w-[86px] overflow-hidden"
                  >
                    <div class="r-hex-inner3">
                      <div
                        :class="img"
                        class="r-hex-inner-3 before:h-[86px] before:bg-cover"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-3 right-1 z-30">
          <img :src="badge" alt="" class="" />
        </div>
      </div>
      <div class="max-[350px]:max-w-20">
        <div class="flex items-center justify-start gap-3">
          <h5 class="heading-5">{{ expertName }}</h5>
          <p class="rounded-full bg-y300 px-2 py-1 text-xs font-medium">PRO</p>
        </div>
        <p class="pt-2 text-n500">{{ location }}</p>
      </div>
    </div>

    <div class="flex flex-wrap gap-2 px-6 text-[13px]">
      <p class="rounded-full bg-r50 px-2 py-1 font-medium text-r300">
        $75 - $100/hr
      </p>
      <p class="rounded-full bg-g50 px-2 py-1 font-medium text-g400">
        TOP INDEPENDENT
      </p>
      <p class="rounded-full bg-v50 px-2 py-1 font-medium text-v300">
        AVAILABLE
      </p>
    </div>

    <div class="flex flex-wrap gap-2 px-6 text-n400">
      <p
        class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
      >
        <img :src="settingsIcon" alt="" />
        <span>Handyman</span>
      </p>
      <p
        class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
      >
        <img :src="tapIcon" alt="" />
        <span>Plumber </span>
      </p>
      <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
    </div>

    <div class="relative">
      <swiper
        :loop="true"
        :slides-per-view="1"
        :spaceBetween="12"
        :navigation="{
          nextEl: '.ara-next',
          prevEl: '.ara-prev',
        }"
        :modules="[FreeMode, Navigation]"
        class="swiper expert-slider-carousel group"
      >
        <swiper-slide
          v-for="(item, i) in sliderImg"
          class="swiper-wrapper"
          :key="i"
        >
          <img :src="item" alt="" class="w-full" />
        </swiper-slide>

        <div class="absolute left-2 right-2 top-28 z-10">
          <div class="flex w-full items-center justify-between">
            <button
              class="ara-prev flex -translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
            >
              <PhCaretLeft />
            </button>
            <button
              class="ara-next flex translate-x-12 items-center justify-center rounded-full border-2 border-r300 p-2 text-lg !leading-none text-r300 opacity-0 duration-500 hover:bg-r300 hover:text-white group-hover:translate-x-0 group-hover:opacity-100"
            >
              <PhCaretRight />
            </button>
          </div>
        </div>
      </swiper>
    </div>

    <div class="flex items-center justify-start gap-2 px-6">
      <router-link
        :to="'/find-workers/' + expertName.toLowerCase().replaceAll(' ', '-')"
        class="relative w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
      >
        <div class="relative z-20 flex items-center justify-center gap-3">
          <PhPaperPlaneTilt class="text-xl !leading-none" />
          <span>Get in touch</span>
        </div>
      </router-link>
      <button
        class="relative flex items-center justify-center rounded-full border p-3 text-xl !leading-none duration-500 hover:bg-y300"
      >
        <PhHeart />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import settingsIcon from "/images/settings_icon.png";
import tapIcon from "/images/tap_icon.png";
import badge from "/images/verify-badge.png";
import {
  PhCaretLeft,
  PhCaretRight,
  PhHeart,
  PhPaperPlaneTilt,
} from "@phosphor-icons/vue";

defineProps<{
  img: string;
  expertName: string;
  location: string;
  sliderImg: string[];
}>();
</script>

<style scoped></style>
