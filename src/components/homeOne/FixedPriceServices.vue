<template>
  <section class="stp-30 sbp-30 bg-n20">
    <div class="container grid grid-cols-12 max-lg:gap-8 max-sm:gap-6">
      <div
        class="max-xxl:overflow-hidden col-span-12 flex flex-col items-start justify-center lg:col-span-5"
      >
        <div>
          <h5 class="pb-4 font-bold text-r300">Fixed Price Service</h5>
          <h2 class="heading-2 font-bold text-n900">
            Be your own <span class="text-b300 underline">boss</span>
          </h2>
          <p class="pb-6 pt-3 sm:pb-8">
            Whether you're a genius spreadsheet guru or a diligent carpenter,
            find your next job on Airtasker.
          </p>
          <ul class="flex flex-col gap-4">
            <li class="flex items-center justify-start gap-2">
              <PhCheckCircle class="text-2xl text-b300" />
              <span>Free access to thousands of job opportunities</span>
            </li>
            <li class="flex items-center justify-start gap-2">
              <PhCheckCircle class="text-2xl text-b300" />

              <span>Grow your business and client base</span>
            </li>
            <li class="flex items-center justify-start gap-2">
              <PhCheckCircle class="text-2xl text-b300" />

              <span>Earn extra income on a flexible schedule</span>
            </li>
            <li class="flex items-center justify-start gap-2">
              <PhCheckCircle class="text-2xl text-b300" />

              <span>No subscription or credit fees</span>
            </li>
          </ul>
          <div class="pt-6 lg:pt-10 flex justify-start items-start">
            <LinkButton
              link="/sign-up"
              text="Earn money all"
              :isYellow="true"
            />
          </div>
        </div>
      </div>
      <div
        class="relative col-span-12 flex items-center justify-center sm:py-12 lg:col-span-7"
      >
        <div class="overflow-hidden rounded-xl">
          <img :src="posterImg" alt="" />
        </div>

        <div
          class="box-shadow-1 3xl:-right-14 absolute right-0 top-0 overflow-hidden rounded-2xl border border-b50 bg-white pb-5 max-sm:hidden"
        >
          <p class="bg-n10 px-6 py-3 font-semibold">Payment received!</p>
          <div
            class="flex items-center justify-between gap-6 px-6 pt-5 sm:gap-28"
          >
            <div class="">
              <p class="font-medium">Cleaning services</p>
              <p class="text-sm text-n500">2h Ago</p>
            </div>
            <p class="heading-4 pb-1 font-bold">$145</p>
          </div>
        </div>

        <div class="3xl:-right-14 absolute right-0 top-36 max-sm:hidden">
          <p
            class="box-shadow-2 flex items-center justify-center gap-2 rounded-full bg-g100 px-8 py-3 font-medium"
          >
            <PhBellSimpleRinging weight="bold" class="text-xl" /> New job alert!
          </p>
        </div>

        <div
          class="box-shadow-1 absolute bottom-0 left-0 overflow-hidden rounded-2xl border border-b50 bg-white pb-5 max-sm:hidden"
        >
          <p class="bg-n10 px-6 py-3 font-semibold">Total earnings</p>
          <div class="px-6">
            <div class="py-5">
              <img
                :src="earningLine"
                alt=""
                class="w-full max-sm:max-h-[50px]"
              />
            </div>
            <p class="heading-4 pb-1 font-bold">$14,500</p>
            <p>
              <PhArrowUp class="text-xl text-b300 inline-flex" /> 20% us last
              month
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhArrowUp,
  PhBellSimpleRinging,
  PhCheckCircle,
} from "@phosphor-icons/vue";
import posterImg from "/images/fixed_price_service_img.png";
import earningLine from "/images/total_earnings_line.png";
import LinkButton from "../ui/LinkButton.vue";
</script>

<style scoped></style>
