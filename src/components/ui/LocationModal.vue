<template>
  <div class="relative border-r pr-4 sm:pr-10">
    <div
      class="flex cursor-pointer items-center justify-between gap-2"
      @click="handleClick"
      ref="modalRef"
    >
      <PhMapPin />
      <span class="locationText">
        <span v-if="selectLocation === null">
          <span class="max-[400px]:hidden">Ahmedabad</span> 
        </span>

        <!-- <span v-if="selectLocation !== null">{{ selectLocation }}</span> -->
      </span>
    </div>

    <!-- <div
      class="absolute rtl:right-0 ltr:left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-base duration-700 max-sm:text-sm sm:-left-8 sm:w-[200px] sm:py-5 max-h-[300px] overflow-y-auto overflow-x-hidden"
      :class="{
        'visible scale-100 opacity-100': modalOpen,
        'invisible scale-0 opacity-0': !modalOpen,
      }"
    >
      <input
        type="text"
        class="mx-2 w-[90%] rounded-xl border border-n30 px-2 py-2 outline-none placeholder:text-n800 sm:mx-3 sm:px-3"
        placeholder="Search"
      />

      <p
        v-for="(item, idx) in city_names"
        @click="handleItemClick(item)"
        :key="idx"
        class="locationItem cursor-pointer px-6 py-2 duration-500 hover:bg-b300 hover:text-white text-start"
      >
        {{ item }}
      </p>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { PhMapPin } from "@phosphor-icons/vue";
import { ref } from "vue";
import { city_names } from "../../data/countryCity";

const modalOpen = ref(false);
const modalRef = ref(null);
const selectLocation = ref<null | string>(null);

function handleClick() {
  modalOpen.value = !modalOpen.value;
}

function handleItemClick(item: string) {
  selectLocation.value = item;
  modalOpen.value = false;
}

onClickOutside(modalRef, () => (modalOpen.value = false));
</script>

<style scoped></style>
