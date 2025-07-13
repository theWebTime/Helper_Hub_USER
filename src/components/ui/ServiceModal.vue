<template>
  <div
    ref="modalRef"
    class="relative flex cursor-pointer items-center justify-between gap-2"
  >
    <span class="serviceText" @click="handleClick">
      <span>
        <span v-if="selectService === null">
          <span class="max-[400px]:hidden">Select</span> Service
        </span>
        <span v-else>{{ selectService }}</span>
      </span>
    </span>
    <PhCaretDown />

    <div
      class="absolute rtl:right-0 ltr:left-0 top-10 w-[200px] origin-top rounded-none border border-n30 bg-white py-2 text-base shadow-lg duration-700 max-sm:text-sm sm:-left-8 sm:py-2 max-h-[300px] overflow-y-auto overflow-x-hidden"
      :class="{
        'visible scale-100 opacity-100': modalOpen,
        'invisible scale-0 opacity-0': !modalOpen,
      }"
    >
      <div v-if="serviceStore.loading" class="text-center py-2">Loading...</div>
      <div v-else-if="!serviceStore.data || serviceStore.data.length === 0" class="text-center py-2">No services found.</div>
      <div
        v-else
        v-for="item in serviceStore.data"
        :key="item.id"
        class="w-full"
      >
        <button
          class="text-left w-full font-normal text-n900 px-4 py-2 hover:bg-n30 whitespace-nowrap"
          @click="handleItemClick(item.name)"
        >
          {{ item.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { PhCaretDown } from "@phosphor-icons/vue";
import { ref, onMounted } from "vue";
import { useServiceStore } from "../../stores/serviceStore";

const serviceStore = useServiceStore();

onMounted(() => {
  serviceStore.loadServices();
});

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

onClickOutside(modalRef, () => (modalOpen.value = false));
</script>

<style scoped>
/* Optional: further dropdown styling tweaks */
</style>