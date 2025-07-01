<template>
  <section class="mt-[100px] pt-15">
    <div
      class="4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10"
    >
      <div class="col-span-12 flex items-start justify-between gap-4">
        <div class="">
          <h4 class="heading-4 pb-6">Add/Edit Service</h4>
          <p class="text-xl font-medium">Save Information</p>
        </div>
        <router-link
          to="/dashboard/services"
          class="text-lg font-medium text-b300"
        >
          View Service
        </router-link>
      </div>

      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Add Category*</p>
        <input
          type="text"
          placeholder="Category"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Service Category*</p>
        <input
          type="text"
          placeholder="Service Category"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Add Service title*</p>
        <input
          type="text"
          placeholder="Add Title"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>

      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Add Service Description*</p>
        <textarea
          placeholder="Type Description"
          class="min-h-40 w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        ></textarea>
      </div>

      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Upload Your Banner*</p>
        <div class="flex w-full items-center justify-center">
          <label
            htmlFor="fileUpload"
            class="flex w-full cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-b50 bg-n10 py-10 text-n300"
          >
            <span class="text-6xl">
              <PhImage />
            </span>
            <span class="font-medium">
              Drop Your Image or <span class="text-b300">Browse</span>
            </span>
          </label>
          <input type="file" class="hidden" id="fileUpload" />
        </div>
      </div>
      <div class="col-span-12">
        <button
          class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
        >
          <span class="relative z-10">Save Changes</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhImage } from "@phosphor-icons/vue";
</script>

<style scoped></style>
