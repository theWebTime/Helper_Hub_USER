<template>
  <div class="relative z-20">
    <div class="-mb-20 flex items-center justify-center max-lg:hidden">
      <div
        class="relative flex h-[160px] w-[160px] items-center justify-center rounded-full bg-white text-white"
      >
        <div
          class="logo absolute z-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-white text-5xl !leading-none"
        >
          <PhPaperPlaneTilt />
        </div>
        <div
          class="circleText circle absolute h-[95%] w-[95%] rounded-full bg-r300 font-medium"
        >
          <p>
            <span
              v-for="(char, i) in splittedTextSplit"
              :key="i"
              class="absolute left-1/2 origin-[0_75px]"
              :style="{ transform: `rotate(${i * 12.3}deg)` }"
            >
              {{ char }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";

const circleText = "On Demand Service Available*";
const splittedTextSplit = circleText.split("");
</script>

<style scoped></style>
