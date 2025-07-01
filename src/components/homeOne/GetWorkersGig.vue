<template>
  <section class="stp-30 sbp-30 relative">
    <div
      class="absolute left-0 top-0 w-full bg-g300 max-sm:h-1/2 sm:bottom-0 sm:w-1/2"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-full bg-v300 max-sm:h-1/2 sm:top-0 sm:w-1/2"
    ></div>
    <div
      class="container relative z-10 grid grid-cols-12 text-white max-xxl:overflow-hidden max-sm:gap-6"
    >
      <div
        class="col-span-12 flex flex-col items-start sm:col-span-5 max-xl:overflow-hidden"
      >
        <h3 :class="{ 'heading-4': isHeadingBig, 'heading-3': !isHeadingBig }">
          GET WORKERS
        </h3>

        <p class="pb-6 pt-4 sm:pb-10 sm:pt-6">
          GigSmart Get Workers provides a fast, simple, and reliable way to hire
          Workers on the fly at low costs with little to no lead times.
        </p>

        <div class="text-n800">
          <LinkButton
            link="/find-workers"
            text="Explore Now"
            :isBgWhite="true"
          />
        </div>
      </div>

      <div
        class="col-span-12 flex flex-col items-start max-sm:pt-6 sm:col-span-5 sm:col-start-8 max-xl:overflow-hidden"
      >
        <h3 :class="{ 'heading-4': isHeadingBig, 'heading-3': !isHeadingBig }">
          GET GIGS
        </h3>

        <p class="pb-6 pt-4 sm:pb-10 sm:pt-6">
          Work on your terms. GigSmart gives you the freedom and control to find
          the work opportunities best suited to you.
        </p>

        <div class="text-n800">
          <LinkButton link="/sign-up" text="Find Work" :isBgWhite="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LinkButton from "../ui/LinkButton.vue";

defineProps<{ isHeadingBig?: boolean }>();
</script>

<style scoped></style>
