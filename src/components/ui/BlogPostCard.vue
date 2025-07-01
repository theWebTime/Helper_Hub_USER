<template>
  <div
    class="group col-span-12 sm:col-span-6"
    :class="{
      'lg:col-span-6 xxl:col-span-3': isFourItems,
      'lg:col-span-4': !isFourItems,
    }"
  >
    <div class="relative">
      <img :src="img" alt="" class="w-full rounded-xl" />
      <p class="absolute bottom-3 left-3 rounded-2xl bg-b75 px-6 py-2 text-sm">
        {{ category }}
      </p>
    </div>
    <div class="rounded-2xl bg-r50 px-6 py-5 duration-500 group-hover:bg-bg2">
      <router-link :to="'/blog/' + title.toLowerCase().replaceAll(' ', '-')">
        <h4 class="heading-4 pb-3">{{ title }}</h4>
      </router-link>
      <div class="flex items-center justify-between">
        <p class="text-sm font-medium text-n500">
          Latest News April <br />
          12, {{ new Date().getFullYear() }}
        </p>
        <router-link
          :to="'/blog/' + title.toLowerCase().replaceAll(' ', '-')"
          class="flex items-center justify-center rounded-full bg-n900 p-2 text-2xl !leading-none text-white duration-500 group-hover:rotate-45"
        >
          <PhArrowUpRight />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowUpRight } from "@phosphor-icons/vue";

defineProps<{
  img: string;
  category: string;
  title: string;
  isFourItems?: boolean;
}>();
</script>

<style scoped></style>
