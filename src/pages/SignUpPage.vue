<template>
  <section class="relative overflow-hidden">
    <div
      class="absolute -bottom-40 rtl:-right-20 ltr:-left-20 size-[550px] rounded-full bg-eb100/20 max-lg:hidden"
    ></div>

    <div
      class="absolute -top-40 rtl:right-32 ltr:left-32 h-[600px] w-[550px] rounded-full bg-r50/30 max-lg:hidden"
    ></div>

    <div
      class="absolute -bottom-60 rtl:-left-40 ltr:-right-40 -z-10 size-[500px] rounded-full bg-eb50/20 max-lg:hidden"
    ></div>

    <div class="flex h-full items-center justify-start max-lg:justify-center">
      <LeftSideSlider />
      <div
        class="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 max-sm:pt-32 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40"
      >
        <div class="">
          <router-link to="/">
            <img :src="logo" alt="" />
          </router-link>
        </div>

        <div class="w-full" v-if="loginStep === 1">
          <div class="flex items-center justify-start pt-8">
            <p class="heading-5">Welcome to Servibe</p>
            <img :src="icon2" alt="" />
          </div>
          <form class="flex w-full flex-col pt-6">
            <div class="flex flex-col gap-6">
              <div
                class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3"
              >
                <span class="text-2xl !leading-none">
                  <PhUser />
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  class="w-full text-sm text-n300 outline-none"
                />
              </div>
              <div
                class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3"
              >
                <span class="text-2xl !leading-none">
                  <PhEnvelopeSimple />
                </span>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  class="w-full text-sm text-n300 outline-none"
                />
              </div>
              <div
                class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3"
              >
                <span class="text-2xl !leading-none">
                  <PhLock />
                </span>
                <input
                  type="password"
                  placeholder="Enter Your Email"
                  class="w-full text-sm text-n300 outline-none"
                />
              </div>
            </div>
          </form>
        </div>

        <div class="w-full" v-if="loginStep === 2">
          <div class="flex items-center justify-start pt-8">
            <p class="heading-5">Welcome to Servibe</p>
            <img :src="icon2" alt="" />
          </div>

          <form class="flex w-full flex-col pt-6">
            <div class="flex flex-col gap-6">
              <div
                class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3"
              >
                <span class="text-2xl !leading-none">
                  <PhUser />
                </span>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  class="w-full text-sm text-n300 outline-none"
                />
              </div>
              <div class="flex items-center justify-start gap-3">
                <input type="checkbox" />
                <p class="text-sm text-n300">I'm hiring as an indiviual</p>
              </div>
            </div>
          </form>
        </div>

        <form v-if="loginStep === 3" class="flex w-full flex-col pt-6">
          <div class="flex flex-col gap-6">
            <div
              class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3"
            >
              <span class="text-2xl !leading-none">
                <PhBriefcase />
              </span>
              <input
                type="text"
                placeholder="Professional Title"
                class="w-full text-sm text-n300 outline-none"
              />
            </div>

            <div
              class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3"
            >
              <span class="text-2xl !leading-none">
                <PhMapPin />
              </span>
              <input
                type="text"
                placeholder="Location"
                class="w-full text-sm text-n300 outline-none"
              />
            </div>
            <div
              class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3"
            >
              <span class="text-2xl !leading-none">
                <PhLinkedinLogo />
              </span>
              <input
                type="text"
                placeholder="Linkedin URL"
                class="w-full text-sm text-n300 outline-none"
              />
            </div>
            <div class="flex items-center justify-start gap-3">
              <input type="checkbox" />
              <p class="text-sm text-n300">I don’t have a Linkedln account</p>
            </div>
            <div class="">
              <p class="pb-3 text-sm text-n300">
                Add a photo to help build connection and trust.
              </p>
              <div
                class="flex flex-col items-center justify-center rounded-3xl border border-b50 bg-n10 px-3 py-10"
              >
                <span class="text-6xl !leading-none">
                  <PhImage />
                </span>
                <p class="pt-3 text-sm font-medium">Upload profile photo</p>
              </div>
            </div>
          </div>
        </form>

        <div class="w-full">
          <router-link
            to="/contact"
            class="block py-3 text-end text-sm font-medium text-n300"
          >
            Forgot Password?
          </router-link>

          <button
            v-if="loginStep < 3"
            @click="loginStep = loginStep + 1"
            class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
          >
            <span class="relative z-10">Continue</span>
          </button>

          <router-link
            v-if="loginStep === 3"
            to="/sign-in"
            class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
          >
            <span class="relative z-10">Sign In</span>
          </router-link>

          <div v-if="loginStep === 1">
            <div
              class="flex items-center justify-center gap-2 py-3 text-sm font-medium"
            >
              <p class="text-n300">Already have an account?</p>
              <router-link to="/sign-in" class="text-b300 underline">
                Sign in here
              </router-link>
            </div>

            <button
              class="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 bg-white py-3"
            >
              <img :src="google" alt="" />
              <span class="text-sm">Google</span>
            </button>

            <button
              class="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 bg-white py-3"
            >
              <img :src="facebook" alt="" />
              <span class="text-sm">Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import facebook from "/images/facebook_icon.png";
import google from "/images/google_icon.png";
import logo from "/images/logo.png";
import icon2 from "/images/victor_icon.png";
import LeftSideSlider from "../components/authentication/LeftSideSlider.vue";
import {
  PhBriefcase,
  PhEnvelopeSimple,
  PhImage,
  PhLinkedinLogo,
  PhLock,
  PhMapPin,
  PhUser,
} from "@phosphor-icons/vue";

const loginStep = ref(1);
</script>

<style scoped></style>
