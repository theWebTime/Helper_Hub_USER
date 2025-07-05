<template>
  <main class="bg-n20 pb-10">
    <DashboardHeader />
    <router-view />
    <!-- <RTLToggleButton /> -->
  </main>
</template>

<script setup lang="ts">
import DashboardHeader from "../components/dashboard/DashboardHeader.vue";
// import RTLToggleButton from "../components/ui/RTLToggleButton.vue";
</script>

<style scoped></style>
