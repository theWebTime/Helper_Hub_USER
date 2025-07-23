<template>
  <div>
    <h4 class="heading-4">Tell us where</h4>

    <!-- Select Address -->
    <div class="pt-6">
      <p class="pb-4 font-medium text-n300">Select an address*</p>

      <div v-if="addresses.length > 0" class="space-y-4">
        <div
          v-for="(address, idx) in addresses"
          :key="address.id"
          :class="[ 
            'rounded-2xl border p-4 cursor-pointer transition-all duration-300',
            selectedAddressId === address.id ? 'border-b300 bg-b50' : 'border-n30'
          ]"
          @click="selectedAddressId = address.id"
        >
          <div class="flex items-center justify-between">
            <div>
              <p class="font-semibold">{{ address.title }}</p>
              <p class="text-sm text-n500">{{ address.address }}, {{ address.landmark }}</p>
              <p class="text-sm text-n500">{{ address.pin_code }} - {{ address.type }}</p>
            </div>
            <div v-if="selectedAddressId === address.id" class="text-b300 font-bold">
              Selected
            </div>
          </div>
        </div>
      </div>

      <p v-if="addresses.length === 0" class="text-n500">No addresses found.</p>

      <button class="mt-4 bg-b300 text-white rounded-lg px-4 py-2 font-semibold" @click="openAdd">
        + Add New Address
      </button>
    </div>

    <!-- Add Address Form -->
    <AddressForm
      v-if="showForm"
      :initial-data="formData"
      :mode="formMode"
      @close="closeForm"
      @saved="handleSaved"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { getAddresses } from "../../api/address"
import AddressForm from "../../pages/dashboard/AddressForm.vue"

const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  modelValue: number | null
}>()

const addresses = ref<any[]>([])
const selectedAddressId = ref<number | null>(props.modelValue || null)
const showForm = ref(false)
const formMode = ref<'add'|'edit'>('add')
const formData = ref<any>(null)

const fetchAddresses = async () => {
  try {
    const res = await getAddresses()
    if (res.data?.success) {
      addresses.value = res.data.data.data || []

      // Auto-select default or first
      const defaultAddress = addresses.value.find(a => a.is_default)
      selectedAddressId.value =
        defaultAddress?.id || addresses.value[0]?.id || null
    }
  } catch (err) {
    console.error("Failed to fetch addresses", err)
  }
}

const openAdd = () => {
  formMode.value = 'add'
  formData.value = null
  showForm.value = true
}

const closeForm = () => {
  showForm.value = false
  formData.value = null
}

const handleSaved = async () => {
  await fetchAddresses()
  // Select the most recently added address
  if (addresses.value.length > 0) {
    selectedAddressId.value = addresses.value[0].id
  }
}

onMounted(fetchAddresses)

// Sync selected address with parent
watch(selectedAddressId, (val) => {
  emit('update:modelValue', val)
})
</script>
