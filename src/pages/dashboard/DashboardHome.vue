<template>
  <section class="mt-[100px]">
    <div
      class="4xl:large-container grid grid-cols-12 gap-6 max-4xl:container pt-15"
    >
      <div class="col-span-12 xxl:col-span-9">
        <div
          class="sbp-15 flex w-full items-start justify-between gap-6 max-md:flex-col md:items-center md:gap-3"
        >
          <h3 class="heading-3">
            User <br />
            Information
          </h3>
          <div
            class="flex items-center justify-start gap-6 max-lg:flex-wrap 3xl:gap-12"
          >
            <div
              v-for="{
                id,
                count,
                title,
                iconBgColor,
                icon,
              } in userInformationCard"
              :key="id"
              class="flex items-center justify-start gap-3"
            >
              <div
                :class="iconBgColor"
                class="flex items-center justify-center rounded-full p-[14px] text-3xl !leading-none"
              >
                <component :is="icon" />
              </div>
              <div class="">
                <p class="text-2xl font-medium">{{ count }}</p>

                <p class="font-medium text-n100">{{ title }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full rounded-2xl bg-white p-8">
          <h4 class="heading-4">This Month Summery</h4>
          <div class="grid grid-cols-12 gap-3 pt-6">
            <div
              v-for="{
                id,
                count,
                title,
                bgColor,
                icon,
              } in thisMonthSummeryCard"
              :key="id"
              :class="bgColor"
              class="col-span-12 rounded-2xl px-8 py-6 sm:col-span-6 xxl:col-span-3"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-start gap-3">
                  <div
                    class="flex items-center justify-center rounded-full bg-white p-3 text-2xl !leading-none"
                  >
                    <component :is="icon" />
                  </div>
                  <p class="text-lg font-medium text-white">
                    {{ title }}
                  </p>
                </div>

                <router-link
                  to="/dashboard/payment-details"
                  class="-mr-4 -mt-4 flex items-center justify-center rounded-full border border-white p-3 !leading-none text-white"
                >
                  <PhArrowUpRight />
                </router-link>
              </div>
              <div class="flex items-center justify-between pt-8">
                <div class="heading-3 text-white flex">${{ count }}</div>
                <div class="flex">
                  <img
                    :src="people1"
                    alt=""
                    class="size-10 rounded-full bg-white p-0.5"
                  />
                  <img
                    :src="people2"
                    alt=""
                    class="-ml-4 size-10 rounded-full bg-white p-0.5"
                  />
                  <img
                    :src="people3"
                    alt=""
                    class="-ml-4 size-10 rounded-full bg-white p-0.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-12 xxl:col-span-3">
        <div class="rounded-xl border bg-white p-8">
          <div class="flex items-start justify-between">
            <p class="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
              PRO
            </p>
            <div class="">
              <div class="">
                <img :src="reviewImg" alt="" />
              </div>
              <div class="flex gap-2 pt-2">
                <p
                  class="flex items-center justify-start gap-2 text-sm font-semibold !leading-none text-o300"
                >
                  <PhStar weight="fill" /> 4.4
                  <span class="text-n300">(45)</span>
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center py-3.5">
            <div class="max-md:overflow-hidden">
              <div
                class="hexagon-styles my-[calc(160px*0.5/2)] h-[calc(160px*0.57736720554273)] w-[160px] rounded-[calc(160px/36.75)] bg-b50 before:rounded-[calc(160px/18.75)] after:rounded-[calc(160px/18.75)]"
              >
                <div class="absolute -top-[32px] left-[8px]">
                  <div
                    class="hexagon-styles z-10 my-[calc(144px*0.5/2)] h-[calc(144px*0.57736720554273)] w-[144px] rounded-[calc(144px/50)] bg-b300 before:rounded-[calc(144px/50)] after:rounded-[calc(144px/50)]"
                  >
                    <div class="absolute -top-[31px] left-[5px] z-20">
                      <div
                        class="hexagon-styles z-10 my-[calc(134px*0.5/2)] h-[calc(134px*0.57736720554273)] w-[134px] rounded-[calc(134px/50)] bg-b50 before:rounded-[calc(134px/50)] after:rounded-[calc(134px/50)]"
                      >
                        <div
                          class="r-hex3 absolute -left-0.5 -top-[30px] z-30 inline-block w-[138px] overflow-hidden"
                        >
                          <div class="r-hex-inner3">
                            <div
                              class="expertImgBig r-hex-inner-3 before:h-[138px] before:bg-cover"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="flex w-full flex-col items-center justify-center border-b border-b50 pb-6 pt-3"
            >
              <div class="flex-col items-center justify-center gap-3">
                <h5 class="heading-5">Mabel Barnett</h5>
              </div>
              <p class="pt-2 text-n500">Brooklyn, NY, USA</p>
            </div>
          </div>

          <div class="flex items-center justify-center gap-3">
            <div
              class="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none"
            >
              <PhPencilSimpleLine weight="bold" />
            </div>
            <div
              class="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none"
            >
              <PhEnvelopeSimple weight="bold" />
            </div>
            <div
              class="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none"
            >
              <PhPhone weight="bold" />
            </div>
            <div
              class="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none"
            >
              <PhPlus weight="bold" />
            </div>
            <div
              class="flex cursor-pointer items-center justify-center rounded-full bg-n20 p-3 !leading-none"
            >
              <PhCalendarPlus weight="bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div
      class="4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container"
    >
      <WeeklyWorksSummery />
      <TotalEarningOverview />
    </div>
  </section>

  <section>
    <div
      class="4xl:large-container grid grid-cols-12 gap-6 pt-6 max-4xl:container"
    >
      <div
        class="col-span-12 rounded-2xl bg-white px-6 py-8 max-sm:overflow-x-auto lg:col-span-8"
      >
        <table class="w-full text-nowrap">
          <thead>
            <tr class="w-full bg-n20 py-4 text-center text-lg font-semibold">
              <th class="py-4">Client Name</th>
              <th class="py-4">Status</th>
              <th class="py-4">Location</th>
              <th class="py-4">Price</th>
            </tr>
          </thead>
          <tbody class="text-center font-medium text-n300">
            <tr
              v-for="{ id, name, status, location, price } in orderInfo"
              class="w-full"
              :key="id"
            >
              <td class="py-3">{{ name }}</td>
              <td class="">
                <div
                  :class="{
                    'text-v200 bg-v50/80': status === 'Completed',
                    'bg-g50/80 text-g300': status === 'Inprogress',
                    'text-r300 bg-r50/80': status === 'Pending',
                  }"
                  class="rounded-full px-8 py-2 text-xs"
                >
                  {{ status }}
                </div>
              </td>
              <td class="px-6">{{ location }}</td>
              <td>${{ price }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-span-12 rounded-2xl bg-white px-6 py-8 lg:col-span-4">
        <div class="flex items-center justify-between pb-6">
          <p class="heading-4">To Do List</p>
          <div
            class="bg flex cursor-pointer items-center justify-start gap-2 rounded-full border border-n40 bg-n10 px-4 py-2 text-sm font-medium text-n300"
          >
            <p>See More</p>
            <PhCaretRight />
          </div>
        </div>
        <div class="relative h-px">
          <div
            class="line-horizontal absolute left-0 top-0 h-full w-full"
          ></div>
        </div>
        <div class="flex flex-col gap-6 pt-6 font-medium text-n300">
          <div
            v-for="(item, idx) in dashboardTodolist"
            :key="idx"
            class="flex items-start justify-start gap-3"
          >
            <span class="text-2xl">
              <PhCheckSquare />
            </span>
            <p class="lg:max-w-[400px]">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhArrowUpRight,
  PhCalendarPlus,
  PhCaretRight,
  PhCheckSquare,
  PhEnvelopeSimple,
  PhPencilSimpleLine,
  PhPhone,
  PhPlus,
  PhStar,
} from "@phosphor-icons/vue";
import {
  dashboardTodolist,
  orderInfo,
  thisMonthSummeryCard,
  userInformationCard,
} from "../../data/data";
import reviewImg from "/images/review_img.png";
import people1 from "/images/review_people_1.png";
import people2 from "/images/review_people_2.png";
import people3 from "/images/review_people_3.png";
import WeeklyWorksSummery from "../../components/dashboard/WeeklyWorksSummery.vue";
import TotalEarningOverview from "../../components/dashboard/TotalEarningOverview.vue";
</script>

<style scoped></style>
