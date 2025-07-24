<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import StepOne from "../components/postTaskSteps/StepOne.vue";
import StepTwo from "../components/postTaskSteps/StepTwo.vue";
import StepThree from "../components/postTaskSteps/StepThree.vue";
import StepFour from "../components/postTaskSteps/StepFour.vue";
import stepIcon from "/images/steps_icon.png";
import logo from "/images/hh_round_header.png";
import { PhCheck, PhX } from "@phosphor-icons/vue";
import { useSubserviceStore } from "../stores/subservice";
import { useRouter } from "vue-router";

const router = useRouter();
const subserviceStore = useSubserviceStore();

onMounted(() => {
  if (!subserviceStore.selectedSubservice) {
    router.replace("/services");
  }
});

const subservice = subserviceStore.selectedSubservice;
const steps = ref(0);
const stepsName = ["Date and Time", "Details", "Location", "Payment"];

const formData = reactive({
  step1: {
    date: "",
    date_from: "",
    date_to: "",
    time: "",
  },
  step2: {}, // NEW
  step3: null,
});

// Validate current step before enabling Next
const isStepValid = computed(() => {
  if (!subservice) return false;
  if (subservice.service_id === 1) {
    return formData.step1.date && formData.step1.time;
  } else {
    return (
      formData.step1.date_from && formData.step1.date_to && formData.step1.time
    );
  }
});

const isAddressSelected = computed(() => {
  return formData.step3 !== null;
});

// function pay() {
//   console.log("Final data:", formData);
//   alert("Payment logic goes here");
// }
</script>

<template>
  <section class="sbp-30">
    <div class="4xl:large-container flex items-center justify-between pt-6 max-4xl:container">
      <router-link to="/"><img :src="logo" alt="" class="max-w-[60px] max-sm:max-w-[60px]" /></router-link>
      <router-link to="/services" class="flex items-center gap-2 text-lg font-medium duration-500 hover:text-r300">
        Cancel
        <span class="ph-bold ph-x !leading-none">
          <PhX weight="bold" />
        </span>
      </router-link>
    </div>

    <div class="stp-30 container grid grid-cols-12 gap-6">
      <div class="col-span-12 md:col-span-4 xl:col-span-3 xl:col-start-2">
        <div class="rounded-3xl border border-n30 p-4 sm:p-8">
          <ul class="flex flex-col gap-8">
            <li v-for="(item, idx) in stepsName" :key="idx" class="relative">
              <div v-if="steps === idx" class="flex items-center gap-4 rounded-full bg-b50 p-2">
                <div class="bg-b300 p-2 text-white rounded-full">
                  <PhCheck weight="bold" />
                </div>
                <p class="text-sm font-medium">{{ item }}</p>
              </div>
              <div v-else :class="{ 'text-b300': steps > idx, 'text-n300': steps < idx }"
                class="flex items-center gap-4 p-2 rounded-full">
                <div :class="{
                  'border-b300': steps > idx,
                  'border-n300': steps < idx,
                }" class="size-9 border-2 p-2 flex items-center justify-center text-sm rounded-full">
                  {{ idx + 1 }}
                </div>
                <p class="text-sm font-medium">{{ item }}</p>
              </div>
              <img v-if="stepsName.length !== idx + 1" :src="stepIcon" class="absolute -bottom-7 rtl:right-6 ltr:left-6"
                alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6">
        <div class="rounded-3xl border border-n30 p-6 sm:p-8">
          <StepOne v-if="steps === 0" v-model="formData.step1" />
          <StepTwo v-if="steps === 1" v-model="formData.step2" />
          <StepThree v-if="steps === 2" v-model="formData.step3" />
          <StepFour v-if="steps === 3" :formData="formData" :subservice="subservice" />

          <div :class="{
            'justify-between gap-6': steps > 0,
            'justify-end': steps === 0,
          }" class="stp-15 flex items-center">
            <button v-if="steps > 0" @click="steps--"
              class="w-1/2 rounded-full bg-n30 px-4 py-2 text-lg font-medium hover:text-n900">
              Back
            </button>

            <button v-if="steps < 3" @click="steps++" :disabled="(steps === 0 && !isStepValid) ||
              (steps === 2 && !isAddressSelected)
              "
              class="w-1/2 rounded-full bg-b300 px-4 py-2 text-lg font-medium text-white hover:text-n900 disabled:opacity-50 disabled:cursor-not-allowed">
              Next
            </button>
            <!-- 
            <button
              v-else
              @click="pay"
              class="w-1/2 rounded-full bg-green-600 px-4 py-2 text-lg font-medium text-white hover:text-n900"
            >
              Pay
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
