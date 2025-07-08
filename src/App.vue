<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
// import { useLoadingStore } from "./stores/loadingStore";
// import Loading from "vue-loading-overlay"; // ✅ make sure this line is here
// import "vue-loading-overlay/dist/css/index.css"; // ✅ must include CSS

// const loadingStore = useLoadingStore();
import { onMounted } from "vue";
import { useSiteSettingStore } from "./stores/siteSettingStore";

const siteSettingStore = useSiteSettingStore();

onMounted(() => {
  if (!siteSettingStore.loaded) {
    siteSettingStore.loadSiteSetting();
  }
});
</script>

<template>
  <component :is="$route.meta.layout || DefaultLayout">
    <RouterView />
    <!-- <Loading
      v-if="loadingStore.loading"
      :active="true"
      :can-cancel="false"
      :is-full-page="true"
    /> -->
  </component>
</template>
