<template>
  <header class="header headerAbsolute left-0 right-0 top-0 z-50">
    <div class="max-xxl:container xxl:px-25">
      <div class="text-s1 flex items-center justify-between py-6">
        <div class="flex items-center justify-start gap-3 pb-1">
          <div class="relative">
            <button
              @click="handleClick"
              class="mobileMenuOpenButton text-3xl md:hidden"
            >
              <PhList />
            </button>
            <div
              :class="{
                'visible scale-100 opacity-100': showNav,
                'invisible scale-0 opacity-0': !showNav,
              }"
              class="absolute top-10 rtl:right-0 lrt:left-0 rounded-xl bg-white z-[998] p-4 duration-500 rtl:origin-top-right ltr:origin-top-left"
            >
              <ul class="flex flex-col gap-2">
                <li class="hover:text-r300 duration-500">
                  <router-link to="#">Services</router-link>
                </li>
                <li class="hover:text-r300 duration-500">
                  <router-link to="#">About</router-link>
                </li>
                <li class="hover:text-r300 duration-500">
                  <router-link to="#">FAQ</router-link>
                </li>
              </ul>
            </div>
          </div>
          <router-link to="">
            <h2 class="heading-2">Albert Flores</h2>
          </router-link>
        </div>

        <div class="flex items-center justify-between gap-6">
          <ul
            class="flex items-center justify-start gap-2 font-medium max-md:hidden xxl:gap-6"
          >
            <li class="">
              <router-link
                to="#services"
                class="rounded-lg px-2 py-3 duration-700"
              >
                SERVICES
              </router-link>
            </li>
            <li class="">
              <router-link
                to="#about"
                class="rounded-lg px-2 py-3 duration-700"
              >
                ABOUT
              </router-link>
            </li>
            <li class="">
              <router-link to="#faq" class="rounded-lg px-2 py-3 duration-700">
                FAQ
              </router-link>
            </li>
          </ul>
          <div class="flex items-center justify-between gap-3 font-medium">
            <router-link
              to="/hire-me"
              class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:size-11 max-xxl:!leading-none xxl:px-8 xxl:py-3"
            >
              <span class="relative z-10 max-xxl:hidden"> WORK WITH ME </span>
              <span class="text-xl xxl:hidden">
                <PhPlus weight="bold" />
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <nav class="">
      <div
        class="mobileMenuBg mobileMenuBgClose fixed left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"
      ></div>

      <div
        class="mobileMenu mobileMenuClose fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-r300 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20"
      >
        <div
          class="fixed top-0 flex w-full items-center justify-between bg-r300 p-4 sm:p-8"
        >
          <router-link to="/">
            <h3 class="heading-3">Albert Flores</h3>
          </router-link>
          <span class="cursor-pointer !text-3xl">
            <PhX />
          </span>
        </div>

        <ul
          class="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 pl-8 pt-24 text-lg sm:text-xl lg:gap-10"
        >
          <li>
            <router-link
              to="#services"
              class="menu-hover hover:after:border-p1"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link to="#about" class="menu-hover hover:after:border-p1">
              About
            </router-link>
          </li>
          <li>
            <router-link to="#faq" class="menu-hover hover:after:border-p1">
              FAQ
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { PhList, PhPlus, PhX } from "@phosphor-icons/vue";
import { ref } from "vue";

const showNav = ref(false);

function handleClick() {
  showNav.value = !showNav.value;
}
</script>

<style scoped></style>
