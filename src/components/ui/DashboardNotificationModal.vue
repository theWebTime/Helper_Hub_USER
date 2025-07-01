<template>
  <div
    @click="modal = !modal"
    class="relative flex cursor-pointer items-center justify-center rounded-full bg-n30 p-3 text-n300"
  >
    <span class="text-2xl !leading-none">
      <PhBell />
    </span>
    <span class="absolute right-3 top-3 rounded-full bg-n50 p-px">
      <span class="block size-2.5 rounded-full bg-r300"></span>
    </span>

    <div
      :class="{
        'visible scale-100 opacity-100': modal,
        'invisible scale-0 opacity-0': !modal,
      }"
      class="absolute rtl:left-0 ltr:right-0 top-12 w-[230px] origin-top-right rounded-2xl border border-n30 bg-white py-4 duration-500"
    >
      <p class="px-4 pb-3 text-lg font-semibold">Notification</p>
      <div
        class="flex w-full flex-col items-start justify-start gap-4 border-y border-n30 p-3"
      >
        <div
          v-for="{ id, name, time } in dashborarNotificationData"
          :key="id"
          class="flex items-start justify-start gap-2"
        >
          <span
            class="flex items-center justify-center rounded-full bg-b300 p-2 text-white"
          >
            <PhBell />
          </span>
          <div class="">
            <p class="text-n900">{{ name }}</p>
            <p class="text-sm text-n300">{{ time }}</p>
          </div>
        </div>
      </div>
      <p class="px-4 pt-3 text-lg font-semibold">See All Notification</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhBell } from "@phosphor-icons/vue";
import { dashborarNotificationData } from "../../data/data";
import { ref } from "vue";

const modal = ref(false);
</script>

<style scoped></style>
