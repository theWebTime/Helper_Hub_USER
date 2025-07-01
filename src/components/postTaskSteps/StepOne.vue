<template>
  <div class="">
    <h4 class="heading-4">Let's start with the basics</h4>
    <p class="pb-4 pt-6 lg:pt-10">In a few words, what do you need done?*</p>
    <input type="text" class="w-full rounded-2xl bg-n30 p-3 outline-none" />

    <p class="pb-4 pt-6 font-medium text-n300 lg:pt-10">
      When do you need this done?*
    </p>
    <div class="flex flex-wrap items-center justify-start gap-2">
      <div class="">
        <p class="pb-3 font-semibold">On Date</p>
        <input
          type="date"
          class="rounded-full border border-n900 px-4 py-3 outline-none"
        />
      </div>

      <div class="">
        <p class="pb-3 font-semibold">Before Date</p>
        <input
          type="date"
          class="rounded-full border border-n900 px-4 py-3 outline-none"
        />
      </div>

      <div class="">
        <p class="pb-3 font-semibold">Anytime</p>
        <button
          class="rounded-full border border-n900 bg-n900 px-4 py-3 font-medium text-white"
        >
          I'm flexible
        </button>
      </div>
    </div>

    <div
      class="flex items-center justify-start gap-2 pb-6 pt-6 font-medium lg:pb-10"
    >
      <input type="checkbox" />
      <p>I need a certain time of day</p>
    </div>

    <div class="flex flex-wrap items-center justify-start gap-3">
      <div
        v-for="({ id, time, hour }, idx) in timeSelect"
        :key="id"
        @click="handleClick(idx)"
        :class="{
          'bg-n900 text-white': idx === selectTime,
          'bg-n30': idx !== selectTime,
        }"
        class="cursor-pointer rounded-2xl px-3 py-3 text-center duration-500 hover:bg-n900 hover:text-white lg:px-5 lg:py-6"
      >
        <p class="font-semibold">{{ time }}</p>
        <p class="text-sm font-medium">{{ hour }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

const timeSelect = [
  {
    id: uuidv4(),
    time: "Morning",
    hour: "Before 10am",
  },
  {
    id: uuidv4(),
    time: "Morning",
    hour: "After 10am",
  },
  {
    id: uuidv4(),
    time: "Evening",
    hour: "Before 10pm",
  },
  {
    id: uuidv4(),
    time: "Evening",
    hour: "After 10am",
  },
];

const selectTime = ref(0);

function handleClick(idx: number) {
  selectTime.value = idx;
}
</script>

<style scoped></style>
