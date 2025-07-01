<template>
  <router-link
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    :to="link"
    class="group relative flex items-center justify-start pr-12 font-semibold"
  >
    <span
      ref="oneItemRef"
      :class="{
        'bg-white': isBgWhite,
        'bg-g300': isGreen,
        'bg-b300': isBlue,
        'bg-y300': isYellow,
      }"
      class="rounded-full px-6 py-3 duration-500 group-hover:translate-x-12"
    >
      {{ text }}
    </span>
    <span
      ref="twoItemRef"
      :class="{
        'bg-white': isBgWhite,
        'bg-g300': isGreen,
        'bg-b300': isBlue,
        'bg-y300': isYellow,
      }"
      class="translate-x-0 rounded-full p-[14px] text-xl !leading-none duration-500 group-hover:rotate-45"
    >
      <PhArrowUpRight />
    </span>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PhArrowUpRight } from "@phosphor-icons/vue";

const htmlTag = document.querySelector("html") as HTMLHtmlElement | null;

const oneItemRef = ref<HTMLElement | null>(null);
const twoItemRef = ref<HTMLElement | null>(null);

const handleMouseOver = () => {
  if (oneItemRef.value && twoItemRef.value) {
    const oneWidth = oneItemRef.value.offsetWidth;
    const twoWidth = twoItemRef.value.offsetWidth;

    if (htmlTag && htmlTag.dir === "ltr") {
      oneItemRef.value.style.transform = `translateX(${twoWidth}px)`;
      twoItemRef.value.style.transform = `translateX(-${oneWidth}px)`;
    } else {
      oneItemRef.value.style.transform = `translateX(-${twoWidth}px)`;
      twoItemRef.value.style.transform = `translateX(${oneWidth}px)`;
    }
  }
};

const handleMouseOut = () => {
  if (oneItemRef.value && twoItemRef.value) {
    oneItemRef.value.style.transform = "none";
    twoItemRef.value.style.transform = "none";
  }
};

defineProps<{
  link: string;
  text: string;
  isBgWhite?: boolean;
  isGreen?: boolean;
  isBlue?: boolean;
  isYellow?: boolean;
}>();
</script>

<style scoped></style>
