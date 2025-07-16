<template>
  <section class="stp-30 sbp-30">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <h2 class="heading-2 font-bold text-n900">
          How It <span class="text-b300 underline">Works</span>
        </h2>
        <p class="pt-4 font-medium text-n500">
          What steps do I need to take to join?
        </p>
      </div>

      <ul class="stp-15 flex w-full items-center justify-center max-[480px]:flex-col max-[480px]:gap-4">
        <li v-for="{ id, name, icon } in tabButton" :key="id" :class="{
          'border-b-4 border-r300': id === activeTab,
          'border-b-2 border-n30': id !== activeTab,
        }" class="flex w-full items-center justify-center pb-4 sm:pb-6" @click="handleClick(id)">
          <div class="flex items-center justify-between gap-3">
            <span
              class="flex items-center justify-center rounded-xl bg-n30 p-3 text-2xl !leading-none sm:p-[14px] sm:text-3xl">
              <component :is="icon" />
            </span>
            <button class="text-lg font-semibold">{{ name }}</button>
          </div>
        </li>
      </ul>

      <div class="stp-15">
        <div :class="{
          activeTab: activeTab === 101,
          hiddenTab: activeTab !== 101,
        }">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <h3 class="heading-3">Register Your Details</h3>
              <p class="pt-3 text-n500">
                Create your Helper Hub account by filling in basic information like your name, phone number, and
                preferred services. It only takes a few minutes and helps us understand your needs better.
              </p>
              <div class="pt-6 sm:pt-10">
                <LinkButtonTwo link="/sign-up" text="Sign up now" />
              </div>
            </div>
            <div class="col-span-12 md:col-span-7 lg:col-start-6">
              <img :src="illus1" alt="" />
            </div>
          </div>
        </div>
        <div :class="{
          activeTab: activeTab === 102,
          hiddenTab: activeTab !== 102,
        }">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <h3 class="heading-3">Choose Your Service & Schedule</h3>
              <p class="pt-3 text-n500">
                Select the type of help you need — house cleaning, dish washing, kitchen help, cooking, or more. Pick
                your preferred timing, and we’ll match you with a trained professional based on availability.
              </p>
              <div class="pt-6 sm:pt-10">
                <LinkButtonTwo link="/sign-up" text="Sign up now" />
              </div>
            </div>
            <div class="col-span-12 md:col-span-7 lg:col-start-6">
              <img :src="illus2" alt="" />
            </div>
          </div>
        </div>
        <div :class="{
          activeTab: activeTab === 103,
          hiddenTab: activeTab !== 103,
        }">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12 flex flex-col items-start justify-center md:col-span-5 lg:col-span-4">
              <h3 class="heading-3">Sit Back & Relax</h3>
              <p class="pt-3 text-n500">
                Once booked, your helper will arrive at the scheduled time. You can track service status, communicate
                with support, and even rate the service after it’s done — all through your dashboard.
              </p>
              <div class="pt-6 sm:pt-10">
                <LinkButtonTwo link="/sign-up" text="Sign up now" />
              </div>
            </div>
            <div class="col-span-12 md:col-span-7 lg:col-start-6">
              <img :src="illus3" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhBookOpenText,
  PhCalendarPlus,
  PhSortDescending,
} from "@phosphor-icons/vue";
import { ref } from "vue";
import illus1 from "/images/register_details.jpg";
import illus2 from "/images/service_schedule.jpg";
import illus3 from "/images/sit_back_relex.jpg";
import LinkButtonTwo from "../ui/LinkButtonTwo.vue";

const activeTab = ref(101);

const tabButton = [
  { id: 101, name: "Step_01", icon: PhSortDescending },
  { id: 102, name: "Step_02", icon: PhCalendarPlus },
  { id: 103, name: "Step_03", icon: PhBookOpenText },
];

function handleClick(indexNo: number) {
  activeTab.value = indexNo;
}
</script>

<style scoped></style>
