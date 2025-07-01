<template>
  <h4 class="heading-4">Provide more details</h4>
  <div class="pt-6 lg:pt-10">
    <p class="pb-4 font-medium text-n300">What type of clean do you need?*</p>
    <div class="flex flex-wrap items-center justify-start font-medium">
      <button
        v-for="(item, idx) in ['Regular', 'End of Lease']"
        :key="idx"
        @click="handleClick1(idx)"
        :class="{
          'bg-n900 text-white': idx === active1,
          'bg-n30': idx !== active1,
        }"
        class="rounded-lg px-10 py-3 duration-500 hover:bg-n900 hover:text-white lg:px-15 flex justify-center items-center gap-2"
      >
        <span class="block text-xl leading-none">
          <PhPaintBrushBroad v-if="idx === 0" weight="bold" />
          <PhClipboard v-if="idx === 1" weight="bold" />
        </span>
        <span class="block">{{ item }}</span>
      </button>
    </div>
  </div>

  <p class="pb-4 pt-6 font-medium text-n300">How many bedrooms?*</p>

  <div class="flex items-center justify-start font-medium max-lg:flex-wrap">
    <button
      v-for="(item, idx) in ['None', '1', '2', '3', '4']"
      @click="handleClick2(idx)"
      :key="idx"
      :class="{
        'bg-n900 text-white': idx === active2,
        'bg-n30': idx !== active2,
      }"
      class="rounded-lg px-10 py-3 duration-500 hover:bg-n900 hover:text-white lg:px-12 flex justify-center items-center gap-2"
    >
      {{ item }}
    </button>
  </div>

  <p class="pb-4 pt-6 font-medium text-n300">How many rooms?*</p>

  <div class="flex items-center justify-start font-medium max-lg:flex-wrap">
    <button
      v-for="(item, idx) in ['None', '1', '2', '3', '4']"
      @click="handleClick3(idx)"
      :key="idx"
      :class="{
        'bg-n900 text-white': idx === active3,
        'bg-n30': idx !== active3,
      }"
      class="rounded-lg px-10 py-3 duration-500 hover:bg-n900 hover:text-white lg:px-12 flex justify-center items-center gap-2"
    >
      {{ item }}
    </button>
  </div>

  <p class="pb-4 pt-6 font-medium text-n300">
    Should the cleaner bring equipment and supplies?*
  </p>

  <div class="flex items-center justify-start font-medium max-sm:flex-wrap">
    <button
      v-for="(item, idx) in ['Yes, bring supplies', 'No, I will provide']"
      @click="handleClick4(idx)"
      :key="idx"
      :class="{
        'bg-n900 text-white': idx === active4,
        'bg-n30': idx !== active4,
      }"
      class="rounded-lg px-10 py-3 duration-500 hover:bg-n900 hover:text-white lg:px-12 flex justify-center items-center gap-2 w-full"
    >
      {{ item }}
    </button>
  </div>

  <p class="pt-6 font-medium text-n300">What needs cleaning?*</p>
  <p class="pt-1 text-n300">E.g. carpets vacuumed, oven cleaned</p>
  <textarea class="mt-4 min-h-[130px] w-full rounded-lg bg-n30"></textarea>
</template>

<script setup lang="ts">
import { PhClipboard, PhPaintBrushBroad } from "@phosphor-icons/vue";
import { ref } from "vue";

const active1 = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);

function handleClick1(idx: number) {
  active1.value = idx;
}

function handleClick2(idx: number) {
  active2.value = idx;
}

function handleClick3(idx: number) {
  active3.value = idx;
}

function handleClick4(idx: number) {
  active4.value = idx;
}
</script>

<style scoped></style>
