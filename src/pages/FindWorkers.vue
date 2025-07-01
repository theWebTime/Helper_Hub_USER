<template>
  <BreadCrumb pageName="Find Workers" />
  <WorkersList />
  <NewsLetter />
  <FaqSection />
</template>

<script setup lang="ts">
import FaqSection from "../components/aboutUs/FaqSection.vue";
import NewsLetter from "../components/homeOne/NewsLetter.vue";
import BreadCrumb from "../components/ui/BreadCrumb.vue";
import WorkersList from "../components/workers/WorkersList.vue";
</script>

<style scoped></style>
