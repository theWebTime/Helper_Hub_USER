<template>
  <div @click="toggleModal" class="relative cursor-pointer rounded-full bg-n30 p-px">
    <img :src="userImg" class="size-11 rounded-full" alt="" />
    <div :class="{
      'visible scale-100 opacity-100': modal,
      'invisible scale-0 opacity-0': !modal,
    }"
      class="absolute rtl:left-0 ltr:right-0 top-12 w-[200px] origin-top-right rounded-2xl border border-n30 bg-white py-4 duration-500">
      <ul class="flex flex-col gap-3 rtl:pr-4 ltr:pl-4">
        <li v-for="{ id, name, link } in visibleLinks" :key="id" class="font-medium duration-500 hover:text-r300">
          <router-link :to="link">{{ name }}</router-link>
        </li>
        <li v-if="logoutLink" class="font-medium duration-500 hover:text-r300 cursor-pointer"
          @click.stop="handleLogout">
          {{ logoutLink.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import userImg from "/images/review_people_1.png";
import { dashboardProfileLink } from "../../data/data";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { logout } from "../../api/auth";

const modal = ref(false);
const router = useRouter();

const toggleModal = () => {
  modal.value = !modal.value;
};

// Separate logout link
const visibleLinks = computed(() =>
  dashboardProfileLink.filter((item) => item.name !== "Logout")
);
const logoutLink = dashboardProfileLink.find((item) => item.name === "Logout");

const handleLogout = async () => {
  try {
    await logout();
  } catch (e) { }
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  router.push("/sign-in");
};
</script>