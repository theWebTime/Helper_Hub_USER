<template>
  <Header />
  <HomeTwoHero />
  <CompanyFeatures />
  <ProfessionalWorkers />
  <HowItWorks />
  <FixedService2 :isBgWhite="true" />
  <SecureGuard :isBgGray="true" />
  <NewsLetter />
  <TestimonialTwo />
  <GetWorkersGig :isHeadingBig="true" />
  <RecentPost />
  <FooterTwo />
</template>

<script setup lang="ts">
import Header from "../components/global/Header.vue";
import FooterTwo from "../components/global/footer/FooterTwo.vue";
import FixedService2 from "../components/homeOne/FixedService2.vue";
import GetWorkersGig from "../components/homeOne/GetWorkersGig.vue";
import NewsLetter from "../components/homeOne/NewsLetter.vue";
import SecureGuard from "../components/homeOne/SecureGuard.vue";
import CompanyFeatures from "../components/homeTwo/CompanyFeatures.vue";
import HomeTwoHero from "../components/homeTwo/HomeTwoHero.vue";
import HowItWorks from "../components/homeTwo/HowItWorks.vue";
import ProfessionalWorkers from "../components/homeTwo/ProfessionalWorkers.vue";
import RecentPost from "../components/homeTwo/RecentPost.vue";
import TestimonialTwo from "../components/homeTwo/TestimonialTwo.vue";
</script>

<style scoped></style>
