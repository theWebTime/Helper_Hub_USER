<template>
  <BreadCrumb2
    pageName="Blog Details"
    :is-middle-page="true"
    middlePageLink="/blog"
    middlePageName="Blog"
  />

  <section class="">
    <div
      class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl md:px-15 md:pt-15 lg:rounded-[60px]"
    >
      <div class="">
        <img :src="blogThumbnail" alt="" class="rounded-3xl" />
      </div>
      <p class="text pt-10 text-xl font-medium text-gray-800">
        Latest News December 12, {{ new Date().getFullYear() }}
      </p>
      <h2 class="display-4 pb-5 pt-3 font-extrabold">
        {{
          bodyData !== undefined
            ? (bodyData as BlogData).title
            : "Celebrating Successes in Service"
        }}
      </h2>
      <p class="pb-3 text-base text-n200 sm:text-lg">
        In today's fast-paced world, on-demand services have become an integral
        part of our lives, offering convenience, efficiency, and flexibility. In
        this blog post, we'll delve into the latest trends and innovations
        on-demand services, technologies to evolving consumer preferences.
      </p>
      <p class="text-base text-n200 sm:text-lg">
        Explore how artificial intelligence and automation are revolutionizing
        the on-demand industry, streamlining processes, and enhancing user
        experiences. Explore the expanding range of services available on-demand
      </p>

      <h3 class="heading-2 stp-15 pb-5">Exploring Service Success Stories</h3>

      <p class="pb-3 text-base text-n200 sm:text-lg">
        Discover the expanding range services available on-demand, from
        traditional offerings like transportation and food delivery to niche
        services like pet grooming and fitness coaching.
      </p>

      <div class="flex items-center justify-between gap-6">
        <div class="overflow-hidden rounded-xl">
          <img :src="blogImg1" alt="" />
        </div>
        <div class="overflow-hidden rounded-xl">
          <img :src="blogImg2" alt="" />
        </div>
      </div>

      <p class="pt-3 text-base text-n200 sm:text-lg">
        Learn how on-demand service providers are leveraging data analytics and
        machine learning to offer personalized and customized experiences
        tailored to individual preferences.
      </p>

      <h4 class="heading-3 stp-15 pb-5">Celebrating Successes in Service</h4>
      <p class="pb-3 text-base text-n200 sm:text-lg">
        Discover the expanding range services available on-demand, from
        traditional offerings like transportation and food delivery to niche
        services like pet grooming and fitness coaching.
      </p>
      <p class="text-base text-n200 sm:text-lg">
        Discover the expanding range services available on-demand, from
        traditional offerings like transportation and food delivery to niche
        services like pet grooming and fitness coaching.
      </p>

      <div class="stp-15">
        <div
          class="flex items-center justify-between gap-6 border-y border-n30 py-4 max-lg:flex-col max-lg:items-start"
        >
          <div
            class="flex items-center justify-start gap-4 max-sm:flex-col max-sm:items-start"
          >
            <p class="heading-4">Tags:</p>
            <ul
              class="flex items-center justify-start gap-3 text-n300 max-lg:flex-wrap"
            >
              <li class="rounded-xl border border-n40 px-4 py-2">Clean</li>
              <li class="rounded-xl border border-n40 px-4 py-2">Services</li>
              <li class="rounded-xl border border-n40 px-4 py-2">Handyman</li>
              <li class="rounded-xl border border-n40 px-4 py-2">Paint</li>
            </ul>
          </div>

          <div class="flex items-center justify-start gap-4">
            <p class="heading-4">Share:</p>
            <ul
              class="flex items-center justify-start gap-3 text-2xl !leading-none text-white"
            >
              <li class="rounded-full bg-n900 p-2 duration-500 hover:bg-b300">
                <router-link to="" class="flex items-center justify-center">
                  <PhFacebookLogo />
                </router-link>
              </li>
              <li class="rounded-full bg-n900 p-2 duration-500 hover:bg-b300">
                <router-link to="" class="flex items-center justify-center">
                  <PhInstagramLogo />
                </router-link>
              </li>
              <li class="rounded-full bg-n900 p-2 duration-500 hover:bg-b300">
                <router-link to="" class="flex items-center justify-center">
                  <PhDribbbleLogo />
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="stp-15">
        <p class="heading-5 pb-6">03 Comments:</p>

        <div
          v-for="{ id, isReply, reply, ...props } in comments"
          :key="id"
          class="flex items-start flex-col justify-start gap-3 pt-6 sm:gap-5 sm:pt-8"
        >
          <CommentCard :key="id" v-bind="props" />

          <div v-if="isReply" class="pl-6 sm:pl-24">
            <CommentCard
              v-for="{ id, ...props } in reply"
              :key="id"
              v-bind="props"
            />
          </div>
        </div>

        <div class="stp-15">
          <p class="heading-6">Leave A Comment</p>

          <form
            @submit.prevent="handleSubmit"
            class="grid grid-cols-12 gap-6 pt-10 font-medium"
          >
            <div
              class="col-span-12 rounded-xl border border-n30 p-3 sm:col-span-6"
            >
              <input
                type="text"
                class="w-full outline-none placeholder:text-n100"
                placeholder="Name"
                v-model="name"
                required
              />
            </div>
            <div
              class="col-span-12 rounded-xl border border-n30 p-3 sm:col-span-6"
            >
              <input
                type="text"
                class="w-full outline-none placeholder:text-n100"
                placeholder="Email"
                v-model="email"
                required
              />
            </div>
            <div class="col-span-12 rounded-xl border border-n30 p-3">
              <textarea
                class="min-h-[200px] w-full outline-none placeholder:text-n100"
                placeholder="Message"
                v-model="comment"
                required
              ></textarea>
            </div>
            <div class="col-span-4">
              <button
                class="relative flex items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
              >
                <span class="relative z-10">Post a Comment</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <RecentPost :is-bg-white="true" />
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import blogThumbnail from "/images/blog-details-thumbnail.png";
import blogImg1 from "/images/blog-img-1.png";
import blogImg2 from "/images/blog-img-2.png";
import commentPeople2 from "/images/comment_people_2.png";
import RecentPost from "../components/homeOne/RecentPost.vue";
import BreadCrumb2 from "../components/global/BreadCrumb2.vue";
import {
  PhDribbbleLogo,
  PhFacebookLogo,
  PhInstagramLogo,
} from "@phosphor-icons/vue";
import CommentCard from "../components/ui/CommentCard.vue";
import { blogCommentData, blogDetails } from "../data/data";
import { ref, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const comments = reactive(blogCommentData);

interface BlogData {
  id: string;
  title: string;
  date: string;
  category: string;
  img: string;
}

const name = ref("");
const email = ref("");
const comment = ref("");
const date = "October 5";

const bodyData = ref<BlogData | {}>({});
const dynamicPage = ref(false);

onBeforeMount(() => {
  const blogFilterData = blogDetails.filter(
    (item) =>
      item.title.replaceAll(" ", "-").toLowerCase() === route.params.title
  );
  bodyData.value = blogFilterData[0];

  if (blogFilterData.length > 0) {
    dynamicPage.value = true;
  }
});

function handleSubmit() {
  if (!name || !email || !comment) return;
  const newComment = {
    name: name.value,
    comment: comment.value,
    date,
    id: uuidv4(),
    img: commentPeople2,
    isReply: false,
  };

  Object.assign(comments, [...comments, newComment]);

  name.value = "";
  email.value = "";
  comment.value = "";
}
</script>

<style scoped></style>
