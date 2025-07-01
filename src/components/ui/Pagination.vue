<template>
  <ul
    class="flex items-center justify-center gap-2 font-medium text-white sm:gap-3"
  >
    <li
      class="flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300"
    >
      <PhCaretLeft />
    </li>
    <li
      class="flex size-12 cursor-pointer items-center justify-center rounded-full bg-n900 duration-500 hover:bg-b300"
    >
      1
    </li>
    <li
      class="flex size-12 cursor-pointer items-center justify-center rounded-full bg-b300"
    >
      2
    </li>
    <li
      class="flex size-12 cursor-pointer items-center justify-center rounded-full bg-n900 duration-500 hover:bg-b300"
    >
      3
    </li>
    <li
      class="flex cursor-pointer items-center justify-center rounded-full bg-n900 p-[14px] text-xl duration-500 hover:bg-b300"
    >
      <PhCaretRight />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
</script>

<style scoped></style>
