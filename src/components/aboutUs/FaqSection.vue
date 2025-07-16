<template>
  <section id="faq" class="stp-30 sbp-30">
    <div class="container grid grid-cols-12 gap-6 xl:gap-10">
      <div class="col-span-12 rounded-3xl border border-n40 p-4 sm:px-10 sm:py-9 lg:col-span-5">
        <p class="heading-6 text-b300">FAQ</p>
        <h2 class="heading-2 pb-4 pt-3 xl:pb-6">
          Your questions <span class="text-b300">answered.</span>
        </h2>
        <p class="pb-6 font-medium text-n400 xl:pb-10">
          Let’s do our best to answer your most frequently asked questions.
        </p>
        <div class="mb-6 rounded-3xl border border-n40 p-4 sm:p-6">
          <div class="flex items-center justify-start gap-3">
            <div class="flex items-center justify-center rounded-2xl border border-n40 p-3 text-b300 sm:p-5">
              <span class="text-4xl">
                <PhQuestion weight="fill" />
              </span>
            </div>
            <div class="">
              <h5 class="heading-5">Still have questions?</h5>
              <p class="pt-3">
                Can’t find the answer you’re looking for?Please chat to our
                friendly team!
              </p>
            </div>
          </div>
        </div>

        <router-link to="/contact"
          class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8">
          <span class="relative z-10">Gen In Touch</span>
        </router-link>
      </div>

      <div
        class="col-span-12 w-full lg:col-span-7 flex flex-col gap-6 rounded-3xl border border-n40 p-4 sm:p-6 md:p-8 lg:p-10">
        <!-- Loading -->
        <div v-if="faqStore.loading" class="py-8 text-center text-base sm:text-lg">
          Loading FAQ...
        </div>

        <!-- Error -->
        <div v-else-if="faqStore.error" class="py-8 text-center text-red-500 text-base sm:text-lg">
          {{ faqStore.error }}
        </div>

        <!-- FAQ List -->
        <div v-else class="w-full space-y-4">
          <div v-for="({ id, question, answer }, idx) in faqStore.data" :key="id"
            @click="handleClick(idx === show ? NaN : idx)"
            class="cursor-pointer w-full rounded-2xl border border-n40 bg-white px-4 py-4 sm:px-6 sm:py-5 hover:shadow-md transition duration-300">
            <div class="flex items-center justify-between gap-4">
              <p class="text-sm font-medium sm:text-base md:text-lg text-gray-800">
                {{ question }}
              </p>
              <div :class="{
                'rotate-90': show === idx,
                'rotate-0': show !== idx
              }" class="flex items-center justify-center rounded-full bg-b300 p-2 text-white text-xl duration-300">
                <PhCaretRight />
              </div>
            </div>

            <AnimateHeight :height="show === idx ? 'auto' : 0" class="overflow-hidden transition-all duration-300">
              <p class="pt-3 text-sm sm:text-base text-gray-500">
                {{ answer }}
              </p>
            </AnimateHeight>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { PhCaretRight, PhQuestion } from "@phosphor-icons/vue";
import { ref, onMounted } from "vue";
import AnimateHeight from "vue-animate-height";
import { useFaqStore } from "../../stores/faqStore";

const faqStore = useFaqStore();
const show = ref(NaN);

function handleClick(idx: number) {
  show.value = idx;
}

onMounted(() => {
  faqStore.loadFaq();
});
</script>

<style scoped></style>
