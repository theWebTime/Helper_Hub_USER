<template>
  <router-link
    :to="link"
    class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 px-8 py-3 font-medium !leading-none text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
  >
    <span class="m relative z-10">{{ text }}</span>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{ link: string; text: string }>();
</script>

<style scoped></style>
