<template>
  <section class="stp-30 sbp-30 bg-n900">
    <div class="container text-white">
      <h2 class="heading-2 text-center">How does Helper Hub work?</h2>

      <div class="stp-15 grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
        >
          <div
            class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900"
          >
            <span class="text-3xl !leading-none">
              <PhFile weight="bold" />
            </span>
          </div>
          <div class="max-w-[380px]">
            <h5 class="heading-5 pt-10">Businesses post Shifts for free</h5>
            <p class="pt-3">
              Tap into a nationwide network of Workers as your reserve labor
              pool
            </p>
          </div>
        </div>
        <div
          class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
        >
          <div
            class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900"
          >
            <span class="text-3xl !leading-none">
              <PhShieldCheckered />
            </span>
          </div>
          <div class="max-w-[380px]">
            <h5 class="heading-5 pt-10">Hire with confidence</h5>
            <p class="pt-3">
              Tap into a nationwide network of Workers as your reserve labor
              pool
            </p>
          </div>
        </div>
        <div
          class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4"
        >
          <div
            class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900"
          >
            <span class="text-3xl !leading-none">
              <PhUsersThree />
            </span>
          </div>
          <div class="max-w-[380px]">
            <h5 class="heading-5 pt-10">
              Qualified Workers notified instantly
            </h5>
            <p class="pt-3">
              Tap into a nationwide network of Workers as your reserve labor
              pool
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhFile, PhShieldCheckered, PhUsersThree } from "@phosphor-icons/vue";
</script>

<style scoped></style>
