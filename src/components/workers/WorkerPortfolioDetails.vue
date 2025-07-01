<template>
  <WorkerPortfolioHeader />

  <WorkerPortfolioHero />

  <section class="">
    <div class="stp-30 sbp-30 container">
      <p class="text-2xl font-medium text-n300">
        Our cleaning services portfolio showcases our dedication to pristine
        spaces. From residential deep cleans to commercial sanitization, we
        deliver excellence. Trust us for thorough, efficient cleaning solutions
        tailored to your needs, ensuring a healthier and more inviting
        environment for all.
      </p>
      <p class="py-6 text-2xl font-medium text-n300">
        With a proven track record of transforming spaces, our cleaning
        portfolio highlights our expertise in maintaining cleanliness and
        hygiene.
      </p>
      <p class="text-xl font-medium text-n300 sm:text-2xl">
        Link:
        <router-link class="text-n900" to="#"> http://Servibe.com </router-link>
      </p>
    </div>

    <div
      class="stp-15 sbp-15 container flex flex-col items-center justify-center gap-8 border-y-2 border-n900"
    >
      <h2 class="heading-2">Work with me</h2>
      <div class="max-w-[300px]">
        <router-link
          to="/chat"
          class="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
        >
          <div class="relative z-20 flex items-center justify-center gap-3">
            <span>Let's Chat</span>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <section class="stp-30 sbp-30" id="services">
    <div class="container grid grid-cols-12 gap-6">
      <h2 class="heading-2 sbp-15 col-span-12">More Services</h2>

      <div
        v-for="{ id, img, name } in workerPortfolioData.slice(0, 2)"
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

  <WorkerPortfolioFooter />
</template>

<script setup lang="ts">
import { workerPortfolioData } from "../../data/data";
import WorkerPortfolioFooter from "./WorkerPortfolioFooter.vue";
import WorkerPortfolioHeader from "./WorkerPortfolioHeader.vue";
import WorkerPortfolioHero from "./WorkerPortfolioHero.vue";
import arrow2 from "/images/big_arrow.png";
</script>

<style scoped></style>
