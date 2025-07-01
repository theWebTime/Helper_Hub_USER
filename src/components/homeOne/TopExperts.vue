<template>
  <section :class="{ 'bg-n20': isBgGray }" class="stp-30 sbp-30">
    <div class="container">
      <div class="flex items-center justify-between gap-2">
        <div class="flex max-w-[300px] flex-col">
          <h2 class="heading-2 font-bold text-n900">
            Top <span class="text-b300 underline">Experts</span>
          </h2>
          <p class="pt-4 font-medium text-n500">
            Our skilled and reliable experts, your most trusted partners.
          </p>
        </div>
        <div class="">
          <router-link
            to="/find-workers"
            class="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
          >
            All Experts
            <PhArrowRight weight="bold" class="text-2xl !leading-none" />
          </router-link>
        </div>
      </div>

      <div class="stp-15 grid grid-cols-12 gap-6">
        <div
          v-for="(expert, idx) in topExperts.slice(0, isThree ? 3 : 6)"
          class="md:col-span-6 xl:col-span-4 col-span-12"
          key="{id}"
        >
          <ExpertCard v-bind="expert" :key="idx" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import { topExperts } from "../../data/data";
import ExpertCard from "../ui/ExpertCard.vue";
defineProps<{
  isBgGray?: boolean;
  isThree?: boolean;
}>();
</script>

<style scoped></style>
