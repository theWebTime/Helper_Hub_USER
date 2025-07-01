<template>
  <div>
    <h4 class="heading-4">Tell us where</h4>
    <div class="pt-6 lg:pt-10">
      <p class="pb-4 font-medium text-n300">Is this a home cleaning task?*</p>
      <div class="flex items-center justify-start font-medium">
        <button
          v-for="(item, idx) in ['Yes', 'No']"
          @click="handleClick(idx)"
          :key="idx"
          :class="{
            'bg-n900 text-white': idx === active,
            'bg-n30': idx !== active,
          }"
          class="rounded-lg px-10 py-3 duration-500 hover:bg-n900 hover:text-white lg:px-15"
        >
          {{ item }}
        </button>
      </div>
    </div>

    <p class="pb-4 pt-6 font-medium text-n300 lg:pt-10">
      When do you need this done?*
    </p>

    <div class="flex items-center justify-start gap-3 rounded-2xl bg-n30 p-3">
      <PhMapPin weight="bold" />
      <input
        type="text"
        class="w-full bg-transparent outline-none placeholder:font-medium placeholder:text-n900"
        placeholder="Enter suburd or postcode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhMapPin } from "@phosphor-icons/vue";
import { ref } from "vue";

const active = ref(0);

function handleClick(idx: number) {
  active.value = idx;
}
</script>

<style scoped></style>
