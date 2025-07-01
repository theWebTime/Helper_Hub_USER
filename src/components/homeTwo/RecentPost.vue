<template>
  <section class="stp-30 sbp-30 bg-n20">
    <div class="4xl:large-container max-4xl:container">
      <div class="flex items-center justify-between gap-4">
        <div class="flex flex-col">
          <h2 class="display-4 font-extrabold text-n900">Recent Posts</h2>
        </div>
        <div class="">
          <router-link
            to="/blog"
            class="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
          >
            All Article
            <span class="ph-bold ph-arrow-right text-2xl !leading-none">
              <PhArrowRight />
            </span>
          </router-link>
        </div>
      </div>
      <div class="stp-15 grid grid-cols-12 gap-6">
        <BlogPostCard
          v-for="(blog, idx) in blogDetails.slice(0, 4)"
          :isFourItems="true"
          :key="idx"
          v-bind="blog"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { blogDetails } from "../../data/data";
import { PhArrowRight } from "@phosphor-icons/vue";
import BlogPostCard from "../ui/BlogPostCard.vue";
</script>

<style scoped></style>
