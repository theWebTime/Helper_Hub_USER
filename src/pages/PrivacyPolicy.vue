<template>
  <BreadCrumb2 pageName="Privacy Policy" />

  <section class="sbp-30">
    <div
      class="container -mt-40 rounded-xl border border-n30 bg-white p-4 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15"
    >
      <h2 class="heading-2 text-center">Privacy Policy</h2>
      <div v-if="privacyPolicyStore.loading" class="py-8 text-center">Loading Privacy Policy...</div>
      <div v-else-if="privacyPolicyStore.error" class="py-8 text-center text-red-500">{{ privacyPolicyStore.error }}</div>
      <div v-else class="stp-15 flex flex-col gap-8">
        <div
          v-for="item in privacyPolicyStore.data"
          :key="item.id"
          class="flex flex-col gap-3"
        >
          <h4 class="heading-4">{{ item.title }}</h4>
          <p class="text-n300" v-html="item.description"></p>
        </div>
      </div>
    </div>
  </section>
  <section class="">
    <FooterOne />
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePrivacyPolicyStore } from "../stores/privacyPolicyStore";
import BreadCrumb2 from "../components/global/BreadCrumb2.vue";
import FooterOne from "../components/global/footer/footerOne.vue";

const privacyPolicyStore = usePrivacyPolicyStore();

onMounted(() => {
  privacyPolicyStore.loadPrivacyPolicy();
});
</script>

<style scoped></style>