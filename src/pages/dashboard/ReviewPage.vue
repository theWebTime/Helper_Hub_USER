<template>
  <section class="mt-[100px] pt-15">
    <div
      class="4xl:large-container grid grid-cols-12 gap-6 overflow-hidden rounded-2xl bg-white p-4 max-4xl:mx-4 sm:p-10"
    >
      <div class="col-span-12 flex items-center justify-between gap-4">
        <h4 class="heading-4">Customer Reviews</h4>
        <p class="font-medium text-b300 md:text-lg">Showing 8 of 44</p>
      </div>
      <div
        v-for="{ id, review, img, name, profileId } in loginReviewData.slice(
          0,
          8
        )"
        :key="id"
        class="col-span-12 md:col-span-6"
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
            <p class="font-medium text-n500">10:01PM. April 07,2024</p>
          </div>
        </div>
      </div>

      <div class="col-span-12 flex items-center justify-center pt-8">
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhTwitterLogo } from "@phosphor-icons/vue";
import { loginReviewData } from "../../data/data";
import Pagination from "../../components/ui/Pagination.vue";
</script>

<style scoped></style>
