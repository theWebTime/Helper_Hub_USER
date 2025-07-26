<template>
  <section class="sbp-30 mt-[100px] bg-n20 pt-6">
    <div class="container">
      <ul class="flex items-center justify-start gap-2 pt-3 font-medium">
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li v-if="isMiddlePage" class="">
          <PhCaretDoubleRight />
        </li>
        <li v-if="isMiddlePage">
          <router-link :to="middlePageLink!">{{ middlePageName }}</router-link>
        </li>

        <li class="text-r300">
          <PhCaretDoubleRight />
        </li>
        <li class="text-r300">{{ pageName }}</li>
      </ul>
      <div
        class="flex items-center justify-between pt-10 max-md:gap-6 max-sm:flex-col"
      >
        <div class="flex flex-col items-start justify-start">
          <h3 class="heading-3">Turn this search into a job post</h3>
          <p class="max-w-[500px] pt-3 text-lg font-medium text-n300">
            Post a job for free and we’ll match you with experts perfect for
            your needs.
          </p>
          <div class="pt-8">
            <router-link
              to="/book-now"
              class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
            >
              <span class="relative z-10">Post a job for free</span>
            </router-link>
          </div>
        </div>

        <div class="rounded-xl border border-b50 bg-white p-6">
          <div class="flex items-center justify-between gap-10 pb-6">
            <p class="heading-5">Your job</p>
            <p class="rounded-lg bg-b50 px-3 py-2 font-medium">MATCHED</p>
          </div>
          <div class="flex items-center justify-start">
            <div class="rounded-full bg-white p-1">
              <img :src="expertImg1" alt="" class="size-12 rounded-full" />
            </div>
            <div class="rtl:-mr-4 ltr:-ml-4 rounded-full bg-white p-1">
              <img :src="expertImg2" alt="" class="size-12 rounded-full" />
            </div>
            <div class="rtl:-mr-4 ltr:-ml-4 rounded-full bg-white p-1">
              <img :src="expertImg3" alt="" class="size-12 rounded-full" />
            </div>

            <div class="rtl:pr-8 ltr:pl-8 text-2xl">
              <PhArrowRight weight="bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="isSearchBoxShow" class="">
    <div class="container -mt-8 md:-mt-16">
      <SearchBox />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight, PhCaretDoubleRight } from "@phosphor-icons/vue";
import SearchBox from "./SearchBox.vue";
import expertImg1 from "/images/expert_img_1.png";
import expertImg2 from "/images/expert_img_2.png";
import expertImg3 from "/images/expert_img_3.png";

defineProps<{
  pageName: string;
  isSearchBoxShow?: boolean;
  isMiddlePage?: boolean;
  middlePageName?: string;
  middlePageLink?: string;
}>();
</script>

<style scoped></style>
