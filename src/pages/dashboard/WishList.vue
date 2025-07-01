<template>
  <section class="mt-[100px] pt-15">
    <div
      class="4xl:large-container grid grid-cols-12 gap-6 overflow-hidden rounded-2xl bg-white p-4 max-4xl:mx-4 sm:p-10"
    >
      <div class="col-span-12">
        <h4 class="heading-4">Wishlist</h4>
      </div>

      <div class="col-span-12 flex flex-col gap-4">
        <div
          v-for="{ id, title, img, startingPrice } in profileServicesData"
          :key="id"
          class="flex items-center justify-between gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
        >
          <div
            class="flex items-center justify-start gap-6 max-xxl:gap-2 max-sm:flex-col"
          >
            <div class="flex items-center justify-center self-stretch">
              <img :src="img" alt="" class="rounded-2xl object-cover" />
            </div>
            <div class="">
              <h3 class="heading-3">{{ title }}</h3>
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
            <p class="py-1 font-semibold text-r300">
              ${{ startingPrice }} - &200/hr
            </p>
            <p class="pb-5 text-sm font-semibold">Fixed Price</p>
            <a
              href="#"
              class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-3 py-2 text-sm font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-4 lg:py-3"
            >
              <span class="relative z-10">View Details</span>
            </a>
          </div>
        </div>
      </div>

      <div class="col-span-12 flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Pagination from "../../components/ui/Pagination.vue";
import { profileServicesData } from "../../data/data";
import settingsIcon from "/images/settings_icon.png";
import tapIcon from "/images/tap_icon.png";
</script>

<style scoped></style>
