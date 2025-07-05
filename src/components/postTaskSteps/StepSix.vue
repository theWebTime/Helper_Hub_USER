<template>
  <div class="sbp-30 container grid grid-cols-12 pt-20">
    <div
      class="col-span-12 rounded-2xl border border-n30 p-4 sm:p-10 md:col-span-8 md:col-start-3 xxl:col-span-6 xxl:col-start-4"
    >
      <h4 class="heading-4 flex items-center justify-center gap-2">
        <PhCaretLeft weight="bold" /> Set up your account
      </h4>

      <div class="flex flex-col gap-4 pt-6 sm:gap-6 lg:pt-10">
        <div class="">
          <p class="pb-4">First name *</p>
          <input
            type="text"
            class="w-full rounded-xl bg-n30 p-3 outline-none"
          />
        </div>
        <div class="">
          <p class="pb-4">Last name *</p>
          <input
            type="text"
            class="w-full rounded-xl bg-n30 p-3 outline-none"
          />
        </div>
        <div class="">
          <p class="pb-4">Enter your home suburb *</p>
          <input
            type="text"
            class="w-full rounded-xl bg-n30 p-3 outline-none"
          />
        </div>

        <div class="">
          <p class="pb-4">What is your main goal on Helper Hub? *</p>
          <div
            class="flex w-full items-center justify-start font-medium max-sm:flex-wrap"
          >
            <button
              v-for="(item, idx) in ['Post Job', 'Earn money']"
              @click="handleClick(idx)"
              :key="idx"
              :class="{
                'bg-n900 text-white': idx === active,
                'bg-n30': idx !== active,
              }"
              class="rounded-lg px-10 py-3 duration-500 hover:bg-n900 hover:text-white lg:px-12 flex justify-center items-center gap-2 w-full"
            >
              {{ item }}
            </button>
          </div>
        </div>

        <div class="flex items-center justify-start gap-3">
          <input type="checkbox" />
          <p class="text-sm text-n300">
            I agree to receive product updates, marketing materials and special
            offers via email, SMS, and push notifications
          </p>
        </div>

        <div class="flex items-center justify-start gap-3">
          <input type="checkbox" />
          <p class="text-sm text-n300">
            I agree to the Helper Hub
            <router-link to="/terms-conditions" class="text-b300">
              Terms & Conditions
            </router-link>
            , Community Guidelines, and
            <router-link to="/privacy-policy" class="text-b300">
              Privacy Policy
            </router-link>
          </p>
        </div>
      </div>

      <div class="w-full pt-10">
        <router-link
          to="/sign-in"
          class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-2 text-lg font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
        >
          <span class="relative z-10">Complete my account</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCaretLeft } from "@phosphor-icons/vue";
import { ref } from "vue";

const active = ref(0);
function handleClick(idx: number) {
  active.value = idx;
}
</script>

<style scoped></style>
