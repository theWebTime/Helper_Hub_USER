<template>
  <section
    class="stp-30 4xl:large-container mx-4 mt-[100px] rounded-3xl bg-n900 pb-52 md:pb-60 lg:rounded-[60px] lg:pb-72"
  >
    <div
      class="container flex flex-col items-center justify-center gap-3 text-white"
    >
      <h2 class="heading-2">{{ pageName }}</h2>

      <ul class="flex items-center justify-start gap-2 pt-3 font-medium">
        <li>
          <router-link to="/">Home</router-link>
        </li>

        <li v-if="isMiddlePage" class="">
          <PhCaretDoubleRight />
        </li>
        <li v-if="isMiddlePage">
          <router-link to="{middlePageLink!}">{{ middlePageName }}</router-link>
        </li>

        <li class="text-r300">
          <PhCaretDoubleRight />
        </li>
        <li class="text-r300">{{ pageName }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhCaretDoubleRight } from "@phosphor-icons/vue";

defineProps<{
  pageName: string;
  isMiddlePage?: boolean;
  middlePageName?: string;
  middlePageLink?: string;
}>();
</script>

<style scoped></style>
