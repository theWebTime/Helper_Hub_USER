<template>
  <nav class="">
    <div
      :class="{
        'translate-y-0  opacity-30': showMobileMenu,
        'translate-y-[-100%] delay-500 opacity-0': !showMobileMenu,
      }"
      class="fixed rtl:right-0 ltr:left-0 top-0 z-[998] h-full w-full bg-r50 duration-700 lg:hidden"
      @click="showToggle"
    ></div>

    <div
      :class="{
        'translate-y-0 delay-500 opacity-100  visible': showMobileMenu,
        'translate-y-[100%] opacity-50 invisible': !showMobileMenu,
      }"
      class="fixed rtl:right-0 ltr:left-0 top-0 z-[999] flex h-full w-3/4 flex-col items-start justify-start gap-8 bg-r300 text-white/80 duration-700 min-[500px]:w-1/2 lg:hidden lg:gap-20"
    >
      <div
        class="fixed top-0 flex w-full items-center justify-between bg-r300 p-4 sm:p-8"
      >
        <router-link to="/">
          <img :src="logo" alt="logo" class="w-[150px]" />
        </router-link>
        <div class="cursor-pointer !text-3xl" @click="showToggle">
          <PhX />
        </div>
      </div>

      <ul
        class="flex w-full flex-col items-start gap-6 overflow-y-auto pb-10 rtl:pr-8 ltr:pl-8 pt-24 text-lg sm:text-xl lg:gap-10"
      >
        <li v-for="menu in headerMenu" :key="menu.id">
          <div
            v-if="menu.isSubmenu"
            :class="{ underline: isMenuActive(menu) }"
            class="subMenuToggle group flex flex-col items-start justify-start"
          >
            <div
              class="flex cursor-pointer items-center justify-start"
              @click="handleToggle(menu.id)"
            >
              <span class="">{{ menu.name }}</span>

              <span
                :class="{ 'rotate-[90deg]': showCollapseMenu === menu.id }"
                class="pl-1 pt-1 !text-xl duration-500"
              >
                <PhCaretRight />
              </span>
            </div>
            <AnimateHeight
              :duration="700"
              :height="showCollapseMenu === menu.id ? 'auto' : 0"
            >
              <ul
                class="flex flex-col items-start justify-start gap-2 overflow-hidden pl-4 duration-700"
              >
                <li v-for="{ id, name, link } in menu.submenu" :key="id">
                  <router-link
                    :to="link"
                    :class="{ underline: isMenuActive(menu) }"
                    class="text-base"
                    @click="showToggle"
                  >
                    <span>-</span> {{ name }}
                  </router-link>
                </li>
              </ul>
            </AnimateHeight>
          </div>

          <router-link
            v-if="!menu.isSubmenu"
            to="#"
            class="hover:text-b500 duration-300"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </ul>

      <router-link
        to="/become-tasker"
        class="rtl:mr-4 ltr:ml-4 rounded-full bg-y300 px-4 py-2 text-base font-medium text-n900"
      >
        Become A Tasker
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { PhCaretRight, PhX } from "@phosphor-icons/vue";
import { headerMenu } from "../../data/data";
import AnimateHeight from "vue-animate-height";
import logo from "/images/logo_white.png";

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
