<template>
  <WorkerPortfolioHeader />
  <WorkerPortfolioHero />

  <section class="stp-30 sbp-30">
    <div class="container grid grid-cols-12 gap-6" id="services">
      <div
        v-for="{ id, img, name } in workerPortfolioData"
        class="col-span-12 md:col-span-6"
        :key="id"
      >
        <div class="overflow-hidden rounded-2xl">
          <img :src="img" alt="" />
        </div>
        <div class="flex items-center justify-between">
          <router-link to="/worker-portfolio-details" class="heading-4">
            {{ name }}
          </router-link>
          <router-link to="/worker-portfolio-details">
            <img :src="arrow2" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </section>

  <TestimonialThree />

  <FaqSection />
  <WorkerPortfolioFooter />
</template>

<script setup lang="ts">
import WorkerPortfolioHeader from "../components/workers/WorkerPortfolioHeader.vue";
import WorkerPortfolioHero from "../components/workers/WorkerPortfolioHero.vue";
import arrow2 from "/images/big_arrow.png";
import { workerPortfolioData } from "../data/data";
import TestimonialThree from "../components/homeThree/TestimonialThree.vue";
import FaqSection from "../components/aboutUs/FaqSection.vue";
import WorkerPortfolioFooter from "../components/workers/WorkerPortfolioFooter.vue";
</script>

<style scoped></style>
