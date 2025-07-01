<template>
  <section class="stp-30 sbp-30 bg-n20">
    <div class="container">
      <div
        class="flex items-center justify-between max-sm:flex-col max-sm:items-start sm:max-lg:pb-10"
      >
        <div
          class="relative flex items-center justify-start gap-4 max-sm:mb-16 lg:gap-20"
        >
          <p
            class="text-7xl font-extrabold text-b300 sm:text-[100px] lg:text-[180px]"
          >
            4.9
          </p>
          <div
            class="flex items-center justify-start text-2xl text-y600 max-lg:-mt-8 lg:pb-12"
          >
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
          </div>

          <div
            class="box-shadow-3 absolute -bottom-12 flex items-center justify-start gap-3 rounded-r-3xl rounded-bl-3xl border border-b10 bg-b50 px-8 py-3 sm:-bottom-12 sm:left-32 sm:right-0 sm:w-[250px] lg:-bottom-2 lg:left-64 lg:px-8 lg:py-5 xl:w-[300px]"
          >
            <p class="heading-3 flex items-center justify-start font-bold">
              <span class="w-[80px]">
                <count-up
                  :end-val="1453"
                  :options="{ enableScrollSpy: true }"
                ></count-up>
              </span>
              +
            </p>
            <p
              class="max-w-[50px] font-medium text-n400 sm:mt-8 sm:max-w-[82px]"
            >
              Google Reviews
            </p>
          </div>
        </div>

        <h2 class="heading-2 sm:max-w-[200px] lg:max-w-[240px]">
          Our Customers love us
        </h2>
      </div>

      <div class="stp-15 grid grid-cols-12 gap-6">
        <div
          v-for="(
            { id, review, img, name, profileId }, idx
          ) in testimonialData.slice(0, 3)"
          :class="{
            'border-n40 bg-r50': idx === 0,
            'border-n40 bg-bg1': idx === 1,
            'border-n40 bg-bg2': idx === 2,
          }"
          class="col-span-12 flex flex-col gap-6 rounded-xl border p-6 md:col-span-6 lg:col-span-4 xl:gap-10 xl:p-10"
          :key="id"
        >
          <div class="flex flex-col justify-start">
            <span class="w-[40px] rotate-180 text-4xl">
              <PhQuotes weight="fill" />
            </span>
            <div
              class="flex items-center justify-start gap-1 pt-5 text-xl text-y600"
            >
              <PhStar weight="fill" />
              <PhStar weight="fill" />
              <PhStar weight="fill" />
              <PhStar weight="fill" />
              <PhStar weight="fill" />
            </div>
          </div>
          <p class="text-lg text-n400">{{ review.slice(0, 150) }}</p>
          <div class="flex items-center justify-start gap-4">
            <div class="">
              <img :src="img" alt="" class="rounded-full" />
            </div>
            <div class="">
              <p class="heading-5">{{ name }}</p>
              <p class="font-medium text-n500">{{ profileId }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
import { PhQuotes, PhStar } from "@phosphor-icons/vue";
import { testimonialData } from "../../data/data";
</script>

<style scoped></style>
