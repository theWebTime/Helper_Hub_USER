<template>
    <section class="mt-[100px] pt-15">
        <div class="grid grid-cols-12 gap-6 bg-white p-4 max-4xl:mx-4 sm:p-6 rounded-2xl">
            <div class="col-span-12 flex items-center justify-between gap-4">
                <h4 class="text-xl font-semibold">My Booking</h4>
            </div>

            <!-- Desktop Table (visible on lg and up) -->
            <div class="col-span-12 overflow-x-auto hidden lg:block">
                <div class="min-w-[1200px]">
                    <table class="w-full text-nowrap">
                        <thead>
                            <tr class="bg-gray-100 text-center text-sm font-semibold">
                                <th class="py-3 px-4">Booking No</th>
                                <th class="py-3 px-4">Service</th>
                                <th class="py-3 px-4">Sub-Service</th>
                                <th class="py-3 px-4">Services Details</th>
                                <th class="py-3 px-4">Address</th>
                                <th class="py-3 px-4">Price</th>
                                <th class="py-3 px-4">Fee</th>
                                <th class="py-3 px-4">Total</th>
                                <th class="py-3 px-4">Schedule Start Date</th>
                                <th class="py-3 px-4">Schedule End Date</th>
                                <th class="py-3 px-4">Time</th>
                                <th class="py-3 px-4">Dog</th>
                                <th class="py-3 px-4">Instructions</th>
                                <th class="py-3 px-4">Payment</th>
                                <th class="py-3 px-4">Method</th>
                                <th class="py-3 px-4">Order ID</th>
                                <th class="py-3 px-4">Pay Date</th>
                                <th class="py-3 px-4">Status</th>
                                <th class="py-3 px-4">Default</th>
                            </tr>
                        </thead>
                        <tbody class="text-center text-sm font-medium text-gray-700">
                            <tr v-for="(item, idx) in myBookings" :key="item.id"
                                :class="{ 'bg-gray-50': idx % 2 === 0 }">
                                <td class="px-4 py-2">{{ item.booking_number }}</td>
                                <td class="px-4 py-2">{{ item.service_name }}</td>
                                <td class="px-4 py-2">{{ item.sub_service_name }}</td>
                                <td class="px-4 py-2">{{ item.selected_type_details }}</td>
                                <td class="px-4 py-2">{{ item.user_address }}</td>
                                <td class="px-4 py-2">₹{{ item.service_price }}</td>
                                <td class="px-4 py-2">₹{{ item.platform_fee }}</td>
                                <td class="px-4 py-2">₹{{ item.total_amount }}</td>
                                <td class="px-4 py-2">{{ item.schedule_date }}</td>
                                <td class="px-4 py-2">{{ item.schedule_end_date }}</td>
                                <td class="px-4 py-2">{{ item.schedule_time }}</td>
                                <td class="px-4 py-2">{{ item.is_dog ? "Yes" : "No" }}</td>
                                <td class="px-4 py-2">{{ item.special_instructions }}</td>
                                <td class="px-4 py-2">{{ item.payment_status ? "Done" : "Not Yet" }}</td>
                                <td class="px-4 py-2">{{ item.payment_method }}</td>
                                <td class="px-4 py-2">{{ item.payment_order_id }}</td>
                                <td class="px-4 py-2">{{ item.payment_date }}</td>
                                <td class="px-4 py-2">{{ item.booking_status ? "Confirmed" : "Not Confirmed" }}</td>
                                <td class="px-4 py-2">{{ item.is_default ? "Yes" : "No" }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Mobile Card View (visible below lg) -->
            <div class="col-span-12 flex flex-col gap-4 lg:hidden">
                <div v-for="item in myBookings" :key="item.id" class="rounded-xl border border-gray-200 p-4 shadow-sm">
                    <p class="font-semibold text-primary mb-2">
                        Booking #{{ item.booking_number }}
                    </p>
                    <div class="text-sm text-gray-700 space-y-1">
                        <p><strong>Service:</strong> {{ item.service_name }} - {{ item.sub_service_name }}</p>
                        <p><strong>Services Details:</strong> {{ item.selected_type_details }}</p>
                        <p><strong>Address:</strong> {{ item.user_address }}</p>
                        <p><strong>Price:</strong> ₹{{ item.service_price }}</p>
                        <p><strong>Platform Fee:</strong> ₹{{ item.platform_fee }}</p>
                        <p><strong>Total:</strong> ₹{{ item.total_amount }}</p>
                        <p><strong>Schedule:</strong> {{ item.schedule_date }} {{ item.service_id == 2 ? 'to' : '' }} {{
                            item.schedule_end_date }} at {{
                                item.schedule_time }}</p>
                        <p><strong>Dog:</strong> {{ item.is_dog ? "Yes" : "No" }}</p>
                        <p><strong>Instructions:</strong> {{ item.special_instructions }}</p>
                        <p><strong>Payment:</strong> {{ item.payment_status ? "Done" : "Not Yet" }}</p>
                        <p><strong>Status:</strong> {{ item.booking_status ? "Confirmed" : "Not Confirmed" }}</p>
                        <p><strong>Default:</strong> {{ item.is_default ? "Yes" : "No" }}</p>
                    </div>
                </div>
                <div v-if="myBookings.length === 0" class="text-center text-gray-500 py-6">No bookings found.</div>
            </div>
        </div>
    </section>
</template>



<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getMyBooking } from "../../api/myBooking"

const loading = ref(false)
const error = ref('')
const myBookings = ref<any[]>([])

const fetchMyBooking = async () => {
    loading.value = true
    error.value = ''
    try {
        const res = await getMyBooking()
        if (res.data && res.data.success) {
            myBookings.value = res.data.data.data // Paginated response
        } else {
            error.value = res.data?.message || 'Failed to fetch my booking.'
        }
    } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to fetch my booking.'
    } finally {
        loading.value = false
    }
}
onMounted(fetchMyBooking)
</script>
