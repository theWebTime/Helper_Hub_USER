<template>
  <section class="sbp-30">
    <div
      class="container grid grid-cols-12 border border-primary-20 rounded-xl lg:rounded-2xl mt-24 sm:mt-28 shadow-[0px_4px_26px_0px_rgba(222,222,222,0.25)]"
    >
      <div
        :class="{
          'max-lg:translate-x-0 max-lg:visible max-lg:z-10': toggle,
          'max-lg:translate-x-[-100%] max-lg:invisible ': !toggle,
        }"
        class="lg:col-span-3 max-lg:absolute py-8 border-r bg-white duration-500"
      >
        <div class="flex justify-between items-center px-6 pb-5">
          <div class="flex justify-start items-center gap-3">
            <img
              :src="userAvatar"
              alt=" user avatar"
              class="rounded-xl w-12 h-12 shadow-[0px_4px_9px_0px_rgba(100,218,255,0.39)]"
            />
            <h5 class="heading-5">Chat</h5>
          </div>
          <div class="flex justify-end items-center gap-2">
            <span
              class="text-2xl bg-slate-100 px-2 rounded-xl block cursor-pointer"
            >
              <PhDotsThreeOutline weight="fill" />
            </span>
            <span
              class="text-2xl block lg:hidden cursor-pointer"
              @click="handleClick"
            >
              <PhXCircle />
            </span>
          </div>
        </div>
        <div
          class="flex justify-start items-center bg-slate-100 gap-2 py-3 px-5 rounded-xl mx-6"
        >
          <span class="block text-slate-400 text-xl">
            <PhMagnifyingGlass />
          </span>
          <input
            placeholder="Search"
            class="outline-none bg-transparent w-full"
          />
        </div>
        <div class="flex flex-col max-h-[460px] overflow-auto pt-5">
          <div
            v-for="{
              id,
              name,
              img,
              isNew,
              newMessage,
              lastMessageTime,
              myReply,
            } in chatList"
            class="py-5 px-2 flex justify-start gap-3 items-center pl-6 cursor-pointer hover:bg-primary-20"
            :key="id"
          >
            <img :src="img" :alt="name" class="rounded-xl w-12 h-12" />
            <div class="">
              <div class="flex justify-start items-center gap-2 pb-1">
                <p>{{ name }}</p>

                <p
                  v-if="isNew"
                  class="text-sm font-medium text-white px-1.5 py-1 !leading-none rounded-full bg-p1"
                >
                  3
                </p>
              </div>
              <div class="text-sm flex justify-start items-center">
                <p v-if="isNew">{{ newMessage }}</p>

                <p v-else class="text-slate-400">{{ myReply }}</p>

                <p class="flex justify-start items-center pl-2">
                  <span class="w-2 h-2 block rounded-full bg-slate-300"></span>
                  <span class="block pl-1 !leading-none text-t88">
                    {{ lastMessageTime }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-9">
        <div
          class="flex justify-between items-center px-4 sm:px-6 py-5 bg-slate-100 border-b"
        >
          <div class="flex justify-start items-center gap-2">
            <i class="lg:hidden text-2xl" @click="handleClick">
              <PhList />
            </i>
            <img
              :src="userAvatar"
              alt="user avatar"
              class="rounded-xl w-12 h-12 shadow-[0px_4px_9px_0px_rgba(100,218,255,0.39)]"
            />
            <div>
              <p class="xl-body">Piter Maio</p>
              <p class="text-sm text-[#1ED400]">online</p>
            </div>
          </div>
          <div class="flex">
            <span class="text-xl text-s1 pr-3 cursor-pointer">
              <PhPhone />
            </span>
            <span class="text-xl text-s1 cursor-pointer">
              <PhVideoCamera />
            </span>
          </div>
        </div>
        <div class="p-6 flex justify-between items-center flex-col gap-7">
          <div class="flex justify-start items-start gap-2 w-full">
            <img
              :src="userAvatar"
              alt="user avatar"
              class="w-10 h-10 rounded-xl"
            />
            <div class="py-3 px-5 rounded-b-xl rounded-tr-xl bg-slate-200">
              <p class="text-base text-slate-700">
                Hello! Have you seen my backpack anywhere in office?
              </p>
              <p class="text-sm text-slate-400">15:42</p>
            </div>
          </div>
          <div
            class="flex justify-start flex-row-reverse items-end gap-2 w-full"
          >
            <img
              :src="userAvatar"
              alt="user avatar"
              class="w-10 h-10 rounded-xl"
            />
            <div
              class="py-3 px-5 rounded-b-xl rounded-tr-xl bg-b300 text-white"
            >
              <p class="text-base">Thank you for work, see you!</p>
              <p class="text-sm text-white/50 flex justify-start items-center">
                <span class="pr-1">
                  <PhChecks />
                </span>
                15:42
              </p>
            </div>
          </div>
          <div class="flex justify-start items-start gap-2 w-full">
            <img
              :src="userAvatar"
              alt="user avatar"
              class="w-10 h-10 rounded-xl"
            />
            <div class="py-3 px-5 rounded-b-xl rounded-tr-xl bg-slate-200">
              <p class="text-base text-slate-700 max-w-[500px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <p class="text-sm text-slate-400">15:42</p>
            </div>
          </div>
          <div
            class="flex justify-start flex-row-reverse items-end gap-2 w-full"
          >
            <img
              :src="userAvatar"
              alt="user avatar"
              class="w-10 h-10 rounded-xl"
            />
            <div
              class="py-3 px-5 rounded-b-xl rounded-tr-xl bg-b300 text-white"
            >
              <p class="text-base">A page when looking at its layout.</p>
              <p class="text-sm text-white/50 flex justify-start items-center">
                <span class="pr-1">
                  <PhChecks />
                </span>
                15:40
              </p>
            </div>
          </div>
        </div>

        <div
          class="mx-6 mb-7 rounded-xl px-4 pb-5 max-lg:md:pt-3 lg:rounded-2xl"
        >
          <div
            class="flex items-center justify-between gap-4 pt-2 max-md:flex-col lg:pt-6"
          >
            <div class="">
              <img
                alt="user pic"
                class="max-w-[60px] rounded-xl object-cover max-md:hidden"
                :src="userAvatar"
              />
            </div>
            <div
              class="flex w-full items-center justify-between gap-4 rounded-xl bg-[#F6F5F8] p-4 max-md:flex-col lg:rounded-2xl"
            >
              <input
                class="w-full bg-transparent outline-none"
                placeholder="Write a comment...."
              />
              <div
                class="text-t88 flex items-center justify-between gap-1 text-2xl max-md:hidden xl:gap-3"
              >
                <div class="cursor-pointer">
                  <label htmlFor="chat-file-file">
                    <span class="ph ph-image cursor-pointer">
                      <PhImage />
                    </span>
                  </label>
                  <input class="hidden" id="chat-file-file" type="file" />
                </div>
                <button class="ph ph-gif">
                  <PhGif />
                </button>
                <button class="ph ph-smiley">
                  <PhSmiley />
                </button>
              </div>
            </div>
            <div class="flex items-center justify-end gap-4 max-md:w-full">
              <div
                class="text-t88 flex items-center justify-between gap-3 text-2xl md:hidden"
              >
                <div class="cursor-pointer">
                  <label htmlFor="chat-file">
                    <span class="ph ph-image cursor-pointer">
                      <PhImage />
                    </span>
                  </label>
                  <input class="hidden" id="chat-file" type="file" />
                </div>
                <button class="ph ph-gif">
                  <PhGif />
                </button>
                <button class="ph ph-smiley">
                  <PhSmiley />
                </button>
              </div>
              <button
                class="l-body rounded-xl bg-n900 px-6 py-2 text-2xl !leading-none text-white duration-500 hover:bg-r300 md:px-8 md:py-4"
              >
                <PhPaperPlaneTilt weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  PhChecks,
  PhDotsThreeOutline,
  PhGif,
  PhImage,
  PhList,
  PhMagnifyingGlass,
  PhPaperPlaneTilt,
  PhPhone,
  PhSmiley,
  PhVideoCamera,
  PhXCircle,
} from "@phosphor-icons/vue";
import { ref } from "vue";
import userAvatar from "/images/chat1.png";
import { chatList } from "../data/data";
const toggle = ref(false);

function handleClick() {
  toggle.value = !toggle.value;
}
</script>

<style scoped></style>
