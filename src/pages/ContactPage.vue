<template>
  <BreadCrumb2 pageName="Contact Us" />

  <section class="">
    <div
      class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15"
    >
      <div class="grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10"
        >
          <div
            class="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300"
          >
            <PhChat weight="fill" />
          </div>
          <h4 class="heading-4 pt-6">Chat to support</h4>
          <p class="pb-6 text-sm font-medium text-n300">
            Speak to our friendly team.
          </p>
          <router-link to="mailto:support@helper-hub.com" class="font-medium">
            support@helper-hub.com
          </router-link>
        </div>
        <div
          class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10"
        >
          <div
            class="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300"
          >
            <PhMapPin weight="fill" />
          </div>
          <h4 class="heading-4 pt-6">Visit us</h4>
          <p class="pb-6 text-sm font-medium text-n300">Visit our office HQ.</p>
          <router-link to="mailto:support@helper-hub.com" class="font-medium">
            View on Google Maps
          </router-link>
        </div>
        <div
          class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 md:col-span-4 lg:p-10"
        >
          <div
            class="flex items-center justify-center rounded-full bg-b300/5 p-5 text-4xl !leading-none text-b300"
          >
            <PhPhoneCall weight="fill" />
          </div>
          <h4 class="heading-4 pt-6">Contact Us</h4>
          <p class="pb-6 text-sm font-medium text-n300">
            Mon-Fri from 8am to 5pm.
          </p>
          <router-link to="mailto:support@helper-hub.com" class="font-medium">
            (239) 555-0108
          </router-link>
        </div>
      </div>

      <div class="stp-15 grid grid-cols-12 gap-6">
        <div
          class="col-span-12 flex items-center justify-center self-stretch overflow-hidden rounded-3xl md:col-span-4"
        >
          <img :src="contactImg" alt="" class="h-full rounded-3xl" />
        </div>
        <div
          class="col-span-12 rounded-3xl border border-n30 p-4 md:col-span-8 lg:p-15"
        >
          <h3 class="heading-3 sbp-15 text-center">Get in touch</h3>
          <form class="grid grid-cols-12 gap-4 font-medium sm:gap-6">
            <div
              class="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6"
            >
              <input
                type="text"
                class="outline-none placeholder:text-n100"
                placeholder="Name"
                name="user_name"
                required
              />
            </div>
            <div
              class="col-span-12 rounded-xl border border-n30 p-3 lg:col-span-6"
            >
              <input
                type="text"
                class="outline-none placeholder:text-n100"
                placeholder="Email"
                required
                name="user_email"
              />
            </div>
            <div class="col-span-12 rounded-xl border border-n30 p-3">
              <textarea
                class="min-h-[100px] w-full outline-none placeholder:text-n100"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <p class="col-span-12 hidden"></p>
            <div class="col-span-4">
              <button
                type="submit"
                class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
              >
                <span class="relative z-10">Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <section class="">
    <div class="container px-2 sm:px-4 xl:px-15">
      <FaqSection />
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhChat, PhMapPin, PhPhoneCall } from "@phosphor-icons/vue";
import BreadCrumb2 from "../components/global/BreadCrumb2.vue";
import contactImg from "/images/contact_img.png";
import FaqSection from "../components/aboutUs/FaqSection.vue";
</script>

<style scoped></style>
