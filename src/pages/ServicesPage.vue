<template>
  <BreadCrumb pageName="All Services" :isSearchBoxShow="true" />

  <section class="sbp-30 stp-30">
    <div class="container grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-4">
        <div class="rounded-xl border border-n30 px-6 py-8">
          <h5 class="heading-5">Filter by</h5>
          <div class="flex flex-col gap-6 pt-8">
            <div class="rounded-xl bg-n10 p-6">
              <p class="pb-3 text-lg font-semibold">Keyword</p>
              <input
                type="text"
                class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
                placeholder="What are you looking for?"
              />
            </div>
            <div class="rounded-xl bg-n10 p-6">
              <p class="pb-3 text-lg font-semibold">Location</p>
              <input
                type="text"
                class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
                placeholder="Location"
              />
            </div>
            <div class="rounded-xl bg-n10 p-6">
              <p class="pb-3 text-lg font-semibold">Categories</p>
              <input
                type="text"
                class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
                placeholder="Categories"
              />
            </div>
            <button
              class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
            >
              <span class="relative z-10">Search</span>
            </button>
          </div>
        </div>
      </div>

      <div
        class="col-span-12 rounded-xl border border-n30 p-4 sm:p-8 lg:col-span-8"
      >
        <div class="flex flex-col gap-4">
          <ServiceCard
            v-for="(item, idx) in workerServices"
            v-bind="item"
            :key="idx"
          />
        </div>

        <div class="container pt-8">
          <Pagination />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BreadCrumb from "../components/ui/BreadCrumb.vue";
import Pagination from "../components/ui/Pagination.vue";
import ServiceCard from "../components/ui/ServiceCard.vue";
import { workerServices } from "../data/data";
</script>

<style scoped></style>
