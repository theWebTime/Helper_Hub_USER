<template v-if="watsapp">
    <a :href="`https://wa.me/91${watsapp || ''}`" target="_blank" rel="noopener noreferrer" class="whatsapp-float">
        <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" width="30" height="30" />
    </a>
</template>
<script setup lang="ts">
import { useSiteSettingStore } from "../../stores/siteSettingStore";

const siteSettingStore = useSiteSettingStore();
const watsapp = siteSettingStore.data?.whatsapp_number || ''
</script>
<style scoped>
.whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    background-color: #25d366;
    border-radius: 50%;
    padding: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
}

.whatsapp-float:hover {
    transform: scale(1.1);
}
</style>
