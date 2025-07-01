<template>
  <div class="overflow-hidden">
    <div
      dir="ltr"
      :class="{ 'right-2': show, ' -right-24': !show }"
      class="flex justify-start items-center fixed gap-2 top-1/2 cursor-pointer z-50 duration-500"
    >
      <div class="text-3xl circle" @click="show = !show">
        <PhGear weight="fill" />
      </div>
      <div class="flex justify-start items-center rounded-xl overflow-hidden">
        <button
          v-for="(item, idx) in ['LTR', 'RTL']"
          :key="idx"
          :class="{
            'bg-b300 p-2 text-white': toggle === item,
            'bg-white p-2': toggle !== item,
          }"
          @click="toggleRtl(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhGear } from "@phosphor-icons/vue";
import { ref } from "vue";

const show = ref(false);
const toggle = ref("LTR");

function toggleRtl(item: string) {
  const htmlTag = document.querySelector("html") as HTMLHtmlElement | null;

  if (htmlTag && item === "RTL") {
    htmlTag.dir = "rtl";
    toggle.value = item;
  } else if (htmlTag) {
    htmlTag.dir = "ltr";
    toggle.value = item;
  }
}
</script>

<style scoped></style>
