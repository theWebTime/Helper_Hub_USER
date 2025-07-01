<template>
  <header class="">
    <div
      v-if="route.path === '/home-two'"
      class="absolute left-2 right-2 top-3 h-[76px] rounded-3xl bg-r50 sm:h-20 xxl:left-6 xxl:right-6 3xl:left-8 3xl:right-8"
    ></div>

    <div
      v-if="route.path === '/home-three'"
      class="absolute left-0 right-0 top-0 h-[105px] bg-r50"
    ></div>

    <div
      :class="{
        'animationOne fixed bg-white shadow-md': scrolled,
        'animationTwo absolute': !scrolled,
      }"
      class="top-0 left-0 right-0 z-50"
    >
      <div class="max-xxl:container xxl:px-25">
        <div class="text-s1 flex items-center justify-between py-6">
          <div class="flex items-center justify-start gap-3 pb-1">
            <button
              class="text-4xl !leading-none lg:hidden pt-2 text-b500"
              @click="showToggle"
            >
              <PhList weight="bold" />
            </button>
            <router-link to="/">
              <img
                :src="logo"
                alt="Servibe logo"
                class="max-w-[170px] max-sm:max-w-[150px]"
              />
            </router-link>
          </div>

          <nav class="max-lg:hidden">
            <ul
              class="flex items-center justify-center gap-2 font-medium xxl:gap-6"
            >
              <li v-for="menu in headerMenu" :key="menu.id">
                <div
                  v-if="menu.isSubmenu"
                  class="group relative cursor-pointer"
                >
                  <div
                    :class="{ 'text-b500': isMenuActive(menu) }"
                    class="subMenuTitle relative flex items-center justify-center gap-1 px-2 py-3 hover:text-b500"
                  >
                    {{ menu.name }}
                    <PhCaretDown
                      class="block pt-0.5 duration-700 group-hover:rotate-180"
                    />
                  </div>
                  <ul
                    class="group-hover:eventunset pointer-events-none invisible absolute rtl:right-0 ltl:left-0 top-12 flex w-[220px] translate-y-8 scale-75 flex-col items-start justify-start gap-3 rounded-lg bg-b300 py-6 font-medium text-white/90 opacity-0 duration-500 group-hover:visible group-hover:z-50 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <li v-for="{ id, name, link } in menu.submenu" :key="id">
                      <router-link
                        :to="link"
                        :class="{ 'text-y200': route.path === link }"
                        class="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
                      >
                        {{ name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>

          <div class="flex items-center justify-between gap-6">
            <ul
              class="flex items-center justify-start gap-2 font-medium max-sm:hidden xxl:gap-6"
            >
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
            <div class="flex items-center justify-between gap-3 font-semibold">
              <router-link
                to="/post-task"
                class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xxl:size-11 max-xxl:!leading-none xxl:px-8 xxl:py-3"
              >
                <span class="relative z-10 max-xxl:hidden">Post a Task</span>
                <PhPlus
                  weight="bold"
                  class="relative z-10 text-xl xxl:hidden"
                />
              </router-link>
              <router-link
                to="/become-tasker"
                class="relative overflow-hidden rounded-full bg-b50 px-8 py-3 text-b300 duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] max-xl:hidden"
              >
                <span class="relative z-10">Become a Tasker</span>
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
import { ref, onMounted, onUnmounted } from "vue";
import { PhCaretDown, PhList, PhPlus } from "@phosphor-icons/vue";
import { headerMenu } from "../../data/data";
import logo from "/images/logo.png";

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

import { useRoute } from "vue-router";
import MobileMenu from "./MobileMenu.vue";

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
