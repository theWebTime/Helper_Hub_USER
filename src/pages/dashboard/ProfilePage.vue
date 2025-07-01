<template>
  <section class="mt-[100px] pt-15">
    <div
      class="4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10"
    >
      <div class="col-span-12 flex items-center justify-between gap-4">
        <h4 class="heading-4">Profile Information</h4>
        <router-link
          to="/dashboard/edit-profile"
          class="flex items-center justify-start gap-3 text-lg font-medium text-b300"
        >
          <span class="text-2xl">
            <PhPencilSimpleLine />
          </span>
          Edit Profile
        </router-link>
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Name:</p>
        <input
          type="text"
          placeholder="Jhon Dhoe"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Area:</p>
        <input
          type="text"
          placeholder="New york"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Email:</p>
        <input
          type="text"
          placeholder="example@mail.com"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Post Code:</p>
        <input
          type="text"
          placeholder="1234"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Phone:</p>
        <input
          type="text"
          placeholder="+1234567"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Address:</p>
        <input
          type="text"
          placeholder="3517 W. Gray St. Utica, Pennsylvani"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">About:</p>
        <textarea
          placeholder="We understand that every space is unique, which is why we tailor our cleaning services to meet the specific needs and preferences of each client. Our team of experienced and trained cleaners uses industry-leading techniques, equipment, and eco-friendly products to deliver superior results while minimizing environmental impact."
          class="min-h-40 w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        ></textarea>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhPencilSimpleLine } from "@phosphor-icons/vue";
</script>

<style scoped></style>
