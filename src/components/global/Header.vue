<template>
  <header class="">
    <div v-if="route.path === '/home-two'"
      class="absolute left-2 right-2 top-3 h-[76px] rounded-3xl bg-r50 sm:h-20 xxl:left-6 xxl:right-6 3xl:left-8 3xl:right-8">
    </div>

    <div v-if="route.path === '/home-three'" class="absolute left-0 right-0 top-0 h-[105px] bg-r50"></div>

    <div :class="{
      'animationOne fixed bg-white shadow-md': scrolled,
      'animationTwo absolute': !scrolled,
    }" class="top-0 left-0 right-0 z-50">
      <div class="max-xxl:container xxl:px-25">
        <div class="text-s1 flex items-center justify-between py-6">
          <div class="flex items-center justify-start gap-3 pb-1">
            <button class="text-4xl !leading-none lg:hidden pt-2 text-b500" @click="showToggle">
              <PhList weight="bold" />
            </button>
            <router-link to="/">
              <img v-if="logoUrl" :src="logo" alt="Helper Hub White Logo" class="max-w-[60px] max-sm:max-w-[60px]" />
              <div v-else>
                <span>Loading logo...</span>
              </div>
            </router-link>
          </div>

          <nav class="max-lg:hidden">
            <ul class="flex items-center justify-center gap-2 font-medium xxl:gap-6">
              <li v-for="menu in headerMenu" :key="menu.id">
                <!-- Only 'Home' should be a direct link, no submenu or dropdown -->
                <router-link v-if="menu.name === 'Home'"
                  :to="menu.submenu && menu.submenu[0] ? menu.submenu[0].link : '/'"
                  :class="['subMenuTitle relative flex items-center justify-center gap-1 px-2 py-3 hover:text-b500', { 'text-b500': isMenuActive(menu) }]">
                  {{ menu.name }}
                </router-link>

                <!-- For other menus, keep the dropdown submenu as before -->
                <div v-else-if="menu.isSubmenu" class="group relative cursor-pointer">
                  <div :class="{ 'text-b500': isMenuActive(menu) }"
                    class="subMenuTitle relative flex items-center justify-center gap-1 px-2 py-3 hover:text-b500">
                    {{ menu.name }}
                    <PhCaretDown class="block pt-0.5 duration-700 group-hover:rotate-180" />
                  </div>
                  <ul
                    class="group-hover:eventunset pointer-events-none invisible absolute rtl:right-0 ltl:left-0 top-12 flex w-[220px] translate-y-8 scale-75 flex-col items-start justify-start gap-3 rounded-lg bg-b300 py-6 font-medium text-white/90 opacity-0 duration-500 group-hover:visible group-hover:z-50 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                    <li v-for="{ id, name, link } in menu.submenu" :key="id">
                      <router-link :to="link" :class="{ 'text-y200': route.path === link }"
                        class="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200">
                        {{ name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>

          <!-- Other Links Section -->
          <!-- -->

          <!-- Auth Section -->
          <div class="flex items-center justify-between gap-6">
            <template v-if="!isLoggedIn">
              <ul class="flex items-center justify-start gap-2 font-medium max-sm:hidden xxl:gap-6">
                <!-- <li class="hover:text-b500 duration-500">
                  <router-link to="/services" class="
                  w-full
                  rounded-full
                  px-2 py-1
                  font-semibold
                  text-white
                  bg-gradient-to-r from-b500 via-pink-500 to-yellow-400
                  shadow
                  border border-white
                  hover:scale-105 hover:shadow-md hover:from-yellow-400 hover:to-b500
                  transition-all duration-300
                  flex items-center justify-center gap-1
                  animate-pulse
                  text-sm
                " style="animation-duration:2s;" @click="showToggle">
                    <span class="text-base">⚡</span>
                    Get maid in 15 minutes
                  </router-link>
                </li> -->
                <li class="hover:text-b500 duration-500">
                  <router-link to="/sign-up" class="rounded-lg px-2 py-3">
                    Sign up
                  </router-link>
                </li>
                <li class="hover:text-b500 duration-500">
                  <router-link to="/sign-in" class="rounded-lg px-2 py-3">
                    Sign in
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <!-- <div class="flex items-center gap-3 font-medium text-b500">
                <span class="font-semibold">{{ userName }}</span>
                <button @click="handleLogout" class="ml-2 text-lg hover:text-red-500" title="Logout">
                  <svg xmlns="http://www.w3.org/2000/svg" class="inline w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" /></svg>
                </button>
              </div> -->
              <DashboardProfileLinkModal />

            </template>
            <div class="flex items-center justify-between gap-3 font-semibold">
              <router-link to="/services" class="
                  w-full
                  rounded-full
                  px-2 py-1
                  font-semibold
                  text-white
                  bg-gradient-to-r from-b500 via-pink-500 to-yellow-400
                  shadow
                  border border-white
                  hover:scale-105 hover:shadow-md hover:from-yellow-400 hover:to-b500
                  transition-all duration-300
                  flex items-center justify-center gap-1
                  animate-pulse
                  text-sm
                " style="animation-duration:2s;" @click="showToggle">
                <span class="text-base">⚡</span>
                Get maid in 15 minutes
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </div>

    <MobileMenu :showToggle="showToggle" :showMobileMenu="showMobileMenu" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { PhCaretDown, PhList, PhPlus } from "@phosphor-icons/vue";
import { headerMenu } from "../../data/data";
import logo from "/images/hh_round_header.png";
import DashboardProfileLinkModal from "../ui/DashboardProfileLinkModal.vue";

import { useSiteSettingStore } from "../../stores/siteSettingStore";

const siteSettingStore = useSiteSettingStore();
const baseUrl = import.meta.env.VITE_APP_BASE_URL;

const logoUrl = computed(() => {
  const logo = siteSettingStore.data?.logo;
  return logo ? `${baseUrl}/images/siteSetting/${logo}` : "";
});

onMounted(async () => {
  if (!siteSettingStore.loaded) {
    await siteSettingStore.loadSiteSetting();
  }
});

interface MenuItem {
  id: string;
  name: string;
  isSubmenu: boolean;
  link?: string; // router-link is optional for parent menu items
  submenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
}

interface SubMenuItem {
  id: string;
  name: string;
  link: string;
}

import { useRoute, useRouter } from "vue-router";
import MobileMenu from "./MobileMenu.vue";
import { logout } from "../../api/auth";


// Auth Logic
const isLoggedIn = computed(() => !!localStorage.getItem("token"));
const userName = computed(() => localStorage.getItem("userName") || "User");

const router = useRouter();

const handleLogout = async () => {
  try {
    // Call your logout API here, using Axios instance
    await logout(); // Token is auto-sent via interceptor
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    router.push("/sign-in");
  } catch {
    // Fallback even if API fails
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    router.push("/sign-in");
  }
};

// Scroll Detection
const showMobileMenu = ref(false);
const scrolled = ref(false);
const route = useRoute();

const handleScroll = () => {
  if (window.scrollY > 100) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const showToggle = () => {
  showMobileMenu.value = !showMobileMenu.value;
};

const isMenuActive = (menu: MenuItem) => {
  if (menu.isSubmenu && menu.submenu) {
    return menu.submenu.some(
      (submenu: SubMenuItem) => route.path === submenu.link
    );
  }
  return route.path === menu.link;
};
</script>

<style scoped></style>
