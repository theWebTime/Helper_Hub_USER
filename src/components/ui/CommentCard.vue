<template>
  <div class="flex items-start justify-start gap-3">
    <div class="min-w-[40px] overflow-hidden rounded-full sm:min-w-[80px]">
      <img :src="img" class="h-full w-full" alt="" />
    </div>

    <div class="">
      <p class="heading-5">{{ name }}</p>
      <p class="pt-1 text-gray-800">
        {{ date }},{{ new Date().getFullYear() }}
      </p>
      <p class="pt-4 text-sm text-n200 sm:pt-6 sm:text-base lg:text-lg">
        {{ comment }}
      </p>
      <button
        class="flex items-center justify-start gap-3 pt-5 text-lg font-semibold"
        @click="handleClick"
      >
        <span class="text-2xl !leading-none">
          <PhShareFat weight="fill" />
        </span>
        Reply
      </button>

      <AnimateHeight :height="show ? 'auto' : 0">
        <div
          class="flex items-center justify-start gap-3 overflow-hidden duration-500 pt-2 max-[350px]:flex-col"
        >
          <input
            type="text"
            class="w-full rounded-2xl border border-n30 px-4 py-2 outline-none placeholder:text-n300"
            placeholder="Type your reply"
          />
          <button
            class="group rounded-xl bg-n900 px-4 py-2 text-2xl !leading-none text-white duration-500 hover:bg-r300 max-[350px]:w-full flex justify-center items-center"
          >
            <span class="block duration-500 group-hover:rotate-45">
              <PhPaperPlaneTilt />
            </span>
          </button>
        </div>
      </AnimateHeight>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhPaperPlaneTilt, PhShareFat } from "@phosphor-icons/vue";
import { ref } from "vue";
import AnimateHeight from "vue-animate-height";

const show = ref(false);

function handleClick() {
  show.value = !show.value;
}

defineProps<{
  img: string;
  name: string;
  date: string;
  comment: string;
}>();
</script>

<style scoped></style>
