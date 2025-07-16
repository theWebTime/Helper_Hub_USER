<template>
  <section class="py-10">
    <div class="container">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-3xl font-bold text-n900">
          Our Best <span class="text-b300">Services</span>
        </h2>
        <RouterLink to="/services" class="flex items-center gap-2 text-b300 font-bold hover:text-b400">
          All Services
          <PhArrowRight weight="bold" />
        </RouterLink>
      </div>
      <RouterLink to="/services">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.id"
            class="rounded-xl bg-white shadow p-4 flex flex-col items-center">
            <img :src="getImageUrl(service.image)" alt="Service Image" class="w-40 h-40 object-cover rounded-xl mb-4" />
            <h3 class="text-lg font-semibold text-n900">{{ service.name }}</h3>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "../../api/axios";

interface Service {
  id: number;
  name: string;
  image: string;
}

const services = ref<Service[]>([]);

const baseUrl = import.meta.env.VITE_APP_BASE_URL;
function getImageUrl(image: string) {
  return image ? `${baseUrl}/images/subService/${image}` : "";
}

const fetchServices = async () => {
  try {
    const res = await api.get("random-sub-service-list");
    if (res.data && res.data.success) {
      services.value = res.data.data as Service[];
    }
  } catch (err) {
    // handle error
  }
};

onMounted(fetchServices);
</script>