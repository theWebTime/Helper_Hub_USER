<template>
  <section class="mt-[100px] pt-15">
    <div
      class="4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10"
    >
      <div class="col-span-12 flex items-center justify-between gap-4">
        <h4 class="heading-4">Edit Profile Information</h4>
      </div>
      <div class="col-span-12 flex items-center justify-start gap-4">
        <div class="max-md:overflow-hidden">
          <div
            class="hexagon-styles my-[calc(120px*0.5/2)] h-[calc(120px*0.57736720554273)] w-[120px] rounded-[calc(120px/36.75)] bg-b50 before:rounded-[calc(120px/18.75)] after:rounded-[calc(120px/18.75)]"
          >
            <div class="absolute -top-[24px] left-[4px]">
              <div
                class="hexagon-styles z-10 my-[calc(110px*0.5/2)] h-[calc(110px*0.57736720554273)] w-[110px] rounded-[calc(110px/50)] bg-b300 before:rounded-[calc(110px/50)] after:rounded-[calc(110px/50)]"
              >
                <div class="absolute -top-[23px] left-1 z-20">
                  <div
                    class="hexagon-styles z-10 my-[calc(102px*0.5/2)] h-[calc(102px*0.57736720554273)] w-[102px] rounded-[calc(102px/50)] bg-b50 before:rounded-[calc(102px/50)] after:rounded-[calc(102px/50)]"
                  >
                    <div
                      class="r-hex3 absolute -left-0.5 -top-[23px] z-30 inline-block w-[105px] overflow-hidden"
                    >
                      <div class="r-hex-inner3">
                        <div
                          class="expertImgBig r-hex-inner-3 before:h-[105px] before:bg-cover"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <label
            class="cursor-pointer rounded-xl bg-n900 px-5 py-2 text-white"
            htmlFor="profilePic"
          >
            Change
          </label>
          <input type="file" class="hidden rounded-lg" id="profilePic" />
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Name:</p>
        <input
          type="text"
          placeholder="Jhon Dhoe"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Area:</p>
        <input
          type="text"
          placeholder="New york"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Email:</p>
        <input
          type="text"
          placeholder="example@mail.com"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Post Code:</p>
        <input
          type="text"
          placeholder="1234"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Phone:</p>
        <input
          type="text"
          placeholder="+1234567"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12 sm:col-span-6">
        <p class="pb-3 font-medium text-n100">Address:</p>
        <input
          type="text"
          placeholder="3517 W. Gray St. Utica, Pennsylvani"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">About:</p>
        <textarea
          placeholder="We understand that every space is unique, which is why we tailor our cleaning services to meet the specific needs and preferences of each client. Our team of experienced and trained cleaners uses industry-leading techniques, equipment, and eco-friendly products to deliver superior results while minimizing environmental impact."
          class="min-h-40 w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        ></textarea>
      </div>
      <div class="col-span-12">
        <button
          class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
        >
          <span class="relative z-10">Save Changes</span>
        </button>
      </div>
    </div>
  </section>

  <section class="pt-6 sm:pt-10">
    <div
      class="4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10"
    >
      <div class="col-span-12">
        <h5 class="heading-5 border-b border-n30 pb-6">Update email</h5>
        <p class="pt-6 font-medium text-n100">
          Your current email address is
          <span class="text-b300">sara.cruz@example.com</span>
        </p>
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Your Address*</p>
        <input
          type="text"
          placeholder="example@mail.com"
          class="w-full rounded-xl border border-b50 bg-n10 p-3 outline-none placeholder:text-n800"
        />
      </div>
      <div class="col-span-12">
        <button
          class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
        >
          <span class="relative z-10">Save Changes</span>
        </button>
      </div>
    </div>
  </section>

  <section class="pt-6 sm:pt-10">
    <div
      class="4xl:large-container grid grid-cols-12 gap-4 rounded-2xl bg-white p-4 max-4xl:mx-4 sm:gap-6 sm:p-10"
    >
      <div class="col-span-12 border-b border-n30 pb-6">
        <h5 class="heading-5">Update password</h5>
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Current Password*</p>
        <div
          class="relative flex items-center justify-between rounded-xl border border-b50 bg-n10 p-3 placeholder:text-n800"
        >
          <input
            id="oldPassword"
            type="password"
            placeholder="Enter Old Password"
            class="w-full bg-transparent outline-none"
          />
          <button>
            <i
              id="toggleOldPasswordButton"
              class="ph ph-eye-slash hideOldPassword cursor-pointer text-xl !leading-none"
            ></i>
          </button>
        </div>
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Enter Password*</p>
        <div
          class="relative flex items-center justify-between rounded-xl border border-b50 bg-n10 p-3 placeholder:text-n800"
        >
          <input
            id="newPassword"
            type="password"
            placeholder="Enter Old Password"
            class="w-full bg-transparent outline-none"
          />
          <button>
            <i
              id="toggleNewPasswordButton"
              class="ph ph-eye-slash hideOldPassword cursor-pointer text-xl !leading-none"
            ></i>
          </button>
        </div>
      </div>
      <div class="col-span-12">
        <p class="pb-3 font-medium text-n100">Enter New Password*</p>
        <div
          class="relative flex items-center justify-between rounded-xl border border-b50 bg-n10 p-3 placeholder:text-n800"
        >
          <input
            id="confirmNewPassword"
            type="password"
            placeholder="Enter Old Password"
            class="w-full bg-transparent outline-none"
          />
          <button>
            <i
              id="toggleConfirmNewPasswordButton"
              class="ph ph-eye-slash hideOldPassword cursor-pointer text-xl !leading-none"
            ></i>
          </button>
        </div>
      </div>
      <div class="col-span-12">
        <button
          class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
        >
          <span class="relative z-10">Save Changes</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
