<template>
  <section class="mt-[100px] pt-15">
    <div
      class="4xl:large-container grid grid-cols-12 gap-6 overflow-hidden rounded-2xl bg-white p-4 max-4xl:mx-4 sm:p-10"
    >
      <div class="col-span-12 flex items-center justify-between gap-4">
        <h4 class="heading-4">Payout History</h4>
        <p class="text-lg font-medium text-b300">Showing 10 of 40</p>
      </div>
      <div class="relative col-span-12 h-px">
        <div class="line-horizontal absolute left-0 top-0 h-full w-full"></div>
      </div>
      <div
        class="col-span-12 rounded-2xl bg-white px-6 py-6 max-lg:overflow-x-auto"
      >
        <table class="w-full text-nowrap">
          <thead>
            <tr class="w-full bg-n20 py-4 text-center text-lg font-semibold">
              <th class="py-4">Ref ID</th>
              <th class="py-4">Method</th>
              <th class="py-4">Date</th>
              <th class="py-4">Amount</th>
              <th class="py-4">Downloads</th>
            </tr>
          </thead>
          <tbody class="text-center font-medium text-n300">
            <tr
              v-for="(
                { id, refId, method, date, amount }, idx
              ) in payoutHistory"
              :key="id"
              :class="{ 'bg-n20': idx % 2 !== 0 }"
              class="w-full"
            >
              <td class="px-6 py-4">{{ refId }}</td>
              <td class="px-6 py-4">{{ method }}</td>
              <td class="px-6 py-4">{{ date }}</td>
              <td class="px-6 py-4">${{ amount }}</td>

              <td class="px-6 py-4">
                <div class="flex items-center justify-center gap-3">
                  <span
                    class="rounded-lg bg-n20 p-2 text-lg !leading-none text-b300"
                  >
                    <PhFilePdf />
                  </span>
                  <p>Download PDF</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-span-12">
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhFilePdf } from "@phosphor-icons/vue";
import { payoutHistory } from "../../data/data";
import Pagination from "../../components/ui/Pagination.vue";
</script>

<style scoped></style>
