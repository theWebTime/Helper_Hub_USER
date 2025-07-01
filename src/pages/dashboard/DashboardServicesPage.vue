<template>
  <section class="mt-[100px] pt-15">
    <div class="4xl:large-container grid grid-cols-12 gap-6 max-4xl:px-4">
      <div class="col-span-12 flex flex-col gap-6 xl:col-span-8 3xl:col-span-9">
        <div
          v-for="{
            id,
            title,
            img,
            startingPrice,
            ratingCount,
            viewCount,
            inQ,
            completed,
            cancelled,
          } in profileServicesData"
          :key="id"
          class="flex w-full items-center justify-between gap-6 rounded-2xl bg-white p-3 max-lg:flex-col"
        >
          <div
            class="flex items-center justify-start gap-6 max-md:flex-col xl:max-3xl:flex-col"
          >
            <div class="">
              <img :src="img" class="rounded-xl" alt="" />
            </div>
            <div class="flex flex-col gap-6">
              <div class="flex items-center justify-start gap-8">
                <div class="flex items-center justify-start gap-2">
                  <span class="ph-fill ph-star text-2xl text-y300">
                    <PhStar weight="fill" />
                  </span>
                  <p class="font-medium text-n300">4.7 ({{ ratingCount }})</p>
                </div>
                <div class="flex items-center justify-start gap-2">
                  <span class="ph-fill ph-eye text-2xl text-b300">
                    <PhEye weight="fill" />
                  </span>
                  <p class="font-medium text-n300">{{ viewCount }}</p>
                </div>
              </div>
              <h4 class="heading-4">{{ title }}</h4>
              <div
                class="flex items-center justify-start gap-4 max-sm:flex-wrap"
              >
                <div
                  class="flex items-center justify-center gap-3 rounded-lg bg-b50 px-3 py-3 xl:px-6"
                >
                  <div
                    class="flex items-center justify-center rounded-full bg-b300 p-3 !leading-none text-white"
                  >
                    <PhArrowsCounterClockwise />
                  </div>
                  <div class="">
                    <p class="text-xl font-semibold">{{ inQ }}</p>
                    <p class="font-medium">Queue</p>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center gap-3 rounded-lg bg-y50 px-3 py-3 xl:px-6"
                >
                  <div
                    class="flex items-center justify-center rounded-full bg-y300 p-3 !leading-none text-white"
                  >
                    <PhCheck />
                  </div>
                  <div class="">
                    <p class="text-xl font-semibold">{{ completed }}</p>
                    <p class="font-medium">Completed</p>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center gap-3 rounded-lg bg-r50 px-3 py-3 xl:px-6"
                >
                  <div
                    class="flex items-center justify-center rounded-full bg-r300 p-3 !leading-none text-white"
                  >
                    <PhX />
                  </div>
                  <div class="">
                    <p class="text-xl font-semibold">{{ cancelled }}</p>
                    <p class="font-medium">Cancelled</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-center justify-between gap-6 max-md:flex-wrap 3xl:gap-16"
          >
            <div
              class="flex items-center text-center max-lg:gap-4 max-sm:flex-wrap lg:flex-col"
            >
              <p class="text-lg font-semibold">Starting From:</p>
              <p class="text-2xl font-bold text-r300 lg:pb-5 lg:pt-3">
                ${{ startingPrice }}.00
              </p>
              <p class="text-lg font-semibold lg:pb-3">On/Off Service:</p>

              <label class="flex cursor-pointer items-center justify-center">
                <input type="checkbox" value="" class="peer sr-only" />
                <span
                  class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white"
                ></span>
              </label>
            </div>
            <div class="flex gap-4 lg:flex-col lg:gap-8">
              <router-link
                class="rounded-full bg-b50 p-3 text-2xl !leading-none text-b300"
                to="/dashboard/edit-service"
              >
                <PhPencilSimple />
              </router-link>
              <button
                class="rounded-full bg-r50 p-3 text-2xl !leading-none text-r300"
              >
                <PhTrash />
              </button>
              <button
                class="rounded-full bg-y50 p-3 text-2xl !leading-none text-y300"
              >
                <PhNotePencil />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-6 xl:col-span-4 3xl:col-span-3">
        <div class="rounded-xl bg-white">
          <header class="flex items-center justify-between px-4 py-6">
            <p ref="currentDateRef" class="current-date"></p>
            <div class="icons flex gap-2">
              <span
                id="prev"
                class="flex size-9 cursor-pointer items-center justify-center rounded-full text-2xl !leading-none text-n300 duration-500 hover:bg-r300 hover:text-white"
                @click="handleIconClick('prev')"
              >
                <PhCaretLeft />
              </span>

              <span
                id="next"
                class="flex size-9 cursor-pointer items-center justify-center rounded-full text-2xl !leading-none text-n300 duration-500 hover:bg-r300 hover:text-white"
                @click="handleIconClick('next')"
              >
                <PhCaretRight />
              </span>
            </div>
          </header>

          <div class="calendar p-2 sm:p-5">
            <ul class="weeks flex text-center">
              <li>Sun</li>
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
            </ul>
            <ul
              ref="daysTagRef"
              class="days mb-5 flex flex-wrap text-center"
            ></ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhArrowsCounterClockwise,
  PhCaretLeft,
  PhCaretRight,
  PhCheck,
  PhEye,
  PhNotePencil,
  PhPencilSimple,
  PhStar,
  PhTrash,
  PhX,
} from "@phosphor-icons/vue";
import { profileServicesData } from "../../data/data";
import { onMounted, ref } from "vue";

const daysTagRef = ref<HTMLUListElement | null>(null);
const currentDateRef = ref<HTMLParagraphElement | null>(null);
const currYear = ref(new Date().getFullYear());
const currMonth = ref(new Date().getMonth());

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

onMounted(() => {
  renderCalendar();
});

const renderCalendar = () => {
  const date = new Date(currYear.value, currMonth.value, 1);
  const firstDayOfMonth = date.getDay();
  const lastDateOfMonth = new Date(
    currYear.value,
    currMonth.value + 1,
    0
  ).getDate();
  const lastDayOfMonth = new Date(
    currYear.value,
    currMonth.value,
    lastDateOfMonth
  ).getDay();
  const lastDateOfLastMonth = new Date(
    currYear.value,
    currMonth.value,
    0
  ).getDate();

  let liTag: string = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    const isToday: string =
      i === new Date().getDate() &&
      currMonth.value === new Date().getMonth() &&
      currYear.value === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  if (currentDateRef.value !== null) {
    currentDateRef.value.innerText = `${months[currMonth.value]} ${
      currYear.value
    }`;
  }
  if (daysTagRef.value !== null) {
    daysTagRef.value.innerHTML = liTag;
  }
};

const handleIconClick = (direction: string) => {
  if (direction === "prev") {
    currMonth.value = currMonth.value - 1;
    if (currMonth.value === 0) {
      currYear.value = currYear.value - 1;
    }
  } else {
    currMonth.value = currMonth.value + 1;
    if (currMonth.value === 11) {
      currYear.value = currYear.value + 1;
    }
  }
  renderCalendar();
};
</script>

<style scoped></style>
