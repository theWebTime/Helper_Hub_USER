<template>
    <section class="relative overflow-hidden">
      <div class="absolute -bottom-40 rtl:-right-20 ltr:-left-20 size-[550px] rounded-full bg-eb100/20 max-lg:hidden"></div>
      <div class="absolute -top-40 rtl:right-32 ltr:left-32 h-[600px] w-[550px] rounded-full bg-r50/30 max-lg:hidden"></div>
      <div class="absolute -bottom-60 rtl:-left-40 ltr:-right-40 -z-10 size-[500px] rounded-full bg-eb50/20 max-lg:hidden"></div>
      <div class="flex h-full items-center justify-start max-lg:justify-center">
        <LeftSideSlider />
        <div class="flex h-full w-full max-w-[530px] flex-col items-start justify-start max-lg:px-6 max-lg:pt-40 lg:ml-20 xl:max-w-[380px] xxl:max-w-[530px] 3xl:ml-40">
          <div>
            <router-link to="/"><img :src="logo" alt="" /></router-link>
          </div>
          <div class="flex items-center justify-start pt-8">
            <p class="heading-5">Reset Your Password</p>
            <img :src="icon2" alt="" />
          </div>
          <form class="flex w-full flex-col pt-6" @submit.prevent="otpStep ? handleVerifyOtp() : handleSendOtp()">
            <div class="flex flex-col gap-6">
              <!-- Mobile Field: always visible, disables when OTP step -->
              <div class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3">
                <span class="text-2xl !leading-none"><PhPhone /></span>
                <input
                  v-model="mobile"
                  type="text"
                  placeholder="Enter Your Mobile"
                  class="w-full text-sm text-n300 outline-none"
                  autocomplete="tel"
                  required
                  :disabled="otpStep"
                />
              </div>
              <!-- OTP Field: only visible after OTP sent -->
              <div v-if="otpStep" class="flex w-full items-center justify-start gap-3 rounded-2xl border border-n30 px-4 py-3 relative">
                <span class="text-2xl !leading-none"><PhLock /></span>
                <input
                  v-model="otp"
                  type="text"
                  placeholder="Enter OTP"
                  class="w-full text-sm text-n300 outline-none"
                  required
                />
                <span v-if="otpTimer > 0" class="ml-2 text-xs text-gray-500 absolute right-4">
                  {{ Math.floor(otpTimer / 60) }}:{{ (otpTimer % 60).toString().padStart(2, '0') }}
                </span>
                <span v-else class="ml-2 text-xs text-red-500 absolute right-4">OTP expired</span>
              </div>
              <!-- Password Fields: only visible after OTP is verified -->
              <div v-if="showPasswordFields" class="flex flex-col gap-4">
                <div class="flex w-full items-center gap-3 rounded-2xl border border-n30 px-4 py-3">
                  <span class="text-2xl !leading-none"><PhLock /></span>
                  <input
                    v-model="password"
                    type="password"
                    placeholder="New Password"
                    class="w-full text-sm text-n300 outline-none"
                    required
                  />
                </div>
                <div class="flex w-full items-center gap-3 rounded-2xl border border-n30 px-4 py-3">
                  <span class="text-2xl !leading-none"><PhLock /></span>
                  <input
                    v-model="c_password"
                    type="password"
                    placeholder="Confirm Password"
                    class="w-full text-sm text-n300 outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div v-if="error" class="py-2 text-red-500 text-sm">{{ error }}</div>
            <div v-if="successMsg" class="py-2 text-green-600 text-sm">{{ successMsg }}</div>
            <div class="w-full">
              <router-link to="/sign-in" class="block py-3 text-end text-sm font-medium text-n300">
                Back to Sign In
              </router-link>
              <button
                type="submit"
                class="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-b300 px-4 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] sm:px-8"
                :disabled="loading || (otpStep && otpTimer === 0)"
              >
                <span class="relative z-10">
                  <span v-if="!loading">
                    {{
                      !otpStep
                        ? "Send OTP"
                        : showPasswordFields
                        ? "Reset Password"
                        : "Verify OTP"
                    }}
                  </span>
                  <span v-else>
                    {{
                      !otpStep
                        ? "Sending..."
                        : showPasswordFields
                        ? "Resetting..."
                        : "Verifying..."
                    }}
                  </span>
                </span>
              </button>
              <button
                v-if="otpStep && otpTimer === 0 && !showPasswordFields"
                @click.prevent="handleResendOtp"
                class="mt-2 text-xs text-b300 underline"
                :disabled="loading"
                type="button"
              >
                Resend OTP
              </button>
              <div class="flex items-center justify-center gap-2 py-3 text-sm font-medium">
                <p class="text-n300">Don’t have an account?</p>
                <router-link to="/sign-up" class="text-b300 underline">
                  Sign Up with Email
                </router-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { PhLock, PhPhone } from "@phosphor-icons/vue";
  import logo from "/images/logo.png";
  import icon2 from "/images/victor_icon.png";
  import LeftSideSlider from "../components/authentication/LeftSideSlider.vue";
  import { sendResetPasswordOtp, resetPasswordWithOtp } from '../api/auth';
  
  const mobile = ref('');
  const otp = ref('');
  const password = ref('');
  const c_password = ref('');
  const error = ref('');
  const loading = ref(false);
  const otpStep = ref(false);
  const showPasswordFields = ref(false);
  const successMsg = ref('');
  
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
    error.value = '';
    successMsg.value = '';
    loading.value = true;
    try {
      const mobilePattern = /^[6-9][0-9]{9}$/;
      if (!mobilePattern.test(mobile.value)) {
        error.value = "Mobile number must start with 6, 7, 8, or 9 and be 10 digits.";
        loading.value = false;
        return;
      }
      const res = await sendResetPasswordOtp(mobile.value);
      if (res.data && res.data.success) {
        successMsg.value = res.data.message || "OTP sent! Please check your mobile.";
        otpStep.value = true;
        startOtpTimer();
      } else {
        error.value = res.data?.message || "Failed to send OTP. Please try again.";
      }
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Failed to send OTP. Please try again.';
    } finally {
      loading.value = false;
    }
  };
  
  const handleResendOtp = async () => {
    otp.value = "";
    await handleSendOtp();
  };
  
  const handleVerifyOtp = async () => {
    if (!showPasswordFields.value) {
      // Verify OTP step
      if (otpTimer.value <= 0) {
        error.value = "OTP expired! Please resend OTP.";
        return;
      }
      error.value = '';
      successMsg.value = '';
      loading.value = true;
      try {
        // Simulate OTP verification by requesting backend to check (do not reset password yet)
        // We'll use the resetPasswordWithOtp API with only mobile/otp and dummy password to check validity
        const res = await resetPasswordWithOtp({
          mobile: mobile.value,
          otp: otp.value,
          password: "dummy123!", // Not used, just for checking
          c_password: "dummy123!",
        }, true); // Pass a flag to indicate only verify OTP, not reset
        if (res.data && res.data.success) {
          stopOtpTimer();
          showPasswordFields.value = true;
          successMsg.value = "OTP verified! Please enter your new password.";
        } else {
          error.value = res.data?.message || 'Invalid OTP.';
        }
      } catch (err: any) {
        error.value = err.response?.data?.message || 'OTP verification failed.';
      } finally {
        loading.value = false;
      }
    } else {
      // Now, reset password step
      if (!password.value || !c_password.value) {
        error.value = "Enter and confirm your new password.";
        return;
      }
      if (password.value.length < 6) {
        error.value = "Password must be at least 6 characters.";
        return;
      }
      if (password.value !== c_password.value) {
        error.value = "Passwords do not match.";
        return;
      }
      error.value = '';
      successMsg.value = '';
      loading.value = true;
      try {
        const res = await resetPasswordWithOtp({
          mobile: mobile.value,
          otp: otp.value,
          password: password.value,
          c_password: c_password.value,
        });
        if (res.data && res.data.success) {
          successMsg.value = "Password reset successfully! Please login.";
          setTimeout(() => {
            router.push('/sign-in');
          }, 1500);
        } else {
          error.value = res.data?.message || 'Failed to reset password.';
        }
      } catch (err: any) {
        error.value = err.response?.data?.message || 'Failed to reset password.';
      } finally {
        loading.value = false;
      }
    }
  };
  </script>