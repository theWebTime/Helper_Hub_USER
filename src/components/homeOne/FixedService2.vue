<template>
  <section :class="{ 'bg-n20': !isBgWhite }" class="stp-30 sbp-30">
    <div class="container grid grid-cols-12 max-lg:gap-6">
      <div class="relative col-span-12 lg:col-span-6">
        <div class="overflow-hidden pb-6 pl-6">
          <img :src="contactImg" alt="" class="relative z-10 overflow-hidden rounded-2xl" />
        </div>
        <div
          class="absolute bottom-0 left-0 h-[250px] w-[200px] rounded-2xl bg-n900 sm:h-[300px] lg:w-[300px] xl:h-[600px]">
        </div>
      </div>

      <div
        class="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-col items-start justify-center max-xxl:overflow-hidden">
        <h5 class="heading-5 pb-4 text-r300">Fixed Price Service</h5>
        <ul class="flex flex-wrap items-center justify-start gap-3">
          <li class="flex items-center justify-start gap-2">
            <PhCurrencyCircleDollar class="text-xl !leading-none" />
            See your price.
          </li>
          <li class="flex items-center justify-start gap-2">
            <PhCalendarCheck class="text-xl !leading-none" />
            Book a time.
          </li>
          <li class="flex items-center justify-start gap-2">
            <PhCreditCard class="text-xl !leading-none" />
            Pay online.
          </li>
        </ul>

        <h2 class="heading-2 max-w-[400px] pt-6 font-bold sm:pt-8">
          How does Helper Hub's Fixed Price Service work?
        </h2>
        <p class="pt-4 font-medium text-n500">
          With Helper Hub, you always know what you’re paying for — no hidden fees, no surprises. Just select your
          service, check the fixed price upfront, choose your preferred time slot, and confirm your booking.
        </p>
        <p class="pb-6 pt-4 font-medium text-n800 sm:pb-10 sm:pt-8">
          Pay securely online and let our trusted professionals do the rest!
        </p>
        <div class="">
          <LinkButton link="/contact" text="Contact Now" :is-yellow="true" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhCalendarCheck,
  PhCreditCard,
  PhCurrencyCircleDollar,
} from "@phosphor-icons/vue";
import LinkButton from "../ui/LinkButton.vue";
import contactImg from "/images/fixed_price_service.jpg";

defineProps<{ isBgWhite?: boolean }>();
</script>

<style scoped></style>
