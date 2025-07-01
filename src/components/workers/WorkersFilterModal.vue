<template>
  <section
    :class="{
      'translate-y-0 opacity-100': filterModal,
      '-translate-y-full opacity-0': !filterModal,
    }"
    class="fixed left-0 right-0 top-0 z-[999] flex h-auto items-center justify-center overflow-y-auto delay-500 duration-1000"
  >
    <div
      class="mx-3 my-6 max-h-[95vh] max-w-[1175px] overflow-y-auto rounded-2xl bg-white p-8"
    >
      <div class="flex items-center justify-between gap-3">
        <p class="text-xl font-medium">All filters (0)</p>
        <button @click="handleClick">
          <PhX class="text-2xl" />
        </button>
      </div>
      <div
        class="flex w-full items-center justify-start gap-4 border-b border-n30 py-6"
      >
        <label class="inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" class="peer sr-only" />
          <span
            class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"
          ></span>
        </label>

        <p class="text-lg text-n300">Accepting New Clients</p>
      </div>

      <div class="border-b border-n30 py-6">
        <p class="text-xl font-medium">Category (select one)</p>
        <div class="flex flex-wrap items-center justify-start gap-3 pt-3">
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
          >
            <img :src="filterCategoryIcon1" alt="" />
            <p class="text-n300">All Categories</p>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
          >
            <img :src="filterCategoryIcon2" alt="" />
            <p class="text-n300">Handyman</p>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
          >
            <img :src="filterCategoryIcon3" alt="" />
            <p class="text-n300">Babysitting</p>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
          >
            <img :src="filterCategoryIcon4" alt="" />
            <p class="text-n300">Renovation</p>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
          >
            <img :src="filterCategoryIcon5" alt="" />
            <p class="text-n300">Gardening</p>
          </div>

          <div
            class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
          >
            <img :src="filterCategoryIcon6" alt="" />
            <p class="text-n300">Cleaning</p>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-xl border border-n30 px-3 py-3 max-sm:text-sm sm:px-6 lg:px-12 lg:py-5"
          >
            <img :src="filterCategoryIcon7" alt="" />
            <p class="text-n300">Others</p>
          </div>
        </div>
      </div>

      <div class="border-b border-n30 py-6">
        <p class="pb-3 text-xl font-medium">Services</p>
        <div
          class="flex items-center justify-between rounded-xl border border-n30 px-3 py-2 text-n300"
        >
          <p>Choose your Services</p>
          <PhCaretDown />
        </div>
      </div>

      <div class="border-b border-n30 py-6">
        <p class="pb-3 text-xl font-medium">Hourly Rate (select multiple)</p>
        <div
          class="flex flex-wrap items-center justify-start gap-3 text-sm text-n300"
        >
          <p class="rounded-2xl border border-n30 px-4 py-2">$25 - $50/hr</p>
          <p class="rounded-2xl border border-n30 px-4 py-2">$50 - $75/hr</p>
          <p class="rounded-2xl border border-n30 px-4 py-2">$75 - $100/hr</p>
          <p class="rounded-2xl border border-n30 px-4 py-2">$100 - $150/hr</p>
          <p class="rounded-2xl border border-n30 px-4 py-2">$150 - $200/hr</p>
          <p class="rounded-2xl border border-n30 px-4 py-2">$200+/hr</p>
        </div>
      </div>

      <div
        class="flex items-center justify-between gap-6 border-b border-n30 py-6 max-md:flex-col"
      >
        <div class="w-full">
          <p class="pb-3 text-xl font-medium">Location</p>
          <div
            class="flex items-center justify-between rounded-xl border border-n30 px-3 py-2 text-n300"
          >
            <input
              type="text"
              placeholder="Type your Location"
              class="w-full bg-transparent outline-none"
            />
          </div>
        </div>
        <div class="w-full">
          <p class="pb-3 text-xl font-medium">Languages</p>
          <div
            class="flex items-center justify-between rounded-xl border border-n30 px-3 py-2 text-n300"
          >
            <input
              type="text"
              placeholder="Type your Location"
              class="w-full bg-transparent outline-none"
            />
          </div>
        </div>
      </div>

      <div class="flex items-end justify-end gap-6 pt-6 max-[400px]:flex-col">
        <button
          class="relative flex items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
        >
          <span class="relative z-10">Clear Filters</span>
        </button>
        <button
          @click="handleClick"
          class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
        >
          <span class="relative z-10">View 120 result</span>
        </button>
      </div>
    </div>
  </section>

  <div
    :class="{
      'translate-y-0 opacity-100': filterModal,
      'translate-y-full': !filterModal,
    }"
    class="fixed inset-0 z-[998] bg-b50/60 duration-700"
  ></div>
</template>

<script setup lang="ts">
import filterCategoryIcon1 from "/images/filter_category_1.png";
import filterCategoryIcon2 from "/images/filter_category_2.svg";
import filterCategoryIcon3 from "/images/filter_category_3.svg";
import filterCategoryIcon4 from "/images/filter_category_4.svg";
import filterCategoryIcon5 from "/images/filter_category_5.svg";
import filterCategoryIcon6 from "/images/filter_category_6.svg";
import filterCategoryIcon7 from "/images/filter_category_7.svg";
import { PhCaretDown, PhX } from "@phosphor-icons/vue";

defineProps<{
  handleClick: () => void;
  filterModal: boolean;
}>();
</script>

<style scoped></style>
