<template>
  <AboutBreadCrumb />
  <AboutSection />
  <HowServibeWork />
  <!-- <TopExperts :is-three="true" /> -->
  <TestimonialThree />
  <FaqSection />
  <FooterOne />
</template>

<script setup lang="ts">
import AboutBreadCrumb from "../components/aboutUs/AboutBreadCrumb.vue";
import AboutSection from "../components/aboutUs/AboutSection.vue";
import FaqSection from "../components/aboutUs/FaqSection.vue";
import HowServibeWork from "../components/aboutUs/HowServibeWork.vue";
// import TopExperts from "../components/homeOne/TopExperts.vue";
import TestimonialThree from "../components/homeThree/TestimonialThree.vue";
import FooterOne from "../components/global/footer/footerOne.vue";
</script>

<style scoped></style>
