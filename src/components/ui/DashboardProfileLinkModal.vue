<template>
  <div
    @click="modal = !modal"
    class="relative cursor-pointer rounded-full bg-n30 p-px"
  >
    <img :src="userImg" class="size-11 rounded-full" alt="" />
    <div
      :class="{
        'visible scale-100 opacity-100': modal,
        'invisible scale-0 opacity-0': !modal,
      }"
      class="absolute rtl:left-0 ltr:right-0 top-12 w-[200px] origin-top-right rounded-2xl border border-n30 bg-white py-4 duration-500"
    >
      <ul class="flex flex-col gap-3 rtl:pr-4 ltr:pl-4">
        <li
          v-for="{ id, name, link } in dashboardProfileLink"
          :key="id"
          class="font-medium duration-500 hover:text-r300"
        >
          <router-link :to="link">{{ name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import userImg from "/images/review_people_1.png";
import { dashboardProfileLink } from "../../data/data";
import { ref } from "vue";
const modal = ref(false);
</script>

<style scoped></style>
