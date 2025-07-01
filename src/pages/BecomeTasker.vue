<template>
  <section class="sbp-30 mt-[150px] lg:mt-[200px]">
    <div class="container rounded-3xl bg-b300">
      <div
        class="flex items-center justify-between gap-6 p-6 max-sm:flex-col md:p-15 lg:p-30"
      >
        <div class="flex flex-col items-start justify-center text-white">
          <p class="heading-2">Be your own boss</p>
          <p class="pt-3 text-lg font-medium sm:text-xl md:text-2xl">
            Earn up to $10,750 a month on Servibe*
          </p>

          <div class="pb-6 pt-6 lg:pt-10">
            <router-link
              to="/sign-up"
              class="group relative flex items-center justify-start pr-12 font-semibold"
            >
              <span
                class="rounded-full bg-n900 px-6 py-3 duration-500 group-hover:translate-x-12"
              >
                Join Servibe
              </span>
              <span
                class="absolute right-0 top-0 translate-x-0 rounded-full bg-n900 p-[14px] text-xl !leading-none duration-500 group-hover:right-[148px] group-hover:rotate-45"
              >
                <PhArrowUpRight weight="bold" />
              </span>
            </router-link>
          </div>

          <p class="text-base font-medium md:text-xl">
            *Based on the average monthly earnings of the top 1%
          </p>
        </div>
        <div class="overflow-hidden rounded-3xl">
          <img :src="bossImg" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section class="sbp-30">
    <div class="container grid grid-cols-12 gap-6">
      <div
        v-for="{ id, icon, title, desc } in becomeTaskerFeatures"
        :key="id"
        class="col-span-12 flex flex-col items-center justify-start rounded-full border border-n30 px-6 py-10 text-center min-[400px]:col-span-6 sm:px-8 sm:py-20 lg:col-span-3 lg:py-10 xl:py-20"
      >
        <div class="flex items-center justify-center rounded-full bg-b50 p-6">
          <span class="text-4xl !leading-none text-b300">
            <component :is="icon" />
          </span>
        </div>
        <p class="heading-5 pb-3 pt-8">{{ title }}</p>
        <p class="font-medium text-n300">{{ desc }}</p>
      </div>
    </div>
  </section>

  <section class="stp-30 sbp-30 bg-n20">
    <div class="container grid grid-cols-12 gap-6">
      <div
        class="col-span-12 flex items-center justify-center rounded-2xl bg-b300 p-6 md:col-span-5 lg:p-15"
      >
        <img :src="browseJobsImg" class="w-full rounded-2xl" alt="" />
      </div>

      <div
        class="col-span-12 flex flex-col items-start justify-center md:col-span-7 lg:col-span-6 lg:col-start-7"
      >
        <p class="heading-2">
          Browse job opportunities
          <span class="text-b300">for free</span>
        </p>
        <p class="pt-4 text-base font-medium text-n300 sm:text-lg">
          Sign up and start browsing instantly. Set up notifications on the
          Servibe App to be alerted in real time about jobs that mach your
          skills and interest
        </p>

        <div class="pt-10 text-white">
          <LinkButton link="/sign-up" text="Join Servibe" :is-blue="true" />
        </div>
      </div>
    </div>
  </section>

  <section class="stp-30 sbp-30 max-md:mt-6">
    <div class="container grid grid-cols-12 gap-6">
      <div
        class="col-span-12 flex flex-col items-start justify-center max-md:order-2 max-md:pt-6 md:col-span-6"
      >
        <p class="heading-2">Set your <span class="text-b300">price</span></p>
        <p class="pt-4 text-base font-medium text-n300 sm:text-lg">
          Found a job you’re up for? Set your price and make an offer. You can
          adjust and discuss it later if you need to.
        </p>

        <div class="pt-6 text-white sm:pt-10">
          <LinkButton link="/sign-up" text="Join Servibe" :is-blue="true" />
        </div>
      </div>

      <div
        class="relative col-span-12 flex items-center justify-center rounded-xl pb-10 max-md:order-1 md:col-span-5 md:col-start-8"
      >
        <img :src="setPriceImg" class="rounded-2xl" alt="" />

        <div
          class="absolute -top-8 left-0 flex items-center justify-start gap-3 rounded-xl bg-b50 px-4 py-4 sm:px-8 lg:-left-8"
        >
          <div class="overflow-hidden rounded-full bg-white p-1">
            <img :src="ctaImg" alt="" class="w-[44px] rounded-full" />
          </div>
          <p>Need help assembling furniture</p>
        </div>

        <div
          class="absolute -bottom-10 right-2 flex flex-col items-center justify-start gap-3 rounded-xl bg-b50 px-6 py-6 md:right-0 xl:px-10 xxl:-right-8"
        >
          <p class="font-medium">I Want to earn</p>
          <div
            class="flex items-center justify-between gap-5 text-2xl text-b300"
          >
            <PhMinusCircle weight="bold" />
            <p class="heading-2">250</p>
            <PhPlusCircle weight="bold" />
          </div>

          <p class="rounded-full bg-b300 px-8 py-3 text-sm text-white">
            Make offer
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="stp-30 sbp-30 bg-n20">
    <div class="container grid grid-cols-12 gap-6">
      <div
        class="relative col-span-12 flex items-center justify-center rounded-2xl bg-b300 p-6 md:col-span-5"
      >
        <div
          class="absolute -top-10 left-[5%] flex items-center justify-between gap-2 rounded-2xl bg-white px-3 py-2 md:left-1 lg:left-8 lg:py-4 xl:left-16 xl:px-5 xxl:left-24"
        >
          <div class="">
            <img :src="fav" alt="" />
          </div>
          <div class="">
            <div class="flex items-center justify-between gap-2 lg:gap-5">
              <p class="font-medium">Hurray! it’s payday</p>
              <p class="text-sm text-n300">1m ago</p>
            </div>
          </div>
        </div>

        <div
          class="mt-16 flex flex-col items-center justify-center rounded-2xl bg-white px-15 py-10 lg:mt-32"
        >
          <img :src="icon" alt="" />
          <p class="pt-5 font-semibold">Way to go joshua!</p>
          <div
            class="flex items-center justify-center gap-2 pt-3 text-xl text-b300"
          >
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
            <PhStar weight="fill" />
          </div>
        </div>
      </div>

      <div
        class="col-span-12 flex flex-col items-start justify-center md:col-span-7 lg:col-span-6 lg:col-start-7"
      >
        <p class="heading-2">Complete the job. Get paid. Easy.</p>
        <p class="pt-4 text-base font-medium text-n300 sm:text-lg">
          When you mark a task as complete, a Request for Payment is sent
          directly to the job poster so they can release payment instantly.
        </p>

        <div class="pt-10 text-white">
          <LinkButton link="/sign-up" text="Join Servibe" :is-blue="true" />
        </div>
      </div>
    </div>
  </section>

  <FaqSection />
</template>

<script setup lang="ts">
import {
  PhArrowUpRight,
  PhMinusCircle,
  PhPlusCircle,
  PhStar,
} from "@phosphor-icons/vue";
import LinkButton from "../components/ui/LinkButton.vue";
import { becomeTaskerFeatures } from "../data/data";
import bossImg from "/images/boss_img.png";
import browseJobsImg from "/images/browse_jobs_img.png";
import icon from "/images/complete_job_icon.png";
import ctaImg from "/images/cta_img1.png";
import fav from "/images/fav.png";
import setPriceImg from "/images/set_price_img.png";
import FaqSection from "../components/aboutUs/FaqSection.vue";
</script>

<style scoped></style>
