<template>
  <div class="container grid grid-cols-12 pt-20">
    <div
      class="col-span-12 sm:col-span-6 sm:col-start-4 lg:col-span-4 lg:col-start-5"
    >
      <h4 class="heading-4">Select your region</h4>
      <ul class="flex flex-col gap-10 pt-10">
        <li
          v-for="{ id, name, img } in countryList"
          :key="id"
          class="flex items-center justify-between cursor-pointer"
          @click="handleClick"
        >
          <div class="flex items-center justify-start gap-6">
            <img :src="img" alt="" />
            <p class="text-lg font-medium">{{ name }}</p>
          </div>
          <div class="text-xl">
            <PhCaretRight weight="bold" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCaretRight } from "@phosphor-icons/vue";
import ireland from "/images/country_Ireland.png";
import arzentina from "/images/country_argentina.png";
import australia from "/images/country_australia.png";
import brazil from "/images/country_brazil.png";
import singapoore from "/images/country_singapore.png";

const countryList = [
  {
    id: 101,
    name: "Australia",
    img: australia,
  },
  {
    id: 102,
    name: "Brazil",
    img: brazil,
  },
  {
    id: 103,
    name: "Ireland",
    img: ireland,
  },
  {
    id: 104,
    name: "Arzentina",
    img: arzentina,
  },
  {
    id: 105,
    name: "Singapore",
    img: singapoore,
  },
];

defineProps<{
  handleClick: () => void;
}>();
</script>

<style scoped></style>
