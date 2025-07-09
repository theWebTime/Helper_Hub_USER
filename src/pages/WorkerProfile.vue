<template>
  <BreadCrumb pageName="Worker Profile" />
  <section class="sbp-30 stp-30">
    <div class="container grid grid-cols-12 gap-6">
      <div
        class="col-span-12 rounded-xl border border-n30 px-6 py-8 lg:col-span-4"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="relative max-md:overflow-hidden">
            <div
              class="hexagon-styles my-[calc(200px*0.5/2)] h-[calc(200px*0.57736720554273)] w-[200px] rounded-[calc(200px/36.75)] bg-b50 before:rounded-[calc(200px/18.75)] after:rounded-[calc(200px/18.75)]"
            >
              <div class="absolute -top-11 left-[5px]">
                <div
                  class="hexagon-styles z-10 my-[calc(190px*0.5/2)] h-[calc(190px*0.57736720554273)] w-[190px] rounded-[calc(190px/50)] bg-b300 before:rounded-[calc(190px/50)] after:rounded-[calc(190px/50)]"
                >
                  <div class="absolute -top-[42px] left-[5px] z-20">
                    <div
                      class="hexagon-styles z-10 my-[calc(180px*0.5/2)] h-[calc(180px*0.57736720554273)] w-[180px] rounded-[calc(180px/50)] bg-b50 before:rounded-[calc(180px/50)] after:rounded-[calc(180px/50)]"
                    >
                      <div
                        class="r-hex3 absolute -left-[5px] -top-[43px] z-30 inline-block w-[190px] overflow-hidden"
                      >
                        <div class="r-hex-inner3">
                          <div
                            :class="[
      bodyData !== undefined ? (bodyData as ExpertData).img : 'expertImgBig',
      'r-hex-inner-3',
      'before:h-[190px]',
      'before:bg-cover'
    ]"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-5 right-1 z-30">
              <img :src="badge" alt="" class="" />
            </div>
          </div>

          <div class="flex items-center justify-center gap-3 pt-6">
            <h4 class="heading-4">
              {{
                bodyData !== undefined
                  ? (bodyData as ExpertData).expertName
                  : "Albert Flores"
              }}
            </h4>
            <p class="p rounded-full bg-y300 px-3 py-1 text-sm font-medium">
              PRO
            </p>
          </div>
          <p class="pt-3 text-center text-sm text-n300">Brooklyn, NY, USA</p>
          <div class="w-full pt-8 sm:px-12">
            <router-link
              to="/chat"
              class="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
            >
              <div class="relative z-20 flex items-center justify-center gap-3">
                <span class="text-xl !leading-none">
                  <PhPaperPlaneTilt />
                </span>
                <span>Get in touch</span>
              </div>
            </router-link>
          </div>

          <router-link
            to="/worker-portfolio"
            class="mt-5 flex w-full items-center justify-between rounded-xl border border-n30 px-5 py-3"
          >
            <p class="font-semibold">View My Portfolio</p>
            <span class="text-xl !leading-none">
              <PhCaretRight />
            </span>
          </router-link>

          <div
            class="mt-5 flex w-full items-center justify-between rounded-xl border border-n30 px-5 py-3"
          >
            <div class="flex items-center justify-start gap-2">
              <span class="text-xl !leading-none">
                <PhStar weight="fill" />
              </span>
              <p class="font-medium">Recommended</p>
            </div>
            <div class="flex items-center justify-end gap-2">
              <div class="flex items-center justify-start max-xl:hidden">
                <img
                  :src="people1"
                  alt=""
                  class="relative -z-10 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75"
                />
                <img
                  :src="people2"
                  alt=""
                  class="-z-9 relative -ml-2 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75"
                />
                <img
                  :src="people3"
                  alt=""
                  class="-z-8 relative -ml-2 flex size-7 items-center justify-center overflow-hidden rounded-full bg-g75"
                />
                <p
                  class="-z-7 relative -ml-2 flex size-7 items-center justify-center rounded-full bg-g75"
                >
                  +8
                </p>
              </div>
              <span class="text-xl !leading-none">
                <PhCaretRight />
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start justify-start gap-3 pt-8">
          <p class="text-sm font-medium">RATE</p>
          <p class="rounded-full bg-r50 px-3 py-1 text-[13px] text-r300">
            $75 - &100/hr
          </p>
        </div>

        <div class="flex flex-col items-start justify-start gap-3 pt-8">
          <p class="text-sm font-medium">SERVICES</p>
          <div class="flex flex-wrap gap-1 text-n400">
            <p
              class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
            >
              <span>Handyman</span>
            </p>
            <p
              class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
            >
              <span>Clening </span>
            </p>
            <p
              class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
            >
              <span>Plumber </span>
            </p>
            <p class="rounded-xl bg-b50 px-3 py-2 font-medium">+3</p>
          </div>
        </div>

        <div class="flex flex-col items-start justify-start gap-3 pt-8">
          <p class="text-sm font-medium">BADGES</p>
          <div class="flex flex-wrap gap-1 text-n400">
            <p
              class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
            >
              <img :src="settingIcon" alt="" />
              <span>Cleaning Expert</span>
            </p>
            <p
              class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
            >
              <img :src="tapIcon" alt="" />
              <span>Best Plumber</span>
            </p>
          </div>
        </div>

        <div class="flex flex-col items-start justify-start gap-3 pt-8">
          <p class="text-sm font-medium">ABOUT</p>
          <p class="text-n300">
            Welcome to Helper Hub where convenience meets quality. Discover a
            seamless platform connecting you with trusted service providers
            effortlessly.
          </p>
        </div>

        <!-- <div class="flex flex-col items-start justify-start gap-3 pt-8">
          <p class="text-sm font-medium">router-linkS</p>
          <div class="flex items-center justify-start gap-3">
            <router-link
              v-for="{ id, link, icon } in socialLinks.slice(0, 4)"
              :key="id"
              :to="link"
              class="flex cursor-pointer items-center justify-center rounded-full border border-n700 p-2.5 duration-500 hover:border-b300 hover:bg-b300 hover:text-white"
            >
              <span class="!leading-none">
                <component :is="icon" />
              </span>
            </router-link>
          </div>
        </div> -->
      </div>
      <div
        class="col-span-12 rounded-xl border border-n30 p-4 sm:p-8 lg:col-span-8"
      >
        <h3 class="heading-3">
          Elevating Cleanliness Standards with Professional Cleaning Services
        </h3>
        <p class="text-bg-n300 pt-3 font-medium">
          Elevate cleanliness standards with our professional cleaning services.
          Experience spotless spaces and impeccable results every time you book
          with us.
        </p>

        <div class="flex flex-col gap-4 pt-10">
          <ul
            class="flex items-center justify-start gap-5 border-b border-n30 pb-5 text-n100 max-md:flex-wrap"
          >
            <li
              v-for="(item, idx) in tabButton"
              @click="handleClick(item)"
              :class="{ 'text-n900': activeTab === item }"
              class="hover:text-n900 duration-500 heading-5 cursor-pointer"
              :key="idx"
            >
              {{ item }}
            </li>
          </ul>

          <div v-if="activeTab === 'Services'" class="flex flex-col gap-5">
            <ServiceCard
              v-for="(item, idx) in workerServices"
              :key="idx"
              v-bind="item"
            />
          </div>

          <div v-if="activeTab === 'Works'" class="flex flex-col gap-4 pt-8">
            <div
              v-for="{ id, name, img } in workerServices"
              :key="id"
              class="flex items-start justify-start gap-3 rounded-2xl border border-n30 p-3 max-md:flex-col"
            >
              <div
                class="flex items-center justify-start gap-6 max-sm:flex-col"
              >
                <div class="flex items-center justify-center self-stretch">
                  <img :src="img" alt="" class="rounded-2xl object-cover" />
                </div>
                <div class="">
                  <h5 class="heading-5">{{ name }}</h5>
                  <div
                    class="flex max-w-[350px] flex-wrap gap-1 pt-3 text-sm text-n400 xxl:pt-6"
                  >
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img :src="settingIcon" alt="" />
                      <span>Handyman</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img :src="tapIcon" alt="" />
                      <span>Cleaning</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <img :src="tapIcon" alt="" />
                      <span>Plumber</span>
                    </p>
                    <p
                      class="flex items-center justify-center gap-2 rounded-xl bg-b50 px-3 py-2 font-medium"
                    >
                      <span>+4</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              v-if="activeTab === 'Jobs'"
              class="flex flex-col items-start justify-start gap-4 border-b border-n30 pb-4"
            >
              <h5 class="heading-5">
                Social Media Manager for Passionate Studio
              </h5>
              <div
                class="flex items-center justify-start gap-3 text-sm font-medium text-n300"
              >
                <p class="rounded-full border border-n300 px-5 py-2">
                  Social Media Manager
                </p>
                <p class="rounded-full border border-n300 px-5 py-2">
                  Web Developer
                </p>
              </div>
              <div class="flex items-center justify-start gap-6">
                <p
                  class="flex items-center justify-start gap-2 text-sm font-medium text-n500"
                >
                  <PhClock /> Duration:Ongoing• 20 hrs/wk
                </p>
                <p
                  class="rounded-full border border-n30 px-5 py-1 text-sm text-n300"
                >
                  $75 - $100/hr
                </p>
              </div>
            </div>
            <div
              class="flex items-center justify-between text-sm font-medium text-n300"
            >
              <button class=" ">Not interested</button>
              <router-link
                to="#"
                class="rounded-full border border-n30 px-5 py-2"
              >
                View job Posting
              </router-link>
            </div>
          </div>

          <div
            v-if="activeTab === 'Recommendations'"
            v-for="{
              id,
              profileImg,
              name,
              address,
              review,
            } in recommendationsData"
            :key="id"
            class="rounded-2xl border border-n30 p-10"
          >
            <div class="flex items-center justify-start gap-3 pb-2">
              <div class="relative max-md:overflow-hidden">
                <div
                  class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
                >
                  <div class="absolute -top-[20px] left-[5px]">
                    <div
                      class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
                    >
                      <div class="absolute -top-[18px] left-[4px] z-20">
                        <div
                          class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                        >
                          <div
                            class="r-hex3 absolute -left-0.5 -top-[18px] z-30 inline-block w-[86px] overflow-hidden"
                          >
                            <div class="r-hex-inner3">
                              <div
                                :class="profileImg"
                                class="r-hex-inner-3 before:h-[86px] before:bg-cover"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-3 right-1 z-30">
                  <img :src="badge2" alt="" class="" />
                </div>
              </div>
              <div class="">
                <div class="flex items-center justify-start gap-3">
                  <h5 class="heading-5">{{ name }}</h5>
                </div>
                <p class="pt-2 text-n500">{{ address }}</p>
              </div>
            </div>
            <p class="flex items-center justify-start gap-3 text-sm text-n300">
              <img :src="starIcon" alt="" />
              Luka recommends working with Alice
            </p>
            <p class="pt-3 font-medium text-n300">{{ review }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="sbp-30">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <div class="relative max-md:overflow-hidden">
          <div
            class="hexagon-styles my-[calc(100px*0.5/2)] h-[calc(100px*0.57736720554273)] w-[100px] rounded-[calc(100px/36.75)] bg-b50 before:rounded-[calc(100px/18.75)] after:rounded-[calc(100px/18.75)]"
          >
            <div class="absolute -top-[20px] left-[5px]">
              <div
                class="hexagon-styles z-10 my-[calc(90px*0.5/2)] h-[calc(90px*0.57736720554273)] w-[90px] rounded-[calc(90px/50)] bg-b300 before:rounded-[calc(90px/50)] after:rounded-[calc(90px/50)]"
              >
                <div class="absolute -top-[18px] left-[4px] z-20">
                  <div
                    class="hexagon-styles z-10 my-[calc(82px*0.5/2)] h-[calc(82px*0.57736720554273)] w-[82px] rounded-[calc(82px/50)] bg-b50 before:rounded-[calc(82px/50)] after:rounded-[calc(82px/50)]"
                  >
                    <div
                      class="r-hex3 absolute -left-0.5 -top-[18px] z-30 inline-block w-[86px] overflow-hidden"
                    >
                      <div class="r-hex-inner3">
                        <div
                          class="expertImg4 r-hex-inner-3 before:h-[86px] before:bg-cover"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute bottom-3 right-1 z-30">
            <img :src="badge2" alt="" class="" />
          </div>
        </div>
        <p class="heading-4 pt-3 text-center">Partner With Albert Flores</p>
        <div class="max-w-[300px] pt-8">
          <router-link
            to="/services"
            class="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
          >
            <div class="relative z-20 flex items-center justify-center gap-3">
              <span>View Services</span>
            </div>
          </router-link>
        </div>
        <div class="relative flex w-full items-center justify-center pt-7">
          <span class="bg-white px-3 text-center text-sm font-medium">
            More Projects by Albert Flores
          </span>
          <div
            class="absolute left-0 right-0 top-[38px] -z-10 h-px w-full bg-n30"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-6 pt-8">
        <div
          v-for="{ id, img, name } in moreProjectData"
          :key="id"
          class="col-span-6 rounded-xl border border-n30 p-3 sm:col-span-4 lg:col-span-2"
        >
          <div class="flex items-center justify-center">
            <img :src="img" class="rounded-3xl" alt="" />
          </div>
          <p class="pt-5 text-center text-sm font-semibold">{{ name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
import { ref, onBeforeMount } from "vue";
import {
  PhCaretRight,
  PhClock,
  PhPaperPlaneTilt,
  PhStar,
} from "@phosphor-icons/vue";
import BreadCrumb from "../components/ui/BreadCrumb.vue";
import {
  moreProjectData,
  recommendationsData,
  // socialLinks,
  topExperts,
  workerServices,
} from "../data/data";
import people1 from "/images/review_people_1.png";
import people2 from "/images/review_people_2.png";
import people3 from "/images/review_people_3.png";
import settingIcon from "/images/settings_icon.png";
import starIcon from "/images/star_icon.png";
import tapIcon from "/images/tap_icon.png";
import badge2 from "/images/verify-badge.png";
import badge from "/images/verify-badge2.png";
import ServiceCard from "../components/ui/ServiceCard.vue";

const tabButton = ["Services", "Works", "Jobs", "Recommendations"];

const activeTab = ref("Works");

function handleClick(item: string) {
  activeTab.value = item;
}

// Define an interface for the structure of case study data
interface ExpertData {
  id: string;
  img: string;
  expertName: string;
  location: string;
  features: string[];
  services: string[];
  sliderImg: string[];
}

// Declare bodyData as a ref to BlogData or Object
const bodyData = ref<ExpertData | {}>({});
const dynamicPage = ref(false);

onBeforeMount(() => {
  const expertFilterData = topExperts.filter(
    (item) =>
      item.expertName.replaceAll(" ", "-").toLowerCase() === route.params.name
  );
  bodyData.value = expertFilterData[0];

  if (expertFilterData.length > 0) {
    dynamicPage.value = true;
  }
});
</script>

<style scoped></style>
