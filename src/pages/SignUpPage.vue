<template>
  <section class="relative overflow-hidden">
    <div
      class="absolute -bottom-40 rtl:-right-20 ltr:-left-20 size-[550px] rounded-full bg-eb100/20 max-lg:hidden"
    ></div>

    <div
      class="absolute -top-40 rtl:right-32 ltr:left-32 h-[600px] w-[550px] rounded-full bg-r50/30 max-lg:hidden"
    ></div>

    <div
      class="absolute -bottom-60 rtl:-left-40 ltr:-right-40 -z-10 size-[500px] rounded-full bg-eb50/20 max-lg:hidden"
    ></div>

    <div class="flex h-full items-center justify-start max-lg:justify-center">
      <LeftSideSlider />
      <div
        class="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 max-sm:pt-32 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40"
      >
        <div class="">
          <router-link to="/">
            <img :src="logo" alt="" />
          </router-link>
        </div>
        <div class="w-full">
          <div class="flex items-center justify-start pt-8">
            <p class="heading-5">Welcome to Helper Hub</p>
            <img :src="icon2" alt="" />
          </div>
          <form class="flex w-full flex-col pt-6" @submit.prevent="otpStep ? handleVerifyOtpAndRegister() : handleSendOtp()">
            <div class="flex flex-col gap-6">
              <div class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                <span class="text-2xl !leading-none"><PhUser /></span>
                <input v-model="name" type="text" placeholder="Enter Your Name" class="w-full text-sm text-n300 outline-none" required />
              </div>
              <div class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                <span class="text-2xl !leading-none"><PhEnvelopeSimple /></span>
                <input v-model="email" type="email" placeholder="Enter Your Email" class="w-full text-sm text-n300 outline-none" required />
              </div>
              <div class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                <span class="text-2xl !leading-none"><PhLock /></span>
                <input v-model="password" type="password" placeholder="Enter Password" class="w-full text-sm text-n300 outline-none" required />
              </div>
              <div class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                <span class="text-2xl !leading-none"><PhLock /></span>
                <input v-model="c_password" type="password" placeholder="Confirm Password" class="w-full text-sm text-n300 outline-none" required />
              </div>
              <div class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                <span class="text-2xl !leading-none"><PhPhone /></span>
                <input v-model="mobile" type="text" placeholder="Enter Your Mobile" class="w-full text-sm text-n300 outline-none" required :disabled="otpStep"/>
              </div>
              <div v-if="otpStep" class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3 relative">
                <span class="text-2xl !leading-none"><PhLock /></span>
                <input v-model="otp" type="text" placeholder="Enter OTP" class="w-full text-sm text-n300 outline-none" required />
                <span v-if="otpTimer > 0" class="ml-2 text-xs text-gray-500 absolute right-4">
                  {{ Math.floor(otpTimer / 60) }}:{{ (otpTimer % 60).toString().padStart(2, '0') }}
                </span>
                <span v-else class="ml-2 text-xs text-red-500 absolute right-4">OTP expired</span>
              </div>
            </div>
            <div v-if="error" class="py-2 text-red-500 text-sm">{{ error }}</div>
            <div v-if="successMsg" class="py-2 text-green-600 text-sm">{{ successMsg }}</div>
            <button type="submit"
              class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700"
              :disabled="loading || (otpStep && otpTimer === 0)">
              <span class="relative z-10">
                <span v-if="!loading">{{ otpStep ? "Verify & Register" : "Send OTP" }}</span>
                <span v-else>{{ otpStep ? "Registering..." : "Sending..." }}</span>
              </span>
            </button>
            <button
              v-if="otpStep && otpTimer === 0"
              @click.prevent="handleResendOtp"
              class="mt-2 text-xs text-b300 underline"
              :disabled="loading"
              type="button"
            >
              Resend OTP
            </button>
          </form>
        </div>
        <div>
          <div class="flex items-center justify-center gap-2 py-3 text-sm font-medium">
            <p class="text-n300">Already have an account?</p>
            <router-link to="/sign-in" class="text-b300 underline">
              Sign in here
            </router-link>
          </div>
          <!-- <button class="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 bg-white py-3">
            <img :src="google" alt="" />
            <span class="text-sm">Google</span>
          </button>
          <button class="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-n30 bg-white py-3">
            <img :src="facebook" alt="" />
            <span class="text-sm">Facebook</span>
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import facebook from "/images/facebook_icon.png";
import google from "/images/google_icon.png";
import logo from "/images/logo.png";
import icon2 from "/images/victor_icon.png";
import LeftSideSlider from "../components/authentication/LeftSideSlider.vue";
import {
  PhBriefcase,
  PhEnvelopeSimple,
  PhImage,
  PhLinkedinLogo,
  PhLock,
  PhMapPin,
  PhUser,
  PhPhone
} from "@phosphor-icons/vue";
import { useRouter } from "vue-router";
import { sendRegisterOtp, verifyRegisterOtp } from "../api/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const c_password = ref("");
const mobile = ref("");
const otp = ref("");
const error = ref("");
const successMsg = ref("");
const loading = ref(false);
const otpStep = ref(false);

const otpTimer = ref(0);
let timerInterval: ReturnType<typeof setInterval> | null = null;

const router = useRouter();

const startOtpTimer = () => {
  otpTimer.value = 120;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (otpTimer.value > 0) {
      otpTimer.value--;
    } else {
      clearInterval(timerInterval!);
      timerInterval = null;
    }
  }, 1000);
};

const stopOtpTimer = () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};

onUnmounted(() => {
  stopOtpTimer();
});

const handleSendOtp = async () => {
  error.value = "";
  successMsg.value = "";
  loading.value = true;
  try {
    // Basic frontend validation for mobile as per backend logic
    const mobilePattern = /^[6-9][0-9]{9}$/;
    if (!mobilePattern.test(mobile.value)) {
      error.value = "Mobile number must start with 6, 7, 8, or 9 and be 10 digits.";
      loading.value = false;
      return;
    }
    const res = await sendRegisterOtp(mobile.value);
    if (res.data && res.data.success) {
      otpStep.value = true;
      successMsg.value = res.data.message || "OTP sent! Please check your mobile.";
      startOtpTimer();
    } else {
      error.value = res.data?.message || "Failed to send OTP";
    }
  } catch (err: any) {
    error.value =
      err.response?.data?.message ||
      "Failed to send OTP.";
  } finally {
    loading.value = false;
  }
};

const handleResendOtp = async () => {
  otp.value = "";
  await handleSendOtp();
};

const handleVerifyOtpAndRegister = async () => {
  if (otpTimer.value <= 0) {
    error.value = "OTP expired! Please resend OTP.";
    return;
  }
  error.value = "";
  successMsg.value = "";
  loading.value = true;
  try {
    const res = await verifyRegisterOtp({
      name: name.value,
      email: email.value,
      mobile: mobile.value,
      password: password.value,
      c_password: c_password.value,
      otp: otp.value,
    });
    if (res.data && res.data.success && res.data.data?.token) {
      stopOtpTimer();
      localStorage.setItem("token", res.data.data.token);
      router.push("/booking");
    } else {
      error.value = res.data?.message || "Registration failed. Invalid server response.";
    }
  } catch (err: any) {
    error.value =
      err.response?.data?.message ||
      "Registration failed.";
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>