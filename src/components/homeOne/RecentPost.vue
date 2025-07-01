<template>
  <section :class="{ 'bg-n20': !isBgWhite }" class="stp-30 sbp-30">
    <div class="container">
      <div class="flex items-center justify-between gap-4">
        <div class="flex flex-col">
          <h2 class="heading-2 font-bold text-n900">
            Recent <span class="text-b300 underline">Posts</span>
          </h2>
          <p class="pt-4 font-medium text-n500">
            Read the recent articles from our blog.
          </p>
        </div>
        <div class="">
          <RouterLink
            to="/blog"
            class="flex items-center justify-start gap-3 font-bold duration-300 hover:text-b300"
          >
            All Article
            <span class="text-2xl !leading-none">
              <PhArrowRight weight="bold" />
            </span>
          </RouterLink>
        </div>
      </div>
      <div class="stp-15 grid grid-cols-12 gap-6">
        <BlogPostCard
          v-for="(blogItem, idx) in blogDetails.slice(0, 3)"
          :key="idx"
          v-bind="blogItem"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import { blogDetails } from "../../data/data";
import BlogPostCard from "../ui/BlogPostCard.vue";
defineProps<{ isBgWhite?: boolean }>();
</script>

<style scoped></style>
