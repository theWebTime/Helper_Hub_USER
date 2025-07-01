<template>
  <section class="stp-30 sbp-30 relative">
    <div
      class="absolute left-0 top-0 w-full bg-g300 max-md:h-1/2 md:bottom-0 md:w-1/2"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-full bg-r300 max-md:h-1/2 md:top-0 md:w-1/2"
    ></div>
    <div
      class="container relative z-10 grid grid-cols-12 overflow-hidden max-md:gap-6"
    >
      <div
        class="col-span-12 grid grid-cols-6 max-sm:pb-6 sm:max-md:pb-24 md:col-span-5"
      >
        <div class="col-span-6 rounded-xl border bg-g75 p-8 lg:col-span-5">
          <div class="flex items-start justify-between">
            <p class="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
              PRO
            </p>
            <div class="">
              <div class="">
                <img :src="reviewImg" alt="" class="w-[75px]" />
              </div>
              <div class="flex gap-2 pt-2">
                <p
                  class="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300"
                >
                  <PhStar weight="fill" /> 4.7
                </p>
                <div class="text-sm text-n300">
                  <p class="">(81)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center py-6">
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
                              class="expertImg5 r-hex-inner-3 before:h-[190px] before:bg-cover"
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
            <div class="pt-3">
              <div class="flex flex-col items-center justify-start gap-3">
                <h5 class="heading-5">I am an Expert</h5>
              </div>
              <p class="pt-2 text-center text-n500 sm:px-3">
                I'm a Skilled Professional, Ready to Assist with Expertise and
                Dedication in Your Task.
              </p>
            </div>
          </div>
          <div
            class="flex items-center justify-between border-b border-n40 pb-6"
          >
            <div class="flex items-center justify-start gap-2">
              <span class="text-2xl !leading-none">
                <PhClock />
              </span>

              <p>Full-Time</p>
            </div>
            <div class="flex items-center justify-start gap-2">
              <span class="text-2xl !leading-none">
                <PhChartLine />
              </span>
              <p>10+ Years</p>
            </div>
          </div>

          <div class="flex w-full items-center justify-center pt-8">
            <LinkButton link="/sign-up" text="Find Work" :is-green="true" />
          </div>
        </div>
      </div>

      <div
        class="col-span-12 flex flex-col items-start max-sm:pt-6 md:col-span-5 md:col-start-8"
      >
        <div class="col-span-12 grid grid-cols-6 sm:col-span-5">
          <div
            class="col-span-6 rounded-xl border bg-r50 p-8 lg:col-span-5 lg:col-start-2"
          >
            <div class="flex items-start justify-between">
              <p class="rounded-full bg-y300 px-2 py-1 text-sm font-medium">
                PRO
              </p>
              <div class="">
                <div class="">
                  <img :src="reviewImg" alt="" class="w-[75px]" />
                </div>
                <div class="flex gap-2 pt-2">
                  <p
                    class="flex items-center justify-start gap-2 text-sm font-bold !leading-none text-o300"
                  >
                    <PhStar weight="fill" /> 4.7
                  </p>
                  <div class="text-sm text-n300">
                    <p class="">(81)</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col items-center justify-center py-6">
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
                                class="expertImg2 r-hex-inner-3 before:h-[190px] before:bg-cover"
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
              <div class="pt-3">
                <div class="flex flex-col items-center justify-start gap-3">
                  <h5 class="heading-5">I am an Expert</h5>
                </div>
                <p class="pt-2 text-center text-n500 sm:px-3">
                  I'm a Skilled Professional, Ready to Assist with Expertise and
                  Dedication in Your Task.
                </p>
              </div>
            </div>
            <div
              class="flex items-center justify-between border-b border-n40 pb-6"
            >
              <div class="flex items-center justify-start gap-2">
                <span class="text-2xl !leading-none">
                  <PhClock />
                </span>
                <p>Full-Time</p>
              </div>
              <div class="flex items-center justify-start gap-2">
                <span class="text-2xl !leading-none">
                  <PhChartLine />
                </span>
                <p>10+ Years</p>
              </div>
            </div>

            <div class="flex w-full items-center justify-center pt-8">
              <LinkButton
                link="/find-workers"
                text="Start Hiring"
                :is-yellow="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhChartLine, PhClock, PhStar } from "@phosphor-icons/vue";
import LinkButton from "../ui/LinkButton.vue";
import reviewImg from "/images/review_img.png";
import badge from "/images/verify-badge2.png";
</script>

<style scoped></style>
