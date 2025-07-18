<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useServiceStore } from "../stores/serviceStore";
import { usePincodeStore } from "../stores/pincodeStore";
import { useFilterStore } from "../stores/filterStore";
import { useRoute, useRouter } from "vue-router";
import BreadCrumb from "../components/ui/BreadCrumb.vue";
import Pagination from "../components/ui/Pagination.vue";
import ServiceCard from "../components/ui/ServiceCard.vue";
import axios from "axios"; // Use axios or fetch as you prefer

const filterStore = useFilterStore();
const serviceStore = useServiceStore();
const pincodeStore = usePincodeStore();
const route = useRoute();
const router = useRouter();

const selectedService = ref<number | "">("");
const selectedPincode = ref<number | "">("");
const services = ref<{ id: number; name: string }[]>([]);
const pincodes = ref<{ id: number; pin_code: string }[]>([]);
const loadingServices = ref(false);
const loadingPincodes = ref(false);

// Dynamic Subservice Data
const subServices = ref<any[]>([]);
const loadingSubServices = ref(false);

onMounted(async () => {
  // Load services
  loadingServices.value = true;
  await serviceStore.loadServices();
  services.value = serviceStore.data || [];
  loadingServices.value = false;

  // Prefill service from store if available
  if (filterStore.serviceId) selectedService.value = filterStore.serviceId;

  // Always load pincodes for Ahmedabad
  await loadPincodes();

  // Prefill pincode from store if available
  if (filterStore.pincodeId) selectedPincode.value = filterStore.pincodeId;

  if (route.query.autoSearch) {
    handleSearch();
    router.replace({ path: route.path, query: {} });
  } else {
    handleClear();
  }
});

async function loadPincodes() {
  loadingPincodes.value = true;
  await pincodeStore.loadPincodes({ location: "Ahmedabad" });
  pincodes.value = pincodeStore.data || [];
  loadingPincodes.value = false;
}

// Fetch subservices when service is selected and search is triggered
async function fetchSubServices(serviceId: number) {
  loadingSubServices.value = true;
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/subservices/by-service/${serviceId}`);
    if (res.data && res.data.success) {
      subServices.value = res.data.data;
    } else {
      subServices.value = [];
    }
  } catch (err) {
    subServices.value = [];
  }
  loadingSubServices.value = false;
}

async function handleSearch(e?: Event) {
  if (e) e.preventDefault();
  if (!selectedService.value) return alert("Please select a service (required)");
  if (!selectedPincode.value) return alert("Please select a pincode (required)");
  filterStore.setFilters({
    location: "Ahmedabad",
    serviceId: Number(selectedService.value),
    pincodeId: Number(selectedPincode.value),
  });
  await fetchSubServices(Number(selectedService.value));
}

function handleClear(e?: Event) {
  if (e) e.preventDefault();
  selectedService.value = "";
  selectedPincode.value = "";
  filterStore.setFilters({
    location: "Ahmedabad",
    serviceId: null,
    pincodeId: null,
  });
  subServices.value = [];
}

// Optional: auto-fetch subservices if a service is selected and page loads (e.g. reload with filters)
// watch(selectedService, (newVal) => {
//   if (newVal) {
//     fetchSubServices(Number(newVal));
//   } else {
//     subServices.value = [];
//   }
// });

// Moved here from the second script block
function getStartingPrice(item: any) {
  // Defensive: find first price in first types.details if exists
  if (item.types && item.types.length > 0 && item.types[0].details && item.types[0].details.length > 0) {
    return `₹${item.types[0].details[0].price}`;
  }
  return "N/A";
}
</script>

<template>
  <BreadCrumb pageName="All Services" :isSearchBoxShow="false" />

  <section class="sbp-30 stp-30">
    <div class="container grid grid-cols-12 gap-6">
      <div class="col-span-12 lg:col-span-4">
        <div class="rounded-xl border border-n30 px-6 py-8">
          <h5 class="heading-5">Filter by</h5>
          <div class="flex flex-col gap-6 pt-8">
            <!-- Location (Static: Ahmedabad) -->
            <div class="rounded-xl bg-n10 p-6">
              <p class="pb-3 text-lg font-semibold">Location</p>
              <select
                class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none bg-n10 text-n900"
                disabled
              >
                <option value="Ahmedabad" selected>Ahmedabad</option>
              </select>
            </div>
            <!-- Service Dropdown -->
            <div class="rounded-xl bg-n10 p-6">
              <p class="pb-3 text-lg font-semibold">Service</p>
              <select
                v-model="selectedService"
                class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
              >
                <option disabled value="">Select Service</option>
                <option v-for="service in services" :key="service.id" :value="service.id">
                  {{ service.name }}
                </option>
              </select>
            </div>
            <!-- Pincode Dropdown -->
            <div class="rounded-xl bg-n10 p-6">
              <p class="pb-3 text-lg font-semibold">Pincode</p>
              <select
                v-model="selectedPincode"
                class="w-full rounded-xl border border-n40 bg-transparent px-4 py-3 outline-none"
              >
                <option disabled value="">Select Pincode</option>
                <option v-for="pin in pincodes" :key="pin.id" :value="pin.id">
                  {{ pin.pin_code }}
                </option>
              </select>
            </div>
            <button
              @click="handleSearch"
              class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-2 font-medium text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
            >
              <span class="relative z-10">Search</span>
            </button>
            <button
              @click="handleClear"
              type="button"
              class="flex-1 flex items-center justify-center overflow-hidden rounded-xl border border-n40 bg-white px-4 py-2 font-medium text-n900 hover:bg-n30 duration-200"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-12 rounded-xl border border-n30 p-4 sm:p-8 lg:col-span-8">
        <div class="flex flex-col gap-4">
          <div v-if="loadingSubServices" class="text-center py-8">Loading...</div>
          <div v-else-if="subServices.length === 0" class="text-center py-8 text-n400">No subservices found.</div>
          <ServiceCard
            v-for="(item, idx) in subServices"
            :key="item.id"
            :img="item.image || '/images/default.png'"
            :name="item.name"
            :startingPrice="getStartingPrice(item)"
          />
        </div>
        <!-- <div class="container pt-8">
          <Pagination />
        </div> -->
      </div>
    </div>
  </section>
</template>