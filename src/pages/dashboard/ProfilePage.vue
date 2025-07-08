<template>
  <section class="mt-[100px] pt-15">
    <div
      class="4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10"
    >
      <div class="col-span-12 flex items-center justify-between gap-4">
        <h4 class="heading-4">Profile Information</h4>
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Name:</p>
        <input
          v-model="profile.name"
          type="text"
          placeholder="Name"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
        <span v-if="validationErrors.name" class="text-xs text-red-500">{{ validationErrors.name[0] }}</span>
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Email:</p>
        <input
          v-model="profile.email"
          type="email"
          placeholder="example@mail.com"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
        <span v-if="validationErrors.email" class="text-xs text-red-500">{{ validationErrors.email[0] }}</span>
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Mobile:</p>
        <input
          v-model="profile.mobile"
          type="text"
          placeholder="9876543210"
          maxlength="10"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
        <span v-if="validationErrors.mobile" class="text-xs text-red-500">{{ validationErrors.mobile[0] }}</span>
      </div>
      <div class="col-span-12 flex flex-col gap-2 mt-2">
        <button
          class="flex items-center justify-center rounded-xl bg-b300 px-8 py-3 font-semibold text-white duration-200 hover:bg-b400"
          :disabled="loading"
          @click="handleSave"
        >
          <span v-if="!loading">Save</span>
          <span v-else>Saving...</span>
        </button>
        <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
        <div v-if="successMsg" class="text-green-600 text-sm">{{ successMsg }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getProfile, updateProfile } from '../../api/profile'

const loading = ref(false)
const error = ref('')
const successMsg = ref('')
const validationErrors = ref<Record<string, string[]>>({})

const profile = ref({
  name: '',
  email: '',
  mobile: ''
})

const fetchProfile = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await getProfile()
    if (res.data && res.data.success && res.data.data) {
      profile.value.name = res.data.data.name || ''
      profile.value.email = res.data.data.email || ''
      profile.value.mobile = res.data.data.mobile || ''
    } else {
      error.value = res.data?.message || 'Failed to fetch profile.'
    }
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Failed to fetch profile.'
  } finally {
    loading.value = false
  }
}

const handleSave = async () => {
  loading.value = true
  error.value = ''
  successMsg.value = ''
  validationErrors.value = {}
  try {
    const payload = {
      name: profile.value.name,
      email: profile.value.email,
      mobile: profile.value.mobile
    }
    const res = await updateProfile(payload)
    if (res.data && res.data.success) {
      successMsg.value = res.data.message || 'Profile updated successfully!'
      Object.assign(profile.value, res.data.data)
    } else {
      error.value = res.data?.message || 'Failed to update profile.'
      if (res.data?.data) {
        validationErrors.value = res.data.data
      }
    }
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Failed to update profile.'
    if (err.response?.data?.data) {
      validationErrors.value = err.response.data.data
    }
  } finally {
    loading.value = false
  }
}

onMounted(fetchProfile)
</script>