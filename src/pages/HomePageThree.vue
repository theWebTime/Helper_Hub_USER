<template>
  <Header />
  <HomeThreeHero />
  <HowItWorks />
  <ExploreCategory />
  <SecureGuard />
  <TopExperts />
  <FixedPriceServices />
  <NewsLetter />
  <TestimonialThree />
  <RecentPost :isBgWhite="true" />
  <GetWorkersGig />
  <GetHelpToday />
  <FooterOne />
</template>

<script setup lang="ts">
import Header from "../components/global/Header.vue";
import FooterOne from "../components/global/footer/footerOne.vue";
import FixedPriceServices from "../components/homeOne/FixedPriceServices.vue";
import GetHelpToday from "../components/homeOne/GetHelpToday.vue";
import GetWorkersGig from "../components/homeOne/GetWorkersGig.vue";
import NewsLetter from "../components/homeOne/NewsLetter.vue";
import RecentPost from "../components/homeOne/RecentPost.vue";
import SecureGuard from "../components/homeOne/SecureGuard.vue";
import TopExperts from "../components/homeOne/TopExperts.vue";
import ExploreCategory from "../components/homeThree/ExploreCategory.vue";
import HomeThreeHero from "../components/homeThree/HomeThreeHero.vue";
import HowItWorks from "../components/homeThree/HowItWorks.vue";
import TestimonialThree from "../components/homeThree/TestimonialThree.vue";
</script>

<style scoped></style>
