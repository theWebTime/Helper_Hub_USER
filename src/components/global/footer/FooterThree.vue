<template>
  <section class="stp-15 overflow-hidden bg-n900">
    <div class="4xl:large-container text-white max-4xl:mx-4">
      <div
        class="sbp-15 flex items-center justify-between border-b border-n500 max-xl:flex-col max-xl:gap-6"
      >
        <div
          class="flex w-full items-center justify-start gap-4 max-xl:justify-center"
        >
          <img
            :src="bigArrow"
            alt=""
            class="max-xxl:w-[80px] max-md:w-[60px]"
          />
          <p
            class="text-xl font-medium sm:text-3xl md:text-5xl 3xl:text-[72px]"
          >
            Let’s work together
          </p>
        </div>

        <div class="flex items-center justify-between gap-6 max-sm:flex-col">
          <div class="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
            <p
              class="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10"
            >
              Looking to hire an Service?
            </p>
            <div class="flex items-center justify-center font-bold text-n900">
              <LinkButton
                link="/contact"
                text="LETS'S TALK"
                :is-yellow="true"
              />
            </div>
          </div>
          <div class="rounded-[32px] border px-6 py-10 xxl:px-12 xxl:py-20">
            <p
              class="heading-3 pb-6 text-center font-bold md:w-[285px] xxl:pb-10"
            >
              Looking to hire an Service?
            </p>
            <div class="flex items-center justify-center font-bold text-n900">
              <LinkButton link="/sing-up" text="JOIN US" :is-yellow="true" />
            </div>
          </div>
        </div>
      </div>

      <div
        class="stp-15 flex items-center justify-between gap-6 max-md:flex-col max-[450px]:items-start"
      >
        <div
          class="flex items-center justify-start gap-6 font-medium max-sm:items-start max-[450px]:flex-col"
        >
          <p class="max-w-[200px] text-start lg:max-w-[250px]">
            Valentin, Street Road 27, New York. USA - 752252
          </p>
          <div class="lg:pl-15">
            <p class="font-semibold">(629) 555-0129</p>
            <p>example@mail.com</p>
          </div>
        </div>

        <div class="flex items-center justify-center gap-3 text-2xl">
          <router-link
            v-for="{ id, icon, link } in socialLinks.slice(0, 4)"
            :key="id"
            class="group relative"
            :to="link"
          >
            <span
              class="flex items-center justify-center rounded-full border border-n500 p-4 duration-500 hover:border-v200 hover:text-v200"
            >
              <component :is="icon" />
            </span>

            <div
              class="absolute right-1/2 top-1 h-0 w-px bg-v200 duration-500 group-hover:h-2"
            ></div>
            <div
              class="absolute right-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
            ></div>

            <div
              class="absolute bottom-1 right-1/2 h-0 w-px bg-v200 duration-500 group-hover:h-2"
            ></div>

            <div
              class="absolute left-1 top-1/2 h-px w-0 bg-v200 duration-500 group-hover:w-2"
            ></div>
          </router-link>
        </div>
      </div>

      <h1
        class="text-center text-[430px] font-bold leading-none max-4xl:text-[400px] max-3xl:text-[350px] max-xxl:text-[300px] max-xl:text-[230px] max-lg:text-[180px] max-md:text-[130px] max-sm:text-[70px]"
      >
        Servibe
      </h1>

      <div class="border-t border-n500">
        <div
          class="container flex items-center justify-between gap-6 py-8 font-medium max-md:flex-col"
        >
          <div class="flex items-center justify-start gap-1">
            <p>Designed By</p>
            <router-link to="" class="text-g200 underline">
              Pixelaxis
            </router-link>
          </div>

          <p>Copyright @ {{ new Date().getFullYear() }} Servibe</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { socialLinks } from "../../../data/data";
import LinkButton from "../../ui/LinkButton.vue";
import bigArrow from "/images/big_arrow.png";
</script>

<style scoped></style>
