<template>
  <section class="stp-30 bg-n900 text-white">
    <div class="4xl:large-container max-4xl:container">
      <div class="">
        <h2 class="display-4 !font-extrabold">Our Mission</h2>
        <p class="pt-6 text-xl">
          Empowering lives through seamless services, driven by innovation and
          trust
        </p>
        <!-- <div class="stp-30 sbp-30">
          <ul
            class="flex items-center justify-start gap-2 max-sm:flex-wrap sm:justify-between md:gap-6"
          >
            <li
              v-for="{ id, name, link } in socialLinks"
              :key="id"
              class="relative z-10 flex items-center justify-center overflow-hidden rounded-full border border-eb50/60 py-3 duration-500 after:absolute after:inset-0 after:h-full after:w-full after:-translate-x-full after:rounded-full after:bg-y300 after:duration-700 hover:text-n900 hover:after:translate-x-0 max-sm:px-8 max-sm:text-sm sm:w-full"
            >
              <router-link
                :to="link"
                class="relative z-20 h-full w-full text-center"
              >
                {{ name }}
              </router-link>
            </li>
          </ul>
        </div> -->

        <div class="sbp-30">
          <h4 class="lead-text pb-8 font-semibold">Page List</h4>
          <div
            class="flex flex-wrap items-center justify-between gap-10 font-medium text-n50"
          >
            <ul class="flex min-w-[100px] flex-col gap-3 sm:gap-6">
              <li class="duration-500 hover:text-y300">
                <router-link to="/">Home V1</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/home-two">Home V2</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/home-three">Home V3</router-link>
              </li>
            </ul>
            <ul class="flex min-w-[100px] flex-col gap-3 sm:gap-6">
              <li class="duration-500 hover:text-y300">
                <router-link to="/home-four">Hove V4</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/about-us">About</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/find-workers">Find Worker</router-link>
              </li>
            </ul>
            <ul class="flex min-w-[100px] flex-col gap-3 sm:gap-6">
              <li class="duration-500 hover:text-y300">
                <router-link to="/privacy-policy">Privacy</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/blog">Blog</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/faq">FAQ</router-link>
              </li>
            </ul>
            <ul class="flex min-w-[100px] flex-col gap-3 sm:gap-6">
              <li class="duration-500 hover:text-y300">
                <router-link to="/sign-up">Sign Up</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/worker-profile">Profile</router-link>
              </li>
              <li class="duration-500 hover:text-y300">
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
            <div class="flex flex-col items-start justify-start gap-5 sm:pl-4">
              <p class="text-lg font-medium">Subscribe to our newsletter</p>
              <div class="rounded-full border-2 border-white">
                <input
                  type="text"
                  class="bg-transparent px-2 outline-none placeholder:text-white max-[400px]:w-[175px] min-[400px]:px-4 lg:px-8"
                  placeholder="Enter Email"
                />
                <button
                  class="rounded-full border-2 border-white bg-y300 px-2 py-3 font-medium text-n900 sm:px-4 sm:py-4 xl:px-8"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex items-center justify-center gap-6 border-t py-8 font-medium max-sm:flex-col"
    >
      <div class="flex items-center justify-start gap-1 sm:border-r sm:pr-6">
        <p>Designed By</p>
        <router-link to="" class="text-g200 underline"> Pixelaxis </router-link>
      </div>

      <p>Copyright @ {{ new Date().getFullYear() }} Helper Hub</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { socialLinks } from "../../../data/data";
</script>

<style scoped></style>
