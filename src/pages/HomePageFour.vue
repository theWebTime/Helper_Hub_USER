<template>
  <Header />
  <HeroSection />
  <HowItWorks />
  <!-- <TopExperts :isBgGray="true" /> -->
  <FixedService2 :isBgWhite="true" />
  <NewsLetter />
  <SecureGuard />
  <TestimonialFour />
  <RecentPost />
  <!-- <GetWorker /> -->
  <GetHelpToday />
  <FooterOne />
</template>

<script setup lang="ts">
import Header from "../components/global/Header.vue";
import FooterOne from "../components/global/footer/footerOne.vue";
import GetWorker from "../components/homeFour/GetWorker.vue";
import HeroSection from "../components/homeFour/HeroSection.vue";
import TestimonialFour from "../components/homeFour/TestimonialFour.vue";
import FixedService2 from "../components/homeOne/FixedService2.vue";
import GetHelpToday from "../components/homeOne/GetHelpToday.vue";
import NewsLetter from "../components/homeOne/NewsLetter.vue";
import RecentPost from "../components/homeOne/RecentPost.vue";
import SecureGuard from "../components/homeOne/SecureGuard.vue";
import TopExperts from "../components/homeOne/TopExperts.vue";
import HowItWorks from "../components/homeThree/HowItWorks.vue";
</script>

<style scoped></style>
