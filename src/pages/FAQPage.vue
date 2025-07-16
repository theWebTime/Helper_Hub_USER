<template>
  <BreadCrumb2 pageName="FAQ Page" />

  <section class="">
    <div
      class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:px-15"
    >
      <FaqSection />
    </div>
  </section>
  <section class="">
    <FooterOne />
  </section>
</template>

<script setup lang="ts">
import FaqSection from "../components/aboutUs/FaqSection.vue";
import BreadCrumb2 from "../components/global/BreadCrumb2.vue";
import FooterOne from "../components/global/footer/footerOne.vue";
</script>

<style scoped></style>
