<template>
  <footer class="bg-n900 text-white">
    <div class="container">
      <div
        class="flex items-center justify-between gap-6 py-10 text-base font-medium max-lg:flex-col sm:text-lg lg:py-20 xl:text-xl"
      >
        <ul class="flex items-center justify-start gap-4 sm:gap-6 lg:gap-10">
          <li>
            <router-link class="duration-500 hover:text-r300" to="/">
              Home
            </router-link>
          </li>
          <li>
            <router-link class="duration-500 hover:text-r300" to="/about-us">
              About Us
            </router-link>
          </li>
          <li>
            <router-link class="duration-500 hover:text-r300" to="/faq">
              FAQ
            </router-link>
          </li>
        </ul>
        <router-link to="/index" class="">
          <img :src="whiteLogo" alt="" />
        </router-link>
        <ul class="flex items-center justify-start gap-4 sm:gap-6 lg:gap-10">
          <li>
            <router-link
              class="duration-500 hover:text-r300"
              to="/find-workers"
            >
              Find Work
            </router-link>
          </li>
          <li>
            <router-link class="duration-500 hover:text-r300" to="/blog">
              Blog
            </router-link>
          </li>
          <li>
            <router-link class="duration-500 hover:text-r300" to="/contact">
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-y border-n500">
      <div
        class="flex items-center justify-between lg:container max-xl:py-8 max-lg:flex-col max-lg:gap-6"
      >
        <div class="">
          <div
            class="display-3 xl:display-2 text-center flex justify-center items-center"
          >
            <count-up
              :end-val="25"
              :options="{ enableScrollSpy: true }"
            ></count-up
            >k
          </div>
          <p class="max-w-[250px] text-center text-base font-medium xl:text-lg">
            Customers are satisfied with our work
          </p>
        </div>
        <div
          class="border-n500 px-6 py-12 max-lg:w-full max-lg:border-y lg:border-x xl:p-20 xxl:p-30"
        >
          <div
            class="display-3 xl:display-2 text-center flex justify-center items-center"
          >
            <count-up
              :end-val="7"
              :options="{ enableScrollSpy: true }"
            ></count-up
            >k+
          </div>
          <p
            class="mx-auto max-w-[250px] text-center text-base font-medium max-lg:flex xl:text-lg"
          >
            Websites are already existing work
          </p>
        </div>
        <div class="flex flex-col items-start justify-start gap-5 sm:pl-4">
          <p class="text-lg font-medium">Subscribe to our newsletter</p>
          <div class="rounded-full border-2 border-white">
            <input
              type="text"
              class="bg-transparent px-2 outline-none placeholder:text-white max-[400px]:w-[200px] min-[400px]:px-4 lg:px-8"
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

    <div
      class="container flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col"
    >
      <div class="flex items-center justify-start gap-1">
        <p>Designed By</p>
        <router-link to="" class="text-g200 underline"> Pixelaxis </router-link>
      </div>
      <div class="flex items-center justify-center gap-5 text-2xl">
        <router-link
          v-for="{ id, icon, link } in socialLinks.slice(0, 3)"
          :to="link"
          :key="id"
        >
          <component :is="icon" />
        </router-link>
      </div>
      <p>Copyright @ {{ new Date().getFullYear() }} Servibe</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
import { socialLinks } from "../../../data/data";
import whiteLogo from "/images/logo_white.png";
</script>

<style scoped></style>
