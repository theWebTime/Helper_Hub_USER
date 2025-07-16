<template>
  <section class="stp-30 sbp-30 bg-n900">
    <div class="container text-white">
      <h2 class="heading-2 text-center">How does Helper Hub work?</h2>

      <div class="stp-15 grid grid-cols-12 gap-6">
        <div class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4">
          <div class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
            <span class="text-3xl !leading-none">
              <PhFile weight="bold" />
            </span>
          </div>
          <div class="max-w-[380px]">
            <h5 class="heading-5 pt-10">Tell Us What You Need</h5>
            <p class="pt-3">
              Browse through our service categories like house cleaning, kitchen help, dishwashing, or cooking. Select
              the task and provide your requirements — it only takes a minute.
            </p>
          </div>
        </div>
        <div class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4">
          <div class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
            <span class="text-3xl !leading-none">
              <PhShieldCheckered />
            </span>
          </div>
          <div class="max-w-[380px]">
            <h5 class="heading-5 pt-10">Book & Schedule Instantly</h5>
            <p class="pt-3">
              View transparent pricing, choose a time that works for you, and confirm your booking. No negotiations, no
              back-and-forth — just a few clicks and you’re done.
            </p>
          </div>
        </div>
        <div class="col-span-12 flex flex-col items-center justify-center text-center md:col-span-4">
          <div class="flex items-center justify-center rounded-full bg-white p-[14px] text-n900">
            <span class="text-3xl !leading-none">
              <PhUsersThree />
            </span>
          </div>
          <div class="max-w-[380px]">
            <h5 class="heading-5 pt-10">
              Relax While We Handle It
            </h5>
            <p class="pt-3">
              Our verified helper arrives on time, completes the job professionally, and payment is released only after
              you're 100% satisfied. It's that simple!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhFile, PhShieldCheckered, PhUsersThree } from "@phosphor-icons/vue";
</script>

<style scoped></style>
