<template>
  <section class="sbp-30">
    <div
      class="4xl:large-container flex items-center justify-between pt-6 max-4xl:container"
    >
      <router-link to="/">
        <img :src="logo" alt="" />
      </router-link>
      <router-link
        to="/"
        class="flex items-center justify-start gap-2 text-lg font-medium duration-500 hover:text-r300"
      >
        Cancel
        <span class="ph-bold ph-x !leading-none">
          <PhX weight="bold" />
        </span>
      </router-link>
    </div>

    <div v-if="steps < 4" class="stp-30 container grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-4 xl:col-span-3 xl:col-start-2">
        <div class="rounded-3xl border border-n30 p-4 sm:p-8">
          <ul class="flex flex-col gap-8">
            <li v-for="(item, idx) in stepsName" class="relative" key="{idx}">
              <div
                v-if="steps === idx"
                class="flex w-full items-center justify-start gap-4 rounded-full bg-b50 p-2"
              >
                <div
                  class="flex items-center justify-center rounded-full bg-b300 p-2 !leading-none text-white"
                >
                  <PhCheck weight="bold" />
                </div>
                <p class="text-sm font-medium">Title & Date</p>
              </div>

              <div
                v-else
                :class="{ 'text-b300': steps > idx, 'text-n300': steps < idx }"
                class="flex w-full items-center justify-start gap-4 rounded-full p-2"
              >
                <div
                  :class="{
                    'border-b300': steps > idx,
                    'border-n300': steps < idx,
                  }"
                  class="flex size-9 items-center justify-center rounded-full border-2 p-2 text-sm !leading-none"
                >
                  {{ idx + 1 }}
                </div>
                <p class="text-sm font-medium">{{ item }}</p>
              </div>

              <img
                v-if="stepsName.length !== idx + 1"
                :src="stepIcon"
                class="absolute -bottom-7 rtl:right-6 ltr:left-6"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6">
        <div class="rounded-3xl border border-n30 p-6 sm:p-8">
          <StepOne v-if="steps === 0" />
          <StepTwo v-if="steps === 1" />
          <StepThree v-if="steps === 2" />
          <StepFour v-if="steps === 3" />

          <div
            :class="{
              'justify-between gap-6': steps > 0,
              'justify-end': steps < 0,
            }"
            class="stp-15 flex items-center"
          >
            <button
              v-if="steps > 0"
              @click="steps = steps - 1"
              class="relative flex w-1/2 items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
            >
              <span class="relative z-10">Back</span>
            </button>

            <button
              @click="steps = steps + 1"
              class="relative flex w-1/2 items-center justify-center overflow-hidden rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
            >
              <span class="relative z-10">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <StepFive v-if="steps === 4" :handleClick="handleClick" />
    <StepSix v-if="steps === 5" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import StepOne from "../components/postTaskSteps/StepOne.vue";
import StepTwo from "../components/postTaskSteps/StepTwo.vue";
import StepThree from "../components/postTaskSteps/StepThree.vue";
import StepFour from "../components/postTaskSteps/StepFour.vue";
import StepFive from "../components/postTaskSteps/StepFive.vue";
import StepSix from "../components/postTaskSteps/StepSix.vue";
import stepIcon from "/images/steps_icon.png";
import logo from "/images/logo.png";
import { PhCheck, PhX } from "@phosphor-icons/vue";
const steps = ref(0);
const stepsName = ["Title & Date", "Location", "Details", "Budget"];

function handleClick() {
  steps.value = steps.value + 1;
}
</script>

<style scoped></style>
