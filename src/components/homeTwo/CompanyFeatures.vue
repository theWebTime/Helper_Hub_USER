<template>
  <section
    class="4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container"
  >
    <div
      v-for="({ id, title, desc, icon }, idx) in companyFeatures"
      :class="{
        'bg-bg2': idx === 0,
        'bg-r50': idx === 1,
        'bg-b10': idx === 2,
        'bg-bg4': idx === 3,
      }"
      class="col-span-12 rounded-xl px-4 pt-8 min-[400px]:col-span-6 sm:px-8 lg:col-span-3 lg:px-4 xxl:px-8 xxl:pt-12"
      :key="id"
    >
      <h3 class="heading-3">{{ title }}</h3>
      <p class="pt-3 text-lg font-medium">{{ desc }}</p>
      <div class="flex items-end justify-between">
        <div class="pb-12">
          <router-link
            to="/contact"
            :class="{
              'border-n900': idx === 0,
              'border-r300 text-r300': idx === 1,
              'border-b300 text-b300': idx === 2,
              'border-g300 text-g300': idx === 3,
            }"
            class="rounded-full border p-3 block"
          >
            <PhArrowRight />
          </router-link>
        </div>
        <div
          :class="{
            'text-n900/30': idx === 0,
            'text-r100/30': idx === 1,
            'text-b100/30': idx === 2,
            'text-g75/30': idx === 3,
          }"
          class="text-[100px] !leading-none sm:text-[160px] xl:text-[180px]"
        >
          <component :is="icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import { companyFeatures } from "../../data/data";
</script>

<style scoped></style>
