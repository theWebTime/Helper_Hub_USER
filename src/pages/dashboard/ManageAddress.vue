<template>
  <section class="mt-[100px] pt-15">
    <div class="4xl:large-container grid grid-cols-12 gap-6 overflow-hidden rounded-2xl bg-white p-4 max-4xl:mx-4 sm:p-10">
      <div class="col-span-12 flex items-center justify-between gap-4">
        <h4 class="heading-4">Manage Address</h4>
        <button class="bg-b300 text-white rounded-lg px-4 py-2 font-semibold" @click="openAdd">+ Add Address</button>
      </div>
      <div class="relative col-span-12 h-px">
        <div class="line-horizontal absolute left-0 top-0 h-full w-full"></div>
      </div>
      <div class="col-span-12 rounded-2xl bg-white px-6 py-6 max-lg:overflow-x-auto">
        <table class="w-full text-nowrap">
          <thead>
            <tr class="w-full bg-n20 py-4 text-center text-lg font-semibold">
              <th class="py-4">Pin Code</th>
              <th class="py-4">Type</th>
              <th class="py-4">Title</th>
              <th class="py-4">Name</th>
              <th class="py-4">Phone No.</th>
              <th class="py-4">Address</th>
              <th class="py-4">Landmark</th>
              <th class="py-4">Default</th>
              <th class="py-4">Action</th>
            </tr>
          </thead>
          <tbody class="text-center font-medium text-n300">
            <tr v-for="(address, idx) in addresses" :key="address.id" :class="{ 'bg-n20': idx % 2 !== 0 }">
              <td class="px-6 py-4">{{ address.pin_code }}</td>
              <td class="px-6 py-4">{{ address.type }}</td>
              <td class="px-6 py-4">{{ address.title }}</td>
              <td class="px-6 py-4">{{ address.name }}</td>
              <td class="px-6 py-4">{{ address.phone }}</td>
              <td class="px-6 py-4">{{ address.address }}</td>
              <td class="px-6 py-4">{{ address.landmark }}</td>
              <td class="px-6 py-4">
                <span v-if="address.is_default === 1" class="text-green-600 font-bold">Yes</span>
                <span v-else class="text-gray-600">No</span>
              </td>
              <td class="px-6 py-4 flex items-center justify-center gap-2">
                <button class="bg-b300 text-white rounded-lg px-4 py-2 font-semibold" @click="openEdit(address)">EDIT</button>
                <button class="bg-b300 text-white rounded-lg px-4 py-2 font-semibold" @click="handleDelete(address.id)">Delete</button>
              </td>
            </tr>
            <tr v-if="addresses.length === 0">
              <td colspan="9" class="py-6 text-center text-n500">No addresses found.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Pagination (implement if needed) -->
      <!-- <div class="col-span-12"><Pagination /></div> -->
    </div>
    <AddressForm
      v-if="showForm"
      :initial-data="formData"
      :mode="formMode"
      @close="closeForm"
      @saved="fetchAddresses"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getAddresses, deleteAddress } from "../../api/address"
import AddressForm from "../../pages/dashboard/AddressForm.vue"

const addresses = ref<any[]>([])
const showForm = ref(false)
const formMode = ref<'add'|'edit'>('add')
const formData = ref<any>(null)
const loading = ref(false)
const error = ref('')

const fetchAddresses = async () => {
  loading.value = true
  error.value = ''
  try {
    const res = await getAddresses()
    if (res.data && res.data.success) {
      addresses.value = res.data.data.data // .data for paginated
    } else {
      error.value = res.data?.message || 'Failed to fetch addresses.'
    }
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Failed to fetch addresses.'
  } finally {
    loading.value = false
  }
}

const openAdd = () => {
  formMode.value = 'add'
  formData.value = null
  showForm.value = true
}
const openEdit = (address: any) => {
  formMode.value = 'edit'
  formData.value = address
  showForm.value = true
}
const closeForm = () => {
  showForm.value = false
  formData.value = null
}
const handleDelete = async (id: number) => {
  if (!confirm('Are you sure you want to delete this address?')) return
  loading.value = true
  try {
    const res = await deleteAddress(id)
    if (res.data && res.data.success) {
      fetchAddresses()
    } else {
      alert(res.data?.message || 'Failed to delete address.')
    }
  } catch (err: any) {
    alert(err.response?.data?.message || 'Failed to delete address.')
  } finally {
    loading.value = false
  }
}

onMounted(fetchAddresses)
</script>