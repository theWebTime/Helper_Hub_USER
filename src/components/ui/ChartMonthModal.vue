<template>
  <div
    class="relative flex cursor-pointer items-center justify-center gap-2 rounded-full border border-n40 bg-n10 px-4 py-2 text-sm font-medium text-n300"
    @click="showModal = !showModal"
    ref="{modalRef}"
  >
    <p>{{ selectedMonth }}</p>
    <PhCaretDown />
    <div
      :class="{
        'visible scale-100 opacity-100': showModal,
        'invisible scale-0 opacity-0': !showModal,
      }"
      class="absolute right-0 top-9 z-10 max-h-32 w-full origin-top-right overflow-y-auto rounded-xl border border-n30 bg-white p-3 duration-500"
    >
      <ul class="flex flex-col gap-3">
        <li
          v-for="(item, idx) in monthNames"
          @click="selectedMonth = item"
          :key="idx"
          class="cursor-pointer"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
import { ref } from "vue";

const selectedMonth = ref("Jan");
const showModal = ref(false);

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "App",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
</script>

<style scoped></style>
