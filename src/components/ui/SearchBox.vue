<template>
  <div class="relative z-20 w-full rounded-3xl border border-n20 bg-white p-4 sm:p-8">
    <form @submit.prevent="handleSearch"
      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-lg font-medium max-sm:text-sm">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 w-full">
        <!-- Location Dropdown -->
        <div ref="locationModalRef" class="relative flex items-center gap-2 w-full sm:w-auto">
          <span class="locationText cursor-pointer flex items-center" @click="toggleLocationDropdown">
            <PhMapPin class="mr-1" />
            <span>
              <span v-if="selectedLocation === null">
                <span class="max-[400px]:hidden">Select</span> Location
              </span>
              <span v-else>{{ selectedLocation }}</span>
            </span>
            <PhCaretDown class="ml-1" />
          </span>
          <div
            class="absolute rtl:right-0 ltr:left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-base shadow-lg duration-700 max-sm:text-sm sm:-left-8 sm:w-[200px] sm:py-5 max-h-[300px] overflow-y-auto overflow-x-hidden z-10"
            :class="{
              'visible scale-100 opacity-100': locationDropdownOpen,
              'invisible scale-0 opacity-0': !locationDropdownOpen,
            }">
            <button v-for="(item, idx) in city_names" @click="handleLocationItemClick(item)" :key="idx" type="button"
              class="text-left w-full font-normal text-n900 px-4 py-2 hover:bg-n30 whitespace-nowrap">
              {{ item }}
            </button>
          </div>
        </div>

        <!-- Service Dropdown -->
        <div ref="serviceModalRef" class="relative flex items-center gap-2 w-full sm:w-auto">
          <span class="serviceText cursor-pointer flex items-center" @click="toggleServiceDropdown">
            <span>
              <span v-if="selectedService === null">
                <span class="max-[400px]:hidden">Select</span> Service
              </span>
              <span v-else>{{ selectedServiceName }}</span>
            </span>
            <PhCaretDown class="ml-1" />
          </span>
          <div
            class="absolute rtl:right-0 ltr:left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-3 text-base shadow-lg duration-700 max-sm:text-sm sm:-left-8 sm:w-[200px] sm:py-5 max-h-[300px] overflow-y-auto overflow-x-hidden z-10"
            :class="{
              'visible scale-100 opacity-100': serviceDropdownOpen,
              'invisible scale-0 opacity-0': !serviceDropdownOpen,
            }">
            <div v-if="loadingServices" class="text-center py-2">Loading...</div>
            <div v-else-if="services.length === 0" class="text-center py-2">No services found.</div>
            <div v-else>
              <button v-for="item in services" :key="item.id" type="button"
                class="text-left w-full font-normal text-n900 px-4 py-2 hover:bg-n30 whitespace-nowrap"
                @click="handleServiceItemClick(item.id)">
                {{ item.name }}
              </button>
            </div>
          </div>
        </div>

        <!-- Pincode Dropdown -->
        <div ref="pincodeModalRef" class="relative flex items-center gap-2 w-full sm:w-auto">
          <span class="pincodeText cursor-pointer flex items-center" @click="togglePincodeDropdown">
            <span>
              <span v-if="selectedPincode === null">
                <span class="max-[400px]:hidden">Select</span> Pincode
              </span>
              <span v-else>{{ selectedPincodeName }}</span>
            </span>
            <PhCaretDown class="ml-1" />
          </span>
          <div
            class="absolute rtl:right-0 ltr:left-0 top-10 w-[150px] origin-top rounded-3xl border border-n30 bg-white py-2 text-base shadow-lg duration-700 max-sm:text-sm sm:-left-8 sm:w-[180px] sm:py-2 max-h-[300px] overflow-y-auto overflow-x-hidden z-10"
            :class="{
              'visible scale-100 opacity-100': pincodeDropdownOpen,
              'invisible scale-0 opacity-0': !pincodeDropdownOpen,
            }">
            <div v-if="loadingPincodes" class="text-center py-2">Loading...</div>
            <div v-else-if="pincodes.length === 0" class="text-center py-2">No pincodes found.</div>
            <div v-else>
              <button v-for="pin in pincodes" :key="pin.id" type="button"
                class="text-left w-full font-normal text-n900 px-4 py-2 hover:bg-n30 whitespace-nowrap"
                @click="handlePincodeItemClick(pin.id)">
                {{ pin.pin_code }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <button type="submit"
        class="relative flex items-center justify-center overflow-hidden rounded-full bg-b300 text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] px-8 py-3 w-full sm:w-auto">
        <span class="text-base !leading-none sm:text-xl md:hidden">
          <PhMagnifyingGlass />
        </span>
        <span class="relative z-10 max-md:hidden">Search</span>
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { PhMapPin, PhMagnifyingGlass, PhCaretDown } from "@phosphor-icons/vue";
import { onClickOutside } from "@vueuse/core";
import { useServiceStore } from "../../stores/serviceStore";
import { usePincodeStore } from "../../stores/pincodeStore";
import { useFilterStore } from "../../stores/filterStore";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
const toast = useToast();
const props = defineProps<{
  redirectOnSearch?: boolean;
}>();
const router = useRouter();

const city_names = ["Ahmedabad"];
const selectedLocation = ref<null | string>("Ahmedabad");
const locationDropdownOpen = ref(false);
const locationModalRef = ref(null);
function toggleLocationDropdown() { locationDropdownOpen.value = !locationDropdownOpen.value; }
function handleLocationItemClick(city: string) {
  selectedLocation.value = city; // Only update ref, do NOT update store here
  locationDropdownOpen.value = false;
}

const serviceStore = useServiceStore();
const services = ref<{ id: number; name: string }[]>([]);
const loadingServices = ref(false);
const selectedService = ref<null | number>(null);
const serviceDropdownOpen = ref(false);
const serviceModalRef = ref(null);
function toggleServiceDropdown() { serviceDropdownOpen.value = !serviceDropdownOpen.value; }
function handleServiceItemClick(serviceId: number) {
  selectedService.value = serviceId; // Only update ref, do NOT update store here
  serviceDropdownOpen.value = false;
}
const selectedServiceName = computed(() => {
  const found = services.value.find(s => s.id === selectedService.value);
  return found ? found.name : null;
});

const pincodeStore = usePincodeStore();
const pincodes = ref<{ id: number; pin_code: string }[]>([]);
const loadingPincodes = ref(false);
const selectedPincode = ref<null | number>(null);
const pincodeDropdownOpen = ref(false);
const pincodeModalRef = ref(null);
function togglePincodeDropdown() { pincodeDropdownOpen.value = !pincodeDropdownOpen.value; }
function handlePincodeItemClick(pinId: number) {
  selectedPincode.value = pinId; // Only update ref, do NOT update store here
  pincodeDropdownOpen.value = false;
}
const selectedPincodeName = computed(() => {
  const found = pincodes.value.find(p => p.id === selectedPincode.value);
  return found ? found.pin_code : null;
});

onMounted(async () => {
  loadingServices.value = true;
  await serviceStore.loadServices();
  services.value = serviceStore.data || [];
  loadingServices.value = false;

  // Prefill from store after services are loaded
  if (filterStore.location) selectedLocation.value = filterStore.location;
  if (filterStore.serviceId) selectedService.value = filterStore.serviceId;
  if (filterStore.pincodeId) selectedPincode.value = filterStore.pincodeId;
});

async function loadPincodes() {
  loadingPincodes.value = true;
  await pincodeStore.loadPincodes({ location: selectedLocation.value });
  pincodes.value = pincodeStore.data || [];
  loadingPincodes.value = false;
}
onMounted(loadPincodes);
watch(selectedLocation, loadPincodes);

onClickOutside(serviceModalRef, () => (serviceDropdownOpen.value = false));
onClickOutside(pincodeModalRef, () => (pincodeDropdownOpen.value = false));
onClickOutside(locationModalRef, () => (locationDropdownOpen.value = false));

const filterStore = useFilterStore();

function handleSearch() {
  // Only update store and trigger search on Search button click!
  if (!selectedService.value) return toast.error("Please select a service (required)");;
  filterStore.setFilters({
    location: selectedLocation.value,
    serviceId: selectedService.value,
    pincodeId: selectedPincode.value,
  });
  if (props.redirectOnSearch) {
    // router.push("/services"); // change as needed
    router.push({ path: "/services", query: { autoSearch: 1 } });
  }
}
</script>

<!-- <style scoped>
@media (max-width: 640px) {
  form {
    flex-direction: column;
    gap: 1.5rem;
  }
  .w-full {
    width: 100% !important;
  }
}
</style> -->