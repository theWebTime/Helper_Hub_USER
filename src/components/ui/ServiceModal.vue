<template>
  <div
    ref="modalRef"
    class="relative flex cursor-pointer items-center justify-between gap-2"
  >
    <span class="serviceText" @click="handleClick">
      <span class="">
        <span v-if="selectService === null">
          <span class="max-[400px]:hidden">Select</span> Service
        </span>

        <span v-if="selectService !== null">{{ selectService }}</span>
      </span>
    </span>
    <PhCaretDown />

    <div
      class="absolute rtl:right-0 ltr:left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-base duration-700 max-sm:text-sm sm:-left-8 sm:w-[200px] sm:py-5 max-h-[300px] overflow-y-auto overflow-x-hidden"
      :class="{
        'visible scale-100 opacity-100': modalOpen,
        'invisible scale-0 opacity-0': !modalOpen,
      }"
    >
      <p
        v-for="(item, idx) in serviceList"
        @click="handleItemClick(item)"
        :key="idx"
        class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white text-start"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { PhCaretDown } from "@phosphor-icons/vue";
import { ref } from "vue";

const modalOpen = ref(false);
const modalRef = ref(null);
const selectService = ref<null | string>(null);

function handleClick() {
  modalOpen.value = !modalOpen.value;
}

function handleItemClick(item: string) {
  selectService.value = item;
  modalOpen.value = false;
}

const serviceList = ["Photography", "Renovation", "Cleaning", "Handyman"];

onClickOutside(modalRef, () => (modalOpen.value = false));
</script>

<style scoped></style>
