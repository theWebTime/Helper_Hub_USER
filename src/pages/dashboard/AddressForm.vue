<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
    <div class="w-[95vw] max-w-[500px] bg-white rounded-xl shadow-lg p-7 relative">
      <button class="absolute top-4 right-5 text-2xl text-n700" @click="$emit('close')">&times;</button>
      <h2 class="heading-5 mb-4">{{ mode === 'add' ? 'Add New Address' : 'Edit Address' }}</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="block pb-2 font-medium text-n100">Pin Code</label>
          <select v-model="form.pin_code_id" class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none" required>
            <option value="">Select Pin Code</option>
            <option v-for="pincode in pincodeList" :key="pincode.id" :value="pincode.id">
              {{ pincode.pin_code }}
            </option>
          </select>
          <span v-if="validationErrors.pin_code_id" class="text-xs text-red-500">{{ validationErrors.pin_code_id[0] }}</span>
        </div>
        <div class="mb-3">
          <label class="block pb-2 font-medium text-n100">Type</label>
          <select v-model="form.type" class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none" required>
            <option value="">Select</option>
            <option value="home">Home</option>
            <option value="office">Office</option>
            <option value="other">Other</option>
          </select>
          <span v-if="validationErrors.type" class="text-xs text-red-500">{{ validationErrors.type[0] }}</span>
        </div>
        <div class="mb-3">
          <label class="block pb-2 font-medium text-n100">Address</label>
          <input v-model="form.address" type="text" class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none" required />
          <span v-if="validationErrors.address" class="text-xs text-red-500">{{ validationErrors.address[0] }}</span>
        </div>
        <div class="mb-3">
          <label class="block pb-2 font-medium text-n100">Title</label>
          <input v-model="form.title" type="text" class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none" />
        </div>
        <div class="mb-3">
          <label class="block pb-2 font-medium text-n100">Name</label>
          <input v-model="form.name" type="text" class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none" />
        </div>
        <div class="mb-3">
          <label class="block pb-2 font-medium text-n100">Phone</label>
          <input v-model="form.phone" type="text" maxlength="10" class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none" />
        </div>
        <div class="mb-3">
          <label class="block pb-2 font-medium text-n100">Landmark</label>
          <input v-model="form.landmark" type="text" class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none" />
        </div>
        <div class="mb-3 flex items-center gap-2">
          <input v-model="form.is_default" type="checkbox" id="is_default" />
          <label for="is_default" class="font-medium text-n100">Set as default</label>
        </div>
        <div class="flex gap-2 mt-4">
          <button type="submit" class="flex-1 rounded-xl bg-b300 px-8 py-3 font-semibold text-white duration-200 hover:bg-b400" :disabled="loading">
            <span v-if="!loading">{{ mode === 'add' ? 'Add' : 'Update' }}</span>
            <span v-else>Saving...</span>
          </button>
          <button class="flex-1 rounded-xl bg-n20 px-8 py-3 font-semibold text-n700" type="button" @click="$emit('close')">Cancel</button>
        </div>
        <div v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import { createAddress, updateAddress, getPincodeList } from "../../api/address"

interface Props {
  initialData?: any
  mode: 'add' | 'edit'
}
const props = defineProps<Props>()
const emit = defineEmits(['close', 'saved'])

const loading = ref(false)
const error = ref('')
const validationErrors = ref<Record<string, string[]>>({})
const pincodeList = ref<{id: number, pin_code: string}[]>([])

const form = ref({
  pin_code_id: '',
  type: '',
  address: '',
  title: '',
  name: '',
  phone: '',
  landmark: '',
  is_default: false,
})

watch(() => props.initialData, () => {
  if (props.mode === 'edit' && props.initialData) {
    form.value = {
      // Ensure pin_code_id is a string, for correct <select> v-model binding
      pin_code_id: props.initialData.pin_code_id !== undefined && props.initialData.pin_code_id !== null
        ? String(props.initialData.pin_code_id)
        : '',
      type: props.initialData.type ?? '',
      address: props.initialData.address ?? '',
      title: props.initialData.title ?? '',
      name: props.initialData.name ?? '',
      phone: props.initialData.phone ?? '',
      landmark: props.initialData.landmark ?? '',
      is_default: !!props.initialData.is_default,
    }
  } else {
    form.value = { pin_code_id: '', type: '', address: '', title: '', name: '', phone: '', landmark: '', is_default: false }
  }
}, { immediate: true })

const fetchPincodeList = async () => {
  try {
    const res = await getPincodeList()
    if (res.data && res.data.success) {
      pincodeList.value = res.data.data
    }
  } catch (e) {
    // fallback: leave dropdown empty if error
  }
}

const handleSubmit = async () => {
  loading.value = true
  error.value = ''
  validationErrors.value = {}
  try {
    // Convert pin_code_id to number before sending (if your backend expects number)
    const payload = { ...form.value, pin_code_id: form.value.pin_code_id ? Number(form.value.pin_code_id) : undefined }
    if (props.mode === 'add') {
      const res = await createAddress(payload)
      if (res.data && res.data.success) {
        emit('saved')
        emit('close')
      } else {
        error.value = res.data?.message || 'Failed to add address.'
        if (res.data?.data) validationErrors.value = res.data.data
      }
    } else {
      const res = await updateAddress(props.initialData.id, payload)
      if (res.data && res.data.success) {
        emit('saved')
        emit('close')
      } else {
        error.value = res.data?.message || 'Failed to update address.'
        if (res.data?.data) validationErrors.value = res.data.data
      }
    }
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Failed to save address.'
    if (err.response?.data?.data) validationErrors.value = err.response.data.data
  } finally {
    loading.value = false
  }
}

onMounted(fetchPincodeList)
</script>