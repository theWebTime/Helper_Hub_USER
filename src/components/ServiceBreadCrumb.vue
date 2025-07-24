<template>
    <section class="stp-15 sbp-15 mt-[100px] bg-n20">
        <div class="container flex flex-col items-center justify-center">
            <h2 class="heading-2">Services</h2>
            <ul class="flex items-center justify-center gap-2 pt-3 font-medium">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li class="text-r300">
                    <PhCaretDoubleRight />
                </li>
                <li class="text-r300">Services</li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
import { PhCaretDoubleRight } from "@phosphor-icons/vue";
</script>

<style scoped></style>
