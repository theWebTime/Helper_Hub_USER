<template>
  <div>
    <h4 class="heading-4">Suggest your budget</h4>

    <p class="pt-10 font-medium text-n300">What is your budget?*</p>
    <p class="pt-1 text-n300">You can always negotiate the final price.*</p>

    <div
      class="mt-4 flex items-center justify-start gap-3 rounded-2xl bg-n30 p-3"
    >
      <PhCurrencyDollarSimple weight="bold" />
      <input
        type="text"
        class="w-full bg-transparent outline-none placeholder:font-medium placeholder:text-n900"
        placeholder="Enter budget"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhCurrencyDollarSimple } from "@phosphor-icons/vue";
</script>

<style scoped></style>
