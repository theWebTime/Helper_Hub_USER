<template>
  <nav class="">
    <div :class="{
      'translate-y-0  opacity-30': showMobileMenu,
      'translate-y-[-100%] delay-500 opacity-0': !showMobileMenu,
    }" class="fixed rtl:right-0 ltr:left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"
      @click="showToggle"></div>

    <div :class="{
      'translate-y-0 delay-500 opacity-100  visible': showMobileMenu,
      'translate-y-[100%] opacity-50 invisible': !showMobileMenu,
    }"
      class="fixed rtl:right-0 ltr:left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-n900 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20">
      <div class="fixed top-0 flex w-full items-center justify-between bg-n900 p-4 sm:p-8">
        <router-link to="/">
          <img v-if="logo" :src="logo" alt="Helper Hub White Logo" class="max-w-[70px] max-sm:max-w-[70px]" />
          <div v-else>
            <span>Loading logo...</span>
          </div>
        </router-link>
        <div class="cursor-pointer !text-3xl" @click="showToggle">
          <PhX />
        </div>
      </div>

      <ul
        class="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 rtl:pr-8 ltr:pl-8 pt-24 text-lg sm:text-xl lg:gap-10">
        <li v-for="menu in headerMenu" :key="menu.id" class="w-full">
          <!-- Home as direct link -->
          <router-link v-if="menu.name === 'Home'" :to="menu.submenu && menu.submenu[0] ? menu.submenu[0].link : '/'"
            class="w-full flex items-center px-2 py-3 rounded-lg hover:text-b500 duration-300 font-semibold"
            :class="{ 'text-white': isMenuActive(menu) }" @click="showToggle">
            {{ menu.name }}
          </router-link>

          <!-- Accordion style for submenus (mobile) -->
          <div v-else-if="menu.isSubmenu" class="w-full">
            <div class="flex cursor-pointer items-center justify-start" @click="handleToggle(menu.id)">
              <span class="">{{ menu.name }}</span>

              <span :class="{ 'rotate-[90deg]': showCollapseMenu === menu.id }" class="pl-1 pt-1 !text-xl duration-500">
                <PhCaretRight />
              </span>
            </div>
            <transition name="fade">
              <ul v-show="showCollapseMenu === menu.id" class="w-full flex flex-col items-start gap-2 pl-4 pt-1 pb-2 ">
                <li v-for="{ id, name, link } in menu.submenu" :key="id" class="w-full">
                  <router-link :to="link" :class="{ 'text-white': isMenuActive(menu) }"
                    class="w-full text-base py-1 px-2 rounded hover:text-y200 hover:bg-b400 duration-300 font-semibold"
                    @click="showToggle">
                    {{ name }}
                  </router-link>
                </li>
              </ul>
            </transition>
          </div>

          <!-- Non-submenu direct links -->
          <router-link v-if="!menu.isSubmenu" to="#" class="hover:text-b500 duration-300">
            {{ menu.name }}
          </router-link>
        </li>

        <li>
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
        </li>
        <li class="hover:text-b500 duration-500">
          <router-link to="/sign-in" class="rounded-lg px-2 py-3">
            Sign in
          </router-link>
        </li>
        <li class="hover:text-b500 duration-500">
          <router-link to="/sign-up" class="rounded-lg px-2 py-3">
            Sign up
          </router-link>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { PhCaretRight, PhX } from "@phosphor-icons/vue";
import { headerMenu } from "../../data/data";
import AnimateHeight from "vue-animate-height";
import logo from "/images/Helper_hub_logo_r.png";

const route = useRoute();
const showCollapseMenu = ref<string | null>(null);

function handleToggle(id: string) {
  if (showCollapseMenu.value === id) {
    showCollapseMenu.value = null;
  } else {
    showCollapseMenu.value = id;
  }
}

interface MenuItem {
  id: string;
  name: string;
  isSubmenu: boolean;
  link?: string; // Link is optional for parent menu items
  submenu?: SubMenuItem[]; // Submenu is an array of SubMenuItem objects
}

interface SubMenuItem {
  id: string;
  name: string;
  link: string;
}

const isMenuActive = (menu: MenuItem) => {
  if (menu.isSubmenu && menu.submenu) {
    return menu.submenu.some(
      (submenu: SubMenuItem) => route.path === submenu.link
    );
  }
  return route.path === menu.link;
};

defineProps<{ showMobileMenu: boolean; showToggle: () => void }>();
</script>

<style scoped></style>
