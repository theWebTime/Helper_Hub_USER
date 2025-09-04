<template>
    <BreadCrumb2 pageName="Cancellation & Refund Policy" />

    <section class="sbp-30">
        <div
            class="container -mt-40 rounded-xl border border-n30 bg-white p-4 sm:p-4 md:rounded-3xl xl:rounded-[60px] xl:p-15">
            <h2 class="heading-2 text-center">Cancellation & Refund Policy</h2>

            <div class="stp-15 flex flex-col gap-8">
                <!-- Section 1 -->
                <div class="flex flex-col gap-3">
                    <h4 class="heading-4">1. Booking & Advance</h4>
                    <p class="text-n300">
                        • For the first service, a 50% advance of the booking amount is required to confirm the slot.
                        <br />
                        • After the first service, service slots are booked only on advance payment. <br />
                    </p>
                </div>

                <!-- Section 2 -->
                <div class="flex flex-col gap-3">
                    <h4 class="heading-4">2. Reschedule Policy</h4>
                    <p class="text-n300">
                        • If customer cancel the service, a booking may be rescheduled only within the same calendar
                        month, on any day, subject to slot availability. <br />
                        • Reschedule requests must be placed at least 2 hours before the scheduled start time. <br />
                    </p>
                </div>

                <!-- Section 3 -->
                <div class="flex flex-col gap-3">
                    <h4 class="heading-4">3. Cancellation by Helper Hub / Service Provider</h4>
                    <p class="text-n300">
                        • If the service provider cancels due to unforeseen reasons, Helper Hub will arrange a
                        reschedule
                        at zero extra cost.
                    </p>
                </div>

                <!-- Section 4 -->
                <div class="flex flex-col gap-3">
                    <h4 class="heading-4">4. Contact Us</h4>
                    <p class="text-n300">
                        • For cancellation, reschedule, or refund queries, please use the support email and phone listed
                        in the policy and booking confirmations.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section>
        <FooterOne />
    </section>
</template>

<script setup lang="ts">
import BreadCrumb2 from "../components/global/BreadCrumb2.vue";
import FooterOne from "../components/global/footer/footerOne.vue";
</script>

<style scoped></style>
