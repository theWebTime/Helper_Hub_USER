<template>
  <BreadCrumb
    pageName="Service Details"
    :isSearchBoxShow="false"
    :isMiddlePage="true"
    middlePageLink="/services"
    middlePageName="Services"
  />

  <section class="sbp-30 stp-30">
    <div class="container grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-8">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 overflow-hidden rounded-xl md:col-span-6">
            <img :src="serviceDetailsImg" class="w-full rounded-xl" alt="" />
          </div>
          <div
            class="col-span-12 flex flex-col items-center justify-start lg:col-span-6"
          >
            <div class="flex flex-col items-start justify-start">
              <h3 class="heading-3 pb-3">
                Elevating Cleanliness Stand with Professional Cleaning Services
              </h3>
              <p class="font-medium text-n300">
                Elevate Plumber liness standards with our professional Plumber
                services.
              </p>
              <div class="flex items-center justify-start gap-3 pt-3">
                <div class="relative max-md:overflow-hidden">
                  <div
                    class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                  >
                    <div class="absolute -top-[20px] left-[5px]">
                      <div
                        class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                      >
                        <div class="absolute -top-[18px] left-[4px] z-20">
                          <div
                            class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                          >
                            <div
                              class="r-hex3 absolute -left-0.5 -top-[20px] z-30 inline-block w-[86px] overflow-hidden"
                            >
                              <div class="r-hex-inner3">
                                <div
                                  class="before:bg-[url('/images/people13.png')] r-hex-inner-3 before:h-[86px] before:bg-cover"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute bottom-3 right-1 z-30">
                    <img :src="badge" alt="" class="" />
                  </div>
                </div>
                <div class="max-[350px]:max-w-20">
                  <div class="flex items-center justify-center gap-3">
                    <h5 class="heading-5">Albert Flores</h5>
                    <p
                      class="p rounded-full bg-y300 px-3 py-1 text-sm font-medium"
                    >
                      PRO
                    </p>
                  </div>
                  <p class="text-sm text-n300">Brooklyn, NY, USA</p>
                </div>
              </div>
            </div>

            <div
              class="mt-4 flex w-full items-center justify-between border-y border-n30 py-3"
            >
              <div class="flex items-center justify-start gap-2">
                <span class="text-2xl !leading-none text-b300">
                  <PhStar weight="fill" />
                </span>
                <p class="text-n300">No recommendations yet</p>
              </div>
              <span class="text-2xl !leading-none text-b300">
                <PhShareNetwork weight="fill" />
              </span>
            </div>
          </div>
        </div>

        <div class="stp-15 sbp-15">
          <h3 class="heading-3 border-b border-n30 pb-5">About this service</h3>
          <div class="flex flex-col gap-8 pt-5 text-lg">
            <div class="flex flex-col gap-3">
              <h4 class="heading-4">Our Mission:</h4>
              <p class="text-n300">
                Our mission is to transform your space into a clean and inviting
                haven where you can relax, work, and thrive. We strive to exceed
                your expectations by delivering reliable, efficient, and
                personalized cleaning solutions that enhance your quality of
                life.
              </p>
            </div>
            <div class="flex flex-col gap-3">
              <h4 class="heading-4">Our Approach:</h4>
              <p class="text-n300">
                We take a personalized approach to cleaning, understanding that
                every space is unique and requires individualized attention. Our
                team of professional cleaners is trained to meticulously clean
                and sanitize your home, office, or commercial space using
                eco-friendly products and state-of-the-art equipment.
              </p>
            </div>
            <ul class="flex list-inside flex-col gap-8">
              <li class="marker:heading-4">
                <span class="heading-4">Services We Offer:</span>
                <ul
                  class="ml-4 flex list-disc flex-col gap-3 pt-3 text-n300 marker:text-[10px] marker:text-n900"
                >
                  <li>
                    Residential Cleaning: From routine housekeeping to deep
                    cleaning, we offer a range of residential cleaning services
                    to keep your home spotless and organized.
                  </li>
                  <li>
                    Commercial Cleaning: Our commercial cleaning services are
                    tailored to meet the specific needs of businesses, offices,
                    and commercial properties, ensuring a clean and welcoming
                    environment for employees and customers.
                  </li>
                  <li>
                    Specialized Cleaning: We also offer specialized cleaning
                    services for move-in/move-out cleaning, post-construction
                    cleaning, and event cleanup, providing comprehensive
                    solutions for all your cleaning needs.
                  </li>
                </ul>
              </li>
              <li class="marker:heading-4">
                <span class="heading-4">Services We Offer:</span>
                <ul
                  class="ml-4 flex list-disc flex-col gap-3 pt-3 text-n300 marker:text-[10px] marker:text-n900"
                >
                  <li>
                    Experienced Professionals: Our team consists of experienced
                    and trained cleaning professionals who are dedicated to
                    delivering exceptional results.
                  </li>
                  <li>
                    Quality Service: We prioritize quality and attention to
                    detail in every cleaning task we undertake, ensuring your
                    complete satisfaction.
                  </li>
                  <li>
                    Eco-Friendly Practices: We are committed to sustainability
                    and use environmentally friendly cleaning products and
                    practices whenever possible.
                  </li>
                  <li>
                    Customer Satisfaction: Your satisfaction is our top
                    priority, and we strive to exceed your expectations with
                    every cleaning service we provide.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="stp-15 sbp-15 flex flex-col items-center justify-center gap-8 border-y border-n30"
        >
          <h2 class="heading-2">Work with me</h2>
          <div class="max-w-[300px]">
            <router-link
              to="/hire-me"
              class="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
            >
              <div class="relative z-20 flex items-center justify-center gap-3">
                <span class="text-xl !leading-none">
                  <PhPaperPlaneTilt />
                </span>
                <span>Hire me</span>
              </div>
            </router-link>
          </div>
        </div>

        <div class="mt-6 rounded-xl border border-n30 p-4 sm:mt-14 sm:p-8">
          <h5 class="heading-5">More Services</h5>

          <div class="flex flex-col gap-4 pt-10">
            <ServiceCard
              v-for="(item, idx) in workerServices.slice(0, 2)"
              v-bind="item"
              :key="idx"
            />
          </div>
        </div>
      </div>

      <div class="col-span-12 lg:col-span-4">
        <div class="sticky top-32">
          <div
            class="items-center rounded-2xl border border-n30 px-6 py-8 text-center text-n300"
          >
            <div class="border-b border-n30 pb-6">
              <p class="text-sm font-semibold">STARTING AT</p>
              <p class="heading-5 py-1 font-semibold text-r300">
                $75 - &100/hr
              </p>

              <div class="pt-3">
                <router-link
                  to="/hire-me"
                  class="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
                >
                  <div
                    class="relative z-20 flex items-center justify-center gap-3"
                  >
                    <span class="text-xl !leading-none">
                      <PhPaperPlaneTilt />
                    </span>
                    <span>Hire me</span>
                  </div>
                </router-link>
              </div>
            </div>

            <div class="flex flex-col items-start justify-start pt-6">
              <p class="text-sm font-medium">Duration</p>
              <p class="flex items-center justify-start gap-2 pt-3 text-sm">
                <span class="text-2xl text-b300">
                  <PhCalendar weight="fill" />
                </span>
                1-1.5 weeks
              </p>
              <p class="pt-6 text-sm font-medium">Skills and Services</p>
              <div class="flex flex-wrap gap-1 pt-3 text-sm text-n400">
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <span>Handyman</span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <span>Cleaning </span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <span>Renovation </span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <span>Gardening </span>
                </p>
                <p
                  class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2"
                >
                  <span>Plumber </span>
                </p>
                <p class="rounded-xl bg-b50 px-3 py-2">+3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhCalendar,
  PhPaperPlaneTilt,
  PhShareNetwork,
  PhStar,
} from "@phosphor-icons/vue";
import { workerServices } from "../data/data";
import badge from "/images/verify-badge.png";
import serviceDetailsImg from "/images/worker-details-img.png";
import ServiceCard from "../components/ui/ServiceCard.vue";
import BreadCrumb from "../components/ui/BreadCrumb.vue";
</script>

<style scoped></style>
