<template>
  <section class="stp-30 sbp-30 4xl:large-container max-4xl:container">
    <h2 class="display-4 !font-extrabold">Testimonials</h2>
    <div class="stp-15 grid grid-cols-12 gap-6">
      <div class="col-span-12 flex flex-col gap-6 md:col-span-6 lg:col-span-4">
        <div
          v-for="{ id, review, img, name, profileId } in testimonialData.slice(
            0,
            2
          )"
          class=""
          :key="id"
        >
          <div
            class="group rounded-3xl border border-n40 p-1 duration-500 hover:border-b300"
          >
            <div
              class="flex flex-col items-start justify-start gap-6 rounded-3xl border border-n40 p-4 duration-500 group-hover:border-b300 sm:p-8"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center justify-start gap-4">
                  <div class="">
                    <img :src="img" alt="" class="rounded-full" />
                  </div>
                  <div class="">
                    <p class="heading-5">{{ name }}</p>
                    <p class="font-medium text-n500">{{ profileId }}</p>
                  </div>
                </div>

                <div
                  class="text-3xl !leading-none text-n300 duration-500 group-hover:text-b300"
                >
                  <PhTwitterLogo weight="fill" />
                </div>
              </div>
              <p class="text-lg text-n400 lg:text-xl">{{ review }}</p>
              <p class="font-medium text-n500">
                10:01PM. April 07,{{ new Date().getFullYear() }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12 flex flex-col gap-6 md:col-span-6 lg:col-span-4">
        <div
          v-for="{ id, review, img, name, profileId } in testimonialData.slice(
            2,
            4
          )"
          class=""
          :key="id"
        >
          <div
            class="group rounded-3xl border border-n40 p-1 duration-500 hover:border-b300"
          >
            <div
              class="flex flex-col items-start justify-start gap-6 rounded-3xl border border-n40 p-4 duration-500 group-hover:border-b300 sm:p-8"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center justify-start gap-4">
                  <div class="">
                    <img :src="img" alt="" class="rounded-full" />
                  </div>
                  <div class="">
                    <p class="heading-5">{{ name }}</p>
                    <p class="font-medium text-n500">{{ profileId }}</p>
                  </div>
                </div>

                <div
                  class="text-3xl !leading-none text-n300 duration-500 group-hover:text-b300"
                >
                  <PhTwitterLogo weight="fill" />
                </div>
              </div>
              <p class="text-lg text-n400 lg:text-xl">{{ review }}</p>
              <p class="font-medium text-n500">
                10:01PM. April 07,{{ new Date().getFullYear() }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-span-12 flex gap-6 max-md:flex-col lg:col-span-4 lg:flex-col"
      >
        <div
          v-for="{ id, review, img, name, profileId } in testimonialData.slice(
            4,
            6
          )"
          class=""
          :key="id"
        >
          <div
            class="group rounded-3xl border border-n40 p-1 duration-500 hover:border-b300"
          >
            <div
              class="flex flex-col items-start justify-start gap-6 rounded-3xl border border-n40 p-4 duration-500 group-hover:border-b300 sm:p-8"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center justify-start gap-4">
                  <div class="">
                    <img :src="img" alt="" class="rounded-full" />
                  </div>
                  <div class="">
                    <p class="heading-5">{{ name }}</p>
                    <p class="font-medium text-n500">{{ profileId }}</p>
                  </div>
                </div>

                <div
                  class="text-3xl !leading-none text-n300 duration-500 group-hover:text-b300"
                >
                  <PhTwitterLogo weight="fill" />
                </div>
              </div>
              <p class="text-lg text-n400 lg:text-xl">{{ review }}</p>
              <p class="font-medium text-n500">
                10:01PM. April 07,{{ new Date().getFullYear() }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhTwitterLogo } from "@phosphor-icons/vue";
import { testimonialData } from "../../data/data";
</script>

<style scoped></style>
