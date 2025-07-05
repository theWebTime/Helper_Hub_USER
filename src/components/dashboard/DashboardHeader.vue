<template>
  <header class="header headerAbsolute left-0 right-0 top-0 z-50 bg-white">
    <div class="4xl:large-container max-4xl:container">
      <div class="text-s1 flex items-center justify-between py-6">
        <div class="flex items-center justify-start gap-3 pb-1">
          <button
            @click="showMobileMenu = true"
            class="mobileMenuOpenButton text-3xl lg:hidden"
          >
            <PhList />
          </button>
          <router-link to="/dashboard/home">
            <img
              :src="logo"
              alt="Helper Hub logo"
              class="max-w-[110px] min-[400px]:max-sm:max-w-[150px] sm:max-w-[170px]"
            />
          </router-link>
        </div>
        <nav class="max-lg:hidden">
          <ul
            class="flex items-center justify-center gap-2 font-medium xxl:gap-6"
          >
            <li v-for="{ id, name, link } in dashboardMenu" class="" :key="id">
              <router-link
                :to="link"
                :class="{ 'text-b300': route.path === link }"
                class="rounded-full px-4 py-3 duration-500 hover:bg-b300 hover:text-white"
              >
                {{ name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="flex items-center justify-end gap-2 sm:gap-6">
          <DashboardNotificationModal />
          <DashboardProfileLinkModal />
        </div>
      </div>
    </div>

    <nav class="">
      <div
        :class="{
          'translate-y-0  opacity-30': showMobileMenu,
          'translate-y-[-100%] delay-500 opacity-0': !showMobileMenu,
        }"
        class="fixed left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"
        @click="showMobileMenu = false"
      ></div>

      <div
        :class="{
          'translate-y-0 delay-500 opacity-100  visible': showMobileMenu,
          'translate-y-[100%] opacity-50 invisible': !showMobileMenu,
        }"
        class="fixed left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-r300 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20"
      >
        <div
          class="fixed top-0 flex w-full items-center justify-between bg-r300 p-4 sm:p-8"
        >
          <router-link to="/dashboard/home">
            <img :src="logoWhite" alt="logo" class="w-[150px]" />
          </router-link>
          <button
            @click="showMobileMenu = false"
            class="cursor-pointer !text-3xl"
          >
            <PhX />
          </button>
        </div>

        <ul
          class="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 rtl:pr-8 lrt:pl-8 pt-24 text-lg sm:text-xl lg:gap-10"
        >
          <li v-for="{ id, name, link } in dashboardMenu" :key="id">
            <router-link :to="link" :class="{ underline: route.path === link }">
              {{ name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { PhList, PhX } from "@phosphor-icons/vue";
import logo from "/images/logo.png";
import logoWhite from "/images/logo_white.png";
import { dashboardMenu } from "../../data/data";
import { ref } from "vue";

import { useRoute } from "vue-router";
import DashboardNotificationModal from "../ui/DashboardNotificationModal.vue";
import DashboardProfileLinkModal from "../ui/DashboardProfileLinkModal.vue";

const route = useRoute();

const showMobileMenu = ref(false);
</script>

<style scoped></style>
