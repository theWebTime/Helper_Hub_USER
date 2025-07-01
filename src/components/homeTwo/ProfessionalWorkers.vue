<template>
  <section class="stp-30 sbp-30">
    <div class="4xl:large-container max-4xl:container">
      <h2 class="display-4 !font-extrabold">Popular Professional Services</h2>
      <ul class="stp-15 flex flex-wrap">
        <li
          v-for="({ id, name, img }, idx) in popularTabNames"
          :key="id"
          @click="handleActiveTab(idx)"
        >
          <button
            :class="{ 'border-b300 text-b300': idx === activeTab }"
            class="flex items-center justify-center gap-3 rounded-2xl border px-15 py-4 text-lg font-medium duration-500 hover:border-b300 hover:text-b300 bg-b50"
          >
            {{ name }} <img :src="img" alt="" />
          </button>
        </li>
      </ul>

      <div class="stp-15 overflow-hidden">
        <swiper
          :loop="true"
          :modules="[FreeMode, Scrollbar]"
          :slides-per-view="1"
          :spaceBetween="24"
          :navigation="true"
          :scrollbar="{ el: '.swiper-scrollbar' }"
          :breakpoints="{
            '600': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '950': {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            '1300': {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }"
          class="!pb-8"
        >
          <swiper-slide
            v-for="{ id, img, expertName, location } in topExperts.slice(
              activeTab,
              8
            )"
            class="swiper-slide"
            :key="id"
          >
            <div class="rounded-xl border p-8">
              <div class="flex items-start justify-between">
                <p class="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                  PRO
                </p>
                <div class="">
                  <div class="">
                    <img :src="reviewImg" alt="" />
                  </div>
                  <div class="flex gap-2 pt-2">
                    <p
                      class="flex items-center justify-start gap-2 text-xl font-bold !leading-none text-o300"
                    >
                      <PhStar weight="fill" /> 4.4
                    </p>
                    <div class="text-sm text-n300">
                      <p class="font-semibold">Overall rating</p>
                      <p class="">818 ratings</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center py-6">
                <div class="relative max-md:overflow-hidden">
                  <div
                    class="hexagon-styles my-[calc(134px*0.5/2)] h-[calc(134px*0.57736720554273)] w-[134px] rounded-[calc(134px/36.75)] bg-b50 before:rounded-[calc(134px/18.75)] after:rounded-[calc(134px/18.75)]"
                  >
                    <div class="absolute -top-[27px] left-[5px]">
                      <div
                        class="hexagon-styles z-10 my-[calc(124px*0.5/2)] h-[calc(124px*0.57736720554273)] w-[124px] rounded-[calc(124px/50)] bg-b300 before:rounded-[calc(124px/50)] after:rounded-[calc(124px/50)]"
                      >
                        <div class="absolute -top-[26px] left-[4px] z-20">
                          <div
                            class="hexagon-styles z-10 my-[calc(116px*0.5/2)] h-[calc(116px*0.57736720554273)] w-[116px] rounded-[calc(116px/50)] bg-b50 before:rounded-[calc(116px/50)] after:rounded-[calc(116px/50)]"
                          >
                            <div
                              class="r-hex3 absolute -left-0.5 -top-[26px] z-30 inline-block w-[120px] overflow-hidden"
                            >
                              <div class="r-hex-inner3">
                                <div
                                  class="r-hex-inner-3 before:h-[120px] before:bg-cover"
                                  :class="img"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute bottom-5 right-1 z-30">
                    <img :src="verifyBadge" alt="" class="" />
                  </div>
                </div>
                <div class="pt-3">
                  <div class="flex flex-col items-center justify-start gap-3">
                    <router-link
                      :to="
                        '/find-workers/' +
                        expertName.toLowerCase().replaceAll(' ', '-')
                      "
                      class="heading-5"
                    >
                      {{ expertName }}
                    </router-link>
                  </div>
                  <p class="pt-2 text-n500">{{ location }}</p>
                </div>
              </div>
              <div
                class="flex items-center justify-between border-b border-b50 pb-6"
              >
                <div class="flex items-center justify-start gap-2">
                  <span class="ph ph-clock text-2xl !leading-none">
                    <PhClock />
                  </span>
                  <p>Full-Time</p>
                </div>
                <div class="flex items-center justify-start gap-2">
                  <span class="ph ph-chart-line text-2xl !leading-none">
                    <PhChartLine />
                  </span>
                  <p>10+ Years</p>
                </div>
              </div>

              <div class="flex items-center justify-between pt-6">
                <p class="heading-6">
                  <span class="text-n300">Per Hr:</span> $70
                </p>
                <div class="flex items-end justify-end gap-3">
                  <div
                    class="flex items-center justify-center rounded-full border border-n500 p-3 text-lg !leading-none"
                  >
                    <PhChat />
                  </div>
                  <div
                    class="flex items-center justify-center rounded-full border border-n500 p-3 text-lg !leading-none"
                  >
                    <PhHeartStraight />
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <div class="swiper-scrollbar"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { popularTabNames, topExperts } from "../../data/data";
import reviewImg from "/images/review_img.png";
import verifyBadge from "/images/verify-badge.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// Import Swiper React components
import { FreeMode, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  PhChartLine,
  PhChat,
  PhClock,
  PhHeartStraight,
  PhStar,
} from "@phosphor-icons/vue";

const activeTab = ref(0);

function handleActiveTab(idx: number) {
  activeTab.value = idx;
}
</script>

<style scoped></style>
