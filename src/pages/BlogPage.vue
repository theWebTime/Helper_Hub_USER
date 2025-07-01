<template>
  <BreadCrumb2 pageName="Blog Page" />

  <section class="sbp-30">
    <div
      class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl md:p-15 lg:rounded-[60px]"
    >
      <div class="grid grid-cols-12 gap-6">
        <BlogPostCard
          v-for="(blog, idx) in blogDetails"
          :key="idx"
          v-bind="blog"
        />
      </div>
    </div>

    <div class="container max-lg:pt-8">
      <Pagination />
    </div>
  </section>
</template>

<script setup lang="ts">
import BreadCrumb2 from "../components/global/BreadCrumb2.vue";
import BlogPostCard from "../components/ui/BlogPostCard.vue";
import Pagination from "../components/ui/Pagination.vue";
import { blogDetails } from "../data/data";
</script>

<style scoped></style>
