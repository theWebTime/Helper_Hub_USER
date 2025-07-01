<template>
  <section class="sbp-30 stp-30">
    <div class="container">
      <h2 class="heading-2 pb-3">Discover the world’s best flexible talent</h2>
      <p class="font-medium text-n300">
        Browse and connect with top talent who can help bring your next project
        to life
      </p>

      <div class="stp-15 sbp-15 flex items-start justify-start">
        <div
          class="flex flex-wrap items-center justify-start gap-3 overflow-hidden rounded-lg border border-b50 p-1 min-[380px]:rounded-full"
        >
          <div
            @click="handleClick"
            class="flex cursor-pointer items-center justify-start gap-3 rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300"
          >
            <PhSliders />
            <span class="">Filters</span>
          </div>
          <div
            class="flex cursor-pointer rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300"
          >
            <span class="">Location</span>
          </div>
          <div
            class="cursor-pointer rounded-full bg-n30 px-5 py-3 text-start font-medium text-n300"
          >
            <span class="">Rate</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-6 sbp-15">
        <div
          v-for="(item, idx) in topExperts"
          class="md:col-span-6 xl:col-span-4 col-span-12"
          :key="idx"
        >
          <ExpertCard v-bind="item" />
        </div>
      </div>
      <Pagination />
    </div>

    <WorkersFilterModal :filterModal="filterModal" :handleClick="handleClick" />
  </section>
</template>

<script setup lang="ts">
import Pagination from "../ui/Pagination.vue";
import { topExperts } from "../../data/data";
import ExpertCard from "../ui/ExpertCard.vue";
import { ref } from "vue";
import { PhSliders } from "@phosphor-icons/vue";
import WorkersFilterModal from "./WorkersFilterModal.vue";

const filterModal = ref(false);

function handleClick() {
  filterModal.value = !filterModal.value;
}
</script>

<style scoped></style>
