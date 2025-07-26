<template>
  <div class="space-y-6">
    <!-- Service Type -->
    <div class="text-sm font-medium text-b300">
      {{ subservice?.service_id === 2 ? 'Monthly Service' : 'One-Time Service' }}
    </div>

    <!-- Subservice Info -->
    <div class="flex flex-col md:flex-row gap-6 items-center border border-n30 rounded-2xl p-4">
      <img :src="getImageUrl(subservice?.image)" alt="Subservice Image"
        class="w-full md:w-40 h-40 object-cover rounded-xl" />
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
        <input v-model="localData.date_from" type="date" :min="today"
          class="w-full rounded-full border border-n900 px-4 py-3 outline-none" />
      </div>

      <!-- To Date (Auto calculated) -->
      <div class="col-span-6" v-if="subservice?.service_id === 2">
        <p class="pb-2 font-semibold">To Date</p>
        <input :value="localData.date_to" type="date" disabled
          class="w-full bg-gray-100 text-gray-600 rounded-full border border-n900 px-4 py-3 outline-none" />
      </div>

      <!-- One-Time Date -->
      <div class="col-span-6" v-if="subservice?.service_id === 1">
        <p class="pb-2 font-semibold">Select Date</p>
        <input v-model="localData.date" type="date" :min="today"
          class="w-full rounded-full border border-n900 px-4 py-3 outline-none" />
      </div>

      <!-- Time Selection -->
      <div class="col-span-6">
        <p class="pb-2 font-semibold">Select Time</p>
        <div class="flex gap-2">
          <!-- Time Picker -->
          <select v-model="selectedTime" @change="updateTime"
            class="flex-1 rounded-full border border-n900 px-4 py-3 outline-none">
            <option v-for="option in timeOptions" :key="option" :value="option">{{ option }}</option>
          </select>

          <!-- AM/PM Picker -->
          <select v-model="amPm" @change="updateTime"
            class="w-24 rounded-full border border-n900 px-4 py-3 outline-none">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive, ref, computed, onMounted } from 'vue'
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

// Time data
const timeOptions = Array.from({ length: 12 * 4 }, (_, i) => {
  const hour = (Math.floor(i / 4) + 1).toString().padStart(2, '0')
  const minute = ((i % 4) * 15).toString().padStart(2, '0')
  return `${hour}:${minute}`
})

const selectedTime = ref('12:00')
const amPm = ref('AM')

const localData = reactive({
  date: props.modelValue.date || today,
  date_from: props.modelValue.date_from || today,
  date_to: props.modelValue.date_to || addDays(today, 30),
  time: props.modelValue.time || '12:00', // default 24-hour format
})

onMounted(() => {
  const timeParts = props.modelValue.time?.split(':')
  if (timeParts) {
    let hr = parseInt(timeParts[0])
    const min = timeParts[1] || '00'
    amPm.value = hr >= 12 ? 'PM' : 'AM'
    if (hr === 0) hr = 12
    else if (hr > 12) hr = hr - 12
    selectedTime.value = `${hr.toString().padStart(2, '0')}:${min}`
  }
})

// Convert selected time to 24-hour format and update localData.time
function updateTime() {
  const [hourStr, minute] = selectedTime.value.split(':')
  let hour = parseInt(hourStr)
  if (amPm.value === 'PM' && hour !== 12) hour += 12
  if (amPm.value === 'AM' && hour === 12) hour = 0
  localData.time = `${hour.toString().padStart(2, '0')}:${minute}`
}

// Watch for changes
watch(
  () => localData.date_from,
  (newDateFrom) => {
    if (subservice?.service_id === 2) {
      localData.date_to = addDays(newDateFrom, 30)
    }
  }
)

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
