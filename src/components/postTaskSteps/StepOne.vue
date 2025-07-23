<template>
  <div class="space-y-6">
    <!-- Service Type -->
    <div class="text-sm font-medium text-b300">
      {{ subservice?.service_id === 2 ? 'Monthly Service' : 'One-Time Service' }}
    </div>

    <!-- Subservice Info -->
    <div class="flex flex-col md:flex-row gap-6 items-center border border-n30 rounded-2xl p-4">
      <img
        :src="getImageUrl(subservice?.image)"
        alt="Subservice Image"
        class="w-full md:w-40 h-40 object-cover rounded-xl"
      />
      <div class="flex-1">
        <h3 class="text-xl font-semibold">{{ subservice?.name }}</h3>
        <p class="text-sm text-n500 mt-2">{{ subservice?.description }}</p>
      </div>
    </div>

    <!-- Date & Time Selection -->
    <div class="grid grid-cols-12 gap-4">
      <!-- From Date (Monthly) -->
      <div class="col-span-6" v-if="subservice?.service_id === 2">
        <p class="pb-2 font-semibold">From Date</p>
        <input
          v-model="localData.date_from"
          type="date"
          :min="today"
          class="w-full rounded-full border border-n900 px-4 py-3 outline-none"
        />
      </div>

      <!-- To Date (Auto calculated, disabled) -->
      <div class="col-span-6" v-if="subservice?.service_id === 2">
        <p class="pb-2 font-semibold">To Date</p>
        <input
          :value="localData.date_to"
          type="date"
          disabled
          class="w-full bg-gray-100 text-gray-600 rounded-full border border-n900 px-4 py-3 outline-none"
        />
      </div>

      <!-- One-Time Date -->
      <div class="col-span-6" v-if="subservice?.service_id === 1">
        <p class="pb-2 font-semibold">Select Date</p>
        <input
          v-model="localData.date"
          type="date"
          :min="today"
          class="w-full rounded-full border border-n900 px-4 py-3 outline-none"
        />
      </div>

      <!-- Time -->
      <div class="col-span-6">
        <p class="pb-2 font-semibold">Select Time</p>
        <input
          v-model="localData.time"
          type="time"
          class="w-full rounded-full border border-n900 px-4 py-3 outline-none"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue'
import { useSubserviceStore } from '../../stores/subservice'

const props = defineProps<{
  modelValue: {
    date: string
    date_from?: string
    date_to?: string
    time: string
  }
}>()

const emit = defineEmits(['update:modelValue'])

const subserviceStore = useSubserviceStore()
const subservice = subserviceStore.selectedSubservice

const today = new Date().toISOString().split('T')[0]

function addDays(dateStr: string, days: number) {
  const date = new Date(dateStr)
  date.setDate(date.getDate() + days)
  return date.toISOString().split('T')[0]
}

const localData = reactive({
  date: props.modelValue.date || today,
  date_from: props.modelValue.date_from || today,
  date_to: props.modelValue.date_to || addDays(today, 30),
  time: props.modelValue.time || '',
})

// Automatically update date_to when date_from changes
watch(
  () => localData.date_from,
  (newDateFrom) => {
    if (subservice?.service_id === 2) {
      localData.date_to = addDays(newDateFrom, 30)
    }
  }
)

// Sync with parent
watch(
  () => ({ ...localData }),
  (val) => emit('update:modelValue', val),
  { deep: true }
)

const baseUrl = import.meta.env.VITE_APP_BASE_URL
function getImageUrl(img: string) {
  return img ? `${baseUrl}/images/subService/${img}` : ''
}
</script>
