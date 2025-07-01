<template>
  <section class="stp-30 sbp-30 bg-n10">
    <div class="container">
      <div class="flex items-center justify-between gap-4">
        <div class="flex flex-col">
          <h2 class="max-sm:heading-4 sm:heading-2 font-bold text-n900">
            Explore by <span class="text-b300 underline">Category</span>
          </h2>
        </div>
        <div class="">
          <router-link
            to="/services"
            class="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
          >
            Show All Services
            <span class="text-2xl !leading-none">
              <PhArrowRight weight="bold" />
            </span>
          </router-link>
        </div>
      </div>

      <div class="stp-15 grid grid-cols-12 gap-6">
        <div
          v-for="{
            id,
            name,
            desc,
            icon,
            bgColor,
            iconBgColor,
          } in exploreCategory"
          class="col-span-12 sm:col-span-6 lg:col-span-4"
          :key="id"
        >
          <div>
            <div
              :class="bgColor"
              class="flex flex-col items-center justify-center rounded-xl p-4 xl:p-8"
            >
              <div :class="iconBgColor" class="rounded-full p-5">
                <img :src="icon" class="" alt="" />
              </div>
              <h4 class="heading-3 pb-3 pt-5">{{ name }}</h4>
              <p class="pb-6 text-center font-medium text-n500 xl:pb-8">
                {{ desc }}
              </p>
              <div class="flex w-full items-center justify-between">
                <p
                  class="font-semibold max-[350px]:max-w-[100px] sm:max-md:max-w-[100px]"
                >
                  45 Services Available
                </p>
                <router-link
                  to="/services"
                  class="group relative cursor-pointer text-5xl !leading-none text-n900"
                >
                  <div
                    class="absolute right-7 top-[23px] z-10 h-0.5 rtl:w-10 ltr:w-16 bg-n900 duration-700 group-hover:w-0"
                  ></div>
                  <div
                    :class="bgColor"
                    class="absolute right-7 top-[18px] h-3 rtl:w-10 ltr:w-16 duration-700 group-hover:w-0"
                  ></div>
                  <PhArrowCircleRight weight="thin" />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowCircleRight, PhArrowRight } from "@phosphor-icons/vue";
import { exploreCategory } from "../../data/data";
</script>

<style scoped></style>
