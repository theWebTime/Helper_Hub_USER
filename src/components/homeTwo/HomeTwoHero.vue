<template>
  <section>
    <div
      class="4xl:large-container relative mt-28 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-b900 text-white max-4xl:container"
    >
      <h1
        class="pt-8 text-[40px] font-extrabold sm:text-[60px] md:text-[100px] lg:text-[140px] xl:text-[170px] xxl:text-[200px] min-[1650px]:text-[250px]"
      >
        Expert Hub
      </h1>

      <div
        class="max-sm:items-start-start items-center justify-center gap-4 max-xl:flex max-xl:pt-4 max-sm:flex-col max-sm:items-start"
      >
        <div
          class="right-10 top-80 flex items-center justify-start gap-3 xl:absolute 3xl:right-[15%]"
        >
          <div
            class="flex items-center justify-center rounded-full bg-bg1 p-2 text-xl !leading-none text-n900 sm:p-3"
          >
            <PhShieldChevron />
          </div>
          <p class="font-semibold max-sm:text-sm">Multiple payment options.</p>
        </div>

        <div
          class="left-2 top-80 flex items-center justify-start gap-3 xl:absolute 3xl:left-40"
        >
          <div
            class="flex items-center justify-center rounded-full bg-y300 p-2 text-xl !leading-none text-n900 sm:p-3"
          >
            <PhBroom />
          </div>
          <p class="font-semibold max-sm:text-sm">Simple Booking Process</p>
        </div>
      </div>

      <div class="bottom-20 left-20 max-w-[400px] xl:absolute">
        <p
          class="relative px-4 py-3 font-medium after:absolute after:bottom-0 after:left-0 after:top-0 after:w-px after:bg-white max-xl:mt-4 max-sm:text-center max-sm:after:hidden"
        >
          Post any task. Pick the best person. Get it done.
        </p>
      </div>

      <div class="bottom-32 right-16 text-n900 xl:absolute">
        <LinkButton link="/find-workers" text="Explore Now" :is-yellow="true" />
      </div>

      <div
        class="relative z-10 max-xl:pt-8 max-lg:px-2 xl:-mt-32 min-[1650px]:-mt-52"
      >
        <img :src="heroImg" alt="" class="" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhBroom, PhShieldChevron } from "@phosphor-icons/vue";
import heroImg from "/images/home_two_hero_img.png";
import LinkButton from "../ui/LinkButton.vue";
</script>

<style scoped></style>
