<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
</script>

<template>
  <component :is="$route.meta.layout || DefaultLayout">
    <RouterView />
  </component>
</template>
