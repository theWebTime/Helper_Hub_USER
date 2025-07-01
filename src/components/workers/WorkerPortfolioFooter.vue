<template>
  <section class="stp-30 sbp-30 bg-n900">
    <div class="container flex flex-col items-center justify-center text-white">
      <h2 class="heading-2">Let's Collaborate</h2>
      <div class="flex items-center justify-between gap-3 pt-8 font-medium">
        <router-link
          to="/hire-me"
          class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
        >
          <span class="relative z-10"> WORK WITH ME</span>
        </router-link>
      </div>
      <ul class="stp-15 sbp-15 flex items-center justify-center gap-10">
        <li>
          <router-link to="/worker-profile">Services</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/faq">FAQ</router-link>
        </li>
      </ul>
      <div class="flex items-center justify-center gap-3 text-2xl">
        <router-link
          v-for="{ id, icon, link } in socialLinks.slice(0, 4)"
          :key="id"
          class="group relative"
          :to="link"
        >
          <span
            class="flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"
          >
            <component :is="icon" />
          </span>

          <div
            class="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"
          ></div>
          <div
            class="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
          ></div>

          <div
            class="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"
          ></div>

          <div
            class="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
          ></div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialLinks } from "../../data/data";
</script>

<style scoped></style>
