<template>
  <section
    class="stp-30 flex h-full w-full flex-col items-center justify-center"
  >
    <div class="">
      <img :src="notFoundImage" alt="" />
    </div>
    <div class="stp-15 flex flex-col items-center justify-center text-center">
      <h2 class="heading-2">Page Not Found</h2>
      <p class="pb-10 pt-3">
        The page you are looking for doesn't exist or has been moved
      </p>

      <LinkButton :is-yellow="true" link="/" text="Back To Home" />
    </div>
  </section>
</template>

<script setup lang="ts">
import LinkButton from "../components/ui/LinkButton.vue";
import notFoundImage from "/images/not-found-img.png";
</script>

<style scoped></style>
