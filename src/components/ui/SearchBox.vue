<template>
  <div
    class="relative z-20 w-full rounded-3xl border border-n20 bg-white p-4 sm:p-8"
  >
    <form
      class="flex items-center justify-between text-lg font-medium max-sm:text-sm"
    >
      <div class="flex items-center justify-start gap-4 sm:gap-10">
        <LocationModal />
        <ServiceModal />
      </div>
      <button
        class="relative ml-2 flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:!leading-none max-md:size-11 md:px-8 md:py-3"
      >
        <span class="text-base !leading-none sm:text-xl md:hidden">
          <PhMagnifyingGlass />
        </span>
        <span class="relative z-10 max-md:hidden">Search</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { PhMagnifyingGlass } from "@phosphor-icons/vue";
import LocationModal from "./LocationModal.vue";
import ServiceModal from "./ServiceModal.vue";
</script>

<style scoped></style>
