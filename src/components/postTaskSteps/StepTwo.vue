<template>
  <div>
    <!-- Step Title -->
    <h4 class="heading-4">Provide more details</h4>

    <!-- Dynamic Rendering (existing logic) -->
    <div v-for="type in selectedSubservice.types" :key="type.slug" class="pt-6">
      <p class="pb-4 font-medium text-n300">{{ type.name }}*</p>
      <div class="flex flex-wrap items-center justify-start font-medium gap-3">
        <button
          v-for="detail in type.details"
          :key="detail.id"
          @click="formData[type.slug] = detail.id"
          :class="[
            'rounded-lg px-8 py-3 duration-300 flex flex-col items-center justify-center border min-w-[100px]',
            formData[type.slug] === detail.id
              ? 'bg-n900 text-white border-n900'
              : 'bg-n30 border-transparent hover:bg-n900 hover:text-white'
          ]"
        >
          <span class="text-base leading-tight">{{ detail.label }}</span>
          <span
            :class="[
              'text-sm',
              formData[type.slug] === detail.id ? 'text-white' : 'text-n500'
            ]"
          >
            ₹{{ detail.price }}
          </span>
        </button>
      </div>
    </div>

    <!-- ✅ New Field: Is Dog -->
    <div class="pt-6">
      <p class="pb-4 font-medium text-n300">Is there a dog at the property?*</p>
      <div class="flex gap-4">
        <button
          @click="formData.is_dog = true"
          :class="[
            'px-6 py-2 rounded-md border',
            formData.is_dog === true
              ? 'bg-n900 text-white border-n900'
              : 'bg-n30 hover:bg-n900 hover:text-white'
          ]"
        >Yes</button>
        <button
          @click="formData.is_dog = false"
          :class="[
            'px-6 py-2 rounded-md border',
            formData.is_dog === false
              ? 'bg-n900 text-white border-n900'
              : 'bg-n30 hover:bg-n900 hover:text-white'
          ]"
        >No</button>
      </div>
    </div>

    <!-- ✅ New Field: Special Instructions -->
    <div class="pt-6">
      <p class="pb-2 font-medium text-n300">Special Instructions (optional)</p>
      <textarea
        v-model="formData.special_instruction"
        class="w-full p-3 border rounded-md resize-none"
        rows="4"
        placeholder="Mention any specific requests, notes, or location hints"
      ></textarea>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useSubserviceStore } from '../../stores/subservice'

const props = defineProps<{
  modelValue: Record<string, any>
}>()

const emit = defineEmits(['update:modelValue'])

const subserviceStore = useSubserviceStore()
const selectedSubservice = subserviceStore.selectedSubservice

// Default data structure with new fields
const formData = ref<Record<string, any>>({
  is_dog: false,                   // ✅ default value
  special_instruction: '',        // ✅ default value
  ...props.modelValue             // merge incoming data
})

// Handle default selections for types
watchEffect(() => {
  if (!selectedSubservice?.types) return
  selectedSubservice.types.forEach(type => {
    const first = type.details[0]
    if (first && !(type.slug in formData.value)) {
      formData.value[type.slug] = first.id
    }
  })
})

// Sync with parent
watchEffect(() => {
  emit('update:modelValue', formData.value)
})
</script>
