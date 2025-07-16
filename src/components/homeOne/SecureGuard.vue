<template>
  <section :class="{ 'bg-n20': isBgGray }" class="stp-30 sbp-30">
    <div class="container grid grid-cols-12 max-lg:gap-6">
      <div class="col-span-12 lg:col-span-6">
        <h5 class="heading-5 text-r300">🔐 Secure Guard</h5>
        <h3 class="heading-3 max-w-[550px] pt-4">
          Your safety is our priority — from booking to completion.
        </h3>
        <ul class="flex flex-col gap-8 pt-6 lg:pt-10">
          <li class="relative flex items-start justify-start gap-4">
            <div class="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
              <PhCurrencyDollarSimple />
              <div class="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
            </div>
            <div class="">
              <h5 class="heading-5">Secure payments</h5>
              <p class="max-w-[500px] py-3 text-n500">
                Your payment stays protected and is only released once your helper completes the task to your
                satisfaction — no advance hassles, no surprises.
              </p>
              <!-- <router-link to="" class="font-bold text-b300">
                Read More
              </router-link> -->
            </div>
          </li>
          <li class="relative flex items-start justify-start gap-4">
            <div class="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
              <PhStar />
              <div class="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
            </div>
            <div class="">
              <h5 class="heading-5">Trusted ratings and reviews</h5>
              <p class="max-w-[500px] py-3 text-n500">
                Browse genuine reviews and ratings from other users to confidently choose the right helper for your
                household needs.
              </p>
              <!-- <router-link to="" class="font-bold text-b300">
                Read More
              </router-link> -->
            </div>
          </li>
          <li class="relative flex items-start justify-start gap-4">
            <div class="flex items-center justify-center rounded-full bg-b300 p-3 text-2xl !leading-none text-white">
              <PhShieldCheck />
              <div class="linear_gradient_one absolute bottom-3 rtl:right-6 ltr:left-6 h-[50px] w-[2px]"></div>
            </div>
            <div class="">
              <h5 class="heading-5">Insurance for peace of mind</h5>
              <p class="max-w-[500px] py-3 text-n500">
                All helpers are background-verified and trained. For added peace of mind, we include basic service
                coverage and support in case of unexpected issues.
              </p>
              <!-- <router-link to="" class="font-bold text-b300"> Read More </router-link> -->
            </div>
          </li>
        </ul>
        <!--  <div class="flex justify-start pt-10">
          <LinkButton :is-yellow="true" link="/post-task" text="Post your task for free" />
        </div> -->
      </div>

      <div class="relative col-span-12 items-end justify-center lg:col-span-5 lg:col-start-8 lg:flex">
        <div class="overflow-hidden pb-4 pr-4">
          <img :src="secureGuardImg" alt="" class="relative z-10 h-full w-full overflow-hidden rounded-2xl" />
        </div>
        <div
          class="absolute bottom-0 right-0 h-[250px] w-[200px] rounded-2xl bg-n900 sm:h-[300px] lg:w-[300px] xl:h-[500px]">
        </div>

        <!--  <div
          class="box-shadow-2 absolute right-0 top-4 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 sm:top-12 sm:gap-3 sm:px-8 sm:py-6 3xl:-right-32">
          <div class="rounded-full bg-b100 p-0.5">
            <img :src="reviewImg" alt="" class="rounded-full" />
          </div>

          <div class="">
            <div class="flex items-center justify-start gap-3">
              <span class="heading-3">4.5</span>
              <PhStar weight="fill" class="text-xl !leading-none text-y600" />
            </div>
            <p class="font-medium text-n500">Over all Rating</p>
          </div>
        </div> -->

        <!-- <div
          class="box-shadow-2 absolute -left-2 bottom-20 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 font-medium sm:bottom-40 sm:gap-3 sm:px-8 sm:py-6 lg:-left-20">
          <PhThumbsUp class="text-xl !leading-none" />

          <p>Job Completed</p>
          <span class="text-n300">2m ago</span>
        </div>
        <div
          class="box-shadow-2 absolute -left-2 bottom-8 z-10 flex items-center justify-start gap-2 rounded-xl border border-b50 bg-white px-3 py-2 font-medium sm:bottom-16 sm:gap-3 sm:px-8 sm:py-6 lg:-left-20">
          <span class="text-xl !leading-none">
            <PhCheckCircle />
          </span>

          <p>Payment released</p>
          <span class="text-n300">2m ago</span>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhCheckCircle,
  PhCurrencyDollarSimple,
  PhShieldCheck,
  PhStar,
  PhThumbsUp,
} from "@phosphor-icons/vue";
import reviewImg from "/images/safe_guard_review_img.png";
import secureGuardImg from "/images/safe_guard_section_img.png";
import LinkButton from "../ui/LinkButton.vue";

defineProps<{ isBgGray?: boolean }>();
</script>

<style scoped></style>
