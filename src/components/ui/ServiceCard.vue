<template>
  <div
    class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
  >
    <div class="flex items-center justify-start max-xxl:gap-2 max-sm:flex-col">
      <div
        class="flex items-center justify-center sm:justify-start self-stretch sm:w-[80%]"
      >
        <img :src="img" alt="" class="rounded-2xl object-cover" />
      </div>
      <div class="">
        <h5 class="heading-5">{{ name }}</h5>
        <div class="flex flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6">
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
            <span>Cleaning</span>
          </p>
          <p
            class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
          >
            <img :src="tapIcon" alt="" />
            <span>Plumber</span>
          </p>
          <p
            class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
          >
            <span>+4</span>
          </p>
        </div>
      </div>
    </div>

    <div
      class="felx h-full w-full flex-col items-center justify-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300 md:max-w-[176px]"
    >
      <p class="text-sm font-semibold">STARTING AT</p>
      <p class="py-1 font-semibold text-r300">{{ startingPrice }}</p>
      <p class="pb-5 text-sm font-semibold">Fixed Price</p>
      <router-link
        to="/services/service-details"
        class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
      >
        <span class="relative z-10">View Details</span>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import settingsIcon from "/images/settings_icon.png";
import tapIcon from "/images/tap_icon.png";

defineProps<{
  img: string;
  name: string;
  startingPrice: string;
}>();
</script>

<style scoped></style>
